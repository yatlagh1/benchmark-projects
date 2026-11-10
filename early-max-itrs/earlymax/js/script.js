document.addEventListener('DOMContentLoaded', function () {
    // -------------------------------
    // STICKY LESSON SECTIONS
    // -------------------------------
    const ensureStickySectionStyles = () => {
      if (document.getElementById('sticky-heading-section-styles')) return;

      const style = document.createElement('style');
      style.id = 'sticky-heading-section-styles';
      style.textContent = `
        main.lesson-content .sticky-heading-section {
          display: flow-root;
          position: relative;
        }

        main.lesson-content .sticky-heading-section > .sticky-top {
          top: var(--sticky-header-height, 0px) !important;
        }
      `;
      document.head.appendChild(style);
    };

    const wrapStickyLessonSections = () => {
      const contentAreas = document.querySelectorAll('main.lesson-content');

      contentAreas.forEach((contentArea) => {
        const contentRoot =
          contentArea.children.length === 1 && contentArea.firstElementChild?.tagName === 'DIV'
            ? contentArea.firstElementChild
            : contentArea;

        const stickyHeadings = Array.from(contentRoot.children).filter((child) =>
          child.matches?.('h2.sticky-top, h3.sticky-top')
        );

        stickyHeadings.forEach((heading) => {
          if (heading.parentElement?.classList.contains('sticky-heading-section')) return;

          const section = document.createElement('section');
          section.className = 'sticky-heading-section';
          contentRoot.insertBefore(section, heading);

          let node = heading;
          while (node) {
            const nextNode = node.nextSibling;
            section.appendChild(node);

            if (
              nextNode?.nodeType === Node.ELEMENT_NODE &&
              nextNode.matches('h2.sticky-top, h3.sticky-top')
            ) {
              break;
            }

            node = nextNode;
          }
        });
      });
    };

    ensureStickySectionStyles();
    wrapStickyLessonSections();

    // -------------------------------
    // PAGINATION PREVIOUS STATE
    // -------------------------------
    const prevButtons = document.querySelectorAll('.top-nav-btn-prev');
    const updatePreviousState = () => {
      prevButtons.forEach((btn) => {
        const hasPrevAttr = btn.getAttribute('data-has-prev');
        const hasPrev = hasPrevAttr === null ? window.history.length > 1 : hasPrevAttr === 'true';

        btn.classList.toggle('is-available', hasPrev);
        btn.classList.toggle('is-unavailable', !hasPrev);
        btn.setAttribute('aria-disabled', String(!hasPrev));
      });
    };

    prevButtons.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        if (btn.classList.contains('is-unavailable')) {
          event.preventDefault();
        }
      });
    });

    updatePreviousState();
    window.addEventListener('pageshow', updatePreviousState);

    // -------------------------------
    // STICKY HEADER + BACK TO TOP
    // -------------------------------
    const originalSequence = document.querySelector('.sequence');
    const sequenceWrap = document.querySelector('.top-sequence-wrap');
    const mainTitle = document.querySelector('h1');

    // Guard against duplicate injection if script runs more than once
    const existingSticky = document.querySelector('.sticky-header-shell');
    const existingBTT = document.querySelector('.back-to-top');
  
    if (originalSequence && mainTitle && !existingSticky && !existingBTT) {
      // Clone the actual top header so sticky version always matches it exactly.
      const stickyShell = sequenceWrap.cloneNode(true);
      stickyShell.classList.add('sticky-header-shell');
      stickyShell.classList.remove('mb-2');

      const stickyMenuBtn = stickyShell.querySelector('.menu-button');
      if (stickyMenuBtn) {
        stickyMenuBtn.setAttribute('type', 'button');
        stickyMenuBtn.removeAttribute('href');
        stickyMenuBtn.setAttribute('data-bs-toggle', 'offcanvas');
        stickyMenuBtn.setAttribute('data-bs-target', '#offcanvasExample');
        stickyMenuBtn.setAttribute('aria-controls', 'offcanvasExample');
      }

      document.body.appendChild(stickyShell);
  
      // Back To Top Button
      const backToTopBtn = document.createElement('button');
      backToTopBtn.className = 'back-to-top';
      backToTopBtn.innerHTML = '<span class="material-icons">keyboard_arrow_up</span>';
      backToTopBtn.title = 'Back to Top';
  
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  
      document.body.appendChild(backToTopBtn);
  
      let ticking = false;
  
      // Use a stable, absolute trigger point in the document
      let triggerPoint = 0;
      const computeTriggerPoint = () => {
        // When top of H1 has scrolled past ~100px from top, show sticky
        triggerPoint = mainTitle.offsetTop - 100;
      };
  
      const setStickyHeightVar = () => {
        const headerHeight = stickyShell.offsetHeight;
        document.documentElement.style.setProperty('--sticky-header-height', headerHeight + 'px');
      };
  
      function updateStickyState() {
        const scrollY = window.scrollY;
  
        if (scrollY > triggerPoint) {
          stickyShell.classList.add('is-visible');
          backToTopBtn.classList.add('is-visible');
          setStickyHeightVar();
        } else {
          stickyShell.classList.remove('is-visible');
          backToTopBtn.classList.remove('is-visible');
          document.documentElement.style.setProperty('--sticky-header-height', '0px');
        }
  
        ticking = false;
      }
  
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateStickyState);
          ticking = true;
        }
      };
  
      const onResize = () => {
        computeTriggerPoint();
        // If visible, recalc height var (height can change with wrapping)
        if (stickyShell.classList.contains('is-visible')) setStickyHeightVar();
        // Also refresh state to avoid edge-case flicker
        updateStickyState();
      };
  
      computeTriggerPoint();
      updateStickyState();
  
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);
    }
  
    // -------------------------------
    // DRAGGABLE MODALS (mouse + touch)
    // -------------------------------
    const modals = document.querySelectorAll('.modal');
  
    modals.forEach((modalEl) => {
      const dialog = modalEl.querySelector('.modal-dialog');
      const header = modalEl.querySelector('.modal-header');
      if (!dialog || !header) return;
  
      // Add visual indicator for dragging (only once)
      const title = header.querySelector('.modal-title');
      const alreadyHasIcon = header.querySelector('.modal-drag-icon');
      if (title && !alreadyHasIcon) {
        const dragIcon = document.createElement('span');
        dragIcon.className = 'material-icons modal-drag-icon';
        dragIcon.title = 'Drag to move';
        dragIcon.textContent = 'drag_indicator';
        header.insertBefore(dragIcon, title);
      }
  
      let isDragging = false;
      let startX = 0,
        startY = 0,
        initialX = 0,
        initialY = 0;
  
      const getTranslate = () => {
        const style = window.getComputedStyle(dialog);
        const transform = style.transform;
  
        if (!transform || transform === 'none') {
          return { x: 0, y: 0 };
        }
  
        // DOMMatrix works with matrix() and matrix3d()
        const matrix = new DOMMatrix(transform);
        return { x: matrix.m41, y: matrix.m42 };
      };
  
      const beginDrag = (clientX, clientY, target) => {
        // Don’t drag when interacting with close buttons etc.
        if (target.closest('button')) return;
  
        isDragging = true;
        startX = clientX;
        startY = clientY;
  
        const t = getTranslate();
        initialX = t.x;
        initialY = t.y;
  
        dialog.style.transition = 'none';
        header.style.cursor = 'grabbing';
      };
  
      const moveDrag = (clientX, clientY) => {
        if (!isDragging) return;
  
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;
  
        dialog.style.transform = `translate(${initialX + deltaX}px, ${initialY + deltaY}px)`;
      };
  
      const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        header.style.cursor = '';
      };
  
      // Mouse
      header.addEventListener('mousedown', (e) => beginDrag(e.clientX, e.clientY, e.target));
      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        moveDrag(e.clientX, e.clientY);
      });
      document.addEventListener('mouseup', endDrag);
  
      // Touch
      header.addEventListener(
        'touchstart',
        (e) => {
          const touch = e.touches?.[0];
          if (!touch) return;
          beginDrag(touch.clientX, touch.clientY, e.target);
        },
        { passive: true }
      );
  
      document.addEventListener(
        'touchmove',
        (e) => {
          if (!isDragging) return;
          const touch = e.touches?.[0];
          if (!touch) return;
          moveDrag(touch.clientX, touch.clientY);
        },
        { passive: true }
      );
  
      document.addEventListener('touchend', endDrag);
  
      // Reset on close
      modalEl.addEventListener('hidden.bs.modal', () => {
        dialog.style.transform = '';
        dialog.style.transition = '';
        header.style.cursor = '';
        isDragging = false;
      });
    });
  });
  

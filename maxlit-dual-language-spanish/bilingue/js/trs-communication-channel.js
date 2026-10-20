/* 	TRS Communication Channel
 *
 *	A javascript library that allows for parsed html products to be communicated to the
 * 	parent Content Display Application.
 *
 *	This channel helps to facilitate:
 *		- The launching of ebooks
 *		- The launching of other digital products
 *
 *	@author Kevin Valentine
 *  @contributor Jason Yim
 */

(function(window) {
  'use strict'

  function define_channel() {

    function CommunicationChannel() {
      var self = this;

      if (window.frameElement && window.frameElement.localName == "iframe") {
        window.removeEventListener('message', _receivedMessage);
        window.addEventListener('message', _receivedMessage);
        this.parentApplicationAvailable = true;
      } else {
        console.log('This file is a local file and was not loaded by the iTRS/Content Display engine. The TRS Communications Channel will launch all links locally. You can view that this is working correctly opening up your browsers console.');
        this.parentApplicationAvailable = false;
      }

      /* Wait 5 seconds before we set up value. Gives the page time to do any other rendering it needs */
      // setTimeout(function() {
        self.container = document.querySelector("body");
        self.elementsArray = document.querySelectorAll('[data-extLink]');
        self.init();
      // }, 5000);
    }

    /*	init
     *	
     *	The initialize function for the Communication Channel.
     *	Adds an event listener to all elements with the property of [data-extlink]
     *
     */
    CommunicationChannel.prototype.init = function() {
      var self = this;

      for (var k = 0; k < this.elementsArray.length; k++) {
        this.elementsArray[k].addEventListener("click", function(e) {
          e.preventDefault();
          var dataset = e.currentTarget.dataset;
          if (self.parentApplicationAvailable) {
            window.parent.postMessage({
              type: dataset.type,
              operation: 'changePage',
              data: { extlink: dataset.extlink }
            }, window.location.origin);
          }else if(dataset.extlink == 'javascript'){
            checkCookie();
            var cname = 'session_id';
            var environment = 'contentreview';
            var session_id = getCookie(cname);            
            var product = {format: this.getAttribute('data-type'), xcode: this.getAttribute('data-code'), pages: this.getAttribute('data-pages')};
            product.format = product.format.replace(/\W/g, '').toLowerCase();
            switch (product.format) {
              case 'epocketchart':
              case 'pocketchart':
                product.url = 'https://epocketchart-' + environment + '.benchmarkuniverse.com/#create/' + session_id + '/' + product.xcode;
                break;
              case 'ebook':
              case 'becreader':
              case 'htmlbecreader':
                product.url = 'https://becreader-' + environment + '.benchmarkuniverse.com/#init/' + session_id + '/cfg-teacher-shelf/ref-create/asset-ebook/prod-' + product.xcode+(!!product.pages ? '/page:'+product.pages : '');
                break;
              case 'html':
              case 'htmlitrs':
              case 'itrs':
              case 'pdf':
                product.url = 'https://itrs-' + environment + '.benchmarkuniverse.com/#init/' + session_id + '/' + product.xcode;
                break;
            }
            window.open(product.url, '_blank');
          }else{
            console.log('TRS Communications Channel is launching ' + dataset.extlink + ' locally.');
            window.open(dataset.extlink, '_parent');
          }
        });
      }
    }

    return new CommunicationChannel();

  }

  if (typeof CommunicationChannel === "undefined") {
    window.CommunicationChannel = define_channel();
  } else {
    console.log("A TRS Communications Channel is already defined.");
  }
})(window);







function setCookie(cname,cvalue,days) {
  var d = new Date();
  days = !!days ? days : 1;
  var hours = 12;
  var duration = days > 1 ? (days*24*60*60*1000) : hours*60*60*1000;
  d.setTime(d.getTime() + duration);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";  
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
 
function checkCookie() {
  var session_id = getCookie("session_id");  
  if(!session_id){
    var value = false;
    value = prompt('Session ID: ', '');
    setCookie('session_id', value);
  }
}
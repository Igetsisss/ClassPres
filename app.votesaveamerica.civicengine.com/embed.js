/*! iFrame Resizer (iframeSizer.min.js ) - v4.2.3 - 2019-10-31
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(f){if("undefined"!=typeof window){var e,l=0,m=!1,o=!1,v="message".length,I="[iFrameSizer]",x=I.length,F=null,r=window.requestAnimationFrame,g={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},M={},t=null,h={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){E("onMessage function not defined")},onResized:function(){},onScroll:function(){return!0}},z={};window.jQuery&&((e=window.jQuery).fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(t){return this.filter("iframe").each(function(e,n){s(n,t)}).end()}):T("","Unable to bind to jQuery, it is not fully loaded.")),"function"==typeof define&&define.amd?define([],q):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=q()),window.iFrameResize=window.iFrameResize||q()}function w(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function k(e,n,t){e.addEventListener(n,t,!1)}function O(e,n,t){e.removeEventListener(n,t,!1)}function a(e){return I+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function i(e){return M[e]?M[e].log:m}function R(e,n){d("log",e,n,i(e))}function T(e,n){d("info",e,n,i(e))}function E(e,n){d("warn",e,n,!0)}function d(e,n,t,i){!0===i&&"object"==typeof window.console&&console[e](a(n),t)}function n(n){function e(){t("Height"),t("Width"),A(function(){P(b),S(y),s("onResized",b)},b,"init")}function t(e){var n=Number(M[y]["max"+e]),t=Number(M[y]["min"+e]),i=e.toLowerCase(),o=Number(b[i]);R(y,"Checking "+i+" is in range "+t+"-"+n),o<t&&(o=t,R(y,"Set "+i+" to min value")),n<o&&(o=n,R(y,"Set "+i+" to max value")),b[i]=""+o}function i(e){return p.substr(p.indexOf(":")+v+e)}function a(e,n){!function(e,n,t){z[t]||(z[t]=setTimeout(function(){z[t]=null,e()},n))}(function(){B("Send Page Info","pageInfo:"+function(){var e=document.body.getBoundingClientRect(),n=b.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}(),e,n)},32,n)}function r(e){var n=e.getBoundingClientRect();return N(y),{x:Math.floor(Number(n.left)+Number(F.x)),y:Math.floor(Number(n.top)+Number(F.y))}}function o(e){var n=e?r(b.iframe):{x:0,y:0},t={x:Number(b.width)+n.x,y:Number(b.height)+n.y};R(y,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):E(y,"Unable to scroll to requested position, window.parentIFrame not found"):(F=t,d(),R(y,"--"))}function d(){!1!==s("onScroll",F)?S(y):H()}function s(e,n){return W(y,e,n)}var c,u,f,l,m,g,h,w,p=n.data,b={},y=null;"[iFrameResizerChild]Ready"===p?function(){for(var e in M)B("iFrame requested init",L(e),document.getElementById(e),e)}():I===(""+p).substr(0,x)&&p.substr(x).split(":")[0]in M?(m=p.substr(x).split(":"),g=m[1]?parseInt(m[1],10):0,h=M[m[0]]&&M[m[0]].iframe,w=getComputedStyle(h),b={iframe:h,id:m[0],height:g+function(e){if("border-box"!==e.boxSizing)return 0;var n=e.paddingTop?parseInt(e.paddingTop,10):0,t=e.paddingBottom?parseInt(e.paddingBottom,10):0;return n+t}(w)+function(e){if("border-box"!==e.boxSizing)return 0;var n=e.borderTopWidth?parseInt(e.borderTopWidth,10):0,t=e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0;return n+t}(w),width:m[2],type:m[3]},y=b.id,M[y]&&(M[y].loaded=!0),(l=b.type in{true:1,false:1,undefined:1})&&R(y,"Ignoring init message from meta parent page"),!l&&(f=!0,M[u=y]||(f=!1,E(b.type+" No settings for "+u+". Message was: "+p)),f)&&(R(y,"Received: "+p),c=!0,null===b.iframe&&(E(y,"IFrame ("+b.id+") not found"),c=!1),c&&function(){var e,t=n.origin,i=M[y]&&M[y].checkOrigin;if(i&&""+t!="null"&&!(i.constructor===Array?function(){var e=0,n=!1;for(R(y,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}():(e=M[y]&&M[y].remoteHost,R(y,"Checking connection is from: "+e),t===e)))throw new Error("Unexpected message received from: "+t+" for "+b.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(M[y]&&M[y].firstRun&&M[y]&&(M[y].firstRun=!1),b.type){case"close":C(b.iframe);break;case"message":!function(e){R(y,"onMessage passed: {iframe: "+b.iframe.id+", message: "+e+"}"),s("onMessage",{iframe:b.iframe,message:JSON.parse(e)}),R(y,"--")}(i(6));break;case"autoResize":M[y].autoResize=JSON.parse(i(9));break;case"scrollTo":o(!1);break;case"scrollToOffset":o(!0);break;case"pageInfo":a(M[y]&&M[y].iframe,y),function(){function e(n,t){function i(){M[r]?a(M[r].iframe,r):o()}["scroll","resize"].forEach(function(e){R(r,n+e+" listener for sendPageInfo"),t(window,e,i)})}function o(){e("Remove ",O)}var r=y;e("Add ",k),M[r]&&(M[r].stopPageInfo=o)}();break;case"pageInfoStop":M[y]&&M[y].stopPageInfo&&(M[y].stopPageInfo(),delete M[y].stopPageInfo);break;case"inPageLink":!function(e){var n,t=e.split("#")[1]||"",i=decodeURIComponent(t),o=document.getElementById(i)||document.getElementsByName(i)[0];o?(n=r(o),R(y,"Moving to in page link (#"+t+") at x: "+n.x+" y: "+n.y),F={x:n.x,y:n.y},d(),R(y,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):R(y,"In page link #"+t+" not found and window.parentIFrame not found"):R(y,"In page link #"+t+" not found")}(i(9));break;case"reset":j(b);break;case"init":e(),s("onInit",b.iframe);break;default:e()}}())):T(y,"Ignored: "+p)}function W(e,n,t){var i=null,o=null;if(M[e]){if("function"!=typeof(i=M[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function p(e){var n=e.id;delete M[n]}function C(e){var n=e.id;if(!1!==W(n,"onClose",n)){R(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){E(e)}W(n,"onClosed",n),R(n,"--"),p(e)}else R(n,"Close iframe cancelled by onClose event")}function N(e){null===F&&R(e,"Get page position: "+(F={x:window.pageXOffset!==f?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==f?window.pageYOffset:document.documentElement.scrollTop}).x+","+F.y)}function S(e){null!==F&&(window.scrollTo(F.x,F.y),R(e,"Set page position: "+F.x+","+F.y),H())}function H(){F=null}function j(e){R(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),N(e.id),A(function(){P(e),B("reset","reset",e.iframe,e.id)},e,"reset")}function P(n){function t(e){o||"0"!==n[e]||(o=!0,R(i,"Hidden iFrame detected, creating visibility listener"),function(){function n(){Object.keys(M).forEach(function(e){!function(n){function e(e){return"0px"===(M[n]&&M[n].iframe.style[e])}M[n]&&(t=M[n].iframe,null!==t.offsetParent)&&(e("height")||e("width"))&&B("Visibility change","resize",M[n].iframe,n);var t}(e)})}function t(e){R("window","Mutation observed: "+e[0].target+" "+e[0].type),c(n,16)}var i=w();i&&function(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new i(t).observe(e,n)}()}())}function e(e){!function(e){n.id?(n.iframe.style[e]=n[e]+"px",R(n.id,"IFrame ("+i+") "+e+" set to "+n[e]+"px")):R("undefined","messageData id not set")}(e),t(e)}var i=n.iframe.id;M[i]&&(M[i].sizeHeight&&e("height"),M[i].sizeWidth&&e("width"))}function A(e,n,t){t!==n.type&&r&&!window.jasmine?(R(n.id,"Requesting animation frame"),r(e)):e()}function B(e,n,t,i,o){var r,a=!1;i=i||t.id,M[i]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(r=M[i]&&M[i].targetOrigin,R(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(I+n,r)):E(i,"["+e+"] IFrame("+i+") not found"),o&&M[i]&&M[i].warningTimeout&&(M[i].msgTimeout=setTimeout(function(){!M[i]||M[i].loaded||a||(a=!0,E(i,"IFrame has not responded within "+M[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))},M[i].warningTimeout)))}function L(e){return e+":"+M[e].bodyMarginV1+":"+M[e].sizeWidth+":"+M[e].log+":"+M[e].interval+":"+M[e].enablePublicMethods+":"+M[e].autoResize+":"+M[e].bodyMargin+":"+M[e].heightCalculationMethod+":"+M[e].bodyBackground+":"+M[e].bodyPadding+":"+M[e].tolerance+":"+M[e].inPageLinks+":"+M[e].resizeFrom+":"+M[e].widthCalculationMethod}function s(t,e){function n(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],E(u,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var i,o,r,a,d,s,c,u=(""===(o=t.id)&&(t.id=(i=e&&e.id||h.id+l++,null!==document.getElementById(i)&&(i+=l++),o=i),m=(e||{}).log,R(o,"Added missing iframe ID: "+o+" ("+t.src+")")),o);u in M&&"iFrameResizer"in t?E(u,"Ignored iFrame, already setup."):(c=(c=e)||{},M[u]={firstRun:!0,iframe:t,remoteHost:t.src&&t.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(c),Object.keys(c).forEach(n,c),function(e){for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(M[u][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:h[n])}(c),M[u]&&(M[u].targetOrigin=!0===M[u].checkOrigin?""===(s=M[u].remoteHost)||"file://"===s?"*":s:"*"),function(){switch(R(u,"IFrame scrolling "+(M[u]&&M[u].scrolling?"enabled":"disabled")+" for "+u),t.style.overflow=!1===(M[u]&&M[u].scrolling)?"hidden":"auto",M[u]&&M[u].scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=M[u]?M[u].scrolling:"no"}}(),function(){function e(e){1/0!==M[u][e]&&0!==M[u][e]&&(t.style[e]=M[u][e]+"px",R(u,"Set "+e+" = "+M[u][e]+"px"))}function n(e){if(M[u]["min"+e]>M[u]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),"number"!=typeof(M[u]&&M[u].bodyMargin)&&"0"!==(M[u]&&M[u].bodyMargin)||(M[u].bodyMarginV1=M[u].bodyMargin,M[u].bodyMargin=M[u].bodyMargin+"px"),r=L(u),(d=w())&&(a=d,t.parentNode&&new a(function(e){e.forEach(function(e){Array.prototype.slice.call(e.removedNodes).forEach(function(e){e===t&&C(t)})})}).observe(t.parentNode,{childList:!0})),k(t,"load",function(){B("iFrame.onload",r,t,f,!0),function(){var e=M[u]&&M[u].firstRun,n=M[u]&&M[u].heightCalculationMethod in g;!e&&n&&j({iframe:t,height:0,width:0,type:"init"})}()}),B("init",r,t,f,!0),M[u]&&(M[u].iframe.iFrameResizer={close:C.bind(null,M[u].iframe),removeListeners:p.bind(null,M[u].iframe),resize:B.bind(null,"Window resize","resize",M[u].iframe),moveToAnchor:function(e){B("Move to anchor","moveToAnchor:"+e,M[u].iframe,u)},sendMessage:function(e){B("Send Message","message:"+(e=JSON.stringify(e)),M[u].iframe,u)}}))}function c(e,n){null===t&&(t=setTimeout(function(){t=null,e()},n))}function u(){"hidden"!==document.visibilityState&&(R("document","Trigger event: Visiblity change"),c(function(){b("Tab Visable","resize")},16))}function b(n,t){Object.keys(M).forEach(function(e){(function(e){return M[e]&&"parent"===M[e].resizeFrom&&M[e].autoResize&&!M[e].firstRun})(e)&&B(n,t,document.getElementById(e),e)})}function y(){k(window,"message",n),k(window,"resize",function(){!function(e){R("window","Trigger event: "+e),c(function(){b("Window "+e,"resize")},16)}("resize")}),k(document,"visibilitychange",u),k(document,"-webkit-visibilitychange",u)}function q(){function t(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),s(n,e),i.push(n))}var i;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!r;e+=1)r=window[n[e]+"RequestAnimationFrame"];r||R("setup","RequestAnimationFrame not supported")}(),y(),function(e,n){switch(i=[],function(e){e&&e.enablePublicMethods&&E("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(e),typeof n){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(n||"iframe"),t.bind(f,e));break;case"object":t(e,n);break;default:throw new TypeError("Unexpected data type ("+typeof n+")")}return i}}}();
//# sourceMappingURL=iframeResizer.map

if (window) {
  window.civicengine = {
    // In prod: https://app.customer.civicengine.com (or whatever customer's prod main app url is)
    appHost: 'https://app.votesaveamerica.civicengine.com',
    availableWidgets: [
      { name: 'address', className: 'civicengine-address', path: '/w/address' },
      { name: 'pledge', className: 'civicengine-pledge', path: '/w/pledge' },
    ],
    renderWidget: function(element, options) {
      const settings = Object.assign({ type: 'address' }, options)
      const utmRegex = /utm_/gi

      if (!element) {
        console.error('Widget must be attached to a DOM element.')
        return
      }

      const widgetSettings = this.availableWidgets.find(
        w => w.name === settings.type,
      )

      if (!widgetSettings) {
        console.error(`Unknown widget type '${options.type}'.`)
        return
      }

      const urlEncodeOptions = function(o) {
        return Object.keys(o)
          .map(function(k) {
            return (
              o[k] && encodeURIComponent(k) + '=' + encodeURIComponent(o[k])
            )
          })
          .filter(function(e) {
            return e
          })
          .join('&')
      }

      const urlDecodeUtmOptions = function(s) {
        if (!s.match(utmRegex)) {
          return
        }

        let options = {}
        s.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(_, key, value) {
          if (key.match(utmRegex)) {
            options[key] = decodeURIComponent(value)
          }
        })
        return options
      }

      const extractAttributes = (element) => {
        const attributes = {}
        const supported = [
          'default_locale',
          'input_custom_field',
          'input_email',
          'input_first_name',
          'input_last_name',
          'input_locale',
          'input_phone',
          'input_notifications_opt_in',
          'theme',
          'utm_campaign',
          'utm_content',
          'utm_medium',
          'utm_source',
          'utm_term',
        ]

        supported.forEach((key) => {
          const value = element.getAttribute(`data-${key.split('_').join('-')}`)

          if (value) {
            attributes[key] = value
          }
        })

        return attributes
      }

      const iframeEl = document.createElement('iframe')
      iframeEl.className = 'civicengine-embed-loaded'

      iframeEl.scrolling = 'no'

      const widgetOptions = extractAttributes(element)

      let utmOptionsFromUrl = {}
      if (!Object.keys(widgetOptions).join('').match(utmRegex)) {
        utmOptionsFromUrl = urlDecodeUtmOptions(window.location.search)
      }

      iframeEl.src = `${this.appHost}${widgetSettings.path}/?${urlEncodeOptions(
        Object.assign({}, widgetOptions, utmOptionsFromUrl)
      )}`
      iframeEl.style =
        'background: transparent; border: none; overflow: hidden; min-width: 100%;'
      const heightCalculationMethod = widgetOptions['input_custom_field'] !== undefined ? 'taggedElement' : 'lowestElement';
      iframeEl.onload = function (e) {
        iFrameResize({ heightCalculationMethod: heightCalculationMethod }, e.target)
      }
      element.parentNode.replaceChild(iframeEl, element)
    },

    init: function() {
      /* BEGIN modal script */
      function attachModalListeners(modalElm) {
        const listener = () => toggleModal(modalElm)
        modalElm
          .querySelector('.ce-embed-modal__close-btn')
          .addEventListener('click', listener)
        modalElm
          .querySelector('.ce-embed-modal__overlay')
          .addEventListener('click', listener)
      }

      function detachModalListeners(modalElm) {
        const listener = () => toggleModal(modalElm)
        modalElm
          .querySelector('.ce-embed-modal__close-btn')
          .removeEventListener('click', listener)
        modalElm
          .querySelector('.ce-embed-modal__overlay')
          .removeEventListener('click', listener)
      }

      function toggleModal(modal) {
        const currentState = modal.style.display

        // If modal is visible, hide it. Else, display it.
        if (currentState === 'none') {
          document.body.classList.add('ce-embed-modal__body--open')
          modal.style.display = 'block'
          attachModalListeners(modal)
        } else {
          document.body.classList.remove('ce-embed-modal__body--open')
          modal.style.display = 'none'
          detachModalListeners(modal)
        }
      }
      /* END modal script */

      function receiveMessage(event) {
        // Do we trust the sender of this message?  (might be
        // different from what we originally opened, for example).

        if (event.origin !== this.appHost) {
          return
        }

        const { destPath } = event.data

        if (!destPath) {
          // console.warn('[CE] Unknown path')
          return
        }

        const src = `${this.appHost}${destPath}`
        const html = `<div class="ce-embed-modal" style="display: none">
          <div class="ce-embed-modal__overlay">
            <button title="Close" class="ce-embed-modal__close-btn">&times;</button>
          </div>
          <div class="ce-embed-modal__content">
            <iframe
              src="${src}"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>`

        document.body.insertAdjacentHTML('beforeend', html)

        const modal = document.querySelector('.ce-embed-modal')

        toggleModal(modal)
      }

      window.addEventListener(
        'message',
        receiveMessage.bind(window.civicengine),
        false,
      )

      // Attach any widgets
      for (let i = 0; i < this.availableWidgets.length; i++) {
        document
          .querySelectorAll(`.${this.availableWidgets[i].className}`)
          .forEach(el => {
            this.renderWidget(el, { type: this.availableWidgets[i].name })
            if (!document.body.classList.contains('page-civicengine-embed-loaded')){
              document.body.classList.add('page-civicengine-embed-loaded')
            }
          })
      }
    },
  }

  window.addEventListener(
    'load',
    window.civicengine.init.bind(window.civicengine),
  )
}

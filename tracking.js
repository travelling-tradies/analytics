/**
 * Google tag manager/optimize
 **/

// google optimize
ga('require', 'GTM-5T8RKZX');

/**
 * Google analytics event tracking
 **/

var matches = function(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

document.addEventListener('DOMContentLoaded', function() {
  // delegate click tracking to the document body
  document.body.addEventListener('click', function(e) {
    // generic click event tracking
    var el = e.target;
    var category = 'dom-element';
    var action = 'click';
    var label = '';
    if (el.tagName) {
     label += el.tagName;
    }
    if (el.id) {
     label += '#' + el.id ;
    }
    if (el.className) {
     label += '.' + el.className.replace(' ', '.');
    }
    console.debug('GA tracking click event:', category, action, label);
    ga('send', 'event', category, action, label);

    // track all form submits
    // squarespace hijacks form submit, so we work off clicking submit buttons
    if (matches(el, '[type="submit"]')) {
      console.debug('GA tracking form submit button clicked');
      ga('send', 'event', 'form', 'submit');
    }

    return true;
  });
});

/**
 * Hotjar
 **/

//Hotjar heatmap tracking code
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:998613,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

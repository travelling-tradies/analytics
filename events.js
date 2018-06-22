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
     label += target.tagName;
    }
    if (el.id) {
     label += '#' + target.id ;
    }
    if (el.className) {
     label += '.' + target.className.replace(' ', '.');
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

document.addEventListener('DOMContentLoaded', function() {
  // generic click event tracking
  document.body.addEventListener('click', function(e) {
    var target = e.target;
    var category = 'dom-element';
    var action = 'click';
    var label = '';
    if (target.tagName) {
     label += target.tagName;
    }
    if (target.id) {
     label += '#' + target.id ;
    }
    if (target.className) {
     label += '.' + target.className.replace(' ', '.');
    }
    console.debug('GA tracking click event:', category, action, label);
    ga('send', 'event', category, action, label);
    return true;
  });

  // track all form submits
  document.querySelectorAll('[type="submit"]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      console.debug('GA tracking form submit button clicked');
      ga('send', 'event', 'form', 'submit');
    });
  });
});

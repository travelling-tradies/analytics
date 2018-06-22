document.addEventListener('DOMContentLoaded', function() {
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
});

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	}
});

var FED = FED || {};

FED.init = function() {

  $('<a>', {
    href: '#toggle-grid',
    id: 'toggle-grid',
    text: 'Toggle Grid',
    click: function(e) {
      $('#grid').slideToggle();
      e.preventDefault();
    }
  }).prependTo('body');
  
  $('.past-events h3').wrapInner('<a href="#"></a>').bind('click', function(e) {
    $(this).siblings('.details').slideToggle(350);
    e.preventDefault();
  });
  
  var $logo = $('#header h1');
  $logo.find('abbr').delay(250).animate({
    top: '-10px'
  }, 1500, 'easeInOutElastic', function(){
    $logo.find('span').animate({
      opacity: 1
    }, 1000);
  });

};

$(document).ready(FED.init);
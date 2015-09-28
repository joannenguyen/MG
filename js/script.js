( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});
} )( jQuery );



$(document).ready(function(){

	// Custom jQuery code goes here
    $('#cssmenu2 > ul > li:has(ul)').addClass("has-sub");
    $('#cssmenu2 > ul > li > a').click(function() {

	var checkElement = $(this).next();

	$('#cssmenu2 li').removeClass('active');
	$(this).closest('li').addClass('active');	

	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('active');
		checkElement.slideUp('normal');
	}

	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#cssmenu2 ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
	}

	if (checkElement.is('ul')) {
		return false;
	} else {
		return true;	
	}
});

});




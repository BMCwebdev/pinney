jQuery.noConflict();
jQuery(document).ready(function($){
	//TABS...
	$(".tabs-framed-container").organicTabs({
		"speed": 200
	});
	//TINY NAV...
	$('#main-menu').tinyNav({
		active: 'current-page-item'
	});
	//ACCORDION...
	initDo();
	//CLEARING INPUT BOXES...
	$('input.Textbox, textarea.Textbox').focus(function() {
	  if (this.value == this.title) {
		 $(this).val("");
	  }}).blur(function() {
	  if (this.value == "") {
	     $(this).val(this.title);
	  }
	});
});
//INITILIZE ACCORDION...
function initDo(){
	jQuery(".accordion div.holder").each(function(){
		jQuery(this).hide();
	});
	jQuery(".accordion").find('div.holder:first').show();
	jQuery(".accordion").find('li a:first').addClass("active");
	
	jQuery(".accordion li a").click(function(){
		var checkElement = jQuery(this).next();									  
		if((checkElement.is('div.holder')) && (checkElement.is(':visible'))) {
	        return false;
        }
		if((checkElement.is('div.holder')) && (!checkElement.is(':visible'))) {
			 jQuery(this).parent().parent().find('div.holder:visible').slideUp('normal');
			 checkElement.slideDown('normal');
			 jQuery(this).parent().parent().find('a').removeClass('active');		
	 		 jQuery(this).addClass('active');
			 return false;
		}
    });
}

	

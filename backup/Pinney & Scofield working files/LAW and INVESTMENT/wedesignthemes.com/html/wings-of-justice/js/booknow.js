jQuery.noConflict();
function checkValid(objForm) {
	var This = jQuery(objForm);
		
	if(jQuery(This).valid()) {
		var action = jQuery(This).attr('action');
		var data_value = unescape(jQuery(This).serialize());
		jQuery.ajax({
			 type: "POST",
			 url:action,
			 data: data_value,
			 error: function (xhr, status, error) {
				 confirm('The page save failed.');
			   },
			  success: function (response) {
				jQuery(This).slideUp('slow');
				jQuery(This).prev('#booknow_message').slideDown('slow');
				jQuery(This).prev('#booknow_message').html(response);
			 }
		});
	}
	return false;
}
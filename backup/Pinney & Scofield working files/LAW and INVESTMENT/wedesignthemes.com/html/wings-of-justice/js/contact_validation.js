jQuery.noConflict();
jQuery(document).ready(function ($) {
	jQuery("#frmcontact").validate(
	{ 
	    //BLUR VALIDATION...
	   	onfocusout: function(element)
		{	
			$(element).valid();
		},		   
        rules:
		{ 
          txtcname:
		  {
          	required: true, minlength: 3
          },
		  txtemail:
		  {
			required: true, email: true
		  },		  
		  txtmessage:
		  {
			required: true, minlength: 10
		  }
        }
	});
	$('#frmcontact').submit(function () {
		var This = $(this);
		
		if($(This).valid()) {
			var action = $(This).attr('action');
			var data_value = unescape($(This).serialize());
			$.ajax({
				 type: "POST",
				 url:action,
				 data: data_value,
				 error: function (xhr, status, error) {
					 confirm('The page save failed.');
				   },
				  success: function (response) {
					$(This).slideUp('slow');
					$('#ajax_message').slideDown('slow');
					$('#ajax_message').html(response);
				 }
			});
		}
		return false;		
    });
});
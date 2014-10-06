jQuery.noConflict();
jQuery(document).ready(function ($) {
	jQuery("#footer-contact").validate(
	{ 
	    //Onblur Validation...
	   	onfocusout: function(element)
		{	
			$(element).valid();
		},		   
        rules:
		{ 
          cname:
		  {
          	required: true, minlength: 3, notEqual: "Name"
          },
		  cemail:
		  {
			required: true, email: true, notEqual: "E-mail"
		  },		  
		  cmessage:
		  {
			required: true,	minlength: 10, notEqual: "Message"
		  }
        }
	});
	
	//Footer ajax mail...
	$('#footer-contact').submit(function () {
		
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
					$('#contact_message').slideDown('slow');
					$('#contact_message').html(response);
				 }
			});
		}
		return false;
    });
	//NOT EQUAL METHOD...
	jQuery.validator.addMethod("notEqual", function(value, element, param) {
	  return this.optional(element) || value != param;
	}, "Please choose a value!");
});
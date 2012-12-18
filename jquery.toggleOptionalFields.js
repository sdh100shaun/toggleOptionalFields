/**
 * @author   Shaun Hare http://shaunhare.co.uk
 * @version  1.0 2009-11-02
 * @abstract jquery plugin as requested by Malarkey (http://stuffandnonsense.co.uk)  to have effect as 
 * described in http://stuffandnonsense.co.uk/blog/about/trimming_form_fields_repost/
 * 
 * basic usage:
 *					 $([form]).toggleOptionalFields();
 * advanced usage:
 *  				$([form]).toggleOptionalFields({'showText':'[text to show fields]','hideText':'[text to display to hide fields]} etc..
 */


(function($) { // make available to jQuery only

	$.fn.toggleOptionalFields = function (options)
	{
	
			var self = this; 
			
			if(self.length==0)
			{
				return (self); 
			}
			
			
			var settings = $.extend({}, $.fn.toggleOptionalFields.defaults, options);

			 
		
			
			 	settings.container=self;
			 	toggleLink=newLink(settings);
		    
			
		    	
		    // Add the event handlers
		    	toggleLink.bind("click", function(e) {
		    		
				     $(this).text($(this).text() == settings.hideText ? settings.showText : settings.hideText);
				     $(self).find('.optional').toggle('fast');
		      		return false;
		    	}); 
		    			    
		 			
			
			function newLink(settings)
			{
				var newLink=$('<a href="#">'+settings.hideText+'</a>');
			    $(settings.container).prepend(newLink); 
			    return newLink;
			}
			
	
	};
	
	
	$.fn.toggleOptionalFields.defaults = {
			 
			 
			 'hideText':'Hide optional fields',
			 'showText':'Display optional fields'
					};
			
		

	
	})(jQuery);
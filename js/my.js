$(document).ready(function() {

      var owl = $("#owl-demo");
	  var owl1 = $("#owl-demo1");
	  var owl2 = $("#owl-demo2");
	  var owl3 = $("#owl-demo3");

      owl.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        
        itemsCustom : [
          [0, 1],
          [450, 1],
          [600, 2],
          [1600, 3]
        ],
        navigation : true

      });
	  
	  owl1.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        
        itemsCustom : [
          [0, 4],
          [450, 4],
          [600, 4],
        ],
        navigation : true

      });
	  
	  owl2.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        
        itemsCustom : [
          [0, 3],
          [450, 4],
          [600, 6],
          [1100, 8]
        ],
        navigation : true

      });
	  
	  owl3.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        
        itemsCustom : [
          [0, 3],
          [450, 4],
          [600, 6],
          [1100, 8]
        ],
        navigation : true

      });

		$(window).scroll(function(){
			var bo = $("body").scrollTop();
			if ( bo > 200 ) { $(".menu-fix").css("display", "block"); } else { $(".menu-fix").css("display", "none"); };
		})

    });
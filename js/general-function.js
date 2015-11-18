$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

$(document).ready(function() {
    $('.subtabs .subtab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.subtabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

$(document).ready(function(){
            var $navMenu = $('#nav-menu');
            
        $('#nav-icon3').click(function(){
            $(this).toggleClass('open');
            $navMenu.toggleClass('openScale');
        });
    });


//Fancybox
//
//$(document).ready(function() {
//		$(".fancybox")
//        .attr('rel', 'gallery')
//         .fancybox(
//			{padding : 0 }
//		);
//			
//		   	});

$(document).ready(function(){
 $(".fancybox").click(function() {
    console.log('fancy');
    $.fancybox.open([
        {
            href : '../images/SERVICE_TYPE_COLLECTION.png',                
            title : 'Icon for application'
        },
        {
            href : '../images/CV_AD.jpg',                
            title : 'Advertisement'
        },
        {
            href : '../images/CV_Brochure.png',                
            title : 'Brochure'
        }
     ,
        {
            href : '../images/swiftCEC.jpg',                
            title : 'Web site'
        }
     ,
        {
            href : '../images/Qnomy1.jpg',                
            title : 'Presentation'
        },
        {
            href : '../images/Qnomy2.jpg',                
            title : 'Presentation'
        },
        {
            href : '../images/Qnomy3.jpg',                
            title : 'Presentation'
        },
        {
            href : '../images/Qflow.jpg',                
            title : 'Brochure'
        },
        {
            href : '../images/AD_Futura.png',                
            title : 'Advertisement'
        },
        {
            href : '../images/collection1.jpg',                
            title : 'Illustration'
        },
        {
            href : '../images/collection2.jpg',                
            title : 'Illustration'
        },
        {
            href : '../images/collection3.jpg',                
            title : 'Illustration'
        },
        {
            href : '../images/Gap1.jpg',                
            title : 'UI for Gap touchpad'
        },
        {
            href : '../images/Gap2.jpg',                
            title : 'UI for Gap touchpad'
        }
    ], {
        padding : 0
    });
    
    return false;
    
});
});

jQuery('.fancybox-wrap').css('margin-top', '120px');

	$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});



$(document).ready(function(){
 $('#subtab1').load('tmpl/subtabUwx.html');
 $('#subtab2').load('tmpl/subtabNynjtc.html');
 $('#subtab3').load('tmpl/subtab100best.html');
 $('#subtab4').load('tmpl/subtabCampusview.html');
 $('#subtab5').load('tmpl/subtabDashboard.html');
 $('#subtab6').load('tmpl/subtabWireframes.html');
// $('#designSlider').load('tmpl/designImage.html');
})
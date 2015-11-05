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

$(function(){
 var $list = $('.rightArticle li');
 
if($list.text(' ')){
 console.log('ccc');
 $list.text('vvv');
}
});
//Fancybox

$(document).ready(function() {
		$(".fancybox").fancybox(
			{margin: [70, 0, 0, 0]}
		);
			
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
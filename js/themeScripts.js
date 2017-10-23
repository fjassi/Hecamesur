
jQuery(document).ready(function(){

	var
		_window = jQuery(window)
	;

	_window.on("resize", function(){
		resizeFunction();
        resizeFunctionMap();
	})
	resizeFunction();
    resizeFunctionMap();

	function resizeFunction(){
		var
			newWidth = _window.width()
		,	marginHalf = _window.width()/-2;
		;
		if (jQuery('body').hasClass('cherry-fixed-layout')) {
			var
				newWidth = jQuery('.main-holder').width()
			,	marginHalf =jQuery('.main-holder').width()/-2;
			;
		}

		jQuery('.wide').css({width: newWidth, "margin-left": marginHalf, left: '50%'});
	}


	jQuery('.sf-menu>li>a, a.btn').each(function(){
		$(this).attr("data-hover", $(this).text());
	});

	jQuery('a.btn').append(jQuery('<span></span>'));

    // $('a.btn')
    // .on('mouseenter', function(e) {
    //         var parentOffset = $(this).offset(),
    //         relX = e.pageX - parentOffset.left,
    //         relY = e.pageY - parentOffset.top;
    //         $(this).find('span').css({top:relY, left:relX})
    // })
    // .on('mouseout', function(e) {
    //         var parentOffset = $(this).offset(),
    //         relX = e.pageX - parentOffset.left,
    //         relY = e.pageY - parentOffset.top;
    //     $(this).find('span').css({top:relY, left:relX})
    // });
  // $('[href=#]').click(function(){return false});


function resizeFunctionMap(){
    if (_window.width()>1600) {
         if (!jQuery('body').hasClass('cherry-fixed-layout')) {
            var
              spanWidth = jQuery('.span12').width()/2
            ,   newWidth = jQuery('.span8').width()+((_window.width()/2)-spanWidth)
            ,   marginHalf = (_window.width()/2)-spanWidth;

            jQuery('.map-1').css({width: newWidth, "margin-left": marginHalf*-1});
        }

        else {
            jQuery('.map-1').css({width: '100%', "margin-left": 0});
        }
    }

    else {
         jQuery('.map-1').css({width: '100%', "margin-left": 0});
    }

}

});

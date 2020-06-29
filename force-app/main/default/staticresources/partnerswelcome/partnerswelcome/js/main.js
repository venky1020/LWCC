(function ($, window, document) {

    $(function () {

        $('#sticky_container').data('size', 'big');

        $('#nav .dropdown').each(function () {
            var dropdown = $(this),
                dropdown_width = dropdown.width(),
                parent = $(this).parent(),
                top_link = parent.find('a.top'),
                label = $(this).find('a.tier-label'),
                label_width = label.width();

            parent.mouseenter(function () {
                if (dropdown.length > 0) {
                    // center dropdown to top link
                    dropdown.css({
                        'left': (top_link.position().left + top_link.width() / 2) - dropdown_width / 2 + 25
                    });
                    dropdown.show();
                    top_link.addClass('active');
                }
            })
                .mouseleave(function () {
                    if (dropdown.length > 0) {
                        dropdown.hide();
                        top_link.removeClass('active');
                    }
                });
        });

        $(window).load(function () {
            EqualHeights($('#callouts .row p.text'));
            EqualHeights($('#page #blocks .widget'));

            // set height for nav container
            var logo_height = $('#header #logo').height();
            $('#header .head-col').height(logo_height + 10);
        });

        $(window).scroll(function () {
            if ($('.sub, .home').length > 0) {
                var logo = $('#logo'),
                    head_top_right = $('#head-right-top'),
                    top_container = $('#top-container'),
                    nav = $('#nav');

                if ($(document).scrollTop() > 0) {
                    if ($('#sticky_container').data('size') == 'big') {
                        $('#sticky_container').data('size', 'small');
                        top_container.css({
                            'padding': '8px 0 8px 20px'
                        });
                        logo.find('.not-sticky').fadeOut();
                        logo.find('.sticky').fadeIn();
                        head_top_right.fadeOut();
                        $('#sticky_container').stop().animate({
                            height: '42px'
                        }, 600);
                        $('.head-col').stop().animate({
                            height: '26px'
                        }, 600);
                        nav.stop().css('bottom', '3px').animate({
                            left: '35px'
                        }, 600);
                    }
                } else {
                    if ($('#sticky_container').data('size') == 'small') {
                        $('#sticky_container').data('size', 'big');
                        top_container.css({
                            'padding': '20px 0 20px 20px'
                        });
                        logo.find('.sticky').fadeOut();
                        logo.find('.not-sticky').fadeIn();
                        head_top_right.fadeIn();
                        $('#sticky_container').stop().animate({
                            height: '108px'
                        }, 600);
                        $('.head-col').stop().animate({
                            height: '76px'
                        }, 600);
                        nav.stop().css('bottom', '0').animate({
                            left: '0'
                        }, 600);
                    }
                }
            }
        });

    });

    // FUNCTIONS
    function EqualHeights(blocks) {
        //console.log('making equal heights');
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;

        $(blocks).each(function () {
            //console.log($(this));
            $el = $(this);
            topPostion = $el.position().top;
            if (currentRowStart != topPostion) {
                // we just came to a new row.  Set all the heights on the completed row
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                // set the variables for the new row
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                // another div on the current row.  Add it to the list and check if it's taller
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            // do the last row
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

})(jQuery, this, this.document); // fin.
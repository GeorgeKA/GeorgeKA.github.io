//Parallax Effect
$(document).ready(
    function() {
        $('section[data-type="background"]').each(
            function() {
                var bgSection = $(this);
                $(window).scroll(
                    function() {
                        var yPos = -($(window).scrollTop() / bgSection.data('scroll-speed'));
                        var coords = '50% ' + yPos + 'px';
                        bgSection.css({backgroundPosition: coords});
                    }
                )
            }
        )
    }
);
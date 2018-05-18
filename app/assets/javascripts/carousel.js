var carousel = {

    container: null,
    totalSlides: null,
    singleSlideHeight: null,
    currentSlide: null,

    // This method is responsible for initializing the carousel
    setup: function() {
        this.container          = $("#content");                            // Carousel.container = content
        this.singleSlideHeight  = $(this.container).children().height();    // Size of the height of the select elements, in this case the child elements of Carousel
        this.menu();                                                        // Setup of the side-menu
        this.goToSlide(1);                                                  // Setup Carousel and shows first slide
    },
    
    // The goToSlide method is responsible for animating to the next chosen slide, which also takes a parameter/argument.
    goToSlide: function(slideNum) {
        
        $(carousel.container).children().each(function(index) { 
            if(index === (slideNum -1)) {
                $(carousel.container).stop(true, true).animate({"top": - (carousel.singleSlideHeight * index ) + "px"}, 600);
            }
        });
        
        // The previous active class will be removed
        $("#menu > div").removeClass("active"); 

        $("#menu > div").each(function(index) {

            // If true, then this will add active class onto the chosen element.
            if(index === (slideNum -1)) {
                $(this).addClass("active");
            }

        });
        this.currentSlide = slideNum;
    },

    menu: function() {

        $("#menu > div").each(function(index) {
            $(this).click(function() {
                carousel.goToSlide(index + 1);

                // Adding and removing class for the menu hightlight-er. CSS takes control of it's positioning/transitioning
                $("#menu").removeAttr("class").addClass("highlight-step-" + index );
            });

        });

    }
};

$(function() {
    carousel.setup();
});

/* Window Load functions */

$(window).load(function(){
    setTimeout(function(){

    });
});

jQuery(window).scroll(function(){
  var sticky = jQuery('header'),
      scroll = jQuery(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

jQuery(document).ready(function(){

  // mobile menu 
  if(jQuery(window).width() < 1023){

    jQuery('.hambarger').click(function(){
      jQuery(this).toggleClass('active');
      jQuery('header .inner').toggleClass('open');
    });





    jQuery('header .inner>ul>li.drop>a').after('<span class="arrow"></span>');

    jQuery('.arrow').click(function () {
      var parentLi = jQuery(this).parent('li');
    
      if (parentLi.hasClass('active')) {
        parentLi.removeClass('active');
        parentLi.find('.dropmenu_image_link,.dropmenu_gallery_link').slideUp();
      } else {
        jQuery('header .inner>ul>li').removeClass('active');
        jQuery('.dropmenu_image_link,.dropmenu_gallery_link').slideUp();
    
        parentLi.addClass('active');
        parentLi.find('.dropmenu_image_link,.dropmenu_gallery_link').slideDown();
      }
    });

  }


    // for banner tab start //
    if(jQuery(window).width() > 1023){
      jQuery('.banner .tab_link ul li').hover(function(){
        var _tab = jQuery(this);
        jQuery('.banner .tab_link ul li').removeClass('active');
        _tab.addClass('active');

        var _tabcontants = _tab.attr('data-tab');
        jQuery('.banner .tab_contants li').removeClass('active');
        jQuery('.banner .tab_contants #'+_tabcontants).addClass('active');

      });      
      jQuery('.banner').mouseleave(function () {        
          jQuery('.banner .tab_link ul li').removeClass('active');    
          jQuery('.banner .tab_contants li').removeClass('active');    
      });      
    }else{
        jQuery('.banner .tab_link ul li:first-child').addClass('active');    
        jQuery('.banner .tab_contants li:first-child').addClass('active');    

        function switchTab(next = true) {
          let $activeLink = $('.banner .tab_link ul li.active');
          let $activeContent = $('.banner .tab_contants li.active');
  
          // Remove current active class
          $activeLink.removeClass('active');
          $activeContent.removeClass('active');
  
          // Determine next or previous element
          let $newLink = next ? $activeLink.next() : $activeLink.prev();
          let $newContent = next ? $activeContent.next() : $activeContent.prev();
  
          // Handle infinite loop
          if (!$newLink.length) {
              $newLink = next ? $('.banner .tab_link ul li:first-child') : $('.banner .tab_link ul li:last-child');
          }
          if (!$newContent.length) {
              $newContent = next ? $('.banner .tab_contants li:first-child') : $('.banner .tab_contants li:last-child');
          }
  
          // Set new active class
          $newLink.addClass('active');
          $newContent.addClass('active');
      }
  
      // Next button click
      $('.banner .next').click(function () {
          switchTab(true); // Move to the next tab
      });
  
      // Previous button click
      $('.banner .prev').click(function () {
          switchTab(false); // Move to the previous tab
      });

    }
    
    // for banner tab end //

// partnership_blobal_brand 
setTimeout(function(){
  var partnership_blobal_brand = jQuery(".partnership_blobal_brand .owl-carousel");
  partnership_blobal_brand.owlCarousel({
    items: 9,
    margin:0,
    ltr :true,
    loop: false,
    autoWidth: false,
    nav: false,
    responsive : {
      0 : {
        items: 2,
      },
      768 : {
        items: 5,
      },
      1024 : {
        items: 6,
      },
      1280 : {
        items: 7,
      },
      1400 : {
        items: 9,
      }

  } 
  });

},50);

if(jQuery('.invesment_slider').length > 0){
  // Initialize the Owl Carousel
  var invesment_slider = jQuery(".invesment_slider.owl-carousel");
  invesment_slider.owlCarousel({
    items: 3,
    margin: 0,
    loop: false, // Keep loop false for the disabling logic to work
    autoWidth: true,
    nav: false, // Disable default navigation buttons as we are using custom ones
    
  });

  jQuery('.fields_of_invesment .next').on('click', function () {
    invesment_slider.trigger('next.owl.carousel');
    updateNavState(); 
  });

  jQuery('.fields_of_invesment .prev').on('click', function () {
    invesment_slider.trigger('prev.owl.carousel');
    updateNavState(); 
  });

  function updateNavState() {
    var carousel = invesment_slider.data('owl.carousel');
    if (carousel.current() === 0) {
      jQuery('.fields_of_invesment .prev').addClass('disabled'); // Add a 'disabled' class
    } else {
      jQuery('.fields_of_invesment .prev').removeClass('disabled');
    }

    if (carousel.current() >= carousel.maximum()) {
      jQuery('.fields_of_invesment .next').addClass('disabled'); // Add a 'disabled' class
    } else {
      jQuery('.fields_of_invesment .next').removeClass('disabled');
    }
  }
  updateNavState();
  // Initialize the Owl Carousel end
}

// partnership_blobal_brand end
if(jQuery('.recent_news').length > 0){
  var recent_news = jQuery(".recent_news .owl-carousel");
  recent_news.owlCarousel({
    items: 2,
    margin:32,
    loop: false,
    nav: true, 
    navText: [
      '<img src="images/nav_right.svg" alt="Previous">',
      '<img src="images/nav_right.svg" alt="Next">'
    ],
        responsive : {
          0 : {
            margin:0,
            items: 1,
          },
          768 : {
            margin:15,
            items: 1,
          },
          1024 : {
            margin:20,
            items: 2,
          },
          1280 : {
            margin:32,
          }
      }
  });
}







});

$(window).resize(function(){

})


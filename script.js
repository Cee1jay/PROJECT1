// init Isotope
var $grid = $('.collection-list-mt-4').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

  var filterBtns =$('filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn')
    

    }

    )
  }
  import {StorefrontAccessToken} from '@shopify/shopify-api/dist/rest-resources/2022-04/index.js';
  const test_session = await Shopify.Utils.loadCurrentSession(request, response);
  const storefront_access_token = new StorefrontAccessToken({session: test_session});
  storefront_access_token.title = "Test";
  await storefront_access_token.save({});
/*
 * Cocoon -  Portfolio html  Template
 * Build Date: december 2017
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
 /* ------------------------------------- */
/*  TABLE OF CONTENTS
 /* ------------------------------------- */
/*   PRE LOADING                          */
/*   WOW                                 */
/*   SIDEBAR Menu                                */
/*   Portfolio Masonry                         */
/*   portfolio-filter                    */
/*   pop up                              */
/*   OWL CAROUSEL                        */
/*    MAPS                               */
/*   COUNTER JS              */



    /* ==============================================
/*  PRE LOADING
  =============================================== */

$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();

   
    /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });


    /* ==============================================
     portfolio-filter
     =============================================== */

    // filter items on button click

    var $grid = $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-sizer'
        }
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    $('#filtr-container').on( 'click', 'li', function(e) {
        e.preventDefault();
        $('#filtr-container li').removeClass('active');
        $(this).closest('li').addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    /* ==============================================
     pop up
     =============================================== */

    // portfolio-pop up

    $('.img-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
    });

   
});
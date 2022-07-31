import React from 'react';
import $ from 'jquery';
// import "https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js";
// import "https://code.jquery.com/jquery-2.2.4.min.js"
jquery.$(function(){
  
    window.jquery.sr = jquery.ScrollReveal();
  
    if (jquery.$(window).width() < 768) {
  
      if (jquery.$('.timeline-content').hasClass('js--fadeInLeft')) {
        jquery.$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      }
  
      jquery.sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
    } else {
      
      jquery.sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
      jquery.sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
    }
    
    jquery.sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
      jquery.sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
  
  });
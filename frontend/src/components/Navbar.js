import React, { useEffect } from 'react';
import '../styles/main.scss';

const Navbar = () => {
  useEffect(() => {
    let scrollTimeout;
    let isScrolling = false;
    $(document).ready(function() {
      const updateActiveNav = () => {
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scrollPos < 100) {
          $('.nav-link').removeClass('active');
          $('.nav-link[href="#home"]').addClass('active');
          return;
        }
        
        let activeSection = null;
        
        $('.section').each(function() {
          const section = $(this);
          const sectionTop = section.offset().top - 100;
          const sectionBottom = sectionTop + section.outerHeight();
          
          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            activeSection = section.attr('id');
            return false;
          }
        });
        
        if (activeSection) {
          $('.nav-link').removeClass('active');
          $(`.nav-link[href="#${activeSection}"]`).addClass('active');
        }
      };
      $('.nav-link').on('click', function(e) {
        e.preventDefault();
        if (isScrolling) return;
        
        const target = $(this).attr('href');
        if (target) {
          const targetSection = $(target);
          if (targetSection.length) {
            $('html, body').stop(true, false);
            $(this).addClass('nav-clicked');
            setTimeout(() => {
              $(this).removeClass('nav-clicked');
            }, 300);
            isScrolling = true;
            let scrollPosition;
            if (target === '#home') {
              scrollPosition = 0;
            } else {
              scrollPosition = targetSection.offset().top;
            }
            $('html, body').animate({
              scrollTop: scrollPosition
            }, {
              duration: 800,
              easing: 'swing',
              complete: function() {
                isScrolling = false;
                updateActiveNav();
              }
            });
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
          }
        }
      });

      $('.nav-link').hover(
        function() {
          if (!$(this).hasClass('active') && !isScrolling) {
            $(this).css('transform', 'translateY(-2px)');
          }
        },
        function() {
          $(this).css('transform', 'translateY(0)');
        }
      );
      const handleScroll = () => {
        if (!isScrolling) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(updateActiveNav, 100);
        }
      };

      $(window).on('scroll', handleScroll);
      updateActiveNav();
    });

    return () => {
      clearTimeout(scrollTimeout);
      $('.nav-link').off('click');
      $('.nav-link').off('hover');
      $(window).off('scroll');
      $('html, body').stop(true, false);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-link">Work</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#cv" className="nav-link">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
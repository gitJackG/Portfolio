import React, { useEffect } from 'react';
import '../styles/main.scss';

const Navbar = () => {
  useEffect(() => {
    let scrollTimeout;
    let isScrolling = false;

    // Initialize jQuery smooth scrolling
    $(document).ready(function() {
      // Function to update active nav link based on scroll position
      const updateActiveNav = () => {
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        // Special case for Home section when at the very top
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
            return false; // Break the loop
          }
        });
        
        if (activeSection) {
          $('.nav-link').removeClass('active');
          $(`.nav-link[href="#${activeSection}"]`).addClass('active');
        }
      };

      // Smooth scroll to section when nav link is clicked
      $('.nav-link').on('click', function(e) {
        e.preventDefault();
        
        // If already scrolling, ignore new clicks
        if (isScrolling) return;
        
        const target = $(this).attr('href');
        if (target) {
          const targetSection = $(target);
          if (targetSection.length) {
            // Stop any ongoing animations
            $('html, body').stop(true, false);
            
            // Add click animation to the nav link
            $(this).addClass('nav-clicked');
            setTimeout(() => {
              $(this).removeClass('nav-clicked');
            }, 300);
            
            // Set scrolling flag
            isScrolling = true;
            
            // Get scroll position - handle Home section specially
            let scrollPosition;
            if (target === '#home') {
              scrollPosition = 0;
            } else {
              scrollPosition = targetSection.offset().top;
            }
            
            // Smooth scroll to section
            $('html, body').animate({
              scrollTop: scrollPosition
            }, {
              duration: 800,
              easing: 'swing',
              complete: function() {
                isScrolling = false;
                // Update active nav after scroll completes
                updateActiveNav();
              }
            });
            
            // Update active nav immediately
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
          }
        }
      });

      // Restore hover effects with jQuery (without interfering with scrolling)
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

      // Update active nav on scroll with debounce
      const handleScroll = () => {
        if (!isScrolling) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(updateActiveNav, 100);
        }
      };

      // Listen for scroll events
      $(window).on('scroll', handleScroll);

      // Initialize active nav on page load
      updateActiveNav();
    });

    // Cleanup function
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
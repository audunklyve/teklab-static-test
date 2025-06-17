document.addEventListener("DOMContentLoaded", function() {
    const node = document.getElementsByClassName("md-footer__inner")[0];
    const clone = node.cloneNode(true);
    clone.id = "extra-navigation";
    clone.style.opacity = '1';                   // Fully visible
    clone.style.position = 'fixed';              // Make it a fixed position
    clone.style.bottom = '0';                    // Stick to the bottom
    clone.style.left = '0';
    clone.style.right = '0';
    clone.style.marginLeft = '0';
    clone.style.marginRight = '0';
    clone.style.maxWidth = '100%';
    clone.style.zIndex = '1000';                 // Ensure it is on top
    clone.style.boxShadow = '0 -2px 5px rgba(0,0,0,0.3)'; // Add shadow for better visibility
    clone.style.transition = 'transform 0.4s ease-in-out'; // Slow down the transform animation
    //clone.style.transform = 'translateY(100%)'; // Initially hide the element by translating it down

    if (document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight) > 950) {
        clone.style.visibility = 'visible'; // Show the element initially
    } else {
        clone.style.visibility = 'hidden'; // Hide the element initially
    }




    const main1 = document.getElementsByClassName("md-container")[0];
    const main2 = document.getElementsByClassName("md-main")[0];
    main1.insertBefore(clone, main2);

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let documentHeight = document.documentElement.scrollHeight;
        let windowHeight = window.innerHeight;
        let scrollBottom = documentHeight - (scrollTop + windowHeight);
    
        if (scrollTop < lastScrollTop && scrollBottom > 950) {
            clone.style.transform = 'translateY(0)'; // Slide up to show the element
        } else {
            clone.style.transform = 'translateY(100%)'; // Slide down to hide the element
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});


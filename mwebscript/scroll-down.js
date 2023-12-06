document.addEventListener("DOMContentLoaded", function () {
        var scrollDown = document.getElementById("scrollDown");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                scrollDown.classList.add("hide-scroll-down");
            } else {
                scrollDown.classList.remove("hide-scroll-down");
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        var header = document.querySelector(".header");
        var lastScrollTop = 0;
    
        window.addEventListener("scroll", function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.classList.add("fade-in");
            } else {
                // Scrolling up
                header.classList.remove("fade-in");
            }
    
            lastScrollTop = scrollTop;
        });
    });
    
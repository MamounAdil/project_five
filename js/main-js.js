window.onload = function () {
    "use strict";

    /* Navbar, Add And Remove Class Active */
    let myLinks = document.querySelectorAll("nav .navbar-nav .nav-item .nav-link");

    myLinks.forEach(link => {
        link.addEventListener("click", (ev) => {
            ev.preventDefault();

            ev.target.parentElement.parentElement.querySelectorAll(".active").forEach(active => {
                active.classList.remove("active");
            });

            // Smooth To The Sections
            let ID = ev.target.attributes.href.value,
                section = document.querySelector(ID);

            section.scrollIntoView({
                behavior: "smooth"
            });


        });
    });

    /* Portfolio UL */
    let allList = document.querySelectorAll(".port .port-select li"),
        images = document.querySelectorAll(".port .port-img .cursor img");

    allList.forEach(li => {
        li.addEventListener("click", removeActive);
        li.addEventListener("click", removeImages);
    });

    // Remove & Add Class Active
    function removeActive() {
        allList.forEach((li) => {
            li.classList.remove("active");
            this.classList.add("active");
        });
    }

    // Remove All Images
    function removeImages() {
        images.forEach((img) => {
            img.style.opacity = "0";
            document.querySelectorAll(".port .port-img .cursor").forEach((box) => {
                box.style.display = "none"
            })
        });
        document.querySelectorAll(this.dataset.work).forEach((el) => {
            el.style.opacity = "1";
            el.parentElement.style.display = "block"
        });
    }

    // Go To Top
    document.querySelector("#about-us");
    let goTop = document.querySelector(".goToTop");


    (window.scrollY > 300) ? goTop.style.display = "block" : goTop.style.display = "none";

    window.onscroll = function () {
        goToTop();
    }

    // Go To Top
    function goToTop() {
        if (window.scrollY > 300) {
            goTop.style.display = "block"
        } else {
            goTop.style.display = "none"
        }

        goTop.addEventListener("click", () => {
            window.scroll({
                left: 0,
                top: 0,
                behavior: "smooth"
            });
        });


    }


};
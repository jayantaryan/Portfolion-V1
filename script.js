

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});


navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        e.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
});



const revealElements = document.querySelectorAll(
    ".glass-card, .section-title, .hero-content, .hero-image"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add("hidden");
    revealObserver.observe(element);
});



const backToTopBtn = document.createElement("button");

backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.classList.add("back-to-top");

document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show-btn");
    } else {
        backToTopBtn.classList.remove("show-btn");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



const dynamicStyles = document.createElement("style");

dynamicStyles.textContent = `
    .nav-links a.active{
        color:#3b82f6;
    }

    .hidden{
        opacity:0;
        transform:translateY(40px);
        transition:all 0.8s ease;
    }

    .show{
        opacity:1;
        transform:translateY(0);
    }

    .back-to-top{
        position:fixed;
        right:25px;
        bottom:25px;
        width:50px;
        height:50px;
        border:none;
        border-radius:50%;
        cursor:pointer;
        background:#3b82f6;
        color:#fff;
        font-size:1rem;
        box-shadow:0 10px 25px rgba(0,0,0,0.3);
        opacity:0;
        visibility:hidden;
        transform:translateY(20px);
        transition:all 0.3s ease;
        z-index:999;
    }

    .back-to-top:hover{
        transform:translateY(-5px);
    }

    .show-btn{
        opacity:1;
        visibility:visible;
        transform:translateY(0);
    }
`;

document.head.appendChild(dynamicStyles);


const yearElement = document.querySelector("footer p");

if (yearElement) {
    yearElement.innerHTML = `© ${new Date().getFullYear()} Jayant. All Rights Reserved.`;
}


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15,23,42,0.95)";
    } else {
        navbar.style.background = "rgba(15,23,42,0.8)";
    }
});









// LONG-FORM VIDEO CAROUSEL
const longFormVideos = ["1LGryEJEM5I", "2LWAp7-Ox_g"];
let currentIndex = 0;

window.prevVideo = function() {
    currentIndex = (currentIndex - 1 + longFormVideos.length) % longFormVideos.length;
    document.getElementById("longVideoFrame").src = 
        `https://www.youtube.com/embed/${longFormVideos[currentIndex]}?autoplay=1&rel=0&modestbranding=1&mute=1&loop=1&vq=hd1080`;
}

window.nextVideo = function() {
    currentIndex = (currentIndex + 1) % longFormVideos.length;
    document.getElementById("longVideoFrame").src = 
        `https://www.youtube.com/embed/${longFormVideos[currentIndex]}?autoplay=1&rel=0&modestbranding=1&mute=1&loop=1&vq=hd1080`;
}

// SHORT VIDEO MODAL
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubeFrame");

// Short videos IDs
const shortVideos = ["3D7SHKAFA4A", "D2ojS378ZWE", "uP7WPWlYHFg", "UU4DH1dl3yQ"];

window.openShortVideo = function(videoId) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&mute=1&loop=1&playlist=${videoId}`;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

window.closeVideo = function() {
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside video
window.addEventListener('click', function(event) {
    if(event.target == modal) closeVideo();
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if(event.key === "Escape") closeVideo();
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// --- FAQ ACCORDION LOGIC ---
const accHeaders = document.querySelectorAll(".accordion-header");

accHeaders.forEach(header => {
    header.addEventListener("click", function() {
        this.classList.toggle("active");
        
        const body = this.nextElementSibling;
        const plus = this.querySelector(".plus");
        
        if (body.style.maxHeight) {
            body.style.maxHeight = null;
            plus.textContent = "+";
            plus.style.transform = "rotate(0deg)";
        } else {
            document.querySelectorAll(".accordion-body").forEach(b => b.style.maxHeight = null);
            document.querySelectorAll(".plus").forEach(p => p.textContent = "+");
            
            body.style.maxHeight = body.scrollHeight + "px";
            plus.textContent = "-";
        }
    });
});

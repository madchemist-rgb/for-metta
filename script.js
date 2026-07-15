// =========================================
// Continue Button
// =========================================

const continueBtn = document.getElementById("continue-btn");

if (continueBtn) {

    continueBtn.addEventListener("click", () => {

    const music = document.getElementById("bgMusic");

    music.volume = 0.18; // 18% volume
    music.play();

    document.getElementById("curiosity").scrollIntoView({
        behavior: "smooth"
    });

});

}

// =========================================
// Reveal Animation
// =========================================

const revealSections = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealSections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================================
// Scroll Progress Bar
// =========================================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});
// =========================================
// Proposal Buttons
// =========================================

const yesBtn = document.getElementById("yesBtn");
const ofCourseBtn = document.getElementById("ofCourseBtn");

function showCelebration() {

    document.querySelector(".proposal").style.display = "none";

    document.getElementById("celebration").classList.add("show");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

if (yesBtn) {

    yesBtn.addEventListener("click", showCelebration);

}

if (ofCourseBtn) {

    ofCourseBtn.addEventListener("click", showCelebration);

}
// Music toggle
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicToggle.textContent = "🔊";

    } else {

        music.pause();
        musicToggle.textContent = "🔇";

    }

});
// 🌬️ Simple page load animation effect
window.onload = function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "1s";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
};

// 🧭 Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        // allow page navigation but add smooth feel
        document.body.style.transition = "0.3s";
    });
});

// 🌬️ Wind animation text speed change (extra effect)
let wind = document.querySelector(".animation");

if (wind) {
    let speed = 1;

    setInterval(() => {
        speed += 0.2;

        if (speed > 3) speed = 1;

        wind.style.animationDuration = speed + "s";
    }, 2000);
}

// ✨ Card hover sound/feedback effect (optional visual boost)
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });
});

// ⚡ Simple console message (developer feel 😄)
console.log("Wind Electricity Model Website Loaded Successfully 🌬️⚡");// 🧪 SIMULATION LOGIC

let slider = document.getElementById("windSlider");
let value = document.getElementById("windValue");
let bar = document.getElementById("powerBar");

if (slider) {
    slider.addEventListener("input", function () {
        let val = slider.value;

        value.innerText = val;
        bar.style.width = val + "%";
    });
}// 🎯 QUESTION BANK
const questions = [
    {
        q: "Wind energy is a type of?",
        options: ["Renewable Energy", "Non-Renewable Energy"],
        answer: 0
    },
    {
        q: "Wind turbine converts wind into?",
        options: ["Mechanical Energy", "Heat Energy"],
        answer: 0
    },
    {
        q: "Final output of wind system is?",
        options: ["Electricity", "Smoke"],
        answer: 0
    },
    {
        q: "Wind energy is?",
        options: ["Clean Energy", "Polluting Energy"],
        answer: 0
    },
    {
        q: "Wind rotates?",
        options: ["Turbine", "Battery"],
        answer: 0
    },
    {
        q: "Energy source of wind is?",
        options: ["Air movement", "Coal"],
        answer: 0
    }
];

let score = 0;
let total = 3; // total MCQs

// 🎯 ANSWER FUNCTION
function answer(correct) {

    if (correct) {
        score++;
    }

    document.getElementById("score").innerText = "Score: " + score;
}

// 🔄 SHOW FINAL RESULT
function showResult() {
    alert("You got " + score + " out of " + total + " correct answers!");
}

// 🔄 RESET QUIZ
function resetQuiz() {
    score = 0;
    document.getElementById("score").innerText = "Score: 0";
}
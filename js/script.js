// Split the heading into word spans
const heading = document.querySelector(".hero-heading");
const words = heading.innerText.split(" ");

heading.innerHTML = words
    .map(word => `<span class="word">${word}</span>`)
    .join(" ");

// Animate each word
gsap.from(".hero-heading .word", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.12
});

/* Background */


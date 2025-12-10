// hero swap slider start
const container = document.getElementById('SwapsliderContainer');
const afterImg = document.getElementById('afterImage');
const handle = document.getElementById('sliderHandle');

function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let newX = x - rect.left;

    // clamp
    if (newX < 0) newX = 0;
    if (newX > rect.width) newX = rect.width;

    const percentage = (newX / rect.width) * 100;
    afterImg.style.width = percentage + "%";
    handle.style.left = `calc(${percentage}% - 20px)`;
}

let dragging = false;
handle.addEventListener('mousedown', () => dragging = true);
window.addEventListener('mouseup', () => dragging = false);
window.addEventListener('mousemove', (e) => {
    if (dragging) setSliderPosition(e.clientX);
});

// Touch support
handle.addEventListener('touchstart', () => dragging = true);
window.addEventListener('touchend', () => dragging = false);
window.addEventListener('touchmove', (e) => {
    if (dragging) setSliderPosition(e.touches[0].clientX);
});

// hero swap slider end



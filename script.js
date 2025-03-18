const mainBubble = document.querySelector(".main-blob");
const smallBubbles = document.querySelectorAll(".small-blob1, .small-blob2");
const heroText = document.querySelector(".hero-text");



let isDragging = false;
let offsetX = 0, offsetY = 0;
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

// Ensure the bubble is positioned absolutely
mainBubble.style.position = "absolute";

// 🏆 Enable dragging on mousedown
mainBubble.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - mainBubble.offsetLeft;
    offsetY = e.clientY - mainBubble.offsetTop;

    mainBubble.style.transition = "none"; // Disable smooth transition while dragging
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    targetX = e.clientX - offsetX;
    targetY = e.clientY - offsetY;
    

    // 💡 Move the main bubble using absolute positioning
    mainBubble.style.left = `${targetX}px`;
    mainBubble.style.top = `${targetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// 🔥 Smoothly animate small blobs with delay
function smoothMove() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;

    smallBubbles.forEach((bubble, index) => {
        setTimeout(() => {
            bubble.style.left = `${currentX + (index + 1) * 20}px`;
            bubble.style.top = `${currentY + (index + 1) * 20}px`;
        }, index * 100); // Delay each small blob slightly
    });

    requestAnimationFrame(smoothMove);
}



// ✅ Start trailing animation
smoothMove();

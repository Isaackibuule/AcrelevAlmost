document.addEventListener("DOMContentLoaded", function() {
    const chatButton = document.querySelector("label[for='click']");
    const footer = document.querySelector(".credit");
    const buffer = 20; // Adjust this value as needed
    const pushUpPixels = 10; // Adjust this value to push the chat button up

    function adjustChatButtonPosition() {
        const footerRect = footer.getBoundingClientRect();
        const chatButtonRect = chatButton.getBoundingClientRect();
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Check if we are near the bottom of the page (e.g. within 100px of the bottom)
        if (documentHeight - (scrollY + windowHeight) < 100) {
            if (footerRect.top < windowHeight) {
                chatButton.style.bottom = (windowHeight - footerRect.top + buffer + pushUpPixels) + "px";
            } else {
                chatButton.style.bottom = buffer + "px";
            }
        } else {
            chatButton.style.bottom = buffer + "px";
        }
    }

    window.addEventListener("scroll", adjustChatButtonPosition);
    window.addEventListener("resize", adjustChatButtonPosition);
    adjustChatButtonPosition(); // Initial adjustment
});
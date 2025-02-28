
document.addEventListener("DOMContentLoaded", function() {
    const acrelev = document.querySelector('.acrelev');
    const text = acrelev.textContent;
    acrelev.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animation = `rollIn 0.7s ease-out ${(text.length - index - 1) * 0.2}s forwards`;
        acrelev.appendChild(span);
    });

    const chatToggle = document.querySelector("label[for='click']");
    const chatContainer = document.querySelector(".chat-container");
    const chatForm = document.querySelector('.chat-box form');
    const queryTextarea = document.getElementById("query-textarea");

    chatToggle.onclick = function() {
        if (chatContainer.style.visibility === "hidden" || chatContainer.style.visibility === "") {
            chatContainer.style.visibility = "visible";
            chatContainer.style.opacity = "1";
        } else {
            chatContainer.style.visibility = "hidden";
            chatContainer.style.opacity = "0";
        }
    };

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the textarea content
        const queryText = queryTextarea.value.trim();
        // if (!queryText.match(/\b\w+\b/)) {
        //     alert("Please enter a valid word in the textarea.");
        //     return;
        // }


        if (!queryText.match(/^[A-Za-z0-9\s,.'-]+$/)) {
            alert("Please enter a valid sentence in the textarea.");
            return;
        }

        alert("Thank you for contacting our team! We will get back to you shortly.");

        // Clear the form after submission
        chatForm.reset();

        // Hide the chat box after 5 seconds
        setTimeout(function() {
            document.getElementById("click").checked = false;
            chatContainer.style.visibility = "hidden";
            chatContainer.style.opacity = "0";
        }, 900); // Change the time in milliseconds as needed
    });
});

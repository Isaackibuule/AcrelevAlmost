
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !subject) {
        alert('Name, Email, and Subject fields must be filled in.');
        return;
    }

    
// if (name.length < 2 || /\d/.test(name)) {
//     alert('Name must have at least 2 letters and contain no numbers.');
//     return;
// }

//  if (subject.length < 2) {
//     alert('Subject must have at least 2 letters.');
//      return;
// }
    
    if (!isValidSentence(message)) {
        alert('Please enter a valid sentence in the message box.');
        return;
    }
    
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
    // You can proceed with form submission here, like using AJAX or simply submitting the form.
    // this.submit(); // Uncomment this line if you want to submit the form after validation.
});


//rigorous function
// function isValidSentence(text) {
//     // Validate that the sentence contains at least one space and ends with a period, question mark, or exclamation mark.
//     const sentenceRegex = /^[A-Z][^.!?]*[.!?]$/i;
//     return sentenceRegex.test(text);
// }

function isValidSentence(text) {
// Validate that the sentence contains at least one space and is not empty.
return text.includes(' ') && text.length > 0;
}

function containsRealWords(text) {
const words = text.split(' ');
return words.length > 1 && words.every(word => /^[a-zA-Z]+$/.test(word));
}





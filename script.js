// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('response').innerText = "Thank you for reaching out! We'll get back to you soon.";
        document.getElementById('response').style.color = "green";

        // Clear the form fields
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    } else {
        document.getElementById('response').innerText = "Please fill in all fields.";
        document.getElementById('response').style.color = "red";
    }
});

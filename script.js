document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Merci, ${name}! Votre message a été envoyé.`);
        // Here you could add code to send the form data to a server
        document.getElementById('contact-form').reset();
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});

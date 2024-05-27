window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;

    const bodyBackground = 255 - Math.min(255, Math.floor(scrollFraction * 255));
    const textColor = Math.min(255, Math.floor(scrollFraction * 255));

    document.body.style.backgroundColor = `rgb(${bodyBackground}, ${bodyBackground}, ${bodyBackground})`;
    document.body.style.color = `rgb(${textColor}, ${textColor}, ${textColor})`;

    const sections = document.querySelectorAll('section, header, footer, .project-item, .skill-item, form input, form textarea, form button');
    sections.forEach(section => {
        section.style.backgroundColor = `rgb(${bodyBackground}, ${bodyBackground}, ${bodyBackground})`;
        section.style.color = `rgb(${textColor}, ${textColor}, ${textColor})`;
    });
});

document.querySelectorAll('.project-item, .skill-item').forEach(item => {
    item.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        document.getElementById('info-content').textContent = info;
    });
});

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

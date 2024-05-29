window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;

    const bodyBackground = 244 - Math.min(244, Math.floor(scrollFraction * 100));
    const textColor = 0 + Math.min(100, Math.floor(scrollFraction * 100));

    document.body.style.backgroundColor = `rgb(${bodyBackground}, ${bodyBackground}, ${bodyBackground})`;
    document.body.style.color = `rgb(${textColor}, ${textColor}, ${textColor})`;

    const sections = document.querySelectorAll('section, header, footer, .project-item, .skill-item');
    sections.forEach(section => {
        section.style.backgroundColor = `rgb(${bodyBackground}, ${bodyBackground}, ${bodyBackground})`;
        section.style.color = `rgb(${textColor}, ${textColor}, ${textColor})`;
    });
});

document.querySelectorAll('.project-item, .skill-item').forEach(item => {
    item.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('info-content').innerHTML = data;
            })
            .catch(error => console.error('Error fetching the HTML file:', error));
    });
});

document.getElementById('intro-screen').addEventListener('click', function() {
    this.classList.add('hidden');
});

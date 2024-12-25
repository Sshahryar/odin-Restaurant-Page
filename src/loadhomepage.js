export function loadHomePage() {
    const content = document.getElementById('content');

    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/800x400';
    image.alt = 'Restaurant Image';
    image.style.width = '100%';
    image.style.height = 'auto';

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant!';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best dining experience with gourmet food and excellent service.';

    content.appendChild(image);
    content.appendChild(heading);
    content.appendChild(paragraph);
}

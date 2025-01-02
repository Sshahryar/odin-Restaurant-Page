export function loadContactPage() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'We would love to hear from you! Reach out to us through the following methods:';

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <p>Email: info@restaurant.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Culinary Lane, Foodie City</p>
    `;

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(contactInfo);
}

export function loadContactPage() {
    
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
    <h1>Contact Us</h1>
    <p>Reach out to us with your questions and feedback.</p>
    `;

    content.appendChild(contactDiv);
}

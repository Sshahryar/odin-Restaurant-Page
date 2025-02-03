export function loadMenuPage() {
    const content = document.getElementById('content');
    const menuDiv = document.getElementById('div');
    menuDiv.innerHTML = `
    <h1>Our Menu</h1>
    <p>Check out our delicious offerings.</p>
    `;
    content.appendChild(menuDiv);
}

export function loadHomePage() {
    
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');

    hommeDiv.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>Enjoy the best food in town!</p>
    <img src="restaurant.jpg" alt="Restaurant Image">
    `;
    content.appendChild(homeDiv);
}

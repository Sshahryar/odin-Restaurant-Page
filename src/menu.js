export function loadMenuPage() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Explore our delicious menu items crafted with the finest ingredients.';

    const list = document.createElement('ul');
    ['Pizza', 'Pasta', 'Salad', 'Desserts'].forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(list);
}

import { loadHomePage } from './home';
import { loadMenuPage } from './menu';
import { loadContactPage } from './contact'

console.log("Test");

function clearContent() { 
  const content = document.getElementById('content'); 
  content.innerHTML = ''; 
} 

function switchTab(event) { 
  clearContent(); 
  if (event.target.id === 'home') loadHomePage(); 
  if (event.target.id === 'menu') loadMenuPage(); 
  if (event.target.id === 'contact') loadContactPage(); 
} 

document.getElementById('home').addEventListener('click', switchTab); 
document.getElementById('menu').addEventListener('click', switchTab); 
document.getElementById('contact').addEventListener('click', switchTab);

loadHomePage();
});

import './style.css';

function clearContent() {
  document.getElementById('content').innerHTML = '';
}

function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => {
    button.style.backgroundColor = button.id === buttonId ? '#e64a19' : '#ff7043';
  });
}

function loadHome() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  title.textContent = 'Benvenuti al Ristorante T4!';
  const desc = document.createElement('p');
  desc.textContent = 'Piatti deliziosi e atmosfera accogliente.';
  content.appendChild(title);
  content.appendChild(desc);
}

function loadMenu() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  title.textContent = 'Menu';
  const list = document.createElement('ul');
  ['Pizza', 'Pasta', 'Tiramisù'].forEach(dish => {
    const li = document.createElement('li');
    li.textContent = dish;
    list.appendChild(li);
  });
  content.appendChild(title);
  content.appendChild(list);
}

function loadContact() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  title.textContent = 'Contatti';
  const phone = document.createElement('p');
  phone.textContent = 'Tel: 123-456-789';
  content.appendChild(title);
  content.appendChild(phone);
}

// Eventi
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('home-btn').addEventListener('click', () => {
    clearContent(); loadHome(); setActiveButton('home-btn');
  });

  document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent(); loadMenu(); setActiveButton('menu-btn');
  });

  document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent(); loadContact(); setActiveButton('contact-btn');
  });

  // Carica Home di default
  loadHome();
  setActiveButton('home-btn');
});

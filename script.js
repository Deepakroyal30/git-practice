let jsonData = [
  {
    "name": "iPhone 13",
    "price": 799,
    "company": "Apple",
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Galaxy S21",
    "price": 699,
    "company": "Samsung",
    "image": "https://example.com/images/galaxyS21.jpg"
  },
  {
    "name": "Pixel 6",
    "price": 599,
    "company": "Google",
    "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "OnePlus 9",
    "price": 729,
    "company": "OnePlus",
    "image": "https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww"
  },
  {
    "name": "Xperia 1 III",
    "price": 1299,
    "company": "Sony",
    "image": "https://example.com/images/xperia1III.jpg"
  },
  {
    "name": "Mi 11",
    "price": 749,
    "company": "Xiaomi",
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww"
  },
  {
    "name": "P40 Pro",
    "price": 899,
    "company": "Huawei",
    "image": "https://example.com/images/p40pro.jpg"
  },
  {
    "name": "Moto G Power",
    "price": 249,
    "company": "Motorola",
    "image": "https://example.com/images/motogpower.jpg"
  },
  {
    "name": "Nokia 8.3 5G",
    "price": 699,
    "company": "Nokia",
    "image": "https://example.com/images/nokia8.3.jpg"
  },
  {
    "name": "Asus ROG Phone 5",
    "price": 999,
    "company": "Asus",
    "image": "https://example.com/images/asusrogphone5.jpg"
  }
];


let currentIndex = 0;

function displayParagraph() {
  let phone = jsonData[currentIndex];

  let name = document.getElementById("name");
  name.textContent = phone.name;

  let price = document.getElementById("price");
  price.textContent = "$" + phone.price; // Added dollar sign for clarity

  let company = document.getElementById("company");
  company.textContent = phone.company;

  let image = document.getElementById("img");
  image.src = phone.image;

  let loadingBar = document.getElementById("loadinganim");
  loadingBar.style.transition = 'none';
  loadingBar.style.width = '0%';

  setTimeout(() => {
    loadingBar.style.transition = 'width 4.8s ease-in-out';
    loadingBar.style.width = '100%';
  }, 500);

  currentIndex = (currentIndex + 1) % jsonData.length;
}

displayParagraph();
setInterval(displayParagraph, 5000);

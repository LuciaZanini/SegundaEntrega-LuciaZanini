document.addEventListener('DOMContentLoaded', function() {
    const productData = [
      { id: 1, name: 'Zeus', price: 2000, image: './images/1.jpg', description: 'Wooden mate' },
      { id: 2, name: 'Atenas', price: 1500, image: './images/2.jpg', description: 'Pumpkin mate' },
      { id: 3, name: 'Arquimedes', price: 1300, image: 'images/3.jpg', description: 'Smoky flavour' },
      { id: 4, name: 'Hades', price: 1800, image: 'images/4.jpg', description: 'Strong base wooden mate' },
      { id: 5, name: 'Poseidon', price: 1000, image: 'images/5.jpg', description: 'Basic but nice though' }
    ];
  
    let cart = [];
  
    function renderProducts() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
  
      productData.forEach(function(product) {
        const item = document.createElement('li');
        
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add('small-image');

        item.appendChild(productImage);
        
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        item.appendChild(productName);
        
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        item.appendChild(productDescription);
        
        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;
        item.appendChild(productPrice);
        
        const button = document.createElement('button');
        button.textContent = 'Add to cart';
        button.addEventListener('click', function() {
          addToCart(product);
        });
        item.appendChild(button);
        
        productList.appendChild(item);
      });
    }
  
    function addToCart(product) {
      cart.push(product);
      updateCart();
      saveCart();
    }
  
    function updateCart() {
      const cartList = document.getElementById('cart-list');
      cartList.innerHTML = '';
  
      let total = 0;
  
      cart.forEach(function(product) {
        const item = document.createElement('li');
        item.textContent = `${product.name} - $${product.price}`;
        cartList.appendChild(item);
  
        total += product.price;
      });
  
      document.getElementById('cart-total').textContent = `$${total}`;
    }
  
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    function loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
      }
    }
  
    document.getElementById('clear-cart').addEventListener('click', function() {
      clearCart();
    });
  
    function clearCart() {
      cart = [];
      updateCart();
      saveCart();
    }
  
    renderProducts();
    loadCart();
  });
  
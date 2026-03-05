const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, img: "https://via.placeholder.com" },
    { id: 2, name: "Smart Watch", price: 149.99, img: "https://via.placeholder.com" },
    { id: 3, name: "Bluetooth Speaker", price: 49.99, img: "https://via.placeholder.com" }
];
let cartCount = 0;
const container = document.getElementById('product-container');
const counterDisplay = document.getElementById('cart-counter');
const displayProducts = () => {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="buy-btn" data-id="${product.id}">Add to Cart</button>
        `;
        container.appendChild(card);
    });
};
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
        addToCart();
    }
});
function addToCart() {
    cartCount++;
    counterDisplay.innerText = `Cart: ${cartCount} items`;
}
displayProducts();
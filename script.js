// Real Middle Eastern perfume products
const products = [
    {
        id: 1,
        name: 'Lataffa Fakhar',
        brand: 'Lataffa',
        type: 'Oriental Woody',
        price: '₹2,499',
        description: 'Rich oud-based fragrance with spicy notes',
        emoji: '🌟'
    },
    {
        id: 2,
        name: 'Afnan Naseej',
        brand: 'Afnan',
        type: 'Woody Floral',
        price: '₹2,799',
        description: 'Elegant blend of wood and soft florals',
        emoji: '💐'
    },
    {
        id: 3,
        name: 'Lattafa Qaed Al Fursan',
        brand: 'Lataffa',
        type: 'Aromatic Spicy',
        price: '₹2,299',
        description: 'Bold spicy and aromatic Middle Eastern blend',
        emoji: '👑'
    },
    {
        id: 4,
        name: 'Afnan Supremacy Not For Women',
        brand: 'Afnan',
        type: 'Oriental',
        price: '₹2,599',
        description: 'Luxurious oriental fragrance for men',
        emoji: '✨'
    },
    {
        id: 5,
        name: 'Lattafa Bade Al Oud',
        brand: 'Lataffa',
        type: 'Pure Oud',
        price: '₹3,299',
        description: 'Premium pure oud with precious wood notes',
        emoji: '🪵'
    },
    {
        id: 6,
        name: 'Afnan Turathi',
        brand: 'Afnan',
        type: 'Oriental Oud',
        price: '₹2,899',
        description: 'Traditional Arabian fragrance with oud essence',
        emoji: '🏺'
    }
];

// Recommendations based on quiz answers
const recommendations = {
    'Oily-Formal-Floral': { product: 2, reason: 'Afnan Naseej works beautifully for formal occasions' },
    'Oily-Casual-Citrus': { product: 3, reason: 'Lataffa Qaed Al Fursan is perfect for casual wear' },
    'Dry-Evening-Woody': { product: 5, reason: 'Lattafa Bade Al Oud excels on dry skin' },
    'Mixed-Party-Oriental': { product: 4, reason: 'Afnan Supremacy is ideal for special occasions' },
    'Sensitive-Office-Fresh': { product: 1, reason: 'Lataffa Fakhar is gentle yet sophisticated' },
    'default': { product: 6, reason: 'Afnan Turathi is our signature recommendation' }
};

let quizAnswers = {};
let currentStep = 1;
let cart = [];

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartCount();
});

// Load and display products
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-brand" style="color: #d4af37; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.3rem;">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-type">${product.type}</div>
                <div class="product-price">${product.price}</div>
                <p class="product-desc">${product.description}</p>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Quiz functionality
function selectOption(type, value) {
    quizAnswers[type] = value;
    
    // Update button styles
    const buttons = document.querySelectorAll(`[onclick*="${type}"]`);
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');

    // Move to next step
    if (type === 'skinType') {
        document.querySelector('.quiz-step').style.display = 'none';
        document.getElementById('occasionStep').style.display = 'block';
    } else if (type === 'occasion') {
        document.getElementById('occasionStep').style.display = 'none';
        document.getElementById('fragranceStep').style.display = 'block';
    } else if (type === 'fragrance') {
        document.getElementById('fragranceStep').style.display = 'none';
        showRecommendation();
    }
}

function showRecommendation() {
    const key = `${quizAnswers.skinType}-${quizAnswers.occasion}-${quizAnswers.fragrance}`;
    const recommendation = recommendations[key] || recommendations['default'];
    const product = products[recommendation.product - 1];

    const resultDiv = document.getElementById('recommendationResult');
    resultDiv.innerHTML = `
        <h3 style="color: #d4af37; margin-bottom: 0.5rem;">${product.emoji} ${product.name}</h3>
        <p style="margin: 0.3rem 0; color: #d4af37; font-size: 0.9rem; text-transform: uppercase;"><strong>${product.brand}</strong></p>
        <p style="margin: 0.5rem 0;"><strong>Type:</strong> ${product.type}</p>
        <p style="margin: 0.5rem 0;"><strong>Price:</strong> ${product.price}</p>
        <p style="margin: 0.5rem 0;"><strong>Why:</strong> ${recommendation.reason}</p>
        <button class="btn-primary" onclick="addToCart(${product.id})" style="margin-top: 1rem; width: 100%;">Add to Cart</button>
    `;

    document.getElementById('fragranceStep').style.display = 'none';
    document.getElementById('resultStep').style.display = 'block';
}

function resetQuiz() {
    quizAnswers = {};
    document.querySelector('.quiz-step').style.display = 'block';
    document.getElementById('occasionStep').style.display = 'none';
    document.getElementById('fragranceStep').style.display = 'none';
    document.getElementById('resultStep').style.display = 'none';
    
    // Clear button selections
    document.querySelectorAll('.quiz-btn').forEach(btn => btn.classList.remove('selected'));
}

// Shopping cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`✨ ${product.name} added to cart!`);
}

function updateCartCount() {
    const cartBtn = document.querySelector('.btn-cart');
    cartBtn.textContent = `🛒 Cart (${cart.length})`;
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some perfumes to get started.');
        return;
    }

    let cartContent = '🛒 YOUR CART\n' + '='.repeat(50) + '\n\n';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const priceValue = parseInt(item.price.replace('₹', '').replace(',', ''));
        totalPrice += priceValue;
        cartContent += `${index + 1}. ${item.name}\n   Brand: ${item.brand}\n   Price: ${item.price}\n\n`;
    });

    cartContent += '='.repeat(50) + '\n';
    cartContent += `Total Items: ${cart.length}\n`;
    cartContent += `Estimated Total: ₹${totalPrice.toLocaleString()}\n\n`;
    cartContent += '💳 Proceed to checkout when ready!';

    alert(cartContent);
}

// Login functionality
function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
    event.preventDefault();
    alert('✅ Login functionality coming soon!\n\nWe\'re building a complete backend system for user accounts, order history, and secure checkout.');
    toggleLoginModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

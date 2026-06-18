// Sample product data
const products = [
    {
        id: 1,
        name: 'Botanical Essence',
        type: 'Floral',
        price: '₹3,999',
        description: 'A delicate blend of fresh florals',
        emoji: '🌸'
    },
    {
        id: 2,
        name: 'Midnight Woods',
        type: 'Woody',
        price: '₹4,499',
        description: 'Deep, mysterious woody notes',
        emoji: '🌲'
    },
    {
        id: 3,
        name: 'Citrus Sunrise',
        type: 'Citrus',
        price: '₹3,499',
        description: 'Bright and energizing citrus blend',
        emoji: '🍊'
    },
    {
        id: 4,
        name: 'Oriental Dreams',
        type: 'Oriental',
        price: '₹4,999',
        description: 'Luxurious oriental fragrance',
        emoji: '✨'
    },
    {
        id: 5,
        name: 'Fresh Breeze',
        type: 'Fresh',
        price: '₹3,299',
        description: 'Light and airy fresh scent',
        emoji: '💨'
    },
    {
        id: 6,
        name: 'Royal Garden',
        type: 'Floral',
        price: '₹5,499',
        description: 'Premium floral collection',
        emoji: '🌹'
    }
];

// Recommendations based on quiz answers
const recommendations = {
    'Oily-Formal-Floral': { product: 1, reason: 'Best for oily skin in formal settings' },
    'Oily-Casual-Citrus': { product: 3, reason: 'Citrus is perfect for oily skin' },
    'Dry-Evening-Woody': { product: 2, reason: 'Woody scents work well with dry skin' },
    'Mixed-Party-Oriental': { product: 4, reason: 'Oriental for special occasions' },
    'Sensitive-Office-Fresh': { product: 5, reason: 'Fresh scents are gentle on sensitive skin' },
    'default': { product: 1, reason: 'Our signature blend for you' }
};

let quizAnswers = {};
let currentStep = 1;

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

// Load and display products
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
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
        <h3 style="color: #d4af37; margin-bottom: 1rem;">${product.emoji} ${product.name}</h3>
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
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    const cartBtn = document.querySelector('.btn-cart');
    cartBtn.textContent = `🛒 Cart (${cart.length})`;
}

// Login functionality
function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
    event.preventDefault();
    alert('Login functionality will be implemented with backend');
    toggleLoginModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
const DB_ITEMS = [
    {
        id: 1,
        name: "Pão Élfico (Lembas)",
        category: "Alimento",
        desc: "Uma pequena mordida é suficiente para encher o estômago de um homem adulto. Restaura 5 HP e remove fadiga.",
        price: 15,
        image: "assets/bread.png"
    },
    {
        id: 2,
        name: "Poção de Cura Maior",
        category: "Poção",
        desc: "Líquido carmesim efervescente. Restaura instantaneamente 50 HP quando consumida. Tem um gosto residual de morango e magia pura.",
        price: 50,
        image: "assets/potion.png"
    },
    {
        id: 3,
        name: "Espada Longa Rúnica",
        category: "Arma",
        desc: "Forjada nas montanhas antigas, possui runas que brilham em azul. Causa +2 Dano Mágico de Gelo a cada acerto.",
        price: 250,
        image: "assets/sword.png"
    },
    {
        id: 4,
        name: "Armadura de Couro Sombrio",
        category: "Armadura",
        desc: "Traje de couro flexível que não faz barulho. +15 Furtividade, +3 Classe de Armadura. Perfeita para ladinos.",
        price: 180,
        image: "assets/armor.png"
    },
    {
        id: 5,
        name: "Ração Básica de Viagem",
        category: "Alimento",
        desc: "Carne seca, queijo duro e biscoitos salgados. Não é saboroso, mas mantém você vivo. Restaura 2 HP.",
        price: 5,
        image: "assets/bread.png"
    },
    {
        id: 6,
        name: "Poção de Mana",
        category: "Poção",
        desc: "Brilha com uma luz azul intensa. Restaura 30 Pontos de Mana. Necessário para magos descuidados.",
        price: 45,
        image: "assets/potion.png"
    },
    {
        id: 7,
        name: "Adaga do Assassino",
        category: "Arma",
        desc: "Lâmina curta e envenenada. Críticos causam sangramento contínuo por 3 turnos.",
        price: 120,
        image: "assets/sword.png"
    }
];

// App State
let appState = {
    gold: 0,
    cart: [],
    wishlist: [],
    currentCategory: "Todos",
    searchQuery: ""
};

// DOM Elements
const setupScreen = document.getElementById("setup-screen");
const shopScreen = document.getElementById("shop-screen");
const goldInput = document.getElementById("gold-input");
const startBtn = document.getElementById("start-btn");
const currentGoldEl = document.getElementById("current-gold");

const itemsGrid = document.getElementById("items-grid");
const categoryList = document.getElementById("category-list");
const searchInput = document.getElementById("search-input");

const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");

const wishlistBtn = document.getElementById("wishlist-btn");
const wishlistSidebar = document.getElementById("wishlist-sidebar");
const closeWishlistBtn = document.getElementById("close-wishlist");
const wishlistItemsContainer = document.getElementById("wishlist-items");
const wishlistCount = document.getElementById("wishlist-count");

const itemModal = document.getElementById("item-modal");
const closeItemModalBtn = document.getElementById("close-item-modal");
const itemDetailContent = document.querySelector(".item-detail-content");

const toastContainer = document.getElementById("toast-container");

// Initialization
function init() {
    loadState();
    if (appState.gold > 0) {
        showShop();
    }
    
    // Setup listeners
    startBtn.addEventListener("click", () => {
        const goldVal = parseInt(goldInput.value);
        if (goldVal && goldVal > 0) {
            appState.gold = goldVal;
            saveState();
            showShop();
            showToast(`Bem-vindo! Você possui ${goldVal} moedas de ouro.`, "info", "fa-coins");
        } else {
            showToast("Por favor, insira um valor válido de moedas.", "error", "fa-triangle-exclamation");
        }
    });

    // Sidebar toggles
    cartBtn.addEventListener("click", () => cartSidebar.classList.remove("hidden"));
    closeCartBtn.addEventListener("click", () => cartSidebar.classList.add("hidden"));
    
    wishlistBtn.addEventListener("click", () => wishlistSidebar.classList.remove("hidden"));
    closeWishlistBtn.addEventListener("click", () => wishlistSidebar.classList.add("hidden"));
    
    closeItemModalBtn.addEventListener("click", () => itemModal.classList.add("hidden"));

    // Filters
    categoryList.addEventListener("click", (e) => {
        if (e.target.tagName === "LI" || e.target.closest("li")) {
            const li = e.target.closest("li");
            document.querySelectorAll("#category-list li").forEach(el => el.classList.remove("active"));
            li.classList.add("active");
            appState.currentCategory = li.dataset.category;
            renderItems();
        }
    });

    searchInput.addEventListener("input", (e) => {
        appState.searchQuery = e.target.value.toLowerCase();
        renderItems();
    });

    // Checkout
    checkoutBtn.addEventListener("click", handleCheckout);

    // Initial render
    renderItems();
    updateUI();
}

// Show Shop Screen
function showShop() {
    setupScreen.classList.remove("active");
    shopScreen.classList.add("active");
    updateUI();
}

// Render Items Grid
function renderItems() {
    itemsGrid.innerHTML = "";
    
    const filteredItems = DB_ITEMS.filter(item => {
        const matchCat = appState.currentCategory === "Todos" || item.category === appState.currentCategory;
        const matchSearch = item.name.toLowerCase().includes(appState.searchQuery) || item.desc.toLowerCase().includes(appState.searchQuery);
        return matchCat && matchSearch;
    });

    if (filteredItems.length === 0) {
        itemsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum item encontrado nesta busca mágica.</p>`;
        return;
    }

    filteredItems.forEach(item => {
        const inWishlist = appState.wishlist.some(w => w.id === item.id);
        
        const card = document.createElement("div");
        card.className = "item-card";
        card.innerHTML = `
            <div class="item-image" onclick="openItemDetails(${item.id})">
                <span class="item-class-badge">${item.category}</span>
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3 class="item-name" onclick="openItemDetails(${item.id})">${item.name}</h3>
                <p class="item-desc">${item.desc}</p>
                <div class="item-footer">
                    <span class="item-price"><i class="fa-solid fa-coins gold-icon"></i> ${item.price}</span>
                </div>
                <div class="item-actions">
                    <button class="add-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-cart-plus"></i> Adicionar
                    </button>
                    <button class="wishlist-icon-btn ${inWishlist ? 'in-wishlist' : ''}" onclick="toggleWishlist(${item.id}, event)">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        itemsGrid.appendChild(card);
    });
}

// Item Details Modal
function openItemDetails(id) {
    const item = DB_ITEMS.find(i => i.id === id);
    if (!item) return;

    itemDetailContent.innerHTML = `
        <div class="detail-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="detail-info">
            <span class="detail-class"><i class="fa-solid fa-tag"></i> ${item.category}</span>
            <h2 class="detail-name">${item.name}</h2>
            <p class="detail-desc">${item.desc}</p>
            <div class="detail-bottom">
                <span class="detail-price"><i class="fa-solid fa-coins gold-icon"></i> ${item.price}</span>
                <div class="detail-actions">
                    <button class="btn-primary" onclick="addToCart(${item.id}, true)"><i class="fa-solid fa-cart-plus"></i> Ao Carrinho</button>
                </div>
            </div>
        </div>
    `;
    itemModal.classList.remove("hidden");
}

// Cart Logic
function addToCart(id, closemodal = false) {
    const item = DB_ITEMS.find(i => i.id === id);
    appState.cart.push(item);
    showToast(`${item.name} adicionado ao carrinho!`, "success", "fa-check");
    
    if (closemodal) itemModal.classList.add("hidden");
    
    updateUI();
    saveState();
}

function removeFromCart(index) {
    appState.cart.splice(index, 1);
    updateUI();
    saveState();
}

// Wishlist Logic
function toggleWishlist(id, event) {
    if(event) event.stopPropagation(); // prevent clicking card
    const item = DB_ITEMS.find(i => i.id === id);
    const index = appState.wishlist.findIndex(w => w.id === id);
    
    if (index === -1) {
        appState.wishlist.push(item);
        showToast(`${item.name} adicionado aos desejos!`, "info", "fa-heart");
    } else {
        appState.wishlist.splice(index, 1);
        showToast(`${item.name} removido dos desejos.`, "info", "fa-heart-crack");
    }
    
    renderItems();
    updateUI();
    saveState();
}

// Checkout Logic
function handleCheckout() {
    if (appState.cart.length === 0) {
        showToast("Seu carrinho está vazio!", "error", "fa-triangle-exclamation");
        return;
    }

    const total = appState.cart.reduce((sum, item) => sum + item.price, 0);

    if (appState.gold >= total) {
        appState.gold -= total;
        appState.cart = []; // empty cart
        saveState();
        updateUI();
        cartSidebar.classList.add("hidden");
        showToast(`Compra realizada com sucesso! Pagou ${total} ouros.`, "success", "fa-sack-dollar");
    } else {
        showToast(`Ouro insuficiente! Faltam ${total - appState.gold} moedas.`, "error", "fa-xmark");
    }
}

// Update UI Elements
function updateUI() {
    // Gold
    currentGoldEl.innerText = appState.gold;

    // Cart
    cartCount.innerText = appState.cart.length;
    cartCount.style.display = appState.cart.length > 0 ? "block" : "none";
    
    cartItemsContainer.innerHTML = "";
    let total = 0;
    appState.cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price"><i class="fa-solid fa-coins gold-icon"></i> ${item.price}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(div);
    });

    if (appState.cart.length === 0) {
        cartItemsContainer.innerHTML = "<p style='color: var(--text-muted)'>Nenhum item adicionado à sacola.</p>";
    }
    
    cartTotalEl.innerText = total;

    // Check affordance
    if (appState.gold < total && total > 0) {
        cartTotalEl.style.color = "var(--danger)";
    } else {
        cartTotalEl.style.color = "";
    }

    // Wishlist
    wishlistCount.innerText = appState.wishlist.length;
    wishlistCount.style.display = appState.wishlist.length > 0 ? "block" : "none";

    wishlistItemsContainer.innerHTML = "";
    appState.wishlist.forEach((item) => {
        const div = document.createElement("div");
        div.className = "wishlist-item";
        div.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <button class="btn-secondary" style="font-size: 0.8rem; margin-top:5px; width: 100%;" onclick="addToCart(${item.id}); toggleWishlist(${item.id})">
                    Mover p/ Carrinho
                </button>
            </div>
        `;
        wishlistItemsContainer.appendChild(div);
    });

    if (appState.wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = "<p style='color: var(--text-muted)'>Sua lista de desejos mágicos está vazia.</p>";
    }
}

// Toast Notifications
function showToast(message, type = "info", icon = "fa-info-circle") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-fadeout");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// LocalStorage Persistence
function saveState() {
    localStorage.setItem("rpgShopState", JSON.stringify({
        gold: appState.gold,
        cart: appState.cart,
        wishlist: appState.wishlist
    }));
}

function loadState() {
    const saved = localStorage.getItem("rpgShopState");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appState.gold = parsed.gold || 0;
            appState.cart = parsed.cart || [];
            appState.wishlist = parsed.wishlist || [];
        } catch(e) {
            console.error("Error loading saved state", e);
        }
    }
}

// Start
document.addEventListener("DOMContentLoaded", init);

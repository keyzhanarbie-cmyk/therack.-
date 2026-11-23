/* ==========================================================================
   ruangbekas.
   ========================================================================== */

// 1. PRODUCT DATABASE
const productsData = [
    {
        id: 1,
        name: "New Balance Athletics Mens Crew - Sweater",
        brand: "New Balance",
        category: "Outerwear",
        price: 485000,
        color: "Grey",
        tag: "New Arrival",
        stock: 5,
        image: "images/nb1.jpeg",
        desc: "A light grey crewneck featuring a subtle New Balance logo on the chest. Designed with long sleeves, a classic round neckline, and ribbed cuffs and hem. Its minimal design makes it an easy choice for everyday casual outfits.",
        sizes: ["S", "M", "L"]
    },
    {
        id: 2,
        name: "New Balance 1906R Unisex - Sneakers",
        brand: "New Balance",
        category: "Shoes",
        price: 2450000,
        color: "Black",
        tag: "New Arrival",
        stock: 8,
        image: "images/nb3.jpeg",
        desc: "The New Balance 1906R features an all-black colorway with layered mesh and synthetic overlays. Its detailed construction and chunky sole create a sporty, modern look while offering everyday comfort. Perfect for streetwear and casual styling.",
        sizes: ["40", "41", "42"]
    },
    {
        id: 3,
        name: "Adidas Superstar II - Sneakers",
        brand: "Adidas",
        category: "Shoes",
        price: 1950000,
        color: "Black",
        tag: "Essential",
        stock: 12,
        image: "images/ad2.jpeg",
        desc: "A timeless Adidas Superstar in an all-black colorway. Featuring the signature three stripes, leather upper, and iconic shell toe design. A versatile sneaker that brings a clean and classic touch to any outfit.",
        sizes: ["43", "44", "45"]
    },
    {
        id: 4,
        name: "Nike Jordan Flight - Jeans ",
        brand: "Nike",
        category: "Pants",
        price: 2100000,
        color: "Black",
        tag: "New Arrival",
        stock: 7,
        image: "images/nike1.jpeg",
        desc: "Charcoal black Jordan pants featuring a relaxed baggy fit and subtle monogram detailing. Finished with distinctive panel stitching, functional pockets, and a Jordan logo on the thigh. A statement piece for modern streetwear looks.",
        sizes: ["S", "M", "L"]
    },
    {
        id: 5,
        name: "Vans Classic Slip-On Checkerboard - Shoe",
        brand: "Vans",
        category: "Shoes",
        price: 1650000,
        color: "Black",
        tag: "Essential",
        stock: 10,
        image: "images/v1.jpeg",
        desc: "The iconic Vans Slip-On featuring a black-and-white checkerboard pattern. Designed with a laceless construction, black canvas detailing, and a durable rubber outsole. A classic choice for effortless everyday styling.",
        sizes: ["42", "43", "44"]
    },
    {
        id: 6,
        name: "Vans Blocked Quarter Zip Pullover - Crewneck",
        brand: "Vans",
        category: "Outerwear",
        price: 3600000,
        color: "Red",
        stock: 1,
        image: "images/v2.jpeg",
        desc: "A bold red half-zip pullover featuring a stand-up collar, front kangaroo pocket, and subtle white piping details. Its relaxed silhouette creates a sporty yet casual look, making it a versatile addition to any wardrobe.",
        sizes: ["M", "L", "XL"]
    },
    {
        id: 7,
        name: "Adidas T-Shirt Stripes - Shirt",
        brand: "Adidas",
        category: "Dresses",
        price: 320000,
        color: "White",
        stock: 4,
        image: "images/ad1.jpeg",
        desc: "A classic white Adidas T-shirt featuring the iconic three black stripes along the sleeves and a signature logo on the chest. Its simple sporty design makes it easy to style with jeans, trousers, or shorts.",
        sizes: ["One Size (L)"]
    },
    {
        id: 8,
        name: "Nike Jordan Flight - Trouser",
        brand: "Nike",
        category: "Pants",
        price: 3450000,
        color: "Green",
        stock: 3,
        image: "images/nike2.jpeg",
        desc: "Olive green Jordan cargo pants featuring a relaxed silhouette and multiple utility-inspired pocket details. Designed with an elastic waistband, distinctive panel stitching, and a subtle Jumpman logo on the side. A versatile piece that brings a functional yet modern streetwear aesthetic.",
        sizes: ["S", "M", "L", "XL"]
    }
];

// ARCHIVES PRODUCTS (Past seasons)
const archivesData = [
    {
        id: 101,
        name: "New Balance Storefront Graphics - Shirt",
        brand: "New Balance",
        category: "Dresses",
        price: 520000,
        color: "White",
        tag: "Archive",
        image: "images/nb4.jpeg",
        desc: "The New Balance Storefront Graphic T-Shirt brings casual heritage style to your daily rotation. Crafted from soft pure cotton jersey, it feels breathable and smooth against the skin for easy, all-day comfort.",
        sizes: ["S", "M", "L"],
        stock: 0
    },
    {
        id: 102,
        name: "Nike Air Men's Tracksuits",
        brand: "Nike",
        category: "Pants",
        price: 2100000,
        color: "White",
        tag: "Archive",
        image: "images/nike3.jpeg",
        desc: "such as the Nike Air Heritage Tracksuit brings 1990s sportswear heritage into a relaxed, everyday matching set. It pairs a lightweight outer shell with a breathable lining for easy layering and comfort.",
        sizes: ["M", "L", "XL"],
        stock: 0
    },
    {
        id: 103,
        name: "Vans Herringbone Jacket",
        brand: "Vans",
        category: "Outerwear",
        price: 3200000,
        color: "Green",
        tag: "Archive",
        image: "images/v3.jpeg",
        desc: "a classic, workwear-inspired layering piece made for everyday casual wear. It pairs a structured cotton weave with a relaxed silhouette that layers cleanly over tees or hoodies.",
        sizes: ["S", "M", "L"],
        stock: 0
    },
    {
        id: 104,
        name: "Nike P6000 - Sneakers",
        brand: "Nike",
        category: "Shoes",
        price: 3600000,
        color: "Black",
        tag: "Archive",
        image: "images/nike4.jpeg",
        desc: "The Nike P-6000 Black draws direct inspiration from the classic Nike Pegasus 25 and Nike Pegasus 2006 running shoes. Its layered upper combines breathable mesh with synthetic and leather overlays, giving the sneaker a signature Y2K retro-runner look while keeping your feet cool.",
        sizes: ["40", "41", "42", "43"],
        stock: 0
    }
];

function getAllCatalogItems() {
    return [...productsData, ...archivesData];
}

// 2. APP STATE
let cart = JSON.parse(localStorage.getItem('vain_cart')) || [];
let activeFilters = {
    category: 'All',
    brands: ['All'],
    color: 'All',
    search: '',
    sort: 'featured'
};
let currentProductId = null;
let selectedSize = '';
let selectedColor = '';

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderHomePageProducts();
    renderShopProducts();
    renderArchivesProducts();
    updateCartBadge();
    initEventListeners();
});

// 4. NAVIGATION SYSTEM
function navigateTo(pageId) {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    const target = document.getElementById(`page-${pageId}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelectorAll('.main-nav a').forEach(a => {
        if (a.dataset.page === pageId) a.classList.add('active');
        else a.classList.remove('active');
    });

    closeModals();
}

function initNavigation() {
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const page = el.dataset.page;
            if (page) navigateTo(page);
        });
    });
}

// 5. RENDER PRODUCTS
function formatIDR(amount) {
    return 'IDR ' + amount.toLocaleString('id-ID');
}

function renderHomePageProducts() {
    const newGrid = document.getElementById('homeNewArrivalsGrid');
    const bestGrid = document.getElementById('homeBestSellersGrid');

    if (newGrid) {
        newGrid.innerHTML = productsData.slice(0, 4).map(p => productCardTemplate(p)).join('');
    }
    if (bestGrid) {
        bestGrid.innerHTML = productsData.slice(4, 8).map(p => productCardTemplate(p)).join('');
    }
}

function productCardTemplate(p) {
    return `
        <div class="product-card" onclick="openProductDetail(${p.id})">
            <div class="product-image-box">
                ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="product-meta">
                <h5>${p.brand}</h5>
                <h4>${p.name}</h4>
                <div class="product-price">${formatIDR(p.price)}</div>
            </div>
        </div>
    `;
}

function renderShopProducts() {
    const grid = document.getElementById('shopProductGrid');
    if (!grid) return;

    let filtered = productsData.filter(p => {
        const matchCat = activeFilters.category === 'All' || p.category === activeFilters.category;
        const matchBrand = activeFilters.brands.includes('All') || activeFilters.brands.includes(p.brand);
        const matchColor = activeFilters.color === 'All' || p.color === activeFilters.color;
        const q = activeFilters.search.trim().toLowerCase();
        const matchSearch = !q ||
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            (p.category && p.category.toLowerCase().includes(q));
        return matchCat && matchBrand && matchColor && matchSearch;
    });

    if (activeFilters.sort === 'latest') {
        filtered = filtered.filter(p => p.tag === 'New Arrival');
    } else if (activeFilters.sort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (activeFilters.sort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    }

    const countLabel = document.getElementById('productCountLabel');
    if (countLabel) {
        countLabel.innerText = `Showing ${filtered.length} products`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 4rem; color: var(--text-muted);">No products match your filter.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(p => productCardTemplate(p)).join('');
}

function renderArchivesProducts() {
    const grid = document.getElementById('archivesGrid');
    if (grid) {
        grid.innerHTML = archivesData.map(p => productCardTemplate(p)).join('');
    }
}

// 6. FILTER & SEARCH LOGIC

function clearBuyerInformation() {
    const fieldIds = [
        'chkName',
        'chkEmail',
        'chkPhone',
        'chkProvince',
        'chkCity',
        'chkDistrict',
        'chkPostal',
        'chkAddress'
    ];

    fieldIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.value = '';
            if (el.parentElement) {
                el.parentElement.classList.remove('invalid');
            }
        }
    });
}

function showNewsletterNotifModal(isSuccess, customTitle, customMessage) {
    const modal = document.getElementById('newsletterNotifModal');
    const iconEl = document.getElementById('newsletterNotifIcon');
    const titleEl = document.getElementById('newsletterNotifTitle');
    const msgEl = document.getElementById('newsletterNotifMessage');

    if (iconEl) {
        iconEl.innerHTML = isSuccess
            ? '<i class="fa-solid fa-circle-check" style="color: #2e7d32;"></i>'
            : '<i class="fa-solid fa-circle-xmark" style="color: #d32f2f;"></i>';
    }

    if (titleEl) {
        titleEl.textContent = customTitle || (isSuccess ? 'SUBSCRIBED' : 'SYSTEM ERROR');
    }

    if (msgEl) {
        msgEl.textContent = customMessage;
    }

    if (modal) {
        modal.classList.add('open');
    }
}

function closeNewsletterNotifModal() {
    const modal = document.getElementById('newsletterNotifModal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function showLoginNotifModal(isSuccess, customTitle, customMessage) {
    const modal = document.getElementById('loginNotifModal');
    const iconEl = document.getElementById('loginNotifIcon');
    const titleEl = document.getElementById('loginNotifTitle');
    const msgEl = document.getElementById('loginNotifMessage');

    if (iconEl) {
        iconEl.innerHTML = isSuccess
            ? '<i class="fa-solid fa-circle-check" style="color: #2e7d32;"></i>'
            : '<i class="fa-solid fa-circle-xmark" style="color: #d32f2f;"></i>';
    }

    if (titleEl) {
        titleEl.textContent = customTitle || (isSuccess ? 'SIGNED IN' : 'SYSTEM ERROR');
    }

    if (msgEl) {
        msgEl.textContent = customMessage;
    }

    if (modal) {
        modal.classList.add('open');
    }
}

function closeLoginNotifModal() {
    const modal = document.getElementById('loginNotifModal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function initEventListeners() {
    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileMenuDrawer');
    const closeMobile = document.getElementById('closeMobileMenu');

    if (mobileBtn && mobileDrawer) {
        mobileBtn.addEventListener('click', () => mobileDrawer.classList.add('open'));
    }
    if (closeMobile && mobileDrawer) {
        closeMobile.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    }

    // Search overlay
    const searchTrigger = document.getElementById('searchTrigger');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInputLive = document.getElementById('searchInputLive');
    const resultsBox = document.getElementById('searchResultsContainer');

    function runSearch(rawQuery) {
        if (!resultsBox) return;
        const q = rawQuery.trim().toLowerCase();
        if (!q) {
            resultsBox.innerHTML = '';
            return;
        }

        const found = getAllCatalogItems().filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            (p.category && p.category.toLowerCase().includes(q)) ||
            (p.color && p.color.toLowerCase().includes(q))
        );

        resultsBox.innerHTML = found.map(p => `
            <div class="search-result-item" style="display:flex; gap:1rem; align-items:center; cursor:pointer; padding:0.75rem; background:#FFF; border-bottom:1px solid #eee; transition: background 0.2s;"
                 onclick="openProductDetail(${p.id}); closeModals();">
                <img src="${p.image}" alt="${p.name}" width="50" height="60" style="object-fit:cover;">
                <div>
                    <h4 style="font-size:0.9rem; margin-bottom:0.2rem; color:#111;">${p.name}</h4>
                    <span style="font-size:0.8rem; color:var(--text-muted);">${p.brand} • ${formatIDR(p.price)}</span>
                </div>
            </div>
        `).join('') || '<p style="font-size:0.9rem; color:var(--text-muted); padding:1rem;">Item tidak ditemukan.</p>';
    }

    if (searchTrigger && searchOverlay) {
        searchTrigger.addEventListener('click', () => {
            searchOverlay.classList.add('open');
            if (searchInputLive) {
                setTimeout(() => searchInputLive.focus(), 100);
            }
        });
    }

    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('open');
            if (searchInputLive) searchInputLive.value = '';
            if (resultsBox) resultsBox.innerHTML = '';
        });
    }

    if (searchInputLive) {
        searchInputLive.addEventListener('input', (e) => {
            runSearch(e.target.value);
        });
    }

    // Quick search tags ("Most Search")
    document.querySelectorAll('.search-quick-tags .tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const term = btn.dataset.query || btn.textContent.trim();
            if (searchInputLive) {
                searchInputLive.value = term;
            }
            runSearch(term);
        });
    });

    // Account modal
    const accountTrigger = document.getElementById('accountTrigger');
    const accountModal = document.getElementById('accountModal');
    const closeAccModal = document.getElementById('closeAccountModal');
    if (accountTrigger && accountModal) {
        accountTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            accountModal.classList.add('open');
        });
    }
    if (closeAccModal && accountModal) {
        closeAccModal.addEventListener('click', () => accountModal.classList.remove('open'));
    }

    // Account Login Form Submission
    const loginForm = document.getElementById('accountLoginForm');
    const loginEmail = document.getElementById('loginEmailInput');
    const loginPassword = document.getElementById('loginPasswordInput');
    if (loginForm && loginEmail && loginPassword) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailVal = loginEmail.value.trim();
            const passVal = loginPassword.value.trim();

            if (!emailVal || !emailVal.includes('@')) {
                showLoginNotifModal(
                    false,
                    'ACCESS DENIED',
                    'Please enter a valid email address with "@".'
                );
                return;
            }

            if (!passVal) {
                showLoginNotifModal(
                    false,
                    'ACCESS DENIED',
                    'Please enter your password.'
                );
                return;
            }

            loginPassword.value = '';
            if (accountModal) accountModal.classList.remove('open');

            showLoginNotifModal(
                false,
                'SYSTEM ERROR',
                'Sign-in failed due to a system error. Please try again in a few moments.'
            );
        });
    }

    // Cart trigger
    const cartTrigger = document.getElementById('cartTrigger');
    if (cartTrigger) {
        cartTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            renderCartPage();
            navigateTo('cart');
        });
    }

    // Shop Category filter
    document.querySelectorAll('.filter-option').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.filter-option').forEach(o => o.classList.remove('active'));
            el.classList.add('active');
            activeFilters.category = el.dataset.category;
            renderShopProducts();
        });
    });

    // Shop Brand filter checkboxes
    document.querySelectorAll('.brand-chk').forEach(chk => {
        chk.addEventListener('change', () => {
            const checked = Array.from(document.querySelectorAll('.brand-chk:checked')).map(c => c.value);
            activeFilters.brands = checked.length ? checked : ['All'];
            renderShopProducts();
        });
    });

    // Color Swatches
    document.querySelectorAll('.c-swatch').forEach(sw => {
        sw.addEventListener('click', () => {
            document.querySelectorAll('.c-swatch').forEach(s => s.classList.remove('active'));
            sw.classList.add('active');
            activeFilters.color = sw.dataset.color;
            renderShopProducts();
        });
    });

    // Shop Search input
    const shopSearch = document.getElementById('shopSearchInput');
    if (shopSearch) {
        shopSearch.addEventListener('input', (e) => {
            activeFilters.search = e.target.value;
            renderShopProducts();
        });
    }

    // Sort select
    const sortSel = document.getElementById('sortSelect');
    if (sortSel) {
        sortSel.addEventListener('change', (e) => {
            activeFilters.sort = e.target.value;
            renderShopProducts();
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterInput = document.getElementById('newsletterEmailInput');
    if (newsletterForm && newsletterInput) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const val = newsletterInput.value.trim();

            if (!val || !val.includes('@')) {
                showNewsletterNotifModal(
                    false,
                    'ACCESS DENIED',
                    'Please enter a valid email address with "@".'
                );
                return;
            }

            newsletterInput.value = '';
            showNewsletterNotifModal(
                false,
                'SYSTEM ERROR',
                'Unable to process your email due to a system error. Please try again in a few moments.'
            );
        });
    }

    // Checkout Form Submission
    const chkForm = document.getElementById('checkoutForm');
    if (chkForm) {
        chkForm.onsubmit = function (e) {
            e.preventDefault();

            if (!validateCheckoutForm()) {
                return;
            }

            const boundaryModal = document.getElementById('paymentBoundaryModal');
            const randomId = '#RB-' + Math.floor(10000 + Math.random() * 90000);

            const orderIdEl = document.getElementById('finalOrderIdDisplay');
            if (orderIdEl) {
                orderIdEl.innerText = `Order ID: ${randomId}`;
            }

            clearBuyerInformation();

            if (boundaryModal) {
                boundaryModal.classList.add('open');
            }
        };
    }
}

function filterByCategory(cat) {
    activeFilters.category = cat;
    navigateTo('shop');
    document.querySelectorAll('.filter-option').forEach(o => {
        if (o.dataset.category === cat) o.classList.add('active');
        else o.classList.remove('active');
    });
    renderShopProducts();
}

function closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
    const searchOverlay = document.getElementById('searchOverlay');
    if (searchOverlay) searchOverlay.classList.remove('open');
    const mobileDrawer = document.getElementById('mobileMenuDrawer');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    const cartNotifModal = document.getElementById('cartNotifModal');
    if (cartNotifModal) cartNotifModal.classList.remove('open');
    const newsletterNotifModal = document.getElementById('newsletterNotifModal');
    if (newsletterNotifModal) newsletterNotifModal.classList.remove('open');
    const loginNotifModal = document.getElementById('loginNotifModal');
    if (loginNotifModal) loginNotifModal.classList.remove('open');
}

// 7. PRODUCT DETAIL VIEW (PDP)
function openProductDetail(id) {
    currentProductId = id;
    const p = getAllCatalogItems().find(item => item.id === id);
    if (!p) return;

    const sizes = Array.isArray(p.sizes) && p.sizes.length ? p.sizes : ['One Size'];
    selectedSize = sizes[0];
    selectedColor = p.color;

    const isOutOfStock = Number(p.stock) <= 0;
    const stockBadgeHtml = isOutOfStock
        ? `<div class="stock-status out-of-stock" style="color: #d32f2f; font-weight: 600;"><i class="fa-solid fa-circle-xmark" style="color: #d32f2f;"></i> Out of Stock / Archive Item</div>`
        : `<div class="stock-status" style="color: #2e7d32;"><i class="fa-solid fa-circle-check" style="color: #2e7d32;"></i> In Stock (${p.stock} units available)</div>`;
    const actionButtonsHtml = isOutOfStock
        ? `<div class="pdp-actions"><button class="btn-secondary-outline" disabled style="opacity:0.6; cursor:not-allowed;">ARCHIVE / SOLD OUT</button></div>`
        : `<div class="pdp-actions">
                <button class="btn-secondary-outline" onclick="addToCart(false)">ADD TO CART</button>
                <button class="btn-primary-dark" onclick="addToCart(true)">BUY NOW</button>
           </div>`;

    const pdpContainer = document.getElementById('pdpContainer');
    pdpContainer.innerHTML = `
        <div class="pdp-gallery">
            <div class="pdp-main-image">
                <img src="${p.image}" alt="${p.name}" id="mainPdpImg">
            </div>
        </div>
        <div class="pdp-details">
            <h4>${p.brand}</h4>
            <h1>${p.name}</h1>
            <span class="pdp-price">${formatIDR(p.price)}</span>
            <p class="pdp-desc">${p.desc || ''}</p>

            <div class="pdp-options-group">
                <label>Select Size: <strong id="selectedSizeLabel">${selectedSize}</strong></label>
                <div class="size-selector-row">
                    ${sizes.map((sz, idx) => `<button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize('${sz}', this)">${sz}</button>`).join('')}
                </div>
            </div>

            <div class="pdp-options-group">
                <label>Colorway: <strong>${p.color}</strong></label>
                <div class="color-dot active" style="background: ${getColorHex(p.color)}"></div>
            </div>

            ${stockBadgeHtml}
            ${actionButtonsHtml}
        </div>
    `;

    const relatedGrid = document.getElementById('relatedProductsGrid');
    const related = productsData.filter(item => item.category === p.category && item.id !== p.id).slice(0, 4);
    relatedGrid.innerHTML = related.map(item => productCardTemplate(item)).join('');

    navigateTo('detail');
}

function selectSize(size, btn) {
    selectedSize = size;
    document.getElementById('selectedSizeLabel').innerText = size;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function getColorHex(colorName) {
    switch (colorName) {
        case 'Black': return '#111111';
        case 'White': return '#ffffff';
        case 'Grey': return '#808080';
        case 'Red': return '#d32f2f';
        case 'Green': return '#4b5320';
        default: return '#111111';
    }
}

function goBackFromDetail() {
    navigateTo('shop');
}

// 8. CART MANAGEMENT
function showCartNotifModal(productName) {
    const modal = document.getElementById('cartNotifModal');
    const msgEl = document.getElementById('cartNotifMessage');

    if (msgEl) {
        msgEl.textContent = productName
            ? `"${productName}" has been added to your shopping cart.`
            : 'Product has been added to your shopping cart.';
    }

    if (modal) {
        modal.classList.add('open');
    }
}

function closeCartNotifModal() {
    const modal = document.getElementById('cartNotifModal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function addToCart(proceedToCheckout = false) {
    const p = getAllCatalogItems().find(item => item.id === currentProductId);
    if (!p || Number(p.stock) <= 0) return;

    const cartItemIndex = cart.findIndex(item => item.id === p.id && item.size === selectedSize);

    if (cartItemIndex > -1) {
        cart[cartItemIndex].qty += 1;
    } else {
        cart.push({
            id: p.id,
            name: p.name,
            brand: p.brand,
            price: p.price,
            image: p.image,
            size: selectedSize,
            color: selectedColor,
            qty: 1
        });
    }

    saveCart();
    updateCartBadge();

    if (proceedToCheckout) {
        renderCheckoutPage();
        navigateTo('checkout');
    } else {
        showCartNotifModal(p.name);
    }
}

function updateCartBadge() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartBadge').innerText = totalCount;
}

function saveCart() {
    localStorage.setItem('vain_cart', JSON.stringify(cart));
}

function renderCartPage() {
    const wrapper = document.getElementById('cartContentWrapper');
    if (!wrapper) return;

    if (cart.length === 0) {
        wrapper.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-regular fa-bag-shopping"></i>
                <h3>nothing in your cart</h3>
                <p style="color:var(--text-muted); margin-bottom:2rem;">browse our latest finds in the shop..</p>
                <button class="btn-primary-dark" style="width:250px; margin:0 auto;" onclick="navigateTo('shop')">START SHOPPING</button>
            </div>
        `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    wrapper.innerHTML = `
        <div class="cart-items-list">
            ${cart.map((item, index) => `
                <div class="cart-item-row">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.brand} | Size: ${item.size} | Color: ${item.color}</p>
                        <div class="cart-item-price">${formatIDR(item.price)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="qty-btn-box">
                            <button onclick="changeQty(${index}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button onclick="changeQty(${index}, 1)">+</button>
                        </div>
                        <button class="remove-item-btn" onclick="removeCartItem(${index})"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary-box">
            <h3>CART SUMMARY</h3>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatIDR(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Estimated Shipping</span>
                <span>Dihitung saat Checkout</span>
            </div>
            <div class="summary-row total">
                <span>Estimated Total</span>
                <span>${formatIDR(subtotal)}</span>
            </div>
            <button class="btn-primary-dark" onclick="prepareCheckout()">PROCEED TO CHECKOUT</button>
            <button class="btn-secondary-outline" style="width:100%; margin-top:0.75rem;" onclick="navigateTo('shop')">CONTINUE SHOPPING</button>
        </div>
    `;
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartBadge();
    renderCartPage();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    renderCartPage();
}

// 9. CHECKOUT LOGIC & BOUNDARY
function prepareCheckout() {
    if (cart.length === 0) {
        alert('your cart is empty.');
        return;
    }
    renderCheckoutPage();
    navigateTo('checkout');
}

function renderCheckoutPage() {
    const itemsList = document.getElementById('checkoutItemsList');
    const subtotalEl = document.getElementById('chkSubtotal');
    const shippingFeeEl = document.getElementById('chkShippingFee');
    const totalDueEl = document.getElementById('chkTotalDue');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    itemsList.innerHTML = cart.map(item => `
        <div class="chk-item-row">
            <span>${item.name} (x${item.qty})</span>
            <span>${formatIDR(item.price * item.qty)}</span>
        </div>
    `).join('');

    subtotalEl.innerText = formatIDR(subtotal);

    const selectedShippingRadio = document.querySelector('input[name="shippingMethod"]:checked');
    const shippingCost = selectedShippingRadio ? parseInt(selectedShippingRadio.dataset.cost) : 35000;

    shippingFeeEl.innerText = formatIDR(shippingCost);
    totalDueEl.innerText = formatIDR(subtotal + shippingCost);

    document.querySelectorAll('input[name="shippingMethod"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const cost = parseInt(radio.dataset.cost);
            shippingFeeEl.innerText = formatIDR(cost);
            totalDueEl.innerText = formatIDR(subtotal + cost);
        });
    });
}

function validateCheckoutForm() {
    let isValid = true;

    const name = document.getElementById('chkName');
    const email = document.getElementById('chkEmail');
    const phone = document.getElementById('chkPhone');
    const address = document.getElementById('chkAddress');

    if (!name.value.trim()) { name.parentElement.classList.add('invalid'); isValid = false; }
    else name.parentElement.classList.remove('invalid');

    if (!email.value.trim() || !email.value.includes('@')) { email.parentElement.classList.add('invalid'); isValid = false; }
    else email.parentElement.classList.remove('invalid');

    if (!phone.value.trim()) { phone.parentElement.classList.add('invalid'); isValid = false; }
    else phone.parentElement.classList.remove('invalid');

    if (!address.value.trim()) { address.parentElement.classList.add('invalid'); isValid = false; }
    else address.parentElement.classList.remove('invalid');

    return isValid;
}

function resetAndReturnHome() {
    cart = [];
    saveCart();
    updateCartBadge();
    closeModals();
    navigateTo('home');
}
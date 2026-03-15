var searchInput = document.getElementById('searchInput');
var searchClear = document.getElementById('searchClear');
var filterBtns = document.querySelectorAll('.filter-btn');
var productCards = document.querySelectorAll('.container-card');
var resultCount = document.getElementById('resultCount');

function toggleWish(btn) {
    if (btn && btn.classList) btn.classList.toggle('is-active');
}

function filterProducts() {
    if (!searchInput || !resultCount) return;

    let searchTerm = searchInput.value.toLowerCase();

    let activeFilter = "all";

    filterBtns.forEach((btn) => {

        if (btn.getAttribute("class") === "filter-btn active") {
            activeFilter = btn.getAttribute("data-filter");
        }
    });

    let visibleCount = 0;

    productCards.forEach((card) => {

        let productName = card.querySelector('.product-name').textContent.toLowerCase();
        let productCategory = card.querySelector('.product-category').textContent.toLowerCase();

        let matchesSearch = productName.includes(searchTerm);

        let matchesFilter = false;

        if (activeFilter === 'all') {
            matchesFilter = true;
        } else if (activeFilter === 'tshirt' && productCategory === 't-shirt') {

            matchesFilter = true;
        } else if (productCategory === activeFilter) {

            matchesFilter = true;
        }

        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';

            visibleCount = visibleCount + 1;
        } else {

            card.style.display = 'none';
        }
    });

    resultCount.innerHTML = 'Showing <strong>' + visibleCount + '</strong> products';
}

if (searchInput) searchInput.addEventListener('input', function () {

    if (searchInput.value !== "") {
        searchClear.style.display = 'block';
    } else {
        searchClear.style.display = 'none';
    }

    filterProducts();
});
if (searchClear) searchClear.addEventListener('click', function () {
    searchInput.value = '';
    searchClear.style.display = 'none';
    filterProducts();
});
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.setAttribute('class', 'filter-btn'); });
        btn.setAttribute('class', 'filter-btn active');
        filterProducts();
    });
});
if (searchInput) filterProducts();

if (productCards.length) {
    productCards.forEach(function (el) { el.classList.add('reveal'); });
    function reveal() {
        productCards.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) el.classList.add('revealed');
        });
    }
    reveal();
    window.addEventListener('scroll', reveal);
}
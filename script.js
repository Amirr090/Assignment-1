/* Sneaker filter */
let NikeAirMax ={
    name: "Nike Air Max Waffle",
    gender: "Men's Shoes",
    price: 229.00,
    image: "images/NIKE+AIR+MAX+WAFFLE+SP.png",
    category: "New Releases",
}
let MadeinUSA990v6 = {
    name:" New Balances Made in USA 990v6",
    gender: "Men's Shoes",
    price: 229.00,
    image: "images/MadeInUSA_990v6.webp",
    category: "New Releases",
}
let NikeDunks = {
    name: "Nike Dunk Low Retro",
    gender: "Men's Shoes",
    price: 99.90,
    image: "images/NIKE+DUNK+LOW+RETRO.png",
    category: "On Sale",
}
let AirJordan1W = {
    name: "Nike Air Jordan 1 Low",
    gender: "Women's Shoes",
    price: 129.00,
    image: "images/WMNS+AIR+JORDAN+1+LOW.png",
    category: "On Sale",
}
let NewBalance80 = {
    name: "New Balance 80",
    gender: "Women's Shoes",
    price: 120.00,
    image: "images/NewBalance_80_Womens.webp",
    category: "On Sale",
}
let GazelleShoes = {
    name: " Adidas Gazelle Shoes",
    gender: "Men's Shoes",
    price: 79.50,
    image: "images/adidas-gazelle-shoes.avif",
    category: "On Sale",
}
let NikeCity = {
    name: "Nike CITY Brownstone'",
    gender: "Men's Shoes",
    price: 155.00,
    image: "images/NIKE+C1TY1.png"
}
let AirJordan1M = {
    name:  "Nike Air Jordan 1 Low SE",
    gender: "Men's Shoes",
    price: 129.90,
    image: "images/AIR+JORDAN+1+LOW+SE.png",
    category: "New Releases",
}
let Sambas = {
    name: " Adidas Samba OG Shoes",
    gender: "Men's Shoes",
    price:140.00,
    image: "images/Samba_OG_Shoes_White_B75806_01_00_standard.avif",
    category: "New Releases",
}
const products = [NikeAirMax, MadeinUSA990v6, NikeDunks, AirJordan1W, NewBalance80, 
    GazelleShoes, NikeCity, AirJordan1M, Sambas];
function applyFilters() {
    // Get selected filter values
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(input => input.value);
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(input => input.value);
    const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(input => input.value);

    // Filter products based on selected categories
    let filteredProducts = products;
    
    // Filter by Category
    if (selectedCategories.length > 0) {
        if (!selectedCategories.includes("All")) {
            filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
        }
    }
    // Filter by Brand
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            if (selectedBrands.includes("nike") && product.name.includes("Nike")) return true;
            else if (selectedBrands.includes("adidas") && product.name.includes("Adidas")) return true;
            else if (selectedBrands.includes("new balance") && product.name.includes("New Balance")) return true;
            else return false;
        });
    }

    // Filter by Price
    if (selectedPrices.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            if (selectedPrices.includes("below150") && product.price < 150) return true;
            else if (selectedPrices.includes("below250") && product.price < 250) return true;
            else return false;
        });
    }
    // Display the filtered products
    displayProducts(filteredProducts);
}

// Display products based on filtered results
function displayProducts(filteredProducts) {
    const container = document.getElementById("flexbox");
    container.innerHTML = ''; // Clear the container before adding new filtered products
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("sneaker-product-display");
        // Handle click event for specific product
        if (product.name === 'Nike Dunk Low Retro') {
            productDiv.addEventListener("click", () => {
                window.location.href = "product_page.html";
            });
        }

        // Create HTML content for each product
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}<br>${product.gender}<br>S$${product.price}</p>
        `;

        // Append the product div to the container
        container.appendChild(productDiv);
    });
}
// Add event listeners to filter checkboxes
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters); // Trigger filter updates whenever a checkbox is clicked
});

// Initial display (show all products)
displayProducts(products);
// Add event listeners to filter checkboxes
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters); // Trigger filter updates whenever a checkbox is clicked
});
// Initial display (show all products)
displayProducts(products);


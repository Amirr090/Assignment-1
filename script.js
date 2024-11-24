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

// Function to display products
function displayProducts(filteredProducts) {
    const container = document.getElementById("flexbox");
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("sneaker-product-display");
        if (product.name === 'Nike Dunk Low Retro') {
            productDiv.addEventListener("click", () => {
                window.location.href = "product_page.html";
            })
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
function filterByCategory() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;

    let filteredProducts;
    
    if (selectedCategory === "New Releases") {
        // Filter products based on category
        filteredProducts = products.filter(product => product.category === selectedCategory);
    } else if (selectedCategory === "On Sale") {
        // Filter products based on category
        filteredProducts = products.filter(product => product.category === selectedCategory);
    } else if (selectedCategory === "All") {
        // Display all products
        filteredProducts = products;
    }
    displayProducts(filteredProducts);
}
// Function to filter products based on price
function filterByPrice() {
    const selectedPrice = document.querySelector('input[name="price"]:checked').value;
    let filteredProducts;
    if (selectedPrice === "below150") {
        // Filter products below $150
        filteredProducts = products.filter(product => product.price < 150.00);
    } else if (selectedPrice === "below250") {
        // Filter products above $150
        filteredProducts = products.filter(product => product.price <250.00);
    } 
    displayProducts(filteredProducts);
}
// Button Filters for Brands
var button = document.getElementById("nike");
button.addEventListener("click", () => {
    filteredProducts = products.filter(product => product.name.includes("Nike"));
    displayProducts(filteredProducts);
})
var button = document.getElementById("adidas");
button.addEventListener("click", () => {
    filteredProducts = products.filter(product => product.name.includes("Adidas"));
    displayProducts(filteredProducts);
})
var button = document.getElementById("newbalance");
button.addEventListener("click", () => {
    filteredProducts = products.filter(product => product.name.includes("New Balance"));
    displayProducts(filteredProducts);
})
displayProducts(products);

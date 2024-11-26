let NikeDunks = {
    name: "Nike Dunk Low Retro",
    gender: "Men's Shoes",
    price: 99.90,
    image: "images/NIKE+DUNK+LOW+RETRO.png",
    category: "On Sale",
};
let count = 0;
function CartSummary(product,count) {
    totalprice = count*product.price;
    document.getElementById("cart-summary").innerHTML = `Total Price: S$${totalprice}`;
    document.getElementById("cart-summary").classList.add("summary");
}
// Check the current page based on the URL and execute the corresponding logic
if (window.location.pathname.includes("product_page.html")) {
    // Product page logic (index.html)
    document.getElementById("add-to-cart").addEventListener("click", function() {
        // Store the NikeDunks object in localStorage
        localStorage.setItem("cartItem", JSON.stringify(NikeDunks));
        // Alert the user that the item was added to the cart
        alert("Item added to cart!");
        // Redirect to cart page (cart.html) to show the added item
        window.location.href = "cart_page.html"; // Redirect to the cart page
    });
} else if (window.location.pathname.includes("cart_page.html")) {
    // Cart page logic (cart.html)
    count+=1;
    const cartItem = JSON.parse(localStorage.getItem("cartItem"));
    if (cartItem) {
        // Display the cart item
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item-display");
        cartItemDiv.innerHTML = `
        <img src="${cartItem.image}" alt="${cartItem.name}">
        <p>${cartItem.name}<br>${cartItem.gender}<br>S$${cartItem.price}</p>
        `;
        document.getElementById("cart-item").appendChild(cartItemDiv);
        CartSummary(cartItem,count);
        document.getElementById("cart-item").style.display = "block";
    } else {
        // If no item is found in the cart
        document.getElementById("remove-cart-item").style.display = "none";
        alert("Your cart is empty.");
    }
    // Remove item from cart
    document.getElementById("remove-cart-item").addEventListener("click", function() {
        count-=1;
        localStorage.removeItem("cartItem"); // Remove the cart item from localStorage
        document.getElementById("cart-item").style.display = "none"; // Hide the cart item
        document.getElementById("remove-cart-item").style.display = "none"; // Hide the remove button
        CartSummary(cartItem,count);
    });
    // Back function to go previous window
    document.getElementById("back-cart").addEventListener("click", function() {
        window.location.href = "product_page.html"; // Redirect to the product page
    });
}

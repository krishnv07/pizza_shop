document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cart = [];

    document.querySelectorAll('.pizza-item .cta-button').forEach(button => {
        button.addEventListener('click', function() {
            const pizzaName = this.previousElementSibling.previousElementSibling.textContent;
            const pizzaPrice = parseFloat(this.getAttribute('data-price'));

            addItemToCart(pizzaName, pizzaPrice);
        });
    });

    function addItemToCart(name, price) {
        const cartItem = { name, price };
        cart.push(cartItem);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        // Clear the current cart items display
        cartItemsContainer.innerHTML = '';

        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <h4>${item.name}</h4>
                <span class="item-price">$${item.price.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        // Update the total price
        cartTotalElement.textContent = total.toFixed(2);
    }

    // Handle checkout button click
    document.getElementById('checkout-button').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            // Clear the cart after checkout
            cart = [];
            updateCartDisplay();
        }
    });
});

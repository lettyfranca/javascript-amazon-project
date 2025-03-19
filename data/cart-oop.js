//Use PascalCase for things that generate objects
function Cart(localStorageKey) {
    const cart = { //this é referente ao nome do objeto, nesse caso 'cart'
        cartItems: undefined,
    
        loadFromStorage: function() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
          
            if (!this.cartItems) {
                this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
                }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
                }];
            }
        },
    
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
    
        addToCart(productId) {
            let matchingItem;
      
            this.cartItems.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                matchingItem = cartItem;
              }
            });
      
            if (matchingItem) {
              matchingItem.quantity += 1;
            } else {
              this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
              });
            }
      
            this.saveToStorage();
        },
    
        removeFromCart(productId) {
            const newCart = [];
        
            this.cartItems.forEach((cartItem) => {
              if (cartItem.productId !== productId) {
                newCart.push(cartItem);
              }
            });
        
            this.cartItems = newCart;
        
            this.saveToStorage();
        },
    
        calculateCartQuantity() {
            let cartQuantity = 0;
          
            this.cartItems.forEach((cartItem) => {
              cartQuantity += cartItem.quantity;
            });
        
            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
            return cartQuantity;
        },
    
        updateQuantity(productId, newQuantity) {
            let matchingProduct;
          
            this.cartItems.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                matchingProduct = cartItem;
              }
            });
          
            if (matchingProduct) {
              if (newQuantity >= 0 && newQuantity < 1000) {
                matchingProduct.quantity = newQuantity;
                this.saveToStorage();
                this.calculateCartQuantity();
                document.querySelector('.js-quantity-new').innerHTML = newQuantity;
              } else {
                alert("Ta quantity should be between 0 and 999");
              }
            };
        },
          
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;
          
            this.cartItems.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                matchingItem = cartItem;
              }
            });
          
            matchingItem.deliveryOptionId = deliveryOptionId;
          
            this.saveToStorage();
        }
    };

    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);





  

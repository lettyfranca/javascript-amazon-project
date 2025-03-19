export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let addMsgTime;
    let validationItem;
    const quantAdd = parseInt(document.querySelector(`.js-quantity-selector-${productId}`).value);
    const addMsg = document.querySelector(`.js-added-msg-${productId}`);
  
    clearTimeout(addMsgTime);
      
    addMsg.classList.add('added-show-msg');
  
    addMsgTime = setTimeout(() => {
      addMsg.classList.remove('added-show-msg');
    },2000);
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        validationItem = cartItem;
      }
    });
  
    if (validationItem) {
      validationItem.quantity += quantAdd;
    } else {
      cart.push({
        productId,
        quantity: quantAdd,
        deliveryOptionId: '1'
      });
    }

    saveToStorage();
  }

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    cart = newCart;

    saveToStorage();
  }

export function calculateCartQuantity() {
    let cartQuantity = 0;
  
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    return cartQuantity;
  };
  
export function updateQuantity(productId, newQuantity) {
  let matchingProduct;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingProduct = cartItem;
    }
  });

  if (matchingProduct) {
    if (newQuantity >= 0 && newQuantity < 1000) {
      matchingProduct.quantity = newQuantity;
      saveToStorage();
      calculateCartQuantity();
      document.querySelector('.js-quantity-new').innerHTML = newQuantity;
    } else {
      alert("Ta quantity should be between 0 and 999");
    }
  };
};

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}
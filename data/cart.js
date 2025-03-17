export const cart = [];

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
        quantity: quantAdd
      });
    }
  }
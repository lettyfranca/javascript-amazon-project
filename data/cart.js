export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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
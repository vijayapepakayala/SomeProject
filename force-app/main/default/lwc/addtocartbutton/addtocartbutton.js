import { LightningElement, api } from 'lwc';

export default class AddToCartButton extends LightningElement {
  @api product;

  addToCart() {
    const cartEvent = new CustomEvent('addtocart', {
      detail: this.product
    });
    this.dispatchEvent(cartEvent);
  }
}

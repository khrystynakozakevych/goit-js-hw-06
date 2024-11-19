'use strict';
class Storage {
  #items = []; // Private property to store the items

  constructor(items) {
    this.#items = items; // Assign the new array to the private property
  }

  getItems() {
    return this.#items; // Return the private items array
  }

  addItem(newItem) {
    this.#items.push(newItem); // Add the new item to the array
  }

  removeItem(itemToRemove) {
    // Filter out the item that matches itemToRemove
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

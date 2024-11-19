'use strict';
class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str; // Add the string at the end of the value
  }

  padStart(str) {
    this.#value = str + this.#value; // Add the string at the start of the value
  }

  padBoth(str) {
    this.#value = str + this.#value + str; // Add the string both at the start and at the end of the value
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

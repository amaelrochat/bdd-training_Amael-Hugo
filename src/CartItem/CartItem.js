"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #name;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#articleIdSetter(articleId);
        this.#name(name);
        this.quantity(quantity);
        this.price(quantity)
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
        //TODO Implement this method
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#validateQuantity(value);
        return this.#quantity = value;
    }

    get price() {
        //TODO Implement this method
    }

    set price(value) {
        //TODO Implement this method
    }

    get total() {
        //TODO Implement this method
    }
    //endregion public methods

    //region private methods
    set #articleIdSetter(value) {
        this.#validateArticleId(value);
        return this.#articleId = value;
    }

    set #name(value) {
        //TODO Implement this method
    }

    #validateArticleId(articleId) {
        if (articleId >= 1) {
            return articleId;
        }
        else {
            throw new InvalidArticleIdException();
        }
    }

    #validateQuantity(quantity) {
        if (quantity >= 1) {
            return quantity;
        }
        else {
            throw new InvalidQuantityException();
        }
    }

    #validatePrice(price) {
        //TODO Implement this method
    }
    //endregion private methods
}




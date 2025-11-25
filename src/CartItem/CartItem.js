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
        this.quantity(quantity);
        this.price(quantity);
        this.#nameSetter(articleId);
    }   


    get articleId() {
        return this.#articleId;
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#validateQuantity(value);
        return this.#quantity = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#validatePrice(value);
        return this.#price = value;
    }

    get total() {
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    set #articleIdSetter(value) {
        this.#validateArticleId(value);
        return this.#articleId = value;
    }

    set #nameSetter(value) {
        return this.#price = value;
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
        if (price < 10) {
            return InvalidPriceException;
        }
        if (price.type !== 'integer') {
            return InvalidPriceException;
        }
        else {
            return price;
        }

    }
    //endregion private methods
}




class Topping {
    constructor() {
        this.data = ['mayo', 'spices']
        return this.data
    }
}


class Hamburger {
    static #SIZE_SMALL = {
        size: 'small',
        price: 50,
        callories: 20
    }

    static #SIZE_LARGE = {
        size: 'large',
        price: 100,
        callories: 40
    }

    static #STUFFING_CHEESE = {
        stuffing: 'cheese',
        price: 10,
        callories: 20
    }

    static #STUFFING_POTATO = {
        stuffing: 'potato',
        price: 15,
        callories: 10
    }

    static #STUFFING_SALAD = {
        stuffing: 'salad',
        price: 20,
        callories: 5
    }

    static #TOPPING_MAYO = {
        topping: 'mayo',
        price: 20,
        callories: 5
    }

    static #TOPPING_SPICES = {
        topping: 'spices',
        price: 15,
        callories: 0
    }

    static get SIZE_SMALL() {
        return this.#SIZE_SMALL.size
    }

    static get SIZE_LARGE() {
        return this.#SIZE_LARGE.size
    }

    static get STUFFING_CHEESE() {
        return this.#STUFFING_CHEESE.stuffing
    }

    static get STUFFING_POTATO() {
        return this.#STUFFING_POTATO.stuffing
    }

    static get STUFFING_SALAD() {
        return this.#STUFFING_SALAD.stuffing
    }

    static get TOPPING_MAYO() {
        return this.#TOPPING_MAYO.topping
    }

    static get TOPPING_SPICES() {
        return this.#TOPPING_SPICES.topping
    }

    constructor(size, stuffing) {
        this.size = size,
        this.stuffing = stuffing,
        this.toppings = []
    }

    calculatePrice() {
        let totalPrice = 0;

            if (this.size == Hamburger.#SIZE_SMALL.size) {
                totalPrice += Hamburger.#SIZE_SMALL.price
            } else {
                totalPrice += Hamburger.#SIZE_LARGE.price
            }

            if (this.stuffing == Hamburger.#STUFFING_CHEESE.stuffing) {
                totalPrice += Hamburger.#STUFFING_CHEESE.price
            } else if (this.stuffing == Hamburger.#STUFFING_POTATO.stuffing) {
                totalPrice += Hamburger.#STUFFING_POTATO.price
            } else if (this.stuffing == Hamburger.#STUFFING_SALAD.stuffing) {
                totalPrice += Hamburger.#STUFFING_SALAD.price
            }

            if (this.toppings.length > 0) {
                for (let value of this.toppings) {
                    if (value == Hamburger.#TOPPING_MAYO.topping) {
                        totalPrice += Hamburger.#TOPPING_MAYO.price
                    } else if (value == Hamburger.#TOPPING_SPICES.topping) {
                        totalPrice += Hamburger.#TOPPING_SPICES.price
                    }
                }
            }
        return totalPrice;   
    }

    calculate() {
        let totalCallories = 0;

        if (this.size == Hamburger.#SIZE_SMALL.size) {
            totalCallories += Hamburger.#SIZE_SMALL.callories
        } else {
            totalCallories += Hamburger.#SIZE_LARGE.callories
        }

        if (this.stuffing == Hamburger.#STUFFING_CHEESE.stuffing) {
            totalCallories += Hamburger.#STUFFING_CHEESE.callories
        } else if (this.stuffing == Hamburger.#STUFFING_POTATO.stuffing) {
            totalCallories += Hamburger.#STUFFING_POTATO.callories
        } else if (this.stuffing == Hamburger.#STUFFING_SALAD.stuffing) {
            totalCallories += Hamburger.#STUFFING_SALAD.callories
        }

        if (this.toppings.length > 0) {
            for (let value of this.toppings) {
                if (value == Hamburger.#TOPPING_MAYO.topping) {
                    totalCallories += Hamburger.#TOPPING_MAYO.callories
                } else if (value == Hamburger.#TOPPING_SPICES.topping) {
                    totalCallories += Hamburger.#TOPPING_SPICES.callories
                }
            }
        }

    return totalCallories;
    }

    addTopping(topping) {
        const toppingList = new Topping();
        if (toppingList.includes(topping)) {
            this.toppings.push(topping)
        } else {
            throw new Error('This topping is not available now')
        }
    }

    removeTopping(topping) {
        if (this.toppings.includes(topping)) {
            const index = this.toppings.indexOf(topping)
            this.toppings.splice(index, 1)
        } else {
            throw new Error('You have not added this topping')
        }
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO)
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger.calculate());
console.log(hamburger.calculatePrice());

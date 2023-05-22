const userName = document.querySelector('#userName')
const sizes = [...document.querySelectorAll('#size')]
const ordersList = document.querySelector('.order__list')
const form = document.querySelector('form')
const error = document.querySelector('.order__error')

const hamburger = {
    sizes: {
        small: {
            price: 50,
            callories: 20
        }, 
        large: {
            price: 100,
            callories: 40
        }
    },

    stuffings: {
        cheese: {
            price: 10,
            callories: 20
        },

        potato: {
            price: 15,
            callories: 10
        },

        salad: {
            price: 20,
            callories: 5
        }
    },

    toppings: {
        mayo: {
            price: 20,
            callories: 5
        },

        spices: {
            price: 15,
            callories: 0
        }
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const order = {};

    order.name = userName.value;
   
    sizes.forEach((item) => {
        if (item.selected) {
           order.size = item.value
        }
    })
  
    const stuffing = [...document.querySelectorAll('#stuffing')];
        if (stuffing.every((item) => item.checked == false)) {
            writeError();
        } else {
            order.stuffing = [];
            stuffing.forEach((item) => {
                if (item.checked) {
                    order.stuffing.push(item.value)
                }
            })
        }
        
    const topping = [...document.querySelectorAll('#topping')];
    if (topping.every((item) => item.checked == false)) {
        writeError() 
    } else {
        order.topping = [];
        topping.forEach((item) => {
            if (item.checked) {
                order.topping.push(item.value)
            }
        })
    }

    addNewOrder(order);
    event.target.reset()
})

function writeError() {
    error.style.display = 'block'
    setTimeout (() => {
      error.style.display = 'none'
    }, 4000)
    throw new Error;
}


function addNewOrder(order) {
    const newOrder = document.createElement('div');
    ordersList.append(newOrder)
    newOrder.innerHTML = (`Привет, ${order.name}. Ваш заказ ${order.size} бургер с ${order.stuffing.join(', ')}, ${order.topping.join(', ')} будет готов в течении ${Math.round(Math.random()*60)} минут.
    Стоимость заказа: ${calculatePrice(order)}.
    Кол-во каллорий: ${calculateCallories(order)}
    `);
}

function calculatePrice(order) {
    let totalPrice = 0;

    if (order.size == 'small') {
        totalPrice += hamburger.sizes.small.price
    } else {
        totalPrice +=  hamburger.sizes.large.price
    }

    order.stuffing.forEach((item) => {
        if (item == 'potato') {
            totalPrice += hamburger.stuffings.potato.price 
        } else if (item == 'salad') {
            totalPrice += hamburger.stuffings.salad.price
        } else if (item == 'cheese') {
            totalPrice += hamburger.stuffings.cheese.price
        }
    })

   order.topping.forEach((item) => {
    if (item == 'mayo') {
        totalPrice += hamburger.toppings.mayo.price
    } else if (item == 'spices') {
        totalPrice += hamburger.toppings.spices.price
    }
   })

    return totalPrice;
} 



function calculateCallories(order) {
    let totalCallories = 0;

    if (order.size == 'small') {
        totalCallories += hamburger.sizes.small.callories
    } else {
        totalCallories +=  hamburger.sizes.large.callories
    }

    order.stuffing.forEach((item) => {
        if (item== 'potato') {
            totalCallories += hamburger.stuffings.potato.callories 
        } else if (item == 'salad') {
            totalCallories += hamburger.stuffings.salad.callories
        } else if (item == 'cheese') {
            totalCallories += hamburger.stuffings.cheese.callories
        }
    })

   order.topping.forEach((item) => {
    if (item == 'mayo') {
        totalCallories += hamburger.toppings.mayo.callories
    } else if (item == 'spices') {
        totalCallories += hamburger.toppings.spices.callories
    }
   })

    return totalCallories;
}
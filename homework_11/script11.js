const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

class Vegetable {
    constructor(obj) {
        this.type = 'Vegetable',
        this.seasonKoef = 1.3,
        this.name = obj.name,
        this.icon = obj.icon,
        this.price = obj.price

        if (obj.season) {
            this.season = obj.season
        }
    }

    getPrice() {
        if (this.season) {
            this.price = this.price * this.seasonKoef
        }
        return this.price
    }

    getInfo() {
        if (this.season) {
            listElements += (`<li>Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}. Season: ${this.season}</li>`)
        } else {
            listElements += (`<li>Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}</>`)
        }
    }
}


let listElements = ``
vegetables.map(item => new Vegetable(item)).forEach((item) => {
    item.getPrice();
    item.getInfo();
})
document.write(`<ul>${listElements}</ul>`)

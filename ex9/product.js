var products = [
    {
        name: 'Gun',
        price: 100,
        desc: "10 units",
        id: 10
    },
    {
        name: 'Bullets',
        price: 1000,
        desc: "9 mm",
        id: 20
    }
];
function getProductById(id) {
    if (products.filter(function (p) { return p.id === id; })) {
        return products.filter(function (p) { return p.id === id; });
    }
    else {
        return "undefined";
    }
}
console.log(getProductById(10));
console.log(getProductById(30));

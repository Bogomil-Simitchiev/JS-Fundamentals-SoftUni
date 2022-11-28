function solve(input) {
    class Product {
        constructor(productName, productPrice) {
            this.productName = productName;
            this.productPrice = productPrice;
        }
    }
    let products = [];
    for (let str of input) {
        let splitInfo = str.split(' : ');
        let name = splitInfo[0];
        let price = splitInfo[1];
        let product = new Product(name, price);
        products.push(product);
    }
    products.sort((a, b) => a.productName.localeCompare(b.productName));

    let characters = [];
    for (let product of products) {
        if (!characters.includes(product.productName[0])) {
            characters.push(product.productName[0])
        }
    }
    for (let char of characters) {
        
        console.log(char);
        let arrayOfCurrentProducts = products.filter(x=>x.productName[0]==char);
        arrayOfCurrentProducts.forEach(x => console.log("  "+x.productName+": "+x.productPrice));


    }

    
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
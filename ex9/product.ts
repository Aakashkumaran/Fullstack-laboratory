interface product{
    name:string,
    price:number,
    desc:string,
    id:number
}
const products:product[]=[
    {
    name: 'Gun',
    price:100,
    desc:"10 units",
    id:10
     },
     {
        name:'Bullets',
        price:1000,
        desc:"9 mm",
        id:20
     }
]
function getProductById(id:number){
    if(products.filter(p=>p.id===id))
    {
        return products.filter(p=>p.id===id)
    }
    else {
        return "undefined"
    }
}
console.log(getProductById(10))
console.log(getProductById(20))
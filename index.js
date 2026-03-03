let UserData=[
  { id: 1, name: "Laptop", price: 1200, quantity: 5, category: "Electronics" },
  { id: 2, name: "Shirt", price: 40, quantity: 0, category: "Clothing" }
];


//add product 
let _id=3;
function addProduct(name,price,quantity,category){
    const data={
        id:_id,name,price,quantity,category
    }
    UserData.push(data);
    console.log("UserData add successful..");
    _id++;
}
// addProduct("watch",1500,2,"Electronics");
 

// view All Products.
function viewAllProducts(){
    console.log(UserData)
}
// viewAllProducts();
 

// Remove Product
function removeProduct(_id){
    UserData=UserData.filter((user)=>user.id!=_id);
}
// removeProduct(1)
 

// Update product
function updateQuantity(id,name,price,quantity,category){
    UserData=UserData.map((user)=>{
        if(user.id==id){
            return {id,name,price,quantity,category}
        }
        return user;
    })
}
// updateQuantity(2,"watch",1500,2,"Electronics");
// viewAllProducts();
 
// check total product avilable
function getInStockProducts(){
    const Product=UserData.reduce((acc,curr)=>{
        return acc+=curr.quantity;
    },0)
    console.log("Total Product quantity is : ",Product);
}
getInStockProducts();

// all product total price
function getTotalPrice(){
    const price=UserData.reduce((acc,curr)=>{
        return acc+=(curr.price*curr.quantity);
    },0)
    console.log("Total Price is: ",price);
}
getTotalPrice();

// Group by product
function groupByCategory(Category){
    let category=UserData.filter((user)=>{
        return user.category==Category;
    });
    console.log(category);
}
// groupByCategory("Electronics");


// Low product
function getLowStockProducts(threshold){
    let avilableStock=UserData.filter((user)=>{
        if(user.quantity > threshold){
            return user;
        }
    })
    console.log(avilableStock);  
}
// getLowStockProducts(5);
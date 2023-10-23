export const total =(cart)=>{
    console.log(cart);
    let totalAmount=0;
    let totalprice=0;
    for (let item of cart.values()){
        totalAmount += item.amount;
        totalprice += item.amount * item.price;
    }
    return{totalAmount,totalprice}
}
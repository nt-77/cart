import { CLEAR_LIST,REMOVE,DECREASE,INCREASE,TOTAL_AMOUNT } from './action';

const reducer=(state,actions)=>{
    if(actions.type===CLEAR_LIST){
        return {...state,cart:new Map()}
    }
    if(actions.type===REMOVE){
        const newCart= new Map(state.cart)
        newCart.delete(actions.payload.id)
    return {...state,cart: newCart}
    }
    if (actions.type===INCREASE){
        const newCart = new Map(state.cart)
        const target = newCart.get(actions.payload.id)
        const newAmount = {...target, amount:target.amount + 1};
        // console.log(newAmount);
        newCart.set(actions.payload.id,newAmount)
        return{...state,cart : newCart}
    }
    if (actions.type===DECREASE){
        const newCart = new Map(state.cart)
        const target = newCart.get(actions.payload.id)
        const newAmount = {...target, amount:target.amount - 1};
        // console.log(newAmount);
        if(newAmount.amount ===0){
            newCart.delete(actions.payload.id)
            return {...state,cart: newCart}
        }
        newCart.set(actions.payload.id,newAmount)
        return{...state,cart : newCart}
    }
     throw new Error(`no match for action type found in ${action.type}`)
}
export default reducer;
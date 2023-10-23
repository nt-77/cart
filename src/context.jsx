import {useContext,createContext,useState, useReducer} from 'react'
import reducer from './reducer'
import { CLEAR_LIST,REMOVE,DECREASE,INCREASE,TOTAL_AMOUNT } from './action';
import cartItems from './data'
import { total } from './utils.js';

const AppContext=createContext();
// const mappedCart = cartItems.map((item)=>[item.id,item]);

const initialState = {
    loading:false,
    cart:new Map(cartItems.map((item)=>[item.id,item])),
};


export const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)
// const[greeting,setGreeting]= useState("greeting")
    const {totalprice,totalAmount}= total(state.cart)

        const clearCart=()=>{
            dispatch({type:CLEAR_LIST});
        };

        const removeItem=(id)=>{
            dispatch ({type:REMOVE,payload:{id}});
        };
        const increaseItem=(id)=>{
            dispatch({type:INCREASE,payload:{id}})
        }
        const decreaseItem=(id)=>{
            dispatch({type:DECREASE,payload:{id}})
        }

    return <AppContext.Provider value={{...state,clearCart,removeItem,increaseItem,decreaseItem,totalprice,totalAmount }} >{children}</AppContext.Provider>
};
export const useGlobalContext=()=>{
    return useContext(AppContext);
};
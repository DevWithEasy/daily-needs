import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CartProductTypes, ProductTypes } from './store.types';

type ProductStore = {
    cart : CartProductTypes[]
    products : []
    setProduct : ()=>void
    setAddCart : ()=>void
    setRemoveCart : ()=>void
    setAdjustCart : ()=>void
}

const productStore = (set)=>({
    cart : [],
    products : [],
    setProducts : (data : ProductTypes[])=>{

        set(()=>({
            products : data
        }))
        
    },
    setAddCart :(product : ProductTypes)=>{

        set((state :ProductStore)=>{
            const inCart = state.cart.find(item=>item._id === product._id ? true : false)
            if (inCart){
                return {cart : state.cart.map(item => item._id === product._id ? {...item,buyQuantity : item.buyQuantity+1} : item)}
            }else{
                return {cart : [...state.cart,{...product,buyQuantity : 1}]}
            }
        })

    },
    setRemoveCart :(id : string)=>{

        set((state :ProductStore)=>({
            cart : [state.cart.filter(item=>item._id !== id)]
        }))

    },
    setAdjustCart :(id : string, qty : number)=>{

        set((state :ProductStore)=>({
            cart : [state.cart.map(item=>item._id === id ? {...item,buyQuantity : qty} : item)]
        }))

    },
})

const useProductStore = create(
    devtools(
        persist(productStore,{
            name : 'product'
        })
    )
)

export default useProductStore;
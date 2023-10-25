import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CartProductTypes } from './store.types';
import { ProductCardType } from '../types/product.types';
import { HomeCategoryType } from '../types/category.types';

type ProductStore = {
    cart : CartProductTypes[]
    categories : HomeCategoryType[]
    products : ProductCardType[]
    setProduct : ()=>void
    setAddCart : ()=>void
    setRemoveCart : ()=>void
    setAdjustCart : ()=>void
}

const productStore = (set)=>({
    cart : [],
    categories : [],
    products : [],
    setCategoies : (data : HomeCategoryType[])=>{

        set(()=>({
            categories : data
        }))
        
    },
    setProducts : (data : ProductCardType[])=>{

        set(()=>({
            products : data
        }))
        
    },
    setAddCart :(product : ProductCardType)=>{

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
            cart : state.cart.filter(item=>item._id !== id)
        }))

    },
    setAdjustCart :(id : string, qty : number)=>{

        set((state :ProductStore)=>({
            cart : state.cart.map(item=>item._id === id ? {...item,buyQuantity : qty} : item)
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
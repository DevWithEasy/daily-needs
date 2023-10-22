import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';


const productStore = (set)=>({
    cart : [],
    user : {},
    setLogin :(data)=>{
        set(()=>({
            isAuth : true,
            user : data
        }))
    },
    setLogout : ()=>{
        set(()=>({
            isAuth : false,
            user : {}
        }))
    }
})

const useProductStore = create(
    devtools(
        persist(productStore,{
            name : 'product'
        })
    )
)

export default useProductStore;
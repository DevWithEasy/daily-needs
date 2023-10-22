import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { UserTypes } from './store.types';

const userStore = (set)=>({
    isAuth : false,
    user : {},
    setLogin :(data : UserTypes)=>{
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

const useUserStore = create(
    devtools(
        persist(userStore,{
            name : 'user'
        })
    )
)

export default useUserStore;
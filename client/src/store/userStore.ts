import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { UserTypes } from './store.types';
import CategoriesType from '../types/categories.types';

type UserStoreType = {
    status : 'start' | 'success' | 'failure'
    loading : boolean
    isAuth : boolean
    categories : CategoriesType[]
    setLogin : ()=> void
    setLogout : ()=> void
    setLoading : ()=> void
    setCategories : ()=> void
    removeCategory : ()=> void
    setStatus : ()=> void
}

const userStore = (set)=>({
    status : 'start',
    loading : false,
    isAuth : false,
    categories : [],
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
    },
    setLoading : ()=>{
        set((state : UserStoreType)=>{
            if(state.loading){
                return {loading : false}
            }else{
                return {loading : true}
            }
        })
    },
    setCategories :(data : CategoriesType[])=>{
        set(()=>({
            categories : data
        }))
    },
    removeCategory :(id : string)=>{
        set((state : UserStoreType)=>({
            categories : [...state.categories.filter(c => c._id === id)]
        }))
    },
    setStatus :(status : string)=>{
        set(()=>({
            status : status
        }))
    },
})

const useUserStore = create(
    devtools(
        persist(userStore,{
            name : 'user'
        })
    )
)

export default useUserStore;
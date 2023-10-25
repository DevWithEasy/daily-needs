export type CategoriesType = {
    _id : string
    name : string
    type? : string
}

export type CategoryProps = {
    path? : string
    id? : string
    view : boolean
    handleView : ()=>void
}

export type HomeCategoryType = {
    _id : string
    name : string
    type : string
    typeItems : {
        _id : string
        name : string
        price : number
        sku : string
        quantity : number
        image : {
            url : string
            public_id : string
        }
    }[]
}
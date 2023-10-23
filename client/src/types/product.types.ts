export type ProductType = {
    _id : string
    category: {
        _id : string
        name: string
        type: string
        typeItems?: string[]
    }
    name: string
    quantity : number
    sku: string
    price: number
    stock?: number
    image: {
        url?: string
        public_id?: string
    }
    description?: string
    additionalInfo?: string
    comments?: string[]  
}

export type HomeProductType = {
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

export type ProductCardType = {
    _id : string
    name : string
    price : number
    sku : string
    quantity : number
    image : {
        url : string
        public_id : string
    }
}
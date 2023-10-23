export type UserTypes = {
    name: string
    email: string
    image: {
        url?: string
        public_id?: string
    }
    password: string
    isVerified: boolean
    orders: string[]
    address: {
        area: string
        postOfice: string
        upazilla: string
        district: string
    }
}

export type ProductTypes = {
    _id : string
    category: string
    name: string
    quantity : number
    sku: string
    price: number
    stock: number
    image: {
        url?: string
        public_id?: string
    }
    description: string
    additionalInfo: string
    comments: string[]
}

export type CartProductTypes = {
    _id : string
    category: string
    name: string
    quantity : number
    sku: string
    price: number
    stock: number
    image: {
        url?: string
        public_id?: string
    }
    description: string
    additionalInfo: string
    comments: string[]
    buyQuantity : number
}
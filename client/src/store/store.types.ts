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
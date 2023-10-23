type ProductCardType = {
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
export default ProductCardType
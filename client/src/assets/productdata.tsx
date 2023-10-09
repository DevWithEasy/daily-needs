import img1 from '../assets/image/Mustard-Oil_L-300x300.webp'
import img2 from '../assets/image/Natural-Egg-300x300.webp'
import img3 from '../assets/image/brown-300x300.png'
import img4 from '../assets/image/lentil-300x300.jpg'
import img5 from '../assets/image/katari-300x300.png'

interface product {
    id: number,
    name : string,
    price : number,
    quantity : number,
    image : string,
    category : string,
    description : string
}
export const productData : product[] = [
    {
        id: 1,
        name : 'product o1',
        price : 200,
        quantity : 2000,
        image : img1,
        category : 'cat 01',
        description : 'description 01'
    },
    {
        id: 2,
        name : 'product o2',
        price : 200,
        quantity : 2000,
        image : img2,
        category : 'cat 01',
        description : 'description 01'
    },
    {
        id: 3,
        name : 'product o3',
        price : 200,
        quantity : 2000,
        image : img3,
        category : 'cat 01',
        description : 'description 01'
    },
    {
        id: 4,
        name : 'product o4',
        price : 200,
        quantity : 2000,
        image : img4,
        category : 'cat 01',
        description : 'description 01'
    },
    {
        id: 5,
        name : 'product o5',
        price : 200,
        quantity : 2000,
        image : img5,
        category : 'cat 01',
        description : 'description 01'
    },
]
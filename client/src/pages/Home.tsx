import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
import {ProductCard} from "../components/Index";
import ProductCardType from "../types/ProductCard.types";
// import CategorySlide from "../components/home/CategorySlide";
// import HomeSlider from "../components/home/HomeSlider";

const Home = () => {
  const [products,setProducts] = useState<ProductCardType[] | null>(null)

  const getHomeProducts=async()=>{
    try {
      const res = await axios.get(`${apiUrl}/product/find/home`)
      if(res.data.success){
        setProducts(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getHomeProducts()
  },[])
  console.log(products)
  return <div>
    {/* <HomeSlider/>
    <CategorySlide/> */}
    {products &&
      products.map(product =>
        <ProductCard key={product._id} {...{product}}/>
      )
    }
  </div>;
};

export default Home;

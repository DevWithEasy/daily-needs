import { useEffect, useState } from "react";
import ProductType from "../types/product.types";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
// import CategorySlide from "../components/home/CategorySlide";
// import HomeSlider from "../components/home/HomeSlider";

const Home = () => {
  const [products,setProducts] = useState<ProductType[] | null>(null)

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
  </div>;
};

export default Home;

import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
import { ProductCard } from "../components/Index";
import { HomeProductType } from "../types/product.types";

// import CategorySlide from "../components/home/CategorySlide";
// import HomeSlider from "../components/home/HomeSlider";

const Home = () => {
  const [products, setProducts] = useState<HomeProductType[] | []>([])

  const getHomeProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/product/find/home`)
      if (res.data.success) {
        setProducts(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHomeProducts()
  }, [])
  
  return <div>
    
  </div>;
};

export default Home;

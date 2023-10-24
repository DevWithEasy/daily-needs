import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
import { HomeProductSection} from "../components/Index";
import { HomeProductType } from "../types/product.types";

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
    <div>
      {
        products && 
        products.map(product =><HomeProductSection
          key={product._id}
          product={product}
        />)
      }
    </div>
  </div>;
};

export default Home;

import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
import { HomeProductSection, HomeProductSectionSkeleton } from "../components/Index";
import useProductStore from "../store/productStore";
import { HomeCategoryType } from "../types/category.types";

const Home = () => {
  const { categories, setCategoies } = useProductStore()

  const getHomeProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/product/find/home`)
      if (res.data.success) {
        setCategoies(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHomeProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>
    {categories.length > 0 ?
      <div>
        {
          categories &&
          categories.map((category: HomeCategoryType) => <HomeProductSection
            key={category._id}
            category={category}
          />)
        }
      </div>
      :
      <HomeProductSectionSkeleton />
    }

  </div>;
};

export default Home;

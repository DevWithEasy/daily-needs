import axios from "axios";
import { useEffect, useState } from "react";
import { Input, Loading } from "../../../components/Index";
import apiUrl from "../../../utils/apiUrl";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCategory((prevVelue) => ({
      ...prevVelue,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${apiUrl}/category/${id}`, category, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        console.log("");
      }
    } catch (error) {
      console.log("");
    }
  };

  const getCategory = async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/category/${id}`);
      if (res.data.success === true) {
        const { name, type } = res.data.data;
        setCategory({
          name: name,
          type: type,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    id && getCategory(id);
  }, [id]);

  return (
    <div>
      <div>
        <Input
          {...{
            label: "Name",
            name: "name",
            value: category.name,
            placeholder: "Category Name",
            handleChange,
          }}
        />
        <div className="space-y-2">
          <label>Product sku : </label>
          <select
            name="type"
            value={category.type}
            onChange={handleChange}
            className="w-full p-2 border focus:border focus:outline-green-400 rounded"
          >
            <option> select for type </option>
            <option value="product"> Product </option>
            <option value="blog"> Blog </option>
          </select>
        </div>
        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Update
        </button>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default UpdateCategory;

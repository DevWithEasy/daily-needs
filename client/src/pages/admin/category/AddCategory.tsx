import axios from "axios";
import React, { useState } from "react";
import { Input } from "../../../components/Index";
import apiUrl from "../../../utils/apiUrl";

const AddCategory = () => {
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
  const handleCreateCategory = async () => {
    try {
      const res = await axios.post(`${apiUrl}/category/`, category, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        console.log(res.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-2">
      <Input
        {...{
          label: "Name",
          name: "name",
          placeholder: "Category Name",
          handleChange,
        }}
      />
      <div className="space-y-2">
        <label>Product sku : </label>
        <select
          name="type"
          onChange={handleChange}
          className="w-full p-2 border focus:border focus:outline-green-400 rounded"
        >
          <option> select for type </option>
          <option value="product"> Product </option>
          <option value="blog"> Blog </option>
        </select>
      </div>
      <button
          onClick={handleCreateCategory}
          className="px-6 py-2 rounded bg-green-500 text-white"
        >
          Submit
        </button>
    </div>
  );
};

export default AddCategory;

import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../../components/Index";
import CategoriesType from "../../../types/categories.types";
import apiUrl from "../../../utils/apiUrl";
import { formats, modules } from "../../../utils/editorsConfig";

const UpdateProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [categories, setCategories] = useState<CategoriesType[] | null>(null);
  const [product, setProduct] = useState({
    category: "",
    name: "",
    price: "",
    quantity: "",
    sku: "",
  });
  const [description, setDescription] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevVelue) => ({
      ...prevVelue,
      [name]: value,
    }));
  };

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpdateProduct = async () => {
    if (!product.category || !product.name || !product.sku || !product.price) {
      return alert("field required");
    }
    const formData = new FormData();
    if (file) formData.append("file", file);
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("quantity", product.quantity);
    formData.append("sku", product.sku);
    formData.append("description", description);
    formData.append("additionalInfo", additionalInfo);
    setLoading(true);
    try {
      const res = await axios.put(`${apiUrl}/product/${id}`, formData);
      if(res.data.success){
        console.log(res.data);
        setLoading(false);
        navigate('/product/all')
      }
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getProduct = async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/product/${id}`);
      if (res.data.success === true) {
        const {
          name,
          category,
          price,
          quantity,
          sku,
          description,
          additionalInfo,
        } = res.data.data;
        setProduct({
          name: name,
          category: category._id,
          price: price,
          quantity: quantity,
          sku: sku,
        });
        setDescription(description);
        setAdditionalInfo(additionalInfo);
        setLoading(false);
      }
      console.log(res.data.data)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getCategory = async () => {
    try {
      const res = await axios.get(`${apiUrl}/category?type=product`);
      if (res.data.success) {
        setCategories(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    id && getProduct(id);
    getCategory();
  }, [id]);

  return (
    <div className="my-5 border rounded-md">
      <h2 className="p-2 text-center bg-green-600 text-white rounded-t-md">
        Update product
      </h2>
      <div className="p-2 space-y-2">
        <div className="grid grid-cols-2 space-x-3">
          <div className="space-y-2">
            <label>Product Name : </label>
            <input
              name="name"
              type="text"
              value={product.name}
              onChange={handleChange}
              placeholder="Product name"
              className="w-full p-2 border focus:border focus:outline-green-400 rounded"
            />
          </div>
          <div className="space-y-2">
            <label>Product price : </label>
            <input
              name="price"
              type="number"
              value={product.price}
              onChange={handleChange}
              placeholder="Product price"
              className="w-full p-2 border focus:border focus:outline-green-400 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label>SKU Quantity : </label>
            <input
              name="quantity"
              type="number"
              value={product.quantity}
              onChange={handleChange}
              placeholder="SKU Quantity"
              className="w-full p-2 border focus:border focus:outline-green-400 rounded"
            />
          </div>
          <div className="space-y-2">
            <label>Product sku : </label>
            <select
              name="sku"
              value={product.sku}
              onChange={handleChange}
              className="w-full p-2 border focus:border focus:outline-green-400 rounded"
            >
              <option value="Pcs"> Pcs </option>
              <option value="Gm"> Gm </option>
              <option value="Kg"> Kg </option>
            </select>
          </div>
          <div className="space-y-2">
            <label>Product category : </label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-2 border focus:border focus:outline-green-400 rounded"
            >
              {categories &&
                categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {" "}
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="space-y-2 pb-10">
          <label>Product Description : </label>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
            className="h-[250px]"
          />
        </div>
        <div className="space-y-2 pb-10">
          <label>Product Additinal Info : </label>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={additionalInfo}
            onChange={setAdditionalInfo}
            className="h-[250px]"
          />
        </div>
        <div className="space-y-2">
          <label>Product image : </label>
          <input
            type="file"
            onChange={handleFile}
            placeholder="Product price"
            className="w-full p-2 border focus:border focus:outline-green-400 rounded"
          />
        </div>
        <button
          onClick={handleUpdateProduct}
          className="px-6 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default UpdateProduct;

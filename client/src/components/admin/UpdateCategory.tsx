import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CategoryProps from "../../types/category.types";
import { Input, Loading } from "../Index";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";

const UpdateCategory = ({ id, view, handleView }: CategoryProps) => {
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
    handleView()
    try {
      const res = await axios.put(`${apiUrl}/category/${id}`,category,{
        headers : {
          authorization : 'Bearer ' + localStorage.getItem('token')
        }
      })
      if (res.data.success) {
        console.log('')
      }
    } catch (error) {
      console.log('')
      handleView()
    }
  }

  const getCategory = async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/category/${id}`);
      if (res.data.success === true) {
        const {
          name,
          type
        } = res.data.data;
        setCategory({
          name: name,
          type : type
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(()=>{
    id && getCategory(id)
  },[id])

  return (
    <>
      <Modal isOpen={view} onClose={handleView}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              {...{
                label: "Name",
                name: "name",
                value : category.name,
                placeholder: "Category Name",
                handleChange,
              }}
            />
            <div className="space-y-2">
              <label>Product sku : </label>
              <select
                name="type"
                value = {category.type}
                onChange={handleChange}
                className="w-full p-2 border focus:border focus:outline-green-400 rounded"
              >
                <option> select for type </option>
                <option value="product"> Product </option>
                <option value="blog"> Blog </option>
              </select>
            </div>
          </ModalBody>

          <ModalFooter className="space-x-3">
            <button
              onClick={handleView}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Close
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Update
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {loading && <Loading />}
    </>
  );
};

export default UpdateCategory;

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import CategoryProps from "../../types/category.types";
import apiUrl from "../../utils/apiUrl";
import { Input } from "../Index";

const AddCategory = ({ view, handleView }: CategoryProps) => {
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
        handleView();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={view} onClose={handleView}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
          <ModalFooter className="space-x-3 text-white">
            <button
              onClick={handleView}
              className="bg-gray-500 px-6 py-2 rounded"
            >
              Close
            </button>
            <button
              onClick={handleCreateCategory}
              className="bg-green-500 px-6 py-2 rounded"
            >
              Submit
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCategory;

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import CategoryProps from "../../types/category.types";
import { Input } from "../Index";

const UpdateCategory = ({id, view, handleView }: CategoryProps) => {
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
  console.log(category,id);
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

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleView}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateCategory;

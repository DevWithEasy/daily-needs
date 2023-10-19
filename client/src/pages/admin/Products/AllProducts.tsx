import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductType from "../../../types/product.types";
import apiUrl from "../../../utils/apiUrl";

const AllProducts = () => {
  const [updateView,setUpdateView] = useState(false)
  const [deleteView,setDeleteView] = useState(false)
  const [id,setId] = useState('')
  const [products, setProducts] = useState<ProductType[] | null>(null)
  const handleUpdateView=(id : string)=>{
    setUpdateView(!updateView)
    setId(id)
  }
  const handleDeleteView=(id : string)=>{
    setDeleteView(!deleteView)
    setId(id)
  }
  const handleGetAllProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/product`);
      if (res.data.success) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product Name</Th>
              <Th>Price</Th>
              <Th>Unit(SKU)</Th>
              <Th>Stock</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products &&
              products.map(product =>
                <Tr key={product._id}>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.quantity}({product.sku})</Td>
                  <Td>{product.stock}</Td>
                  <Td></Td>
                </Tr>
              )
            }
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllProducts;

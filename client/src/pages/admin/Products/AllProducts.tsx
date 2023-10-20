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
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import ProductType from "../../../types/product.types";
import apiUrl from "../../../utils/apiUrl";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<ProductType[] | null>(null);

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
              products.map((product) => (
                <Tr key={product._id}>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>
                    {product.quantity}({product.sku})
                  </Td>
                  <Td>{product.stock}</Td>
                  <Td>
                    <AiFillEdit
                      onClick={() => navigate(`/product/update/${product._id}`)}
                      size={22}
                      className="inline-block mr-3"
                    />
                    {/* <AiTwotoneDelete
                      onClick={() => {
                        setId(product._id);
                        handleDeleteView;
                      }}
                      size={22}
                      className="inline-block"
                    /> */}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllProducts;

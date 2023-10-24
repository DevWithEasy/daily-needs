import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxCrossCircled } from 'react-icons/rx'
import useProductStore from "../store/productStore";
import { CartProductTypes } from "../store/store.types";

const CartList = () => {
    const { cart, setAdjustCart, setRemoveCart } = useProductStore()

    const handleCartChange = (type: string, product: CartProductTypes) => {
        if(product.buyQuantity === 1 && type === 'decrement'){
            return 
        }
        if (type === 'increment') {
            return setAdjustCart(product._id, product.buyQuantity + 1)
        } else {
            setAdjustCart(product._id, product.buyQuantity - 1)
        }

    }

    const total = cart.reduce((acc: number, cur: CartProductTypes) => acc + cur.price * cur.buyQuantity, 0)
    return (
        <div className="flex space-x-4">
            <div className="w-8/12">
                <TableContainer className="">
                    <Table variant="simple">
                        <Thead className="bg-gray-100">
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                                <Th>Product</Th>
                                <Th>Price</Th>
                                <Th>Quantity</Th>
                                <Th>Subtotal</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {cart &&
                                cart.map((product: CartProductTypes) => (
                                    <Tr key={product._id}>
                                        <Td>
                                            <RxCrossCircled
                                                onClick={() => setRemoveCart(product._id)}
                                                size={22}
                                                className='cursor-pointer'
                                            />
                                        </Td>
                                        <Td>
                                            <img src={product.image.url} className="h-16" />
                                        </Td>
                                        <Td>{product.name}</Td>
                                        <Td>{product.price}</Td>
                                        <Td>
                                            <div
                                                className="p-2 flex justify-between items-center border"
                                            >
                                                <AiOutlinePlus
                                                    size={22}
                                                    onClick={() => handleCartChange('increment', product)}
                                                    className='hover:text-red-500 cursor-pointer'
                                                />
                                                <span
                                                    className="block w-full text-center"
                                                >
                                                    {product.buyQuantity}
                                                </span>
                                                <AiOutlineMinus
                                                    size={22}
                                                    onClick={() => handleCartChange('decrement', product)}
                                                    className={`hover:text-red-500 ${product.buyQuantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                                />
                                            </div>
                                        </Td>
                                        <Td>
                                            {
                                                (product.buyQuantity * product.price).toFixed(0)
                                            }
                                        </Td>
                                    </Tr>
                                ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <div className="w-4/12 p-4 space-y-2 border-2">
                <h2 className="p-2 text-2xl font-bold">Cart Totals</h2>
                <p
                    className="p-2 flex justify-between border-b"
                >
                    <span className="font-semibold">
                        Subtotal
                    </span>
                    <span>{total}</span>
                </p>
                <p
                    className="p-2 flex justify-between border-b"
                >
                    <span className="font-semibold">
                        Shipping
                    </span>
                    <span>{total}</span>
                </p>
                <p
                    className="p-2 flex justify-between"
                >
                    <span className="text-xl font-semibold">
                        Total
                    </span>
                    <span className="text-2xl">{total} -Tk</span>
                </p>
                <Link
                    to='/checkout'
                    className="block w-full p-2 bg-green-600 text-white text-center uppercase rounded"
                >
                    Proceed Checkout
                </Link>
            </div>
        </div>
    );
};

export default CartList;
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
import CategoriesType from "../../../types/categories.types";
import apiUrl from "../../../utils/apiUrl";
import { UpdateCategory, DeleteModal } from "../../../components/Index";

const AllCategory = () => {
    const [updateView, setUpdateView] = useState(false);
    const [deleteView, setDeleteView] = useState(false);
    const [id, setId] = useState("");
    const [categories, setCategories] = useState<CategoriesType[] | null>(null);

    const handleUpdateView = () => {
        setUpdateView(!updateView);
    };
    const handleDeleteView = () => {
        setDeleteView(!deleteView);
    };

    const handleGetAllCategories = async () => {
        try {
            const res = await axios.get(`${apiUrl}/category`);
            if (res.data.success) {
                setCategories(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetAllCategories();
    }, []);

    return (
        <div>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Category Name</Th>
                            <Th>Category Type</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {categories &&
                            categories.map((category) => (
                                <Tr key={category._id}>
                                    <Td>{category.name}</Td>
                                    <Td>{category.type === 'blog' ? 'Blog' : 'Product'}</Td>
                                    <Td>
                                        <AiFillEdit
                                            onClick={() => {
                                                handleUpdateView()
                                                setId(category._id)
                                            }}
                                            size={22}
                                            className="inline-block mr-3 hover:text-green-500"
                                        />
                                        <AiTwotoneDelete
                                            onClick={() => {
                                                handleDeleteView()
                                                setId(category._id)
                                            }}
                                            size={22}
                                            className="inline-block hover:text-red-500"
                                        />
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
            {updateView && (
                <UpdateCategory
                    {...{
                        id: id,
                        view: updateView,
                        handleView: handleUpdateView,
                    }}
                />
            )}
            {deleteView && (
                <DeleteModal
                    {...{
                        path : 'category',
                        id: id,
                        view: deleteView,
                        handleView: handleDeleteView,
                    }}
                />
            )}
        </div>
    );
};

export default AllCategory;

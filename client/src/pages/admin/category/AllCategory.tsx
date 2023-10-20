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
import { UpdateCategory } from "../../../components/Index";

const AllCategory = () => {
    const [updateView, setUpdateView] = useState(false);
    const [deleteView, setDeleteView] = useState(false);
    const [id, setId] = useState("");
    const [categories, setCategories] = useState<CategoriesType[] | null>(null);

    const handleUpdateView = (id: string) => {
        setUpdateView(!updateView);
        setId(id);
    };
    const handleDeleteView = (id: string) => {
        setDeleteView(!deleteView);
        setId(id);
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

    console.log(id, updateView);
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
                                    <Td>{category.type}</Td>
                                    <Td>
                                        <AiFillEdit
                                            onClick={() => handleUpdateView(category._id)}
                                            size={22}
                                            className="inline-block mr-3"
                                        />
                                        <AiTwotoneDelete
                                            onClick={() => handleDeleteView(category._id)}
                                            size={22}
                                            className="inline-block"
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
                        handleView: setUpdateView,
                    }}
                />
            )}
        </div>
    );
};

export default AllCategory;

import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import CategoryProps from "../types/category.types";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
import { useState } from "react";
import {Loading} from "./Index";

const DeleteModal = ({ path , id, view, handleView }: CategoryProps) => {
    const [loading, setLoading] = useState(false);
    const handleDelete=async()=>{
        setLoading(true)
        try {
            const res = await axios.delete(`${apiUrl}/${path}/${id}`,{
                headers : {
                    authorization : 'Bearer ' + localStorage.getItem('token')
                }
            })
            if(res.data.success){
                console.log('')
                setLoading(false)
            }
        } catch (error) {
            console.log('')
            setLoading(false)
        }
    }
    return (
        <>
            <Modal isOpen={view} onClose={handleView}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Are you sure?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>
                            Your data will be delete successfully delete.You cannot be undone and loss your data.
                        </p>
                    </ModalBody>

                    <ModalFooter className="space-x-3">
                        <button 
                            onClick={handleView}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-500 text-white rounded"
                        >
                            Delete
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {loading && <Loading />}
        </>
    );
};

export default DeleteModal;

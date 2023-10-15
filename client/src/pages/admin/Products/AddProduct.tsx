import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { formats, modules } from '../../../utils/editorsConfig';
const AddProduct = () => {
  const [product, setProduct] = useState({
    category: '',
    name: '',
    price: '',
    sku: ''
  })
  const [description,setDescription] = useState('')
  const [additionalInfo,setAdditionalInfo] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prevVelue) => ({
      ...prevVelue,
      [name]: value,
    }));
  };
  console.log(product,description,additionalInfo)
  return <div>
    <div>
      <input
        name='name'
        onChange={handleChange}
        placeholder='Product name'
        className='w-full p-2 border focus:border focus:outline-green-400 rounded'
      />
      <input
        name='price'
        onChange={handleChange}
        placeholder='Product price'
        className='w-full p-2 border focus:border focus:outline-green-400 rounded'
      />
      <select
        name='name'
        onChange={handleChange}
        className='w-full p-2 border focus:border focus:outline-green-400 rounded'
      >
        <option> select category </option>
      </select>
      <select
        name='name'
        onChange={handleChange}
        className='w-full p-2 border focus:border focus:outline-green-400 rounded'
      >
        <option> select category </option>
      </select>
      <div>
        <ReactQuill 
          theme="snow"
          modules={modules}
          formats={formats}
          value={description} 
          onChange={setDescription}
          className='h-[250px]'
        />
      </div>
      <div>
        <ReactQuill 
          theme="snow"
          modules={modules}
          formats={formats}
          value={additionalInfo} 
          onChange={setAdditionalInfo}
          className='h-[250px]'
        />
      </div>
    </div>
  </div>;
};

export default AddProduct;

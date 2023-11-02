import React, { useState } from "react";
import apiUrl from "../utils/apiUrl";
import axios from "axios";
import { Input } from "../components/Index";
import useProductStore from "../store/productStore";
import paylogo from '../assets/image/sslcommerze_logo.png'
import { CartProductTypes } from "../store/store.types";
import useUserStore from "../store/userStore";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const {user} = useUserStore()
  const {cart} = useProductStore()
  const [value, setValue] = useState({
    name: user.name,
    phone: user.phone,
    email: user.email,
    shippingAddress: user.address.area && user.address.postOffice && user.address.upazilla && user.address.district ? `${user.address.area}, ${user.address.postOffice}, ${user.address.upazilla}, ${user.address.district}` : '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValue((prevVelue) => ({
      ...prevVelue,
      [name]: value,
    }));
  }

  const handleCheckout = async () => {
    if(!value.email || !value.name || !value.phone || !value.shippingAddress){
      return alert('Please enter')
    }
    try {
      const res = await axios.post(`${apiUrl}/user/signin`, value);
      if (res.data.success === true) {
        console.log('first')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const total = cart.reduce((acc: number, cur: CartProductTypes) => acc + cur.price * cur.buyQuantity, 0)

  return (
    <div className="flex justify-between space-x-3">
      <div className="w-1/2 space-y-3">
        <h2 className="text-3xl">
          Billing Address
        </h2>
        <div className="space-y-2">
          <Input
            {...{
              name: "name",
              label: "Name",
              placeholder: "Enter your name",
              value: value.name,
              handleChange: handleChange,
            }}
          />
          <Input
            {...{
              name: "phone",
              label: "Phone Number",
              placeholder: "Enter Phone number",
              value: value.phone,
              handleChange: handleChange,
            }}
          />
          <Input
            {...{
              name: "email",
              label: "Email Address",
              placeholder: "Enter your email address",
              value: value.email,
              handleChange: handleChange,
            }}
          />
          <div className="space-y-2">
            <label>Shipping Address :</label>
            <textarea 
              name="shippingAddress" 
              value={value.shippingAddress} 
              onChange={handleChange} 
              rows={3}
              className="w-full p-2 border focus:border focus:outline-green-400 rounded"
            />
          </div>
        </div>
      </div>
      <div
        className="w-1/2 p-4 bg-gray-50"
      >
        <h2 className="pb-3 text-3xl text-center font-semibold">Your order</h2>
        <div className="p-4 bg-white shadow-sm">
            <p className="px-2 py-3 flex justify-between uppercase font-semibold border-b-2">
              <span>Product</span>
              <span>Subtotal</span>
            </p>
            {
              cart.map((product : CartProductTypes)=>
                <p className="px-2 py-3 flex justify-between text-sm border-b">
                  <span>{product.name} - {product.quantity}{product.sku} x {product.buyQuantity}</span>
                  <span>{(product.buyQuantity * product.price).toFixed(0)}/-</span>
                </p>
              )
            }
            <p className="px-2 py-3 flex justify-between text-sm font-semibold border-b">
              <span>Subtotal</span>
              <span>{total}/-</span>
            </p>
            <p className="px-2 py-3 flex justify-between text-sm font-semibold border-b">
              <span>Shipping : (Delivery Charge)</span>
              <span>{160}/-</span>
            </p>
            <p className="px-2 py-3 flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span>{total+160}/-</span>
            </p>
        </div>
        <div className="p-2 space-y-1">
          <p>Pay Online : (Verified By)</p>
          <img src={paylogo} className="h-8" aria-disabled/>
        </div>
        <div className="p-4 bg-white shadow-sm">
            Please check the Delivery Policy before completing your order
        </div>
        <hr/>
        <div className="p-2 py-5">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our 
          <Link to='/privacy' className="text-blue-500"> privacy policy</Link>.
        </div>
        <button
          onClick={handleCheckout}
          className="block w-full p-2 bg-green-600 text-white uppercase rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;

import React, { useState } from 'react'


import ProductPrice from './pages/ProductPrice';
import ShippingCost from './pages/ShippingCost';
import ModalForm from './components/ModalForm';

export default function App() {

  const [tax, setTax] = useState(0.012);
  const [admin, setAdmin] = useState(0.1);
  const [shipCost, setShipCost] = useState(1000);

  const [showModal, setShowModal] = useState(false);


  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const [formData, setFormData] = useState({
    adminCharge: "",
    tax: "",
    shipCost: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setAdmin(formData.adminCharge);
    setTax(formData.tax);
    setShipCost(formData.shipCost);

    setFormData({
      adminCharge: "",
      tax: "",
      shipCost: ""
    });
    handleCloseModal();
  };

  return (
    <div style={{ position: 'relative', }}>
       
            <ProductPrice tax={tax} admin={admin} shipCost={shipCost} />
            <ModalForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} showModal={showModal} handleShowModal={handleShowModal} handleCloseModal={handleCloseModal} />
      
    </div>
  )
}

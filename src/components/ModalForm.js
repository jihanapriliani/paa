import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalForm = (props) => {

  const {handleSubmit, formData, setFormData, showModal, handleShowModal, handleCloseModal} = props;

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  

  return (
    <div>
      <Button style={{ position: 'absolute', top: '0', left: '0', marginLeft: '22rem' }} variant="warning" onClick={handleShowModal}>
        Ubah Harga Jual
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Markup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" style={{ marginBottom: '2rem' }}>
              <Form.Label>Biaya Admin</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan biaya admin..."
                name="adminCharge"
                value={formData.adminCharge}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" style={{ marginBottom: '2rem' }}>
              <Form.Label>Pajak</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan besaran pajak.."
                name="tax"
                value={formData.tax}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" style={{ marginBottom: '2rem' }}>
              <Form.Label>Ongkos Kirim</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan ongkos kirim..."
                name="shipCost"
                value={formData.shipCost}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Perbarui Harga Jual
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalForm;

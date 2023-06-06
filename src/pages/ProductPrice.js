import React, {useState, useRef} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import sorting from '../utils/ProductData';

function ProductPrice() {
  const optionRef = useRef();
  const orderRef = useRef();

  const [filteredBy, setFilteredBy] = useState("id");
  const [filterOrder, setFilterOrder] = useState("asc");

  const [products, setProducts] = useState(sorting(filteredBy, filterOrder));

  const handleFilterBtnClicked = () => {
    setFilteredBy(optionRef.current.value);
    setFilterOrder(orderRef.current.value);
    setProducts(sorting(filteredBy, filterOrder));

  }

  return (
    <>
      <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '10rem' }}>
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ marginRight: '1rem' }}>Filter</p>
          <select ref={optionRef} style={{ marginRight: '1rem' }} class="form-select" aria-label="Default select example">
            <option value="harga_po">Harga PO</option>
            <option value="harga_jual">Harga Jual</option>
          </select>
          <select ref={orderRef} style={{ marginRight: '1rem' }} class="form-select" aria-label="Default select example">
            <option value="asc">Terendah</option>
            <option value="desc">Tertinggi</option>
          </select>
          <button onClick={handleFilterBtnClicked} class="btn btn-primary">Kirim</button>
        </div>

        <table class="table table-striped" >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nama Produk</th>
              <th scope="col">Supplier</th>
              <th scope="col">Harga PO</th>
              <th scope="col">Harga Jual</th>

            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.nama_produk}</td>
                    <td>{product.supplier}</td>
                    <td>{product.harga_po}</td>
                    <td>{product.harga_jual}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductPrice;

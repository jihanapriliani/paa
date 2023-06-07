import React, {useState, useRef} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import sorting from '../utils/ProductData';
import searchString from '../utils/kmpAlgorithm';

import TableExport from 'tableexport';
import 'tableexport/dist/css/tableexport.min.css';


function ProductPrice(props) {
  const {tax, admin, shipCost} = props;


  const optionRef = useRef();
  const orderRef = useRef();

  const [filteredBy, setFilteredBy] = useState("id");
  const [filterOrder, setFilterOrder] = useState("asc");

  const [searchKey, setSearchKey] = useState("")

  const [products, setProducts] = useState(sorting(filteredBy, filterOrder));

  const handleFilterBtnClicked = () => {
    setFilteredBy(optionRef.current.value);
    setFilterOrder(orderRef.current.value);
    setProducts(sorting(filteredBy, filterOrder));
  }

  const handleInputChange = (e) => {
      setSearchKey(e.target.value);
      setProducts(searchString(searchKey,products));
      if(searchKey === "") {
        setProducts(sorting(filteredBy, filterOrder))
      }
  }

  function estimatePrice(POPrice, adminFee, taxRate, shippingCost) {
    const totalPrice = POPrice + adminFee + (POPrice * taxRate) + shippingCost;
    
    const markupPercentage = 0.1;
    const sellingPrice = totalPrice * (1 + markupPercentage);
    
    return Math.floor(sellingPrice);
  }


  

  return (
    <>
      <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '10rem', position: 'relative',  }}>
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ marginRight: '1rem' }}>Filter</p>
          <select ref={optionRef} style={{ marginRight: '1rem' }} class="form-select" aria-label="Default select example">
            <option value="harga_po">Harga PO</option>
            <option value="harga_jual" style={{ width: '6rem' }}>Harga Jual</option>
          </select>
          <select ref={orderRef} style={{ marginRight: '1rem' }} class="form-select" aria-label="Default select example">
            <option value="asc">Terendah</option>
            <option value="desc">Tertinggi</option>
          </select>
          <button onClick={handleFilterBtnClicked} class="btn btn-primary">Sort</button>

          <div class="form-group" style={{ position: 'absolute', right: '0' }}>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Cari..." onChange={handleInputChange} />
          </div>
            

          <button style={{ position: 'absolute', left: '0' }} class="btn btn-success" onClick={() => TableExport(document.getElementById('product_table'))}>Convert</button>
        </div>

        <table class="table table-striped" id='product_table' >
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
                    <td>Rp {product.harga_po}</td>
                    <td>Rp {estimatePrice(product.harga_po,admin,tax,shipCost)}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductPrice;

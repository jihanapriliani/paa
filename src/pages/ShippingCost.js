import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShippingCost() {
  const [originProvinces, setOriginProvinces] = useState([]);
  const [originCities, setOriginCities] = useState([]);
  const [originProvince, setOriginProvince] = useState(0);
  const [originCity, setOriginCity] = useState(0);

  const [destProvinces, setDestProvinces] = useState([]);
  const [destCities, setDestCities] = useState([]);
  const [destProvince, setDestProvince] = useState(0);
  const [destCity, setDestCity] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/provinsi')
      .then(response => {
        setOriginProvinces(response.data.rajaongkir.results);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:4000/kota/' + originProvince)
      .then(response => {
        setOriginCities(response.data.rajaongkir.results);
      })
      .catch(error => {
        console.log(error);
      });

    // axios.get('http://localhost:4000/provinsi')
    //   .then(response => {
    //     setDestProvinces(response.data.rajaongkir.results);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // axios.get('http://localhost:4000/kota/' + destProvince)
    //   .then(response => {
    //     setDestCities(response.data.rajaongkir.results);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    
  }, [originProvinces, originProvince, originCities, originCity, destProvinces, destProvince, destCities, destCity]);

  console.log(originProvinces);
  
  return (
    <>
      <div className="container" style={{ height: '100vh', display: 'flex', alignItems: 'stretch', flexDirection: 'column', marginTop: '10rem'}}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '5rem', flex: '1' }}>
          <p>Pilih Provinsi Asal</p>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setOriginProvince(e.target.value)}>
              <option selected>Open this select menu</option>
              {
                originProvinces.map(province => (
                  <option value={province.province_id}>{province.province}</option>          
                ))
              }
            </select>
        

            <p style={{ marginTop: '2rem' }}>Pilih Kota Asal</p>
            <select class="form-select" aria-label="Default select example" onChange={(e) => {
              setOriginCity(e.target.value)
            }}>
              <option selected>Open this select menu</option>
              {
                originCities.map(city => (
                  <option value={city.city_id}>{city.city_name}</option>          
                ))
              }
            </select>
        </div>

        <div style={{ flex: '1' }}>
        <p>Pilih Provinsi Tujuan</p>
            <select class="form-select" aria-label="Default select example" onChange={(e) => setDestProvince(e.target.value)}>
              <option selected>Open this select menu</option>
              {
                destProvinces.map(province => (
                  <option value={province.province_id}>{province.province}</option>          
                ))
              }
            </select>
        

            <p style={{ marginTop: '2rem' }}>Pilih Kota Asal</p>
            <select class="form-select" aria-label="Default select example" onChange={(e) => {
              setDestCity(e.target.value)
            }}>
              <option selected>Open this select menu</option>
              {
                destCities.map(city => (
                  <option value={city.city_id}>{city.city_name}</option>          
                ))
              }
            </select>
        </div>

      </div>
     
      </div>
    </>
  )
}

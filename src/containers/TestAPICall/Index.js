import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Index() {

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      console.log(response.data.results);
      setAPIData(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <div className='container mt-4'>
        <div className="row justify-content-center title fw-normal">
          Test API Call
        </div>
      </div>
      <div className="container mt-4">
        <table className='table table-bordered table-dark'>
          <thead>
            <tr className='text-center'>
              <th scope="col">ID</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Species</th>
              <th scope="col">Status</th>
              <th scope="col">Type</th>
              <th scope="col">Location</th>
              <th scope="col">Origin</th>
            </tr>
          </thead>
          <tbody>
            {APIData.length > 0 &&
              APIData.map((item) => {
                return (
                  <tr key={item.id} className="text-center">
                    <th scope="row">{item.id}</th>
                    <td><img src={item.image} alt="avatar jpeg" className='rounded' /></td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.species}</td>
                    <td>{item.status}</td>
                    <td>{item.type}</td>
                    <td>{item.location.name}</td>
                    <td>{item.origin.name}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

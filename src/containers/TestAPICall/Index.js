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
      <div className='title fw-normal'>
        Test API Call
      </div>
      <div className='mt-5' style={{overflowX: 'auto', maxHeight: '600px'}}>
        <table className='table table-bordered'>
          <thead>
            <tr className='text-center'>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Species</th>
              <th>Status</th>
              <th>Type</th>
              <th>Location</th>
              <th>Origin</th>
            </tr>
          </thead>
          <tbody>
            {APIData.length > 0 &&
              APIData.map((item) => {
                return (
                  <tr key={item.id} className="text-center">
                    <th>{item.id}</th>
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

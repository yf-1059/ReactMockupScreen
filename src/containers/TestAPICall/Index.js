import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeUser } from '../../actions/User'

const Index = (props) => {

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

  const navigate = useNavigate();
  const selectedId = (id) => {
    navigate(`/test-api-call/${id}`);
  }  

  return (
    <>
      <div className='title fw-normal'>
        Test API Call
      </div>
      <div className='mt-5' style={{overflowX: 'auto', maxHeight: '300px'}}>
        <table className='table table-bordered table-hover'>
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
                    <tr key={item.id} className="text-center" 
                      onClick={() => {
                        var nameSplit = item.name.split(' ');
                        var output = "";
                        if (nameSplit.length > 1) {
                          for ( var i = 0; i < 2; i++) {
                            output += nameSplit[i].substring(0,1);
                          }
                        }
                        else {
                          output = nameSplit[0].substring(0,1);
                        }
                        selectedId(item.id);
                        props.changeUser({
                          name: item.name,
                          abbr: output
                        });
                      }}
                    >
                      <td>{item.id}</td>
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
      <div className='mt-5 border border-success rounded p-3'>
        <Outlet context={APIData}/>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state
  };
};

export default connect(mapStateToProps, {
  changeUser
})(Index);
import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

export default function CharacterCard() {

  let { id } = useParams();
  const APIData = useOutletContext();
  let selectedCharacter = APIData.find((item) => {
    return item.id === Number(id);
  });

  return (
    <>
      <div>
        <h5>Selected ID : {id}</h5>
      </div>
      <hr />
      <div className="row mt-3">
        { selectedCharacter && (
          <>
            <div className="col-md-3">
              <img src={selectedCharacter.image} alt="avatar jpeg" className='rounded' />
            </div>
            <div className="col-md-9 d-flex flex-column justify-content-center" style={{fontSize: '14px'}}>
              <span>{selectedCharacter.name}</span>
              <span>{selectedCharacter.gender}</span>
              <span>{selectedCharacter.species}</span>
              <span>{selectedCharacter.status}</span>
            </div>
          </>
        )}
      </div>
    </>
  )
}

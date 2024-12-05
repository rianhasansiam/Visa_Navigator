import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { contextData } from '../Contex';
import EditMyVisa from './EditMyVisa';

const MyvisaCard = ({ visaData }) => {
  const { setReloadDelete } = useContext(contextData);
  const { imageUrl, country, visaType, processingTime, fee, validity, applicationMethod, _id } = visaData;

  const handleDelteUser = () => {
    fetch(`http://localhost:5000/my-added-visas/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => setReloadDelete(data));
  };

  const navigate = useNavigate();

  const handleSave = () => {
    // This function will be called after saving the data from the `EditMyVisa` component
    // Close the modal after saving
    document.getElementById('my_modal_5').close();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <img
        src={imageUrl}
        alt={country}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h2 className="text-3xl font-bold mb-2">{country}</h2>
      <p className="text-sm text-gray-700"><span className="font-semibold">Visa Type: </span>{visaType}</p>
      <p className="text-sm text-gray-700"><span className="font-semibold">Processing Time: </span>{processingTime}</p>
      <p className="text-sm text-gray-700"><span className="font-semibold">Fee: </span>{fee}</p>
      <p className="text-sm text-gray-700"><span className="font-semibold">Validity: </span>{validity}</p>
      <p className="text-sm text-gray-700"><span className="font-semibold">Application Method: </span>{applicationMethod}</p>

      <button 
        onClick={() => navigate(`/visa-details/${_id}`)} 
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 font-semibold">
        See Details
      </button>

      <div className='flex justify-around my-3'>
        <button className='btn block w-32 bg-[#99cc33]' onClick={() => document.getElementById('my_modal_5').showModal()}>
          Edit
        </button>
        <button className='btn block w-32 bg-[#cc3300] text-white' onClick={handleDelteUser}>
          Delete
        </button>
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <EditMyVisa _id={_id} onSave={handleSave} />

          {/* Removed the modal close button */}
        </div>
      </dialog>
    </div>
  );
};

MyvisaCard.propTypes = {
  visaData: PropTypes.object.isRequired,
};

export default MyvisaCard;

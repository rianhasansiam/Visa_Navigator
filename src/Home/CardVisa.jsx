
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CardVisa = ({ visaData }) => {
  const { imageUrl, country, visaType, processingTime, fee, validity, applicationMethod, _id } = visaData;
  const navigate = useNavigate();

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
      <button onClick={() => navigate(`/visa-details/${_id}`)} className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 font-semibold">
        See Details
      </button>
    </div>
  );
};

// Define propTypes for visaData
CardVisa.propTypes = {
  visaData: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    visaType: PropTypes.string.isRequired,
    processingTime: PropTypes.string.isRequired,
    fee: PropTypes.string.isRequired,
    validity: PropTypes.string.isRequired,
    applicationMethod: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardVisa;

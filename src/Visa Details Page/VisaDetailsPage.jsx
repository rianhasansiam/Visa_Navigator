import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { contextData } from '../Contex';
import { useLocation } from 'react-router-dom';

const VisaDetailsPage = props => {

    const {userData}=useContext(contextData)
    // console.log(userData)

const params=useLocation()
const fee=params.pathname.split('/')[2]

  const [startDate, setStartDate] = useState(new Date());



  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Visa Application Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
         value={userData.email}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
           
            name="firstName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
          
            name="lastName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4 ">
          <label htmlFor="appliedDate" className="block text-sm font-medium text-gray-700">Applied Date</label>
          
            <DatePicker
            readOnly
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="p-2 border border-gray-300 rounded-md "
            />
            
          </div>
      

        <div className="mb-4">
          <label htmlFor="fee" className="block text-sm font-medium text-gray-700">Visa Fee</label>
          <input
            type="text"
          
            name="fee"
         value={`${fee} $`}
        
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}

VisaDetailsPage.propTypes = {}

export default VisaDetailsPage

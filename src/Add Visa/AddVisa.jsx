import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import  { useState } from 'react';
import swal from 'sweetalert';
import { contextData } from '../Contex';

const AddVisa = props => {


  // const [formData, setFormData] = useState({
  //   countryImage: '',
  //   countryName: '',
  //   visaType: '',
  //   processingTime: '',
  //   requiredDocuments: [],
  //   description: '',
  //   ageRestriction: '',
  //   fee: '',
  //   validity: '',
  //   applicationMethod: ''
  // });

  // const visaTypes = ["Tourist visa", "Student visa", "Official visa"];
  // const documentOptions = ["Valid passport", "Visa application form", "Recent passport-sized photograph"];

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleCheckboxChange = (e) => {
  //   const { value, checked } = e.target;
  //   const updatedDocuments = checked
  //     ? [...formData.requiredDocuments, value]
  //     : formData.requiredDocuments.filter((doc) => doc !== value);
    
  //   setFormData({
  //     ...formData,
  //     requiredDocuments: updatedDocuments
  //   });
  // };

  const {uiupdateHandle}=useContext(contextData)
  const handleSubmit = (e) => {
    e.preventDefault();

    const form=e.target
    
    const imageUrl=form.countryImage.value
    const country=form.countryName.value
    const visaType=form.visaType.value
    const processingTime=form.processingTime.value
    const description=form.description.value
    const ageRestriction=form.ageRestriction.value
    const fee=form.fee.value
    const validity=form.validity.value
    const applicationMethod=form.applicationMethod.value
    // type: Date, default: Date.now
    const date = new Date();
    // console.log(today)

    const visaData={imageUrl,country,visaType,processingTime,description,ageRestriction,fee,validity,applicationMethod,date}
    


    fetch('http://localhost:5000/visas-data',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(visaData)
    })
    .then(res => res.json())
    .then(data =>{

      if(data.acknowledged){
        swal({
          title: `${visaType} Added Successfully`,
          text: "Click the 'OK' button to continue adding the visa.",
          icon: "success",
          button: "OK",
        });
      }

      uiupdateHandle()
     
    } )

    

    
 
  }









  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg my-12">
    <h1 className="text-2xl font-bold text-center mb-6">Add Visa</h1>




    <form onSubmit={handleSubmit}>
      
      {/* Country Image URL */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="countryImage">Country Image URL</label>
        <input
          type="text"
          id="countryImage"
          name="countryImage"
          // value={formData.countryImage}
          // onChange={handleChange}
          placeholder="Enter image URL (e.g. imgbb link)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>




      {/* Country Name */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="countryName">Country Name</label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          // value={formData.countryName}
          // onChange={handleChange}
          placeholder="Enter country name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>




      {/* Visa Type Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="visaType">Visa Type</label>
        <select
          
          name="visaType"
          // value={formData.visaType}
          // onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option value="">Select Your visa Type</option>
            <option value="Official visa">Official visa</option>
            <option  value='Student visa'>Student visa</option>
            <option  value='Tourist visa'>Tourist visa</option>
       
        </select>
      </div>




      {/* Processing Time */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="processingTime">Processing Time</label>
        <input
          type="text"
          id="processingTime"
          name="processingTime"
          required
          // value={formData.processingTime}
          // onChange={handleChange}
          placeholder="Enter processing time (e.g., 6 months)"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>




    

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="description">Description</label>
        <textarea
        
          name="description"
          // value={formData.description}
          // onChange={handleChange}
          placeholder="Enter description"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Age Restriction */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="ageRestriction">Age Restriction</label>
        <input
          type="number"
          
          name="ageRestriction"
          // value={formData.ageRestriction}
          // onChange={handleChange}
          placeholder="Enter age restriction (if any)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Fee */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="fee">Fee</label>
        <input
          type="number"
    
          name="fee"
          // value={formData.fee}
          // onChange={handleChange}
          placeholder="Enter visa fee"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Validity */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="validity">Validity</label>
        <input
          type="text"
          
          name="validity"
          // value={formData.validity}
          // onChange={handleChange}
          placeholder="Enter visa validity (e.g., 6 months)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Application Method */}
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="applicationMethod">Application Method</label>
        <input
          type="text"
       
          name="applicationMethod"
          // value={formData.applicationMethod}
          // onChange={handleChange}
          placeholder="Enter application method (e.g., online)"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



        {/* Required Documents (Checkboxes) */}
        <div className="mb-4">
        <label className="block font-semibold mb-1">Required Documents</label>
       
          <div  className="flex items-center mb-2">
            <input
              type="checkbox"
          
              // value={doc}
              // onChange={handleCheckboxChange}
              
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label  className="ml-2 text-gray-700">Valid passport</label>
          </div>

          <div  className="flex items-center mb-2">
            <input
              type="checkbox"
          
              // value={doc}
              // onChange={handleCheckboxChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label  className="ml-2 text-gray-700">Visa application form</label>
          </div>

          <div  className="flex items-center mb-2">
            <input
              type="checkbox"
              
              // value={doc}
              // onChange={handleCheckboxChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label  className="ml-2 text-gray-700">Recent passport-sized photograph</label>
          </div>


      </div>

      {/* Submit Button */}
      <button 
     
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Visa
      </button>
    </form>
  </div>
  )
}

AddVisa.propTypes = {}

export default AddVisa
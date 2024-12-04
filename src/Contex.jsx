import  { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
export const contextData=createContext()
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from './Athentication/Firebase'

const Contex = ({children}) => {

  const [visasData,setVisasData]=useState([])
  const [topvisa,setTopvisa]=useState([])
  const [visaSteps,setVisaSteps]=useState([])
  const [allVisaData,setAllVisaData]=useState([])
  const [dp,setDp]=useState(null)
  const [disname,setdisname]=useState(null)
  const [userData,setUserData]=useState(null)

  useEffect(()=>{
    //add 6 data in home page
    fetch('http://localhost:5000/visas-data-home')
    .then(res => res.json())
    .then(data => setVisasData(data))
    //all visa data
    fetch('http://localhost:5000/visas-data')
    .then(res => res.json())
    .then(data => setAllVisaData(data))


    //top countries visas data
    fetch('http://localhost:5000/top-countries-visa')
    .then(res => res.json())
    .then(data => setTopvisa(data))

   //application steps
    fetch('http://localhost:5000/visa-application-process')
    .then(res => res.json())
    .then(data => setVisaSteps(data))



   },[allVisaData])

 



//signUp user
const createNewUser=(name,email,password,photoUrl)=>{

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    setUserData(user)
    // console.log(user)


    setDp(photoUrl)
    setdisname(name)
    //after signup then update profile picture
    updateProfile(user, {
      displayName: name,
       photoURL: photoUrl
    }).then(() => {

      console.log('Profile updated!')
 
    }).catch((error) => {
      console.log(error)
    });
   




  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });
}




//LOGIN user
const loginUser=(email, password)=>{

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    // console.log(user)
    setUserData(user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}







useEffect(()=>{
   
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {

     
      setDp(user.photoURL )
    setdisname(user.displayName )
      console.log(user)
    } else {
      // User is signed out
      console.log('User is signed out')
    
    }
  });

  return()=>{
    unsubscribe()
  } 

},[])


//SIGNOUT user
const signoutHandle=()=>{
  signOut(auth).then(() => {
    console.log('Signout successful')
    setUserData(null)

    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log('An error happened.')
  });
  
}





    const info={
      visasData,
      topvisa,
      visaSteps,
      allVisaData,
      createNewUser,
      loginUser,
      signoutHandle,
      disname,
      dp,
      userData
      

    }
  return (
    <contextData.Provider value={info}>
    {children}
    </contextData.Provider>
  )
}

Contex.propTypes = {
    children: PropTypes.node.isRequired
  }

export default Contex
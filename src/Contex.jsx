import  { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
export const contextData=createContext()
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './Athentication/Firebase'


const Contex = ({children}) => {


  const [dependency,setDependency]=useState(true)
  const uiupdateHandle=()=>{
    setDependency(!dependency)
  }



  const [visasData,setVisasData]=useState([])
  const [topvisa,setTopvisa]=useState([])
  const [visaSteps,setVisaSteps]=useState([])
  const [allVisaData,setAllVisaData]=useState([])
  const [dp,setDp]=useState(null)
  const [disname,setdisname]=useState(null)
  const [userData,setUserData]=useState(null)
  const [myAddedVisa,setMyAddedVisa]=useState([])
 
  console.log(dp)

  useEffect(()=>{
   
    //all visa data
    fetch('http://localhost:5000/visas-data')
    .then(res => res.json())
    .then(data => setAllVisaData(data))


//add 6 data in home page
    fetch('http://localhost:5000/visas-data-home')
    .then(res => res.json())
    .then(data =>{
     setVisasData(data)
    //  console.log(data)
    } )

   },[dependency])

 
 
useEffect(()=>{
   //top countries visas data
   fetch('http://localhost:5000/top-countries-visa')
   .then(res => res.json())
   .then(data => setTopvisa(data))

  //application steps
   fetch('http://localhost:5000/visa-application-process')
   .then(res => res.json())
   .then(data => setVisaSteps(data))

},[])
 



//signUp user
const createNewUser = (name, email, password, photoUrl) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        // Update the profile (set the display name and photo URL)
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl
        })
        .then(() => {
          // After successful profile update, set the state
          setUserData(user);  // This stores the user object
          setDp(photoUrl);    // Set the profile image (dp)
          setdisname(name);   // Set the display name
          console.log('Profile updated!');
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
      }
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
};




//LOGIN user
const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserData(user);  // Store the user object
      setDp(user.photoURL);  // Set dp from Firebase user object
      setdisname(user.displayName);  // Set display name
    })
    .catch((error) => {
      console.error('Error logging in:', error);
    });
};







// useEffect(()=>{
   
//   const unsubscribe=onAuthStateChanged(auth, (user) => {
    
 
//     if (user) {
//       setdisname(user.displayName)
//       setDp(user.photoURL)
//       setUserData(user)

      
//     } else {

//       console.log("User is signed out")

//       setUserData(null)
  
//     }
//   });

//   return()=>{
//     unsubscribe()
//   } 

// },[])




//SIGN IN WITH GOOGLE ACCOUNT

const provider = new GoogleAuthProvider();

const signGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // After successful Google sign-in, update the state
      setUserData(user);
      setDp(user.photoURL);  // Set Google user dp
      setdisname(user.displayName);  // Set Google user display name
      console.log(user);
    })
    .catch((error) => {
      console.error('Google sign-in error:', error);
    });
};




useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
      setDp(user.photoURL);
      setdisname(user.displayName);
    } else {
      console.log('User is signed out');
      setUserData(null);
    }
  });

  return () => {
    unsubscribe();
  };
}, []);










//SIGNOUT user
const signoutHandle=()=>{
  signOut(auth).then(() => {
   
    setUserData(null)
    console.log('Signout successful')


    // Sign-out successful.
  }).catch((error) => {

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
      userData,
      uiupdateHandle,
      myAddedVisa,
      setMyAddedVisa,
      signGoogle
      
  
      

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
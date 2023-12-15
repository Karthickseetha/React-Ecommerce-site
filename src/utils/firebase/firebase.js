// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,

} from 'firebase/firestore'
// import { parseAst } from "vite";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBd90GjYDiOrrwy76vZJog2ejmJm-UlEE",
  authDomain: "ecommerce-31c0b.firebaseapp.com",
  projectId: "ecommerce-31c0b",
  storageBucket: "ecommerce-31c0b.appspot.com",
  messagingSenderId: "130145073535",
  appId: "1:130145073535:web:5fb82c78d611c0328f424a"
};

// Initialize Firebase
const commerceApp = initializeApp(firebaseConfig);


// Authentication

const commerceAuth =getAuth(commerceApp);

// activate provider

const commerceGoogleProvider = new GoogleAuthProvider();

// create a authentication method function

const signInWithGooglePopup =()=> 
signInWithPopup(commerceAuth,commerceGoogleProvider);




//  create a method function for user creation 
//  using email and password

const createAuthUserWithEmailAndPassword = async(email,password)=>
{
  if(!email || !password) return;
  return createUserWithEmailAndPassword(commerceAuth,email,password)
  
}

// create a method function for signInwithEmail and password

const signInAuthUserEmailAndPassword =async (email,password)=>{
  if(!email || !password) return;
  return signInWithEmailAndPassword(commerceAuth,email,password);

}


// create a method for signout

const signOutUser =()=>signOut(commerceAuth);

// create a method for onAuthStateChange 
const onAuthStateChangedListener=(callback)=>
onAuthStateChanged(commerceAuth,callback);






// Firestore
const commerceDb =getFirestore(commerceApp);

// Create user document  
const createUserDocumentFromAuth =async (userAuth,
  additionalInformation={},
  ) => {
  if(!userAuth) return;

  const userDocRef =doc(commerceDb,'users',userAuth.uid);

  // console.log(userDocRef);

const userSnapShot = await getDoc(userDocRef);

if(!userSnapShot.exists()){
  const {displayName,email}=userAuth;
  const createdAt =new Date();

  try{
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,  
    })
  } catch(error){
    console.log(`Error creating the user`,error.message)
  }
}
 return userDocRef;
};


// Create a method for add collection and documents from local to firebase

const addCollectionAndDocuments = async(
  collectionKey,
  objectsToAdd,
   field='title',
   )=>{

    const collectionRef=collection(commerceDb,collectionKey);
    const batch = writeBatch(commerceDb);

    objectsToAdd.forEach((object)=>{

      const docRef=doc(collectionRef,object[field].toLowerCase());
      batch.set(docRef,object);
    
    });

    await batch.commit();


   }

// create method for getting data from firestore

const getCategoriesAndDocuments=async()=>{
  const collectionRef = collection(commerceDb,'categories');
  const q =query(collectionRef);

  const querySnapShot =await getDocs(q);


  const categoryMap=querySnapShot.docs.reduce((acc,docsSnapShot)=>{
  
      const {title,items} = docsSnapShot.data();
      // console.log(title,items);
    acc[title.toLowerCase()]=items;
    return acc;
  },{});

  return categoryMap;

  // console.log(categoryMap);
}

// Exporting
export {
  commerceAuth,
  signInWithGooglePopup,
  commerceDb,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocuments,
  getCategoriesAndDocuments
};


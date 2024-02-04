import { initializeApp } from "firebase/app";
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
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

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
const commerceAuth = getAuth(commerceApp);
const commerceGoogleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = () => signInWithPopup(commerceAuth, commerceGoogleProvider);

const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(commerceAuth, email, password);
};

const signInAuthUserEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(commerceAuth, email, password);
};

const signOutUser = () => signOut(commerceAuth);

const onAuthStateChangedListener = (callback) => onAuthStateChanged(commerceAuth, callback);

// Firestore
const commerceDb = getFirestore(commerceApp);

const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(commerceDb, 'users', userAuth.uid);

    const userSnapShot = await getDocs(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log(`Error creating the user`, error.message);
        }
    }
    return userDocRef;
};

const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'title') => {
    const collectionRef = collection(commerceDb, collectionKey);
    const batch = writeBatch(commerceDb);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object[field].toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
};

const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(commerceDb, 'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);

    const categoryMap = querySnapShot.docs.reduce((acc, docsSnapShot) => {
        const { title, items } = docsSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};
const addOrderToFirestore = async (userId, orderDetails) => {
    const ordersRef = collection(commerceDb, 'orders');
    const newOrderRef = doc(ordersRef);

    try {
        await setDoc(newOrderRef, {
            userId,
            orderDetails,
            createdAt: new Date(),
        });
    } catch (error) {
        console.error('Error adding order to Firestore:', error.message);
        throw error;
    }
};

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
    getCategoriesAndDocuments,
    addOrderToFirestore,
};
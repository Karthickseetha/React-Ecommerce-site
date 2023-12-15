import { createContext,useContext,useState,useEffect } from "react";

// import { SHOP_DATA } from "../constants";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

const CategoriesContext=createContext({
    categoriesMap:{},
});

const CategoriesProvider = ({children})=>{

    const [categoriesMap,setCategoriesMap]=useState({});


    useEffect(()=>{
        const getCategories=async() =>{

        const categoryMap =await getCategoriesAndDocuments();
        // console.log(categoryMap);

        setCategoriesMap(categoryMap);
        };

        getCategories();

    },[]);

    const value={categoriesMap,setCategoriesMap};

    return(
        <CategoriesContext.Provider 
        value={value}>
            {children}
        </CategoriesContext.Provider>
    )
  
}

const useCategoriesGlobalContext = ()=>{
    return useContext(CategoriesContext)
}

export {CategoriesContext,CategoriesProvider,useCategoriesGlobalContext}
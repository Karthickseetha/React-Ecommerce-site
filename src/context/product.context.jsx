// import { createContext,useContext,useState,useEffect } from "react";

// import { PRODUCTS } from "../constants";


// const ProductContext = createContext({
//     products : [],
// })

// const ProductProvider = ({children})=>{
//     const [products,setProducts]=useState(PRODUCTS);

//     const value ={products,setProducts};

//     return ( 
//     <ProductContext.Provider value={value}>
//         {children}
//     </ProductContext.Provider>
//     )

// }

// const useProductGlobalContext=()=>{
//     return useContext(ProductContext);
// }

// export {ProductContext,ProductProvider,useProductGlobalContext};

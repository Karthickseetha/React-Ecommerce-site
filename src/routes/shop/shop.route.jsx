import { Routes,Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.route";

import Category from "../category/category.route";

const Shop = () => {
    return ( 
        <Routes>
            <Route 
            index 
            element={<CategoriesPreview/>}
            />
        <Route path=':category'
         element={<Category/>} />

            </Routes>
     );
}
 
export default Shop;



















// import './shop.styles.scss';
// import { useProductGlobalContext } from '../../context/product.context';
// import { ProductCard } from '../../components';
// const Shop = () => {
//     const {products} =useProductGlobalContext();
//     console.log(products);
//     return (

//         <div className="products-container">
//             {products.map((product)=>{
//             return(
//                 <ProductCard
//                  key={product.id}
//                  product={product}
                
//                 />
//             )
//             })}
//         </div>
 
         
//          );
// }
 
// export default Shop;
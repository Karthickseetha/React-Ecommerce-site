import './category.styles.scss';

import { useParams } from 'react-router-dom';

import { useCategoriesGlobalContext } from '../../context/categories.context';

import { ProductCard } from '../../components';
import { useEffect, useState } from 'react';

const Category = () => {
    const {category} =useParams();
    const {categoriesMap} =useCategoriesGlobalContext();

    console.log(categoriesMap);

    const [products,setProducts]=useState(categoriesMap[category]);
    
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return ( 
        <>
            <h1 className='category-title'>{category}</h1>

            <div className="product-category-container">
                {products && 
                products.map((product)=>{
                    return (
                        <ProductCard
                    key={product.id}
                    product={product}
                    />
                    )
                    
                })}
            </div>
            </>
        );
}
 
export default Category

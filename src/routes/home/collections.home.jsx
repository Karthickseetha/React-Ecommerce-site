import { useNavigate } from "react-router-dom";


const Collections = ({imageUrl,title}) => {

 const navigate =useNavigate();
 const navigateHandler =(category)=>{
  navigate(`/shop/${category.toLowerCase()}`);
 };
  return ( 
        
      <div className="item">
        <img src={imageUrl} alt="Product" />
        <h2
         onClick={()=>navigateHandler(title)}
         >
          {title}</h2>
        <button
        onClick={()=>navigateHandler(title)}
        >
          Shop Now</button>
      </div>

     );
}
 
export default Collections;
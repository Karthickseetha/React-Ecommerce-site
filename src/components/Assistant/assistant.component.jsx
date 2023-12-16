import './assistant.styles.scss'; 
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from 'react-router-dom';

const Assistant = () => {

  
 

  return (
<div className="assistant">
      <div className="assistant-icons">
        <div className="icon" >
          <Link to='/'>
        <AiFillHome />
        </Link>

        </div>
        <div className="icon" >
        <Link to='/shop'>
        <FaCartShopping />
        </Link>

        </div>
        <div className="icon" >
        <Link to='/contact'>
        <MdPermContactCalendar />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Assistant;

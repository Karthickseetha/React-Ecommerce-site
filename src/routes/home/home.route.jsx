import { categories } from "../../constants";
import Collections from "./collections.home";
import './home.styles.scss';
import '../../styles/main.scss';

const Home = () => {
    return ( 
           
    <section className="section" id="categories">
    


<div className="flex-container">

{categories.map((category)=>{

    return(
        <Collections 
        key={category.id} 
        {...category}/>
    )

})}
</div>
</section>


     );
}
 
export default Home;
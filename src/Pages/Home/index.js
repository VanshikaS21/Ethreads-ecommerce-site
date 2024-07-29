import HomeBanner from "../../Components/homebanner";
import bannerimg from "../../assets/images/Green Modern Hello Summer (Poster).png";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
const Home=()=>{
    return (
        <>
       <HomeBanner/>
        <section className="homeproducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner" >
                        <img src={bannerimg} className="cursor banner-img" />
                        
                        </div>
                        

                    </div>
                        <div className="col-md-9">
<div className="d-flex align-items-center">
    <div className="info w-75">
        <h3 className="mb-0">HOT PICKS</h3>
        <p className="text-light text-sml mb-0">Get your hands on the most trendy Collection !</p>
    </div>
    <Button className="view ml-auto">View All<IoIosArrowRoundForward /></Button>
</div>
                       
                    </div>
                </div>

            </div>
        </section>

     
        </>
    )
}
export default Home;
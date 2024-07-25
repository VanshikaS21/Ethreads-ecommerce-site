import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Ethreads.png';
import Countrydropdown from '../CountryDropdown';
import SearchBox from './Headersearch';
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from "../../App";
const Header = () => {

    const context= useContext(MyContext)

    return (
        <div className="headerWrapper">
            <div className="top-strip bg-yellow">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Become a <b>Prime Member </b>, and get upto 40% off !</p>
                </div>
            </div>
            <header className="header">
                <div className="container d-flex align-items-center">
                    <div className="logoWrapper">
                        <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                    </div>
                    <div className='col-sm-10 d-flex align-items-center part2'>
                        {
                            context.countryList?.length!==0 &&  <Countrydropdown/>
                        }
                       
                        {/* Header search begins here*/}
                       
                        <SearchBox/>
                        {/*Ends here*/}
                        <div className='part3 d-flex align-items-center ml-auto'>
                            <Button className='circle mr-3'><FaRegUser /></Button>
                            <div className='ml-auto cart d-flex align-items-center'>
                               <span className='price'>$3.29</span> 
                               <div className='position-relative ml-2'>
                               <Button className='circle ml-2'><FiShoppingBag /></Button>
                               <span className='count d-flex align-items-center justify-content-center'>1</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                </header>
              <Navigation/>
           
            </div>
           
    )
}

export default Header;

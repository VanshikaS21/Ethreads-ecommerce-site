import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState, useContext, useEffect } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);

    const [countryList, setCountryList] = useState([]);
    const [filteredCountryList, setFilteredCountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry = (index, country) => {
        setSelectedTab(index);
        setIsOpenModal(false);
        context.setSelectedCountry(country);
    };

    useEffect(() => {
        setCountryList(context.countryList);
        setFilteredCountryList(context.countryList); // Initialize filtered list
    }, [context.countryList]);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = countryList.filter((item) => 
            item.country.toLowerCase().includes(keyword)
        );
        setFilteredCountryList(list);
    };

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
                <div className='info'>
                    <span className='Label'>Your Location</span>
                    <span className='name'>{context.selectedCountry !== "" ? context.selectedCountry?.substr(0,10) : 'Select' }</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>
            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationmodel" TransitionComponent={Slide}>
                <h4>Choose your delivery Location</h4>
                <p>Enter your address to get specified offers.</p>
                <Button className="close_" onClick={() => setIsOpenModal(false)}><IoIosClose /></Button>

                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Select a Location..' onChange={filterList} />
                    <Button><IoSearch /></Button>
                </div>

                <ul className="countrylist mt-3">
                    {
                        filteredCountryList?.length !== 0 && filteredCountryList?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => selectCountry(index, item.country)}
                                        className={`${selectedTab === index ? 'active' : ''}`}>
                                        {item.country}
                                    </Button>
                                </li>
                            );
                        })
                    }
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;

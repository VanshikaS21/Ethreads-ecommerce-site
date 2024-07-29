import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { TbMoodKid } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { MdChair } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allcattab d-inline align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className='icon1 mr-2'><IoMenu /></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>
                            <div className={`sidebarNav ${isopenSidebarVal ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Men<FaAngleRight className='ml-auto'/> </Button></Link>
                                    <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Grooming</Button></Link>
                                </div>
                                    </li>
                                    <li><Link to="/"><Button>Women<FaAngleRight className='ml-auto'/></Button></Link>
                                    <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Handbags</Button></Link>
                                    <Link to="/"><Button>Haircare</Button></Link>
                                </div></li>
                                    <li><Link to="/"><Button>Home and Living <FaAngleRight className='ml-auto'/> </Button></Link>
                                    <div className='submenu shadow'>
                                    <Link to="/"><Button>Home decor</Button></Link>
                                    <Link to="/"><Button>Bedsheets</Button></Link>
                                    <Link to="/"><Button>Flooring</Button></Link>
                                    <Link to="/"><Button>Furniture</Button></Link>
                                </div>
                                    </li>
                                    <li><Link to="/"><Button>Beauty <FaAngleRight className='ml-auto'/> </Button></Link>
                                    <div className='submenu shadow'>
                                    <Link to="/"><Button>Skincare</Button></Link>
                                    <Link to="/"><Button>Makeup and Glam</Button></Link>
                                    <Link to="/"><Button>Hair tools</Button></Link>
                                    <Link to="/"><Button>Fragrances</Button></Link>
                                </div>
                                    </li>
                                    <li><Link to="/"><Button>Kids <FaAngleRight className='ml-auto'/> </Button></Link>
                                    <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Backpacks</Button></Link>
                                    <Link to="/"><Button>Stationery</Button></Link>
                                </div>
                                    </li>
                                    <li><Link to="/"><Button>Hot Arrivals</Button></Link></li>
                                    <li><Link to="/"><Button>Clearance Sale</Button></Link></li>
                                    <li><Link to="/"><Button>@ 999</Button></Link></li>
                                    <li><Link to="/"><Button>Premium Decor</Button></Link></li>
                                    <li><Link to="/"><Button>Designer Special</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-10 navPart2 d-inline align-items-center'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'><Link to="/"><IoHomeOutline /><Button>Home</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><IoManOutline /><Button>Men</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Grooming</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><IoWomanOutline /><Button>Women</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Handbags</Button></Link>
                                    <Link to="/"><Button>Haircare</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><TbMoodKid /><Button>Kids</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Backpacks</Button></Link>
                                    <Link to="/"><Button>Stationery</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><GiLipstick /><Button>Beauty</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Skincare</Button></Link>
                                    <Link to="/"><Button>Makeup and Glam</Button></Link>
                                    <Link to="/"><Button>Hair tools</Button></Link>
                                    <Link to="/"><Button>Fragrances</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><MdChair /><Button>Home&Living</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Home decor</Button></Link>
                                    <Link to="/"><Button>Bedsheets</Button></Link>
                                    <Link to="/"><Button>Flooring</Button></Link>
                                    <Link to="/"><Button>Furniture</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><IoMdCall /><Button>Contact</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

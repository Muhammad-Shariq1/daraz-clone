import React from 'react';
import daraz from "../assets/daraz.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = ({ searchTerm, setSearchTerm }) => { 
  return (
    <div className='w-full h-32 bg-[#ee5300] font-normal text-[#ffffff] text-[14px]'>
      <ul className='flex gap-10 justify-end mr-80'>
        <li>Save More on App</li> 
        <li>Sell On Daraz</li> 
        <li>Help & Support</li> 
        <li>Login</li> 
        <li>Sign Up</li> 
        <li>زبان تبدیل کریں</li> 
      </ul>

      <div className="p-4 flex ml-84 mt-1 items-center">
        <img src={daraz} alt="daraz logo" className="w-34" />
        
        <input
          type="search"
          placeholder="Search In Daraz"
          className="bg-[#ffffff] h-12 ml-18 w-[650px] text-[#000000] placeholder-gray-500 px-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        
        <SearchIcon style={{ width: "50px", height: "48px" }} className='bg-[#ffffff] text-[#ff5900] cursor-pointer' />
        <ShoppingCartOutlinedIcon style={{ width: "80px", height: "40px" }} className='mt-3 ml-2' />
      </div>
    </div>
  );
};

export default Header;

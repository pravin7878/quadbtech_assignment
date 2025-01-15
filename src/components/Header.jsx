// here is the all assets
import logo from "../../public/logo.png"
import { IoGridOutline, IoMenu } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'
import { MdOutlineDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import {togleSearchInput} from "../utils/scripts"
import { useState } from "react"


export const Header = ({ isGrid, isDark, togleSidebar }) => {
    const [isSearch, setisSearch] = useState(false)
    
    return (
        <header className='bg-gray-100 border-b border-gray-200 flex justify-between items-center px-6 py-1 h-[50px]'>
            <div className="flex gap-1 md:gap-4 items-center">
                <span className="cursor-pointer">
                    <IoMenu size={30} onClick={togleSidebar}/>
               </span>
                <span className='w-[50%] md:w-[70%]'>
                    <img className='w-full h-1/2' src={logo} alt="logo" />
                </span>
            </div>
            
            <div className="w-[90%] md:w-[50%] flex gap-3 justify-end">
                <div className={`${isSearch ? null : "hidden"} relative w-[80%]`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>

                <div className="flex gap-3 items-center">
                    <IoIosSearch size={28} onClick={() => setisSearch(!isSearch)} className="cursor-pointer"/>
                    {isGrid ? <FaListUl size={25} className="cursor-pointer"/> : <IoGridOutline size={23} className="cursor-pointer"/>}
                    {isDark ? <CiLight size={25} className="cursor-pointer"/> : <MdOutlineDarkMode size={25} className="cursor-pointer"/>}
                </div>
            </div>
            
        </header>
    )
}

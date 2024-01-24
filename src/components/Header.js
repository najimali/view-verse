import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className='flex justify-between items-center h-20 py-10 px-20 shadow-gray-200'>
            <div className='flex items-center w-2/12 p-2'>
                <FontAwesomeIcon className='mx-8 h-6' icon={faBars} />
                <img alt ="logo" className='h-15 w-10 border rounded-full object-contain' src={logo} />
            </div>
            <div className='flex justify-center items-center w-6/12 p-2'>
                <input
                    type='text'
                    className='w-8/12 border border-gray-400 outline-none rounded-l-full py-2 px-4 focus:border-gray-500 focus:ring-1 focus:ring-offset-gray-300'
                    placeholder='Search'
                ></input>
                <FontAwesomeIcon className='rounded-r-3xl bg-gray-200 p-[13px]' icon={faSearch}></FontAwesomeIcon>
            </div>
            <div className='flex justify-center w-2/12'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Header
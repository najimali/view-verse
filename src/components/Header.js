import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"
import { useDispatch } from 'react-redux'
import { openSideBar, toggleSideBar } from '../store/sideBarSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { debounceDelays, SUGGESTION_KEYWORD_URL } from '../utils/constants';
import SuggestionSearch from './SuggestionSearch';
const Header = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestionSearch, setShowSuggestionSearch] = useState(false)
    const [suggestionSearchUrl, setSuggestionSearchUrl] = useState(SUGGESTION_KEYWORD_URL())
    const { data: suggestions } = useFetch(suggestionSearchUrl)
    useEffect(() => {
        const timer = setTimeout(() => setSuggestionSearchUrl(SUGGESTION_KEYWORD_URL(searchTerm)), debounceDelays.SEARCH_INPUT)
        return () => clearTimeout(timer)
    }, [searchTerm])
    return (
        <div className='flex justify-between items-center h-20 py-10 px-4 shadow-sm'>
            <div className='flex items-center w-2/12 p-2'>
                <FontAwesomeIcon className='mx-8 h-6 cursor-pointer' icon={faBars} onClick={() => {
                    dispatch(toggleSideBar())
                }} />
                <Link to='/' onClick={() => dispatch(openSideBar())}>
                    <img alt="logo" className='h-15 w-10 border rounded-full object-contain' src={logo} />
                </Link>
            </div>
            <div className='flex justify-start items-center w-6/12 relative'>
                <input
                    type='text'
                    className='w-8/12 border border-gray-400 outline-none rounded-l-full py-2 px-4 focus:border-gray-500 focus:ring-1 focus:ring-offset-gray-300'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onFocus={() => setShowSuggestionSearch(true)}
                    onBlur={() => setShowSuggestionSearch(false)}
                ></input>
                {showSuggestionSearch && suggestions[1]?.length ?
                    <SuggestionSearch
                        data={suggestions[1]}
                    /> : null}
                <FontAwesomeIcon className='rounded-r-3xl bg-gray-200 p-[13px]' icon={faSearch}></FontAwesomeIcon>
            </div>
            <div className='flex justify-center w-2/12'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Header
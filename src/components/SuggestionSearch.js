import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuggestionSearch = ({ data }) => {
    return (
        <div className="flex flex-col w-8/12 bg-white shadow-lg absolute top-14 gap-1 py-2 rounded-md">
            {(data || []).map(name =>
                <span key={name} className="flex items-center px-3 py-1 rounded-sm hover:bg-zinc-200">
                    <FontAwesomeIcon className="pr-4 w-4 opacity-40" icon={faSearch}></FontAwesomeIcon>
                    {name}
                </span>)}
        </div>
    )
}
export default SuggestionSearch
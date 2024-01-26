import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { formatNumber, timeAgo } from "../utils/commonFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../store/sideBarSlice";

const VideoCard = ({ data }) => {
    const dispatch = useDispatch()
    if (!data) return
    const { id, snippet, statistics } = data
    const { title, publishedAt, thumbnails: { high: { url } }, channelTitle } = snippet
    return (
        <Link to={`/watch?v=${id}`} onClick={() => dispatch(closeSideBar())
        }>
            <div className="flex flex-col justify-start items-center w-96 p-4 gap-1 m-4 rounded-lg hover:shadow-xl">
                <div >
                    <img alt="video" className="w-96 h-60 rounded-md" src={url}></img>
                </div>
                <div className="gap-2">
                    <div className="flex flex-wrap  font-semibold text-start">{title?.substring(0, 85)}</div>
                    <div className="mt-2 text-start">{channelTitle}</div>
                    <div className="text-start">{formatNumber(statistics?.viewCount || 0)} views <span><FontAwesomeIcon className="w-[5px]" icon={faCircle} /></span> {timeAgo(publishedAt)}</div>
                </div>

            </div>
        </Link>
    )
}
export default VideoCard
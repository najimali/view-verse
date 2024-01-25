import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { formatNumber, timeAgo } from "../utils/commonFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoCard = ({ data }) => {
    if (!data) return
    const { id, snippet, statistics } = data
    const { title, publishedAt, thumbnails: { high: { url } }, channelTitle } = snippet
    return (
        <div className="flex flex-col justify-start items-center w-96 p-4 shadow-md gap-1 m-4 rounded-md" key={id}>
            <div >
                <img alt ="video"className="w-96 h-60 rounded-md" src={url}></img>
            </div>
            <div className="gap-2">
                <div className="flex flex-wrap  font-semibold text-start">{title}</div>
                <div className="mt-2 text-start">{channelTitle}</div>
                <div className="text-start">{formatNumber(statistics?.viewCount || 0)} views <span><FontAwesomeIcon className="w-[5px]" icon={faCircle} /></span> {timeAgo(publishedAt)}</div>
            </div>
        </div>
    )
}
export default VideoCard
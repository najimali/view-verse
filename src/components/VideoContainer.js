import useFetch from "../hooks/useFetch.js"
import { GET_VIDEOS_URL } from "../utils/constants"
import VideoCard from "./VideoCard.js"

const VideoContainer = () => {
    const { data: videos } = useFetch(GET_VIDEOS_URL)
    return (
        <div className="flex flex-wrap w-full h-[100vh] overflow-y-scroll no-scrollbar">
            {(videos?.items || []).map(video => 
            <VideoCard
                key={video.id}
                data={video}
            />)}
        </div>
    )
}

export default VideoContainer
import useFetch from "../hooks/useFetch.js"
import { GET_VIDEOS_URL } from "../utils/constants"
import VideoCard from "./VideoCard.js"

const VideoContainer = () => {
    const { data: videos } = useFetch(GET_VIDEOS_URL)
    return (
        <div className="flex flex-wrap p-2 m-2">
            {(videos?.items || []).map(video => <VideoCard
                data={video}
            />)}

        </div>
    )
}

export default VideoContainer
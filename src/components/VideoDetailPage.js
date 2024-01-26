import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { GET_VIDEO_BY_ID_URL } from "../utils/constants";
const VideoDetailPage = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
   const { data: video } = useFetch(GET_VIDEO_BY_ID_URL(id))
   if(!video)return
    return (
        <div className="p-2">
            <iframe
                className="rounded-lg"
                width="1100"
                height="600"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div>
    )
}
export default VideoDetailPage
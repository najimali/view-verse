import { useSearchParams } from "react-router-dom";
const VideoDetailPage = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    return (
        <div>
            VideoDetailPage
        </div>
    )
}
export default VideoDetailPage
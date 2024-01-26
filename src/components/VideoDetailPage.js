import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { GET_CHANNEL_BY_ID, GET_VIDEO_BY_ID_URL, VISIBLE_DESCRIPTION_LENGTH } from "../utils/constants";
import { useEffect, useState } from "react";
import { formatNumber } from "../utils/commonFunction";
import Description from "./Description";
const VideoDetailPage = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    const [video, setVideo] = useState({})
    const [channel, setChannel] = useState({})
    const [showMoreDescription, setShowMoreDescription] = useState(false)
    const { data: videoResponse } = useFetch(GET_VIDEO_BY_ID_URL(id))
    const { data: channelResponse } = useFetch(GET_CHANNEL_BY_ID(video?.snippet?.channelId))
    useEffect(() => {
        if (videoResponse?.items?.length) {
            console.log(videoResponse);
            setVideo(videoResponse?.items[0])
        }
    }, [videoResponse])
    useEffect(() => {
        if (channelResponse?.items?.length) {
            console.log(channelResponse);
            setChannel(channelResponse?.items[0])
        }
    }, [channelResponse])
    return (
        <div className="w-full m-2 p-2 pl-6">
            <div>
                <iframe
                    className="w-9/12 rounded-lg"
                    height="550"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <div className="py-2 px-1 font-bold text-lg">
                    {video?.snippet?.title}
                </div>
                <div className="flex items-center">
                    <div>
                        <img
                            className="w-12 h-12 rounded-full object-center"
                            src={channel?.snippet?.thumbnails?.high?.url}
                        >
                        </img>
                    </div>
                    <div className=" flex flex-col gap-0 text-md font-bold px-4 py-2">
                        <span>
                            {video?.snippet?.channelTitle}
                        </span>
                        <span className="text-xs font-semibold opacity-50">
                            {channel ? `${formatNumber(channel?.statistics?.subscriberCount, 2)} subscribers` : null}
                        </span>

                    </div>
                    <div>
                        <button className=" text-white bg-black px-3 py-2 rounded-l-full rounded-r-full outline-none">Subscribe</button>
                    </div>
                </div>
                {!showMoreDescription && video?.snippet?.description ?
                    <Description
                        data={`${video.snippet.description.substring(0, VISIBLE_DESCRIPTION_LENGTH) + "\n...more"}`}
                        setShowMoreDescription={setShowMoreDescription}
                    />
                    : null}
                {showMoreDescription && video?.snippet?.description ?
                    <Description
                        data={video.snippet.description}
                        setShowMoreDescription={setShowMoreDescription}
                    /> : null}
            </div>
        </div>
    )
}
export default VideoDetailPage
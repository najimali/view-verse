import React, { useState, useEffect } from 'react';
import { GET_VIDEOS_URL, MAX_VIDEOS_ON_LANDING_PAGE } from "../utils/constants"
import VideoCard from "./VideoCard.js"
import axios from "axios";

const VideoContainer = () => {
    const [pageToken, setPageToken] = useState('');
    const [videos, setVideos] = useState([]);
    const [apiFetchCounter, setApiFetchCounter] = useState(1)
    useEffect(() => {
        const fetchData = async () => {
            if (videos?.length >= MAX_VIDEOS_ON_LANDING_PAGE) return
            const response = await axios.get(`${GET_VIDEOS_URL}&pageToken=${pageToken}`);
            const videoResponse = response?.data
            if (videoResponse) {
                setPageToken(videoResponse.nextPageToken)
                setVideos(prev => [...prev, ...videoResponse.items])
            }
        }
        fetchData();
    }, [apiFetchCounter]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            // this will help to re-render the components
            setApiFetchCounter(prev => prev + 1)
        }
    };
    return (
        <div className="h-[100vh] flex flex-wrap w-full overflow-y-scroll no-scrollbar">
            {(videos || []).map((video, index) =>
                <VideoCard
                    key={index}
                    data={video}
                />
            )}
        </div>
    );
}

export default VideoContainer;

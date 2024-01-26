export const GET_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const GET_VIDEO_BY_ID_URL = (id) => `https://youtube.googleapis.com/youtube/v3/videos?part=topicDetails%2Cid%2Csnippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const SUGGESTION_KEYWORD_URL = (query) => `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
export const GET_COMMENTS_BY_VIDEO_ID = (id) => `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const GET_CHANNEL_BY_ID = (id) => `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const apiActions = {
    FETCH_DATA: "fetchData",
    SET_DATA: "setData",
    SET_ERROR: "setError"
}

export const debounceDelays = {
    SEARCH_INPUT: 500,
};
export const GET_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const GET_VIDEO_BY_ID_URL = (id) => `https://youtube.googleapis.com/youtube/v3/videos?part=topicDetails%2Cid%2Csnippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const SUGGESTION_KEYWORD_URL = (query) => `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
export const GET_COMMENTS_BY_VIDEO_ID = (id) => `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const GET_CHANNEL_BY_ID = (id) => `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const apiActions = {
    FETCH_DATA: "fetchData",
    SET_DATA: "setData",
    SET_ERROR: "setError"
}
export const MAX_VISIBLE_LIVE_CHAT_COUNT = 50
export const POLL_LIVE_CHAT_MESSAGE_DELAY = 1500 //ms
export const MAX_FAKE_SENTENCE_COUNT = 6 //ms
export const MAX_VIDEOS_ON_LANDING_PAGE = 80
export const VISIBLE_DESCRIPTION_LENGTH = 250
export const MORE_TEXT = "\n...more"
export const debounceDelays = {
    SEARCH_INPUT: 500,
};
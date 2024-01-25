const YOUTUBE_API_KEY = 'AIzaSyAByNrjPKs8KPMDrpPu5vjNn7dqAUDgOVk'

export const GET_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=${YOUTUBE_API_KEY}`

export const apiActions = {
    FETCH_DATA: "fetchData",
    SET_DATA: "setData",
    SET_ERROR: "setError"
}
const YOUTUBE_API_KEY = 'AIzaSyAByNrjPKs8KPMDrpPu5vjNn7dqAUDgOVk'

export const GET_VIDEO_END_POINT = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${YOUTUBE_API_KEY}`
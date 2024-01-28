import HomeIcon from "../assets/Svg/HomeIcon"
import ShortsIcon from "../assets/Svg/ShortsIcon"
import SubscriptionsIcon from "../assets/Svg/SubscriptionsIcon"
import YourChannelIcon from "../assets/Svg/YourChannelIcon"
import HistoryIcon from "../assets/Svg/HistoryIcon"
import VideoIcons from "../assets/Svg/VideosIcon"
import WatchLaterIcon from "../assets/Svg/WatchLaterIcon"
import TrendingIcon from "../assets/Svg/TrendingIcon"
import SideBarList from "./SideBarList"
import ShoppingIcon from "../assets/Svg/ShoppingIcon"
import MusicIcon from "../assets/Svg/MusicIcon"
import MoviesIcon from "../assets/Svg/MoviesIcon"
import LiveIcon from "../assets/Svg/LiveIcon"
import GamingIcon from "../assets/Svg/GamingIcon"
import NewsIcon from "../assets/Svg/NewsIcon"
import SportsIcon from "../assets/Svg/SportsIcon"
import LearningIcon from "../assets/Svg/LearningIcon"
import FashionIcon from "../assets/Svg/FashionIcon"
import PodcastsIcon from "../assets/Svg/PodcastsIcon"
import SettingsIcon from "../assets/Svg/SettingsIcon"
import ReportHistoryIcon from "../assets/Svg/ReportHistoryIcon"
import HelpIcon from "../assets/Svg/HelpIcon"
import SendFeedbackIcon from "../assets/Svg/SendFeedbackIcon"

const SideBarContainer = () => {
    const mainList = [
        {
            text: "Home",
            icon: <HomeIcon />

        },
        {
            text: "Shorts",
            icon: <ShortsIcon />
        },
        {
            text: "Subscriptions",
            icon: <SubscriptionsIcon />
        }
    ]
    const subList = [
        {
            text: "Your Channel",
            icon: <YourChannelIcon></YourChannelIcon>
        },
        {
            text: "History",
            icon: <HistoryIcon></HistoryIcon>
        },
        {
            text: "Videos",
            icon: <VideoIcons />
        },
        {
            text: "Watch Later",
            icon: <WatchLaterIcon />
        }
    ]
    const exploreList = [
        {
            text: "Trending",
            icon: <TrendingIcon />
        },
        {
            text: "Shopping",
            icon: <ShoppingIcon />
        },
        {
            text: "Music",
            icon: <MusicIcon></MusicIcon>
        },
        {
            text: "Movies",
            icon: <MoviesIcon></MoviesIcon>
        },
        {
            text: "Live",
            icon: <LiveIcon></LiveIcon>
        },
        {
            text: "Gaming",
            icon: <GamingIcon></GamingIcon>
        },
        {
            text: "News",
            icon: <NewsIcon></NewsIcon>
        },
        {
            text: "Sports",
            icon: <SportsIcon></SportsIcon>
        },
        {
            text: "Learning",
            icon: <LearningIcon></LearningIcon>
        },
        {
            text: "Fashion & Beauty",
            icon: <FashionIcon></FashionIcon>
        },
        {
            text: "Podcasts",
            icon: <PodcastsIcon></PodcastsIcon>
        },
    ]
    const settingList = [
        {
            text: "Settings",
            icon: <SettingsIcon></SettingsIcon>
        },
        {
            text: "Report history",
            icon: <ReportHistoryIcon></ReportHistoryIcon>
        },
        {
            text: "Help",
            icon: <HelpIcon></HelpIcon>
        },
        {
            text: "Send feedback",
            icon: <SendFeedbackIcon></SendFeedbackIcon>
        },
    ]
    return (
        <div className="h-[100vh] w-60 px-10 pt-2 gap-4">
            <SideBarList data={mainList} />
            <SideBarList data={subList} />
            <SideBarList data={exploreList} />
            <SideBarList data={settingList} />
        </div>
    )
}

export default SideBarContainer
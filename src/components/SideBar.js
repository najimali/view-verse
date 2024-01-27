import HomeIcon from "../assets/Svg/HomeIcon"
import ShortsIcon from "../assets/Svg/ShortsIcon"
import SubscriptionsIcon from "../assets/Svg/SubscriptionsIcon"
import YourChannelIcon from "../assets/Svg/YourChannelIcon"
import HistoryIcon from "../assets/Svg/HistoryIcon"
import VideoIcons from "../assets/Svg/VideosIcon"
import WatchLaterIcon from "../assets/Svg/WatchLaterIcon"

const SideBar = () => {
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
    return (
        <div className="shadow-lg h-[100vh] w-60 px-10 pt-2 gap-4">
            <div className="flex flex-col border-b border-b-1 gap-2 py-1 mb-2">

                {mainList.map(({ text, icon }) => (
                    <div className="flex justify-between items-center" key={text}>
                        {icon}
                        <div className="w-full text-start rounded-md pl-2 py-1 hover:font-bold hover:bg-gray-100 ">{text}</div>
                    </div>
                )
                )}
            </div>
            <div className="flex flex-col border-b border-b-1 gap-2 py-1">
                {subList.map(({ text, icon }) =>
                (
                    <div className="flex justify-between items-center border-gray-200" key={text}>
                        {icon}
                        <div className="w-full text-start rounded-md pl-2 py-1 hover:font-bold hover:bg-gray-100 ">{text}</div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default SideBar
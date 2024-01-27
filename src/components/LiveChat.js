import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../store/liveChatSlice"
import { faker } from '@faker-js/faker';
import { MAX_FAKE_SENTENCE_COUNT, POLL_LIVE_CHAT_MESSAGE_DELAY } from "../utils/constants";

const LiveChat = () => {
    const chatMessages = useSelector(store => store.liveChat.messages)
    const dispatch = useDispatch()
    useEffect(() => {

        const intervalId = setInterval(() => {
            const message = faker.lorem.sentence(MAX_FAKE_SENTENCE_COUNT)
            const name = faker.internet.userName()
            const profileUrl = faker.image.avatar()
            dispatch(addMessage({
                profileUrl: profileUrl,
                name: name,
                message: message
            }))
        }, (POLL_LIVE_CHAT_MESSAGE_DELAY));
        return () => clearInterval(intervalId)
    }, [])
    return (
        <div className="w-3/12 bg-slate-50 px-4 py-4 mx-2 border-spacing-1 rounded-md h-[550px] overflow-y-scroll flex flex-col justify-end">
            {
                chatMessages.map(({ name, message, profileUrl }, index) =>
                    <div className="flex items-center h-20 p-1">
                        <div key={index}>
                            <img
                                className="w-8 h-8 rounded-full"
                                alt="live-user"
                                src={profileUrl}
                            />
                        </div>
                        <div className="ml-2 flex justify-start items-center">
                            <p className="text-xs">
                                <span className="text-xs font-medium mr-2">{name}</span>
                                {message}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default LiveChat
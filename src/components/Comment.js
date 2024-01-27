import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { timeAgo } from "../utils/commonFunction"
import { faArrowDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const tranformRepliesToCommentInput = (comment) => {
    return {
        authorProfileImageUrl: comment?.snippet?.authorProfileImageUrl,
        authorDisplayName: comment?.snippet?.authorDisplayName,
        textOriginal: comment?.snippet?.textOriginal,
        likeCount: comment?.snippet?.likeCount,
        publishedAt: comment?.snippet?.publishedAt,
    }
}
const Comment = ({ comment, profileImageClass }) => {
    const [showReplies, setShowReplies] = useState(false)
    return (
        <div className="flex">
            <div className="m-2">
                <img
                    alt="user"
                    className={profileImageClass}
                    src={comment?.authorProfileImageUrl}
                ></img>
            </div>
            <div className="flex flex-col">
            <div className="p-2 text-pretty text-sm">
                <div>
                    <span className="font-semibold">{comment?.authorDisplayName}</span>
                    <span className="ml-2">
                        {timeAgo(comment?.publishedAt)}
                    </span>
                </div>
                <div className="py-2">
                    {comment?.textOriginal?.split('\n').map((text, index) =>
                        <p key={text}>
                            {text}
                        </p>)}
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="w-6 h-4 mr-2"></FontAwesomeIcon>
                    {comment?.likeCount? <span className="mr-2">{comment?.likeCount}</span> : null }
                </div>
                <div>
                </div>
            </div>
            <div className="ml-6" onClick={() => setShowReplies(prev => !prev)}>
                {!showReplies && comment?.replies ?
                    <span className="text-sm font-bold text-blue-600">
                        <FontAwesomeIcon className="mr-2 font-bold"
                            icon={faArrowDown}></FontAwesomeIcon>
                        {`${comment?.replies?.length} replies`}
                    </span>
                    : null
                }
                {
                    showReplies ?
                        comment?.replies?.map(comment => tranformRepliesToCommentInput(comment)).map(comment => <Comment comment={comment} profileImageClass="w-6 h-6 rounded-full"></Comment>)
                        : null
                }
            </div>
            </div>
        </div>
    )
}

export default Comment
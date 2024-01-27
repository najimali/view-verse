import Comment from "./Comment"
const transformToCommentInput = (comment) => {
    return {
        authorProfileImageUrl: comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
        authorDisplayName: comment?.snippet?.topLevelComment?.snippet?.authorDisplayName,
        textOriginal: comment?.snippet?.topLevelComment?.snippet?.textOriginal,
        likeCount: comment?.snippet?.topLevelComment?.snippet?.likeCount,
        publishedAt: comment?.snippet?.topLevelComment?.snippet?.publishedAt,
        replies: comment?.replies?.comments
    }
}
const CommentList = ({ comments }) => {
    if (!comments?.length) return
    return (
        <div className="flex flex-col">
            {
                comments?.map(comment => transformToCommentInput(comment))
                    ?.map(comment => <Comment comment={comment} profileImageClass="w-10 h-10 rounded-full"></Comment>)
            }
        </div>)
}

export default CommentList
import CommentList from "./CommentList"

const CommentsContainer = ({ data }) => {
  return (
    <div className="flex items-center py-2 my-2 bg-white-100 w-9/12 ">
      <CommentList comments={data}></CommentList>
    </div>
  )
}
export default CommentsContainer
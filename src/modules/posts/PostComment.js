import { useSelector } from "react-redux";
import { selectAllComments } from "../../app/helpers/commentsSlice";
import CommentsItem from "../comments/CommentsItem";
import CommentsCount from "../comments/CommentsCount";

export default function PostComment({ postId }) {
  const comments = useSelector(selectAllComments);
  const items = comments?.filter((comment) => comment.postId === postId);
  return (
    <>
      <div>
        <CommentsCount items={items} />
        <CommentsItem comments={items} />
      </div>
    </>
  );
}

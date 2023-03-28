import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../../app/helpers/usersSlice";

export default function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);

  const author = users?.find((user) => user.id === userId);
  return (
    <span>
      Posted by{" "}
      <i>
        <Link
          to={`/posts/author/${userId}`}
          className="text-white text-decoration-none"
        >
          {" "}
          {author ? author.name : "Unknown author"}
        </Link>{" "}
      </i>
    </span>
  );
}

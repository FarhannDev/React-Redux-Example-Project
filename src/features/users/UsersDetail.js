import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectAllPosts, selectPostByUser } from "../posts/postSlice";
import { Link, useParams } from "react-router-dom";

export default function UsersDetail() {
  const { userId } = useParams();
  const user = useSelector((state) => {
    selectUserById(state, Number(userId));
  });

  const userPosts = useSelector((state) =>
    selectPostByUser(state, Number(userId))
  );

  console.log({ isAuthor: { ...userPosts } });

  return <></>;
}

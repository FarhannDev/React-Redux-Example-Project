export default function CommentsItem({ comments }) {
  const orderedComments = comments.slice().sort();

  return (
    <>
      {comments.length ? (
        <ul style={{ listStyle: "none", padding: "0", marginTop: "12px" }}>
          {orderedComments?.map((item, index) => (
            <li key={index}>
              <div className="mb-3">
                <span>
                  by <i>{item.name}</i> &nbsp;{" "}
                </span>
              </div>
              <div className="mb-3">{`${item.body.substring(0, 250)}...`}</div>

              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-white text-capitalize mb-3 pt-3">
            No comments yet
          </div>
        </div>
      )}
    </>
  );
}

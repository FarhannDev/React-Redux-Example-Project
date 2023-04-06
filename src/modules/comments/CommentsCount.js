export default function CommentsCount({ items }) {
  return (
    <>
      <h3 className="mb-3">Comments ({items ? items.length : 0})</h3>
      <hr />
    </>
  );
}

import { parseISO, formatDistanceToNow } from "date-fns";

export default function PostTimeAgo({ timestamp }) {
  let timeAgo;

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <div className="mb-3">
      <span title={timestamp}>
        <i>{timeAgo}</i>
      </span>
    </div>
  );
}

import { IComment } from "@/types/comment.type";
import { Avatar } from "@nextui-org/avatar";
import { formatDistanceToNow } from "date-fns"; // Import date-fns format
import Link from "next/link";

interface IProps extends IComment {}

const CommentCard = ({ user, content, createdAt }: IProps) => {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  return (
    <div className="space-y-4 border border-default/50 p-4 rounded-lg">
      <Link href={`/users/@${user?.username}`} className="flex space-x-4">
        <Avatar
          className="size-12 object-cover"
          radius="full"
          src={user.profilePicture}
          name={user.fullName}
        />
        <div className="flex flex-col items-start">
          <h3 className="font-medium">{user.fullName}</h3>
          <span className="text-default-500 text-xs">{timeAgo}</span>
        </div>
      </Link>

      <p className="text-default-500 text-base">{content}</p>
    </div>
  );
};

export default CommentCard;

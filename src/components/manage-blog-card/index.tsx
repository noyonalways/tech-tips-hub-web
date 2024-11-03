import { IPost } from "@/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { FiEdit} from "react-icons/fi";
import { parseHtmlContent } from "@/utils";
import { UserDeleteBlogModal } from "../modals";


interface IProps extends IPost {}

const ManageBlogCard = ({
  author,
  title,
  content,
  coverImage,
  createdAt,
  isPremium,
  category,
  slug,
  _id,
}: IProps) => {
  const parsedContent = parseHtmlContent(content);

  return (
    <div className="border border-gray-200 shadow-sm p-6 rounded-xl w-full hover:shadow-md transition-shadow space-y-4">
      {/* Author Details and Premium Badge */}
      <div className="flex justify-between items-end">
        <Link
          href={`/users/@${author?.username}`}
          className="flex space-x-4 items-center"
        >
          <Avatar
            className="size-12 object-cover"
            radius="full"
            src={author?.profilePicture}
            name={author.fullName}
            isBordered
          />
          <div>
            <h3 className="text-base font-medium">
              {author?.fullName}
              {author?.isPremiumUser && (
                <span
                  title="Premium User"
                  className="ml-1 inline-block bg-slate-200 px-2 rounded-md text-sm dark:text-white dark:bg-primary/60"
                >
                  Pro
                </span>
              )}
            </h3>
            <span className="text-xs text-gray-500">
              @{author.username} - {new Date(createdAt)?.toDateString()}
            </span>
          </div>
        </Link>
        {isPremium && (
          <span className="bg-primary-100 text-xs px-3 py-1 rounded-full text-primary dark:text-white">
            Premium
          </span>
        )}
      </div>

      {/* Title and Cover Image */}
      <Link
        href={`/blogs/${slug}`}
        className="flex flex-col-reverse lg:flex-row lg:items-start lg:space-x-4"
      >
        <div className="lg:flex-1 space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">
            {parsedContent.length > 120
              ? parsedContent.substring(0, 120) + "..."
              : parsedContent}
          </p>
        </div>
        <div className="w-full lg:w-1/3 mb-3 lg:mb-0 rounded-xl overflow-hidden">
          <Image
            className="w-full"
            src={coverImage}
            alt={`${title}-cover-image`}
          />
        </div>
      </Link>

      {/* Update and Delete Buttons */}
      <div className="flex justify-between items-center">
        <Button size="sm" radius="full" variant="flat">{category.name}</Button>
        <div className="flex items-center justify-end space-x-2">
        <UserDeleteBlogModal />
        <Button
          size="sm"
          variant="light"
          startContent={<FiEdit className="text-lg text-gray-600" />}
        >
          Update
        </Button>
      </div>
      </div>
    </div>
  );
};

export default ManageBlogCard;

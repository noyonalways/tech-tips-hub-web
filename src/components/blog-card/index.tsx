import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { AiOutlineComment } from "react-icons/ai";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi2";

interface IProps {}

const BlogCard: React.FC<IProps> = () => {
  return (
    <div className="border border-default/50 p-6 rounded-xl space-y-4 w-full">
      <div className="flex justify-between items-end">
        <div className="flex space-x-4">
          <Image
            width={48}
            height={48}
            radius="full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700995925084/zr_JJq4Wl.jpg?w=240&h=240&fit=crop&crop=faces&auto=compress,format&format=webp"
          />
          <div>
            <h3 className="text-sm font-medium">Noyon Rahman</h3>
            <span className="text-xs">@noyonalways - Oct 10, 2024</span>
          </div>
        </div>
        <span className="bg-primary-100 text-xs px-3 py-1 rounded-full text-primary">
          Featured
        </span>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:space-x-4">
        <div className="lg:flex-1 space-y-1">
          <h1 className="text-2xl font-bold">
            Type vs Interface in TypeScript
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            ipsam molestias est dolorem debitis placeat ipsum illo, deserunt
            consequatur sit impedit repudiandae omnis. Sunt, quidem incidunt in
            ut ex provident?
          </p>
        </div>
        <div className="basis-full lg:basis-[28%] mb-3 lg:mb-0 rounded-xl">
          <Image
            className="w-full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1715090845019/d893cf0f-fe29-4b2d-88cd-f750df18c4fe.png?w=800&h=420&fit=crop&crop=entropy&auto=compress,format&format=webp"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-1 lg:space-x-4">
          <div className="flex space-x-2 items-center">
            <Button
              className="px-0 min-w-8"
              size="sm"
              radius="full"
              variant="light"
            >
              <BiDownvote className="text-lg" />
            </Button>
            <span className="text-base">123</span>
            <Button
              className="px-0 min-w-8"
              size="sm"
              radius="full"
              variant="light"
            >
              <BiUpvote className="text-lg" />
            </Button>
          </div>

          <Button
            size="sm"
            variant="light"
            startContent={<AiOutlineComment className="text-lg" />}
          >
            Comments
          </Button>
          <Button
            size="sm"
            variant="light"
            startContent={<HiOutlineEye className="text-lg" />}
          >
            30 Views
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BlogCard;

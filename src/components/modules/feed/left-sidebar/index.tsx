import { Button } from "@nextui-org/button";
import { FeedButtonsForSideBar } from "../feed-buttons";
import Link from "next/link";
import { IoDiamondOutline } from "react-icons/io5";

interface IProps {}

const LeftSideBar = ({}: IProps) => {
  return (
    <div className="hidden lg:flex basis-[18%] space-y-6 sticky top-16  lg:p-4 lg:pt-2 border-r border-default/50">
      <div className="flex flex-col h-[calc(100vh-90px)]">
        <div className="space-y-2 flex-1">
          <h3>Feed</h3>
          <div className="flex flex-col space-y-2">
            <FeedButtonsForSideBar />
          </div>
        </div>

        <div className="p-4 border border-default/50 rounded-xl">
          <h3 className="font-semibold">Upgrade to Premium</h3>
          <p className="mb-2">
            Unlock premium features designed to enhance your writing journey.
          </p>
          <Button
            size="sm"
            href="/subscriptions"
            as={Link}
            startContent={<IoDiamondOutline />}
            radius="sm"
            color="primary"
          >
            Go Premium
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
import AdBanner from "@/components/adsense/ad-banner";
import { FeedButtonsForSideBar } from "../feed-buttons";
import SubscriptionsStatus from "../subscriptions-status";

interface IProps {}

const LeftSideBar = ({}: IProps) => {
  return (
    <div className="hidden lg:flex xl:basis-[22%] 2xl:basis-[18%] space-y-6 sticky top-16  lg:p-4 lg:pt-2 border-r border-default/50">
      <div className="flex flex-col h-[calc(100vh-90px)] w-full">
        <div className="space-y-2 lg:flex-1">
          <h3>Feed</h3>
          <div className="flex flex-col space-y-2">
            <FeedButtonsForSideBar />
          </div>
        </div>

        <SubscriptionsStatus />
        {/* <div>
            <AdBanner
              dataAdFormat="auto"
              dataAdSlot="9749465109"
              dataFullWidthResponsive={true}
            />
          </div> */}
      </div>
    </div>
  );
};

export default LeftSideBar;

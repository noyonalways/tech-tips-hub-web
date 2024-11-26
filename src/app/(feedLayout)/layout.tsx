import {
  FeedButtonsForSideBar,
  FeedButtonsForSmallDevice,
} from "@/components/modules/feed/feed-buttons";
import LeftSideBar from "@/components/modules/feed/left-sidebar";
import RightSideBar from "@/components/modules/feed/right-sidebar";
import { Navbar } from "@/components/shared/navbar";

interface IProps {
  children: React.ReactNode;
}

const FeedLayout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <section>
        <div className="flex flex-col lg:flex-row lg:justify-between items-start space-x-4 w-full">
          {/* Left side bar */}
          <LeftSideBar />

          {/* Main content */}
          <div className="basis-[40%] py-4">
            <div className="flex items-center space-x-4 mb-4 lg:hidden">
              <FeedButtonsForSmallDevice />
            </div>
            {children}
          </div>

          {/* Right side bar */}
          <RightSideBar />
        </div>
      </section>
    </>
  );
};

export default FeedLayout;

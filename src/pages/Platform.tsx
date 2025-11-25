import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { MainFeed } from "@/components/platform/MainFeed";
import { RightSidebar } from "@/components/platform/RightSidebar";

const Platform = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="flex max-w-[1920px] mx-auto">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Platform;

import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { MainFeed } from "@/components/platform/MainFeed";
import { RightSidebar } from "@/components/platform/RightSidebar";

const Platform = () => {
  return (
    <div className="min-h-screen bg-dark-bg flex justify-center">
      <div className="flex w-full max-w-[1600px]">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Platform;

import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { MainFeed } from "@/components/platform/MainFeed";
import { RightSidebar } from "@/components/platform/RightSidebar";
import { NavBar } from "@/components/NavBar";

const Platform = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <NavBar />
      <div className="flex max-w-[1920px] mx-auto pt-20">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Platform;

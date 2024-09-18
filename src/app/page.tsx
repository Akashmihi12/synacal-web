import Image from "next/image";
import Header from "@/components/common/header/Header";
import HeadNotice from "@/components/HeadNotice";
import TopServices from "@/components/topServices/TopServices";
import ProductHeader from "@/components/product/ProductHeader";
import DocumentAssistance from "@/components/document_assistance/DocumentAssistance";
import SponsorGrid from "@/components/sponsers/SponsorGrid";
import ProjectGrid from "@/components/projectsDone/ProjectGrid";
import FeedBackRow from "@/components/feedback/feedbackrow";
import LatestResearch from "@/components/research/LatestResearch";
import Started_bar from "@/components/getstarted/Started_bar";
import QandABlock from "@/components/q_and_a/QandABlock";

export default function ClientPage() {
  return (
    <main>
      <div className="mt-[106px] w-full bg-background-color">
        <HeadNotice
          text1="Tech boosts"
          specialText="biz growth."
          text2="We’ve got you Covered."
          description="Embracing technology is crucial for the growth of your business, and our cutting-edge solutions empower you to thrive in the ever-evolving digital landscape."
          button_text="Let’s Innovate Together"
        />
      </div>
      <div className="mt-[98px] w-full bg-background-color">
        <TopServices />
      </div>
      <div className="mt-[139.29px]">
        <ProductHeader />
      </div>
      <div className="mt-[106.71px]">
        <DocumentAssistance />
      </div>
      <div className="mt-[125.29px]">
        <SponsorGrid />
      </div>
      <div className="mt-[120px]">
        <ProjectGrid />
      </div>
      <div className="mt-[199px]">
        <FeedBackRow />
      </div>
      <div className="mt-[68px]">
        <LatestResearch />
      </div>
      <div className="mt-[154px]">
        <Started_bar />
      </div>
      <div className="mt-[134px]">
        <QandABlock />
      </div>

      <div className="h-[40px] w-full bg-background-color"></div>
    </main>
  );
}

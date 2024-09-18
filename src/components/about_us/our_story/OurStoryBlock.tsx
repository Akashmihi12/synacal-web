import React from "react";
type OurStoryDataBlockProps = {
    backgroundText?: string;
    date: string;
    content: string;
    imageUrl: string;
};
function OurStoryDataBlock({
    backgroundText,
    date,
    content,
    imageUrl,
}: OurStoryDataBlockProps) {
    const url = "url(" + imageUrl + ")";
    return (
        <div className="w-full h-full  grid grid-rows-[54%,48%] relative rounded-2xl">
            <div className="w-full h-full  relative rounded-2xl">
                <div
                    style={{
                        backgroundImage: `url('${imageUrl}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%",
                    }}
                    className="relative rounded-2xl"
                >
                    <div className="w-full h-full flex justify-end p-[12px] items-end ">
                        <span className="text-[30px] font-medium leading-[40px] overflow-hidden text-ellipsis">
                            {backgroundText}
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-full  flex items-end">
                <div className="w-full h-full grid grid-rows-[20%,80%] overflow-hidden">
                    <div className="w-full h-full ">
                        <span className="text-[24px] font-[600px] leading-[32px] text-[#31323E] overflow-hidden text-ellipsis whitespace-nowrap">
                            {date}
                        </span>
                    </div>
                    <div className="w-full h-full ">
                        <span className="text-[20px] font-[400px] leading-[32px] text-[#31323E] overflow-hidden text-ellipsis">
                            {content}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStoryDataBlock;

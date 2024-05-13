import Link from "next/link";
import Page2 from "../pages/page2";

const GroupComponent = () => {
  return (
    <footer className="self-stretch shadow-[0px_-6px_12px_rgba(30,_30,_30,_0.25)] bg-gray-200 flex flex-row items-start justify-start pt-1.5 px-[30px] pb-[15px] box-border max-w-full text-center text-3xs text-silver-200 font-dm-sans">
      <div className="h-[70px] w-[360px] relative shadow-[0px_-6px_12px_rgba(30,_30,_30,_0.25)] bg-gray-200 hidden max-w-full" />
      <div className="flex-1 [filter:drop-shadow(0px_2px_8px_rgba(31,_31,_31,_0.25))] flex flex-col items-end justify-start gap-[2px] z-[1]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-10 w-10 relative min-h-[40px]"
            loading="lazy"
            alt=""
            src="/group-125.svg"
          />
          <img
            className="h-10 w-10 relative min-h-[40px]"
            loading="lazy"
            alt=""
            src="/group-123.svg"
          />
          <img
            className="h-10 w-10 relative min-h-[40px]"
            loading="lazy"
            alt=""
            src="/group-7899.svg"
          />
          <img
            className="h-10 w-10 relative min-h-[40px]"
            loading="lazy"
            alt=""
            src="/group-7901.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5.5px] pl-[7px]">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[7px] text-tomato-100 inline-block min-w-[26px]">
              Page1
            </div>
            <Link href="../pages/page2">
            <div className="relative leading-[7px] inline-block min-w-[28px]">
              Page2
            </div>
            </Link>
            <div className="relative leading-[7px] inline-block min-w-[28px]">
              Page3
            </div>
            <div className="relative leading-[7px] inline-block min-w-[29px]">
              Page4
            </div>
          </div>
        </div>
      </div>
      <Page2/>
    </footer>
  );
};

export default GroupComponent;

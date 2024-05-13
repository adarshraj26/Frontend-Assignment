import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import GroupComponent from "../components/group-component";

const Frame = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-[82px] box-border gap-[24px] leading-[normal] tracking-[normal] text-center text-3xs text-silver-100 font-roboto">
      <div className="w-[312px] hidden flex-row items-start justify-start gap-[7.9px]">
        <div className="h-[47.3px] flex-1 relative font-dm-sans">
          <div className="absolute top-[0px] left-[0px] rounded-[9.46px] bg-gray-100 w-full h-full" />
          <div className="absolute top-[calc(50%_-_11.85px)] left-[calc(50%_-_11.8px)] w-[23.4px] flex flex-col items-center justify-center gap-[9.5px]">
            <div className="w-[21px] h-[7px] relative leading-[18.46px] inline-block">
              Mon
            </div>
            <div className="w-[20.5px] h-2 relative text-xs leading-[18.46px] font-medium inline-block">
              11
            </div>
          </div>
        </div>
        <div className="h-[47.3px] flex-1 relative text-tomato-100 font-dm-sans">
          <div className="absolute top-[0px] left-[0px] rounded-[9.46px] bg-tomato-200 box-border w-full h-full border-[0.8px] border-solid border-tomato-100" />
          <div className="absolute top-[calc(50%_-_11.85px)] left-[calc(50%_-_11.8px)] w-[23.4px] flex flex-col items-center justify-center gap-[9.5px]">
            <div className="w-[20.5px] h-[7px] relative leading-[18.46px] inline-block">
              Tue
            </div>
            <div className="w-[20.5px] h-2 relative text-xs leading-[18.46px] font-medium inline-block">
              12
            </div>
          </div>
        </div>
        <div className="h-[47.3px] flex-1 relative text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[9.46px] bg-tomato-100 w-full h-full" />
          <div className="absolute top-[calc(50%_-_12.35px)] left-[calc(50%_-_11.8px)] w-[23.4px] flex flex-col items-center justify-center gap-[9.5px]">
            <div className="w-[20.5px] h-[7px] relative leading-[18.46px] inline-block">
              Wed
            </div>
            <div className="w-[20.5px] h-[9px] relative text-xs leading-[18.46px] font-medium inline-block">
              13
            </div>
          </div>
        </div>
        <div className="h-[47.3px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[9.46px] bg-gray-100 w-full h-full" />
          <div className="absolute top-[calc(50%_-_12.35px)] left-[calc(50%_-_11.8px)] w-[23.4px] flex flex-col items-center justify-center gap-[9.5px]">
            <div className="w-[20.5px] h-[7px] relative leading-[18.46px] inline-block">
              Thu
            </div>
            <div className="w-[20.5px] h-[9px] relative text-xs leading-[18.46px] font-medium inline-block">
              14
            </div>
          </div>
        </div>
        <div className="h-[47.3px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[9.46px] bg-gray-100 w-full h-full" />
          <div className="absolute top-[calc(50%_-_12.35px)] left-[calc(50%_-_11.8px)] w-[23.4px] flex flex-col items-center justify-center gap-[9.5px]">
            <div className="w-[20.5px] h-[7px] relative leading-[18.46px] inline-block">
              Fri
            </div>
            <div className="w-[20.5px] h-[9px] relative text-xs leading-[18.46px] font-medium inline-block">
              15
            </div>
          </div>
        </div>
        <div className="h-[47.3px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[9.46px] bg-gray-100 w-full h-full" />
          <div className="absolute top-[calc(50%_-_12.35px)] left-[calc(50%_-_11.8px)] w-[23.4px] flex flex-col items-center justify-center gap-[9.5px]">
            <div className="w-[20.5px] h-[7px] relative leading-[18.46px] inline-block">
              Sat
            </div>
            <div className="w-[20.5px] h-[9px] relative text-xs leading-[18.46px] font-medium inline-block">
              16
            </div>
          </div>
        </div>
        <div className="h-[47.3px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[9.46px] bg-gray-100 w-full h-full" />
          <div className="absolute top-[calc(50%_-_12.35px)] left-[calc(50%_-_11.8px)] w-[23.4px] flex flex-col items-center justify-center gap-[9.5px]">
            <div className="w-[20.5px] h-[7px] relative leading-[18.46px] inline-block">
              Sun
            </div>
            <div className="w-[20.5px] h-[9px] relative text-xs leading-[18.46px] font-medium inline-block">
              17
            </div>
          </div>
        </div>
      </div>
      <div className="w-[312px] h-[78px] relative hidden text-left text-sm text-white font-dm-sans">
        <div className="absolute top-[0px] left-[calc(50%_-_156px)] rounded-2xl [background:radial-gradient(50%_50%_at_50%_50%,_#d15439,_#d37560)] w-full h-full" />
        <img
          className="absolute h-[calc(100%_-_22.3px)] top-[12.6px] bottom-[9.7px] left-[17px] max-h-full w-[54.5px]"
          alt=""
          src="/icon-container.svg"
        />
        <div className="absolute top-[calc(50%_-_24px)] left-[80px] w-[209.3px] flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[17px] pl-0 gap-[8px]">
            <b className="self-stretch h-2.5 relative leading-[18.55px] capitalize inline-block whitespace-nowrap">
              Your daily goal almost done
            </b>
            <div className="h-2 relative text-xs leading-[18.55px] capitalize text-aliceblue inline-block">
              4 of 5 completed
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-center gap-[4px] text-3xs text-aliceblue">
            <div className="self-stretch h-[2.4px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[9.48px] bg-gray-300 w-full h-full" />
              <div className="absolute top-[0px] left-[0px] rounded-[9.48px] bg-white w-[158px] h-[2.4px]" />
            </div>
            <div className="h-[7px] relative capitalize font-medium inline-block">
              80%
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 text-center text-3xs text-tomato-100 font-montserrat">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
          <FrameComponent2 />
          <FrameComponent1 />
          <div className="self-stretch shadow-[0px_1.6px_17.07px_rgba(17,_21,_51,_0.18)] rounded-[38.03px] bg-tomato-100 flex flex-row items-end justify-start py-[5px] px-[4.7px] gap-[36.3px]">
            <div className="h-[50px] w-[312px] relative rounded-[38.03px] bg-tomato-100 hidden" />
            <div className="h-10 w-10 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(223.1deg,_#e1dfe3,_#faf6ff)] w-full h-full z-[2]" />
              <b className="absolute top-[17px] left-[5.3px] tracking-[0.01em] inline-block w-[30px] h-[7px] min-w-[30px] z-[3]">
                Track
              </b>
            </div>
            <div className="w-[218.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[10.4px] box-border text-sm text-white">
              <div className="self-stretch flex flex-row items-start justify-start gap-[24.6px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="self-stretch h-2.5 relative tracking-[0.01em] font-semibold inline-block shrink-0 z-[1]">
                    Swipe to track all
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start z-[2]">
                  <img
                    className="h-[18.6px] w-[18.6px] relative min-h-[19px] shrink-0 [debug_commit:1de1738]"
                    alt=""
                    src="/iconlylightoutlinearrow--right-2.svg"
                  />
                  <img
                    className="h-[18.6px] w-[18.6px] relative min-h-[19px] shrink-0 [debug_commit:1de1738] z-[1] ml-[-5.4px]"
                    alt=""
                    src="/iconlylightoutlinearrow--right-3.svg"
                  />
                  <img
                    className="h-[18.6px] w-[18.6px] relative min-h-[19px] shrink-0 [debug_commit:1de1738] z-[2] ml-[-5.4px]"
                    loading="lazy"
                    alt=""
                    src="/iconlylightoutlinearrow--right-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      <GroupComponent />
    </div>
  );
};

export default Frame;

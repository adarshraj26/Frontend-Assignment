const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base text-whitesmoke font-dm-sans">
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
          <div className="h-[11px] relative font-medium inline-block min-w-[96px]">
            Today’s Goal
          </div>
        </div>
        <img
          className="h-7 w-[36.1px] relative object-cover"
          loading="lazy"
          alt=""
          src="/zmmcpo4wyk-1-1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch rounded-xl bg-gray-100 flex flex-row items-start justify-start pt-4 px-[15px] pb-[15px] border-[1px] border-solid border-gray-100">
          <div className="h-[65px] w-[312px] relative rounded-xl bg-gray-100 box-border hidden border-[1px] border-solid border-gray-100" />
          <div className="flex-1 flex flex-row items-center justify-start gap-[12px] z-[1]">
            <div className="h-8 w-8 relative">
              <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-darkslategray w-full h-full" />
              <img
                className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_9px)] w-[18px] h-[17px] z-[1]"
                alt=""
                src="/dropdown-label.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start">
                <div className="h-[11px] relative font-medium inline-block">
                  Workout for 20 mins
                </div>
              </div>
              <div className="rounded-3xs-6 bg-mediumorchid flex flex-row items-center justify-center py-[9.6px] px-2.5">
                <img
                  className="h-[12.8px] w-[12.8px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/charmtick.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-100 flex flex-row items-start justify-start pt-4 px-3.5 pb-[15px] gap-[12px] border-[1px] border-solid border-gray-100">
          <div className="h-[65px] w-[312px] relative rounded-xl bg-gray-100 box-border hidden border-[1px] border-solid border-gray-100" />
          <div className="h-8 w-8 relative rounded-6xs-4 bg-darkslategray z-[1]">
            <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-darkslategray w-full h-full hidden" />
            <img
              className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_7px)] w-[14.9px] h-[18px] z-[1]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] z-[1]">
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <div className="h-[11px] relative font-medium inline-block">
                Read book for 15 mins
              </div>
            </div>
            <div className="h-8 rounded-3xs-6 bg-tomato-100 flex flex-row items-center justify-center py-[12.8px] px-2.5 box-border">
              <img
                className="h-[12.8px] w-[12.8px] relative overflow-hidden shrink-0"
                alt=""
                src="/charmtick.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-100 flex flex-row items-start justify-start py-[15px] px-3.5 gap-[12px] border-[1px] border-solid border-gray-100">
          <div className="h-[65px] w-[312px] relative rounded-xl bg-gray-100 box-border hidden border-[1px] border-solid border-gray-100" />
          <div className="h-8 w-8 relative rounded-6xs-4 bg-darkslategray z-[1]">
            <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-darkslategray w-full h-full hidden" />
            <img
              className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_7px)] w-[14.4px] h-[18px] z-[1]"
              alt=""
              src="/trivago.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] z-[1]">
            <input
              className="w-[87px] [border:none] [outline:none] bg-[transparent] h-[21px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border font-dm-sans font-medium text-sm text-whitesmoke"
              placeholder="30 mins walk"
              type="text"
            />
            <div className="h-8 rounded-3xs-6 bg-darkseagreen flex flex-row items-center justify-center py-[12.8px] px-2.5 box-border">
              <img
                className="h-[12.8px] w-[12.8px] relative overflow-hidden shrink-0"
                alt=""
                src="/charmtick.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-100 flex flex-row items-start justify-start pt-[17px] px-[15px] pb-4">
          <div className="h-[65px] w-[312px] relative rounded-xl bg-gray-100 hidden" />
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] z-[1]">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-8 w-8 relative"
                alt=""
                src="/group-1171275130.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
                <div className="h-[11px] relative leading-[18px] font-medium inline-block min-w-[123px]">
                  Sleep at 11 sharp
                </div>
              </div>
            </div>
            <div className="h-8 rounded-3xs-6 bg-cadetblue flex flex-row items-center justify-center py-[12.8px] px-2.5 box-border">
              <img
                className="h-[12.8px] w-[12.8px] relative overflow-hidden shrink-0"
                alt=""
                src="/charmtick.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-100 flex flex-row items-start justify-start py-[15px] px-3.5 gap-[12px] border-[1px] border-solid border-gray-100">
          <div className="h-[65px] w-[312px] relative rounded-xl bg-gray-100 box-border hidden border-[1px] border-solid border-gray-100" />
          <div className="h-8 w-8 relative rounded-6xs-4 bg-darkslategray z-[1]">
            <div className="absolute top-[0px] left-[0px] rounded-6xs-4 bg-darkslategray w-full h-full hidden" />
            <img
              className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_9px)] w-[18px] h-[18px] overflow-hidden z-[1]"
              alt=""
              src="/entypodrop.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] z-[1]">
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <div className="h-[11px] relative font-medium inline-block min-w-[114px]">
                Drink 3L water
              </div>
            </div>
            <div className="h-8 rounded-3xs-6 bg-steelblue hidden flex-row items-center justify-center py-[12.8px] px-2.5 box-border">
              <img
                className="h-[12.8px] w-[12.8px] relative overflow-hidden shrink-0"
                alt=""
                src="/charmtick.svg"
              />
            </div>
            <div className="h-8 rounded-3xs-6 bg-steelblue flex flex-row items-center justify-center py-[12.8px] px-2.5 box-border">
              <img
                className="h-[12.8px] w-[12.8px] relative overflow-hidden shrink-0"
                alt=""
                src="/charmtick.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;

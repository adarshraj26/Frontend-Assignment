const FrameComponent2 = () => {
  return (
    <div className="self-stretch h-[86px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border text-left text-sm text-aliceblue font-dm-sans">
      <div className="self-stretch flex-1 rounded-2xl [background:radial-gradient(50%_50%_at_50%_50%,_#0e77d9,_#7da7ce)] flex flex-row items-end justify-start pt-[12.6px] px-[17px] pb-[9.7px] gap-[8.5px]">
        <div className="h-[78px] w-[312px] relative rounded-2xl [background:radial-gradient(50%_50%_at_50%_50%,_#0e77d9,_#7da7ce)] hidden" />
        <div className="h-[55.7px] w-[54.5px] relative z-[1] flex items-center justify-center">
          <img
            className="h-full w-full z-[1] object-contain absolute left-[3px] top-[4px] [transform:scale(4.374)]"
            loading="lazy"
            alt=""
            src="/icon-container-1.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
          <b className="h-2.5 relative leading-[18.55px] capitalize inline-block text-white z-[1]">
            Your daily goal almost done
          </b>
          <div className="h-2 relative text-xs leading-[18.55px] capitalize inline-block min-w-[100px] z-[1]">
            4 of 5 completed
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-3xs">
            <div className="self-stretch h-[2.4px] relative rounded-[9.48px] bg-gray-300 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[9.48px] bg-gray-300 w-full h-full hidden" />
              <div className="absolute top-[0px] left-[0px] rounded-[9.48px] bg-white w-[158px] h-[2.4px] z-[1]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="h-[7px] relative capitalize font-medium inline-block min-w-[22px] z-[1]">
                80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;

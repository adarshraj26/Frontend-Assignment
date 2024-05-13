const FrameComponent = () => {
  return (
    <section className="self-stretch h-[213px] flex flex-row items-start justify-start py-0 px-6 box-border text-center text-5xs text-whitesmoke font-dm-sans">
      <div className="self-stretch flex-1 rounded-xl bg-gray-100 flex flex-row items-start justify-start py-[22px] px-3.5 gap-[10px]">
        <div className="h-[213px] w-[312px] relative rounded-xl bg-gray-100 hidden" />
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <nav className="m-0 flex flex-col items-start justify-start gap-[16px] text-left text-3xs text-silver-100 font-poppins">
            <div className="relative inline-block min-w-[24px] z-[1]">100%</div>
            <div className="relative inline-block min-w-[21px] z-[1]">80%</div>
            <div className="relative inline-block min-w-[21px] z-[1]">60%</div>
            <div className="relative inline-block min-w-[21px] z-[1]">40%</div>
            <div className="relative inline-block min-w-[20px] z-[1]">20%</div>
          </nav>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex-1 flex flex-row items-end justify-start py-0 px-1 gap-[18.6px] z-[1]">
            <div className="h-[145px] flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-start justify-start py-0 px-0.5">
                <div className="relative leading-[6px] font-medium inline-block min-w-[10px]">
                  92
                </div>
              </div>
              <div className="w-3.5 flex-1 relative rounded-sm bg-steelblue" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
              <div className="flex flex-row items-start justify-start gap-[20.5px]">
                <div className="relative leading-[6px] font-medium inline-block min-w-[14px]">
                  100
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="h-1.5 relative leading-[10.4px] font-medium inline-block min-w-[10px]">
                    98
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-end justify-start gap-[18.5px]">
                <div className="self-stretch w-3.5 relative rounded-sm bg-steelblue" />
                <div className="self-stretch w-3.5 relative rounded-sm bg-steelblue" />
              </div>
            </div>
            <div className="h-[144.4px] flex-1 flex flex-col items-start justify-start gap-[3.4px]">
              <div className="w-3.5 flex flex-row items-start justify-start py-0 pr-px pl-[1.5px] box-border">
                <div className="relative leading-[6px] font-medium inline-block min-w-[11px]">
                  90
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[18.6px]">
                <div className="self-stretch w-3.5 relative rounded-sm bg-steelblue" />
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start py-0 px-0.5">
                    <div className="relative leading-[6px] font-medium inline-block min-w-[10px]">
                      84
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[18.6px]">
                    <div className="h-[125px] w-3.5 relative rounded-sm bg-steelblue" />
                    <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[2.3px]">
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[1.5px] pl-0.5">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                          <div className="relative leading-[6px] font-medium inline-block min-w-[10px]">
                            82
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
                            <div className="h-1.5 relative leading-[10.4px] font-medium inline-block min-w-[11px]">
                              80
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
                            <div className="h-1.5 relative leading-[10.4px] font-medium inline-block min-w-[11px]">
                              80
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[18.6px]">
                        <div className="self-stretch w-3.5 relative rounded-sm bg-steelblue" />
                        <div className="self-stretch w-3.5 relative rounded-sm bg-steelblue" />
                        <div className="self-stretch w-3.5 relative rounded-sm bg-steelblue" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[1] text-3xs text-silver-100">
            <div className="h-[7px] relative inline-block min-w-[21px]">
              28/4
            </div>
            <div className="h-[7px] relative inline-block min-w-[22px]">
              30/4
            </div>
            <div className="h-[7px] relative inline-block min-w-[23px]">
              02/5
            </div>
            <div className="h-[7px] relative inline-block min-w-[23px]">
              05/5
            </div>
            <div className="h-[7px] relative inline-block min-w-[16px]">
              11/5
            </div>
            <div className="h-[7px] relative inline-block min-w-[19px]">
              15/5
            </div>
            <div className="h-[7px] relative inline-block min-w-[19px]">
              15/5
            </div>
            <div className="h-[7px] relative font-poppins inline-block min-w-[23px]">
              22/5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;

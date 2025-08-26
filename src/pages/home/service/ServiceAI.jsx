import React from "react";
import bannerImage from "../../../assets/image/service-banner-image.png";
import aiChip from "../../../assets/image/ai-chip.png";
import aiRobot from "../../../assets/image/ai-robot.png";
import bookIcon from "../../../assets/icon/icons_book-check-fill.png";

const ServiceAI = (props) => {
  return (
    <div className="text-white">
      {/* Banner */}
      <section id="banner">
        <img src={bannerImage} alt="banner-service-image" />
      </section>

      {/* Main content */}
      <section id="main" className="text-black">
        {/* Title */}
        <div className="min-h-[460px] gap-[32px] flex flex-col items-center justify-center">
          <h2 className="text-[#0D71D3] lg:leading-[140%] lg:text-[48px] font-extrabold">
            Artificial Intelligence Service
          </h2>
          <div className="text-cetner">
            Unlock real-time intelligence with our edge AI platforms. From
            low-latency inference to on-device large
            <br /> language models, we power vision, NLP, and automation across
            industries. Our full-stack toolchains
            <br /> simplify AIGC and intelligent agent development, accelerating
            your AI-driven business transformation.
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col">
          {/* Card 1 */}
          <div
            style={{ paddingInline: "160px", paddingBlock: "140px" }}
            className="flex h-[700px] bg-[#F7F9FD] gap-[80px] items-center"
          >
            {/* Card image */}
            <img
              src={aiChip}
              className="w-[760px] h-[420px] rounded-[20px]"
              alt="Ai-chip-image-on-top-left-card-section"
            />

            {/* Card image description */}
            <div className="flex flex-col gap-[36px] w-[760px]">
              <h3 className="font-extrabold text-[34px] leading-[150%] tracking-[-2.1%]">
                AI Technology & Services Overview
              </h3>
              <div className="font-normal leading-[150%] tracking-[-2.1%] text-[18px]">
                We offer a comprehensive suite of AI-driven services and
                solutions tailored to meet diverse
                <br /> industry needs. Our offerings range from engineering
                support to advanced generative AI
                <br /> applications and model customization.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{ paddingInline: "160px", paddingBlock: "140px" }}
            className="flex h-[700px] gap-[80px] items-center"
          >
            {/* Card image description */}
            <div className="flex flex-col gap-[36px] w-[760px]">
              <div className="flex flex-col gap-[36px]">
                <h3 className="font-extrabold text-[34px] leading-[150%] tracking-[-2.1%]">
                  AI Engineering Services
                </h3>

                <div className="font-normal leading-[150%] tracking-[-2.1%] text-[18px]">
                  We provide engineering services across smart devices,
                  automotive, and enterprise domains, helping clients seamlessly
                  integrate AI technologies into their products and systems.
                </div>

                <div
                  style={{ paddingBlock: "40px", paddingInline: "32px" }}
                  className="h-[180px] bg-[#F7F9FD] rounded-[12px]"
                >
                  <div className="flex gap-[8px]">
                    <img src={bookIcon} alt="checked-book-icon-on-the-left" />
                    <span className="font-normal text-[16px] tracking-[-2.1%] text-[18px]">
                      Smart Device: AI integration for IoT and embedded systems
                    </span>
                  </div>

                  <div className="flex gap-[8px]">
                    <img src={bookIcon} alt="checked-book-icon-on-the-left" />
                    <span className="font-normal text-[16px] tracking-[-2.1%] text-[18px]">
                      Automotive: AI solutions for in-vehicle systems and
                      autonomous driving
                    </span>
                  </div>

                  <div className="flex gap-[8px]">
                    <img src={bookIcon} alt="checked-book-icon-on-the-left" />
                    <span className="font-normal text-[16px] tracking-[-2.1%] text-[18px]">
                      Enterprise: AI-powered enterprise automation and system
                      optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card image */}
            <img
              src={aiRobot}
              className="w-[760px] h-[420px] rounded-[20px]"
              alt="Ai-chip-image-on-top-left-card-section"
            />
          </div>
          <div className="h-[700px] #F7F9FD">3</div>
          <div className="h-[700px]">4</div>
          <div className="h-[700px] #F7F9FD">5</div>
          <div className="h-[700px]">6</div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAI;

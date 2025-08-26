import bg from "../../assets/image/main_top.png"; // 본인 배경이미지 경로
import right_arrow from "../../assets/icon/right_arrow.svg"

export default function Hero() {
  return (
    <section className="relative -mt-20 w-full min-h-screen overflow-hidden bg-black">
      {/* 배경 이미지 */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 오버레이: 어둡게 + 우측 블루 틴트 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-cyan-600/10" />
      {/* 살짝 블러/글로우 느낌을 내고 싶으면 아래 추가 */}
      {/* <div className="absolute inset-0 backdrop-blur-[1px]" /> */}

      {/* 컨텐츠 */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl">
            Sapphire Stream Technology
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Transforming the Future with AI
          </p>
        </div>

        {/* 좌하단 페이지 인디케이터 */}
        <div className="absolute bottom-10 left-4 flex items-center gap-6 text-white/70">
          <div className="flex items-center gap-3">
            <span className="tracking-widest">01</span>
            <div className="h-px w-16 bg-white/40" />
            <span className="tracking-widest">03</span>
          </div>
          <div className="flex items-center gap-[13px]">
            <button className="rounded-full hover:bg-white/1  `0">
              <img
                src={right_arrow}
                alt="right_arrow"
                className="w-[6px] h-[12px] rotate-180"
              />
            </button>
            <button className="rounded-full hover:bg-white/10">
              <img
                src={right_arrow}
                alt="right_arrow"
                className="w-[6px] h-[12px]"
              />
            </button>
          </div>
        </div>

        {/* 우측 “SCROLL” 인디케이터 */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[12px] tracking-[0.3em] text-white/60">
          SCROLL Down
        </div>
      </div>
    </section>
  );
}

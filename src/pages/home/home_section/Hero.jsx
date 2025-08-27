import { useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../../assets/image/main_top.png";
import bg2 from "../../../assets/image/main_top.png";
import bg3 from "../../../assets/image/main_top.png";
import right_arrow from "../../../assets/icon/right_arrow.svg";

export default function Hero() {
  const slides = useMemo(() => ([
    {
      title: "Sapphire Stream Technology",
      subtitle: "Transforming the Future with AI",
      bg: bg1,
    },
    {
      title: "Stream Technology",
      subtitle: "Accelerate Intelligence in the Cloud",
      bg: bg2,
    },
    {
      title: "Sapphire AI Platform",
      subtitle: "Build • Scale • Operate",
      bg: bg3,
    },
  ]), []);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // 슬라이드 전환 애니메이션(좌우로 들어오고 나가기)
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.4 } }),
  };

  const curr = slides[index];

  return (
    <section
      // className="relative w-full min-h-[100svh] px-[20px] overflow-hidden"
      className="relative w-full h-[960px] px-[20px] overflow-hidden"
      aria-label="Sapphire Stream Hero"
    >
      {/* 배경: 슬라이드별로 교체되게 하고, 부드럽게 페이드 */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={curr.bg}
            src={curr.bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{
              opacity: 1,
              // 이동량도 살짝 키워서 체감 속도↑
              scale: [1.02, 1.08, 1.02],
              x: [0, 14, 0],
              y: [0, -14, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              // opacity 페이드 인은 그대로
              opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              // 루프 주기를 12s → 5s 로 ↓ (더 빠르게)
              duration: 12,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{ willChange: "transform" }}
            draggable={false}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-cyan-600/10" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 mx-auto flex min-h-[80svh] 2xl:max-w-[1600px] max-w-[1400px] flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={curr.title}                 // 콘텐츠 교체 포인트
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-7xl"
          >
            <h1 className="w-full text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl lg:text-[80px]">
              {curr.title}
            </h1>
            <p className="mt-12 text-base text-white/85 md:text-xl lg:text-[44px]">
              {curr.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* 좌하단 페이지 인디케이터 + 좌우 버튼 */}
        <div className="pointer-events-auto absolute bottom-6 left-4 flex items-center gap-6 text-white/80">
          <div className="flex items-center gap-3 text-xs tracking-widest md:text-sm">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="h-px w-16 bg-white/40" />
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="rounded-full p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="이전"
            >
              <img src={right_arrow} alt="" className="h-[12px] w-[6px] -rotate-180" />
            </button>
            <button
              onClick={next}
              className="rounded-full p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="다음"
            >
              <img src={right_arrow} alt="" className="h-[12px] w-[6px]" />
            </button>
          </div>
        </div>
      </div>

      {/* 스크롤 힌트는 그대로 유지(선택) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="pointer-events-none absolute right-0 bottom-[90px] rotate-90 text-[10px] tracking-[0.35em] text-white/70 md:text-[12px]"
        aria-hidden
      >
        <span className="inline-flex items-center gap-[60px] rotate-90">
          SCROLL DOWN
          <span className="relative inline-block h-[100px] w-[1px] overflow-hidden bg-white/30 align-middle -rotate-90">
            <span className="absolute inset-0 animate-[scrollbar_1.6s_ease-in-out_infinite] bg-white/80" />
          </span>
        </span>
      </motion.div>
    </section>
  );
}

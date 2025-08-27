// HowWeWorkAndGlobal.jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import GlobalMap from "../../../assets/image/global_map.svg";

/** 기존 GrayCard 크기/클래스 유지 */
function GrayCard({ className = "" }) {
    return (
        <div className={`w-[282px] h-[558px] rounded-2xl bg-neutral-200/80 dark:bg-white/10 ${className}`} />
    );
}

/** 이미지가 있으면 보여주고, 없으면 GrayCard 유지 */
function CardBox({ img, className = "" }) {
    if (!img) return <GrayCard className={className} />;
    return (
        <div className={`overflow-hidden rounded-2xl ${className}`}>
            <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
    );
}

/** 하단 막대형 페이지네이터 (클릭 가능) — 위치/마진 유지 */
function BulletPager({ total = 5, active = 0, onChange }) {
    return (
        <div className="mt-6 flex items-center gap-4">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onChange?.(i)}
                    className={[
                        "h-[3px] rounded-full transition-all",
                        i === active ? "w-16 bg-sky-500" : "w-10 bg-white/25 hover:bg-white/40"
                    ].join(" ")}
                    aria-label={`슬라이드 ${i + 1}로 이동`}
                />
            ))}
        </div>
    );
}

function MapMarker({ x, y, label, color = "bg-sky-500" }) {
    return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
            <div className={`relative h-3 w-3 rounded-full ring-4 ring-white/20 ${color}`} />
            {label && (
                <div className="mt-2 rounded-full bg-white/10 px-2 py-[2px] text-[10px] font-semibold text-white">
                    {label}
                </div>
            )}
        </div>
    );
}

export default function GlobalPresence() {
    // 🔹 카드+설명 쌍 (이미지는 있으면 경로 연결)
    const items = useMemo(
        () => [
            {
                title: "Plan & Research",
                desc: "We clarify goals and constraints, explore solution space, and define a lean plan aligned with measurable outcomes.",
                img: null,
            },
            {
                title: "Design & Prototype",
                desc: "Rapidly iterate on flows and prototypes to validate usability and value before heavy engineering investment.",
                img: null,
            },
            {
                title: "Build & Integrate",
                desc: "Implement resilient services, automate pipelines, and integrate systems with observability from day one.",
                img: null,
            },
            {
                title: "Launch & Improve",
                desc: "Ship safely, measure real usage, and keep improving with experiments and SLO-driven operations.",
                img: null,
            },
        ],
        []
    );

    const [active, setActive] = useState(0);
    const current = items[active];

    // 가벼운 전환(레이아웃 변경 없이 내용만 교체)
    const fade = {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
        exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
    };

    return (
        <section className="w-full bg-[#081326] text-white">
            {/* 상단: How We Work */}
            <div className="mx-auto 2xl:max-w-[1600px] max-w-[1400px] px-5 py-16 md:py-24">
                <div className="flex gap-8">
                    {/* 좌측 큰 카드 (고정폭) */}
                    <div className="shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div key={active} {...fade}>
                                <CardBox img={current.img} className="w-[400px] h-[558px]" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* 가운데 텍스트 (내용 세로 정렬) */}
                    <div className="shrink-0 flex items-center">
                        <div className="flex flex-col gap-[40px] pb-24 md:pt-6">
                            <p className="text-sm font-semibold text-sky-300">How We Work</p>
                            <div>
                                <AnimatePresence mode="wait">
                                    <motion.h3
                                        key={`title-${active}`}
                                        {...fade}
                                        className="mt-3 text-2xl font-extrabold leading-snug md:text-[28px]"
                                    >
                                        {current.title}
                                    </motion.h3>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p key={`desc-${active}`} {...fade} className="mt-3 text-white/70">
                                        {current.desc}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <BulletPager total={items.length} active={active} onChange={setActive} />
                        </div>
                    </div>

                    {/* 우측 대기 카드 — 가로 정렬 + overflow-hidden */}
                    <div className="min-w-0 flex-1">
                        <div className="relative overflow-hidden">
                            <div className="flex flex-nowrap gap-6">
                                {items.map((it, i) =>
                                    i === active ? null : (
                                        <button
                                            key={i}
                                            onClick={() => setActive(i)}
                                            className="group text-left shrink-0"
                                            aria-label={`${it.title} 보기`}
                                        >
                                            <CardBox
                                                img={it.img}
                                                className="w-[282px] h-[558px] transition-transform group-hover:-translate-y-1"
                                            />
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 경계 라인 유지 */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* 하단: Global Presence (원래 코드 유지) */}
            <div className="relative mx-auto 2xl:max-w-[1600px] max-w-[1400px] px-5 pt-14 md:pt-20">
                <h3 className="text-3xl font-extrabold md:text-[32px]">Global Presence</h3>
                <p className="mt-2 text-sm text-white/70">
                    We, Sapphire Stream Technology are globally interconnected
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[40px]">
                    <img
                        src={GlobalMap}
                        alt=""
                        aria-hidden
                        className="pointer-events-none inset-0 w-full h-full select-none opacity-30"
                    />
                    <div className="pointer-events-none absolute inset-0">
                        <MapMarker x="26%" y="60%" />
                        <MapMarker x="31%" y="65%" />
                        <MapMarker x="52%" y="52%" />
                        <MapMarker x="56%" y="57%" />
                        <MapMarker x="62%" y="62%" />
                        <MapMarker x="78%" y="74%" />
                        <MapMarker x="82%" y="76%" />
                        <MapMarker x="86%" y="72%" />
                    </div>
                </div>
            </div>
        </section>
    );
}

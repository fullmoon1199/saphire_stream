import { useState } from "react";
import { motion } from "framer-motion";
import CornerThreeBlob from "./CornerThreeBlob";

export default function FancyIndustryCard({ title, img, desc, dentBg = "#F7FAFF" }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.article
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group relative overflow-hidden rounded-[28px] lg:max-w-[475px]"
            whileHover={{ y: -6, scale: 1.001 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
        >
            <img src={img} alt={title} className="w-full object-cover md:h-[300px] lg:h-[400px]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute left-5 top-5 z-10">
                <h3 className="text-2xl font-semibold text-white drop-shadow">{title}</h3>
            </div>

            <motion.div
                initial={false}
                animate={hovered ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 z-10 p-5"
            >
                {/* ✅ 안개 레이어 */}
                <div className="relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-b-[28px]" />

                    {/* 텍스트만 보이도록 */}
                    <div className="relative px-5 pb-6 text-sm leading-relaxed text-white/95">
                        {desc}
                    </div>
                </div>
            </motion.div>

            {/* ✅ 우상단 ‘3자’ 모양 + 파란 원, 호버 시 밖→안으로 밀고 들어옴 */}
            <CornerThreeBlob show={hovered} bgColor={dentBg} dotColor="#2F84FF" />

            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
        </motion.article>
    );
}

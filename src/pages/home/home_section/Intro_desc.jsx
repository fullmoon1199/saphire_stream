import FancyIndustryCard from "../../../layout/component/FancyIndustryCard.jsx";
import img1 from "../../../assets/image/intro_desc_layer_1.png";
import img2 from "../../../assets/image/intro_desc_layer_2.png";
import img3 from "../../../assets/image/intro_desc_layer_3.png";
import img4 from "../../../assets/image/intro_desc_layer_4.png";
import bgDots1 from "../../../assets/image/intro_group_1.svg";
import bgDots2 from "../../../assets/image/intro_group_2.svg";

export default function IntroDesc({ items = [] }) {
    const data =
        items.length > 0
            ? items
            : [
                { title: "AI", img: img1 },
                { title: "IoT", img: img2 },
                { title: "Automotive", img: img3 },
                { title: "Cloud&Telecom", img: img4 },
            ];

    return (
        <section className="relative w-full pb-[100px]  overflow-hidden">
            {/* BG #1 */}
            <img
                src={bgDots1}
                alt=""
                aria-hidden
                className="pointer-events-none absolute mt-[160px] w-full h-full select-none opacity-30 bg-gradient-to-b from-white to-[#EFF7FF]"
            />
            {/* BG #2 */}
            <img
                src={bgDots2}
                alt=""
                aria-hidden
                className="pointer-events-none absolute mt-[160px] w-full h-full select-none opacity-30 bg-gradient-to-b from-white to-[#EFF7FF]"
            />
            <div className="relative mx-auto grid 2xl:max-w-[1600px] max-w-[1400px] grid-cols-1 gap-10 px-4 py-[140px] md:grid-cols-12">
                {/* 왼쪽 텍스트 */}
                <div className="md:col-span-4">
                    <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                        Engineered
                        <br /> for Excellence
                    </h2>
                    <p className="mt-6 max-w-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur.
                        <br /> Ipsum malesuada risus non nibh.
                    </p>
                </div>

                {/* 오른쪽 카드 그리드 */}
                <div className="md:col-span-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-6 translate-y-[160px]">
                            <FancyIndustryCard
                                title={data[0].title}
                                img={data[0].img}
                                desc="Real-time AI for edge and cloud: low-latency inference, large models, and multi-modal analytics across vision, NLP, and automation."
                            />
                            <FancyIndustryCard
                                title={data[2].title}
                                img={data[2].img}
                                desc="Automotive-grade perception and control with robust, low-latency pipelines."
                            />
                        </div>
                        <div className="space-y-6 pt-6 sm:pt-0">
                            <FancyIndustryCard
                                title={data[1].title}
                                img={data[1].img}
                                desc="Connect devices and services with secure, scalable IoT data flows."
                            />
                            <FancyIndustryCard
                                title={data[3].title}
                                img={data[3].img}
                                desc="Cloud-native platforms for telecom workloads, analytics, and automation."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

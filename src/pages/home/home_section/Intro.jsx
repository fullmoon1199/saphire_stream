import { motion } from "framer-motion";
import intro from "../../../assets/image/intro.png";

export default function Intro() {
  const Container = ({ className = "", children }) => (
    <div className={`mx-auto px-4 ${className}`}>{children}</div>
  );

  return (
    <section className="w-full text-gray-900">
      <Container className="2xl:max-w-[1600px] max-w-[1400px] py-12 lg:py-24">
        {/* 상단 큰 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 lg:mb-14 text-center lg:text-left"
        >
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-5xl">
            Lorem ipsum dolor sit amet consectetur.
            <br className="hidden lg:block" />
            Habitasse sed pulvinar sed leo curabitur.
          </h2>
        </motion.div>

        {/* 본문 레이아웃: 모바일=1열, 데스크탑=그리드(5/1/6) */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-12">
          {/* 좌측 컬럼 */}
          <div className="lg:col-span-3">
            {/* 모바일에선 중앙 정렬, 데스크탑에선 sticky */}
            <div className="flex justify-center lg:block lg:sticky lg:top-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm text-gray-700 shadow-sm hover:bg-gray-50"
              >
                <span className="font-medium">About&nbsp;Sapphire Stream</span>
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden />
              </button>
            </div>
          </div>

          {/* 중앙 세로 구분선: 데스크탑만 */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="mx-auto h-full w-px bg-gray-200" />
          </div>

          {/* 우측 컬럼 */}
          <div className="lg:col-span-8 ml-auto">
            {/* 소제목 2개: 모바일 단일 컬럼, 데스크탑 2열 */}
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              <div className="text-center sm:text-left">
                <div className="font-semibold">Sapphire Stream Technology</div>
                <div className="mt-1 text-gray-500">
                  Transforming the Future with <span className="font-semibold">ASapphire</span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold">Stream Technology</div>
                <div className="mt-1 text-gray-500">Transforming the Future with AI</div>
              </div>
            </div>

            {/* 큰 이미지 카드: 모바일 꽉 채움, 데스크탑 비율 고정 */}
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="
                mt-6 sm:mt-8 
                w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm
                aspect-[16/9] lg:aspect-auto lg:max-h-[445px] lg:max-w-[995px]
              "
            >
              <img
                src={intro}
                alt="Sapphire technology preview"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

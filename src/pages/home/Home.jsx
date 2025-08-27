import Hero from "./home_section/Hero.jsx";
import Intro from "./home_section/Intro.jsx"
import IntroDesc from "./home_section/Intro_desc.jsx"
import GlobalPresence from "./home_section/Global_presence.jsx"


function Home() {
  return (
    <div className="relative -mt-[176px] w-full h-full overflow-hidden">
      <Hero />
      <Intro />
      <IntroDesc />
      <GlobalPresence />
    </div>
  );
}

export default Home;

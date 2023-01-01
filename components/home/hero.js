import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <Animation />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
            안녕하세요 갈릭마늘빵입니다!
            <br className="hidden lg:inline-block" />
            포트폴리오 페이지입니다
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href="/projects">
              <button className="btn-project">프로젝트 보러가기</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

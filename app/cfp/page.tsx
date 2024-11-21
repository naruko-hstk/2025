"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function MiniCountdown() {
  const TARGET_DATE = "2025-01-21T23:59:59"; // 可以動態設置
  const now = new Date();
  const target = new Date(TARGET_DATE);
  const difference = target.getTime() - now.getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  });

  // 客戶端倒數計時邏輯
  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const target = new Date(TARGET_DATE);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // 更新倒數時間
    }, 1000);

    return () => clearInterval(timerId); // 清除計時器
  }, [timeLeft]); // 當 timeLeft 更新時觸發

  function formatToTwoDigits(num: number): string {
    return num.toString().padStart(2, "0");
  }
  return (
    <div className="flex flex-row rounded-[11px] px-[14px] py-[8px] text-[#fff] max-[1024px]:bg-inherit max-sm:w-[80%] max-sm:justify-center max-sm:rounded-[208px] max-sm:border-2 max-sm:border-black max-sm:p-3">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key}>
          <div className="flex flex-row items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={value}
                initial={{
                  opacity: 0,
                  y: "-0.25em",
                  scaleY: 0.75,
                  filter: "blur(0.1em)",
                  transformOrigin: "top",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scaleY: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: "0.25em",
                  scaleY: 0.75,
                  filter: "blur(0.1em)",
                  transformOrigin: "bottom",
                }}
                className="text-5xl max-[1024px]:text-6xl max-sm:text-4xl max-sm:text-5xl"
              >
                {formatToTwoDigits(value)}
              </motion.span>
            </AnimatePresence>
            {key != "seconds" ? (
              <span className="px-1 text-3xl max-[1024px]:text-4xl max-sm:text-h2-mobile">
                :
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative h-[calc(100svh)] min-h-[600px] bg-black">
        <div className="hero h-[calc(100svh)] min-h-[600px]">
          {/* background image only */}
        </div>
        <div className="absolute left-1/2 top-1/2 h-[calc(100svh-64px)] min-h-[600px] -translate-x-1/2 -translate-y-1/2">
          <div
            className={`hero-content relative flex h-full items-center justify-center bg-cover bg-[left_20%_center] max-[1024px]:bg-gray max-[1024px]:bg-none lg:bg-center`}
          >
            <div className="flex w-full flex-col items-center gap-4">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row gap-3 py-5 max-[1024px]:hidden">
                  <p className="text-h3 text-[#FFFFFF]">SITCON 2025</p>
                </div>
                <div className="flex flex-row gap-3 pb-3 max-[1024px]:hidden">
                  <p className="text-8xl font-semibold text-[#FFFFFF]">
                    徵稿開始
                  </p>
                </div>
                <div className="flex flex-row gap-3 py-5 max-[1024px]:hidden">
                  <p className="text-h3 text-[#FFFFFF]">03 / 08</p>
                  <div className="text-h3 text-[#FFFFFF]">
                    <p>中央研究院人文社會科學館</p>
                  </div>
                </div>
                <p className="hidden text-h3-mobile max-[1024px]:block">
                  距離海報投稿截止還有
                </p>
                {/* <MiniCountdown /> */}
              </div>
              <div className="flex max-w-[800px] flex-col justify-center gap-5">
                <div className="flex flex-row justify-center gap-5 max-sm:grid max-sm:grid-cols-2 max-sm:px-4">
                  <Link
                    href="/cfp/poster"
                    className="w-full whitespace-nowrap text-nowrap rounded-[50px] bg-[#FFFFFF] px-8 py-1 text-center max-[1024px]:text-[18px] max-[1024px]:font-semibold max-sm:w-full max-sm:px-3 max-sm:py-2 max-sm:text-h2-mobile"
                  >
                    一般議程
                  </Link>
                  <Link
                    href="/cfp/poster"
                    className="w-full whitespace-nowrap text-nowrap rounded-[50px] bg-[#FFFFFF] px-8 py-1 text-center max-[1024px]:text-[18px] max-[1024px]:font-semibold max-sm:w-full max-sm:px-3 max-sm:py-2 max-sm:text-h2-mobile"
                  >
                    開放式議程
                  </Link>
                  <Link
                    href="/cfp/poster"
                    className="w-full whitespace-nowrap text-nowrap rounded-[50px] bg-[#FFFFFF] px-8 py-1 text-center max-[1024px]:text-[18px] max-[1024px]:font-semibold max-sm:w-full max-sm:px-3 max-sm:py-2 max-sm:text-h2-mobile"
                  >
                    靜態海報展
                  </Link>
                  <Link
                    href="#"
                    className="hidden w-auto justify-center rounded-[50px] bg-[#FFFFFF] px-8 py-1 text-center max-[1024px]:flex max-[1024px]:text-[18px] max-sm:w-full max-sm:px-3 max-sm:py-2 max-sm:text-h2-mobile"
                  >
                    加入行事曆
                  </Link>
                </div>
                <Link
                  href="/cfp/deadline.ics"
                  className="w-auto rounded-[50px] bg-[#FFFFFF] px-8 py-1 text-center max-[1024px]:hidden max-[1024px]:text-[18px] max-sm:w-full max-sm:py-2"
                >
                  把截止日期加入行事曆
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-background">
        <div className="relative max-w-[1120px] gap-9 bg-background bg-cover bg-[left_20%_center] px-10 max-[1024px]:px-6 max-sm:grid-cols-none max-sm:text-center lg:bg-center">
          <div className="flex">
            <div className="py-32">
              <div className="gap-14 sm:grid sm:grid-cols-2">
                <div>
                  <h1 className="text-h1 font-extrabold tracking-widest text-primary max-sm:text-h1-mobile max-sm:font-semibold max-sm:text-foreground">
                    關於 SITCON
                  </h1>
                  <p className="text-justify text-normal leading-8 text-foreground">
                    學生計算機年會（Students’ Information Technology
                    Conference）自 2013
                    年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
                  </p>
                </div>
                <div
                  className="h-full rounded-[32px] bg-cover bg-center bg-no-repeat p-6 max-[1024px]:rounded-none max-[1024px]:bg-contain max-[1024px]:bg-bottom max-[1024px]:p-0 max-sm:hidden"
                  style={{ backgroundImage: `url('/2025/cfp/about/1.png')` }}
                ></div>
              </div>
              <div className="gap-14 pt-8 max-sm:pt-16 sm:grid sm:grid-cols-2">
                <div>
                  <h1 className="text-h1 font-extrabold tracking-widest text-primary max-sm:text-h1-mobile max-sm:font-semibold max-sm:text-foreground">
                    參與討論
                  </h1>
                  <p className="text-justify text-normal leading-8 text-foreground">
                    SITCON
                    是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
                    SITCON 的郵件論壇並貢獻你的想法！
                    <br />
                    <br /> 若你想進一步了解過往討論的內容，也歡迎到 GitLab
                    上查看 SITCON 2024 的籌備歷程。
                  </p>
                  <div className="flex gap-6 pt-14 max-[1024px]:grid max-[1024px]:grid-cols-8 max-[1024px]:gap-5 max-sm:grid-cols-2">
                    <Link
                      href="https://groups.google.com/g/sitcon-general/"
                      className="w-[140px] rounded-[50px] bg-secondary py-3 text-center font-bold max-[1024px]:col-span-5 max-[1024px]:w-auto max-[1024px]:rounded-lg max-[1024px]:text-[18px] max-[712px]:my-auto max-[712px]:text-[14px] max-sm:col-span-1 max-sm:rounded-[72px] max-sm:text-[18px] max-sm:font-normal"
                    >
                      訂閱郵件論壇
                    </Link>
                    <Link
                      href="https://gitlab.com/sitcon-tw/2024/board"
                      className="w-[140px] rounded-[50px] bg-secondary py-3 text-center font-bold max-[1024px]:col-span-3 max-[1024px]:w-auto max-[1024px]:rounded-lg max-[1024px]:text-[18px] max-[712px]:my-auto max-[712px]:text-[14px] max-sm:col-span-1 max-sm:rounded-[72px] max-sm:text-[18px] max-sm:font-normal"
                    >
                      查看 GitLab
                    </Link>
                  </div>
                </div>
                <div
                  className="h-full rounded-[32px] bg-cover bg-center bg-no-repeat p-6 max-[1024px]:rounded-none max-[1024px]:bg-contain max-[1024px]:bg-top max-[1024px]:p-0 max-sm:hidden"
                  style={{ backgroundImage: `url('/2025/cfp/about/2.png')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <DesktopLayout />

        {/* Tablet Layout */}
        <TabletLayout />

        {/* Phone Layout */}
        <PhoneLayout />
      </div>
    </>
  );
}

function CloseTouchSection() {
  return (
    <div className="bg-background-light p-8 max-[1024px]:bg-background-light max-sm:bg-[url('/2025/cfp/stats/3.png')] max-sm:bg-cover max-sm:bg-center sm:relative sm:col-span-2 sm:rounded-[32px] sm:p-6">
      <h1 className="text-[26px] font-semibold tracking-widest text-foreground max-[1024px]:text-blue max-sm:text-[#FFFFFF] min-[1024px]:text-h2">
        此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以：
      </h1>
      <p className="pt-5 text-justify text-normal-mobile font-semibold leading-8 text-foreground max-[1024px]:text-blue max-sm:text-[#FFFFFF] sm:absolute sm:bottom-6 sm:left-6 sm:pt-0 sm:text-normal sm:font-normal sm:tracking-wider">
        {">"} 接觸學生資訊人才
        <br />
        {">"} 提升品牌影響力
        <br />
        {">"} 深入學生群體
        <br />
        {">"} 推廣產品內容
      </p>
    </div>
  );
}

function From2013() {
  return (
    <>
      {/* Phone Layout */}
      <div className="bg-gray bg-[url('/2025/cfp/about/1.png')] bg-cover bg-center p-8 sm:hidden">
        <h1 className="text-[26px] font-semibold tracking-[2px] text-[#FFFFFF]">
          自 2013 以來，我們帶領了無數學子進入資訊的殿堂，更做到：
        </h1>
        <p className="pt-5 text-justify text-normal-mobile font-semibold leading-8 text-[#FFFFFF]">
          {">"} 累積逾 11,000 名與會者
          <br />
          {">"} 超過 400 位學生講者
          <br />
          {">"} 舉辦逾 400 場聚會和講座、8 場夏令營
          <br />
          {">"} 扶植近 1,100 名熱愛資訊的志工
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="relative col-span-2 rounded-[32px] bg-background-light p-6 max-[1024px]:hidden">
        <h1 className="text-h2 font-semibold tracking-widest text-foreground">
          自 2013 以來，我們帶領了無數學子進入資訊的殿堂，更做到：
        </h1>
        <p className="absolute bottom-6 left-6 text-justify text-normal leading-8 tracking-wider text-foreground">
          {">"} 累積逾 11,000 名與會者
          <br />
          {">"} 超過 400 位學生講者
          <br />
          {">"} 舉辦逾 400 場聚會和講座、8 場夏令營
          <br />
          {">"} 扶植近 1,100 名熱愛資訊的志工
        </p>
      </div>

      {/* Tablet Layout */}
      <div className="relative col-span-2 rounded-[32px] bg-background-light p-6 max-sm:hidden min-[1024px]:hidden">
        <h1 className="text-[26px] font-semibold tracking-[2px] text-blue">
          自 2013 以來，我們帶領了無數學子進入資訊的殿堂，更做到：
        </h1>
        <p className="absolute bottom-6 left-6 text-justify text-normal leading-8 text-blue">
          {">"} 累積逾 11,000 名與會者
          <br />
          {">"} 超過 400 位學生講者
          <br />
          {">"} 舉辦逾 400 場聚會和講座、8 場夏令營
          <br />
          {">"} 扶植近 1,100 名熱愛資訊的志工
        </p>
      </div>
    </>
  );
}

function PhoneLayout() {
  return (
    <div className="relative flex flex-col gap-4 bg-background bg-cover bg-[left_20%_center] px-10 pb-6 sm:hidden lg:bg-center">
      <h1 className="text-center text-h1-mobile font-semibold text-foreground">
        支持我們
      </h1>
      <From2013 />
      <CloseTouchSection />
      <div className="bg-gray p-8">
        <p className="text-justify text-normal-mobile font-normal leading-8 text-foreground">
          SITCON
          秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
          <br />
          <br />
          如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON
          的運作，點擊下方「個人贊助方案」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
          <br />
          <br />
          若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用
          contact@sitcon.org 聯絡我們，商討更多的合作方式！
        </p>
        <div className="flex-row pt-16">
          <a
            href="https://sitcon.org/donate"
            className="flex items-center justify-end text-[40px] font-bold text-foreground"
          >
            我要贊助
            <span className="material-icons" style={{ fontSize: "44px" }}>
              north_east
            </span>
          </a>
          <a
            href="https://i.sitcon.org/2025cfs-form"
            className="flex items-center justify-end text-[32px] font-bold text-foreground"
          >
            索取贊助徵求書
            <span className="material-icons" style={{ fontSize: "44px" }}>
              north_east
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function TabletLayout() {
  return (
    <div className="relative grid max-w-[1120px] grid-rows-2 gap-4 bg-background bg-cover bg-[left_20%_center] px-10 max-sm:hidden lg:bg-center min-[1024px]:hidden">
      <div className="row-span-1 grid h-auto grid-cols-2 gap-4">
        <div className="col-span-1 rounded-[32px] bg-background-light p-6">
          <h1 className="text-h1 font-black tracking-[2px] text-blue">
            支持我們
          </h1>
          <p className="text-justify text-normal leading-8 text-blue">
            SITCON
            秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
            <br />
            <br />
            如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON
            的運作，點擊下方「個人贊助方案」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
            <br />
            <br />
            若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用
            contact@sitcon.org 聯絡我們，商討更多的合作方式！
          </p>
          <div className="flex-row pt-8">
            <a
              href="https://sitcon.org/donate"
              className="flex items-center justify-end text-h1 font-bold text-accent transition hover:text-accent-light"
            >
              我要贊助
              <span className="material-icons" style={{ fontSize: "62px" }}>
                north_east
              </span>
            </a>
            <a
              href="https://i.sitcon.org/2025cfs-form"
              className="flex items-center justify-end text-h2 font-bold text-accent transition hover:text-accent-light"
            >
              索取贊助徵求書
              <span className="material-icons" style={{ fontSize: "62px" }}>
                north_east
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <From2013 />
          <CloseTouchSection />
        </div>
      </div>
      <div className="row-span-1 grid grid-cols-3 gap-4">
        <div
          className="col-span-2 h-[360px] rounded-[32px] bg-background-light bg-cover bg-center p-6"
          style={{ backgroundImage: `url('/2025/cfp/stats/2.jpg')` }}
        ></div>
        <div
          className="col-span-1 h-[360px] rounded-[32px] bg-background-light bg-cover bg-center p-6"
          style={{ backgroundImage: `url('/2025/cfp/stats/1.jpg')` }}
        ></div>
      </div>
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="relative grid max-w-[1120px] grid-cols-3 gap-4 bg-background bg-cover bg-[left_20%_center] px-10 max-[1024px]:hidden lg:bg-center">
      <div className="col-span-1 h-auto">
        <div className="rounded-[32px] bg-background-light pb-4 pl-5 pr-5 pt-6">
          <h1 className="text-h1 font-black tracking-wider text-foreground">
            支持我們
          </h1>
          <p className="pt-4 text-justify text-normal leading-8 text-foreground">
            SITCON
            秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
            <br />
            <br />
            如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON
            的運作，點擊下方「個人贊助方案」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！
            <br />
            <br />
            若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用
            contact@sitcon.org 聯絡我們，商討更多的合作方式！
          </p>
          <div className="flex-row pt-8">
            <a
              href="https://sitcon.org/donate"
              className="flex items-center justify-end text-h1 font-bold text-accent transition hover:text-accent-light"
            >
              我要贊助
              <span className="material-icons" style={{ fontSize: "66px" }}>
                north_east
              </span>
            </a>
            <a
              href="https://i.sitcon.org/2025cfs-form"
              className="flex items-center justify-end text-h2 font-bold text-accent transition hover:text-accent-light"
            >
              索取贊助徵求書
              <span className="material-icons" style={{ fontSize: "53px" }}>
                north_east
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 grid grid-rows-2 gap-4">
        <div className="grid grid-cols-3 gap-4">
          <From2013 />
          <div
            className="col-span-1 rounded-[32px] bg-background-light bg-cover bg-center p-6"
            style={{ backgroundImage: `url('/2025/cfp/stats/1.jpg')` }}
          ></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div
            className="col-span-1 rounded-[32px] bg-background-light bg-cover bg-center p-6"
            style={{ backgroundImage: `url('/2025/cfp/stats/2.jpg')` }}
          ></div>
          <CloseTouchSection />
        </div>
      </div>
      <div className="pb-[120px]"></div>
    </div>
  );
}

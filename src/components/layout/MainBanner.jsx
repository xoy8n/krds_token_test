"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots, // 기존 CarouselDots 사용
  // CarouselApi 필요시 import
} from "@/components/ui/carousel";
import { Play, Pause } from "lucide-react"; // 재생/일시정지 아이콘

// 임시 배너 데이터 (실제로는 props 또는 API로부터 받아와야 함)
const bannerItems = [
  {
    id: 1,
    titleLine1: "나와 내 가족의 보조금 혜택 정보를",
    titleLine2: "지금, 한 번에 확인해 보세요.",
    description:
      "나와 내 가족의 보조금 혜택 정보를 지금, 한 번에 확인해 보세요.",
    buttonText: "자세히 보러가기",
    buttonLink: "#",
    imageUrl: "/images/main-banner-sample-01.png", // Figma 이미지와 유사한 샘플 이미지 경로
    backgroundColor: "#D8E4F2", // Figma 배경색
    textColor: "#1E2124", // Figma 텍스트 색상
    buttonBgColor: "#256EF4", // Figma 버튼 배경색
    buttonTextColor: "#FFFFFF", // Figma 버튼 텍스트색
  },
  {
    id: 2,
    titleLine1: "새로운 정책, 더 나은 생활을 위한",
    titleLine2: "다양한 정보를 확인하세요.",
    description:
      "정부의 최신 정책 소식과 생활 정보를 한눈에 파악할 수 있습니다.",
    buttonText: "정책 살펴보기",
    buttonLink: "#",
    imageUrl: "/images/main-banner-sample-01.png", // 샘플 이미지 경로
    backgroundColor: "#E2F0D9", // 다른 배경색 예시
    textColor: "#1E2124",
    buttonBgColor: "#0B50D0",
    buttonTextColor: "#FFFFFF",
  },
];

// public/images 폴더에 샘플 이미지 파일(main-banner-sample-01.png, 02, 03)이 있다고 가정합니다.
// 실제 프로젝트에서는 Figma에서 이미지를 다운로드 받거나 제공된 에셋을 사용해야 합니다.

export default function MainBanner() {
  const [api, setApi] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }
    // Autoplay 상태 동기화
    setIsPlaying(api.plugins().autoplay.isPlaying());

    api.on("autoplay:play", () => setIsPlaying(true));
    api.on("autoplay:stop", () => setIsPlaying(false));
  }, [api]);

  const togglePlay = () => {
    if (!api) return;
    const autoplay = api.plugins().autoplay;
    if (!autoplay) return; // autoplay 플러그인이 없는 경우 방지

    if (autoplay.isPlaying()) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  };

  return (
    <section aria-label="메인 배너" className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[autoplayPlugin.current]}
        className="w-full group" // group 클래스 추가 (버튼 hover 시 사용 가능)
      >
        <CarouselContent className="-ml-0">
          {/* 메인 배너는 아이템 간 간격이 없음 */}\
          {bannerItems.map((item) => (
            <CarouselItem key={item.id} className="pl-0 basis-full">
              {/* 메인 배너는 아이템 간 간격이 없음 */}
              <div
                className="w-full h-[400px] md:h-[480px] lg:h-[520px] relative overflow-hidden" // 높이 반응형으로 설정
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="max-w-[996px] mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 relative">
                  <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-16">
                    <div className="md:w-1/2 lg:w-3/5 text-center md:text-left order-2 md:order-1 animate-fadeIn">
                      <h2
                        className="text-4xl font-bold leading-tight mb-4"
                        style={{ color: item.textColor }}
                      >
                        {item.titleLine1}
                        <br />
                        {item.titleLine2}
                      </h2>
                      <p
                        className="text-base sm:text-lg lg:text-xl mb-8"
                        style={{ color: item.textColor }}
                      >
                        {item.description}
                      </p>
                      <Button
                        asChild
                        size="lg" // 버튼 크기 lg로 조정
                        className="h-14 px-8 text-lg sm:h-16 sm:px-10 sm:text-xl rounded-lg" // 버튼 크기 및 패딩, 텍스트 크기 조정
                        style={{
                          backgroundColor: item.buttonBgColor,
                          color: item.buttonTextColor,
                        }}
                      >
                        <Link href={item.buttonLink}>{item.buttonText}</Link>
                      </Button>
                    </div>
                    <div className="md:w-1/2 lg:w-2/5 order-1 md:order-2 flex justify-center md:justify-end animate-slideInFromRight">
                      <Image
                        src={item.imageUrl}
                        alt={item.titleLine1 + " " + item.titleLine2}
                        width={344} // 이미지 크기 (원본 비율에 맞게 조절 필요)
                        height={300} // 이미지 크기
                        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
                        priority={item.id === 1} // 첫 번째 이미지는 우선 로드
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* CarouselContent와 형제 레벨로 버튼 이동 */}
        <div className="w-[1200px] mx-auto h-[100%] absolute top-0 bottom-0 left-0 right-0">
          <CarouselPrevious className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 size-16 bg-white/80 hover:bg-white border-[#CDD1D5] text-[#33363D] sm:flex" />
          <CarouselNext className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 size-16 bg-white/80 hover:bg-white border-[#CDD1D5] text-[#33363D] sm:flex" />
        </div>

        {/* 하단 컨트롤 (인디케이터 + 재생/정지 버튼) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          <div className="py-[16px] px-[16px] bg-white/50 backdrop-blur-sm rounded-full shadow-md">
            <CarouselDots className="py-[0px] px-[0px]" />
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-full shadow-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlay}
              className="rounded-full text-[#33363D] hover:bg-black/10"
              aria-label={isPlaying ? "자동재생 정지" : "자동재생 시작"}
            >
              {isPlaying ? (
                <Pause className="size-5" />
              ) : (
                <Play className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

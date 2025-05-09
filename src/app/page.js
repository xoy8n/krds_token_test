"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch"; // 새로운 디자인에 Switch가 명시적으로 보이지 않아 일단 주석 처리
import Header from "@/components/layout/header";
import MainBanner from "@/components/layout/MainBanner";
import Footer from "@/components/layout/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  CarouselPageNumber,
} from "@/components/ui/carousel";
import Link from "next/link";

// Helper component for login option cards (can be moved to a separate file)
function LoginOptionCard({
  icon,
  title,
  description,
  actionButton,
  disclosureButton,
}) {
  return (
    <div className="bg-accent p-8 rounded-xl flex flex-col gap-2 flex-1 min-w-[300px]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {icon && (
            <Image src={`/icons/${icon}.svg`} alt="" width={24} height={24} />
          )}{" "}
          {/* Adjusted icon size */}
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
        {/* Assuming btn-shortcut is a right arrow or similar */}
        <Button
          variant="link"
          size="icon"
          className="text-muted-foreground size-6 p-0"
        >
          <Image
            src="/icons/btn-shortcut.svg"
            alt="바로가기"
            width={20}
            height={20}
          />
        </Button>
      </div>
      <div className="pl-[calc(24px+12px)] flex flex-col gap-2">
        {" "}
        {/* Indent content under icon */}
        <p className="text-base text-muted-foreground">{description}</p>
        {actionButton}
        {disclosureButton}
      </div>
    </div>
  );
}

// Helper for disclosure buttons
function DisclosureButton({ icon = "expand_more", label }) {
  return (
    <Button variant="link" className=" p-0 h-auto justify-start gap-1">
      <Image
        src={`/icons/${icon}.svg`}
        alt=""
        width={20}
        height={20}
        className="text-muted-foreground"
      />
      <span>{label}</span>
    </Button>
  );
}

// --- 임시 데이터 --- (실제로는 API 등에서 가져와야 함)
const popularServices = [
  { name: "사업자등록 증명", icon: "document_fill.svg" }, // calendar.svg 대신 임시 사용
  { name: "취학 통지서", icon: "new_folder.svg" },
  { name: "지방세 납세증명", icon: "map.svg" },
  { name: "자동차등록원부", icon: "identity.svg" },
  { name: "여권재발급", icon: "analytics.svg" }, // Figma에는 analytics 아이콘이 아니지만, 유사한 것으로 대체
  { name: "건축물대장", icon: "location_away.svg" },
  { name: "토지이용 확인", icon: "scrap.svg" }, // bookmarks.svg 대신 임시 사용
  { name: "건강보험", icon: "heart.svg" }, // ecg_heart.svg 대신 임시 사용
  { name: "예비군 훈련 조회", icon: "dummy.svg" },
  { name: "운전면허 정보 조회", icon: "dummy.svg" },
  { name: "등기부등본 발급", icon: "dummy.svg" },
];

const complexContentData = [
  {
    title: "기초연금",
    description:
      "노인에게 기초연금을 지급하여 안정적인 소득기반을 제공함으로써 노인의 생활 안정 지원 및 복리 증진 기여",
    image: "/images/complex-banner-01.png", // Updated path
    link: "#",
  },
  {
    title: "청년 저축 계좌",
    description:
      "청년우대형주택청약종합저축 가입 및 과세특례 신청용 소득확인증명서",
    image: "/images/complex-banner-02.png", // Updated path
    link: "#",
  },
  {
    title: "소상공인 지원",
    description:
      "소상공인 역량 및 경쟁력 강화, 특례보증 및 경영환경개선 등의 지원을 통한 창조형 소상공인 육성",
    image: "/images/complex-banner-03.png", // Updated path
    link: "#",
  },
  // 3개 아이템을 표시하기 위해 데이터 추가 (디자인에는 하나씩 크게 보이지만 요청에 따라 수정)
  {
    title: "국민취업지원제도",
    description:
      "취업에 어려움을 겪는 국민에게 취업지원서비스와 생계지원을 함께 제공하는 제도",
    image: "/images/policy-card-01.png", // 임시로 다른 이미지 사용
    link: "#",
  },
  {
    title: "주택청약종합저축",
    description: "분양주택 및 임대주택을 공급받기 위해 가입하는 저축 상품",
    image: "/images/policy-card-02.png", // 임시로 다른 이미지 사용
    link: "#",
  },
];

const policyInfoData = [
  {
    badge: "생활지원",
    title: "생활지원카드",
    description:
      "다자녀가정에 다양한 경제문화생활 혜택 지원을 위한 다둥이 행복카드를 발급...",
    image: "/images/policy-card-01.png", // Updated path
    link: "#",
  },
  {
    badge: "에너지",
    title: "에너지 효율 1등급 환급",
    description:
      "일정 규모 이상의 사업 시행 전에 에너지 수급 및 이용 효율 향상 계획 등에 대하여 사전협의하여...",
    image: "/images/policy-card-02.png", // Updated path
    link: "#",
  },
  {
    badge: "환경",
    title: "에코머니",
    description:
      "에코머니 제휴 카드(그린카드, 에코마일리지 카드)를 통해 에너지 절약 및 다양한 친환경 활동 시...",
    image: "/images/policy-card-03.png", // Updated path
    link: "#",
  },
];

const newsTabs = ["전체", "공지사항", "자료실", "연구보고서", "자주묻는 질문"];
const newsData = {
  전체: [
    {
      title: "국립중앙박물관 특별전 '탕탕평평_글과 그림의힘'",
      content:
        "= 7일 서울 용산구 국립중앙박물관에서 열린 영조 즉위 300주년 기념 특별전... ",
      image: "/images/news-image-01.png", // Updated path
      link: "#",
    },
    {
      title: "면허 신청·경력 증명 인감증명서, 정부24에서 발급 가능",
      content:
        "재산권과 관련성이 낮은 인감증명서는 앞으로 정부24에서도 발급받을 수 있게 된다...",
      link: "#",
    },
    {
      title: "인감증명서, 정부24서도 발급된다…매매 등 '재산권 목적' 제외",
      content:
        "행정안전부는 재산권과 관련성이 낮은 인감증명서는 정부24에서 발급받을 수 있도록...",
      link: "#",
    },
    {
      title:
        "원주시, '건강보험 빅데이터 기반 진료지원 플랫폼' 직원 가입 이벤트",
      content:
        "'진료지원 플랫폼'은 진료기록을 타 병원 방문 진료 시에도 확인할 수 있도록 플랫폼을 구축...",
      image: "/images/news-image-02.png", // Updated path
      link: "#",
    },
  ],
  // ... 다른 탭 데이터 추가 ...
};

const civilServiceData = [
  {
    badge: "주요민원",
    title: "주민등록표 등본 발급",
    description:
      "주민등록표 등본 또는 주민등록표 초본을 발급받기 위한 민원입니다...",
    link: "#",
  },
  {
    badge: "생활지원",
    title: "코로나19 격리해제 사실 확인서",
    description:
      "코로나19 확진 후 격리를 완료한 자에 대한 격리 해제 사실확인서 발급",
    link: "#",
  },
  {
    badge: "교통",
    title: "교통 범칙금 과태료 미납 내역 조회",
    description:
      "최근 무인단속내역 조회, 무인단속 통지서 발급 조회, 교통 범칙금 및 과태료 인터넷 납부 지원...",
    link: "#",
  },
  {
    badge: "부동산",
    title: "등기사항증명서(등기부등본)",
    description:
      "부동산의 소유권, 저당권 등 권리관계를 확인할 수 있는 증명서 발급",
    link: "#",
  },
  {
    badge: "세금",
    title: "납세증명서 발급",
    description: "국세 또는 지방세의 체납액이 없음을 증명하는 서류 발급",
    link: "#",
  },
];

// --- 컴포넌트 시작 ---
export default function Home() {
  const [activeNewsTab, setActiveNewsTab] = React.useState(newsTabs[0]);

  // 자주찾는 메뉴 카드 컴포넌트
  const PopularServiceCard = ({ name, icon }) => (
    <Link
      href="#"
      className="flex flex-col items-center justify-center gap-3 p-6 border border-[#B1B8BE] rounded-xl bg-white hover:shadow-lg transition-shadow w-full h-[140px]"
    >
      <Image src={`/icons/${icon}`} alt={name} width={40} height={40} />
      <p className="text-[15px] font-bold text-center text-[#1E2124]">{name}</p>
    </Link>
  );

  // 복합 콘텐츠 (우측) 카드 컴포넌트
  const ComplexContentCard = ({ title, description, image, link }) => (
    <div className="flex flex-col gap-4 bg-white rounded-lg shadow-sm overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-[17px] font-bold text-[#1E2124] mb-2">{title}</h4>
        <p className="text-[17px] text-[#464C53] mb-4 text-ellipsis overflow-hidden line-clamp-3 flex-grow">
          {description}
        </p>
        <Button
          variant="link"
          asChild
          className="p-0 h-auto self-start mt-auto"
        >
          <Link href={link} className="text-[#1E2124] font-normal text-[17px]">
            자세히보기{" "}
            <Image
              src="/icons/btn-shortcut.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1"
            />
          </Link>
        </Button>
      </div>
    </div>
  );

  // 정책소개 카드 컴포넌트
  const PolicyInfoCard = ({ badge, title, description, image, link }) => (
    <div className="flex flex-col border border-[#CDD1D5] rounded-xl overflow-hidden w-full h-full">
      {image && (
        <div className="w-full h-48 relative">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
        {badge && (
          <span className="inline-block bg-[#ECF2FE] text-[#0B50D0] text-[15px] px-2 py-0.5 rounded self-start">
            {badge}
          </span>
        )}
        <h4 className="text-[19px] font-bold text-[#1E2124]">{title}</h4>
        <p className="text-[17px] text-[#464C53] text-ellipsis overflow-hidden line-clamp-3 flex-grow min-h-[75px]">
          {description}
        </p>
        <Button
          variant="link"
          asChild
          className="p-0 h-auto self-start mt-auto"
        >
          <Link href={link} className="text-[#1E2124] font-normal text-[17px]">
            자세히보기{" "}
            <Image
              src="/icons/btn-shortcut.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1"
            />
          </Link>
        </Button>
      </div>
    </div>
  );

  // 뉴스 카드 컴포넌트
  const NewsCard = ({ title, content, image, link }) => (
    <Link
      href={link}
      className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 border border-[#B1B8BE] rounded-xl bg-white hover:shadow-lg transition-shadow overflow-hidden sm:h-[234px]"
    >
      {image && (
        <div className="w-full sm:w-1/3 md:w-[200px] aspect-video sm:aspect-auto sm:h-full relative rounded-md overflow-hidden flex-shrink-0">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="flex flex-col flex-grow justify-between gap-3 sm:gap-4">
        <div className="flex flex-col gap-2">
          <h5 className="text-[17px] sm:text-[19px] font-bold text-[#1E2124] text-ellipsis overflow-hidden line-clamp-2">
            {title}
          </h5>
          <p className="text-[15px] sm:text-[17px] text-[#464C53] text-ellipsis overflow-hidden line-clamp-3 sm:line-clamp-4 flex-grow">
            {content}
          </p>
        </div>
        <div className="mt-auto pt-2 flex justify-end">
          <Button variant="link" asChild className="p-0 h-auto self-start">
            <span className="text-[15px] sm:text-[17px] text-[#1E2124] font-normal">
              자세히보기{" "}
              <Image
                src="/icons/btn-shortcut.svg"
                alt=""
                width={16}
                height={16}
                className="ml-1"
              />
            </span>
          </Button>
        </div>
      </div>
    </Link>
  );

  // 민원 서비스 카드 컴포넌트
  const CivilServiceCard = ({ badge, title, description, link }) => (
    <div className="flex flex-col gap-4 p-6 md:p-8 border border-[#B1B8BE] rounded-xl bg-white w-full h-full">
      {badge && (
        <span className="inline-block bg-[#ECF2FE] text-[#0B50D0] text-[15px] px-2 py-0.5 rounded self-start">
          {badge}
        </span>
      )}
      <h4 className="text-[19px] font-bold text-[#1E2124]">{title}</h4>
      <p className="text-[17px] text-[#464C53] text-ellipsis overflow-hidden line-clamp-3 flex-grow min-h-[75px]">
        {description}
      </p>
      <Button variant="link" asChild className="p-0 h-auto self-start mt-auto">
        <Link href={link} className="text-[#1E2124] font-normal text-[17px]">
          바로가기{" "}
          <Image
            src="/icons/btn-shortcut.svg"
            alt=""
            width={16}
            height={16}
            className="ml-1"
          />
        </Link>
      </Button>
    </div>
  );

  return (
    <>
      <Header />
      <MainBanner />
      <main className="flex flex-col items-center w-full pt-10 pb-16 lg:pt-16 lg:pb-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col gap-12 lg:gap-20 max-w-screen-xl">
          {/* 페이지 전체 컨테이너 */}
          {/* 1. 자주찾는 메뉴 */}
          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1E2124]">
                자주찾는 메뉴
              </h2>
              <Button
                variant="ghost"
                className="text-[15px] lg:text-[17px] text-[#1E2124] hover:bg-gray-100 px-2 sm:px-3"
              >
                <Image
                  src="/icons/setting.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-1 sm:mr-1.5"
                />
                설정하기
              </Button>
            </div>
            {/* Carousel과 좌우 버튼을 포함하는 flex 컨테이너 - 수정: Carousel 내부에 버튼 배치 */}
            <div className="relative">
              {/* 캐러셀 전체를 감싸는 컨테이너에 relative 추가 */}
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full px-12 md:px-14" /* 버튼 공간 확보를 위한 패딩 */
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {/* 내부 컨텐츠 마진은 유지 */}
                  {popularServices.map((service, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/7"
                    >
                      <PopularServiceCard
                        name={service.name}
                        icon={service.icon}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 ml-1 sm:ml-2 md:ml-3 hidden sm:flex" />
                {/* 패딩 영역 내에 위치 */}
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 mr-1 sm:mr-2 md:mr-3 hidden sm:flex" />
                {/* 패딩 영역 내에 위치 */}
              </Carousel>
            </div>
          </section>
          {/* 2. 복합 콘텐츠 */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1E2124]">
              복합 콘텐츠
            </h2>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* 좌측 배너 */}
              <div className="lg:w-2/5 bg-[#EEF2F7] lg:w-[282px] rounded-xl p-6 md:p-8 flex flex-col justify-between items-start relative overflow-hidden min-h-[300px] lg:min-h-0">
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1E2124] mb-2">
                    행정서식 <br />
                    간편이름
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-[#464C53] mb-6">
                    길고 복잡한 명칭은 이제 그만! <br />
                    핵심 단어만 간결하게
                  </p>
                  <Button
                    variant="link"
                    asChild
                    className="p-0 h-auto text-[#1E2124]"
                  >
                    <Link href="#" className="text-[15px] md:text-[17px]">
                      자세히보기{" "}
                      <Image
                        src="/icons/btn-shortcut.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="ml-1"
                      />
                    </Link>
                  </Button>
                </div>
                <Image
                  src="/images/complex-banner-bg.png"
                  alt=""
                  width={300}
                  height={200}
                  className="absolute bottom-0 right-0 object-contain max-h-[80%] lg:max-h-full"
                />
              </div>
              {/* 우측 카드 캐러셀 */}
              <div className="lg:w-3/5 flex-1 relative">
                <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full px-12 md:px-14"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {complexContentData.map((item, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                      >
                        <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                          {item.image && (
                            <div className="w-full h-40 md:h-48 relative">
                              <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          )}
                          <div className="p-4 md:p-6 flex flex-col flex-grow">
                            <h4 className="text-[16px] md:text-[17px] font-bold text-[#1E2124] mb-1 md:mb-2">
                              {item.title}
                            </h4>
                            <p className="text-[14px] md:text-[15px] text-[#464C53] mb-3 md:mb-4 text-ellipsis overflow-hidden line-clamp-2 flex-grow min-h-[40px] md:min-h-[45px]">
                              {item.description}
                            </p>
                            <Button
                              variant="link"
                              asChild
                              className="p-0 h-auto text-[#1E2124] self-start mt-auto"
                            >
                              <Link
                                href={item.link}
                                className="text-[14px] md:text-[15px]"
                              >
                                자세히보기{" "}
                                <Image
                                  src="/icons/btn-shortcut.svg"
                                  alt=""
                                  width={14}
                                  height={14}
                                  className="ml-1"
                                />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {complexContentData.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 ml-1 sm:ml-2 md:ml-3 hidden sm:flex" />{" "}
                      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 mr-1 sm:mr-2 md:mr-3 hidden sm:flex" />{" "}
                      <CarouselDots className="hidden sm:flex mt-4" />
                    </>
                  )}
                </Carousel>
              </div>
            </div>
          </section>
          {/* 3. 정책소개 */}
          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1E2124]">
                정책소개
              </h2>
              <Button
                variant="link"
                className="text-[15px] lg:text-[17px] text-[#1E2124] hover:underline px-2 sm:px-3"
              >
                더보기{" "}
                <Image
                  src="/icons/btn-more.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="ml-1"
                />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyInfoData.map((item) => (
                <PolicyInfoCard key={item.title} {...item} />
              ))}
            </div>
          </section>
          {/* 4. 뉴스 */}
          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1E2124]">
                뉴스
              </h2>
              <Button
                variant="link"
                className="text-[15px] lg:text-[17px] text-[#1E2124] hover:underline px-2 sm:px-3"
              >
                더보기{" "}
                <Image
                  src="/icons/btn-more.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="ml-1"
                />
              </Button>
            </div>
            <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 overflow-x-auto pb-px scrollbar-hide">
              {newsTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveNewsTab(tab)}
                  className={`py-2.5 px-1 sm:px-2 text-[16px] md:text-[17px] font-bold transition-colors whitespace-nowrap 
                    ${activeNewsTab === tab ? "text-[#052B57] border-b-2 border-[#052B57]" : "text-[#464C53] hover:text-[#1E2124]"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(newsData[activeNewsTab] || newsData["전체"])
                .slice(0, 4)
                .map((news) => (
                  <NewsCard key={news.title} {...news} />
                ))}
            </div>
          </section>
          {/* 5. 민원 서비스 */}
          <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1E2124]">
                민원 서비스
              </h2>
              <Button
                variant="link"
                className="text-[15px] lg:text-[17px] text-[#1E2124] hover:underline px-2 sm:px-3"
              >
                더보기{" "}
                <Image
                  src="/icons/btn-more.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="ml-1"
                />
              </Button>
            </div>
            <div className="relative">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full pb-12 sm:pb-16"
              >
                <CarouselContent className="-ml-3 md:-ml-4">
                  {civilServiceData.map((service, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <CivilServiceCard {...service} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {civilServiceData.length > 1 && (
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-2 px-4 py-4 sm:px-0">
                    <CarouselPageNumber />
                    <CarouselPrevious className="static transform-none" />
                    <CarouselNext className="static transform-none" />
                  </div>
                )}
              </Carousel>
            </div>
          </section>
          {/* 6. 인물소개 */}
          <section className="bg-[#EEF2F7] rounded-xl mx-[-1rem] sm:mx-0">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-screen-lg">
              <div className="w-full max-w-[240px] sm:max-w-xs lg:w-2/5 flex-shrink-0">
                <Image
                  src="/images/person-minister.png"
                  alt="고용노동부 장관 김나라"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover w-full aspect-[3/4]"
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-6 lg:w-3/5 text-center lg:text-left items-center lg:items-start">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1E2124] leading-snug">
                  안녕하십니까.
                  <br />
                  고용노동부 장관 김나라입니다.
                </h3>
                <p className="text-[16px] md:text-[17px] text-[#464C53] leading-relaxed">
                  고용노동부는 국민 누구나 원하는 일자리에서 마음껏 역량을
                  발휘할 수 있도록 더 많은 일자리를 만들고, 더 든든하고 안전한
                  일터를 조성하기 위해 노력하고 있습니다. 국민 여러분의 땀의
                  가치가 정당하게 인정받을 수 있도록 언제나 국민의 눈높이에서
                  정책을 펼쳐나가겠습니다.
                </p>
                <Button
                  variant="link"
                  asChild
                  className="p-0 h-auto self-center lg:self-start"
                >
                  <Link
                    href="#"
                    className="text-[#1E2124] text-[16px] md:text-[17px] font-normal"
                  >
                    자세히보기{" "}
                    <Image
                      src="/icons/btn-shortcut.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="ml-1"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

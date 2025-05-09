import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full text-sm">
      {/* Masthead */}
      <div className="bg-[#EEF2F7] text-[#1E2124] text-[15px] leading-normal">
        <div className="container mx-auto px-4 h-[40px] flex items-center">
          <Image
            src="/icons/flag.svg"
            alt="Flag icon"
            width={20}
            height={14}
            className="mr-2"
          />{" "}
          {/* Figma: w-5 (20px) h-3.5 (14px) */}
          <span>이 누리집은 대한민국 공식 전자정부 누리집입니다.</span>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          {/* Top utility section */}
          <div className="h-[48px] flex justify-end items-center space-x-3 text-[15px] text-[#1E2124]">
            <button type="button" className="flex items-center hover:underline">
              <Image
                src="/icons/globe.svg"
                alt="Language selection"
                width={18}
                height={18}
                className="mr-1"
              />
              Language
              <Image
                src="/icons/arrow-down.svg"
                alt=""
                width={12}
                height={12}
                className="ml-0.5"
              />
            </button>
            <span className="text-[#CDD1D5]">|</span>
            <button type="button" className="flex items-center hover:underline">
              지원
              <Image
                src="/icons/arrow-down.svg"
                alt=""
                width={12}
                height={12}
                className="ml-0.5"
              />
            </button>
            <span className="text-[#CDD1D5]">|</span>
            <button type="button" className="flex items-center hover:underline">
              {/* 주의: 파일명이 veiw-mode.svg 로 되어있음 */}
              <Image
                src="/icons/veiw-mode.svg"
                alt="Display settings"
                width={16}
                height={16}
                className="mr-1"
              />
              글자·화면 설정
            </button>
          </div>

          {/* Logo and main utility */}
          <div className="h-[60px] flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo-korea-gov.png"
                alt="대한민국정부"
                className="h-[28px] w-auto"
              />{" "}
              {/* Figma: height 28px */}
            </Link>
            <div className="flex items-center space-x-2 text-[#1E2124] font-bold text-[17px] leading-normal">
              <Link
                href="/search"
                className="flex flex-col items-center px-3 py-1 hover:bg-gray-100 rounded-lg h-[56px] justify-center"
              >
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className="mb-0.5"
                />{" "}
                {/* Figma: 20x20 */}
                <span>통합검색</span>
              </Link>
              <Link
                href="/login"
                className="flex flex-col items-center px-3 py-1 hover:bg-gray-100 rounded-lg h-[56px] justify-center"
              >
                <Image
                  src="/icons/login.svg"
                  alt="Login"
                  width={20}
                  height={20}
                  className="mb-0.5"
                />{" "}
                {/* Figma: 20x20 */}
                <span>로그인</span>
              </Link>
              <Link
                href="/join"
                className="flex flex-col items-center px-3 py-1 hover:bg-gray-100 rounded-lg h-[56px] justify-center"
              >
                <Image
                  src="/icons/join.svg"
                  alt="Join"
                  width={20}
                  height={20}
                  className="mb-0.5"
                />{" "}
                {/* Figma: 20x20 */}
                <span>회원가입</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-t border-b border-[#CDD1D5] h-[56px]">
        <div className="container mx-auto px-4 flex justify-start items-center h-full space-x-4 text-[19px] font-bold text-[#464C53] leading-normal">
          {["민원", "서비스신청", "정책정보", "기관소개", "고객센터"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="flex items-center px-4 h-full hover:text-blue-600 hover:border-b-2 hover:border-blue-600 -mb-px"
              >
                {item}
                <Image
                  src="/icons/arrow-down.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="ml-2"
                />{" "}
                {/* Figma: 16x16 */}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

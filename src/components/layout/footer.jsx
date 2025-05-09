import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const relatedSites = [
    { name: "소속기관(지청 및 위원회)", icon: "btn-more.svg" },
    { name: "업무별 누리집", icon: "btn-more.svg" },
    { name: "산하기관 및 관련단체", icon: "btn-more.svg" },
    { name: "정부기관", icon: "btn-more.svg" },
  ];

  const utilityLinks = [
    { name: "이용안내", href: "/usage-guide", icon: "open-new-window.svg" }, // arrow-right.svg 대신 임시 사용
    { name: "찾아오시는 길", href: "/directions", icon: "open-new-window.svg" }, // arrow-right.svg 대신 임시 사용
  ];

  const socialIcons = [
    { name: "Instagram", icon: "instagram.svg", href: "https://instagram.com" },
    { name: "YouTube", icon: "youtube.svg", href: "https://youtube.com" },
    { name: "X (Twitter)", icon: "X_twitter.svg", href: "https://x.com" },
    { name: "Facebook", icon: "facebook.svg", href: "https://facebook.com" },
    {
      name: "Naver Blog",
      icon: "naver_blog.svg",
      href: "https://blog.naver.com",
    },
  ];

  const policyLinks = [
    { name: "이용안내", href: "/usage-guide", bold: false },
    { name: "개인정보처리방침", href: "/privacy-policy", bold: true },
    { name: "저작권정책", href: "/copyright-policy", bold: false },
    {
      name: "웹 접근성 품질인증 마크 획득",
      href: "/web-accessibility",
      bold: false,
    },
  ];

  return (
    <footer className="w-full bg-white text-sm">
      {/* Related Sites Section */}
      <div className="border-y border-[#CDD1D5]">
        <div className="container mx-auto h-[56px] flex">
          {relatedSites.map((site, index) => (
            <button
              key={site.name}
              type="button"
              className={`flex-1 h-full flex items-center justify-between px-6 text-[17px] text-[#1E2124] hover:bg-gray-50 ${index > 0 ? "border-l border-[#CDD1D5]" : ""}`}
            >
              <span>{site.name}</span>
              <Image
                src={`/icons/${site.icon}`}
                alt="더보기"
                width={20}
                height={20}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#F4F5F6] py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Column: Logo and Info */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/images/logo-korea-gov.png"
                alt="대한민국정부"
                width={66}
                height={21}
              />{" "}
              {/* Figma: 66x21px */}
            </Link>
            <div className="text-[17px] text-[#1E2124] leading-relaxed">
              <p>(04383) 서울특별시 용산구 이태원로 22</p>
              <div className="flex items-center gap-2">
                <span className="font-bold">대표전화</span>
                <span>1234-5678</span>
                <span className="text-[#6D7882]">(유료, 평일 09시-18시)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">해외이용</span>
                <span>+82-1234-5678</span>
                <span className="text-[#6D7882]">(유료, 평일 09시-18시)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Utility Links and Social Media */}
          <div className="flex flex-col gap-10 lg:text-right">
            <div className="flex flex-col lg:items-end gap-1">
              {utilityLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center lg:justify-end gap-1 text-[17px] text-[#1E2124] hover:underline"
                >
                  <span>{link.name}</span>
                  <Image
                    src={`/icons/${link.icon}`}
                    alt=""
                    width={16}
                    height={16}
                  />
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-start lg:justify-end gap-2">
              {socialIcons.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#CDD1D5] rounded-full hover:bg-gray-100"
                >
                  <Image
                    src={`/icons/${social.icon}`}
                    alt={`${social.name} icon`}
                    width={20}
                    height={20}
                  />{" "}
                  {/* Figma: 20x20 in a 36x36 box */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#CDD1D5]">
        <div className="container mx-auto px-4 h-[56px] flex flex-col lg:flex-row justify-between items-center text-[15px]">
          <nav className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1 py-2 lg:py-0">
            {policyLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${link.bold ? "font-bold text-[#052B57]" : "text-[#1E2124]"} hover:underline`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <p className="text-[#464C53] py-2 lg:py-0">
            © The Government of the Republic of Korea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

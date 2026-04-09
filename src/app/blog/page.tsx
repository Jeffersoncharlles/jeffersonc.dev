import React from "react";
import Link from "next/link";

const imgContainer = "https://www.figma.com/api/mcp/asset/7058877a-167f-41cf-961f-62869d4fb7de";
const imgContainer1 = "https://www.figma.com/api/mcp/asset/a699c152-125a-4ceb-bb1d-15a6b806d82f";
const imgContainerMobile = "https://www.figma.com/api/mcp/asset/6f643e0d-1ca6-46d6-8d1a-7bee08739568";
const imgContainer1Mobile = "https://www.figma.com/api/mcp/asset/740a71a1-7c7f-4aa7-8aee-0bcbb3e7f719";

function BlogDesktop() {
  return (
    <div className="hidden md:flex bg-blog-bg content-stretch flex-col items-start relative size-full min-h-screen">
      <div className="content-stretch flex flex-col gap-[160px] items-center py-[160px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[896px] px-[32px] relative shrink-0 w-[896px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[48px] tracking-[-1.2px] w-full">
                <p className="leading-[48px]">Journal</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[16px] w-full">
                <p className="leading-[24px]">Deep dives into the intersection of design and philosophy.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
            <div className="border-[rgba(68,71,90,0.1)] border-b border-solid content-stretch flex flex-col gap-[16px] items-start pb-[65px] relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between leading-[0] not-italic relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center relative shrink-0 text-dracula-pink text-[10px] tracking-[1px] uppercase w-[129.64px]">
                    <p className="leading-[15px]">Featured Narrative</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[12px] text-[rgba(191,191,191,0.6)] w-[118.36px]">
                    <p className="leading-[16px]">Feb 15 • 12 Min Read</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[36px] w-full">
                    <p>
                      <span className="leading-[45px]">{`The Architecture of `}</span>
                      <span className="bg-clip-text font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[45px] text-[transparent]" style={{ backgroundImage: "linear-gradient(171.40189672827162deg, rgb(189, 147, 249) 0%, rgb(255, 121, 198) 100%)" }}>
                        Silence
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-[672px] relative shrink-0 w-[672px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[59px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[18px] w-[662.94px]">
                    <p className="leading-[29.25px] mb-0">Exploring the psychological impact of minimalist spaces in a hyper-connected</p>
                    <p className="leading-[29.25px]">world. How emptiness fuels creativity and focus in an age of constant noise.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[rgba(68,71,90,0.1)] border-b border-solid content-stretch flex flex-col gap-[16px] items-start pb-[65px] relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between leading-[0] not-italic relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center relative shrink-0 text-dracula-cyan text-[10px] tracking-[1px] uppercase w-[88.08px]">
                    <p className="leading-[15px]">Digital Craft</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[12px] text-[rgba(191,191,191,0.6)] w-[113.8px]">
                    <p className="leading-[16px]">Feb 12 • 8 Min Read</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[30px] w-full">
                    <p className="leading-[37.5px]">The Aesthetic of Minimal Code</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[672px] relative shrink-0 w-[672px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[16px] w-[671.47px]">
                    <p className="leading-[26px] mb-0">How functional programming principles are influencing modern interface design systems</p>
                    <p className="leading-[26px]">for better performance and cognitive clarity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[rgba(68,71,90,0.1)] border-b border-solid content-stretch flex flex-col gap-[16px] items-start pb-[65px] relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between leading-[0] not-italic relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center relative shrink-0 text-dracula-cyan text-[10px] tracking-[1px] uppercase w-[74.97px]">
                    <p className="leading-[15px]">Philosophy</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[12px] text-[rgba(191,191,191,0.6)] w-[116.63px]">
                    <p className="leading-[16px]">Feb 09 • 6 Min Read</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[30px] w-full">
                    <p className="leading-[37.5px]">Liminal Spaces in Digital UX</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[672px] relative shrink-0 w-[672px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[16px] w-[655.14px]">
                    <p className="leading-[26px] mb-0">Navigating the transition states between user actions and the psychological comfort of</p>
                    <p className="leading-[26px]">loading sequences in modern web apps.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[rgba(68,71,90,0.1)] border-b border-solid content-stretch flex flex-col gap-[16px] items-start pb-[65px] relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-baseline justify-between leading-[0] not-italic relative w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center relative shrink-0 text-dracula-cyan text-[10px] tracking-[1px] uppercase w-[54.53px]">
                    <p className="leading-[15px]">Interior</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[12px] text-[rgba(191,191,191,0.6)] w-[121.31px]">
                    <p className="leading-[16px]">Feb 05 • 10 Min Read</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[30px] w-full">
                    <p className="leading-[37.5px]">Dark Mode as a Design First Principle</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[672px] relative shrink-0 w-[672px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[16px] w-[602.66px]">
                    <p className="leading-[26px] mb-0">Why the future of software design is moving towards low-light environments for</p>
                    <p className="leading-[26px]">sustained focus and eye health in long-form work sessions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[25px] items-start justify-center relative shrink-0 w-full">
            <div className="border-[rgba(139,233,253,0.3)] border-b border-solid content-stretch flex flex-col items-start pb-[5px] relative self-stretch shrink-0 cursor-pointer">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-dracula-cyan text-[14px] w-[126.52px]">
                <p className="leading-[20px]">View Archive Index</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blog-card-bg border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[65px] pt-[49px] px-[49px] relative rounded-[24px] shrink-0 w-[832px]">
          <div className="relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
              <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[30px] tracking-[-1.5px] w-full">
                <p>
                  <span className="leading-[36px]">{`Join the `}</span>
                  <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[36px] text-dracula-purple">Inner Circle</span>
                  <span className="leading-[36px]">.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[448px] relative shrink-0 w-[448px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[16px] w-[437.5px]">
                <p className="leading-[24px]">Weekly editorial insights on design, code, and philosophy.</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pt-[16px] relative w-full">
              <div className="bg-blog-bg content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip px-[24px] py-[18px] relative rounded-[8px] self-stretch border border-white/5">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
                    <p className="leading-[normal]">Email address</p>
                  </div>
                </div>
              </div>
              <button className="bg-dracula-cyan content-stretch flex flex-col items-center justify-center px-[32px] py-[16px] relative rounded-[8px] shrink-0 hover:opacity-90 transition-opacity cursor-pointer">
                <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#1a1b26] text-[16px] text-center w-[77.56px]">
                  <p className="leading-[24px]">Subscribe</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-blog-footer-bg border-[rgba(255,255,255,0.05)] border-solid border-t content-stretch flex flex-col items-center justify-center pb-[80px] pt-[81px] px-[32px] md:px-[192px] relative shrink-0 w-full">
        <div className="max-w-[896px] relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0">
              <Link href="/" className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[32px] justify-center relative shrink-0 text-dracula-purple text-[24px] tracking-[-1.2px] hover:opacity-80 transition-opacity">
                <p className="leading-[32px]">jeffersonc.</p>
              </Link>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(191,191,191,0.5)] w-[186.59px]">
                <p className="leading-[16px]">© 2024 Neon Nocturne Editorial.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[54.89px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,121,198,0.5)] tracking-[1px] uppercase w-[54.89px]">
                    <p className="leading-[15px]">Journal</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(191,191,191,0.5)] w-[42px]">
                    <p className="leading-[16px]">Privacy</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(191,191,191,0.5)] w-[35.36px]">
                    <p className="leading-[16px]">Terms</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[52.64px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,121,198,0.5)] tracking-[1px] uppercase w-[43.27px]">
                    <p className="leading-[15px]">Social</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(191,191,191,0.5)] w-[38.98px]">
                    <p className="leading-[16px]">Twitter</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(191,191,191,0.5)] w-[52.64px]">
                    <p className="leading-[16px]">Substack</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blog-card-bg content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px] border border-white/5 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="relative shrink-0 size-[9.333px]">
                <img alt="" className="absolute block max-w-none size-full opacity-60" src={imgContainer} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <div className="absolute content-stretch flex flex-col items-center left-0 right-0 max-w-[896px] mx-auto px-[16px] top-[24px] w-full z-50">
        <div className="backdrop-blur-[10px] bg-[rgba(29,31,39,0.7)] border border-[rgba(255,255,255,0.05)] border-solid content-stretch flex items-center justify-between px-[25px] py-[13px] relative rounded-[12px] shrink-0 w-full shadow-lg">
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <Link href="/" className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-dracula-purple text-[20px] tracking-[-1px] w-[87.48px] hover:opacity-80 transition-opacity">
                  <p className="leading-[28px]">jeffersonc</p>
                </Link>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <Link href="/" className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-dracula-purple text-[16px] tracking-[-0.4px] w-[41.59px]">
                    <p className="leading-[24px]">Home</p>
                  </div>
                </Link>
                <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[16px] tracking-[-0.4px] w-[71.23px]">
                    <p className="leading-[24px]">Categoria</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[16px] tracking-[-0.4px] w-[33.06px]">
                    <p className="leading-[24px]">Blog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
              <div className="content-stretch flex flex-col h-[24px] items-start px-[16px] relative shrink-0 w-[33px]">
                <div className="bg-[rgba(255,255,255,0.1)] h-[24px] shrink-0 w-px" />
              </div>
              <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="relative shrink-0 size-[18px]">
                  <img alt="" className="absolute block max-w-none size-full opacity-70" src={imgContainer1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogMobile() {
  return (
    <div className="flex md:hidden bg-blog-mobile-bg content-stretch flex-col items-start relative size-full min-h-screen">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[672px] pb-[96px] pt-[112px] px-[24px] relative shrink-0 w-full z-10">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffafd7] text-[12px] text-center tracking-[3.6px] uppercase w-[183.03px]">
              <p className="leading-[16px]">Editorial Journal</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[120px] justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[48px] text-center tracking-[-2.4px] w-[278.36px]">
              <p className="leading-[60px] mb-0">The Midnight</p>
              <p className="bg-clip-text leading-[60px] text-[transparent]" style={{ backgroundImage: "linear-gradient(121.37952886094178deg, rgb(189, 147, 249) 0%, rgb(255, 121, 198) 100%)" }}>
                Chronicles.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center max-w-[448px] opacity-80 pt-[8px] relative shrink-0 w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[52px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[16px] text-center w-[279.33px]">
              <p className="leading-[26px] mb-0">A minimalist exploration of functional</p>
              <p className="leading-[26px]">aesthetics and digital craftsmanship.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[10.8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-center opacity-60 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] tracking-[1px] uppercase w-[78.8px]">
                  <p className="leading-[15px]">Oct 24, 2024</p>
                </div>
              </div>
              <div className="bg-[#6272a4] h-px shrink-0 w-[4px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-dracula-cyan text-[10px] tracking-[1px] uppercase w-[85.58px]">
                  <p className="leading-[15px]">Development</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[1.2px] relative shrink-0 w-full">
              <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[24px] w-full">
                <p className="leading-[30px] mb-0">The Zen of Functional</p>
                <p className="leading-[30px]">Refactoring</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[14px] w-full">
                <p className="leading-[22.75px] mb-0">How stripping away the noise from your codebase</p>
                <p className="leading-[22.75px] mb-0">mirrors the minimalist movement in mid-century</p>
                <p className="leading-[22.75px]">modern design.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center pt-[5.2px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffafd7] text-[12px] tracking-[1.2px] uppercase w-[126.83px]">
                <p className="leading-[16px]">Read Full Story</p>
              </div>
              <div className="relative shrink-0 size-[9.333px]">
                <img alt="" className="absolute block max-w-none size-full opacity-60" src={imgContainerMobile} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(68,71,90,0.1)] h-px shrink-0 w-full" />
          <div className="content-stretch flex flex-col gap-[10.8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-center opacity-60 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] tracking-[1px] uppercase w-[78.88px]">
                  <p className="leading-[15px]">Oct 20, 2024</p>
                </div>
              </div>
              <div className="bg-[#6272a4] h-px shrink-0 w-[4px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffafd7] text-[10px] tracking-[1px] uppercase w-[43.33px]">
                  <p className="leading-[15px]">Design</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[1.2px] relative shrink-0 w-full">
              <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[24px] w-full">
                <p className="leading-[30px] mb-0">Beyond the Grid: Asymmetric</p>
                <p className="leading-[30px]">UI</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[14px] w-full">
                <p className="leading-[22.75px] mb-0">Why intentional imbalance creates a more</p>
                <p className="leading-[22.75px] mb-0">engaging user journey than traditional symmetrical</p>
                <p className="leading-[22.75px]">layouts.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center pt-[5.2px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffafd7] text-[12px] tracking-[1.2px] uppercase w-[126.83px]">
                <p className="leading-[16px]">Read Full Story</p>
              </div>
              <div className="relative shrink-0 size-[9.333px]">
                <img alt="" className="absolute block max-w-none size-full opacity-60" src={imgContainerMobile} />
              </div>
            </div>
          </div>
          <div className="bg-[rgba(68,71,90,0.1)] h-px shrink-0 w-full" />
          <div className="content-stretch flex flex-col gap-[10.8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-center opacity-60 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] tracking-[1px] uppercase w-[76.45px]">
                  <p className="leading-[15px]">Oct 15, 2024</p>
                </div>
              </div>
              <div className="bg-[#6272a4] h-px shrink-0 w-[4px]" />
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-dracula-cyan text-[10px] tracking-[1px] uppercase w-[64.63px]">
                  <p className="leading-[15px]">Hardware</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[1.2px] relative shrink-0 w-full">
              <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f8f8f2] text-[24px] w-full">
                <p className="leading-[30px]">Tactile Satisfaction</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[14px] w-full">
                <p className="leading-[22.75px] mb-0">Searching for the perfect mechanical switch to</p>
                <p className="leading-[22.75px] mb-0">complement a dark mode workflow and enhance</p>
                <p className="leading-[22.75px]">creative focus.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center pt-[5.2px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ffafd7] text-[12px] tracking-[1.2px] uppercase w-[126.83px]">
                <p className="leading-[16px]">Read Full Story</p>
              </div>
              <div className="relative shrink-0 size-[9.333px]">
                <img alt="" className="absolute block max-w-none size-full opacity-60" src={imgContainerMobile} />
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center opacity-40 relative shrink-0 w-full">
              <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[12px] text-center tracking-[4.8px] uppercase w-[181.78px]">
                <p className="leading-[16px]">Previous Entries</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="border-[rgba(68,71,90,0.1)] border-b border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative shrink-0 w-full cursor-pointer hover:bg-white/5 transition-colors px-2 rounded-t-lg">
                <div className="relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f8f8f2] text-[16px] w-[134.23px]">
                    <p className="leading-[24px]">The CLI Aesthetic</p>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] tracking-[1px] uppercase w-[37.8px]">
                    <p className="leading-[15px]">Sep 12</p>
                  </div>
                </div>
              </div>
              <div className="border-[rgba(68,71,90,0.1)] border-b border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative shrink-0 w-full cursor-pointer hover:bg-white/5 transition-colors px-2">
                <div className="relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f8f8f2] text-[16px] w-[126.86px]">
                    <p className="leading-[24px]">Color Theory 101</p>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] tracking-[1px] uppercase w-[42.72px]">
                    <p className="leading-[15px]">Aug 28</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Footer */}
      <div className="bg-blog-footer-bg border-[rgba(68,71,90,0.1)] border-solid border-t content-stretch flex flex-col items-start pb-[64px] pt-[65px] relative shrink-0 w-full z-10">
        <div className="max-w-[672px] relative shrink-0 w-full mx-auto">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] px-[24px] relative w-full">
            <div className="content-stretch flex flex-col items-center opacity-60 relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[12px] text-center tracking-[1.2px] uppercase w-[222.8px]">
                <p className="leading-[16px]">© 2024 jeffersonc Editorial</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] h-[15px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 cursor-pointer hover:text-white transition-colors">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] text-center tracking-[1px] uppercase w-[49.38px]">
                  <p className="leading-[15px]">Privacy</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 cursor-pointer hover:text-white transition-colors">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] text-center tracking-[1px] uppercase w-[39.36px]">
                  <p className="leading-[15px]">Terms</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0 cursor-pointer hover:text-white transition-colors">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] text-center tracking-[1px] uppercase w-[22.28px]">
                  <p className="leading-[15px]">RSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Top Navigation */}
      <div className="fixed backdrop-blur-[12px] bg-[rgba(40,42,54,0.8)] border-white/5 border-b border-solid content-stretch flex flex-col items-start left-0 pb-px top-0 w-full z-50">
        <div className="h-[64px] max-w-[672px] mx-auto relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <Link href="/" className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-dracula-purple text-[18px] tracking-[-0.9px] w-[80.77px] hover:opacity-80 transition-opacity">
                <p className="leading-[28px]">jeffersonc</p>
              </Link>
            </div>
            <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <Link href="/" className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-dracula-purple text-[10px] tracking-[1px] uppercase w-[34.58px]">
                    <p className="leading-[15px]">Home</p>
                  </div>
                </Link>
                <div className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] tracking-[1px] uppercase w-[65.77px]">
                    <p className="leading-[15px]">Categoria</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[10px] tracking-[1px] uppercase w-[31.03px]">
                    <p className="leading-[15px]">Blog</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:bg-white/10 p-1 rounded-full transition-colors">
                <div className="relative shrink-0 size-[15px]">
                  <img alt="" className="absolute block max-w-none size-full opacity-70" src={imgContainer1Mobile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogDesktop />
      <BlogMobile />
    </>
  );
}
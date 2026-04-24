export default function Homepage() {
  return (
    <div className="bg-[#f4f1ec] content-stretch flex flex-col items-start relative size-full" data-name="Homepage">
      <div className="relative shrink-0 w-full" data-name="Header">
        <div className="content-stretch flex flex-col gap-[18px] items-start pt-[20px] px-[40px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Nav Row">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Brand">
              <div className="bg-[#d4ff00] rounded-[999px] shrink-0 size-[4px]" data-name="Dot" />
              <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#0a0a0a] text-[19px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`FORMA&CO`}</p>
            </div>
            <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap" data-name="Nav Links">
              <p className="relative shrink-0">(01) Work</p>
              <p className="relative shrink-0">(02) Studio</p>
              <p className="relative shrink-0">(03) Process</p>
              <p className="relative shrink-0">(04) Journal</p>
            </div>
            <div className="bg-[#0a0a0a] content-stretch flex gap-[14px] items-center justify-center pl-[20px] pr-[10px] py-[10px] relative rounded-[999px] shrink-0" data-name="Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#f4f1ec] text-[14px] whitespace-nowrap">Start a project</p>
            </div>
          </div>
          <div className="bg-[rgba(10,10,10,0.08)] h-px shrink-0 w-full" data-name="Rule" />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Hero">
        <div className="content-stretch flex flex-col items-start pb-[128px] pt-[96px] px-[40px] relative size-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Meta Row">
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
              <div className="relative shrink-0 size-[8px]" data-name="Dot">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" fill="var(--fill-0, #D4FF00)" id="Dot" r="4" />
                </svg>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] whitespace-nowrap">Independent · Lisbon / Brooklyn · Est. 2017</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Booking">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] whitespace-nowrap">Currently booking</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] whitespace-nowrap">Q3 — Q4 2026</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start leading-[0.86] pt-[40px] relative shrink-0 text-[#0a0a0a] text-[196px] tracking-[-10.78px] w-full" data-name="Hero Title">
            <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Digital products
            </p>
            <p className="font-['Fraunces:Light_Italic',sans-serif] font-light italic relative shrink-0 w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              with intent.
            </p>
          </div>
          <div className="content-stretch flex items-start pt-[80px] relative shrink-0 w-full" data-name="Hero Lower">
            <div className="flex-[1_0_0] h-[20px] min-w-px" data-name="Spacer" />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Copy">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#1b1b1b] text-[24px] w-full">We are a twelve-person studio designing interfaces, identity and motion for founders with appetite — from seed to series C, and the odd cultural institution in between.</p>
              <div className="content-center flex flex-wrap gap-[18px] items-center relative shrink-0 w-full" data-name="Actions">
                <div className="bg-[#0a0a0a] content-stretch flex gap-[14px] items-center justify-center pl-[20px] pr-[10px] py-[10px] relative rounded-[999px] shrink-0" data-name="Button">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#f4f1ec] text-[14px] whitespace-nowrap">See selected work</p>
                  <div className="bg-[#d4ff00] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Trailing Well">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">↗</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text Link">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[15px] whitespace-nowrap">Or say hello</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[15px] whitespace-nowrap">→</p>
                  <div className="absolute bg-[rgba(10,10,10,0.08)] bottom-[-7px] h-px left-0 right-[-13px]" data-name="Underline" />
                </div>
              </div>
            </div>
          </div>
          <p className="absolute font-['Fraunces:Light_Italic','Noto_Sans:Italic',sans-serif] font-light italic leading-none right-[170px] text-[#d4ff00] text-[92px] top-[64px] translate-x-full whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            ★
          </p>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Marquee">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[40px] py-[24px] relative size-full">
            <div className="content-stretch flex gap-[40px] items-start leading-none relative shrink-0 text-[64px] tracking-[-1.92px] w-full whitespace-nowrap" data-name="Marquee Items">
              <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0a0a0a]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Brand systems
              </p>
              <p className="font-['Fraunces:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                ✦
              </p>
              <p className="font-['Fraunces:Light_Italic',sans-serif] font-light italic relative shrink-0 text-[#0a0a0a]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Interfaces
              </p>
              <p className="font-['Fraunces:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                ✦
              </p>
              <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0a0a0a]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Motion
              </p>
              <p className="font-['Fraunces:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                ✦
              </p>
              <p className="font-['Fraunces:Light_Italic',sans-serif] font-light italic relative shrink-0 text-[#0a0a0a]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Websites
              </p>
              <p className="font-['Fraunces:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                ✦
              </p>
              <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#0a0a0a]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Design engineering
              </p>
              <p className="font-['Fraunces:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                ✦
              </p>
              <p className="font-['Fraunces:Light_Italic',sans-serif] font-light italic relative shrink-0 text-[#0a0a0a]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Research
              </p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.08)] border-b border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="relative shrink-0 w-full" data-name="Teaser row">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[40px] py-[96px] relative size-full">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Section Header">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative text-[#0a0a0a]" data-name="Left">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] tracking-[2.42px] w-full">(01) — Selected work</p>
              <div className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[102px] tracking-[-5.61px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                <p className="leading-[0.9] mb-0">Recent case studies,</p>
                <p className="leading-[0.9]">shipped with care.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Meta Wrap">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#8a8780] text-[11px] tracking-[2.42px] whitespace-nowrap">06 projects</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1360px]" data-name="Cards list">
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Work Row">
              <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[420px]" data-name="Work Card">
                <div className="aspect-[360/240] bg-[#0a0a0a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Device=Desktop, Tone=Dark">
                  <div aria-hidden="true" className="absolute border border-[rgba(244,241,236,0.14)] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[#d4ff00] inset-0 opacity-20" data-name="Overlay" />
                  <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-none left-[24px] text-[#f4f1ec] text-[44px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    •
                  </p>
                </div>
                <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] w-full whitespace-nowrap" data-name="Meta Row">
                  <p className="relative shrink-0">01 / Fintech</p>
                  <p className="relative shrink-0">2026</p>
                </div>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0.95] relative shrink-0 text-[#f4f1ec] text-[74px] tracking-[-4.07px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Halide.
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-full">Rebrand, investor portal and mobile app for a $4.2B credit platform.</p>
              </div>
              <div className="bg-[#f4f1ec] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[420px]" data-name="Work Card">
                <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.08)] border-solid inset-0 pointer-events-none" />
                <div className="aspect-[360/240] bg-[#0a0a0a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Device=Desktop, Tone=Dark">
                  <div aria-hidden="true" className="absolute border border-[rgba(244,241,236,0.14)] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[#d4ff00] inset-0 opacity-20" data-name="Overlay" />
                  <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-none left-[24px] text-[#f4f1ec] text-[44px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    •
                  </p>
                </div>
                <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] w-full whitespace-nowrap" data-name="Meta Row">
                  <p className="relative shrink-0">02 / Culture</p>
                  <p className="relative shrink-0">2025</p>
                </div>
                <p className="font-['Fraunces:Light_Italic',sans-serif] font-light italic leading-[0.95] relative shrink-0 text-[#0a0a0a] text-[74px] tracking-[-4.07px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Atrium Archive
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full">Site and digital identity for a photographic archive of 20th-century Brazilian architecture.</p>
              </div>
              <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[420px]" data-name="Work Card">
                <div className="aspect-[360/240] bg-[#0a0a0a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Device=Desktop, Tone=Dark">
                  <div aria-hidden="true" className="absolute border border-[rgba(244,241,236,0.14)] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[#d4ff00] inset-0 opacity-20" data-name="Overlay" />
                  <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-none left-[24px] text-[#f4f1ec] text-[44px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    •
                  </p>
                </div>
                <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] w-full whitespace-nowrap" data-name="Meta Row">
                  <p className="relative shrink-0">03 / AI tooling</p>
                  <p className="relative shrink-0">2026</p>
                </div>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0.95] relative shrink-0 text-[#f4f1ec] text-[74px] tracking-[-4.07px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Plexus/OS
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-full">An opinionated operating layer for AI teams. Design system, interface, and product marketing.</p>
              </div>
              <div className="bg-[#f4f1ec] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[420px]" data-name="Work Card">
                <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.08)] border-solid inset-0 pointer-events-none" />
                <div className="aspect-[360/240] bg-[#0a0a0a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Device=Desktop, Tone=Dark">
                  <div aria-hidden="true" className="absolute border border-[rgba(244,241,236,0.14)] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[#d4ff00] inset-0 opacity-20" data-name="Overlay" />
                  <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-none left-[24px] text-[#f4f1ec] text-[44px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    •
                  </p>
                </div>
                <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] w-full whitespace-nowrap" data-name="Meta Row">
                  <p className="relative shrink-0">04 / Hardware</p>
                  <p className="relative shrink-0">2024</p>
                </div>
                <p className="font-['Fraunces:Light_Italic',sans-serif] font-light italic leading-[0.95] relative shrink-0 text-[#0a0a0a] text-[74px] tracking-[-4.07px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Field Notes
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full">E-ink tablet UI and firmware onboarding — built with ten engineers over two quiet quarters.</p>
              </div>
              <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[420px]" data-name="Work Card">
                <div className="aspect-[360/240] bg-[#0a0a0a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Device=Desktop, Tone=Dark">
                  <div aria-hidden="true" className="absolute border border-[rgba(244,241,236,0.14)] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[#d4ff00] inset-0 opacity-20" data-name="Overlay" />
                  <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-none left-[24px] text-[#f4f1ec] text-[44px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    •
                  </p>
                </div>
                <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] w-full whitespace-nowrap" data-name="Meta Row">
                  <p className="relative shrink-0">05 / Climate</p>
                  <p className="relative shrink-0">2025</p>
                </div>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0.95] relative shrink-0 text-[#f4f1ec] text-[74px] tracking-[-4.07px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Midori.earth
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-full">Carbon accounting platform. Dashboards that someone will actually read on a Tuesday morning.</p>
              </div>
              <div className="bg-[#d4ff00] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[420px]" data-name="Work Card">
                <div className="aspect-[360/240] bg-[#0a0a0a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Device=Desktop, Tone=Dark">
                  <div aria-hidden="true" className="absolute border border-[rgba(244,241,236,0.14)] border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[#d4ff00] inset-0 opacity-20" data-name="Overlay" />
                  <p className="absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-none left-[24px] text-[#f4f1ec] text-[44px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    •
                  </p>
                </div>
                <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] w-full whitespace-nowrap" data-name="Meta Row">
                  <p className="relative shrink-0">06 / —</p>
                  <p className="relative shrink-0">Yours</p>
                </div>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0.95] relative shrink-0 text-[#f4f1ec] text-[74px] tracking-[-4.07px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Your project is next.
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-full">Tell us about it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Text stage">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[40px] py-[96px] relative size-full">
          <div className="bg-[rgba(10,10,10,0.08)] h-px shrink-0 w-full" data-name="Rule" />
          <div className="content-start flex flex-wrap gap-[80px] items-start relative shrink-0 w-full" data-name="Studio Grid">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start max-w-[320px] min-w-px relative" data-name="Left">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] whitespace-nowrap">(02) — Studio</p>
              </div>
              <div className="font-['Fraunces:Light_Italic',sans-serif] font-light italic leading-[0] relative shrink-0 text-[#0a0a0a] text-[40px] tracking-[-1.6px] w-[320px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                <p className="leading-[1.15] mb-0">A small studio, deliberately.</p>
                <p className="leading-[1.15]">Senior hands on every file.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-[320px] relative" data-name="Right">
              <div className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#0a0a0a] text-[72px] tracking-[-3.96px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                <p className="leading-[0.95] mb-0">We build for the</p>
                <p className="leading-[0.95] mb-0">second click — the moment</p>
                <p className="leading-[0.95] mb-0">a product stops performing</p>
                <p className="leading-[0.95]">and starts earning trust.</p>
              </div>
              <div className="content-start flex flex-wrap font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full" data-name="Body">
                <p className="flex-[1_0_0] min-w-[320px] relative">Twelve practitioners under one roof: brand designers, interface designers, a motion lead, two design engineers and a writer. Everyone who sells the work also ships it.</p>
                <p className="flex-[1_0_0] min-w-[320px] relative">We take on eight engagements a year. Projects run ten to forty weeks. We prefer founder-led teams but are bad at saying no to museums.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0a0a] relative shrink-0 w-full" data-name="Stats">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[40px] py-[96px] relative size-full">
          <div className="bg-[rgba(244,241,236,0.14)] h-px shrink-0 w-full" data-name="Rule" />
          <div className="content-start flex flex-wrap gap-[80px] items-start relative shrink-0 w-full" data-name="Stats Grid">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start max-w-[420px] min-w-[320px] relative" data-name="Left">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">(03) — By the numbers</p>
              </div>
              <div className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#f4f1ec] text-[72px] tracking-[-3.96px] w-[min-content]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                <p className="leading-[0.95] mb-0">Nine years of quiet craft —</p>
                <p className="leading-[0.95]">and a few loud moments.</p>
              </div>
            </div>
            <div className="content-start flex flex-[1_0_0] flex-wrap gap-[48px] items-start min-w-[320px] relative whitespace-nowrap" data-name="Metrics List">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-[320px] relative" data-name="Metric">
                <div className="content-stretch flex font-['Fraunces:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0.9] relative shrink-0 text-[72px] tracking-[-3.96px]" data-name="Value Row">
                  <p className="relative shrink-0 text-[#f4f1ec]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    142
                  </p>
                  <p className="relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    .
                  </p>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px]">Products shipped</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-[320px] relative" data-name="Metric">
                <div className="content-stretch flex font-['Fraunces:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0.9] relative shrink-0 text-[72px] tracking-[-3.96px]" data-name="Value Row">
                  <p className="relative shrink-0 text-[#f4f1ec]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    27
                  </p>
                  <p className="relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    x
                  </p>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px]">Awards, quietly filed</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-[320px] relative" data-name="Metric">
                <div className="content-stretch flex font-['Fraunces:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0.9] relative shrink-0 text-[72px] tracking-[-3.96px]" data-name="Value Row">
                  <p className="relative shrink-0 text-[#f4f1ec]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    12
                  </p>
                  <p className="relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    /12
                  </p>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px]">Senior designers</p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-[320px] relative" data-name="Metric">
                <div className="content-stretch flex font-['Fraunces:SemiBold',sans-serif] font-semibold gap-[4px] items-start leading-[0.9] relative shrink-0 text-[72px] tracking-[-3.96px]" data-name="Value Row">
                  <p className="relative shrink-0 text-[#f4f1ec]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    94
                  </p>
                  <p className="relative shrink-0 text-[#d4ff00]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    %
                  </p>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px]">Repeat clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Testimonial">
        <div className="content-stretch flex flex-col items-start px-[40px] py-[96px] relative size-full">
          <div className="content-start flex flex-wrap gap-[24px_64px] items-start relative shrink-0 w-full" data-name="Grid">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[160px] min-w-[120px] relative" data-name="Label">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-[140px]" data-name="Eyebrow">
                <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[14px] min-w-px not-italic relative text-[#0a0a0a] text-[11px] tracking-[2.42px]">Word on the street</p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-[320px] relative" data-name="Main">
              <div className="font-['Fraunces:Light_Italic',sans-serif] font-light italic leading-[0] relative shrink-0 text-[#0a0a0a] text-[56px] tracking-[-2.24px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                <p className="leading-[1.05] mb-0">“FORMA didn’t make us look different.</p>
                <p className="leading-[1.05] mb-0">They made us work different — a</p>
                <p className="leading-[1.05] mb-0">product our team now actually enjoys</p>
                <p className="leading-[1.05]">opening on Monday.”</p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Attribution">
                <div className="bg-[#d4ff00] rounded-[999px] shrink-0 size-[40px]" data-name="Avatar" />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.2] min-w-px not-italic relative text-[14px] whitespace-nowrap" data-name="Person">
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a]">Ines Okafor</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8a8780]">Co-founder, Halide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Card row">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[40px] py-[96px] relative size-full">
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Section Header">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative text-[#0a0a0a]" data-name="Left">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[11px] tracking-[2.42px] w-full">(04) — How we work</p>
              <div className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[102px] tracking-[-5.61px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                <p className="leading-[0.9] mb-0">Four seasons to a shipped</p>
                <p className="leading-[0.9]">product.</p>
              </div>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Card list">
            <div className="bg-[#f4f1ec] flex-[1_0_0] max-w-[640px] min-w-[320px] relative" data-name="Process Step">
              <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.08)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] pb-[24px] pt-[28px] px-[24px] relative size-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] w-full">01 — Immersion</p>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[1.05] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[-1.76px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Sit with the problem.
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full">Stakeholder interviews, analytics teardown, a closet full of sticky notes. Two to four weeks.</p>
              </div>
            </div>
            <div className="bg-[#f4f1ec] flex-[1_0_0] max-w-[640px] min-w-[320px] relative" data-name="Process Step">
              <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.08)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] pb-[24px] pt-[28px] px-[24px] relative size-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] w-full">02 — Direction</p>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[1.05] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[-1.76px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Three futures, one pick.
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full">We ship three honest directions. You kill two. The one that lives gets teeth.</p>
              </div>
            </div>
            <div className="bg-[#f4f1ec] flex-[1_0_0] max-w-[640px] min-w-[320px] relative" data-name="Process Step">
              <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.08)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] pb-[24px] pt-[28px] px-[24px] relative size-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] w-full">03 — Craft</p>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[1.05] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[-1.76px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Build it beautifully.
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full">Systems, components, motion specs, production files. In Figma. In code. In your repo.</p>
              </div>
            </div>
            <div className="bg-[#f4f1ec] flex-[1_0_0] max-w-[640px] min-w-[320px] relative" data-name="Process Step">
              <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.08)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] pb-[24px] pt-[28px] px-[24px] relative size-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] tracking-[2.42px] w-full">04 — Afterlife</p>
                <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[1.05] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[-1.76px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Stay long enough.
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full">Ninety days of retainer follow every launch. We fix what we shipped; we measure what we promised.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0a0a] relative shrink-0 w-full" data-name="Contact teaser">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[40px] pt-[96px] px-[40px] relative size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">(05) — Next</p>
          </div>
          <div className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#f4f1ec] text-[102px] tracking-[-5.61px] w-[min-content]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            <p className="leading-[0.9] mb-0">Let’s build</p>
            <p className="leading-[0.9]">something honest.</p>
          </div>
          <div className="bg-[rgba(244,241,236,0.14)] h-px shrink-0 w-full" data-name="Rule" />
          <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Contact Grid">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Start">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">Start here</p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[24px] w-[min-content]">studio@forma.co</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Tell us about the problem, the timeline, and whether you have a dog. We answer within 48 hours.</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Studios">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">Studios</p>
              </div>
              <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content] whitespace-pre-wrap">
                <p className="leading-[1.5] mb-0">Rua do Almada 72</p>
                <p className="leading-[1.5] mb-0">Lisbon 1100-103</p>
                <p className="leading-[1.5] mb-0">​</p>
                <p className="leading-[1.5] mb-0">68 Jay Street #318</p>
                <p className="leading-[1.5]">Brooklyn, NY 11201</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0a0a] relative shrink-0 w-full" data-name="Footer">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] px-[40px] relative size-full">
          <div className="bg-[rgba(244,241,236,0.14)] h-px shrink-0 w-full" data-name="Rule" />
          <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Contact Grid">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-name="Elsewhere">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">Elsewhere</p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Are.na</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Instagram</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Read.cv</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">LinkedIn</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-name="Elsewhere">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">Elsewhere</p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Are.na</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Instagram</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Read.cv</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">LinkedIn</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-name="Elsewhere">
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">Elsewhere</p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Are.na</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Instagram</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">Read.cv</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f4f1ec] text-[16px] w-[min-content]">LinkedIn</p>
            </div>
          </div>
          <div className="content-stretch flex items-start justify-between pt-[24px] relative shrink-0 w-full" data-name="Meta">
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">{`© 2017–2026 Forma & Co.`}</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">All rights, some reserved.</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Eyebrow">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#f4f1ec] text-[11px] tracking-[2.42px] whitespace-nowrap">Lisbon · 38.72°N</p>
            </div>
          </div>
          <p className="font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[0.86] relative shrink-0 text-[#f4f1ec] text-[196px] tracking-[-10.78px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`FORMA&CO.`}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const flex = {
  centerCenter: "flex items-center justify-center",
  centerStart: "flex items-center justify-start",
  centerBetween: "flex items-center justify-between",
  startStart: "flex items-start justify-start",
  startCenter: "flex items-start justify-center",
};

const padding = {
  all: "sm:px-16 px-6 sm:py-16 py-10",
  x: "sm:px-16 px-6",
  y: "sm:py-16 py-6",
};

const text = {
  text: "mx-auto text-center max-w-3xl py-4 text-base leading-8 lg:text-lg text-secondary",
  heroHead: "font-bold text-4xl md:text-5xl lg:text-7xl text-white",
  heroSub: "text-[#dfd9ff] font-medium text-base md:text-lg lg:text-xl mt-2",
  sectionHead:
    "text-center pt-1 text-4xl font-black text-white md:text-5xl lg:text-6xl",
  sectionSub:
    "text-center text-base font-medium capitalize lg:text-xl text-fav",
};

const component = {
  navbar: `w-full ${padding.x} ${flex.centerCenter} py-5 fixed top-0 z-40`,
  navbarWrapper: `${flex.centerBetween} w-full mx-auto max-w-7xl`,
  ulDesktop: `flex-row items-center justify-center hidden gap-10 list-none md:flex`,
  ulMobile: ` absolute right-0 flex flex-col items-center justify-center gap-5 p-5 list-none rounded-lg black-gradient top-16 md:hidden`,
};
export { styles, flex, padding, text, component };

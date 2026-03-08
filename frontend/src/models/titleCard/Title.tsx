import type { TextProp } from "../../interface/Interface";

export const Title = ({ text }: TextProp) => {
  return (
    <header className="py-10 md:py-16 lg:py-20 bg-[#1e3932]">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1400px] mx-auto text-center">
        <span className="title text-[32px] md:text-[40px] lg:text-[50px] font-bold text-white break-words block">
          {text}
        </span>
      </div>
    </header>
  );
};

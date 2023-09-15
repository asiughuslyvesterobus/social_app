import { useRef, useState } from "react";
import MainLayout from "@/layout/MainLayout";
import { LeftSidebar, RightSidebar, StoryCard } from "@/components";
import { cardData } from "@/data";
import { StoryProp } from "@/type";
import { FiPlus } from "react-icons/fi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Homepage = () => {
  const [slideNavigate, setSlideNavigate] = useState({
    left: false,
    right: true,
  });
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      if (slider.scrollLeft > 0) {
        slider.scrollLeft = slider.scrollLeft - 50;
      } else {
        setSlideNavigate((prev) => ({
          ...prev,
          right: false,
        }));
      }
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      let maxScrollLeft = slider.scrollWidth - slider.clientWidth; // maximum scroll position
      if (slider.scrollLeft < maxScrollLeft) {
        // check if not at the end
        slider.scrollLeft = slider.scrollLeft + 50;
        setSlideNavigate((prev) => ({
          ...prev,
          left: true,
        }));
      } else {
        setSlideNavigate((prev) => ({
          ...prev,
          right: false,
        }));
      }
    }
  };

  return (
    <MainLayout>
      <section className="w-full h-screen overflow-hidden flex items-start justify-start mt-[2px]">
        <div className="lg:flex-[0.8] md:w-[35%] w-full hidden md:flex">
          <LeftSidebar />
        </div>
        <div className="lg:flex-[2] w-full h-screen overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-4">
          <div className="bg-white py-4 w-full relative px-2 flex items-center">
            <span
              onClick={slideLeft}
              className="absolute w-10 h-10 bg-basegray flex items-center justify-center text-white left-0 rounded-full cursor-pointer"
            >
              <BsChevronLeft size={20} className="" />
            </span>
            <div
              ref={sliderRef}
              className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              <div className="relative inline-block cursor-pointer w-[200px] h-full mx-1">
                <div className="relative top-[-57px] w-full h-full flex flex-col items-center justify-center rounded-md cursor-pointer overflow-hidden">
                  <div className="relative group overflow-hidden rounded-tr-md rounded-tl-md h-full">
                    <img
                      src="/img/avatar.png"
                      alt="user_profile"
                      className="w-full h-full mix-blend-darken group-hover:scale-[1.08] transition-all"
                    />
                    <div className="absolute w-full h-full group-hover:bg-black/40 transition-all inset-0"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 bg-basegray w-full text-white pt-6 pb-2 relative">
                    <span className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full absolute -top-5">
                      <FiPlus size={20} />
                    </span>
                    <span>Create story</span>
                  </div>
                </div>
              </div>
              {cardData.map((item: StoryProp, i: number) => (
                <StoryCard key={i} {...item} />
              ))}
            </div>
            <span className="absolute w-10 h-10 bg-basegray flex items-center justify-center text-white right-0 rounded-full cursor-pointer">
              <BsChevronRight size={23} className="ml-1" />
            </span>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="lg:flex-[0.8] hidden lg:flex">
          <RightSidebar />
        </div>
      </section>
    </MainLayout>
  );
};

export default Homepage;

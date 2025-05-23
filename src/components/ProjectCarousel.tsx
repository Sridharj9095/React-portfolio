import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub, FaLink } from "react-icons/fa";

interface Project {
  id: number;
  img: string;
  title: string;
  alt: string;
  github: string;
  live: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, 4000);
    }
  };

  const scrollPrev = useCallback(() => {
    stopAutoplay();
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    stopAutoplay();
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      stopAutoplay();
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    startAutoplay();

    return () => stopAutoplay();
  }, [emblaApi, onSelect]);

  return (
    <>
      <div
        className="relative"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="overflow-hidden py-6" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {projects.map(({ id, img, title, alt, github, live }) => (
              <div
                key={id}
                className="min-w-full sm:min-w-[80%] md:min-w-[60%] lg:min-w-[40%] px-4"
              >
                <div className="bg-white rounded-lg shadow hover:shadow-gray-400 transition-transform hover:scale-105 duration-300 border-b border-gray-200 cursor-pointer">
                  <img
                    src={img}
                    alt={alt}
                    title={title}
                    className="w-full h-46 object-cover rounded-t-lg"
                  />
                  <div className="py-2 px-4 flex justify-center items-center gap-8 bg-blue-50 rounded-b-lg">
                    <h4 className="text-center py-2 font-semibold">{title}</h4>
                    <div className="flex justify-between items-center gap-6 bg-white border border-gray-500 px-4 py-1.5 rounded-full">
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                        className="text-black hover:text-emerald-600 text-2xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                        title="Live Demo"
                        className="text-black hover:text-emerald-600 text-xl"
                      >
                        <FaLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          aria-label="Previous"
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          aria-label="Next"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="flex justify-center mt-1 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-1 rounded transition-colors duration-300 ${
              index === selectedIndex ? "bg-emerald-600" : "bg-gray-300"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </>
  );
}

export default ProjectCarousel;

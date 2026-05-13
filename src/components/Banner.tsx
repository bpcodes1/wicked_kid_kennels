"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Slide } from "@/types";

const SLIDES: Slide[] = [
  {
    image: "/images/wicked_kennels1.jpg",
    subtitle: "Born Exceptional. Bred on Purpose.",
    title: "Wicked Kid Kennels",
  },
  {
    image: "/images/wicked_kennels2.jpg",
    subtitle: "When a Wicked Kid Dog Walks In, Everyone Notices.",
    title: "Wicked Kid Kennels",
  },
  {
    image: "/images/wicked_kennels3.avif",
    subtitle: "Powerful by Nature. Loyal to the Core.",
    title: "Wicked Kid Kennels",
  },
  {
    image: "/images/wicked_kennels4.avif",
    subtitle: "We Don't Follow Trends. We Set Standards.",
    title: "Wicked Kid Kennels",
  },
  {
    image: "/images/wicked_kennels5.jpg",
    subtitle: "The Cane Corso Is All We Do.",
    title: "Wicked Kid Kennels",
  },
  {
    image: "/images/wicked_kennels6.jpg",
    subtitle: "Bloodlines Built to Last Generations.",
    title: "Wicked Kid Kennels",
  },
];

const SLIDE_DURATION = 5000;
const TRANSITION_DURATION = 1500;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Track which slide is "leaving" so we can snap it to hidden after the transition
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  // When a dot is clicked we stop the auto-advance
  const [autoAdvance, setAutoAdvance] = useState(true);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const leavingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobileRef = useRef(false);
  // Keep a ref in sync with activeIndex so the interval closure always reads current value
  const activeIndexRef = useRef(0);

  // Advance to the next (or a specific) slide
  const goToSlide = useCallback((next: number) => {
    const prev = activeIndexRef.current;
    if (prev === next) return;

    setLeavingIndex(prev);
    setActiveIndex(next);
    activeIndexRef.current = next;

    // After the 1500ms fade completes, snap the leaving slide to hidden
    if (leavingTimerRef.current) clearTimeout(leavingTimerRef.current);
    leavingTimerRef.current = setTimeout(() => {
      setLeavingIndex(null);
    }, TRANSITION_DURATION);
  }, []);

  // Auto-advance interval
  useEffect(() => {
    if (!autoAdvance) return;

    intervalRef.current = setInterval(() => {
      const next = (activeIndexRef.current + 1) % SLIDES.length;
      goToSlide(next);
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoAdvance, goToSlide]);

  // Parallax scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileRef.current) return;
      const scrollTop = window.scrollY;
      slideRefs.current.forEach((el) => {
        if (el) {
          el.style.backgroundPosition = `center ${scrollTop * -0.25}px`;
        }
      });
    };

    const handleResize = () => {
      isMobileRef.current = window.innerWidth <= 980;
      if (isMobileRef.current) {
        // Reset background-position on mobile
        slideRefs.current.forEach((el) => {
          if (el) el.style.backgroundPosition = "center center";
        });
      }
    };

    handleResize(); // initialise on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Cleanup leaving timer on unmount
  useEffect(() => {
    return () => {
      if (leavingTimerRef.current) clearTimeout(leavingTimerRef.current);
    };
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      setAutoAdvance(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      goToSlide(index);
    },
    [goToSlide]
  );

  return (
    <>
      {/* Responsive heights injected as a style tag so we can use raw media queries */}
      <style>{`
        .banner-section {
          height: 100vh;
          min-height: 100vh;
        }
        @media screen and (max-width: 1280px) {
          .banner-section {
            height: 75vh;
            min-height: 75vh;
          }
        }
        @media screen and (max-width: 980px) {
          .banner-section {
            height: 50vh;
            min-height: 50vh;
          }
          .banner-slide {
            background-attachment: scroll !important;
          }
        }
        @media screen and (max-width: 736px) {
          .banner-title {
            font-size: 3em !important;
          }
          .banner-inner {
            max-width: 90% !important;
          }
        }
        @media screen and (max-width: 480px) {
          .banner-title {
            font-size: 2.25em !important;
          }
        }
      `}</style>

      <section
        className="banner-section"
        style={{
          position: "relative",
          backgroundColor: "#8a4680",
          overflow: "hidden",
        }}
        aria-label="Hero slideshow"
      >
        {/* Slides */}
        {SLIDES.map((slide, i) => {
          const isActive = i === activeIndex;
          const isLeaving = i === leavingIndex;

          // Active slide: fully visible, on top
          // Leaving slide: still rendered with transition so the fade plays out, then snapped off
          // All others: instantly hidden, no transition
          let opacity: number;
          let visibility: "visible" | "hidden";
          let transition: string;
          let zIndex: number;

          if (isActive) {
            opacity = 1;
            visibility = "visible";
            transition = `opacity ${TRANSITION_DURATION}ms ease, visibility ${TRANSITION_DURATION}ms`;
            zIndex = 1;
          } else if (isLeaving) {
            opacity = 0;
            visibility = "hidden";
            transition = `opacity ${TRANSITION_DURATION}ms ease, visibility ${TRANSITION_DURATION}ms`;
            zIndex = 0;
          } else {
            opacity = 0;
            visibility = "hidden";
            transition = "none";
            zIndex = 0;
          }

          return (
            <div
              key={slide.image}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="banner-slide"
              aria-hidden={!isActive}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${basePath}${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                opacity,
                visibility,
                transition,
                zIndex,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Dark overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "#000",
                  opacity: 0.35,
                  pointerEvents: "none",
                }}
              />

              {/* Text content */}
              <div
                className="banner-inner"
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "inline-block",
                }}
              >
                <p className="banner-subtitle">{slide.subtitle}</p>
                <h3
                  className="banner-title"
                  style={{
                    color: "#FFF",
                    fontSize: "7rem",
                    fontWeight: 300,
                    marginBottom: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {slide.title}
                </h3>
              </div>
            </div>
          );
        })}

        {/* Dot indicators */}
        <ul
          aria-label="Slideshow navigation"
          style={{
            position: "absolute",
            bottom: "1.5em",
            left: 0,
            width: "100%",
            textAlign: "center",
            zIndex: 2,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {SLIDES.map((slide, i) => (
            <li
              key={`dot-${i}`}
              style={{
                display: "inline-block",
                height: "2em",
                width: "2em",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                textIndent: "2em",
              }}
            >
              <button
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.subtitle}`}
                aria-current={i === activeIndex ? "true" : undefined}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Inner dot */}
                <span
                  style={{
                    display: "block",
                    width: i === activeIndex ? "1.6em" : "0.8em",
                    height: "0.8em",
                    borderRadius: "1em",
                    background:
                      i === activeIndex
                        ? "#6b1d2a"
                        : "rgba(255,255,255,0.35)",
                    transition: "background 0.3s ease, width 0.3s ease",
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

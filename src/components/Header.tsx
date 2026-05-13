"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "The Studs", href: "/lords" },
  { label: "The Dams", href: "/ladies" },
  { label: "About Us", href: "/about" },
  { label: "Our Wins", href: "/winning" },
  { label: "The WKK Experience", href: "/experience" },
  { label: "Available", href: "/available" },
  { label: "What Makes Us Different", href: "/unique" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navPanelRef = useRef<HTMLElement>(null);

  // Determine the scroll threshold based on viewport width
  const getScrollThreshold = useCallback(() => {
    const w = window.innerWidth;
    let bannerHeight: number;
    if (w <= 980) {
      bannerHeight = window.innerHeight * 0.5;
    } else if (w <= 1280) {
      bannerHeight = window.innerHeight * 0.75;
    } else {
      bannerHeight = window.innerHeight;
    }
    return bannerHeight - 52;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > getScrollThreshold());
    };

    // Run once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [getScrollThreshold]);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);

  return (
    <>
      {/* ── Header bar ── */}
      <header
        id="header"
        className={cn(
          "w-full text-right z-[10001]",
          scrolled ? "fixed top-0" : "absolute"
        )}
        style={{
          height: "3.25em",
          lineHeight: "3.25em",
          color: "#a6a6a6",
          top: scrolled ? undefined : "1.5em",
          background: scrolled ? "rgba(0,0,0,0.975)" : "transparent",
          borderBottom: scrolled ? "1px solid #6b1d2a" : "none",
          boxShadow: scrolled ? undefined : "none",
          animation: scrolled ? "reveal-header 0.5s ease" : undefined,
        }}
      >
        {/* Logo */}
        <div
          className="absolute left-0 top-0"
          style={{ left: "1.25em" }}
        >
          <a
            href="mailto:info@wickedkidkennels.com"
            style={{
              fontSize: "1.25em",
              color: "#FFF",
              textDecoration: "none",
              display: "inline-block",
              lineHeight: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.65)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFF";
            }}
          >
            <span className="header-label-full">Get In Touch</span>
            <span className="header-label-short" style={{ display: "none" }}>WKK</span>
            <span
              className="header-sub-label"
              style={{
                fontWeight: 400,
                fontSize: "0.8em",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {" "}Wicked Kid Kennels
            </span>
          </a>
        </div>

        {/* Menu button */}
        <nav aria-label="Primary navigation">
          <a
            href="#menu"
            role="button"
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            onClick={(e) => {
              e.preventDefault();
              openMenu();
            }}
            className="inline-block border-l menu-btn"
            style={{
              padding: "0 1.25em 0 0.75em",
              color: "#FFF",
              textDecoration: "none",
              borderLeft: "solid 1px rgba(0,0,0,0.15)",
              transition: "color 0.2s ease-in-out",
              lineHeight: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.65)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFF";
            }}
          >
            <span aria-hidden="true" style={{ marginRight: "0.5em" }}>
              ☰
            </span>
            Menu
          </a>
        </nav>
      </header>

      {/* ── Overlay ── */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className="fixed inset-0 transition-opacity duration-500"
        style={{
          zIndex: 10001,
          background: "rgba(0,0,0,0.5)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* ── Nav panel ── */}
      <nav
        id="nav-panel"
        ref={navPanelRef}
        aria-label="Site navigation"
        aria-hidden={!menuOpen}
        className="fixed right-0 top-0 overflow-y-auto"
        style={{
          zIndex: 10002,
          width: "20rem",
          maxWidth: "80%",
          height: "100%",
          background: "rgba(0,0,0,0.95)",
          borderLeft: "3px solid #6b1d2a",
          transform: menuOpen ? "translateX(0)" : "translateX(20rem)",
          visibility: menuOpen ? "visible" : "hidden",
          boxShadow: menuOpen ? "0 0 1.5rem 0 rgba(0,0,0,0.2)" : "none",
          transition:
            "transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s",
          padding: "3rem 2rem",
        }}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          aria-label="Close navigation menu"
          className="close-btn absolute right-0 top-0 text-right transition-colors duration-200"
          style={{
            width: "7rem",
            height: "3.25rem",
            lineHeight: "3.25rem",
            paddingRight: "1.25rem",
            color: "#999999",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = "#000";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = "#999999";
          }}
        >
          ✕
        </button>

        {/* Nav links */}
        <ul className="list-none" style={{ margin: 0, padding: 0 }}>
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className="nav-link block uppercase no-underline transition-colors duration-200"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "3.5rem",
                  textDecoration: "none",
                  borderTop:
                    i === 0 ? "none" : "solid 1px rgba(255,255,255,0.125)",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.5)";
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Responsive styles ── */}
      <style>{`
        @media screen and (max-width: 980px) {
          #header {
            height: 44px !important;
            line-height: 44px !important;
          }
        }

        @media screen and (max-width: 736px) {
          .menu-btn {
            padding: 0 1em 0 0.5em !important;
          }
          #nav-panel {
            padding: 2.5rem 1.5rem !important;
          }
          #nav-panel .close-btn {
            height: 3.5rem !important;
            line-height: 3.5rem !important;
          }
          .header-label-full {
            display: none;
          }
          .header-label-short {
            display: inline !important;
          }
          .header-sub-label {
            display: none !important;
          }
          .nav-link {
            line-height: 3rem !important;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

import Image from "next/image";
import type { FeatureCardData } from "@/types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface FeatureCardProps {
  card: FeatureCardData;
}

export function FeatureCard({ card }: FeatureCardProps) {
  return (
    <>
      <style>{`
        .feature-card-label {
          position: relative;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.25rem;
          margin: 0 0 0.25rem 0;
          padding: 0 0 0.75rem 0;
          color: #999999;
        }
        .feature-card-label::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 50%;
          height: 1px;
          background: #6b1d2a;
        }
        .feature-card-button {
          display: inline-block;
          background-color: transparent;
          box-shadow: inset 0 0 0 2px #6b1d2a;
          color: #000 !important;
          border-radius: 2px;
          height: 2.85rem;
          line-height: 2.85rem;
          padding: 0 1.5rem;
          text-transform: uppercase;
          font-weight: 300;
          font-size: 1rem;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
          white-space: nowrap;
          border: none;
        }
        .feature-card-button:hover {
          background-color: rgba(107, 29, 42, 0.05);
          box-shadow: inset 0 0 0 2px #6b1d2a;
        }
        .feature-card-content {
          padding: 3rem;
        }
        @media screen and (max-width: 736px) {
          .feature-card-content {
            padding: 1.5rem;
          }
          .feature-card-button {
            display: block;
            width: 100%;
            box-sizing: border-box;
            text-align: center;
            white-space: normal;
            line-height: 1.3;
            height: auto;
            padding: 0.85rem 1rem;
          }
        }
      `}</style>

      <div
        style={{
          background: "#FFF",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(0,0,0,0.15)",
        }}
      >
        {/* Image container */}
        <div style={{ display: "block", width: "100%", margin: 0 }}>
          <Image
            src={`${basePath}${card.image}`}
            alt={card.imageAlt}
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 0 }}
          />
        </div>

        {/* Content */}
        <div className="feature-card-content">
          <header style={{ textAlign: "center" }}>
            <p className="feature-card-label">{card.subtitle}</p>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 400,
                color: "#000",
                marginBottom: "0.75rem",
                lineHeight: 1.5,
              }}
            >
              {card.title}
            </h2>
            <div
              style={{
                width: "2.5rem",
                height: "2px",
                background: "#6b1d2a",
                margin: "0 auto 1.5rem",
              }}
            />
          </header>

          <p
            style={{
              color: "#a6a6a6",
              fontSize: "1rem",
              lineHeight: 1.65,
              margin: "0 0 2rem 0",
              fontWeight: 300,
              whiteSpace: "pre-line",
            }}
          >
            {card.description}
          </p>

          <footer style={{ textAlign: "center" }}>
            <a href={card.buttonHref} className="feature-card-button">
              {card.buttonText}
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

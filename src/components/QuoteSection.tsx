const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function QuoteSection() {
  return (
    <>
      <style>{`
        .quote-section {
          background-color: #000;
          background-image: url('${basePath}/images/bg.jpg');
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
          color: #bfbfbf;
          padding: 6rem 0 4rem 0;
          position: relative;
          overflow: hidden;
        }
        @media screen and (max-width: 980px) {
          .quote-section {
            background-attachment: scroll;
          }
        }
        @media screen and (max-width: 736px) {
          .quote-section {
            padding: 3rem 0 2rem 0;
          }
          .quote-label {
            letter-spacing: 0.08rem;
          }
          .quote-attribution {
            font-size: 1.25rem;
          }
        }
        .quote-label {
          color: #999999;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.25rem;
          margin: 0 0 0.5rem 0;
          padding: 0 0 1rem 0;
          position: relative;
        }
        .quote-label::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 50%;
          height: 1px;
          background-color: #6b1d2a;
        }
      `}</style>

      <section className="quote-section">
        {/* Dark overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.95)",
            opacity: 0.75,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            margin: "0 auto",
            width: "80rem",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          <p className="quote-label">
            &ldquo;Greatness is not accidental. It is the result of intention,
            patience, and refusing to accept anything less.&rdquo;
          </p>
          <h2
            className="quote-attribution"
            style={{
              color: "#ffffff",
              fontSize: "1.75rem",
              fontWeight: 300,
              lineHeight: 1.5,
            }}
          >
            — Wicked Kid Kennels
          </h2>
        </div>
      </section>
    </>
  );
}

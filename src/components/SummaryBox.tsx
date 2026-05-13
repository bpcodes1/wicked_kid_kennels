export function SummaryBox() {
  return (
    <>
      <style>{`
        .summary-box-content {
          padding: 3rem;
        }
        @media screen and (max-width: 736px) {
          .summary-box-content {
            padding: 1.5rem;
          }
          .summary-tagline {
            font-size: 0.75rem;
            letter-spacing: 0;
          }
        }
      `}</style>

      <div
        style={{
          margin: "0 auto",
          width: "80rem",
          maxWidth: "90%",
        }}
      >
        <div
          style={{
            background: "#FFF",
            marginBottom: "2rem",
            border: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <div className="summary-box-content">
            <header style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#bbb",
                  marginBottom: "1.5rem",
                  position: "relative",
                }}
              >
                <strong style={{ fontWeight: 600, color: "#555" }}>
                  Est. 2010
                </strong>{" "}
                -{" "}
                <strong className="summary-tagline" style={{ fontWeight: 600, color: "#555" }}>
                  WICKED KID KENNELS — WHERE THE CANE CORSO STANDARD IS LIVED, NOT JUST QUOTED
                </strong>
              </p>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 300,
                  color: "#555",
                  lineHeight: 1.5,
                  marginBottom: "1rem",
                }}
              >
                <strong style={{ fontWeight: 600 }}>
                  Fifteen Years of Doing It Right.
                </strong>
                <br />
                Wicked Kid Kennels — Fewer Litters. Higher Standards. Better Dogs.
              </h2>
            </header>
            <p
              style={{
                color: "#444",
                fontSize: "1rem",
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              Wicked Kid Kennels is a premier Cane Corso Italiano breeding
              program established in 2010, rooted in structural correctness,
              rock-solid temperament, and uncompromising health standards. Based
              in Houston, Texas, we place puppies with approved families and
              working-dog homes across the country — from Dallas and Austin to
              San Antonio and beyond. Nationwide transport and personal delivery
              are available, and we export to select international destinations
              for the right homes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

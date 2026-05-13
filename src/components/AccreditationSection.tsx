import Image from "next/image";

const logos = [
  {
    src: "/images/CaneCorso_CCAA.jpg",
    alt: "The Cane Corso Association of America (CCAA) is the official American Kennel Club (AKC) Parent Breed Club for the Cane Corso in the United States.",
    href: "http://www.canecorso.org",
  },
  {
    src: "/images/CaneCorso_FCI.jpg",
    alt: "Fédération Cynologique Internationale (English: World Canine Organization) is the largest international federation of kennel clubs.",
    href: "http://www.fci.be/en/",
  },
];

export function AccreditationSection() {
  return (
    <>
      <style>{`
        .accreditation-section {
          padding: 6rem 0 4rem 0;
        }
        @media screen and (max-width: 736px) {
          .accreditation-section {
            padding: 3rem 0 2rem 0;
          }
        }
        .accreditation-label {
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: 300;
          letter-spacing: 0.25rem;
          color: #999999;
          margin: 0 0 0.5rem 0;
          padding: 0 0 1rem 0;
          position: relative;
          text-align: center;
        }
        .accreditation-label::after {
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
        .accreditation-logo-sm {
          width: 16.6667%;
          min-width: 100px;
        }
        .accreditation-logo-lg {
          width: 33.3333%;
          min-width: 180px;
        }
        @media screen and (max-width: 736px) {
          .accreditation-logo-sm {
            width: 40%;
            min-width: 80px;
          }
          .accreditation-logo-lg {
            width: 66.6667%;
            min-width: 140px;
          }
        }
      `}</style>

      <section
        className="accreditation-section"
        style={{ backgroundColor: "#f4f1ee" }}
      >
        <div
          style={{
            margin: "0 auto",
            width: "80rem",
            maxWidth: "90%",
          }}
        >
          {/* Header */}
          <header style={{ textAlign: "center" }}>
            <p className="accreditation-label">CCAA · FCI</p>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 300,
                color: "#000",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Health Tested. Registry Approved. Zero Shortcuts.
            </h2>
          </header>

          {/* Logos row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {logos.map((logo) => (
              <a
                key={logo.src}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="accreditation-logo-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={200}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </a>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

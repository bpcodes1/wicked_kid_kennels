import type { FeatureCardData } from "@/types";
import { FeatureCard } from "./FeatureCard";

const CARDS: FeatureCardData[] = [
  {
    image: "/images/the_studs.avif",
    imageAlt: "Wicked Kid Kennels Stud Dogs",
    subtitle: "The Backbone of Our Program",
    title: "The Studs",
    description:
      "Peak structure. Dominant presence. Our males define what the Wicked Kid program stands for — built to the standard, health-tested, and impossible to overlook. These are not just good-looking dogs. They are proven producers.\nDiscover the males driving our program.",
    buttonText: "View Our Males",
    buttonHref: "#",
  },
  {
    image: "/images/the_dams.avif",
    imageAlt: "Wicked Kid Kennels Females",
    subtitle: "The Heart of Every Litter",
    title: "The Dams",
    description:
      "Every great litter starts with a great mother. Our females carry the depth of pedigree, the mothering instinct, and the refined breed type that makes a Wicked Kid dog unmistakable. Toughness and elegance — never one without the other.\nMeet the dams behind our champions.",
    buttonText: "View Our Females",
    buttonHref: "#",
  },
  {
    image: "/images/about_us.jpg",
    imageAlt: "About Wicked Kid Kennels — Our Story & Team",
    subtitle: "Family-Run. Purpose-Driven.",
    title: "About Us",
    description:
      "Wicked Kid Kennels didn't start as a business — it started as an obsession with getting it right. We are a family-run program rooted in the belief that the Cane Corso deserves more than what most breeders offer. Every litter, every pairing, every placement is a decision we stand behind completely.",
    buttonText: "Our Story",
    buttonHref: "#",
  },
  {
    image: "/images/CastleGuard_CaneCorso_WeWin.jpg",
    imageAlt: "Wicked Kid Kennels — Championship Titles and Wins",
    subtitle: "Titles Across the Board",
    title: "We Win!",
    description:
      "Our dogs don't just look the part — they earn titles to prove it. From AKC confirmation rings to working sport venues, Wicked Kid dogs compete and win across multiple disciplines. Multiple AKC Champions, nationally ranked Corsos, and dogs dominating internationally. We show up, and we win.",
    buttonText: "View Our Record",
    buttonHref: "#",
  },
  {
    image: "/images/wwk_experience.avif",
    imageAlt: "The Wicked Kid Kennels Puppy Experience",
    subtitle: "Structure from Day One",
    title: "The WKK Experience",
    description:
      "The first eight weeks shape everything. At Wicked Kid Kennels, every litter goes through structured neurological stimulation, early scent work, and daily hands-on socialization from birth. When a Wicked Kid puppy leaves us, the foundation is already built. Our clients don't just get a puppy — they get a head start.",
    buttonText: "The WKK Raising Process",
    buttonHref: "#",
  },
  {
    image: "/images/CastleGuard_CaneCorso_Available.jpg",
    imageAlt: "Wicked Kid Kennels — Puppies Available for Sale",
    subtitle: "Limited. Vetted. Always Worth the Wait.",
    title: "Available",
    description:
      "We run a limited program by design — quality over quantity, every time. Our puppies go to vetted homes that meet our placement standards. If a Wicked Kid dog is on your list, reach out now. Waitlists fill fast and we don't compromise on where our dogs go.\nExplore current availability and how to get started.",
    buttonText: "Check Availability",
    buttonHref: "#",
  },
  {
    image: "/images/CastleGuard_CaneCorso_Unique.jpg",
    imageAlt: "What Makes Wicked Kid Kennels Different",
    subtitle: "One Standard. Exceptional.",
    title: "What Makes Us Different",
    description:
      "We are not a volume breeder. We are not trying to be everything to everyone. Wicked Kid Kennels is a deliberate, focused breeding program with a single standard — exceptional. From genetic health testing and lineage research to lifetime breeder support, we are invested in every dog we produce.",
    buttonText: "What Sets Us Apart",
    buttonHref: "#",
  },
  {
    image: "/images/breed_education.avif",
    imageAlt: "Cane Corso Breed Education from Wicked Kid Kennels",
    subtitle: "The Corso Lifestyle",
    title: "Breed Education",
    description:
      "The Cane Corso is not a casual commitment — and we wouldn't have it any other way. Great owners start with great knowledge. Our breed education resources cover temperament, structure, health history, and the real day-to-day of life with a Corso. Resources coming soon.",
    buttonText: "Breed Education — Coming Soon",
    buttonHref: "#",
  },
];

export function CardGrid() {
  return (
    <>
      <style>{`
        .card-grid-section {
          padding: 6rem 0 4rem 0;
        }
        @media screen and (max-width: 736px) {
          .card-grid-section {
            padding: 3rem 0 2rem 0;
          }
        }
        .card-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          width: 100%;
          margin-bottom: 2.5rem;
        }
        .card-grid-item {
          width: 50%;
          padding: 2rem;
          box-sizing: border-box;
        }
        /* First two items: no top padding */
        .card-grid-item:nth-child(1),
        .card-grid-item:nth-child(2) {
          padding-top: 0;
        }
        /* Last two items: no bottom padding */
        .card-grid-item:nth-last-child(1),
        .card-grid-item:nth-last-child(2) {
          padding-bottom: 0;
        }
        /* Odd items (1st, 3rd, 5th…): no left padding */
        .card-grid-item:nth-child(odd) {
          padding-left: 0;
        }
        /* Even items (2nd, 4th, 6th…): no right padding */
        .card-grid-item:nth-child(even) {
          padding-right: 0;
        }
        @media screen and (max-width: 980px) {
          .card-grid-item {
            width: 100%;
            padding: 1rem;
          }
          /* Reset nth-child overrides on mobile */
          .card-grid-item:nth-child(1),
          .card-grid-item:nth-child(2) {
            padding-top: 1rem;
          }
          .card-grid-item:nth-last-child(1),
          .card-grid-item:nth-last-child(2) {
            padding-bottom: 1rem;
          }
          .card-grid-item:nth-child(odd) {
            padding-left: 1rem;
          }
          .card-grid-item:nth-child(even) {
            padding-right: 1rem;
          }
          /* First item: no top padding on mobile */
          .card-grid-item:nth-child(1) {
            padding-top: 0;
          }
          /* Last item: no bottom padding on mobile */
          .card-grid-item:nth-last-child(1) {
            padding-bottom: 0;
          }
        }
      `}</style>

      <section
        id="one"
        className="card-grid-section"
        style={{ backgroundColor: "#f4f1ee" }}
      >
        <div
          style={{
            margin: "0 auto",
            width: "80rem",
            maxWidth: "90%",
          }}
        >
          <div className="card-grid">
            {CARDS.map((card) => (
              <div key={card.title} className="card-grid-item">
                <FeatureCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

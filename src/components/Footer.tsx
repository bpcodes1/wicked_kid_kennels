import { Mail } from "lucide-react";

// Inline SVG brand icons — lucide-react does not ship Facebook/Instagram/Twitter
function FacebookIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "mailto:info@wickedkidkennels.com",
    label: "Email Wicked Kid Kennels",
    icon: Mail,
  },
  {
    href: "https://www.facebook.com",
    label: "Wicked Kid Kennels on Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com",
    label: "Wicked Kid Kennels on Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://twitter.com",
    label: "Wicked Kid Kennels on Twitter",
    icon: TwitterIcon,
  },
] as const;

export function Footer() {
  return (
    <>
      <style>{`
        #footer {
          background: #000;
          padding: 4rem 0 2rem 0;
          text-align: center;
        }
        @media screen and (max-width: 736px) {
          #footer {
            padding: 3rem 0 1rem 0;
          }
        }
        #footer .icons {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }
        #footer .icons li {
          display: inline-block;
          padding: 0 1rem 0 0;
        }
        #footer .icons li:last-child {
          padding-right: 0;
        }
        #footer a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }
        #footer a:hover {
          color: #FFF;
        }
        #footer .copyright {
          color: #bbb;
          font-size: 0.9rem;
          margin: 0 0 2rem 0;
          text-align: center;
        }
      `}</style>

      <footer id="footer">
        <div
          style={{
            margin: "0 auto",
            maxWidth: "80rem",
            padding: "0 2rem",
          }}
        >
          {/* Social icons */}
          <ul className="icons">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "2rem",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <Icon size={32} />
                </a>
              </li>
            ))}
          </ul>

          {/* Address / phone */}
          <p className="copyright">
            &bull; Wicked Kid Kennels &bull; Houston, Texas &bull;
            <br />
            &bull; eMail:{" "}
            <a href="mailto:info@wickedkidkennels.com">
              info@wickedkidkennels.com
            </a>{" "}
            &bull; Phone: (000) 000-0000 &bull;
          </p>

          {/* Copyright */}
          <p className="copyright">
            Copyright &copy; Wicked Kid Kennels. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

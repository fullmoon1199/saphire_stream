// Footer.jsx
import React from "react";
import sst_logo_dark2 from "../assets/icon/sst_logo_dark2.png";

const CONTAINER = "mx-auto max-w-7xl px-6";

const SocialIcon = ({ label, href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-600/30 text-gray-200 hover:bg-gray-500/40 hover:text-white transition"
  >
    {children}
  </a>
);

const menuItems  = [
  { key: "service", label: "Service", items: ["AI", "IoT", "Automotive", "Cloud &Telecom"] },
  { key: "company", label: "Company", items: ["About Us", "CEO", "Newsroom"] },
  { key: "support", label: "Support", items: ["Contact Us"] },
  { key: "store", label: "Store", items: ["Rubik Pi"] },
];
const Footer = ({ menus = menuItems , email = "business@sapphirestreamtech.com" }) => {
  const year = new Date().getFullYear();
  const colCount = Math.max(menus.length, 1);

  return (
    <footer className="w-full bg-[#1F232A] text-gray-300">
      <section className="bg-white text-gray-800">
        <div className={`${CONTAINER} py-12`}>
          <div
            className="grid gap-10 md:gap-12"
            style={{ gridTemplateColumns: `repeat(${Math.min(colCount, menuItems.length)}, minmax(0, 1fr))` }}
          >
            {menus.map((menu, idx) => (
              <div
                key={menu.key}
                className={[
                  "flex flex-col gap-3",
                  idx !== 0 ? "md:border-l md:border-gray-200 md:pl-10" : "",
                ].join(" ")}
              >
                <h3 className="font-semibold text-gray-900">{toTitle(menu.label)}</h3>
                <ul className="flex flex-col gap-2 text-sm text-gray-600">
                  {menu.items?.map((item) => {
                    const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                    return (
                      <li key={item}>
                        <a
                          href={href}
                          className="hover:text-[#0D71D3] transition-colors"
                        >
                          {toTitle(item.replace("&", " & "))}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`${CONTAINER} py-10`}>
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col gap-5">
            <div className="h-8">
              <img
                src={sst_logo_dark2}
                alt="SST - Sapphire Stream Technology"
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="text-sm md:text-base">
              <span className="font-semibold text-white">E-mail</span>
              <span className="mx-2 text-gray-400">|</span>
              <a
                href={`mailto:${email}`}
                className="hover:text-white underline-offset-2 hover:underline"
              >
                {email}
              </a>
            </div>

            <p className="text-sm text-gray-400">
              Copyright © {year} Sapphire Stream Technology. All Rights Reserved.
            </p>
          </div>

          {/* Right: SNS 아이콘 */}
          <div className="flex items-center gap-3 mt-1 ml-auto">
            {/* LinkedIn */}
            <SocialIcon label="LinkedIn" href="https://www.linkedin.com/">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5V16c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24h-5V8z"/>
              </svg>
            </SocialIcon>

            {/* YouTube */}
            <SocialIcon label="YouTube" href="https://www.youtube.com/">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8a3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z"/>
              </svg>
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon label="Instagram" href="https://www.instagram.com/">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.4 1 .4.4.7.9 1 1.4.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.4-.4.4-.9.7-1.4 1-.5.2-1.2.4-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.4-1-.4-.4-.7-.9-1-1.4-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.4.4-.4.9-.7 1.4-1 .5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.3-.4.2-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.3 1.7.2.4.3.6.6.9.3.3.5.5.9.6.3.1.8.3 1.7.3 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.3.4-.2.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.2-.8.3-1.7.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.3-1.7-.2-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.8-.3-1.7-.3-1.2-.1-1.5-.1-4.7-.1zm0 3.3a6.7 6.7 0 1 1 0 13.4 6.7 6.7 0 0 1 0-13.4zm0 2a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm5.4-2.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
              </svg>
            </SocialIcon>

            {/* Facebook */}
            <SocialIcon label="Facebook" href="https://www.facebook.com/">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17 5.55 21.12 10.24 22v-7.02H7.9v-2.9h2.34V9.79c0-2.3 1.37-3.57 3.46-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.41v1.7h2.5l-.4 2.9h-2.1V22c4.69-.88 8.38-5 8.38-9.93z"/>
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

function toTitle(str = "") {
  return str
    .trim()
    .replace(/\s*&\s*/g, " &")
    .replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1));
}

export default Footer;

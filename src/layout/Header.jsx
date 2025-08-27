// Header.jsx
import React, { useRef, useState, useEffect } from "react";
import sst_logo_dark2 from "../assets/icon/sst_logo_dark2.png";
import sst_logo_white from "../assets/icon/sst_logo_white.png";
import store_icon from "../assets/icon/store_icon.svg";

const menuItems = [
  { key: "service", label: "Service", items: ["AI", "IoT", "Automotive", "Cloud&telecom"] },
  { key: "company", label: "Company", items: ["About Us", "CEO", "Newsroom"] },
  { key: "support", label: "Support", items: ["Contact Us"] },
];

const CONTAINER = "mx-auto w-full px-[40px]";
const PRIMARY_NAV_WIDTH = "w-[500px]";
const ITEM_WIDTH = "w-[140px]";

/** 2차 드롭다운 */
const SecondaryHeaderBarAll = ({
  open,
  activeKey,
  menus,
  onMouseEnter,
  onMouseLeave,
  onActivateKey,
  solid, // 배경 상태 공유
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute inset-x-0 top-full transition-[opacity,transform] duration-150 ease-out
        ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}
      `}
      aria-hidden={!open}
    >
      <div className={`w-full ${solid ? "bg-white" : "bg-white"} border-t border-b border-gray-200 shadow-sm`}>
        <div className={CONTAINER}>
          <div className={`${PRIMARY_NAV_WIDTH} mx-auto`}>
            <nav
              role="navigation"
              aria-label="secondary"
              className="grid"
              style={{ gridTemplateColumns: `repeat(${menus.length}, minmax(0, 1fr))` }}
            >
              {menus.map(({ key, label, items }) => (
                <div
                  key={key}
                  className="flex flex-col items-center gap-3"
                  onMouseEnter={() => onActivateKey?.(key)}
                >
                  <div className={`flex flex-col py-4 gap-2 text-center hover:bg-[#f0f6fb] h-full ${ITEM_WIDTH}`}>
                    {items.map((it) => {
                      const href = `/${it.toLowerCase().replace(/\s+/g, "-")}`;
                      return (
                        <a
                          key={it}
                          href={href}
                          role="menuitem"
                          className="px-2 py-1.5 rounded-md text-gray-700 hover:font-semibold hover:underline hover:underline-offset-2 hover:decoration-1 hover:decoration-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                          onMouseEnter={() => onActivateKey?.(key)}
                          onFocus={() => onActivateKey?.(key)}
                        >
                          {it}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

/** 스토어 버튼 */
const Store_Icon = ({ solid }) => (
  <a
    href="/store"
    title="Store"
    className={`group flex items-center justify-center w-[160px] h-[51px] rounded-[100px] gap-2 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                transition-all duration-300
                ${solid ? "border text-gray-800" : "border border-white text-white"}
                hover:bg-[#0D71D3] hover:text-white hover:shadow-[0_0_20px_0_#0D71D399] hover:backdrop-blur-[30px] hover:border-transparent`}
  >
    <img
      src={store_icon}
      alt="Store"
      className={`w-5 h-5 transition duration-200 filter ${solid ? "invert-0" : "invert"} group-hover:invert`}
    />
    <span>Store</span>
  </a>
);

const Header = () => {
  const [openKey, setOpenKey] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);      // 상단 여부
  // const [isHovering, setIsHovering] = useState(false); // 헤더 hover
  const hideTimer = useRef(null);

  // 스크롤 감지: 최상단(transparent) <-> 하단(white)
  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key) => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setOpenKey(key);
  };

  const scheduleClose = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setOpenKey(null);
      hideTimer.current = null;
    }, 100);
  };

  const cancelClose = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const closeNow = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setOpenKey(null);
    hideTimer.current = null;
  };

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeNow();
    }
  };

  const isOpen = openKey !== null;

  // solid 상태: 상단이 아니거나 / 메뉴 열림
  // const solid = !isAtTop || isHovering || isOpen;
  const solid = !isAtTop || isOpen;

  const baseLinkColor = solid ? "text-gray-700" : "text-white";
  const hoverLinkColor = "hover:text-[#0D71D3]";

  return (
    <header
      className={`sticky top-0 z-[200] w-full transition-colors duration-300
                  ${solid ? "bg-white backdrop-blur border-b border-gray-200 shadow-sm" : "bg-transparent border-b-0"}
                 `}
      onKeyDown={handleEsc}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={CONTAINER}>
        <div className="flex h-[96px] items-center justify-between">
          {/* Left: Logo */}
          <a
            href="/"
            title="Home"
            onMouseEnter={closeNow}
            className="flex items-center w-full max-w-[160px]"
          >
            <img className="h-[55px] w-auto" src={solid ? sst_logo_dark2 : sst_logo_white} alt="Company Logo" />
          </a>

          {/* Center: 1차 네비 */}
          <div
            className={`${PRIMARY_NAV_WIDTH} grid items-center`}
            style={{ gridTemplateColumns: `repeat(${menuItems.length}, minmax(0, 1fr))` }}
          >
            {menuItems.map(({ key, label }) => (
              <div
                key={key}
                className="relative flex flex-col items-center"
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openKey === key}
                  aria-controls="secondary-all"
                  onFocus={() => openMenu(key)}
                  className={`group inline-flex items-center justify-center h-[96px] ${ITEM_WIDTH} text-base font-bold text-[16px] transition-colors
                              ${baseLinkColor} ${hoverLinkColor}
                              ${openKey === key ? "text-[#0D71D3] border-b-2 border-[#0D71D3]" : ""}
                             `}
                >
                  <span className="capitalize">{label}</span>
                </button>
              </div>
            ))}
          </div>

          <Store_Icon solid={solid} />
        </div>
      </div>

      {/* 2차 헤더 */}
      <SecondaryHeaderBarAll
        open={isOpen}
        activeKey={openKey}
        menus={menuItems}
        onMouseEnter={cancelClose}
        onMouseLeave={closeNow}
        onActivateKey={openMenu}
        solid={solid}
      />
    </header>
  );
};

export default Header;

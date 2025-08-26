// Header.jsx
import React, { useRef, useState } from "react";
import sst_logo_dark2 from "../assets/icon/sst_logo_dark2.png";
import store_icon from "../assets/icon/store_icon.svg";

const menuItems = [
  { key: "service", label: "Service", items: ["AI", "IoT", "Automotive", "Cloud&telecom"] },
  { key: "company", label: "Company", items: ["About Us", "CEO", "Newsroom"] },
  { key: "support", label: "Support", items: ["Contact Us"] },
];

const CONTAINER = "mx-auto w-full px-[40px]";
const PRIMARY_NAV_WIDTH = "w-[500px]";
const ITEM_WIDTH = "w-[140px]"

const SecondaryHeaderBarAll = ({
  open,
  activeKey,
  menus,
  onMouseEnter,
  onMouseLeave,
  onActivateKey,
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
      <div className="w-full bg-white border-t border-b border-gray-200 shadow-sm">
        <div className={CONTAINER}>
          {/* 2차도 1차와 동일한 너비/그리드 컬럼 사용 */}
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
                          className="px-2 py-1.5 rounded-md text-gray-700 hover:font-semibold hover:underline hover:underline-offset-2 hover: decoration-1 hover:decoration-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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

const Store_Icon = ({ theme }) => (
  <a
    href="/store"
    title="Store"
    className={`group flex items-center justify-center w-[160px] h-[51px] border rounded-[100px] gap-2 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                transition-all duration-300
                hover:bg-[#0D71D3] hover:text-white hover:shadow-[0_0_20px_0_#0D71D399] hover:backdrop-blur-[30px] hover:border-none`}
  >
    <img
      src={store_icon}
      alt="Store"
      className="w-5 h-5 transition duration-200 filter invert-0 group-hover:invert"
    />
    <span>Store</span>
  </a>
);



const Header = () => {
  const [openKey, setOpenKey] = useState(null);
  const hideTimer = useRef(null);

  const openMenu = (key) => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setOpenKey(key);
  };

  const scheduleClose = () => {
    // 짧은 지연으로 1차→2차로 이동 시 깜빡임 방지
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

  return (
    <header
      className="sticky top-0 z-[200] w-full bg-white backdrop-blur supports-[backdrop-filter]:bg-white border-b relative"
      onKeyDown={handleEsc}
    >
      <div className={CONTAINER}>
        <div className="flex h-[96px] items-center justify-between">
          {/* Left: Logo (여기로 들어오면 닫기) */}
          <a
            href="/"
            title="Home"
            onMouseEnter={closeNow}
            className="flex items-center w-full max-w-[160px]"
          >
            <img className="h-[55px] w-auto" src={sst_logo_dark2} alt="Company Logo" />
          </a>

          {/* Center: 1차 네비 → 동일한 그리드 시스템/너비 */}
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
                    ${openKey === key ? "text-[#0D71D3] border-b-2 border-[#0D71D3]" : "text-gray-600 hover:text-[#0D71D3]"}
                  `}
                >
                  <span className="capitalize">{label}</span>
                </button>
              </div>
            ))}
          </div>

          <Store_Icon
            theme={null} />
        </div>
      </div>

      {/* 2차 헤더: 진입 시 닫기 취소 */}
      <SecondaryHeaderBarAll
        open={isOpen}
        activeKey={openKey}
        menus={menuItems}
        onMouseEnter={cancelClose}
        onMouseLeave={closeNow}
        onActivateKey={openMenu}
      />
    </header>
  );
};

export default Header;

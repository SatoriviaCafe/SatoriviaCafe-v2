"use client";

import { useEffect, useState } from "react";
import {
  Coffee,
  Menu,
  ShoppingBag,
  ShoppingCart,
  Star,
  X,
  ChevronDown,
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function navigateToPage(href: string) {
  if (href.startsWith("/")) {
    window.location.href = href;
  } else {
    scrollToId(href);
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".navigation-dropdown")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const productCategories = [
    {
      name: "单品咖啡豆（敬请期待）",
      href: "/products/beans",
      description: "精选优质咖啡豆，来自世界各地",
      image: "/logo.png",
    },
    {
      name: "滤挂咖啡（敬请期待）",
      href: "/products/drip",
      description: "方便的滤挂式咖啡，随时享受香醇",
      image: "/logo.png",
    },
  ];

  const navItems = [
    { name: "首页", href: "hero", icon: Coffee },
    { name: "品牌故事", href: "about", icon: Star },
    {
      name: "产品",
      href: "products",
      icon: ShoppingBag,
      hasDropdown: true,
      dropdownItems: productCategories,
    },
    {
      name: "在线购买",
      href: "https://shop595547896.world.taobao.com/?weexShopTab=allitemsbar&weexShopSubTab=allitems&shopFrameworkType=native&sourceType=other&suid=68e37720-8a56-4518-b5bc-1e7a99b536f5&shareUniqueId=32573923041&ut_sk=1.YkAYFBf32N0DAAn7l9yAR9l9_21646297_1753895447242.Copy.shop&un=b33a0c658f11578f90a08fbf6c1fdbe3&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&sp_tk=RzRRWjRVc29CVEk%3D&cpp=1&shareurl=true&short_name=h.hneJJZnhP4z8QoE&bxsign=scdJ5_TPJBYiacWKlBUoHrKMSbx_PA7vw4x9xlQWA9GiYC33u2XXChHSXvYxP4NSt5U6zrzJU8-Zx3qj69Z2KD6lcbu_bXQfgofbeO-mcYmvUsuBaDZ_jZDYKsvx7kLId_p&app=chrome",
      icon: ShoppingCart,
    },
  ];

  const handleDropdownToggle = (itemName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownItemClick = (href: string) => {
    navigateToPage(href);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-black/95 shadow-2xl shadow-black/20 backdrop-blur-xl" : "bg-black/60 backdrop-blur-md"}`}
      >
        <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="group flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Satorivia Cafe Logo"
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-xl font-bold tracking-wide text-transparent lg:text-2xl">
                  Satorivia Cafe
                </h1>
                <span className="text-xs font-light tracking-widest text-amber-300/80">
                  星辰咖啡
                </span>
              </div>
            </a>

            <div className="ml-auto hidden items-center space-x-1 pr-4 md:flex">
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const isExternal = item.href.startsWith("https");
                  const isActive = activeSection === item.href;
                  const isDropdownOpen = activeDropdown === item.name;

                  const commonClasses = `group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive || isDropdownOpen
                      ? "bg-white/10 text-amber-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`;

                  if (isExternal) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonClasses}
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                          <span>{item.name}</span>
                        </div>
                      </a>
                    );
                  }

                  if (item.hasDropdown && item.dropdownItems) {
                    return (
                      <div
                        key={item.name}
                        className="navigation-dropdown relative"
                      >
                        <button
                          onClick={(e) => handleDropdownToggle(item.name, e)}
                          className={commonClasses}
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`h-3 w-3 transition-transform duration-200 ${
                                isDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          <div
                            className={`absolute bottom-0 left-1/2 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ${
                              isActive || isDropdownOpen
                                ? "w-8 -translate-x-1/2 opacity-100"
                                : "w-0 -translate-x-1/2 opacity-0 group-hover:w-6 group-hover:opacity-60"
                            }`}
                          ></div>
                        </button>

                        <div
                          className={`absolute left-1/2 top-full z-50 mt-2 w-[600px] -translate-x-1/2 transform transition-all duration-200 ${
                            isDropdownOpen
                              ? "visible opacity-100 translate-y-0"
                              : "invisible opacity-0 -translate-y-2"
                          }`}
                        >
                          <div className="rounded-lg border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl overflow-hidden">
                            <div className="flex">
                              <button
                                onClick={() => {
                                  handleDropdownItemClick("products");
                                }}
                                className="w-1/3 bg-gradient-to-br from-amber-900/20 to-amber-800/10 p-6 flex flex-col justify-center items-center hover:from-amber-900/30 hover:to-amber-800/20 transition-all duration-300 group/showcase"
                              >
                                <div className="w-full h-32 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-lg flex items-center justify-center mb-4">
                                  <img
                                    src="/logo.png"
                                    alt="Satorivia Cafe Logo"
                                    className="h-16 w-16 object-contain"
                                  />
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-2">
                                  Satorivia Cafe
                                </h3>
                                <p className="text-gray-300 text-sm text-center">
                                  小行星系列
                                </p>
                              </button>

                              <div className="w-2/3 p-4">
                                <div className="grid gap-3">
                                  {item.dropdownItems.map((dropdownItem) => (
                                    <button
                                      key={dropdownItem.name}
                                      onClick={() =>
                                        handleDropdownItemClick(
                                          dropdownItem.href
                                        )
                                      }
                                      className="group flex items-start space-x-3 rounded-md p-3 leading-none text-left outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                                    >
                                      {/* Product image placeholder */}
                                      {/* <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/10 rounded-md flex items-center justify-center">
                                        <img
                                          src={dropdownItem.image}
                                          alt={dropdownItem.name}
                                          className="h-8 w-8 object-contain"
                                        />
                                      </div> */}

                                      <div className="flex-1 space-y-1">
                                        <div className="text-sm font-medium leading-none text-gray-300 group-hover:text-amber-400">
                                          {dropdownItem.name}
                                        </div>
                                        <p className="text-sm leading-snug text-gray-400">
                                          {dropdownItem.description}
                                        </p>
                                      </div>
                                    </button>
                                  ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/10">
                                  <a
                                    href="/products"
                                    className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-amber-600/20 hover:bg-amber-600/30 rounded-md transition-colors text-amber-400 hover:text-amber-300"
                                  >
                                    <span className="text-sm font-medium">
                                      查看所有產品
                                    </span>
                                    <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        navigateToPage(item.href);
                        setActiveSection(item.href);
                      }}
                      className={commonClasses}
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                        <span>{item.name}</span>
                      </div>
                      <div
                        className={`absolute bottom-0 left-1/2 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ${
                          isActive
                            ? "w-8 -translate-x-1/2 opacity-100"
                            : "w-0 -translate-x-1/2 opacity-0 group-hover:w-6 group-hover:opacity-60"
                        }`}
                      ></div>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="hidden md:block"></div>

            <button
              className="rounded-full p-2 text-white transition-all duration-300 hover:bg-white/10 hover:text-amber-400 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 rotate-90 transition-transform" />
              ) : (
                <Menu className="h-6 w-6 transition-transform hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl">
            <div className="space-y-2 px-6 py-4">
              {navItems.map((item, index) => {
                const isExternal = item.href.startsWith("https");

                if (isExternal) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                      <item.icon className="h-5 w-5 text-amber-400 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  );
                }

                if (item.hasDropdown && item.dropdownItems) {
                  return (
                    <div key={index} className="space-y-1">
                      <button
                        onClick={() => {
                          navigateToPage(item.href);
                          setIsOpen(false);
                        }}
                        className="group flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                      >
                        <item.icon className="h-5 w-5 text-amber-400 transition-transform group-hover:scale-110" />
                        <span className="font-medium">{item.name}</span>
                      </button>
                      <div className="ml-8 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => {
                              navigateToPage(dropdownItem.href);
                              setIsOpen(false);
                            }}
                            className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-amber-400"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={index}
                    onClick={() => {
                      navigateToPage(item.href);
                      setIsOpen(false);
                    }}
                    className="group flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <item.icon className="h-5 w-5 text-amber-400 transition-transform group-hover:scale-110" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

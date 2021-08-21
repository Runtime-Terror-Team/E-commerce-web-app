// import React, { useRef, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// import logo from "../assets/images/Logo-2.png";

// const mainNav = [
//   {
//     display: "Home",
//     path: "/",
//   },
//   {
//     display: "Men",
//     path: "/catalog",
//   },
//   {
//     display: "Women",
//     path: "/accessories",
//   },
//   {
//     display: "Kids",
//     path: "/",
//   },
//   {
//     display: "Contact us",
//     path: "/contact",
//   },
// ];
// // return (
// const Header = () => {
//   const { pathname } = useLocation();
//   const activeNav = mainNav.findIndex((e) => e.path === pathname);

//   const headerRef = useRef(null);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("shrink");
//       } else {
//         headerRef.current.classList.remove("shrink");
//       }
//     });
//     return () => {
//       window.removeEventListener("scroll");

//   };

//   const menuLeft = useRef(null);

//   const menuToggle = () => menuLeft.current.classList.toggle("active");
//   return (
//   <div className="header" ref={headerRef}>
//     <div className="container">
//       <div className="header__logo">
//         <Link to="/">
//           <img src={logo} alt="" />
//         </Link>
//       </div>
//       <div className="header__menu">
//         <div className="header__menu__mobile-toggle" onClick={menuToggle}>
//           <i className="bx bx-menu-alt-left"></i>
//         </div>
//         <div className="header__menu__left" ref={menuLeft}>
//           <div className="header__menu__left__close" onClick={menuToggle}>
//             <i className="bx bx-chevron-left"></i>
//           </div>
//           {mainNav.map((item, index) => (
//             <div
//               key={index}
//               className={`header__menu__item header__menu__left__item ${
//                 index === activeNav ? "active" : ""
//               }`}
//               onClick={menuToggle}
//             >
//               <Link to={item.path}>
//                 <span>{item.display}</span>
//               </Link>
//             </div>
//           ))}
//         </div>
//         <div className="header__menu__right">
//           <div className="header__menu__item header__menu__right__item">
//             <i className="bx bx-search"></i>
//           </div>
//           <div className="header__menu__item header__menu__right__item">
//             <i class="bx bx-heart"></i>
//           </div>
//           <div className="header__menu__item header__menu__right__item">
//             <Link to="/cart">
//               <i className="bx bx-shopping-bag"></i>
//             </Link>
//           </div>
//           <div className="header__menu__item header__menu__right__item">
//             <i className="bx bx-user"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

// <header class="header">
//   <div class="header__logo-container">
//     <a
//       href="https://abubakersaeed.com"
//       target="_blank"
//       class="header__logo"
//     ></a>
//   </div>
//   <div class="header__links">
//     <a href="#" class="header__link">
//       New-In
//     </a>
//     <a href="#" class="header__link">
//       Decorated
//     </a>
//     <a href="#" class="header__link">
//       Customize
//     </a>
//     <a href="#" class="header__link">
//       Sale
//     </a>
//   </div>
//   <div class="header__search-container">
//     <svg
//       width="24"
//       height="25"
//       viewBox="0 0 24 25"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
//         stroke="black"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//       <path
//         d="M21 21.5L16.65 17.15"
//         stroke="black"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//     <input class="header__search" type="text" placeholder="Search" />
//   </div>
//   <div class="header__user">
//     <a class="header__loved" href="#">
//       <svg
//         width="24"
//         height="25"
//         viewBox="0 0 24 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M20.84 5.11C20.3292 4.599 19.7228 4.19365 19.0554 3.91708C18.3879 3.64052 17.6725 3.49817 16.95 3.49817C16.2275 3.49817 15.5121 3.64052 14.8446 3.91708C14.1772 4.19365 13.5708 4.599 13.06 5.11L12 6.17L10.94 5.11C9.90831 4.07831 8.50903 3.49871 7.05 3.49871C5.59097 3.49871 4.19169 4.07831 3.16 5.11C2.12831 6.14169 1.54871 7.54097 1.54871 9C1.54871 10.459 2.12831 11.8583 3.16 12.89L4.22 13.95L12 21.73L19.78 13.95L20.84 12.89C21.351 12.3792 21.7564 11.7728 22.0329 11.1054C22.3095 10.4379 22.4518 9.72249 22.4518 9C22.4518 8.27751 22.3095 7.5621 22.0329 6.89464C21.7564 6.22719 21.351 5.62076 20.84 5.11V5.11Z"
//           stroke="black"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         />
//       </svg>
//     </a>
//     <a class="header__cart" href="#">
//       <svg
//         width="24"
//         height="25"
//         viewBox="0 0 24 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M7 2.5V6.5H3V20.5C3 21.0304 3.21071 21.5391 3.58579 21.9142C3.96086 22.2893 4.46957 22.5 5 22.5H19C19.5304 22.5 20.0391 22.2893 20.4142 21.9142C20.7893 21.5391 21 21.0304 21 20.5V6.5H17V2.5H7Z"
//           stroke="black"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         />
//         <path
//           d="M3 6.5H21"
//           stroke="black"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//         />
//       </svg>
//     </a>
//     <a class="header__profile" href="#"></a>
//   </div>
// </header>

//   );
//             };
// export default Header;
import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/Logo-2.png";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Men",
    path: "/catalog",
  },
  {
    display: "Women",
    path: "/accessories",
  },
  {
    display: "Kids",
    path: "/",
  },
  {
    display: "Contact us",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>

          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i class="bx bx-heart"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

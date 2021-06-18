import React, { useState } from "react";
import "./App.css";

function SliderSection() {
  let [sliderId, setSliderId] = useState(0);
  return (
    <div className="flex">
      <div className="flex-1">
        <h1 className="text-6xl font-semibold">
          Hire a pro
          <br />
          for any skill
        </h1>
        <div className="mt-10 text-4xl font-semibold text-gray-300">
          <ul>
            <li onClick={() => setSliderId(0)}>
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Development & IT
              </span>
            </li>
            <li onClick={() => setSliderId(1)}>
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Design & Creative
              </span>
            </li>
            <li onClick={() => setSliderId(2)}>
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Sales & Marketing
              </span>
            </li>
            <li onClick={() => setSliderId(3)}>
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Writing & Translation
              </span>
            </li>
            <li onClick={() => setSliderId(4)}>
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Admin & Customer Support
              </span>
            </li>
            <li onClick={() => setSliderId(5)}>
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Finance & Accounting
              </span>
            </li>
            <li>
              <a
                href="#"
                className="block cursor-pointer hover:text-secondary-hover mb-4"
              >
                See all specializations
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 rounded-xl overflow-hidden">
        <div
          style={{ transform: `translateX(${sliderId * -100}%)` }}
          className="flex transition-transform duration-500"
        >
          <img
            src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/it.90016e3.jpg"
            alt="slider-img"
          />
          <img
            src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/writing.fae1285.jpg"
            alt="slider-img"
          />
          <img
            src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/design.d50645e.jpg"
            alt="slider-img"
          />
          <img
            src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/finance.1b86ace.jpg"
            alt="slider-img"
          />
          <img
            src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/sales.ac50508.jpg"
            alt="slider-img"
          />
          <img
            src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/admin.1476b5c.jpg"
            alt="slider-img"
          />
        </div>
      </div>
    </div>
  );
}

function MenuInnerRightBar({ state }: { state: any }) {
  let { menuInnerSelected, setMenuInnerSelected } = state;
  if (menuInnerSelected === "Talent Marketplace") {
    return (
      <div className="flex pl-12 py-4">
        <div className="flex-1">
          <div className="border-t-4 border-secondary w-10 h-4"></div>
          <h1 className="menu_inner_selector_title">Talent Marketplace</h1>
          <h2 className="menu_inner_selector_b_title">
            Learn about working with talent or explore your specific hiring
            needs.
          </h2>
          <a className="menu_inner_selector_link" href="#">
            <span className="text-secondary">Hire on Talent Marketplace</span>
            <img
              className="ml-4"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDAuNUw1Ljc3NSAxLjcyNUwxMC42NzUgNi42MjVIMEwwIDguMzc1SDEwLjY3NUw1Ljc3NSAxMy4yNzVMNyAxNC41TDE0IDcuNUw3IDAuNVoiIGZpbGw9IiMzN0EwMDAiLz4KPC9zdmc+Cg=="
              alt="arrow"
            />
          </a>
        </div>
        <div className="flex-1 w-full ml-10 mt-10">
          <ul className="w-full text-left">
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Development & IT
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Design & Creative
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Sales & Marketing
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Writing & Translation
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Admin & Customer Support
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Finance & Accounting
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Hire freelancers
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if (menuInnerSelected === "Project Catalog") {
    return (
      <div className="flex pl-12 py-4">
        <div className="flex-1">
          <div className="border-t-4 border-secondary w-10 h-4"></div>
          <h1 className="menu_inner_selector_title">Project Catalog</h1>
          <h2 className="menu_inner_selector_b_title">
            Browse and buy projects that have a clear scope and price.
          </h2>
          <a className="menu_inner_selector_link" href="#">
            <span className="text-secondary">Browse Project Catalog</span>
            <img
              className="ml-4"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDAuNUw1Ljc3NSAxLjcyNUwxMC42NzUgNi42MjVIMEwwIDguMzc1SDEwLjY3NUw1Ljc3NSAxMy4yNzVMNyAxNC41TDE0IDcuNUw3IDAuNVoiIGZpbGw9IiMzN0EwMDAiLz4KPC9zdmc+Cg=="
              alt="arrow"
            />
          </a>
        </div>
        <div className="flex-1 w-full mt-10">
          <ul className="w-full flex flex-wrap">
            <li className="mb-2 w-2/5 overflow-hidden rounded-xl border-2 border-gray-200 hover:bg-gray-100">
              <a className="inner-link" href="#">
                <img
                  src="https://www.upwork.com/static/assets/Brontes/b55880b/img/logo.cd04b53.jpg"
                  alt="card"
                />
                <p className="py-4">Logo Design</p>
              </a>
            </li>
            <li className="ml-2 mb-2 w-2/5 overflow-hidden rounded-xl border-2 border-gray-200 hover:bg-gray-100">
              <a className="inner-link" href="#">
                <img
                  src="https://www.upwork.com/static/assets/Brontes/b55880b/img/blog.d73af7f.jpg"
                  alt="card"
                />
                <p className="py-4">Articles & Blog Posts</p>
              </a>
            </li>
            <li className="mb-2 w-2/5 overflow-hidden rounded-xl border-2 border-gray-200 hover:bg-gray-100">
              <a className="inner-link" href="#">
                <img
                  src="https://www.upwork.com/static/assets/Brontes/b55880b/img/wp.1acec44.jpg"
                  alt="card"
                />
                <p className="py-4">WordPress</p>
              </a>
            </li>
            <li className="ml-2 mb-2 w-2/5 overflow-hidden rounded-xl border-2 border-gray-200 hover:bg-gray-100">
              <a className="inner-link" href="#">
                <img
                  src="https://www.upwork.com/static/assets/Brontes/b55880b/img/smm.1a3a67a.jpg"
                  alt="card"
                />
                <p className="py-4">Social Media Marketing</p>
              </a>
            </li>
            <li className="mb-2 w-2/5 overflow-hidden rounded-xl border-2 border-gray-200 hover:bg-gray-100">
              <a className="inner-link" href="#">
                <img
                  src="https://www.upwork.com/static/assets/Brontes/b55880b/img/video.8e2caeb.jpg"
                  alt="card"
                />
                <p className="py-4">Video Editing</p>
              </a>
            </li>
            <li className="ml-2 mb-2 w-2/5 overflow-hidden rounded-xl border-2 border-gray-200 hover:bg-gray-100">
              <a className="inner-link" href="#">
                <img
                  src="https://www.upwork.com/static/assets/Brontes/b55880b/img/seo.bb0c74c.jpg"
                  alt="card"
                />
                <p className="py-4">SEO</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if (menuInnerSelected === "Talent Scout") {
    return (
      <div className="flex pl-12 py-4">
        <div className="flex-1">
          <div className="border-t-4 border-secondary w-10 h-4"></div>
          <h1 className="menu_inner_selector_title">Talent Scout</h1>
          <h2 className="menu_inner_selector_b_title">
            Learn how our recruiters find you expert developers, designers, and
            marketers.
          </h2>
          <a className="menu_inner_selector_link" href="#">
            <span className="text-secondary">Talk to Talent Scout</span>
            <img
              className="ml-4"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDAuNUw1Ljc3NSAxLjcyNUwxMC42NzUgNi42MjVIMEwwIDguMzc1SDEwLjY3NUw1Ljc3NSAxMy4yNzVMNyAxNC41TDE0IDcuNUw3IDAuNVoiIGZpbGw9IiMzN0EwMDAiLz4KPC9zdmc+Cg=="
              alt="arrow"
            />
          </a>
        </div>
        <div className="flex-1 w-full ml-10 mt-10">
          <ul className="w-full text-left">
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Development & IT
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Design & Creative
              </a>
            </li>
            <li className="w-full">
              <a
                className="w-full block p-2 pl-6 rounded-xl hover:bg-gray-100"
                href="#"
              >
                Marketing
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
}

function MenuInner({ state, menuItem }: { state: any; menuItem: string }) {
  let [menuInnerSelected, setMenuInnerSelected] =
    useState("Talent Marketplace");
  if (menuItem === "Find Talent") {
    return (
      <div className="container mt-4 mb-10">
        <div className="flex">
          <ul className="flex-1">
            <li
              onMouseEnter={() => setMenuInnerSelected("Talent Marketplace")}
              style={
                menuInnerSelected === "Talent Marketplace"
                  ? { backgroundColor: "#f3f4f6" }
                  : {}
              }
              className="menu_inner_selector"
            >
              <h1 className="menu_inner_selector_title">
                Post a job and hire a pro
              </h1>
              <h2 className="menu_inner_selector_b_title">
                Talent Marketplace
              </h2>
              <div className="menu_inner_selector_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                  role="img"
                >
                  <polygon
                    fill="#14a800"
                    points="11.5 7 4.067 0 2.5 1.476 8.366 7 2.5 12.524 4.067 14"
                  ></polygon>
                </svg>
              </div>
            </li>
            <li
              onMouseEnter={() => setMenuInnerSelected("Project Catalog")}
              style={
                menuInnerSelected === "Project Catalog"
                  ? { backgroundColor: "#f3f4f6" }
                  : {}
              }
              className="menu_inner_selector"
            >
              <h1 className="menu_inner_selector_title">
                Browse and buy projects
              </h1>
              <h2 className="menu_inner_selector_b_title">Project Catalog</h2>
              <div className="menu_inner_selector_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                  role="img"
                >
                  <polygon
                    fill="#14a800"
                    points="11.5 7 4.067 0 2.5 1.476 8.366 7 2.5 12.524 4.067 14"
                  ></polygon>
                </svg>
              </div>
            </li>
            <li
              onMouseEnter={() => setMenuInnerSelected("Talent Scout")}
              style={
                menuInnerSelected === "Talent Scout"
                  ? { backgroundColor: "#f3f4f6" }
                  : {}
              }
              className="menu_inner_selector"
            >
              <h1 className="menu_inner_selector_title">
                Let us find you the right talent
              </h1>
              <h2 className="menu_inner_selector_b_title">Talent Scout</h2>
              <div className="menu_inner_selector_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                  role="img"
                >
                  <polygon
                    fill="#14a800"
                    points="11.5 7 4.067 0 2.5 1.476 8.366 7 2.5 12.524 4.067 14"
                  ></polygon>
                </svg>
              </div>
            </li>
          </ul>
          <div className="flex-2">
            <MenuInnerRightBar
              state={{ menuInnerSelected, setMenuInnerSelected }}
            />
          </div>
        </div>
      </div>
    );
  }
  if (menuItem === "Find Work") {
    return (
      <div className="container mt-4 mb-10">
        <ul className="flex">
          <li className="rounded-xl hover:bg-gray-100 w-1/4">
            <a className="inner-link p-4" href="#">
              <h1 className="menu_inner_selector_title">Ways to earn</h1>
              <h2 className="menu_inner_selector_b_title">
                Learn why Upwork has the right opportunities for you.
              </h2>
            </a>
          </li>
          <li className="rounded-xl ml-4 hover:bg-gray-100 w-1/4">
            <a className="inner-link p-4" href="#">
              <h1 className="menu_inner_selector_title">
                Find work for your skills
              </h1>
              <h2 className="menu_inner_selector_b_title">
                Explore the kind of work available in your field.
              </h2>
            </a>
          </li>
        </ul>
      </div>
    );
  }
  if (menuItem === "Why Upwork") {
    return (
      <div className="container mt-4 mb-10">
        <div className="flex">
          <div className="flex-2">
            <ul className="flex flex-wrap">
              <li className="rounded-xl hover:bg-gray-100 w-1/3">
                <a className="inner-link p-4" href="#">
                  <h1 className="menu_inner_selector_title">Success Stories</h1>
                  <h2 className="menu_inner_selector_b_title">
                    Discover how teams work strategically and grow together.
                  </h2>
                </a>
              </li>
              <li className="rounded-xl ml-4 hover:bg-gray-100 w-1/3">
                <a className="inner-link p-4" href="#">
                  <h1 className="menu_inner_selector_title">Reviews</h1>
                  <h2 className="menu_inner_selector_b_title">
                    See what it’s like to collaborate on Upwork.
                  </h2>
                </a>
              </li>
              <li className="rounded-xl hover:bg-gray-100 w-1/3">
                <a className="inner-link p-4" href="#">
                  <h1 className="menu_inner_selector_title">How to hire</h1>
                  <h2 className="menu_inner_selector_b_title">
                    Learn about the different ways to get work done.
                  </h2>
                </a>
              </li>
              <li className="rounded-xl ml-4 hover:bg-gray-100 w-1/3">
                <a className="inner-link p-4" href="#">
                  <h1 className="menu_inner_selector_title">
                    How to find work
                  </h1>
                  <h2 className="menu_inner_selector_b_title">
                    Learn about how to grow your independent career.
                  </h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h1 className="menu_inner_selector_title pt-4">
              Where work gets done
            </h1>
            <div className="my-4">
              <a
                className="block rounded-xl mb-2 py-4 pl-4 w-full text-left border border-gray-200 hover:bg-gray-200"
                href="#"
              >
                <h1 className="menu_inner_selector_b_title mb-2">Guides</h1>
                <h2>Getting Started as a Freelancer</h2>
              </a>
              <a
                className="block rounded-xl mb-2 py-4 pl-4 w-full text-left border border-gray-200 hover:bg-gray-200"
                href="#"
              >
                <h1 className="menu_inner_selector_b_title mb-2">Guides</h1>
                <h2>Growing Your Freelance Career</h2>
              </a>
              <a
                className="block rounded-xl mb-2 py-4 pl-4 w-full text-left border border-gray-200 hover:bg-gray-200"
                href="#"
              >
                <h1 className="menu_inner_selector_b_title mb-2">Guides</h1>
                <h2>Hiring & Working with Independent Talent</h2>
              </a>
            </div>
            <a className="menu_inner_selector_link" href="#">
              <span className="text-secondary">Hire on Talent Marketplace</span>
              <img
                className="ml-4"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDAuNUw1Ljc3NSAxLjcyNUwxMC42NzUgNi42MjVIMEwwIDguMzc1SDEwLjY3NUw1Ljc3NSAxMy4yNzVMNyAxNC41TDE0IDcuNUw3IDAuNVoiIGZpbGw9IiMzN0EwMDAiLz4KPC9zdmc+Cg=="
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

function NavLink({ menuItem, state }: { menuItem: string; state: any }) {
  let { menuSelected, setMenuSelected } = state;
  return (
    <li
      onMouseLeave={() => setMenuSelected("")}
      onMouseEnter={() => setMenuSelected(menuItem)}
      className="navlink"
    >
      <button
        style={menuSelected === menuItem ? { color: "#14a800" } : {}}
        className="focus:outline-none flex"
      >
        <span>{menuItem}</span>
        <span className="my-auto ml-2">
          <svg
            className="transition-transform"
            style={
              menuSelected === menuItem ? { transform: "rotate(180deg)" } : {}
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            width="8"
            height="8"
            role="img"
          >
            <path
              fill="#ccc"
              d="M.37,5l5.75,5.92a1.23,1.23,0,0,0,1.78,0L13.64,5a1.31,1.31,0,0,0,0-1.83,1.27,1.27,0,0,0-.86-.37H1.25A1.27,1.27,0,0,0,0,4v0A1.28,1.28,0,0,0,.37,5Z"
            ></path>
          </svg>
        </span>
      </button>
      <div
        style={menuSelected !== menuItem ? { display: "none" } : {}}
        className="absolute w-full h-10 -bottom-4 left-0 z-10"
      ></div>
      <div
        style={menuSelected !== menuItem ? { display: "none" } : {}}
        className="absolute w-full top-20 left-0 bg-white border-b border-gray-300 z-10"
      >
        <MenuInner
          state={{ menuSelected, setMenuSelected }}
          menuItem={menuItem}
        />
      </div>
    </li>
  );
}

function App() {
  let [menuSelected, setMenuSelected] = useState("");
  let [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <header className="relative py-4 flex justify-between border-b border-gray-300">
        <div className="container flex justify-between">
          <div className="left-side flex">
            <a href="#" className="mr-10 text-green-500">
              <svg
                className="w-24 h-10"
                id="air-2-75-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 102 28"
                role="img"
                aria-hidden="true"
              >
                <path
                  fill="#14a800"
                  d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
                ></path>{" "}
                <path
                  fill="#14a800"
                  d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
                ></path>{" "}
                <polygon
                  fill="#14a800"
                  points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
                ></polygon>{" "}
                <path
                  fill="#14a800"
                  d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
                ></path>{" "}
                <path
                  fill="#14a800"
                  d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
                ></path>
              </svg>
            </a>
            <ul className="flex">
              <NavLink
                state={{ menuSelected, setMenuSelected }}
                menuItem="Find Talent"
              />
              <NavLink
                state={{ menuSelected, setMenuSelected }}
                menuItem="Find Work"
              />
              <NavLink
                state={{ menuSelected, setMenuSelected }}
                menuItem="Why Upwork"
              />
              <li className="navlink">
                <a href="#" className="navlink_inner flex hover:text-secondary">
                  <span>Enterprise</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="right-side flex">
            <form className="form relative my-auto mr-4">
              <input
                type="search"
                autoComplete="off"
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                className="input pl-14"
              />
              <button type="submit">
                <span className="absolute top-1 left-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    width="14"
                    height="14"
                    role="img"
                  >
                    <path
                      fill="#ccc"
                      d="M13.65 12L10.4 8.75A5.64 5.64 0 0 0 5.66 0a5.67 5.67 0 1 0 3.1 10.4L12 13.66a1.15 1.15 0 0 0 1.64 0 1.16 1.16 0 0 0 0-1.65zM5.66 9.55a3.89 3.89 0 1 1 .01-7.78 3.89 3.89 0 0 1 0 7.78z"
                    ></path>
                  </svg>
                </span>
              </button>
              <button type="button">
                <span className="absolute top-1 left-7 p-2">
                  <svg
                    className="w-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    width="14"
                    height="14"
                    role="img"
                  >
                    <path
                      fill="#ccc"
                      d="M.37,5l5.75,5.92a1.23,1.23,0,0,0,1.78,0L13.64,5a1.31,1.31,0,0,0,0-1.83,1.27,1.27,0,0,0-.86-.37H1.25A1.27,1.27,0,0,0,0,4v0A1.28,1.28,0,0,0,.37,5Z"
                    ></path>
                  </svg>
                </span>
              </button>
              <button
                type="reset"
                onClick={() => setSearchValue("")}
                style={!searchValue ? { display: "none" } : {}}
              >
                <span className="absolute top-1 p-2 right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                    role="img"
                    width="14"
                    height="14"
                  >
                    <path
                      fill="#ccc"
                      d="M11.207 9.793l-1.414 1.414L7 8.414l-2.793 2.793-1.414-1.414L5.586 7 2.793 4.207l1.414-1.414L7 5.586l2.793-2.793 1.414 1.414L8.414 7l2.793 2.793zM7 0a7 7 0 100 14A7 7 0 007 0z"
                    ></path>
                  </svg>
                </span>
              </button>
            </form>
            <div className="sign-buttons my-auto">
              <button className="btn-green">Log In</button>
              <button className="btn-white">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
      <section className="container relative text-left py-14">
        <div>
          <h1 className="text-7xl mb-4 text-secondary font-semibold">
            Join the world's <br /> work marketplace
          </h1>
          <p className="text-xl text-gray-700 font-semibold mb-7">
            Find great talent. Build your business. <br />
            Take your career to the next level.
          </p>
          <button className="btn-green">Find Talent</button>
          <button className="btn-white border border-secondary py-2 px-8 rounded-full">
            Find Work
          </button>
        </div>
        <div className="mt-14">
          <span className="text-gray-400">Trusted by</span>
          <div className="flex">
            <img
              src="https://www.upwork.com/static/assets/Brontes/b55880b/img/microsoft.77d03cc.svg"
              alt="microsoft"
            />
            <img
              className="ml-10"
              src="https://www.upwork.com/static/assets/Brontes/b55880b/img/airbnb.2baea51.svg"
              alt="airbnb"
            />
            <img
              className="ml-10"
              src="https://www.upwork.com/static/assets/Brontes/b55880b/img/bissell.dcb03c9.svg"
              alt="bissell"
            />
            <img
              className="ml-10"
              src="https://www.upwork.com/static/assets/Brontes/b55880b/img/godaddy.75298df.svg"
              alt="godaddy"
            />
          </div>
        </div>
        <div className="absolute right-0 top-0">
          <img
            width="480px"
            height="480px"
            src="https://www.upwork.com/static/assets/Brontes/b55880b/img/globe-2x.f7d44e7.jpg"
            alt="section-img"
          />
        </div>
      </section>
      <section className="container">
        <div className="text-white rounded-xl text-left font-semibold bg-freelancer">
          <div className="p-10">
            <div className="text-2xl mb-32">For clients</div>
            <h1 className="text-6xl mb-10">
              Find talent <br />
              your way
            </h1>
            <p className="w-2/5 text-lg leading-5">
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <div className="flex mt-10">
              <a href="#" className="big-button">
                <h1 className="text-3xl">
                  Post a job <br />
                  and hire a pro
                </h1>
                <div className="flex">
                  <h2 className="text-xl text-xl mt-12">Talent Marketplace</h2>
                  <svg
                    className="mt-14 ml-4"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    data-qa="arrow"
                  >
                    <path d="M7 0.5L5.775 1.725L10.675 6.625H0L0 8.375H10.675L5.775 13.275L7 14.5L14 7.5L7 0.5Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="big-button ml-4">
                <h1 className="text-3xl">
                  Browse and <br />
                  buy projects
                </h1>
                <div className="flex">
                  <h2 className="text-xl text-xl mt-12">Project Catalog</h2>
                  <svg
                    className="mt-14 ml-4"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    data-qa="arrow"
                  >
                    <path d="M7 0.5L5.775 1.725L10.675 6.625H0L0 8.375H10.675L5.775 13.275L7 14.5L14 7.5L7 0.5Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className="big-button ml-4">
                <h1 className="text-3xl">
                  Let us help find <br />
                  the right talent
                </h1>
                <div className="flex">
                  <h2 className="text-xl text-xl mt-12">Talent Scout</h2>
                  <svg
                    className="mt-14 ml-4"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    data-qa="arrow"
                  >
                    <path d="M7 0.5L5.775 1.725L10.675 6.625H0L0 8.375H10.675L5.775 13.275L7 14.5L14 7.5L7 0.5Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-20 text-left">
        <SliderSection />
      </section>
    </div>
  );
}

export default App;

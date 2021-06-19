import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import "./App.css";
import { topSkills, trendingSkills } from "./Data";

function SkillsListLeft({ selector }: { selector: number }) {
  if (selector === 1) {
    return (
      <ul>
        {topSkills
          .filter((_, i) => i < 16)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  if (selector === 2) {
    return (
      <ul>
        {trendingSkills
          .filter((_, i) => i < 16)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  if (selector === 3) {
    return (
      <ul>
        {topSkills
          .filter((_, i) => i < 16)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  if (selector === 4) {
    return (
      <ul>
        {trendingSkills
          .filter((_, i) => i < 16)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  return null;
}

function SkillsListRight({ selector }: { selector: number }) {
  if (selector === 1) {
    return (
      <ul>
        {topSkills
          .filter((_, i) => i > 15)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  if (selector === 2) {
    return (
      <ul>
        {trendingSkills
          .filter((_, i) => i > 15)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  if (selector === 3) {
    return (
      <ul>
        {topSkills
          .filter((_, i) => i > 15)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  if (selector === 4) {
    return (
      <ul>
        {trendingSkills
          .filter((_, i) => i > 15)
          .map((skill) => (
            <li className="mt-1">
              <a className="hover:text-secondary-hover" href="#">
                {skill}
              </a>
            </li>
          ))}
      </ul>
    );
  }
  return null;
}

function SkillsSection() {
  let [selector, setSelector] = useState(1);
  return (
    <div className="text-left mt-20 flex">
      <div className="flex-1 ml-10 text-4xl font-semibold text-gray-300">
        <ul>
          <li
            style={{ color: selector === 1 ? "#14a800" : "" }}
            onClick={() => setSelector(1)}
          >
            <span className="block cursor-pointer hover:text-secondary-hover mb-4">
              Top skills
            </span>
          </li>
          <li
            style={{ color: selector === 2 ? "#14a800" : "" }}
            onClick={() => setSelector(2)}
          >
            <span className="block cursor-pointer hover:text-secondary-hover mb-4">
              Trending skills
            </span>
          </li>
          <li
            style={{ color: selector === 3 ? "#14a800" : "" }}
            onClick={() => setSelector(3)}
          >
            <span className="block cursor-pointer hover:text-secondary-hover mb-4">
              Top skills in US
            </span>
          </li>
          <li
            style={{ color: selector === 4 ? "#14a800" : "" }}
            onClick={() => setSelector(4)}
          >
            <span className="block cursor-pointer hover:text-secondary-hover mb-4">
              Project Catalog
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-1 text-2xl font-semibold text-gray-500">
        <SkillsListLeft selector={selector} />
      </div>
      <div className="flex-1 text-2xl font-semibold text-gray-500">
        <SkillsListRight selector={selector} />
      </div>
    </div>
  );
}

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
            <li
              style={{ color: sliderId === 0 ? "#14a800" : "" }}
              onClick={() => setSliderId(0)}
            >
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Development & IT
              </span>
            </li>
            <li
              style={{ color: sliderId === 1 ? "#14a800" : "" }}
              onClick={() => setSliderId(1)}
            >
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Design & Creative
              </span>
            </li>
            <li
              style={{ color: sliderId === 2 ? "#14a800" : "" }}
              onClick={() => setSliderId(2)}
            >
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Sales & Marketing
              </span>
            </li>
            <li
              style={{ color: sliderId === 3 ? "#14a800" : "" }}
              onClick={() => setSliderId(3)}
            >
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Writing & Translation
              </span>
            </li>
            <li
              style={{ color: sliderId === 4 ? "#14a800" : "" }}
              onClick={() => setSliderId(4)}
            >
              <span className="block cursor-pointer hover:text-secondary-hover mb-4">
                Admin & Customer Support
              </span>
            </li>
            <li
              style={{ color: sliderId === 5 ? "#14a800" : "" }}
              onClick={() => setSliderId(5)}
            >
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
      <div className="flex-1">
        <div className="rounded-xl overflow-hidden">
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
        <div className="relative">
          <div
            style={{ visibility: sliderId === 0 ? "visible" : "hidden" }}
            className="text-sm absolute font-semibold ml-2 mt-4"
          >
            <div className="flex flex-wrap">
              <span className="tag">AR/VR Development</span>
              <span className="tag">Automation Testing</span>
              <span className="tag">Back-End Development</span>
              <span className="tag">Business Applications Development</span>
              <span className="tag">CMS Development</span>
              <span className="tag">Cloud Engineering</span>
              <span className="tag">Coding Tutoring</span>
            </div>
          </div>
          <div
            style={{ visibility: sliderId === 1 ? "visible" : "hidden" }}
            className="text-sm absolute font-semibold ml-2 mt-4"
          >
            <div className="flex flex-wrap">
              <span className="tag">2D Animation</span>
              <span className="tag">3D Animation</span>
              <span className="tag">AR/VR Design</span>
              <span className="tag">Acting</span>
              <span className="tag">Art Direction</span>
              <span className="tag">Caricatures & Portraits</span>
              <span className="tag">Cartoons & Comics</span>
            </div>
          </div>
          <div
            style={{ visibility: sliderId === 2 ? "visible" : "hidden" }}
            className="text-sm absolute font-semibold ml-2 mt-4"
          >
            <div className="flex flex-wrap">
              <span className="tag">Brand Strategy</span>
              <span className="tag">Campaign Management</span>
              <span className="tag">Community Management</span>
              <span className="tag">Content Strategy</span>
              <span className="tag">Digital Marketing</span>
              <span className="tag">Email Marketing</span>
              <span className="tag">Lead Generation</span>
              <span className="tag">Market Research</span>
              <span className="tag">Marketing Automation</span>
            </div>
          </div>
          <div
            style={{ visibility: sliderId === 3 ? "visible" : "hidden" }}
            className="text-sm absolute font-semibold ml-2 mt-4"
          >
            <div className="flex flex-wrap">
              <span className="tag">Business Writing</span>
              <span className="tag">Career Coaching</span>
              <span className="tag">Content Writing</span>
              <span className="tag">Copywriting</span>
              <span className="tag">Creative Writing</span>
              <span className="tag">Editing & Proofreading</span>
              <span className="tag">Ghostwriting</span>
              <span className="tag">Grant Writing</span>
              <span className="tag">Language Localization</span>
              <span className="tag">Language Tutoring</span>
            </div>
          </div>
          <div
            style={{ visibility: sliderId === 4 ? "visible" : "hidden" }}
            className="text-sm absolute font-semibold ml-2 mt-4"
          >
            <div className="flex flex-wrap">
              <span className="tag">Customer Service</span>
              <span className="tag">Data Entry</span>
              <span className="tag">Online Research</span>
              <span className="tag">Order Processing</span>
              <span className="tag">Project Management</span>
              <span className="tag">Tech Support</span>
              <span className="tag">Transcription</span>
              <span className="tag">Virtual/Administrative Assistance</span>
            </div>
          </div>
          <div
            style={{ visibility: sliderId === 5 ? "visible" : "hidden" }}
            className="text-sm absolute font-semibold ml-2 mt-4"
          >
            <div className="flex flex-wrap">
              <span className="tag">Accounting</span>
              <span className="tag">Bookkeeping</span>
              <span className="tag">Business Analysis</span>
              <span className="tag">Financial Analysis & Modeling</span>
              <span className="tag">Financial Management/CFO</span>
              <span className="tag">HR Administration</span>
              <span className="tag">Instructional Design</span>
              <span className="tag">Lifestyle Coaching</span>
            </div>
          </div>
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
        className="absolute w-full left-0 top-4-58 bg-white border-b border-gray-300 z-10"
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
      <header className="fixed w-full z-10 top-0 left-0 bg-white py-4 flex justify-between border-b border-gray-300">
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
              <button className="btn-white">Sign Up</button>
              <button className="btn-green">Log In</button>
            </div>
          </div>
        </div>
      </header>
      <section className="container mt-24 relative text-left py-14">
        <div>
          <h1 className="text-7xl mb-4 text-secondary font-semibold">
            Join the world's <br /> work marketplace
          </h1>
          <p className="text-xl text-gray-700 font-semibold mb-7">
            Find great talent. Build your business. <br />
            Take your career to the next level.
          </p>
          <button className="btn-green">Find Talent</button>
          <button className="btn-white text-secondary hover:bg-gray-100 border border-secondary py-2 px-8 rounded-full">
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
      <section className="container flex rounded-xl mt-10 bg-blue-700">
        <div className="flex-1 bg-find_work bg-center"></div>
        <div className="flex-1 p-6 overflow-hidden text-white rounded-xl text-left font-semibold">
          <div className="text-2xl mb-6">For talent</div>
          <h1 className="text-7xl font-semibold mb-12">
            Find great <br /> work
          </h1>
          <p className="w-4/5 text-lg leading-5">
            Meet clients you’re excited to work with and take your career or
            business to new heights.
          </p>
          <div className="flex pt-2 text-lg leading-5 mt-36 border-t border-white">
            <span className="block flex-1">
              Find opportunities for every stage of your freelance career
            </span>
            <span className="block flex-1 ml-10">
              Control when, where, and how you work
            </span>
            <span className="block flex-1 ml-10">
              Explore different ways to earn
            </span>
          </div>
          <button className="mt-8 py-2 hover:bg-gray-100 text-blue-700 font-semibold bg-white rounded-3xl px-6">
            Find Opportunities
          </button>
        </div>
      </section>
      <section className="container flex mt-20">
        <div className="text-left mx-4 w-3/5">
          <h1 className="text-6xl mb-20 font-semibold">
            What they're
            <br />
            saying
          </h1>
          <div className="ml-52">
            <img
              className="rounded-xl w-2/3 mb-4"
              src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/cara.4d5446c.jpg"
              alt="client"
            />
            <div className="relative text-secondary font-serif text-2xl">
              <span className="absolute top-0 -left-3">“</span>
              <p>
                The freelance talent we work with are more productive than we
                ever thought possible.”
              </p>
            </div>
            <div className="py-2 mt-4 border-t border-black">
              <span className="block font-semibold">Cara Bedford</span>
              <span className="block font-semibold text-gray-500">
                Director of Strategic Marketing,
                <br /> CompuVision
              </span>
            </div>
          </div>
        </div>
        <div className="text-left mx-4 w-2/5">
          <div>
            <img
              className="rounded-xl w-2/3 mb-4"
              src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/sam.10e14e3.jpg"
              alt="client"
            />

            <div className="relative text-secondary font-serif text-2xl">
              <span className="absolute top-0 -left-3">“</span>
              <p>
                My relationship with Cara & CompuVision keeps on growing. The
                projects get larger and more technical every year.”
              </p>
            </div>
            <div className="py-2 mt-4 border-t border-black">
              <span className="block font-semibold">Sam Crockett</span>
              <span className="block font-semibold text-gray-500">
                Independent Web Developer
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex rounded-xl mt-10 bg-secondary">
        <div className="flex-1 p-10 overflow-hidden text-white rounded-xl text-left font-semibold">
          <h1 className="text-6xl w-4/5">We’re the world’s work marketplace</h1>
          <div className="flex mt-48">
            <div className="py-3 w-full border-t">
              <span className="block w-4/5 text-lg">
                A winner of G2 Crowd’s
              </span>
              <span className="block w-4/5 text-2xl">
                2021 Best Software Awards
              </span>
              <img
                className="mt-7 w-7"
                src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/group.e2d00ea.svg"
                alt="logo"
              />
            </div>
            <div className="py-3 w-full ml-8 border-t">
              <span className="block w-4/5 text-lg">154 744 reviews</span>
              <div>
                <span
                  style={{ verticalAlign: "sub" }}
                  className="mr-4 text-2xl"
                >
                  4.6
                </span>
                <StarRatings
                  rating={4.573}
                  starRatedColor="white"
                  starDimension="20px"
                  starSpacing="1px"
                />
              </div>
              <img
                className="w-32 mt-11"
                src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/logo-clearlyrated.dc11185.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-work_marketplace bg-center"></div>
      </section>
      <section className="container">
        <SkillsSection />
      </section>
      <footer className="bg-footer mt-20 p-12 text-white">
        <div className="container text-sm text-left">
          <div className="flex mb-10">
            <div className="flex-1">
              <h1 className="font-semibold mb-4">For Clients</h1>
              <ul>
                <li className="mb-2">
                  <a href="#">How to Hire</a>
                </li>
                <li className="mb-2">
                  <a href="#">Talent Marketplace</a>
                </li>
                <li className="mb-2">
                  <a href="#">Project Catalog</a>
                </li>
                <li className="mb-2">
                  <a href="#">Talent Scout</a>
                </li>
                <li className="mb-2">
                  <a href="#">Enterprise</a>
                </li>
                <li className="mb-2">
                  <a href="#">Payroll Services</a>
                </li>
                <li className="mb-2">
                  <a href="#">Direct Contracts</a>
                </li>
                <li className="mb-2">
                  <a href="#">Hire Worldwide</a>
                </li>
                <li className="mb-2">
                  <a href="#">Hire in the USA</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <ul>
                <h1 className="font-semibold mb-4">For Talent</h1>
                <li className="mb-2">
                  <a href="#">How to Find Work</a>
                </li>
                <li className="mb-2">
                  <a href="#">Direct Contracts</a>
                </li>
                <li className="mb-2">
                  <a href="#">Find Freelance Jobs Worldwide</a>
                </li>
                <li className="mb-2">
                  <a href="#">Find Freelance Jobs in the USA</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="font-semibold mb-4">Resources</h1>
              <ul>
                <li className="mb-2">
                  <a href="#">Help & Support</a>
                </li>
                <li className="mb-2">
                  <a href="#">Success Stories</a>
                </li>
                <li className="mb-2">
                  <a href="#">Upwork Reviews</a>
                </li>
                <li className="mb-2">
                  <a href="#">Resources</a>
                </li>
                <li className="mb-2">
                  <a href="#">Blog Community</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="font-semibold mb-4">Company</h1>
              <ul>
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Leadership</a>
                </li>
                <li className="mb-2">
                  <a href="#">Investor Relations</a>
                </li>
                <li className="mb-2">
                  <a href="#">Careers</a>
                </li>
                <li className="mb-2">
                  <a href="#">Upwork Foundation</a>
                </li>
                <li className="mb-2">
                  <a href="#">Press</a>
                </li>
                <li className="mb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Trust, Safety & Security</a>
                </li>
                <li className="mb-2">
                  <a href="#">UK Modern Slavery Statement</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between border-t border-b py-4 border-footer">
            <div className="flex">
              <span className="my-auto">Follow us</span>
              <ul className="flex">
                <li className="ml-4">
                  <a
                    href="https://www.facebook.com/upwork"
                    title="Visit Upwork on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-footer hover:bg-footer-divider p-2"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        role="img"
                        className="w-5"
                        fill="white"
                      >
                        <path d="M10.92 2.24H8.75c-.28 0-.63.07-.63.56v2.24h2.8v2.24h-2.8V14H5.88V7.28h-2.8V5.04h2.8V3.08C5.88 1.05 6.86 0 8.75 0h2.17v2.24z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    href="https://www.linkedin.com/company/upwork"
                    title="Read Upwork company news on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-footer hover:bg-footer-divider p-2"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        role="img"
                        className="w-5"
                        fill="white"
                      >
                        <path d="M3.08 13.93H.07V4.27h3.01v9.66zM1.54 3.08C.63 3.08 0 2.45 0 1.61S.63.14 1.61.14c.98 0 1.54.63 1.54 1.47s-.56 1.47-1.61 1.47zM14 13.93h-3.01V8.61c0-1.26-.42-2.1-1.54-2.1-.84 0-1.33.56-1.54 1.12-.07.21-.07.49-.07.77v5.53H4.83V7.35c0-1.19-.07-2.17-.07-3.08h2.59l.14 1.33h.07c.42-.63 1.33-1.54 2.94-1.54 1.96 0 3.43 1.33 3.43 4.13v5.74H14z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    href="https://twitter.com/Upwork"
                    title="Follow @Upwork on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-footer hover:bg-footer-divider p-2"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        role="img"
                        className="w-5"
                        fill="white"
                      >
                        <path d="M12.6 4.13v.35c0 3.78-2.87 8.19-8.19 8.19-1.61 0-3.15-.49-4.41-1.26.21 0 .49.07.7.07 1.33 0 2.59-.49 3.57-1.26-1.26 0-2.31-.84-2.66-1.96.21 0 .35.07.56.07.28 0 .56 0 .77-.07C1.61 7.98.7 6.86.7 5.46v-.07c0 .21.77.35 1.26.35C1.19 5.25.63 4.34.63 3.36c0-.56.14-1.05.42-1.47C2.45 3.64 4.55 4.76 7 4.9c-.14-.28-.21-.49-.21-.7 0-1.61 1.26-2.87 2.87-2.87.84 0 1.54.35 2.1.91.63-.14 1.26-.35 1.82-.7-.21.7-.7 1.26-1.26 1.61.56-.07 1.12-.21 1.68-.42-.42.49-.84.98-1.4 1.4z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    href="https://www.youtube.com/channel/UCvxGFOnwUBDHHcxuPqhe4CQ"
                    title="Watch Upwork videos on YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-footer hover:bg-footer-divider p-2"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        role="img"
                        className="w-5"
                        fill="white"
                      >
                        <path d="M13.707 3.608a1.76 1.76 0 00-1.237-1.246C11.379 2.068 7 2.068 7 2.068s-4.378 0-5.47.294A1.764 1.764 0 00.292 3.608C0 4.707 0 7 0 7s0 2.293.292 3.392a1.76 1.76 0 001.238 1.245c1.092.295 5.47.295 5.47.295s4.378 0 5.469-.295a1.755 1.755 0 001.237-1.245C14 9.293 14 7 14 7s0-2.293-.293-3.392zM5.568 9.082V4.918L9.228 7l-3.66 2.082z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    href="https://www.instagram.com/upworkinc/"
                    title="Follow Upwork on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-footer hover:bg-footer-divider p-2"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        role="img"
                        className="w-5"
                        fill="white"
                      >
                        <path d="M7 1.263c1.868 0 2.09.007 2.828.04.682.032 1.053.146 1.3.242.326.127.559.278.804.523s.396.478.523.805c.096.246.21.617.241 1.3.034.737.04.958.04 2.827 0 1.868-.006 2.09-.04 2.828-.031.682-.145 1.053-.24 1.3-.128.326-.28.559-.524.804a2.168 2.168 0 01-.805.523c-.247.096-.617.21-1.3.241-.737.034-.958.04-2.827.04s-2.09-.006-2.828-.04c-.682-.031-1.052-.145-1.3-.24a2.168 2.168 0 01-.804-.524 2.168 2.168 0 01-.523-.805c-.096-.247-.21-.617-.241-1.3-.034-.737-.04-.959-.04-2.827 0-1.869.006-2.09.04-2.828.031-.682.145-1.052.24-1.3.128-.326.28-.559.524-.804.245-.245.478-.396.805-.523.246-.096.617-.21 1.3-.241.737-.034.958-.04 2.827-.04M7 .001c-1.9 0-2.139.008-2.885.042C3.37.078 2.86.197 2.416.37a3.43 3.43 0 00-1.24.807 3.43 3.43 0 00-.806 1.24C.197 2.86.078 3.37.044 4.114.01 4.86.002 5.099.002 7c0 1.9.008 2.139.042 2.885.034.745.153 1.254.326 1.699.178.46.418.85.807 1.24.389.388.779.628 1.24.806.444.173.953.292 1.698.326.746.034.984.042 2.885.042 1.9 0 2.139-.008 2.885-.042.745-.034 1.254-.153 1.699-.326a3.43 3.43 0 001.24-.807 3.43 3.43 0 00.806-1.24c.173-.444.292-.953.326-1.698.034-.746.042-.985.042-2.885s-.008-2.139-.042-2.885c-.034-.745-.153-1.254-.326-1.699a3.43 3.43 0 00-.807-1.24 3.43 3.43 0 00-1.24-.806C11.14.197 10.63.078 9.886.044 9.14.01 8.9.002 7 .002"></path>
                        <path d="M7 3.407a3.593 3.593 0 100 7.186 3.593 3.593 0 000-7.186zm0 5.926a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm4.575-6.068a.84.84 0 11-1.68 0 .84.84 0 011.68 0"></path>
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex">
              <span className="my-auto">Mobile app</span>
              <ul className="flex">
                <li className="ml-4">
                  <a
                    href="https://apps.apple.com/us/developer/upwork-global-inc/id329377609"
                    title="Download Upwork app from iTunes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-footer hover:bg-footer-divider p-2"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        role="img"
                        fill="white"
                        className="w-5"
                      >
                        <path d="M13.017 10.271c-.329.729-.486 1.054-.91 1.698-.59.9-1.423 2.02-2.455 2.029-.918.008-1.153-.597-2.397-.59-1.244.007-1.504.6-2.42.592-1.033-.01-1.822-1.02-2.413-1.92C.77 9.566.597 6.614 1.616 5.046 2.341 3.931 3.483 3.28 4.557 3.28c1.094 0 1.78.599 2.685.599.877 0 1.412-.6 2.676-.6.956 0 1.969.52 2.69 1.419-2.364 1.296-1.98 4.672.41 5.574z"></path>
                        <path d="M8.959 2.273C9.418 1.683 9.767.85 9.64 0 8.89.052 8.013.53 7.5 1.151c-.466.565-.85 1.403-.7 2.217.82.026 1.667-.464 2.159-1.095z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    href="https://play.google.com/store/apps/dev?id=8802639270489632480"
                    title="Download Upwork app from Google Play"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-footer hover:bg-footer-divider p-2"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        role="img"
                        fill="white"
                        className="w-5"
                      >
                        <path d="M3.996 11.095h.61v2.034c0 .464.426.871.914.871.488 0 .915-.407.915-.871v-2.034h1.22v2.034c0 .464.427.871.915.871.488 0 .915-.407.915-.871v-2.034h.61c.366 0 .61-.232.61-.58l-.001-5.98H3.386v5.98c0 .348.244.58.61.58zM2.079 4.381c-.418 0-.784.439-.784.94v4.392c0 .502.366.941.784.941.418 0 .784-.439.784-.94V5.321c0-.502-.366-.941-.784-.941zm9.148.94v4.392c0 .502.366.941.785.941.418 0 .784-.439.784-.94V5.321c0-.502-.366-.941-.784-.941-.419 0-.785.439-.785.94zM9.973.51a.272.272 0 000-.407.305.305 0 00-.427 0L8.63.974C8.204.683 7.655.567 7.045.567a3.78 3.78 0 00-1.647.349L4.545.044a.704.704 0 00-.488 0 .614.614 0 000 .465l.793.755c-.854.64-1.464 1.628-1.464 2.768h7.319A3.31 3.31 0 009.18 1.264L9.973.51zM6.068 3.06H5.029V2.016h1.039V3.06zm1.985 0V2.016h1.038V3.06H8.053z"></path>
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div className="mr-7 mt-4 pr-7 border-r border-footer">
              © 2015 - 2021 Upwork® Global Inc.
            </div>
            <ul className="flex mt-4">
              <li className="mr-7">
                <a href="#">Terms of Service</a>
              </li>
              <li className="mr-7">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mr-7">
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

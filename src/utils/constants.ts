// import AiFillHome from "react-icons/ai";
// import FaInfoCircle from "react-icons/fa";
// import FaBriefcase from "react-icons/fa";
// import BiSolidContact from "react-icons/bi";
// import SiBlogger from "react-icons/si";
import About from "@/assets/icons/about.svg";
import Briefcase from "@/assets/icons/briefcase.svg";
import Blog from "@/assets/icons/blog.svg";
import Contact from "@/assets/icons/contact.svg";
import Home from "@/assets/icons/home.svg";

export const NavItems = [
  {
    title: "Home",
    path: "/",

    icon: Home,
  },
  {
    title: "Service",
    path: "/service",

    icon: Briefcase,
  },
  {
    title: "About Us",

    path: "/about",

    icon: About,
  },
  {
    title: "Contact Us",
    path: "/contact",

    icon: Contact,
  },
  {
    title: "Blog",
    path: "/blog",

    icon: Blog,
  },
  {
    title: "Free Consultation",
    path: "/consultation",
    // cName: "nav-links-mobile",
  },
];

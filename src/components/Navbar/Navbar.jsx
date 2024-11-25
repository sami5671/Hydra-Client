import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>TECHNOLOGIES</a>
            </li>
            <li>
              <a>HOW TO</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost">
          <img src={logo} className="w-[90px] lg:w-full" alt="hydra" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex lg:mt-12">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>SERVICES</a>
          </li>
          <li>
            <a>TECHNOLOGIES</a>
          </li>
          <li>
            <a>HOW TO</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="lg:mt-12 flex gap-6">
          <button className="border-2 border-white px-6 py-2 rounded-full">
            CONTACT US
          </button>
          <button className="base-gradient-color text-white px-6 py-2 rounded-full hover:text-black">
            JOIN HYDRA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

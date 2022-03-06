import Navbar from "./navbar";
import Footer from "./footer";
import Image from "next/image";
import Logo from "../public/VBlogo.jpg";
import Link from "next/link";

import Meta from "./meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="flex justify-between w-full mx-auto">
        <div className="flex w-16 h-16 m-4">
          <Link href="/">
            <button>
              <Image src={Logo} alt="Logo" className="rounded-2xl " />
            </button>
          </Link>
        </div>
        
        {children[0]}
      </div>

      <Navbar lang={children[1].props}></Navbar>

      <div>
        <main>{children[1]}</main>
      </div>

      <Footer lang={children[1].props} />
    </>
  );
};
export default Layout;

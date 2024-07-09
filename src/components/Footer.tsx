import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col  md:justify-between justify-center items-center">
          <div
            className="text-center md:text-left pb-2 md:pb-0 mt-5
          "
          >
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved by{" "}
              <span className="font-semibold">
                Snap
                <span className="text-green-600 " style={{ color: "#1cbb9e" }}>
                  Case
                </span>
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center mt-4 mb-5">
            <div className="flex space-x-12">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-green-800"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-green-800"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-green-800"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

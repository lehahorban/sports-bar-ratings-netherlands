import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="policy" className="py-6 bg-main">
        <div className="container">
          <div className="flex items-center justify-center gap-8">
            <Link
              className="text-white/70 hover:text-white font-semibold text-base "
              href={"policy"}
            >
              Terms of Service & Privacy Policy
            </Link>
            <p className="text-white font-semibold text-base ">
              © 2023, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

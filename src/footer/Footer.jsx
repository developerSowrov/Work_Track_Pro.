import img from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#795548] text-[#EEEEEE]">
      <div className="max-w-[1180px] mx-auto">
        <footer className="footer sm:footer-horizontal text-base-content p-10">
          <aside>
            <img
              src={img}
              className="w-28 h-28 "
              alt="Company Logo"
            />
            <p className="text-[#EEEEEE]">
              WrokTrackPro. Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title text-[#EEEEEE] font-bold">Services</h6>
            <a
              href="https://www.behance.net"
              target="_blank"
              className="link link-hover text-[#EEEEEE]"
            >
              Branding
            </a>
            <a
              href="https://www.figma.com"
              target="_blank"
              className="link link-hover text-[#EEEEEE]"
            >
              Design
            </a>
            <a
              href="https://ads.google.com"
              target="_blank"
              className="link link-hover text-[#EEEEEE]"
            >
              Marketing
            </a>
            <a
              href="https://www.facebook.com/business/ads"
              target="_blank"
              className="link link-hover text-[#EEEEEE]"
            >
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-[#EEEEEE] font-bold">Company</h6>
            <a href="/about" className="link link-hover text-[#EEEEEE] ">
              About us
            </a>
            <a href="/contact" className="link link-hover text-[#EEEEEE]">
              Contact
            </a>
            <a href="/careers" className="link link-hover text-[#EEEEEE]">
              Jobs
            </a>
            <a href="/press" className="link link-hover text-[#EEEEEE]">
              Press kit
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-[#EEEEEE] font-bold">Legal</h6>
            <a href="/terms" className="link link-hover text-[#EEEEEE]">
              Terms of use
            </a>
            <a href="/privacy" className="link link-hover text-[#EEEEEE]">
              Privacy policy
            </a>
            <a href="/cookies" className="link link-hover text-[#EEEEEE]">
              Cookie policy
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

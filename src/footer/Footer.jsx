import img from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-[1180px] mx-auto">
        <footer className="footer sm:footer-horizontal text-base-content p-10">
          <aside>
            <img src={img} className="w-28 h-28" alt="Company Logo" />
            <p>
              WrokTrackPro. Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a
              href="https://www.behance.net"
              target="_blank"
              className="link link-hover"
            >
              Branding
            </a>
            <a
              href="https://www.figma.com"
              target="_blank"
              className="link link-hover"
            >
              Design
            </a>
            <a
              href="https://ads.google.com"
              target="_blank"
              className="link link-hover"
            >
              Marketing
            </a>
            <a
              href="https://www.facebook.com/business/ads"
              target="_blank"
              className="link link-hover"
            >
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a href="/about" className="link link-hover">
              About us
            </a>
            <a href="/contact" className="link link-hover">
              Contact
            </a>
            <a href="/careers" className="link link-hover">
              Jobs
            </a>
            <a href="/press" className="link link-hover">
              Press kit
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a href="/terms" className="link link-hover">
              Terms of use
            </a>
            <a href="/privacy" className="link link-hover">
              Privacy policy
            </a>
            <a href="/cookies" className="link link-hover">
              Cookie policy
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

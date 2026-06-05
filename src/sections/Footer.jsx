const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="#" className="social-icon" aria-label="GitHub">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <img  src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border-none border-black-200;" aria-label="LinkedIn">
            <img src="/assets/linkedin.svg"  alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2026 MD Tanvir Rahman. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
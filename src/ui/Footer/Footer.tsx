import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-full">
      <footer className="container mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link to="https://www.facebook.com/" className="text-white">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link to="/contact" className="text-white">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
          <div className="text-white text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            dignissimos nobis nulla animi asperiores pariatur dolore modi itaque
            deleniti distinctio blanditiis a maxime hic possimus harum
            necessitatibus recusandae, vero aliquam!Lorem Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quo dignissimos nobis nulla
            animi asperiores pariatur dolore modi itaque deleniti distinctio
            blanditiis a maxime hic possimus harum necessitatibus recusandae,
            vero aliquam!Lorem Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quo dignissimos nobis nulla animi asperiores
            pariatur dolore modi itaque deleniti distinctio blanditiis a maxime
            hic possimus harum necessitatibus recusandae, vero aliquam!Lorem
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

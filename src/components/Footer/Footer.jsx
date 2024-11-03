import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-24">
      <section className="max-w-7xl mx-auto">
        <div className="text-center border-b-2 pb-8">
          <h2 className="text-4xl font-bold mb-3">Gadget Heaven</h2>
          <p className="text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <section className="footer p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

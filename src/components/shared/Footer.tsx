import Image from "next/image";
import logo from "@/assets/image/logo.png";
import play from "@/assets/image/play.png";
import app from "@/assets/image/app.png";
import qr from "@/assets/image/qr.png";
import Link from "next/link";
import Container from "../ui/container";

const Footer = () => {
  return (
    <div className="bg-black py-16">
      <Container>
        <div className="flex flex-col flex-wrap xl:justify-between justify-start gap-y-5 md:gap-x-2 md:flex-row">
          <div>
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={100}
              className="w-auto h-auto"
            />
            <p className="mt-2 max-w-[250px] text-primary-white/70">
              Ecommerce is a free UI Kit from Paperpillar that you can use for
              your personal or commercial project.
            </p>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Account</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/user/profile">My Account</Link>
              </li>
              <li className="flex gap-x-1">
                <Link href="/sign-in">Login</Link>/
                <Link href="/sign-up">Register</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>

              <li>
                <Link href="/products">Shop</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-condition">Terms Of Use</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li> 
            </ul>
          </div>

          {/* Support Information */}
          <div>
            <h3 className="mb-4 font-semibold text-primary-white">Support</h3>
            <ul className="space-y-2 text-primary-white">
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="mb-4 font-semibold text-primary-white">
              Download App
            </h3>
            <div className="flex items-center space-x-4">
              <Image
                src={qr}
                alt="QR Code"
                width={60}
                height={60}
                className="h-[60px] w-[60px]"
              />
              <div className="space-y-2">
                <Image
                  src={play}
                  alt="Download from Google Play"
                  width={135}
                  height={30}
                  className="h-8"
                />
                <Image
                  src={app}
                  alt="Download from App Store"
                  width={135}
                  height={600}
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

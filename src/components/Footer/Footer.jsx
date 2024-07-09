import React from "react";
import { Typography } from "@mui/material";
import signlogo from "../../assets/signlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LINKS = [
  {
    title: "Company",
    items: ["About", "Contact Us", "Support", "Careers"],
  },
  {
    title: "Quick Link",
    items: ["Share Location", "Orders Tracking", "Size Guide", "FAQ"],
  },
  {
    title: "Legal",
    items: ["Terms & Conditions", "Privacy Policy"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="footer relative w-full mt-16"
      style={{ backgroundColor: "#064F26" }}
    >
      <div className="mx-auto w-full max-w-7xl px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-24 my-10">
          <div className="flex flex-col items-start justify-center">
            <img src={signlogo} className="h-9 w-auto opacity-90 mb-8" />
            <Typography className="pt-1 text-left text-white">
              Retain an Organic and healthy lifestyle while shopping from us.
            </Typography>
            <div className="mt-10 flex gap-4 text-white">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FacebookIcon style={{ fontSize: 45 }} />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <InstagramIcon style={{ fontSize: 45 }} />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <XIcon style={{ fontSize: 45 }} />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <LinkedInIcon style={{ fontSize: 45 }} />
              </Typography>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-y-3 gap-x-1">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography className="text-gray-400 pb-2 font-normal">
                  {title}
                </Typography>
                <ul>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        className="block py-3 font-normal text-gray-400 transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

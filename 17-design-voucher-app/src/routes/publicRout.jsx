import React, { lazy } from "react";

const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));

const publicRout = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
];

export default publicRout;

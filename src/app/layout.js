import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SportsBarRatings Netherlands",
  description:
    "Welcome to SportsBarRatings Netherlands, the premier source for ratings and reviews of sports bars across the Netherlands. Discover the best places to watch your favorite sports, enjoy great food and drinks, and have a fantastic time! Whether you're a football fanatic, a basketball buff, or a tennis enthusiast, we've got you covered. Start exploring now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ToastContainer position="bottom-left" autoClose={3000} />
      </body>
    </html>
  );
}

import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";


export const metadata = {
  title: "TastyNest",
  description: "Discover and share delicious recipes on TastyNest. A platform to explore the world of food.",
  keywords: "recipes, cooking, food, tasty recipes, recipe app, meal ideas, food discovery",
  author: "Shahzad Ali",
  robots: "index, follow",
  googlebot: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

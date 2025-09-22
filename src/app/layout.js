import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import ClientAnalytics from "./client-analytics";
import ClientWrapper from "./client-wrapper";


export const metadata = {
  title: "TastyNest",
  description: "Discover and share delicious recipes on TastyNest. A platform to explore the world of food.",
  keywords: "recipes, cooking, food, tasty recipes, recipe app, meal ideas, food discovery",
  author: "Shahzad Ali",
  robots: "index, follow",
  googlebot: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientWrapper>
          <Suspense fallback={<Loading />}>
            {children}
            <ClientAnalytics />
          </Suspense>
        </ClientWrapper>
      </body>
    </html>
  );
}

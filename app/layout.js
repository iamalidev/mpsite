import { GlobalStyles } from "./utils/globalStyles";

export const metadata = {
  title: "Alisher Otaboyev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GlobalStyles />
      </body>
    </html>
  );
}

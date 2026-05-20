import "./globals.css";

export const metadata = {
  title: "Relay Miami | Secondhand Furniture, Made Easier",
  description:
    "Relay Miami makes secondhand furniture shopping simpler, safer, and more convenient through trusted local listings and delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

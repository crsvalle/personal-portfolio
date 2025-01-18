import "./globals.css";
import { Toaster } from "sonner"; 
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Cristian Valle",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster position="top-right" richColors /> 
      </body>
    </html>
  );
}

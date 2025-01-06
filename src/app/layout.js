import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import { Toaster } from 'sonner';
export const metadata = {
  title: "Nova Super App",
  description: "Nova Super app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right"/>
      </body>
    </html>
  );
}

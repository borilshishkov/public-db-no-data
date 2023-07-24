import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

import "src/styles/globals.css";

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-gradient-to-r from-slate-50 to-gray-200"
    >
      {" "}
      <body className="h-screen">
        <Sidebar className="" />
        <div className="container mx-auto sm:px-6 lg:ml-72 lg:px-8">
          {children}
        </div>

        <div className="lg:ml-72">
          <Footer />
        </div>
      </body>
    </html>
  );
}

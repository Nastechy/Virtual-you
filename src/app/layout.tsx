import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div>
       {children}
       </div>
      </body>
    </html>
  );
}


 {/* <div className="container mx-auto px-4 rounded-xl bg-[#66847A]">
        <div className='border'>
          <nav className="flex items-center justify-between bg-white rounded-full mt-4 px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-800 rounded-full p-2 ">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold">Virtual Pro</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Our Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Newsletter</a>
            </div>
            <Button className="bg-amber-400 hover:bg-amber-500 text-black rounded-[26px]">
              Sign in
            </Button>
          </nav>
        </div>

        <div className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Nigeria and Africa's Digital <br></br> Economy
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Driving the transformation to a digital economy with innovative cloud-based services and digital infrastructure.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-black rounded-[26px]">
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className=" hover:bg-white/10 rounded-[26px]">
              Contact Us Today
            </Button>
          </div>
        </div>
        <Card className="bg-white mb-20">
          <div className="bg-white text-white p-6 rounded-t-lg">
            <h2 className="text-xl text-blue-600 font-semibold">Welcome, Johnson</h2>
            <p className="text-sm text-blue-600">Manage your identity, applications with ease, from your home.</p>
          </div>
          <CardContent className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { title: 'Visa Application', color: 'bg-blue-500', icon: '✈️' },
                  { title: 'Tax Remittance', color: 'bg-orange-500', icon: '💰' },
                  { title: 'Education', color: 'bg-indigo-500', icon: '🎓' },
                  { title: 'Medical', color: 'bg-emerald-500', icon: '🏥' },
                ].map((action, index) => (
                  <div key={index} className="text-center">
                    <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-white`}>
                      {action.icon}
                    </div>
                    <span className="text-sm text-gray-600">{action.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}

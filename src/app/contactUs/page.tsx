import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
    return (
        <div>
            <div className="container mx-auto max-w-7xl py-10">
                <Navbar bg={"bg-[#FAFAFA]"} />
            </div>
            <div className="container mx-auto max-w-7xl px-4 py-10">
                <h2 className="text-2xl md:text-[36px] font-bold text-[#466A5E] mb-8">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8" >
                    <div className="space-y-6 mt-6 ">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-[14px] font-[500] mb-1 text-[#344054]">Your Name</label>
                                <Input
                                    id="name"
                                    type="text"
                                    className="border-gray-200 h-12"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[14px] font-[500] mb-1 text-[#344054]">Your Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    className="border-gray-200 h-12"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-[14px] font-[500] mb-1 text-[#344054]">Subject</label>
                            <Input
                                id="subject"
                                type="text"
                                className="border-gray-200 h-12"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-[14px] font-[500] mb-1 text-[#344054]">Enter Message</label>
                            <Textarea
                                id="message"
                                className="min-h-[160px] border-gray-200"
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg space-y-6">
                        <div className="flex items-start gap-3">
                            <MdLocationOn className="w-5 h-5 text-emerald-800 mt-1" />
                            <div>
                                <div className="font-medium mb-2">Address</div>
                                <p className="text-gray-600">No. 789 Zunger Street, 4th Avenue, Gwarinya, Abuja.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <MdMail className="w-5 h-5 text-emerald-800 mt-1" />
                            <div>
                                <div className="font-medium mb-2">Email us directly</div>
                                <p className="text-gray-600">info@datastarkey.com, mailto:info@datastarkey.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <MdPhone className="w-5 h-5 text-emerald-800 mt-1" />
                            <div>
                                <div className="font-medium mb-2">Phone</div>
                                <p className="text-gray-600">+2347033095827</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="font-[600] text-[#344054] mb-4 ">Follow us on Social Media</div>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-600 hover:text-emerald-800">
                                    <FaYoutube className="w-5 h-5" />
                                    <span className="sr-only">YouTube</span>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-emerald-800">
                                    <FaFacebook className="w-5 h-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-emerald-800">
                                    <FaTwitter className="w-5 h-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-emerald-800">
                                    <FaInstagram className="w-5 h-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-emerald-800">
                                    <FaLinkedin className="w-5 h-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Button className="bg-[#FAC241] mt-5 hover:bg-yellow-500 rounded-[30px] font-[600] text-[16px] text-[#333333]">
                    Submit
                </Button>
            </div>

            <div className='px-4 py-5'>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;

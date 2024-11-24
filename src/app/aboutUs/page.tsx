import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import { TeamMemberCard } from "@/components/teamMembers";
import { CardContent } from "@/components/ui/card";
import { aboutus, servicesData, teamMembers } from "@/data/mappings";
import Image from "next/image";




const AboutUs: React.FC = () => {
    return (
        <div>
            <div className="container mx-auto max-w-7xl py-10">
                <Navbar bg={"bg-[#FAFAFA]"} />
            </div>
            <div className="bg-white ">
                <div className="container mx-auto max-w-7xl bg-[#FAFAFA] rounded-[24px]">
                    <div className=" p-8">
                        <div className="text-[26px] md:text-[36px] font-bold text-[#466A5E] text-center mb-6">
                            Our Story
                        </div>

                        <div className="space-y-6 text-[#333333] text-[16px] text-center">
                            <p className="leading-relaxed">
                                At Data Starkey Network Limited (DSNL),
                                our journey began with a vision to bridge the
                                gap between Africa and the global digital economy.
                                Founded in 2009 by Hyacinth Nwachukwu Wariboko
                                after years of research and collaboration, DSNL has
                                emerged as a pioneer in cloud-based digital services and
                                infrastructure development. The need for an innovative
                                approach was evident, and through the efforts of our
                                team, we have evolved into a full suite of Digital
                                Services to conceive of the groundbreaking VirtualYou
                                Cloud-Based Service Application Platform. This collaboration,
                                guided by Professor Abbas and supervised by Dr. H.O. Longe
                                (now Professor Longe), and the foundation for the transformative
                                solutions we provide today. At DSNL, we are driven by a mission
                                to support African governments, multinational organizations,
                                and individual citizens in transitioning to a digital economy.
                            </p>

                            <p className="leading-relaxed">
                                Our vision is to be the first African
                                company to deliver digital services on a global scale,
                                showcasing innovation and excellence born out of Africa.
                                Guided by our values, we continue to develop solutions
                                that make a tangible impact. Join us as we change narratives
                                and shape the digital landscape of tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className="py-6 md:py-20 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-2xl font-bold text-[#466A5E] text-center mb-8">
                            Our Mission, Visions and Core Values
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {aboutus.map((item, index) => (
                                <div key={index} className="bg-[#FAFAFA] rounded-[12px]" >
                                    <CardContent className="p-6">
                                        <div className="flex justify-start mb-4">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="w-20 h-20"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2C3E50] mb-2 text-start">
                                            {item.title}
                                        </h3>
                                        {Array.isArray(item.content) ? (
                                            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                                                {item.content.map((value, idx) => (
                                                    <li key={idx}>{value}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.content}
                                            </p>
                                        )}
                                    </CardContent>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
                    <div className="flex items-center justify-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#466A5E] mb-4 md:mb-8">
                            {servicesData.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-0 md:mt-4">
                        <div className="relative bg-gray-100 rounded-[20px] overflow-hidden" >
                            <Image
                                src="/laptoplady.png"
                                width={637}
                                height={542}
                                alt="Person using VirtualYou platform"
                            />
                        </div>
                        <div className="space-y-6 ">
                            {servicesData.services.map((service, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-[20px] text-base mb-1 text-[#333333]">{service.title}</h3>
                                    <p className="text-[16px] font-[400] leading-relaxed text-[#333333]">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className="container mx-auto px-4 py-24">
                    <div className="mb-16 text-center">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                            Meet The Team
                        </h2>
                        <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Our leadership team
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {teamMembers.map((member) => (
                            <TeamMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>
            </div>

            <div className='px-4 py-5'>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs;
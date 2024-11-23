'use client'

import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import ServicesSection from '@/components/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { benefits, posts, processSteps, quickActions } from '@/data/mappings';
import { ArrowRight } from 'lucide-react';


const VirtualProPlatform: React.FC = () => {

  return (
    <div>
      <div className="px-4 pt-4">
        <div className="min-h-screen rounded-xl bg-[#466A5E] bg-cover bg-center" style={{ backgroundImage: "url('/linegrid.png')" }}>
          <div className="container mx-auto px-4 pt-7">
            <div>
              <NavBar bg='bg-white' />
            </div>
            <div className="text-center py-10 md:py-20">
              <h1 className="text-[30px] md:text-[44px] font-bold text-white mb-6">
                Empowering Nigeria and Africa's Digital <br></br> Economy
              </h1>
              <p className="text-[16px] text-white/90 mb-8 ">
                Driving the transformation to a digital economy with innovative cloud-based services and digital infrastructure.
              </p>
              <div className="flex items-center justify-center gap-4 flex-col md:flex-row ">
                <Button size="lg" className="bg-[#FAC241] font-[600] text-[16px] hover:bg-yellow-500 rounded-[24px] text-black">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline" className="bg-[#466A5E] font-[600] text-[16px] rounded-[24px] text-white hover:bg-white/10">
                  Contact Us Today
                </Button>
              </div>
            </div>
            <div className="max-w-5xl mx-auto bg-white rounded-t-[20px]">
              <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-16">
                <h1 className="text-[#003490] text-[17px] font-bold">Virtual You</h1>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-[500] text-[12px]">Johnson Okoli</div>
                    <div className="text-sm text-[#98A2B3] text-[11px]">USER 5281 857K</div>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="/userImage.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className='border-b'></div>
              <div className='bg-[#FCFCFD] pt-6 px-4 sm:px-16'>
                <div>
                  <img
                    src="/bluebg.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="mb-6 flex justify-between items-center my-6 w-full">
                    <h3 className="md:text-lg text-[12px] font-[600]">Quick Actions</h3>
                    <div className="relative w-full sm:w-[50%]">
                      <Input
                        type="search"
                        placeholder="Search"
                        className=" py-2 w-full rounded-lg border border-gray-200"
                      />
                      <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                      <div key={index} className="flex flex-col text-start px-4 pt-4 rounded-t-[12px] border border-[#EAECF0] bg-white">
                        <div className={`${action.color}  w-10 h-10 rounded-full flex items-center justify-center mb-2 text-white`}>
                          {action.icon}
                        </div>
                        <div className='flex flex-col text-start'>
                          <span className="text-sm text-[#475467] font-[400]">{action.title}</span>
                          <span className="text-[10px] text-[#98A2B3]">{action.subtitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ServicesSection />
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <span className="text-[#FAC241] font-[700] text-[18px] mb-4 block">How VirtualYou Works</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#466A5E] max-w-4xl mx-auto">
              A Simple and Secure Process for Seamless Data Access
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img src="/laptoplady.png"
                alt="Person using VirtualYou platform"
                className="object-cover" />
            </div>

            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#466A5E] flex items-center justify-center">
                    <span className="text-white font-semibold">{step.number}</span>
                  </div>
                  <div className='border-r'></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
              <Button size='lg' className="bg-[#FAC241] hover:bg-yellow-500 font-[600] text-[16px] text-[#333333]">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-10 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 flex items-center justify-center flex-col">
          <div className="text-center mb-12">
            <div className="text-[#F9C241] font-bold text-[18px] mb-2 mt-10 block text-center">Key Benefits</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#466A5E]">Why Choose DSNL?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-none text-center">
                <CardContent className="pt-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <benefit.icon className="w-14 h-14 text-[#466A5E]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 font-semibold text-[#466A5E]mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="bg-[#FAC241] hover:bg-yellow-500 font-[600] text-[16px] text-[#333333]">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 " />
          </Button>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <span className="text-[#F9C241] font-bold text-[18px] mb-4 block">Our Updates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#466A5E] max-w-3xl mx-auto">
              Stay Informed with the Latest Insights and Developments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="relative aspect-[2/1] bg-slate-900 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <time className="text-sm text-gray-500">{post.date}</time>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className='p-4'>
        <Footer />
      </div>
    </div >
  );
}

export default VirtualProPlatform;

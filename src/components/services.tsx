import React from 'react';
import { Card, CardContent } from './ui/card';
import { services } from '@/data/mappings';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
    return (
        <div className='bg-[#FAFAFA] py-10'>
            <div className="container mx-auto mb-20 px-4">
                <div className="text-[#F9C241] font-bold text-[18px] mb-2 mt-20 block text-center">Our Services</div>
                <div className="text-[24px] md:text-[36px] font-bold text-[#466A5E] text-center mb-4">
                    Cutting-Edge Digital Services Tailored for the Future
                </div>
                <p className="text-[#466A5E] text-center max-w-4xl mx-auto mb-16 text-[16px] font-[400]">
                    At Data Starkey Network Limited (DSNL), our services are designed
                    to empower businesses, governments, and individuals in Africa and
                    beyond with robust, future-ready digital solutions.
                    With over 30 years of expertise in digital transformation,
                    we specialize in the following areas:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border-0 shadow-none">
                            <CardContent className="p-6">
                                <div className="mb-6">
                                    <div className="w-12 h-12 rounded-[8px] bg-[#FAFAFA] flex items-center justify-center mb-4">
                                        <Image
                                            src="/pen.png"
                                            alt="pen"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                    <h3 className="text-[24px] font-bold text-[#466A5E] mb-3">{service.title}</h3>
                                    <p className="text-[#5D7C72] mb-4">{service.description}</p>
                                </div>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
                                            <span className="mr-2 text-emerald-800">•</span>
                                            <span>
                                                <strong className="font-semibold">{feature.split(':')[0]}:</strong>
                                                {feature.split(':')[1]}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;

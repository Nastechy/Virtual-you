import Footer from '@/components/footer'
import Navbar from '@/components/navBar'
import ServicesSection from '@/components/services'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="container mx-auto max-w-7xl py-10">
                <Navbar bg={"bg-[#FAFAFA]"} />
            </div>
            <div>
                <ServicesSection />
            </div>
            <div className='px-4 bg-[#FAFAFA]'>
                <Footer />
            </div>
        </div>
    )
}

export default page

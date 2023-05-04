import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa';



const Footer = () => {
    return (
        <div className='max-w-[1240px] py-16 px-4 mx-auto grid gap-8 lg:grid-cols-3 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p lassName='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. quibusdam 
                    error nisi atque, ipsum ducimus Vitae earum ipsa hic neque dolores
                    sed voluptas natus facilis rerum sapiente eius et repudiandae odio ?
                </p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>

            <div className='flex lg:col-span-2 mt-6 justify-between'>
                <div>
                    <h6 className="text-gray-400 font-medium">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-gray-400 font-medium">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Princing</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-gray-400 font-medium">Comapany</h6>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Job</li>
                        <li className="py-2 text-sm">Press</li>
                        <li className="py-2 text-sm">Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-gray-400 font-medium">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
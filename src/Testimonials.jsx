import React, { useState } from 'react'

function Testimonials() {    
    
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Dental Now Clinic",
            title: "",
            quote: "We are happy to have Maxwell make our website because he is fast and flexible when we gave him feedback on the design we wanted."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Tabea Kopi",
            title: "",
            quote: "Maxwell wanted to build a website for us after trying our coffee, and I immediately accepted the offer. No regrets to this day."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Soulfit Fitness Gym",
            title: "",
            quote: "We needed a website as fast as possible and Maxwell delivered it. Even after the website was published, he was open to fixing it until the website is perfect for us."
        },
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14 bg-background" id='testimonials'>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-primary font-semibold font-mono pb-6">What people have said</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-text text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                {/* <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" /> */}
                                                <div className="mt-3">
                                                    <span className="block text-text font-semibold">{item.name}</span>
                                                    <span className="block text-text text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-primary focus:ring ${currentTestimonial == idx ? "bg-primary" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
    
}

export default Testimonials
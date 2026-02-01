import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Experience() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const bars = gsap.utils.toArray('.bar');
        const dots = gsap.utils.toArray('.dot');
        const review = gsap.utils.toArray('.review');
        const work = gsap.utils.toArray('.work');

        // 1. Animate Dots (Scale in)
        dots.forEach((dot) => {
            gsap.fromTo(dot,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: dot,
                        start: "top 85%",
                        end: "top 75%",
                        scrub: 0.5
                    }
                }
            );
        });

        // 2. Animate Bars (Growth)
        bars.forEach((bar) => {

            gsap.fromTo(bar,

                {

                    height: 0,

                    width: "2px",

                    backgroundColor: "red",

                    opacity: 0 // Optional: makes it look smoother

                },

                {

                    height: "290px", // The total height it will reach

                    ease: "none",

                    opacity: 1,   // Important: use "none" so height matches scroll 1:1

                    scrollTrigger: {

                        trigger: bar,

                        start: "top 80%",   // Start growing when bar is 80% down the screen

                        end: "top 10%",     // Finish growing when bar reaches 20% from the top

                        scrub: true,        // Links animation progress to scroll

                        // markers: true    // Turn on to see the start/end lines while testing

                    }

                }

            );

        });



        review.forEach((rev) => {

            gsap.fromTo(rev,

                {

                    x: -50,

                    opacity: 0

                },

                {

                    ease: "none",

                    x: 0,

                    opacity: 1,

                    duration: 1,

                    scrollTrigger: {

                        trigger: rev,

                        start: "top 90%",

                        end: "top 20%",

                        scrub: true,

                    }

                }

            );

        });



        work.forEach((wrk) => {

            gsap.fromTo(wrk,

                {

                    x: 50,

                    opacity: 0

                },

                {

                    ease: "none",

                    x: 0,

                    opacity: 1,

                    duration: 1,

                    scrollTrigger: {

                        trigger: wrk,

                        start: "top 90%",

                        end: "top 20%",

                        scrub: true,

                    }

                }

            );

        });

    }, { scope: containerRef });

    const expCards = [
        {
            review: "I selected in top 8 of celo blockchain hackathon",
            imgPath: "/images/exp1.png",
            logoPath: "/images/logo1.png",
            title: "Fullstack Developer",
            date: "January 2023 - Present",
            responsibilities: ["Develop smart contracts", "Optimized speed.", "Collaborated with UI/UX."]
        },
        {
            review: "Our project select as a best innovation project in ICC",
            imgPath: "/images/exp2.png",
            logoPath: "/images/logo2.png",
            title: "Full Stack Developer",
            date: "June 2020 - Dec 2023",
            responsibilities: ["Refining ideas", "Models train", "presentation"]
        },{

    review:"Became Second runner up in ISA ideathon in JADAVPUR university",

    imgPath: "/images/exp3.png",

    logoPath: "/images/logo3.png",

    title: "ML Developer",

    date: "March 2019 - May 2020",

    responsibilities: [

      "Idea refining",
        "Trained multiple models for classification.",
        
      "Worked closely with data scientists to implement machine learning algorithms.",
  

    ],

  },{
    review: "got slected top 8 in HACKxios Hackathon in IIt BHOPAL",

    imgPath: "/images/exp4.png",

    logoPath: "/images/logo4.png",

    title: "Frontend Developer",

    date: "July 2022 - Present",

    responsibilities: [

      "Worked on responsive design.",

      "Implemented interactive UI components.",

      "Collaborated with backend developers.",

    ],

  },{
    review:" Be a super contributer in HAcktoberfest",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Open Source Contributor",
    date: "October 2022 - Present",
    responsibilities: [
      "Contributed to various open source projects.",
      "Fixed bugs and improved documentation.",
      "Mentored new contributors.",
    ],
  },{
    review : "got selected top 20 teams in lovable hackathon",
    
    imgPath:"/images/exp6.png",
    logoPath:"/images/logo6.png",
    title:"Blockchain Developer",
    date:"Feb 2022 - Present",
    responsibilities: [
      "Developed decentralized applications (dApps).",
      "Implemented smart contracts.",
      "Conducted code reviews and mentored junior developers.",
    ],
  }
    ];

    return (
        <div ref={containerRef} className="container mx-auto py-20">
            {expCards.map((card, index) => (
                <div key={index} className="flex items-stretch min-h-[300px]">

                    {/* Left: Review */}
                    <div className="review w-1/3 p-6 flex flex-col justify-center border-2 border-red-500 rounded-xl mb-10">
                        <img src={card.imgPath} alt="" className="rounded-lg mb-4" />
                        <p className="text-gray-600 italic">"{card.review}"</p>
                    </div>

                    {/* Middle: Continuous Timeline */}
                    <div className="flex flex-col items-center w-20">
                        <div className="dot w-4 h-4 rounded-full bg-red-600 z-10" />
                        <div className="flex-1 w-[2px]  relative">
                            <div className="bar absolute top-0 w-full bg-red-600 origin-top" />
                        </div>
                    </div>

                    {/* Right: Work Details */}
                    <div className="work w-2/3 p-6 mb-10 border-2 border-blue-500 rounded-xl">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={card.logoPath} alt="" className="w-12 h-12" />
                            <div>
                                <h3 className="text-xl font-bold">{card.title}</h3>
                                <p className="text-gray-400">{card.date}</p>
                            </div>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                            {card.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                    </div>
                </div>
            ))}

            {/* Final Dot to close the timeline */}
            <div className="flex justify-center w-full">
                <div className="dot w-4 h-4 rounded-full bg-red-600 ml-[calc(-66% + 20px)] md:ml-[-10px]" />
            </div>
        </div>
    );
}

export default Experience;
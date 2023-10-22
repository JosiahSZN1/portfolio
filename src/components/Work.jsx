import React from "react";
import WorkItem from "./WorkItem";

const substituteTeacherDetails = (
    <ul>
        <li><span className="text-2xl">&#8226; </span>Educated grades K-12 serving over 85,000 students in Fresno County</li>
        <li><span className="text-2xl">&#8226; </span>Introduced and taught basic programming with Scratch by MIT to incoming sixth-grade students</li>
        <li><span className="text-2xl">&#8226; </span>Supervised two Summer Teaching Academy interns from Fresno Unified for an elementary summer school term, providing them with opportunities for direct collaboration with students and practice at classroom management</li>
        <li><span className="text-2xl">&#8226; </span>Communicated with other staff and school district administrations using Microsoft Teams and collaborated with other teachers for sharing curriculum suggestions</li>
        <li><span className="text-2xl">&#8226; </span>Sustained momentum of lesson plans provided by teachers in their absence to maintain and improve students’ academic standing</li>
    </ul>
)

const socialWorkerIIDetails = (
    <ul>
        <li><span className="text-2xl">&#8226; </span>Collaborated with a multidisciplinary team of medical professionals to develop safe discharge plans for 30+ patients daily, who have limited access to resources for aftercare, and are no longer necessitating acute care, resulting in an average 6.87 days length of stay at a 685-bed hospital</li>
        <li><span className="text-2xl">&#8226; </span>Documented and organized case management notes with Epic EHR, referencing medical records of patients during the hospital stay, to maintain HIPAA compliance and continuity of care</li>
        <li><span className="text-2xl">&#8226; </span>Trained seven newly hired social workers including a post-graduate intern, assisting them with meeting proficiency benchmarks and introducing them to the daily expectations of a medical social worker, allowing opportunities for them to assess patients independently and then debrief outcomes of the interactions</li>
        <li><span className="text-2xl">&#8226; </span>Provided outpatient case management support to pulmonary rehabilitation patients, via bi-weekly follow-up sessions and monthly stress management classes</li>
    </ul>
)

const data = [
    {
        year: 2022,
        title: "Substitute Teacher ",
        duration: "1 Years",
        details: substituteTeacherDetails,
    },
    {
        year: 2017,
        title: "Social Worker II",
        duration: "5 Years",
        details: socialWorkerIIDetails,
    },
    // {
    //     year: 2025,
    //     title: "Web Developer",
    //     duration: "2 Years",
    //     details:
    //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cum ab ratione deserunt vitae optio illum provident facere debitis rerum, animi excepturi, praesentium quia eaque, eius nesciunt magni illo cupiditate.",
    // },
    // {
    //     year: 2023,
    //     title: "Web Developer",
    //     duration: "2 Years",
    //     details:
    //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem cum ab ratione deserunt vitae optio illum provident facere debitis rerum, animi excepturi, praesentium quia eaque, eius nesciunt magni illo cupiditate.",
    // },
];
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;

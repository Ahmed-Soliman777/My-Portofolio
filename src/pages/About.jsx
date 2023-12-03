import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { skills, certificates } from '../constants/index'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'>Ahmed</span></h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          React Frontend Developer from Qena City - Egypt, and I am looking for an internship.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className='subhead-text'>My skills</h3>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl' />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        ))}
      </div>
      <div className="py-16">
        <h3 className='subhead-text'>Certificates</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I have gained many certificates so that I could improve my skills.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {certificates.map((certificate) => (
              <VerticalTimelineElement
                key={certificate.company_name}
                date={certificate.date}
              >
                <div className="">
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {certificate.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {certificate.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {certificate.points.map((point, index) => (
                    <li key={`certificate-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About

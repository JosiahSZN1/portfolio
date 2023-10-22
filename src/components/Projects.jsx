import React from 'react'
import ProjectItem from './ProjectItem'
import abletonImg from '../assets/ableton.png'
import critterImg from '../assets/critter.jpg'
import epicImg from '../assets/epic.jpg'
import facebookImg from '../assets/facebook.png'
import sketchImg from '../assets/sketch.jpeg'
import blindDateImg from '../assets/blindDate.jpeg'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 0y-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum expedita fuga. Quaerat praesentium, magnam quasi magni omnis cum quis similique aliquid, sint fugiat assumenda facilis in fuga vitae ex!
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={sketchImg} title='Sketch.'/>
                <ProjectItem img={blindDateImg} title='BlindDate'/>
                {/* <ProjectItem img={critterImg} title='Critter & Guitari'/>
                <ProjectItem img={facebookImg} title='Facebook'/> */}
            </div>
        </div>
    )
}

export default Projects
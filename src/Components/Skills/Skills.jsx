import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import './Skilss.css'
import Tools from './Tools'

export const Skills = () => {
    return (
        <section className="section__skills section skilld" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                My technical skills
            </span>


            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Tools />
            </div>
        </section>
    )
}

import React from 'react'
import { DiGithubBadge, DiNpm, DiVisualstudio } from 'react-icons/di'
import { SiPostman } from 'react-icons/si'


const Tools = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools Skills</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data skills-card">
                        <DiGithubBadge className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                Github
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data skills-card">
                        <DiVisualstudio className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                               Visual Studio
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data skills-card">
                        <SiPostman className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                               Postman
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data skills-card">
                        <DiNpm className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                               npm
                            </h3>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Tools
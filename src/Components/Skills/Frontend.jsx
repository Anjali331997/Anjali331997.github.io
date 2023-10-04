import React from 'react'
import {
    DiJavascript1,
    DiReact,

    DiGithubBadge,
    DiBootstrap,
    DiHtml5,
    DiCss3,


} from "react-icons/di";
import { SiRedux, SiTailwindcss, SiReactrouter, SiChakraui } from "react-icons/si";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <DiReact className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                React
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <DiHtml5 className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                HTML
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <DiCss3 className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                CSS
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <SiRedux className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                Redux
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <DiJavascript1 className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                Javascript
                            </h3>
                        </div>
                    </div>


                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <SiTailwindcss className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                Tailwind
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <DiBootstrap className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                Bootstrap
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <DiGithubBadge className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                Github
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <SiReactrouter className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                Router
                            </h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <SiChakraui className="skills-card-img" />
                        <div>
                            <h3 className="skills__name skills-card-name">
                                ChakraUI
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
import React from 'react'
import {
    DiNodejs,
    DiMongodb,
 


} from "react-icons/di";
import {  SiExpress,   SiMongoose, SiJsonwebtokens } from "react-icons/si";


const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Skills</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <DiNodejs className="skills-card-img" />
                <div>
                    <h3 className="skills__name skills-card-name">
                        NodeJs
                    </h3>
                </div>
            </div>

            
            <div className="skills__data">
                <SiExpress className="skills-card-img" />
                <div>
                    <h3 className="skills__name skills-card-name">
                       ExpressJs
                    </h3>
                </div>
            </div>
            <div className="skills__data">
                <SiMongoose className="skills-card-img" />
                <div>
                    <h3 className="skills__name skills-card-name">
                        Mongoose
                    </h3>
                </div>
            </div>
            <div className="skills__data">
                <DiMongodb className="skills-card-img" />
                <div>
                    <h3 className="skills__name skills-card-name">
                       MongoDb
                    </h3>
                </div>
            </div>
            <div className="skills__data">
                <SiJsonwebtokens className="skills-card-img" />
                <div>
                    <h3 className="skills__name skills-card-name">
                        JWT
                    </h3>
                </div>
            </div>
          
            
        </div>
    </div>
</div>

  )
}

export default Backend
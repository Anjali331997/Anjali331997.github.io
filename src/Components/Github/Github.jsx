import React from 'react';
// import {
//     StatsContCont,
//     StatsCont,
//     StatsContDiv,
//     StatsContH1,
//     StatsContH3,
//     LastStat,
//     section,
//     div,
// } from './Styles';
// import GitHubCalendar from 'react-github-calendar';

import './Github.css'

export const GithubStats = () => {
    return (
        <section className='container section'>
            <h1 className="home-about-description section__title">Days I <span className="purple">Worked</span> </h1>
            <span className="section__subtitle">
                Github Stats
            </span>

            {/* <GitHubCalendar className='react-activity-calendar' 
            username="anjali331997" 
            style={{ width: '100%', display: 'block', margin: 'auto', color:"#0A81AB"}} /> */}

            <img className='react-activity-calendar'
                alt='github calender'
                style={{ width: '80%', display: 'block', margin: 'auto' }}
                src='https://ghchart.rshah.org/404040/Anjali331997'
            />
            <h1 className="home-about-description section__title">My <span className="purple">Statistics</span> </h1>
            <div className='gitstat_section'>
                <div className='stats'>
                    <img id="github-stats-card" align="center" src="https://github-readme-stats.vercel.app/api?username=Anjali331997&hide_border=true&include_all_commits=false&count_private=true" alt="Anjali331997" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} />
                </div>
                <div className='stats'>

                    <img id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=Anjali331997&hide_border=true" alt="Anjali331997" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} />
                </div>
                
            </div>
            <div className='stats_last'>
                    <img id="github-top-langs" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=anjali331997&size_weight=0.5&count_weight=0.5" alt="Anjali331997" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} />
                </div>
        </section>
    )
}

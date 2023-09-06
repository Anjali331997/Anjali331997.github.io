import React from 'react';
import {
    StatsContCont,
    StatsCont,
    StatsContDiv,
    StatsContH1,
    StatsContH3,
    LastStat,
    Container,
    MainContainer,
} from './Styles';

export const GithubStats = () => {
  return (
    <Container>
            <h1 className="home-about-description">Days I <span className="purple">Worked</span> </h1>
            <img
                src='https://ghchart.rshah.org/021F34/Anjali331997'
                alt='fdsdf'
                style={{ width: '80%', display: 'block', margin: 'auto' }}
            />
            <h1 className="home-about-description">My <span className="purple">Statistics</span> </h1>
            <MainContainer>
            <div className='stats'>
                <img align="center" src="https://github-readme-stats.vercel.app/api?username=Anjali331997&hide_border=true&include_all_commits=false&count_private=true" alt="Anjali331997" style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}/>
                <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=Anjali331997&hide_border=true" alt="Anjali331997"  style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}/>
            </div>
            </MainContainer>
        </Container>
  )
}

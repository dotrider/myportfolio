import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import resume from '../Resume/Miranda_WPX17_20200403_.pdf';
import './About.css';

const About = () => {

    return(
        <section id='about'>
                 <h2 className='headings'>About Me</h2>
                 <div className='aboutContainer'>
                <div className='para'>
                    <p>Hello there, My name is Pablo, I'm a full stack web developer in the Phoenix area. It’s amazing all the awesome things you can build with some coding and a little bit of imagination right?!</p>
                    <br/>
                    <p>
                   I have a degree in web and graphic design, I also recently had the oportunity to attend DevMountain, an immersive three month coding bootcamp. 
                   </p>
                   <p>
                       Through my experience there I was able to build Full Stack Web Applications using P.E.R.N stack "PostgreSql, Express.js, React.js and Node.js". 
                   </p>
                   <p>
                   I also had the opportunity to collaborate with other classmates in group projects.
                   </p>
                   
                    <br/>
                    <p>
                        Besides coding, I like to do outdoor activities such as hiking, camping and explore Arizona's beautiful backcountry.
                    </p>
                    <br/>
                    <p>
                        I'm passionate about what I do and would like to collaborate in your projects. Let's connect!

                    </p>
            
                 </div>
                 <div className='connect'>
                 <div id='resume-container'>
                     <a href={resume} target='_blank' rel='noopener noreferrer'><span id='resume'>Resume</span></a>
                 </div>
                 <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="linkedin"
                 iconColor="#0077B5" backgroundColor="rgba(28,186,223,0)" iconSize="1"
                 url="https://www.linkedin.com/in/pablo-e-miranda/" size="60" />
                 <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"  icon="github"
                 iconColor="#FFFFFF" backgroundColor="rgba(28,186,223,0)" iconSize="1"
                 url="https://github.com/dotrider" size="60" />
                 <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="mail" iconColor="#373737"
                 backgroundColor="rgba(28,186,223,0)" iconSize="5" url="mailto:pabmiranda.e@gmail.com" size="60" />
                 </div>
                 </div>
        </section>
    )
}

export default About;
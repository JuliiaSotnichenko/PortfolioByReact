import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
    render(){
        return (
    <div>
        <section class="about"> <a name="about"></a>
    <div class="container">
        <div class="about__wrapper">
            <div class="about__photo">
                <img src="asset/img/yuliiaDev.jp" alt="photo"/>
            </div>
            <div class="about__descr">
                <h2 class="title title_fz16 about__title">About Me</h2>
                <div class="title title_fz36 about__subtitle">My name is Yuliia</div>
                <div class="divider"></div>
                <p class="about__text">I'm a Web-Developer and a fun person, passionate about code. I was the Head of lead generation specialists for an IT company and continuing my path as a Front-end Developer. Focused on integrating experience and new skills into the Front-end Developer position as much as possible. </p>
            </div>
            <div class="about__skills">
                <div class="about__skills-item">
                    <div class="about__skills-circle">
                        <img src="icons/about_me/web_development.svg" alt="web-dev"></img>
                    </div>
                    <div>
                        <div class="title title_fz14">
                            Web development
                        </div>
                        <div class="about__skills-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div class="about__skills-item">
                    <div class="about__skills-circle">
                        <img src="icons/about_me/mobile_dev.svg" alt="mobile-dev"></img>
                    </div>
                    <div>
                        <div class="title title_fz14">
                            Application Development
                        </div>
                        <div class="about__skills-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
                <div class="about__skills-item">
                    <div class="about__skills-circle">
                        <img src="icons/about_me/design.svg" alt="design"></img>
                    </div>
                    <div>
                        <div class="title title_fz14">
                            UI/UX Design
                        </div>
                        <div class="about__skills-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
        )
    }
}



export default About
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Experience extends React.Component {
    render(){
        return(
            <div>
                <section class="resume">
    <div class="container">
        <h2 class="title title_fz16 title__section-title">Experience</h2>
        <div class="title title_fz36 resume__subtitle">How will I be useful</div>
        <div class="divider"></div>

        <div class="resume__wrapper">
            <div class="resume__column">
                <h3 class="title title_fz20 resume__column-title">Education</h3>
                <ul>
                    <li>
                        <div class="resume__item">
                            <div class="resume__item-head">
                                <div class="resume__item-icon">
                                    <img src="icons/experience/university.svg" alt="university"></img>
                                </div>
                                <h4 class="title title_fz14">Kiev International University of Civil Aviation</h4>
                                <div class="resume__item-location">Bachelor's degree in Marketing | Ukraine (2007-2012)</div>
                            </div>
                           
                            <div class="resume__item-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="resume__item">
                            <div class="resume__item-head">
                                <div class="resume__item-icon">
                                    <img src="icons/experience/courses.svg" alt="courses"></img>
                                </div>
                                <h4 class="title title_fz14">Udemy</h4>
                                <div class="resume__item-location">Курсы по Web-разработке </div>
                            </div>
                            <div class="resume__item-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="resume__column">
                <h3 class="title title_fz20 resume__column-title">Work experience</h3>
                <ul>
                    <li>
                        <div class="resume__item">
                            <div class="resume__item-head">
                                <div class="resume__item-icon">
                                    <img src="icons/experience/developer.svg" alt="developer"></img>
                                </div>
                                <h4 class="title title_fz14">Head of lead generation specialists</h4>
                                <div class="resume__item-location"> ABM Cloud | Ukraine (2018-2020)</div>
                            </div>
                            <div class="resume__item-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="resume__item">
                            <div class="resume__item-head">
                                <div class="resume__item-icon">
                                    <img src="asset/icons/experience/designer.svg" alt="designer"></img>
                                </div>
                                <h4 class="title title_fz14">Information Technology Sales Manager</h4>
                                <div class="resume__item-location">Squad Team | Москва (2018)</div>
                            </div>
                            <div class="resume__item-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
            </div>
        )
    }
}


export default Experience
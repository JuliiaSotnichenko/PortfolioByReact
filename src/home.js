import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
            <div>
                
<aside class="sidepanel">
    <i class="fab fa-linkedin "></i>
    <a target="_blank"  href="https://www.linkedin.com/in/juliiasotnichenko/" class="sidepanel__link__linkedn"><img src="icons/social/61109%20(1).png" alt="linkedn" /></a>
    <a target="_blank" href="https://www.instagram.com/juliiasotnichenko/" class="sidepanel__link"><img src="icons/social/instagram.svg" alt="instagram" /></a>
    <a target="_blank"  href="https://github.com/JuliiaSotnichenko" class="sidepanel__link"><img src="icons/social/github.svg" alt="github" /></a>
    <div class="sidepanel__divider"></div>
    <div class="sidepanel__text"><span>Social networks</span></div>
</aside>
<div class="menu">
    <div class="menu__block">
        <div class="menu__close">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
            </svg>
        </div>

        <nav>
            <ul class="menu__list">
                <li class="menu__link"><Link to ="/about">About me</Link></li>
                <li class="menu__link"><a href="#">My experience</a></li>
                <li class="menu__link"><a href="#">My skills</a></li>
                <li class="menu__link"><a href="#">My works</a></li>
{/* <!--                <li class="menu__link"><a href="#">ПРАЙС-ЛИСТ</a></li>--> */}
                <li class="menu__link"><a href="#">Contacts</a></li>
            </ul>
        </nav>

        <div class="menu__social">
            <a target="_blank" href="https://github.com/JuliiaSotnichenko">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z" fill="#212121"/>
                </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/juliiasotnichenko/">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7495 0L6.24951 0C2.79826 0 -0.000488281 2.79875 -0.000488281 6.25L-0.000488281 13.75C-0.000488281 17.2013 2.79826 20 6.24951 20L13.7495 20C17.2008 20 19.9995 17.2013 19.9995 13.75L19.9995 6.25C19.9995 2.79875 17.2008 0 13.7495 0ZM18.1245 13.75C18.1245 16.1625 16.162 18.125 13.7495 18.125L6.24951 18.125C3.83701 18.125 1.87451 16.1625 1.87451 13.75L1.87451 6.25C1.87451 3.8375 3.83701 1.875 6.24951 1.875L13.7495 1.875C16.162 1.875 18.1245 3.8375 18.1245 6.25L18.1245 13.75Z" fill="black"/>
                    <path d="M9.99951 5C7.23826 5 4.99951 7.23875 4.99951 10C4.99951 12.7613 7.23826 15 9.99951 15C12.7608 15 14.9995 12.7613 14.9995 10C14.9995 7.23875 12.7608 5 9.99951 5ZM9.99951 13.125C8.27701 13.125 6.87451 11.7225 6.87451 10C6.87451 8.27625 8.27701 6.875 9.99951 6.875C11.722 6.875 13.1245 8.27625 13.1245 10C13.1245 11.7225 11.722 13.125 9.99951 13.125Z" fill="black"/>
                    <path d="M15.3745 5.29123C15.7425 5.29123 16.0408 4.99295 16.0408 4.62499C16.0408 4.25703 15.7425 3.95874 15.3745 3.95874C15.0065 3.95874 14.7083 4.25703 14.7083 4.62499C14.7083 4.99295 15.0065 5.29123 15.3745 5.29123Z" fill="black"/>
                </svg>
            </a>
            <a target="_blank"  href="https://www.linkedin.com/in/juliiasotnichenko/" class="sidepanel__link"><img src="icons/social/61109%202.png" alt="linkedin"></img></a>
        </div>
    </div>
    <div class="menu__overlay"></div>
</div>

    <section class="promo">
        <div class="hamburger">
            <span></span>
            <span class="long"></span>
            <span></span>
        </div>
        <div class="container">
            <div class="title title_fz16 promo__subtitle">My name is Yuliia Sotnichenko</div>
            <h1 class="title title_fz48 promo__title">I'm a web-developer from Luxembourg</h1>
            <div class="promo__btns">
                <Link class="promo__link btn" to="/portfolio">Portfolio</Link>
                    
                <Link class="promo__link" to="/about">About me</Link>
            </div>
        </div>
    </section>







<section class="skills">
    <div class="container">
        <h2 class="title title_fz16 skills__title">Skills</h2>
        <div class="title title_fz36 skills__subtitle">What do I use in my work</div>
        <div class="divider"></div>

        <div class="skills__items">
            <div class="skills__item">
                <div class="skills__item-img">
                    <img src="icons/skills/html5.svg" alt="html5"></img>
                </div>
                <h3 class="title title_fz14">HTML5</h3>
                <p>It creates the skeleton of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product</p>
            </div>
            <div class="skills__item">
                <div class="skills__item-img">
                    <img src="icons/skills/css3.svg" alt="css3"></img>
                </div>
                <h3 class="title title_fz14">CSS3</h3>
                <p>This style language allows me to create absolutely any look and feel for your site or application. Everything is limited only by your imagination!</p>
            </div>
            <div class="skills__item">
                <div class="skills__item-img">
                    <img src="icons/skills/js.svg" alt="java script"></img>
                </div>
                <h3 class="title title_fz14">Java Script</h3>
                <p>This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server, and much more.</p>
            </div>
            <div class="skills__item">
                <div class="skills__item-img">
                    <img src="icons/skills/jquery.svg" alt="Jquery"></img>
                </div>
                <h3 class="title title_fz14">Jquery</h3>
                <p>Jquery library will speed up the size. We will not integrate it into the project without the need to integrate it, but the skill of working with it is present</p>
            </div>
            <div class="skills__item">
                <div class="skills__item-img">
                    <img src="icons/skills/react.svg" alt="React"></img>.
                </div>
                <h3 class="title title_fz14">React</h3>
                <p>This library allows you to create web applications. We can create the most interactive product specifically for your goals</p>
            </div>
            <div class="skills__item">
                <div class="skills__item-img">
                    <img src="icons/skills/node.js.svg" alt="Node.js"></img>
                </div>
                <h3 class="title title_fz14">Node.js</h3>
                <p>This platform allows you to create a backend for your product - "brains" that will perform actions that the user does not see</p>
            </div>
            <div class="skills__item">
                <div class="skills__item-img">
                    <img src="icons/skills/mongo.db.svg" alt="Mongo.db"></img>
                </div>
                <h3 class="title title_fz14">Mongo.db</h3>
                <p>It is a non-relational database that will store your website or application data.</p>
            </div>
        </div>

        <div class="skills__ratings">
            <div class="skills__ratings-item">
                <div class="title title_fz14 skills__ratings-title">Website development </div>
                <div class="skills__ratings-counter">100%</div>
                <div class="skills__ratings-line">
                    <span></span>
                </div>
            </div>
            <div class="skills__ratings-item">
                <div class="title title_fz14 skills__ratings-title">Application creation</div>
                <div class="skills__ratings-counter">85%</div>
                <div class="skills__ratings-line">
                    <span></span>
                </div>
            </div>
            <div class="skills__ratings-item">
                <div class="title title_fz14 skills__ratings-title">Working with data</div>
                <div class="skills__ratings-counter">90%</div>
                <div class="skills__ratings-line">
                    <span></span>
                </div>
            </div>
            <div class="skills__ratings-item">
                <div class="title title_fz14 skills__ratings-title">Creativity</div>
                <div class="skills__ratings-counter">75%</div>
                <div class="skills__ratings-line">
                    <span></span>
                </div>
            </div>
            <div class="skills__ratings-item">
                <div class="title title_fz14 skills__ratings-title">Design creation</div>
                <div class="skills__ratings-counter">90%</div>
                <div class="skills__ratings-line">
                    <span></span>
                </div>
            </div>
            <div class="skills__ratings-item">
                <div class="title title_fz14 skills__ratings-title">Soft skills</div>
                <div class="skills__ratings-counter">95%</div>
                <div class="skills__ratings-line">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="portfolio">
    <div class="container">
        <h2 class="title title_fz16 title__section-title">Portfolio</h2>
        <div class="title title_fz36 title__section-subtitle">My works</div>
        <div class="divider"></div>

        <div class="portfolio__wrapper">
            <a href="#" class="portfolio__item">
                <img src="img/works/uber.jpg" alt="uber"></img>
            </a>
            <a href="#" class="portfolio__item">
                <img src="img/works/pulse.jpg" alt="pulse"></img>
            </a>
            <a href="#" class="portfolio__item">
                <img src="img/works/bread.jpg" alt="test"></img>
            </a>
            <a href="#" class="portfolio__item vertical">
                <img src="img/works/plans.jpg" alt="test"></img>
            </a>
            <a href="#" class="portfolio__item">
                <img src="img/works/ipad.jpg" alt="test"></img>
            </a>
{/* <!--            <a href="#" class="portfolio__item horizonal">-->
<!--                <img src="img/works/m alt="test">-->
<!--            </a>--> */}
        </div>
    </div>
</section>

<section class="price">
    <div class="container">
        <h2 class="title title_fz16 title__section-title">Price</h2>
        <div class="divider"></div>

        <div class="price__wrapper">
            <div class="price__item">
                <div class="price__type">Landing-page</div>
                <div class="price__count">300 € </div>
                <div class="price__descr">
                    One-page website for the presentation of services /goods /...
                </div>
            </div>
            <div class="price__item">
                <div class="price__type">Web-app</div>
                <div class="price__count">from 600 €</div>
                <div class="price__descr">
                    Application inside the browser for better comfort
                </div>
            </div>
            <div class="price__item">
                <div class="price__type">Corporate website</div>
                <div class="price__count">from 500 €</div>
                <div class="price__descr">
                    Website for your business or company
                </div>
            </div>
            <div class="price__item">
                <div class="price__type">Android/IOS Application</div>
                <div class="price__count">from 900 €</div>
                <div class="price__descr">
                    Smartphone application for any OS
                </div>
            </div>
            <div class="price__item">
                <div class="price__type">Online store</div>
                <div class="price__count">from 1000 € </div>
                <div class="price__descr">
                    A tool for your online sales
                </div>
            </div>
            <div class="price__item">
                <div class="price__type">Design</div>
                <div class="price__count">Individually</div>
                <div class="price__descr">
                    I will create a design for your website / application 
                </div>
            </div>
        </div>
    </div>
</section>

<section class="contacts">
    <div class="container">
        <div class="contacts__wrapper">
            <div class="contacts__photo">
                <img src="img/photo.main.jpg" alt="photo"></img>
            </div>
            <div class="contacts__descr">
                <h2 class="title title_fz16 contacts__title">Contacts</h2>
                <div class="title title_fz36 contacts__subtitle">Contact me</div>
                <div class="divider"></div>

                <div class="title title_fz14 contacts__text">
                    In any way convenient for you:
                </div>
                <div class="contacts__social">
                   <a target="_blank" href="https://www.linkedin.com/in/juliiasotnichenko/" class="contacts__link">
                       <img src="icons/social/61109 2.png" alt="linkedn"></img></a>
                    <a target="_blank" href="#" class="contacts__link">
                        <img src="icons/social/telegram.svg" alt="telegram"></img>
                    </a>
                    <a href="#" class="contacts__link">
                        <img src="icons/social/instagram.svg" alt="instagram"></img>
                    </a>
                </div>
                <div class="title title_fz14 contacts__text">
                    Or leave your details and I will write to you myself:
                </div>

                <form action="#" class="contacts__form">
                    <div class="contacts__input">
                        <input required name="name" id="name" type="text"></input>
                        <label for="name">Your name</label>
                    </div>
                    <div class="contacts__input">
                        <input required name="email" id="email" type="email"></input>
                        <label for="email">Your mail</label>
                    </div>

                    <div class="contacts__textarea">
                        <textarea name="text" id="text"></textarea>
                        <label for="text">Your message</label>
                    </div>
                    <div class="contacts__triggers">
                        <button class="contacts__btn btn">send a message</button>
                        <div class="contacts__policy">
                            <input required type="checkbox"></input>
                            <span>I agree with <a href="/policy.html">privacy policy</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
            </div>
        );
    }
}

export default Home
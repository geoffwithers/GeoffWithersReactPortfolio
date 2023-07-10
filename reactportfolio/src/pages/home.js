import React from 'react';

class Home extends React.Component {
    render(){
        return(
        <div>
            <header class="header">
                <h1>Geoff Withers</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#contact-me">Contact Me</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section class="banner">
                <img src="Assets/images/Geoff_Withers_Pic.jpg" alt="image of Geoff Withers" id="geoff-pic"></img>
                <p>Aspiring Software Developer</p>
            </section>

            <main class="content">
                <section id="about-me" class="about-me">
                    <h2>About Me</h2>
                    <p>My name is Geoff Withers, and I am an aspiring full-stack software developer!
                    </p>
                </section>

                <section id="work" class="work">
                    <h2>Work</h2>
                    <div id="projects" class="projects">
                        <a href="https://github.com/geoffwithers/Project-One-Refactoring" class="project-1">
                            <img src="Assets/images/coding-pic.jpg" alt="image of code" class="boxes project-1-img"
                            id="project-1-img"></img>
                            <div class="text-overlay">
                                Refactoring Project
                            </div>
                        </a>
                        <a href="https://github.com/dapatel4092/project-1" class="project-2">
                            <img src="Assets/images/homepage-plane.jpg" alt="image of a plane flying off into the sunset"
                            class="boxes images project-2-img"></img>
                            <div class="text-overlay-2">
                                Vacation Helper
                            </div>
                        </a>
                        <a href="https://geoffwithers.github.io/Scheduler/" class="project-2">
                            <img src="Assets/images/farm2.jpg" alt="cartoon image of a farm setting" class="boxes images project-2-img"></img>
                            <div class="text-overlay-2">
                                got muscle? Fitness Tracker
                            </div>
                        </a>
                        <a href="https://geoffwithers.github.io/Password-Generator/">
                            <img src="Assets/images/placeholder.png" alt="placeholder image" class="boxes images"></img>
                        </a>
                        <a href="https://geoffwithers.github.io/RockPaperScissors/" class="project-2">
                            <img src="Assets/images/Podcast Art.jpg" alt="Fantasy Football's Almost Perfect Podcast logo"
                                class="boxes images project-2-img"></img>
                                <div class="text-overlay-2">
                                    Podcast Website
                                </div>
                        </a>
                    </div>
                </section>   

                <section id="contact-me" class="contact-me">
                    <h2>Contact Me</h2>
                    <ul>
                        <li>geoffwithers91@gmail.com</li>
                        <li>407-314-5329</li>
                        <li>GitHub: <a href="https://github.com/geoffwithers">github.com/geoffwithers</a></li>
                        <li>LinkedIn: _______________</li>
                        <li>Instagram: <a href="https://www.instagram.com/ge_off24/">ge_off24</a> </li>
                    </ul>
                </section>

            </main>                
        </div>
        );
    }
}

export default Home;
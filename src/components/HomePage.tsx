import '../styles/home-page.css';
import Button from './Button'
import ImageAsset from './ImageAsset';

import hero_home_image from '../assets/promptful-assets/images/hero/hero-home-woman-laptop.png';
import personalized_lessons_icon from '../assets/promptful-assets/icons/in-use/benefit-personalized-lessons.svg';
import real_world_icon from '../assets/promptful-assets/icons/in-use/benefit-real-world-application.svg';
import supprtive_icon from '../assets/promptful-assets/icons/in-use/benefit-supportive-communities.svg';

import career_healthcare from "../assets/promptful-assets/icons/in-use/career-healthcare.svg";
import career_ux_design from '../assets/promptful-assets/icons/in-use/career-ux-design.svg';
import career_product_strategy from '../assets/promptful-assets/icons/in-use/career-product-strategy.svg';
import career_education from '../assets/promptful-assets/icons/in-use/career-education.svg';

import arrow_right_pink_20 from '../assets/promptful-assets/icons/library/arrow-right-20-pink.svg';

const path_cards = [
    { icon: personalized_lessons_icon, bg_color: "#fcf1f8", title: "Personalized Lessons", text: "Learn AI skills tailored to your job and career goals."},
    { icon: real_world_icon, bg_color: "#eff0fe", title: "Real-world application", text: "Build confidence in using AI in your work."},
    { icon: supprtive_icon, bg_color: "#edfafa", title: "Supportive communities", text: "Learn with other women and peers on a similar journey."},
];

const exploration_cards = [
    { icon: career_healthcare, title: "Healthcare"},
    { icon: career_ux_design, title: "UX & Research"},
    { icon: career_product_strategy, title: "Product & Strategy"},
    { icon: career_education, title: "Education"},
];


const HomePage = () => {
    return (<>
        <section className='hero-section'>
            <div className="section-container">
                <div className="left-container-hero">
                    <div className='tag text-body3'>CRAFTING PATHS & GUIDING FUTURES</div>
                    <h1 className='font-bold'>Grow in AI. Direct your future.</h1>
                    <p className='text-body2'>
                        We at PROMPTFUL aim to encourage women and other underrepresented genders to grow AI skills for today's job market. Many jobs now rely on AI, but women and other underrepresented genders often don't receive the necessary AI training. That ends today with PROMPTFUL.
                    </p>
                    <p className='text-body2'>
                        Ready to begin your AI learning journey? Take our Pathfinder Quiz to get personalized lessons and explore curated resources from around the web to upskill in AI for your career. The workforce is evolving, and you change along with it.
                    </p>
                    <Button className="hero-btn">Start learning</Button>
                </div>
                <div className="image-container-hero">
                    <ImageAsset asset={hero_home_image} alt="hero image of a woman with a laptop" width={600}/>
                </div>
            </div>
            
        </section>
        <section className='path-section'>
            <div className='section-container-path'>
                <div className='left-container-path'>
                    <div className='tag text-body3'>YOUR OWN PATH</div>
                    <h2 className='font-bold'>Courses designed for you</h2>
                    <p className='text-body2'>Set your career area, current AI skill level, and daily learning time to get personalized AI lessons with practical applications and real-world exercises.</p>
                    <Button>Take the Pathfinder Quiz to create my learning path</Button>
                </div>
                <div>
                    <div className="path-section-card">
                        <h3 className='font-bold'>How our 3-question quiz works</h3>
                    </div>
                    <div className="righthand-flourish"></div>
                </div>
            </div>
            <div className='path-card-list'>
                   {path_cards.map(card => (
                        <PathCard icon={card.icon} bg_color={card.bg_color} title={card.title} text={card.text}/>
                   ))}
                </div>
        </section>
        <section className='exploration-section'>
            <div className='tag text-body3'>COMMON LEARNING PATHS</div>
            <h2 className='font-bold'>Explore by career area</h2>
            <p>Skip the Pathfinder Quiz and dive straight into learning in your field.</p>
            <div className='exploration-card-list'>
                {exploration_cards.map(card => (
                    <ExplorationCard icon={card.icon} title={card.title}/>
                ))}
            </div>
            <Button variant='secondary'>Explore our Career Library </Button>
        </section>
        <section className='communities-section'>
            <div className='tag'>GROW WITH PEERS</div>
            <h2 className='font-bold'>Become a part of one of our many communities</h2>
            <p className='text-container'>Learning is better when done together. Join PROMPTFUL communities to connect with peers, share what you’re learning, and get support on your learning journey.</p>
            <Button variant='secondary'>Learn about our Communities</Button>
        </section>
    </>);
}

const PathCard = ({icon, bg_color, title, text}) => {
    return (
        <div className='path-card'>
            <ImageAsset className="path-icon" asset={icon} alt={`Icon representing ${title}`}/>
            <div className="text-body2">{title}</div>
            <div className='text-body3'>{text}</div>
        </div>
    );
}

const ExplorationCard = ({icon, title}) => {
    return (<div className='exploration-card'>
        <ImageAsset className="icon" asset={icon} alt={`Icon representing ${title}`}/>
        <div className='text-body3'>{title}</div>
        <ImageAsset asset={arrow_right_pink_20} alt="arrow at bottom of exploration card"/>
    </div>);
}

export default HomePage;
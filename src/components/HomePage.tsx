import '../styles/home-page.css';
import Button from './Button'
import ImageAsset from './ImageAsset';

import hero_home_image from '../assets/promptful-assets/images/hero/hero-home-woman-laptop.png';
import personalized_lessons_icon from '../assets/promptful-assets/icons/in-use/benefit-personalized-lessons.svg';
import real_wolrd_icon from '../assets/promptful-assets/icons/in-use/benefit-real-world-application.svg';
import supportive_icon from '../assets/promptful-assets/icons/in-use/benefit-supportive-communities.svg';

const HomePage = () => {
    return (<>
        <section className='hero-section'>
            <div className="section-container">
                <div className="left-container-hero">
                    <div className='text-body3'>CRAFTING PATHS & GUIDING FUTURES</div>
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
                    <div className='text-body3'>YOUR OWN PATH</div>
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
                <div className='path-icon-cards'>

                </div>
            </div>
        </section>
        <section className='exploration-section'>
            <div>Common learning paths</div>
            <h2>Explore by career area</h2>
            <p>Skip the Pathfinder Quiz and dive straight into learning in your field.</p>
            <Button>Explore our Career Library</Button>
        </section>
        <section className='communities-section'>
            <div>GROW WITH PEERS</div>
            <h2>Become a part of one of our many communities</h2>
            <p>Learning is better when done together. Join PROMPTFUL communities to connect with peers, share what you’re learning, and get support on your learning journey.</p>
        </section>
    </>);
}

export default HomePage;
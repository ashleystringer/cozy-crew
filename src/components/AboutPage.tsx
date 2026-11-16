import '../styles/about.css';

import ImageAsset from './ImageAsset';
import Button from './Button';

import hero_about_women_laptop from '../assets/promptful-assets/images/hero/hero-about-two-women-laptop.png';
import story_workshop from '../assets/promptful-assets/images/editorial/about-story-workshop.png';
import team_leila_morgan from '../assets/promptful-assets/images/team/team-leila-morgan.png';
import team_mai_tran from '../assets/promptful-assets/images/team/team-mai-tran.png';
import team_nia_okafor from '../assets/promptful-assets/images/team/team-nia-okafor.png';
import team_sofia_alvarez from '../assets/promptful-assets/images/team/team-sofia-alvarez.png';


const team_members = [
    {name: "Leila Morgan", image: team_leila_morgan, description: "Founder & CEO of Promptful"},
    {name: "Mai Train", image: team_mai_tran, description: "Founder & CEO of Promptful"},
    {name: "Nia Okafor", image: team_nia_okafor, description: "Founder & CEO of Promptful"},
    {name: "Sofia Alvarez", image: team_sofia_alvarez, description: "Founder & CEO of Promptful"},
];


const AboutPage = () => {
    return (<>
        <section className="hero-section">
            <div className='section-container'>
                <div className='left-container-hero'> 
                    <div className='tag-container'>
                        <div className='tag'>ABOUT</div>
                    </div>
                    <h1 className='font-bold'>We are Promptful</h1>
                    <p className='text-body2'>We want to close the gap between potential and opportunity for women and queer people by encouraging them to use AI in their everyday work.</p>
                    <div className='button-container'>
                        <Button variant='primary' href='#' icon={null}>Explore my learning path</Button>
                    </div>
                </div>
                <div className='image-container'>
                    <ImageAsset asset={hero_about_women_laptop} alt="image of two women with a laptop"/>
                </div>
            
            </div>
        </section>
        <section className="mission-section">
            <div className='section-container'>
            <div className='tag-container'>
                    <div className='tag'>OUR MISSION</div>
            </div>
                <h2 className='font-bold'>We help women and other people of underrepresented genders build their AI skills.</h2>
            </div>
        </section>
        <section className="story-section">
            <div className='section-container'>
                <div className='tag'>OUR STORY</div>
                <div className='image-container'>
                    <ImageAsset asset={story_workshop} alt="image of women in a workshop"/>
                </div>
                <div className="text-container">
                <h2 className='font-bold'>Promptful was born after we had heard one recurring question: “Where do I start?”</h2>
                    <p className='text-body2 p-text'>We at Promptful found that many women and other people of underrepresented genders across healthcare, education, UX, strategy, and other fields felt the same concern. They knew AI would shape their work, but they did not trust it. Not all jobs provided AI training either, so many women and their peers also didn’t have time to take lessons outside work. They worried about the careers they had worked so hard to build.</p>
                    <p className='text-body2 p-text'>That’s why we created Promptful. Women and their peers need a place that cares about their learning and focuses on the person, not the tool. With our lessons and communities close by for support, these women and their peers have a place to prepare themselves for their new future.</p>
                    <p className='quote'>“Women and their peers need a place that cares about their learning and focuses on the person, not the tool.”</p>
                </div>
            </div>
        </section>
        <section className="problem-section">
            <div className='section-container'>
                <div className='left-container'>
                    <div className='tag'>THE PROBLEM WE’RE SOLVING</div>
                    <h2 className='font-bold'>The AI Career Gap</h2>
                    <p className='text-body2 p-text'>Talent is everywhere, but access to opportunity is not. Despite their job experience, women and their peers are underrepresented in both AI-based careers and AI-building jobs. They are also less likely to receive employer-sponsored upskilling in AI. Promptful fills the void and teaches women and their peers AI skills that prepare them to join those who shape the AI of tomorrow.</p>
                    <div>
                        <div className='text-body3 p-text'>Provided training often doesn’t relate to their jobs.</div>
                        <div className='text-body3 p-text'>Having fewer AI skills makes it more difficult for women to be rewarded at work.</div>
                        <div className='text-body3 p-text'>Learning alone makes persistence harder than it needs to be.</div>
                    </div>
                </div>
                <div className='right-container'>
                    
                </div>
            </div>
        </section>
        <section className="learning-section">
            <div className='section-container'>
                <div className='tag'>HOW WE WORK</div>
                <h2 className='font-bold'>Learning designed to increase momentum</h2>
                <p className='text-body3 p-text'>Promptful combines elements that traditional learning platforms leave separate.</p>
            </div>
        </section>
        <section className="values-section">
            <div className='section-container'>
                <div className='tag'>OUR VALUES</div>
            </div>
        </section>
        <section className="impact-section">
            <div className='section-container'>
                <div className='tag'>OUR IMPACT SO FAR</div>
                <h2 className='font-bold'>Skills you can use. Confidence you can see.</h2>
                <div className='card-lst'></div>
            </div>
        </section>
        <section className="teammember-section">
            <div className='section-container'>
                <div className='text-container'>
                    <div className='tag'>THE PEOPLE BEHIND PROMPTFUL</div>
                    <h2 className='font-bold'>Educators, technologists, and career counselors</h2>
                    <p className='text-body2 p-text'>We are a multidisciplinary team united by a belief that opportunity should grow alongside innovation.</p>
                </div>
                <div className='member-card-list'>
                    {team_members.map(member => (
                        <MemberInfoCard image={member.image} name={member.name} description={member.description}/>
                    ))}
                </div>
            </div>
        </section>
        <section className="quiz-section">
            <div className='section-container'>
                <div className='tag'>YOU MATTER HERE</div>
                <h2 className='font-bold'>You belong in what comes next</h2>
                <p className='text-body2 p-text'>Learn practical AI skills for the future and join our communities for support.</p>
                
                <div className='button-container'>
                    <Button variant='primary' href='#' className='' icon={null}>Take our Pathfinder Quiz and start learning</Button>
                    <Button variant='secondary' href='#' className='' icon={null}>Learn about our Communities</Button>
                </div>
            </div>
        </section>
    </>);
}


const LearningCard = ({tag, title, description}) => {
    return (<div>
        <div className='tag'>{tag}</div>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-body3 p-text'>{description}</p>
    </div>);
}

const MemberInfoCard = ({image, name, description}) => {
    return (<div>
        <div className='image-container'>
            <ImageAsset asset={image} width={300} alt=""/>
        </div>
        <div className='text-container'>
            <h3 className='font-bold'>{name}</h3>
            <p className='text-body3 p-text'>{description}</p>
        </div>
    </div>);
}

export default AboutPage;
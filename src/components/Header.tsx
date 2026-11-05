import '../styles/header.css';
import ImageAsset from "./ImageAsset";
import Button from "./Button";
import promptfulLogo from '../assets/promptful-logo.svg';


const Header = () => {
    return (<header className='navbar'>
        <div className="image-container">
            <ImageAsset asset={promptfulLogo} alt="Prompful Logo" width={155} height={150}/>
        </div>
        <div className="link-list">
            <a href="#" className='text-body1'>Home</a>
            <a href="#" className='text-body1'>Learn <span className="learn-dropdown-arrow"></span></a>
            <a href="#" className='text-body1'>Communities</a>
            <a href="#" className='text-body1'>About</a>
        </div>
        <div className="button-list">
            <Button variant='quiet'>Log in &#10140;</Button>
            <Button>Sign Up &#10140;</Button>
        </div>
    </header>);
}

export default Header;
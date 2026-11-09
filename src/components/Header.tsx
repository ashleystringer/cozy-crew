import '../styles/header.css'
import ImageAsset from './ImageAsset'
import Button from './Button'
import promptfulLogo from '../assets/promptful-logo.svg'

const dropdownLinks = [
    { title: 'Pathfinder Quiz', path: '/#' },
    { title: 'My Learning Path', path: '/#' },
    { title: 'Resource Hub', path: '/#' },
    { title: 'Careers Library', path: '/#' },
    { title: 'My Progress', path: '/#' },
]

const DropdownMenu = () => {
    return (
        <div className="learn-dropdown-menu">
            <div className="dropdown-container text-body3 font-semibold">
                {dropdownLinks.map((link, index) => {
                    return (
                        <a href={link.path} key={index}>
                            {link.title}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <header className="navbar">
            <div className="image-container">
                <ImageAsset
                    asset={promptfulLogo}
                    alt="Prompful Logo"
                    width={155}
                    height={150}
                />
            </div>

            <input
                id="nav-toggle"
                className="nav-toggle"
                type="checkbox"
                aria-label="Toggle navigation menu"
            />
            <label
                htmlFor="nav-toggle"
                className="hamburger-btn"
                aria-hidden="true"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>

            <nav className="nav-menu" aria-label="Main navigation">
                <div className="link-list">
                    <a href="#" className="text-body1">
                        Home
                    </a>
                    <div className="learn-link-wrapper">
                        <button type="button" className="learn-link text-body1">
                            Learn <span className="learn-dropdown-arrow"></span>
                        </button>
                        <DropdownMenu />
                    </div>
                    <a href="#" className="text-body1">
                        Communities
                    </a>
                    <a href="#" className="text-body1">
                        About
                    </a>
                </div>
                <div className="button-list">
                    <Button variant="quiet">Log in &#10140;</Button>
                    <Button>Sign Up &#10140;</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header

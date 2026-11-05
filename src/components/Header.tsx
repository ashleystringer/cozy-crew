import ImageAsset from "./ImageAsset";
import Button from "./Button";

const Header = () => {
    return (<header>
        <div className="image-container"></div>
        <div className="link-list">
            <div>Home</div>
            <div>Learn</div>
            <div>Communities</div>
            <div>About</div>
        </div>
        <div className="button-list">
            <Button>Log in</Button>
            <Button>Sign Up</Button>
        </div>
    </header>);
}

export default Header;
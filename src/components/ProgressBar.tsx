import '../styles/progress-bar.css';

import { useState } from "react";

const ProgressBar = () => {

    const [max, setMax] = useState(0);
    const [value, setValue] = useState(0);

    return (<progress max={100} value={68} className='progress-bar'></progress>);
}

export default ProgressBar;
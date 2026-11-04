import '../styles/progress-bar.css';

import { useState } from "react";

const ProgressBar = () => {

    const [value, setValue] = useState(15);

    return (
    <div className='progress-content'>
        <div className='progress-heading'>
            <label className='text-body3'>AI for UX Research</label>
            <div className='text-body3 status-number'>{value}%</div>
        </div>
        <progress max={100} value={value} className='progress-bar'></progress>
    </div>
    );
}

export default ProgressBar;
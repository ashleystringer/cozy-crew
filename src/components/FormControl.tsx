const FoemControls = () => {
    //options
    //radio buttons
    //textareas
    return (<></>);
}

export const Select = () => {
    return (
        <div className="select-container">
            <select className='select-tag' name="select">
                <option className="option-tag" value="ux&research">UX & Research</option>
                <option className="option-tag" value="healthcare&nursing">Healthcare & Nursing</option>
                <option className="option-tag" value="product&strategy">Product & Stategy</option>
            </select>
        </div>
    );
}

export const RadioButtons = ({label, buttonName}) => {
    return (<div className="radio-btn">
        <label>
            <input type="radio" name="test" aria-label="radio button"/>
        </label>
    </div>)
}

export const Textarea = () => {
    return (<textarea></textarea>);
}


export const FormControl = () => {
    return (<form>

    </form>);
}

export const Select = ({children}) => {
    return (
        <div className="select-container">
            <select className='select-tag text-body3' name="select">
                {children}
            </select>
        </div>
    );
}

export const Option = ({value, text}) => {
    return(<option className="option-tag" value="value">{text}</option>);
}

export const RadioButton = ({label, value, name}) => {
    return (<div className="radio-btn">
        <label className="radio-btn-label">
            <input type="radio" value='test' name='name' aria-label="radio button"/>
            {label}
        </label>
    </div>)
}

export const Textarea = () => {
    return (<textarea></textarea>);
}


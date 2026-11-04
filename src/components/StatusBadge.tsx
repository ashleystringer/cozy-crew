import '../styles/status.css';


function getStatusClass(variant){
    return [`status`, `${variant}`].join(" ");
}

export const StatusBadge = ({ text, variant = 'pink' }) => {
    return (<div className={`${getStatusClass(variant)}`}> {text}</div>);
}

export const CheckmarkStatusBadge = ({ text, variant = 'green' }) => {
    return (<div className={`${getStatusClass(variant)}`}>&#10003; {text}</div>);
};



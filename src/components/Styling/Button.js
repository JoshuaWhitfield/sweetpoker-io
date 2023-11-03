import { Link } from "react-router-dom";

const Button = (props) => {
    let { path, target, name, func, width, height } = props;

    if (!path && !func) return null
    if (!width) width = '100px'
    if (!height) height = '40px'

    if (!path) {
        return (
            <div className='button center-content' onClick={func} style={{width: width, height: height}}>
                <p className='mt-3' >{name}</p>
            </div>
        );
    }

    return (
        <div className='button center-content' style={{width: width, height: height}}>
            <Link className='mt-3' to={path} target={target} style={{textDecoration: 'none', width: 'fit-content', height: 'fit-content'}}><p>{name}</p></Link>
        </div>
    );
}

export default Button

const XYSpacing = (props) => {
    let { height, width } = props;
    if (!height) height = '20px';
    if (!width) width = '100%'

    return (
        <div className='' style={{width: width, height: height}}></div>
    );
}

export default XYSpacing
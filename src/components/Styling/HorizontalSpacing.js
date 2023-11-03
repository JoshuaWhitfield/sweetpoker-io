
const HorizontalSpacing = (props) => {
    let { width } = props;
    if (!width) width = '20px'
    return (
        <div className='' style={{width: width}}></div>
    );
}

export default HorizontalSpacing
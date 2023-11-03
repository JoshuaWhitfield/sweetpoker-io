
const VerticalSpacing = (props) => {
    let { height } = props;
    if (!height) height = '20px';

    return (
        <div style={{height: height}}></div>
    );
}

export default VerticalSpacing
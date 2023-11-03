

const CardContent = (props) => {
    let { content } = props;
    
    content.map(
        (item, idx) => {
            console.log(item);
            return (
                item
            );
        }
    )
}

export default CardContent

const East = (props) => {
    let { table } = props
    table = table()
    console.log('table: '+table)
    return (
        <div id='east'>
            {
                table.getEastQ().map(
                    (PlayerCopy) => {
                        return (
                            <>
                                <PlayerCopy />
                            </>
                        );
                    }
                )
            }
        </div>
    );
}

export default East
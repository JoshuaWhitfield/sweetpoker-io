import Table from '../../components/Table/Table';
import PlayConsole from '../../components/PlayConsole/PlayConsole';

const PlayPage = () => {
    const width = '990px';
    const height = '500px';
    return (
        <div className='custom-body-pr'>
            <Table width={width} height={height}/>
            <div className='console-container'>
                    <PlayConsole />
            </div>
        </div>
    );
}

export default PlayPage
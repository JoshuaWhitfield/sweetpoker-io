import { Col } from "reactstrap";
import { useState } from 'react';

const CLOption = (props) => {
    const { name, options, selection, setSelection } = props;

    const handleChange = (e) => {
        setSelection(e.target.value);
    }

    return (
        <Col className='col-3 flex jcc mx-auto'>
            <div className='flex aic'>
                <p className='float-start' style={{marginTop: '13px'}}><strong>{name}:&nbsp;&nbsp;</strong></p>
                <select value={selection} onChange={handleChange} className=''>
                    {
                        options.map(
                            (opt, idx) => {
                                if (idx === 0) {
                                    return (
                                        <>
                                            <option value=''>select...</option>
                                            <option value={opt}>{opt}</option>
                                        </>
                                    );
                                }
                                return (
                                    <option value={opt}>{opt}</option>
                                )
                            }
                        )
                    }
                </select>
            </div>
        </Col>

    );
}

export default CLOption
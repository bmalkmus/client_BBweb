
import React from 'react';

function Table(props){
    return(
        <table>
                <tbody>
                    {[...props.data].map(data=>{
                        return(
                            <tr key={data.name}>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )
}

export default Table
import React, { useEffect, useState } from 'react';
import "./ShowData.css";

function ShowData() {

    const [column, setColumn] = useState([]);
    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetch("../data.json")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setColumn(Object.keys(data[0]));
            setRecord(data);
        });
    }, [])
    
    return (
        <>
            <div className="all-data">
                <table>
                    <thead>
                        <tr>
                            {column.map((elm, index) => {
                                return <th key={index}>{elm}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map((elm, index) => {
                                return <tr key={index}>
                                    <td>{elm.id}</td>
                                    <td>{elm.first_name}</td>
                                    <td>{elm.last_name}</td>
                                    <td>{elm.email}</td>
                                    <td>{elm.gender}</td>
                                    <td>{elm.phone}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ShowData;
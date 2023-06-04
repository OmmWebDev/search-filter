import React, { useEffect, useState } from 'react';
import "./ShowData.css";

function ShowData({searchItem}){

    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/589febc6-2981-4bfe-b1ae-ea5077a7e0da")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setRecord(data);
        });
    }, []);
    
    return (
        <>
            <div className="all-data">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.filter((item) => {
                                return searchItem.toLowerCase() === '' ? item : item.Name.toLowerCase().includes(searchItem.toLowerCase());
                            }).map((elm, index) => {
                                return <tr key={index}>
                                    <td>{elm.Id}</td>
                                    <td>{elm.Name}</td>
                                    <td>{elm.Email}</td>
                                    <td>{elm.Gender}</td>
                                    <td>{elm.Phone}</td>
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
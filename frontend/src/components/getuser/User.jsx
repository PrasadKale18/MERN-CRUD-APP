import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../getuser/User.css';
import axios from "axios";
import toast from "react-hot-toast";
function User() {

    const [users, setUsers] = useState([]);

    async function getData() {
        const res = await axios.get("http://localhost:4000/auth/getdata")
        setUsers(res.data.data)
    }

    useEffect(() => {
        getData()
    }, [])

    async function deleteData(_id) {
        await axios.delete(`http://localhost:4000/auth/deletedata/${_id}`);
        toast.error("Data Delete Successfully!", { position: "top-right" })
        getData()
    }

    return (
        <div className="userTable">
            <Link to={"/add"} className="addButton">Add User</Link>

            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.fname} {item.lname}</td>
                                <td>{item.email}</td>
                                <td className="actionButtons">
                                    <button onClick={() => { deleteData(item._id) }}><i className="fa-solid fa-trash"></i></button>
                                    <Link to={`/edit/${item._id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User
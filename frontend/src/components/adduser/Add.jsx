import React, { useState } from "react";
import '../adduser/Add.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Add() {
    const navigate = useNavigate();

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit(e) {
        e.preventDefault();
    }

    async function submit() {
        try {
            await axios.post("http://localhost:4000/auth/postdata", {
                fname,
                lname,
                email,
                password
            });

            setFname('');
            setLname('');
            setEmail('');
            setPassword('');

            toast.success("Data Save Successfully!", { position: "top-right" })
            navigate("/")
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    return (
        <div className="addUser">
            <Link to={"/"} className="backButton">Back</Link>
            <h3>Add new user</h3>
            <form className="addUserForm" onSubmit={onSubmit}>
                <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email Id</label>
                    <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <button type="submit" onClick={submit}>ADD USER</button>
                </div>
            </form>
        </div>
    )
}

export default Add
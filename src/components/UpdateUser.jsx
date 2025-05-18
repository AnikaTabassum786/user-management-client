import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {

    const { _id, name, gender, email, status } = useLoaderData()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const updatedUser = Object.fromEntries(formData.entries())
        console.log(updatedUser)

        // if (!updatedUser.password) {
        //     delete updatedUser.password;
        // }

        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="fieldset p-6 border rounded-lg shadow-md">

                    <label className="label">Name</label>
                    <input type="text" name='name' defaultValue={name} className="input input-bordered w-full mb-4" placeholder="Name" />

                    <label className="label">Gender</label>
                    <input type="text" name='gender' defaultValue={gender} className="input input-bordered w-full mb-2" placeholder="Gender" />

                    <label className="label">Status</label>
                    <input type="text" name='status' defaultValue={status} className="input input-bordered w-full mb-2" placeholder="Status" />

                    <label className="label">Email</label>
                    <input type="email" name='email' defaultValue={email} className="input input-bordered w-full mb-4" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password'  className="input input-bordered w-full mb-4" placeholder="Password" />

                    <button className="btn btn-neutral mt-4 w-full">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
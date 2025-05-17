import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const AddUser = () => {

    const {createUser}=use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries())

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const userProfile = {
                    email,
                    password,
                    ...restFormData,
                }

                fetch('http://localhost:3000/add-user',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                        console.log('after User Save',data)

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        }                        

                    })

            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="fieldset p-6 border rounded-lg shadow-md">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input input-bordered w-full mb-4" placeholder="Name" />

                        <label className="label">Gender</label>
                        <input type="text" name='gender' className="input input-bordered w-full mb-2" placeholder="Gender" />

                        <label className="label">Status</label>
                        <input type="text" name='status' className="input input-bordered w-full mb-2" placeholder="Status" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input input-bordered w-full mb-4" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input input-bordered w-full mb-4" placeholder="Password" />

                        <button className="btn btn-neutral mt-4 w-full">Add User</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddUser;
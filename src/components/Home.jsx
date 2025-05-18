import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const Home = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers)
    // console.log(users);

    const handleDelete = (id) => {
        console.log('deleted', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount) {
                            console.log(data)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainUsers = users.filter(user=>user._id !== id)
                            setUsers(remainUsers)
                        }
                    })
            }
        });
    }

    return (
        <div className="p-4">
            <div className="mb-4">
                <Link to={'/add-user'}>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                        Add User
                    </button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2 text-left">#</th>
                            <th className="border px-4 py-2 text-left">Name</th>
                            <th className="border px-4 py-2 text-left">Email</th>
                            <th className="border px-4 py-2 text-left">Gender</th>
                            <th className="border px-4 py-2 text-left">Status</th>
                            <th className="border px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(users) && users.map((user, index) => (
                            <tr key={user.id || index} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.gender}</td>
                                <td className="border px-4 py-2">{user.status}</td>
                                <td className="border px-4 py-2 flex gap-2">
                                    <FaEye className="text-blue-500 cursor-pointer" />
                                    <MdEdit className="text-green-500 cursor-pointer" />
                                    <MdDelete onClick={() => handleDelete(user._id)} className="text-red-500 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;

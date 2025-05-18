// import React from 'react';
// import { useLoaderData } from 'react-router';

// const UserDetails = () => {
//     const users = useLoaderData()
//     console.log(users)
//     return (
//         <div>
//             User Details
//             {/* <p>{users._id}</p> */}
//             <p>{users.name}</p>
//             <p>{users.email}</p>
//             <p>{users.gender}</p>
//             <p>{users.status}</p>
//         </div>
//     );
// };

// export default UserDetails;

import React from 'react';
import { useLoaderData } from 'react-router'; // ✅ Correct import for useLoaderData

const UserDetails = () => {
    const user = useLoaderData(); // it's a single user
    const { name, email, gender, status } = user;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Details</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-gray-600 font-semibold">Name:</p>
                        <p className="text-lg text-gray-900">{name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Email:</p>
                        <p className="text-lg text-gray-900">{email}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Gender:</p>
                        <p className="text-lg text-gray-900">{gender}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-semibold">Status:</p>
                        <p className={`text-lg font-medium ${status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                            {status}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;

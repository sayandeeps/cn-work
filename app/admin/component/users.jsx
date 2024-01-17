import React from 'react';

const Users = ({ data }) => {
    return (
        <>
            <tr className="text-xs bg-gray-100 :text-gray-400 :bg-transparent">
                <td className="px-6 py-5 font-medium">{data.name}</td>
                <td className="px-6 py-5 font-medium ">{data.careof}</td>
                <td className="px-6 py-5 font-medium ">{data.address}</td>
                <td className="px-6 py-5 font-medium ">{data.dob}</td>
                <td className="px-6 py-5 font-medium ">{data.gender}</td>
                <td className="px-6 py-5 font-medium ">{data.phone}</td>
                <td className="px-6 py-5 font-medium ">{data.kyc_done ? 'Yes' : 'No'}</td>

               
            </tr>
        </>
    );
};

export default Users;

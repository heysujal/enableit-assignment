// src/components/UserCard.tsx
import React from "react";

interface UserCardProps {
  id: string;
  jobTitle: string;
  emailAddress: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  jobTitle,
  emailAddress,
  fullName,
  email,
  phone,
  company,
}) => {
  return (
    <div className="w-[300px] m-2 h-[300px] bg-white rounded-lg transition hover:scale-105">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{fullName}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Job Title:</span> {jobTitle}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Company:</span> {company}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
      </div>

      <div className="px-6 py-2 bg-gray-50 border-t">
        <p className="text-gray-500 text-xs">User ID: {id}</p>
        <p className="text-gray-500 text-xs">Alt Email: {emailAddress}</p>
      </div>
    </div>
  );
};

export default UserCard;

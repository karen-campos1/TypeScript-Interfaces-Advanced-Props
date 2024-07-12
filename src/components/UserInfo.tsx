import React from 'react';
import { UserInfoProps } from '../types/types';

const UserInfo: React.FC<UserInfoProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserInfo;
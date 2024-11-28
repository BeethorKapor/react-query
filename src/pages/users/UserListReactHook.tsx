import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserListReactHook: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold">Users</h1>
        <ul>
          {users?.map((user: { id: number; name: string; email: string }) => (
            <li key={user?.id} className="my-2 bg-gray-200 p-4 rounded-md">
              <p className="font-semibold">ID: {user?.id}</p>
              <p>Name: {user?.name}</p>
              <p>Email: {user?.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserListReactHook;

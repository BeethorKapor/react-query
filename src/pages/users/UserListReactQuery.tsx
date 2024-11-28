import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function UserListReactQuery() {
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response?.data;
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">Users</h1>
      <ul>
        {data?.map((user: { id: number; name: string; email: string }) => (
          <li key={user?.id} className="my-2 bg-gray-200 p-4 rounded-md">
            <p className="font-semibold">ID: {user?.id}</p>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListReactQuery;

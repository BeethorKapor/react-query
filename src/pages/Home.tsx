import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Home</h1>
      <div className="flex gap-x-4">
        <button
          onClick={() => navigate("/users-react-query")}
          className="bg-blue-500 text-white rounded py-2 px-4"
        >
          Users React Query
        </button>
        <button
          onClick={() => navigate("/users-react-hook")}
          className="bg-blue-500 text-white rounded py-2 px-4"
        >
          Users React Hook
        </button>
      </div>
    </div>
  );
};

export default Home;

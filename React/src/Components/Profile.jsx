import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default Profile;

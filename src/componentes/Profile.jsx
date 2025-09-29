import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?nat=es");
        const { results } = await res.json();
        setUser(results[0]);
      } catch (err) {
        console.log(err);
      }
    };
    callApi();
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-gray-600">Cargando perfil…</p>
      </div>
    );
  }

  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <div className="max-w-md mx-auto m-12 p-6 bg-white rounded-xl shadow">
      <div className="flex items-center gap-4">
        <img
          src={user.picture.large}
          alt={fullName}
          className="w-20 h-20 rounded-full object-cover shadow"
        />
        <div>
          <h1 className="text-2xl font-bold">{fullName}</h1>
          <p className="text-gray-700">
            Email: <span className="font-mono">{user.email}</span>
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-gray-600">
        <p>País: {user.location.country}</p>
        <p>Ciudad: {user.location.city}</p>
      </div>

      <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;

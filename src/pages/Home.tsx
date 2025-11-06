import { useState, useEffect } from 'react';

// 1. Definimos la interfaz para los datos del usuario
interface IUser {
  id: number;
  name: string;
  username: string;
}

const Home = () => {
  // 2. Tipamos el estado como un array de IUser
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // Req 2: Consumo de API
    fetch('https://jsonplaceholder.typicode.com/users?_limit=8')
      .then(response => response.json())
      .then(data => setUsers(data as IUser[])) // 3. Hacemos un cast del 'any' de json()
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {/* Req 3: Hero */}
      <section className="text-center p-10 my-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-blue-700 mb-3">JSONPlaceholder Feed</h1>
        <p className="text-lg text-gray-600">
          Un proyecto de React (con TypeScript) que consume datos de JSONPlaceholder.
        </p>
      </section>

      {/* Req 3: Listado simple de "personajes" (usuarios) */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Listado de Usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.length > 0 ? (
            users.map(user => (
              <div key={user.id} className="bg-white rounded-lg shadow p-4">
                <p className="font-bold text-lg text-blue-600">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            ))
          ) : (
            <p>Cargando usuarios...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
import { useState, useEffect } from 'react';

// 1. Definimos la interfaz para los Posts
interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Entities = () => {
  // 2. Tipamos el estado como un array de IPost
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    // Req 2: Consumo de API
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
      .then(response => response.json())
      .then(data => setPosts(data as IPost[])) // 3. Cast a IPost[]
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Listado de Entidades (Posts)</h1>
      
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="border p-4 rounded-md shadow-sm bg-gray-50 hover:shadow-md transition-shadow">
              
              {/* Req 4: Mostrar 3 propiedades (title, body, userId) */}
              
              <h2 className="text-xl font-semibold text-blue-700 mb-2 truncate">
                {post.title}
              </h2>
              
              <p className="text-gray-700 mb-3">
                {post.body.substring(0, 100)}...
              </p>
              
              <p className="text-sm text-gray-500 font-medium">
                ID de Usuario: {post.userId}
              </p>

            </div>
          ))
        ) : (
          <p>Cargando posts...</p>
        )}
      </div>
    </div>
  );
};

export default Entities;
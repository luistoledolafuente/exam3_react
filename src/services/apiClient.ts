import type { IUser, IPost } from '../types'; // Importamos nuestros tipos centralizados
 // Importamos nuestros tipos centralizados

// Esta es nuestra URL base. No es un secreto, así que puede vivir aquí.
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Función genérica para manejar las peticiones fetch.
 * Maneja la respuesta y el parseo a JSON.
 */
async function fetchWrapper<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data as T;
}

// Funciones específicas para cada endpoint
export const getPosts = (): Promise<IPost[]> => {
  return fetchWrapper<IPost[]>('/posts?_limit=12');
};

export const getUsers = (): Promise<IUser[]> => {
  return fetchWrapper<IUser[]>('/users?_limit=8');
};


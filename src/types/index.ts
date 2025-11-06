// Interfaz para los Posts
export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// Interfaz para los Usuarios
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
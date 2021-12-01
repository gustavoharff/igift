import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, ReactNode, createContext, useEffect } from 'react';
import { Endereco, Usuario } from '../@types';
import { criarConta } from '../service/api/auth/criarConta';
import { login } from '../service/api/auth/login';

interface AuthContextData {
  user: Usuario | null;
  auth: (data: AuthProps) => Promise<void>;
  logout: () => Promise<void>;
  createAccount: (data: CreateAccountProps) => Promise<void>;
}

interface UserProviderProps {
  children: ReactNode;
}

interface AuthProps {
  email: string;
  senha: string;
}

interface CreateAccountProps {
  nome: string;
  email: string;
  senha: string;
  administrador: boolean;
  dataNascimento: string;
  endereco: Endereco;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<Usuario | null>(null);

  async function auth({ email, senha }: AuthProps) {
    const response = await login({ login: email, senha });

    setUser(response.data);

    await AsyncStorage.setItem('user', JSON.stringify(response.data));
  }

  async function createAccount(data :CreateAccountProps ) {
    await criarConta(data);
  }

  async function logout() {
    await AsyncStorage.removeItem("user");
    setUser(null);
  }

  useEffect(() => {
    AsyncStorage.getItem('user').then(value => {
      if (value) {
        setUser(JSON.parse(value));
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth, logout, createAccount }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

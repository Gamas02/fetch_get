import { useEffect, useState } from "react";
import "./App.css";

export default function App(){
  const [users, setUsers] = useState([]);

  // Função getusers - assíncrona 
  const getUsers = async () =>{
    try{
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    }catch(error){
      console.error("Error: busca de usuários",error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [])

  return(
    <div className="App">
      <h2>Lista de Usuários</h2>
      {users.length === 0 ? 
        (<p className="loading">Carregando...</p>):
      (
        users.map((u) => (
          <div className="user-card" key={u.id}>
            {u.id} <strong>{u.name}</strong> {u.email}
          </div>
        ))
      )}
    </div>
  );
}
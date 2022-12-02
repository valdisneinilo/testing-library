import React, { useEffect } from "react";

interface IContatoProps {
  nome: string;
  telefone: string;
  email: string;
}

const ListaContato = () => {
  const [contatos, setContatos] = React.useState([]);
  useEffect(() => {
    async function lista() {
      const req = await fetch("http://localhost:9000/contato");
      const res = await req.json();
      setContatos(res);
    }
    lista();
  }, []);

  return (
    <ul>
      {contatos.map((contato: IContatoProps) => (
        <li key={contato.nome}>
          {contato.nome} - {contato.telefone} - {contato.email}
        </li>
      ))}
    </ul>
  );
};

const Contato: React.FC = () => {
  return (
    <>
      <h1>Contato</h1>
      <ListaContato />
    </>
  );
};

export default Contato;

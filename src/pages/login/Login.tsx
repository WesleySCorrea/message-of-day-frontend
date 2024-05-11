import React, { useState } from "react";
import Modal from "react-modal";

import styles from "./Login.module.css";

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      // Se o email ou a senha estiverem em branco, abra o modal de alerta
      setModalIsOpen(true);
      return;
    }

    try {
      const response = await fetch("http://localhost/api/lo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.href = "/";
      } else if (response.status === 401) {
        setErrorMessage("Usuário ou senha inválidos");
        setModalIsOpen(true);
      } else {
        // setErrorMessage("Erro ao tentar fazer login");
        setModalIsOpen(true);
      }
    } catch (error) {
      // setErrorMessage("Erro ao tentar fazer login");
      setModalIsOpen(true);
    }
  };

  return (
    <div className={styles.container_login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="exemplo@exemplo.com"
          required
        />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Entrar</button>
        <a href="http://localhost/register">Cadastre-se</a>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={styles["modal-content"]}
        overlayClassName={styles["modal-overlay"]}
      >
        <h2>Email ou senha inválidos</h2>
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>
    </div>
  );
};

export default Login;

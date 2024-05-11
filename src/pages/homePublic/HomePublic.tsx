import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./HomePublic.module.css";

interface Message {
  message: string;
  sender: string;
}

const HomePublic: React.FC = () => {
  const [message, setMessage] = useState<Message | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get("http://localhost:8090/api/message");
        setMessage(response.data);
      } catch (error) {
        console.error("Erro ao buscar a mensagem:", error);
        // Aqui você pode definir uma mensagem de erro alternativa, se necessário
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className={styles.container}>
      {message && (
        <div>
          <div className={styles.container_message}>
            <p>{message.message}</p>
          </div>
          <div className={styles.container_sender}>
            <p>Enviado por: {message.sender}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePublic;

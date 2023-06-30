import CheckBoxWithImage from "../../CheckBoxWithImage";
import { Container, Modal, Form, CloseButton, SendButton } from "./styles";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface FormUi {
  showModal: boolean;
  setShowModal: Function;
}

export function FormUi({ showModal, setShowModal }: FormUi) {
  const [formUi, setFormUi] = useState({
    nome: "",
    contato: "",
    server: "",
    service: "",
    obs: "",
  });
  const [selectedOption, setSelectedOption] = useState("");
  const [serverPW, setServerPW] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormUi({
      ...formUi,
      [name]: value,
      service: selectedOption,
      server: serverPW,
    });
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    axios
      .post("https://sheetdb.io/api/v1/tpxvb7uy2ba1q", {
        data: {
          nome: formUi.nome,
          contato: formUi.contato,
          server: formUi.server,
          service: formUi.service,
          obs: formUi.obs,
        },
      })
      .then((data) => {
        setShowModal(false);
        toast.success("Enviado com Sucesso !!");
      })
      .catch((error)=>{
        toast.error(`Falha ao Enviar o Formulario!! ${error.message}`);
      });
  }
  return (
    <Container>
      <Modal>
          <h1>Pedido</h1>
          <Form onSubmit={handleSubmit}>
            <div className="info">
              <label>Nome :</label>{" "}
              <input
                type="text"
                name="nome"
                value={formUi.nome}
                onChange={handleFormChange}
                required
              />
              <label>Contato : </label>
              <input
                type="text"
                name="contato"
                value={formUi.contato}
                onChange={handleFormChange}
                required
              />
            </div>
            <h3>Perfect World Server:</h3>
            <div>
              <CheckBoxWithImage setServerPW={setServerPW} />
            </div>
            <div className="service">
              <h3>Serviço: </h3>
              <div>
                <label
                  className={
                    selectedOption === "convert" ? "ativado" : "desativado"
                  }
                >
                  <input
                    type="radio"
                    checked={selectedOption === "convert"}
                    onChange={handleOptionChange}
                    value="convert"
                  />{" "}
                  Converter Interface <span>R$50,00</span>
                </label>
                <label
                  className={
                    selectedOption === "createIndividualSimple" ? "ativado" : "desativado"
                  }
                >
                  <input
                    type="radio"
                    checked={selectedOption === "createIndividualSimple"}
                    onChange={handleOptionChange}
                    value="createIndividualSimple"
                  />{" "}
                  Ui Individual<span> R$150,00</span>
                </label>
                <label
                  className={
                    selectedOption === "createIndividualPremium" ? "ativado" : "desativado"
                  }
                >
                  <input
                    type="radio"
                    checked={selectedOption === "createIndividualPremium"}
                    onChange={handleOptionChange}
                    value="createIndividualPremium"
                  />{" "}
                  Ui Individual - Premium<span> R$200,00</span>
                </label>
                <label
                  className={
                    selectedOption === "createGuildPremium" ? "ativado" : "desativado"
                  }
                >
                  <input
                    type="radio"
                    checked={selectedOption === "createGuildPremium"}
                    onChange={handleOptionChange}
                    value="createGuildPremium"
                  />{" "}
                  Ui Guild - Premium<span> R$250,00</span>
                </label>
              </div>
            </div>
            <div className="obs">
              <h3>Observação</h3>
              <textarea
                name="obs"
                value={formUi.obs}
                onChange={handleFormChange}
              ></textarea>
            </div>
            <div className="buttons">
              <SendButton type="submit">Enviar</SendButton>
              <CloseButton onClick={() => setShowModal(!showModal)}>
                Fechar
              </CloseButton>
            </div>
          </Form>
      </Modal>
    </Container>
  );
}

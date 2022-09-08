import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { X } from "phosphor-react";
import { FormEvent, Fragment, useState } from "react";
import React from "react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.br";

export function Form() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cidade, setCidade] = useState("");

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

    const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsOpen(true);

    const data = {
      nome,
      sobrenome,
      email,
      tel,
      cidade,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/064b7781-b9a4-4d37-9185-fb7892064361",
        data
      )
      .then((response) => {
        setNome("");
        setSobrenome("");
        setEmail("");
        setTel("");
        setCidade("");
      });
  };

  return (
    <section
      id="form"
      className="grid wrapper mob:px-4 tablet:px-4 pc:px-0 text-red-500 gap-4"
    >
      <header className="grid ">
        <h2 className="sectionTitle">Um país melhor é possível</h2>

        <p className="textSite mx-1 mob:text-center pc:text-left tablet:text-left">
          Um país melhor para todas e todos é possível. Você também pensa assim?
          Preencha o cadastro e vamos lado a lado! Insira seus dados nos campos
          abaixo e, em breve, vamos entrar em contato. Você é fundamental para
          um Brasil menos desigual e mais fraterno.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="grid pc:grid-cols-2 gap-3 ">
        <input
          className="inputSubscribe"
          type="text"
          placeholder="*Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />

        <input
          className="inputSubscribe"
          type="text"
          placeholder="*Sobrenome"
          value={sobrenome}
          onChange={(event) => setSobrenome(event.target.value)}
          required
        />

        <input
          className="inputSubscribe"
          type="email"
          placeholder="*E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <Cleave
          placeholder="*Telefone"
          type="telephone"
          options={{ phone: true, phoneRegionCode: "BR" }}
          value={tel}
          onChange={(event) => setTel(event.target.value)}
          className="form-field inputSubscribe"
          required
        />

        <input
          className="inputSubscribe"
          type="text"
          placeholder="*Cidade"
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
          required
        />
        <button
          className="font-bold inline-flex pl-6 w-full shadow bg-white hover:bg-red-500 hover:text-white text-red-500 mob:justify-center pc:justify-start px-5 py-2.5 items-center text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-500 "
          type="submit"
        >
          Enviar
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-30" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative max-w-lg flex justify-center bg-gray-100 wrapper transform overflow-hidden rounded-md p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="span"
                      className="text-red-500 font-bold text-xl"
                    >
                      Obrigado! Estamos juntos pelo Brasil!
                    </Dialog.Title>

                    <div className="">
                      <a
                        onClick={closeModal}
                        className="absolute top-2 text-red-500 right-2"
                      >
                        <X size={16} />
                      </a>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </form>
    </section>
  );
}

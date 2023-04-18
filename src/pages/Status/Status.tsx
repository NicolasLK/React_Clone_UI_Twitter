import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";

import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

/**
 * Fluxo de renderizacao:
 *
 * 1: Toda vez que alteramos o estado de um componente, TODO o componente eh recalculado.
 * 2: Toda vez que o seu compenente PAI renderizar.
 * 3: Toda vez que algumas das suas propriedades mudarem.
 *
 */

/**
 * Algoritmo de recomciliacao:
 *
 * 1: Criar em memoria a nova versao do HTML do componente
 * 2: Compara essa nova versao com a versao anterior do HTML (Diff)
 * 3: Aplicar as operacoes JavaScript para alterar somente o necessario no HTML
 *
 */

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabens pelo progresso.",
  ]);

  function CreateNewAnswer(event: FormEvent) {
    event.preventDefault();

    if (newAnswer === "") {
      return;
    } else {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae exercitationem voluptatum autem itaque reprehenderit ipsum consequatur laborum ipsam, molestias mollitia, perspiciatis corporis iusto dolorum sunt unde. Sint, voluptatem amet." />

      <Separator />

      <form onSubmit={CreateNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/NicolasLK.png"
            alt="Nicolas Loffi Kaminski"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}

import { AboutComponent } from './AboutComponent.js';

export const HomeComponent = {
  render: () => {
    const aboutHTML = AboutComponent.render({
      descricao: "Somos uma equipe apaixonada por JavaScript puro!"
    });

    return `
      <section>
        <h1>Página Inicial</h1>
        <p>Conteúdo da Home.</p>

        <div>
          <h2>Sobre nós (incluso aqui):</h2>
          ${aboutHTML}
        </div>
      </section>
    `;
  }
};

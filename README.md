# Framework Simples
Framework criado para poder apresentar um projeto com HTML CSS e JAVASCRIPT simples onde não poderia ser utilizado framworks externos, então, para poupar tempo e dor de cabeça, criei um próprio bem simples, apenas com a função de rotas e componentes.

## Como usar?
Copie o app.js, framework.js e index.html para dentro do seu projeto.
Crie um arquivo para as rotas e siga o padrão do repositório

## Rotas:
As rotas são criadas por meio de um Array de Objetos, onde é passado o caminho desejado e o componente que será atribuido para rota.

## Componentes:
export const NomeComponente = {
  render: (props = {}) => {
    return `
      <div>
        conteudo interno ${props.titulo}
      </div>
    `;
  }
};

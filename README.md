# Desafio Front-end Vagas.com

## Depois de clonar o projeto utilize:

### `npm install`

Para instalar as dependências do projeto

### `npm start`
Para iniciar o app em modo de desenvolvimento
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## Código

- Utilizei a biblioteca ReactJS para facilitar na componentização do projeto e no reaproveitamento de código, trabalhei com componentes funcionais e hooks.
- Utilizei o pré processador SASS para trabalhar com CSS, utilizando as mixins, nesting e variables para reaproveitar código, facilitar mudança de fontes e cores. 
- Utilizei o padrão bem do CSS, pois unido com o SASS (nesting) facilita a escrita do código.

## Primeira parte: colocando ordem na casa.

- Busquei utilizar as tags correspondentes a cada cenário para tomar o código semântico.
- Preferi componentizar a estrutura deixando componentes como o button e o checkbox genericos para serem utilizados em outros lugares do projeto.
- Na tag HTML acredito que o atributo faltando seria o "lang", pois ele ajuda a definir o idioma do elemento.

## Segunda parte: tornando a casa acessível.

- Busquei deixar o projeto o mais acessível possível, aplicando labels com htmlFor (for) para os inputs, também construí um ENUM para atribuir aria-labels de identificação nos buttons, trazendo assim uma identificação para os leitores de tela.

## Terceira parte: o contador de stickers.

- Utilizei o useState para manipular e manter o valor interno no input reativo.

## Bonus: Vamos validar o formulário?!

- Na validação do form procurei deixar evidente as situações em que o usuário precisa se atentar:
  - Caso o checkbox não tenha nenhuma opção selecionada todos ficaram em vermelho evidenciando a necessidade de selecação
  - Caso o input de quantidade de stickers seja igual a zero o input ficará vermelho e o button de decremento ( - ) ficará desativado.
  - O botão de enviar ficará desativado caso o checkbox ou o input necessite de interação do usuário.

- Quando o formulário for enviado com sucesso verifico se o state de messageSucsess possui valor, alterando a função do button para reload e o texto do button para "Pedir de novo".



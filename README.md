# 🧠 Teoria da Computação e Compiladores

Projeto acadêmico desenvolvido durante a disciplina de **Teoria da Computação e Compiladores**, contendo simuladores interativos construídos em React para representar visualmente conceitos fundamentais da computação teórica, autômatos finitos e sistemas baseados em estados.

---

# 📖 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Case 01 - Máquina de Doces](#vending-machine)
- [Case 02 - Simulador de Elevador](#elevator)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Membros do Projeto](#members)

---

## Sobre o Projeto

Este repositório reúne aplicações front-end desenvolvidas ao longo do semestre da disciplina de **Teoria da Computação e Compiladores**, com o objetivo de representar, de forma visual e interativa, conceitos clássicos da computação teórica.

Os sistemas simulam comportamentos baseados em **máquinas de estados**, **autômatos finitos determinísticos**, controle de fluxo e persistência de estado, permitindo observar na prática como determinadas regras de transição influenciam o comportamento de um sistema.

Além do caráter acadêmico, o projeto também serviu como exercício de desenvolvimento front-end utilizando React e gerenciamento de estados.

---

# 🥤 Case 01: React Vending Machine <a name="vending-machine"></a>

## Descrição

Este case consiste na implementação de uma máquina automática de vendas (Vending Machine), capaz de simular o processo completo de compra de produtos através da inserção de crédito e seleção de itens.

O sistema gerencia internamente o estado da aplicação, controlando:

- Inserção de dinheiro;
- Atualização do saldo disponível;
- Seleção de produtos;
- Validação de saldo;
- Liberação do produto;
- Cálculo e devolução de troco.

A lógica implementada pode ser modelada como um **Autômato Finito Determinístico (AFD)**, onde cada ação do usuário representa uma transição entre estados previamente definidos.

---

## Estrutura Lógica do Case 01

A figura abaixo representa o diagrama de estados utilizado para modelar o funcionamento da máquina de doces.

![Estrutura lógica da máquina de doces](image-1.png)

---

### Operações Simuladas

O sistema contempla:

- Recepção de cédulas de R$1,00;
- Recepção de cédulas de R$2,00;
- Recepção de cédulas de R$5,00;
- Acúmulo de crédito em tempo real;
- Seleção de produtos;
- Compra mediante saldo suficiente;
- Cálculo automático de troco;
- Tratamento de operações inválidas;
- Bloqueio de compras sem saldo suficiente.

---

## Mockup Inicial

A figura abaixo representa o desenho conceitual originalmente utilizado para o desenvolvimento da interface.

![Mockup da máquina de doces](image.png)

---

# 🛗 Case 02: Simulador de Elevador <a name="elevator"></a>

## Descrição

Este case consiste na implementação de um simulador de elevador operando em um edifício de quatro andares:

- Térreo (T)
- 1º Andar
- 2º Andar
- 3º Andar

O objetivo é reproduzir o comportamento de um elevador real utilizando conceitos de estados, transições e memória.

Durante a execução, o sistema precisa armazenar informações como:

- Andar atual;
- Destino selecionado;
- Estado da porta;
- Estado operacional do elevador.

O simulador implementa regras de segurança que impedem movimentações indevidas, como deslocamentos com as portas abertas.

---

## Funcionamento Geral

Entre as operações disponíveis estão:

- Seleção de andares;
- Abertura de portas;
- Fechamento de portas;
- Movimentação vertical da cabine;
- Atualização automática do estado do elevador.

---

## Representação Visual

A imagem abaixo representa a estrutura conceitual utilizada para a modelagem do sistema.

![Representação do elevador](image-2.png)

---

## Estrutura Lógica do Case 02

A figura abaixo apresenta o diagrama de estados utilizado como base para a implementação do simulador.

![Estrutura lógica do elevador](image-3.png)

O modelo contempla:

- Estados correspondentes aos andares;
- Estados de porta aberta;
- Estados de porta fechada;
- Restrições de movimentação;
- Transições condicionadas ao contexto atual.

---

# 🚀 Tecnologias Utilizadas

## Front-end

- React
- TypeScript
- CSS Modules
- React Hooks

## Conceitos Acadêmicos

- Autômatos Finitos Determinísticos (AFD)
- Máquinas de Estados
- Transições de Estado
- Persistência de Estado
- Sistemas Reativos
- Modelagem Computacional

---

# 👥 Membros do Projeto <a name="members"></a>

### Davi Batista
GitHub: https://github.com/odavibatista

RA: 823212382

---

### Rômulo Mendes
GitHub: https://github.com/Romulomrs

RA: 822161394

---

### Silas Rodrigues
GitHub: https://github.com/SilasNR

RA: 82327338

---

### Mateus Idibal

RA: 824218817

---

### Gabriel Argoso

RA: 82413799

---

### Caique Andrade

RA: 823121611

---

# 📚 Contexto Acadêmico

Projeto desenvolvido para a disciplina de **Teoria da Computação e Compiladores**, com foco na aplicação prática de conceitos formais da computação através da construção de simuladores interativos.

O objetivo principal foi transformar modelos teóricos em sistemas visuais capazes de demonstrar o comportamento de autômatos e máquinas de estados em cenários reais.

---
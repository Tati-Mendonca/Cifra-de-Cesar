
![Google Tradutor da cifra de César](https://user-images.githubusercontent.com/97405991/152279760-33dcb06e-e11d-4ea4-b49e-72b0335e1cca.png)

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Sobre o projeto](#2-sobre-o-projeto)
- [3. Interface do Usuário](#3-inferface-do-usuário)
- [4. Ferramentas utilizadas](#4-ferramentas-utilizadadas)
- [5. Instalação](#5-instalacao)


## 1. Prefácio

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Sobre o projeto

O Google Tradutor das mensagens de César foi desenvolvido para criptografar e 
traduzir palavras ou frases usando Cifra de César em qualquer dispositivo movel ou computador.
O aplicativo possibilita ao usuario criar senhas seguras ou trocar mensagens secretas com
muita facilidade basta o usuario escolher a numeração que será sua chave secreta e digitar na tela 
o que deseja traduzir ou criptografar que tudo é feito de maneira automática e segura, pois é
possivel selecionar até 25 chaves de deslocamento diferentes.
O projeto foi desenvolvido como uma solução pratica para estudantes e pessoas em geral que tenham curiosidade
de saber como funciona um dos métodos conhecidos mais antigos e simples de técnicas de criptografia.

## 3. Interface do usuário

A aplicação foi pensada desde o inicio para ser o mais clean possivel, por isso usei um design bem semelhante
ao do Google Tradutor, pois acredito que essa "familiaridade" com a interface facilite a experiência do 
usuário. O que diferencia é apenas a possibilidade de inserir a chave secreta indicando quantas posições
de deslocamento quer que a cifra utilize para cifrar ou decifrar a mensagem.  

![meu](https://user-images.githubusercontent.com/97405991/152292880-3235ff5e-9121-4bcd-8748-3b81a8033942.jpeg)

A interface permite ao usuário:

- Eleger uma chave secreta com até 25 possibilidades de deslocamento.
- Inserir uma mensagem (texto) para ser cifrada.
- Ver o resultado da mensagem cifrada.
- Inserir uma mensagem (texto) para ser decifrada.
- Ver o resultado da mensagem decifrada.

## 4. Ferramentas Utilizadas

- HTML
- CSS
- Javascrip
- Dom

## 5. Instalação

- Baixe o app no ...
- Procure o local onde o projeto está e o selecione (Caso o projeto seja baixado via zip, é necessário extraí-lo antes de procurá-lo)
- Por fim clique em Index.html


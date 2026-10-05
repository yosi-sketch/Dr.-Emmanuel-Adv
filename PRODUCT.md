# Dr. Emmanuel Carlos de Souza

## Direção visual

A identidade se baseia no monograma ES e na combinação de dourado e prata do logo enviado. Tema: dourado #c79559, claro #ffe2a6, prata #d8d9dc, dourado escuro #79522d, grafite #17191c e marfim #f8f6f1. Tipografia preservada: Cormorant Garamond e Plus Jakarta Sans. Tema Tailwind 4 em app/globals.css, com variáveis compartilhadas pelos componentes.

## Conteúdo

Abertura com o retrato real do Dr. Emmanuel e a mensagem “Defesa firme. Orientação clara. Cuidado com você.” Quatro frentes de atendimento com detalhes em modais; apresentação individual do advogado; sede em Itabira; seis relatos reais; etapas de atendimento; dúvidas frequentes; contato e rodapé.

Nota 5,0 e 107 avaliações reproduzem o texto enviado. Telefone confirmado: +55 (31) 99798-9797. OAB/MG 232.059 consta no logo. Endereço: Av. Duque de Caxias, 1.389, 2º andar, Quatorze de Fevereiro, Itabira - MG, CEP 35900-236. E-mail, redes sociais, horários e domínio não informados.

Direito Criminal, Tribunal do Júri e Direito de Família foram inferidos dos relatos de júris e divórcio no material enviado. Consultoria Jurídica apresenta o atendimento de orientação. A seleção de áreas precisa ser confirmada pelo profissional antes de publicar.

## Assets

Logo original em public/emmanuel-logo-original.png. Versão transparente preparada com ImageGen em public/emmanuel-logo.png, removendo o quadriculado gravado no fundo. Fotografias reais em WebP: emmanuel-hero.webp e emmanuel-retrato.webp, sem alterações de conteúdo. Enquadramento feito com object-fit. A sede é apresentada com endereço e link para o mapa. Ícones da aplicação atualizados para ES.

## Arquitetura

Next.js 16, React 19, Tailwind 4 e Framer Motion. Navegação por âncoras, animações de entrada, efeitos de hover e modais preservados. Conteúdo em app/page.tsx, contatos e indicadores centralizados em app/site-data.ts e metadados em app/layout.tsx. Sem serviços remotos ou novas dependências.

## Validação

Lint e build de produção passaram sem erros. A página de produção foi verificada em 320, 390, 768, 1024 e 1440 pixels, sem transbordamento horizontal. Todos os links internos possuem destino. Os seis CTAs principais e os quatro CTAs dos modais usam o WhatsApp confirmado; os links telefônicos usam o mesmo número. Menu móvel, FAQ, os quatro modais, fechamento por Escape, contenção e restauração de foco e preferência de movimento reduzido foram verificados. Imagens carregadas e console sem erros. A varredura dos fontes não encontrou referências à identidade anterior. Capturas em outputs/emmanuel-desktop.jpg, outputs/emmanuel-mobile.jpg e outputs/emmanuel-full-page.jpg; relatório em outputs/validation.json.

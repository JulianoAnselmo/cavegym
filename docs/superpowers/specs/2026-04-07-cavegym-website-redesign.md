# Cave Gym -- Website Redesign Spec

## Diagnostico do Site Atual

O site atual (cavegym.com.br) e construido em Wix com apenas 3 paginas (Home, Sobre Nos, Contato). Problemas:
- Visual generico de template Wix, nao transmite premium
- Apenas uma unidade (Catanduva), Taquaritinga nao aparece
- Navegacao pobre (3 itens)
- Sem estrategia de conversao clara
- Sem prova social, FAQ, ou secao de planos
- Copywriting fraco e generico
- Sem SEO local estruturado
- Sem responsividade premium

## Conceito Criativo

**Dark Premium Heritage** -- Preto profundo como base, vermelho intenso (#DC2626) como cor de destaque, mantendo a identidade forte ja reconhecida da Cave. Visual cinematografico, tipografia agressiva e sofisticada, muito contraste. Referencia estetica: marcas fitness de alto padrao (Equinox, 1Rebel, Barry's).

A marca Cave Gym gira em torno de transformacao, disciplina e forja. O site deve transmitir exclusividade, forca, performance e desejo.

## Dados das Unidades

### Catanduva
- Endereco: Av. Dep. Orlando Zancaner, 1051 - Jardim Amendola, Catanduva - SP, 15801-120
- WhatsApp: (17) 99774-6465
- Email: contato@cavegym.com
- Instagram: @cavegymcatanduva
- Horario: Seg-Sex 05:00-23:00, Sab horario reduzido

### Taquaritinga
- Endereco: Rua General Osorio, 444 - Centro, Taquaritinga - SP, 15900-013
- WhatsApp: (17) 99774-6465 (mesmo)
- Instagram: @cavegymtaquaritinga
- Horario: Mesmo de Catanduva

## Stack Tecnica

- HTML5 semantico + CSS3 (custom properties) + JavaScript vanilla
- Zero frameworks, zero dependencias externas
- Google Fonts: Montserrat (headlines), Inter (body), Oswald (numeros/stats)
- Mobile-first responsive
- Lazy loading de imagens
- IntersectionObserver para animacoes de scroll
- Smooth scroll navigation

## Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| --bg-primary | #0A0A0A | Fundo principal |
| --bg-secondary | #111111 | Secoes alternadas |
| --bg-surface | #1A1A1A | Cards, surfaces |
| --bg-elevated | #222222 | Hover states |
| --accent | #DC2626 | CTAs, destaques, brand |
| --accent-hover | #B91C1C | Hover do accent |
| --text-primary | #FFFFFF | Headlines |
| --text-secondary | #E0E0E0 | Body text |
| --text-muted | #888888 | Textos auxiliares |
| --border | #2A2A2A | Bordas sutis |

## Tipografia

- **Headlines (h1-h3):** Montserrat Black/ExtraBold, uppercase, letter-spacing: 2-4px
- **Body:** Inter Regular/Medium, 16px base, line-height 1.6
- **Stats/Numeros:** Oswald Bold, para contadores e dados de impacto
- **CTAs:** Montserrat Bold, uppercase, letter-spacing: 2px

## Arquitetura de Secoes (10 blocos)

### 1. HERO -- Impacto Imediato
- **Layout:** Fullscreen (100vh), imagem/video de fundo com overlay gradiente escuro
- **Conteudo:**
  - Logo Cave Gym animado (fade-in)
  - H1: "ONDE O NOVO VOCE E FORJADO."
  - Subtitulo: "A maior academia do interior paulista. Duas unidades. Uma missao: sua evolucao."
  - 2 CTAs: "AGENDAR VISITA" (vermelho) + "FALAR NO WHATSAPP" (outline branco)
- **Animacao:** Logo fade + text slide-up + CTA fade-in sequencial
- **Scroll indicator:** seta animada no bottom

### 2. MARCA -- Posicionamento Premium
- **Layout:** Split 50/50 -- texto esquerda, imagem direita
- **Headline:** "NAO E SO UMA ACADEMIA. E UMA FORJA."
- **Copy:** Storytelling da marca focado em transformacao, disciplina, alta performance. Reescrita premium do "Quem Somos" atual.
- **Texto sugerido:** "Na Cave, acreditamos que a verdadeira transformacao nasce no confronto com os proprios limites. Cada treino e uma batalha interna. Cada gota de suor, um marco de conquista. Aqui, corpo, mente e disciplina se fundem em um unico proposito: forjar a melhor versao de voce."
- **Detalhe:** Linha vertical vermelha como elemento decorativo
- **Animacao:** Reveal on scroll (texto da esquerda, imagem da direita)

### 3. DIFERENCIAIS -- Por que a Cave
- **Layout:** Grid 3x2 de cards com icones
- **Headline:** "POR QUE TREINAR NA CAVE"
- **6 Diferenciais:**
  1. Estrutura de Ponta -- "Equipamentos de ultima geracao em mais de 2.000m2 de area construida"
  2. Acompanhamento Profissional -- "Equipe especializada para guiar cada etapa da sua evolucao"
  3. Ambiente de Alta Performance -- "Energia, foco e intensidade em cada centimetro do espaco"
  4. Area Kids Completa -- "Treine com tranquilidade enquanto seus filhos se divertem com seguranca"
  5. Comunidade Forte -- "Mais de 14 mil pessoas conectadas por disciplina e proposito"
  6. Resultados Reais -- "Metodologia que transforma corpo e mente com consistencia"
- **Visual:** Icones em linha fina branca, hover com borda vermelha
- **Animacao:** Stagger fade-in dos cards

### 4. MODALIDADES -- O que Oferecemos
- **Layout:** 4 categorias com cards expansiveis
- **Headline:** "MODALIDADES"
- **Subheadline:** "Encontre o treino que vai te levar ao proximo nivel"
- **Categorias:**
  - FORCA: Musculacao, Preparacao Fisica para Atletas
  - PERFORMANCE: Funcional, Spinner, Jump
  - LUTA: Jiu-Jitsu, Muay Thai
  - MOVIMENTO: Danca, Pilates Solo, Funcional Kids
- **Visual:** Cards escuros com imagem de fundo sutil, nome + breve descricao, hover com overlay vermelho
- **Animacao:** Hover scale + reveal on scroll

### 5. ESTRUTURA -- Conheca a Caverna
- **Layout:** Galeria fullwidth com fotos grandes
- **Headline:** "CONHECA A CAVERNA"
- **Subheadline:** "Mais de 2.000m2 projetados para sua evolucao"
- **Visual:** Grid de fotos com diferentes tamanhos (masonry-like), lightbox ao clicar
- **Fotos:** Placeholder com imagens de referencia (usar fotos do Instagram depois)
- **Animacao:** Fade-in ao scroll, zoom sutil no hover

### 6. UNIDADES -- Catanduva + Taquaritinga
- **Layout:** 2 cards premium lado a lado (stack no mobile)
- **Headline:** "NOSSAS UNIDADES"
- **Subheadline:** "Duas cavernas. A mesma essencia."
- **Card Catanduva:**
  - "CAVE GYM CATANDUVA"
  - Endereco completo
  - Horario de funcionamento
  - Botao: "COMO CHEGAR" (link Google Maps)
  - Botao: "WHATSAPP" (link wa.me)
  - Botao: "AGENDAR VISITA"
- **Card Taquaritinga:** Mesma estrutura
- **Visual:** Cards com borda sutil, icone de localizacao, hover com borda vermelha
- **Animacao:** Slide-in dos cards

### 7. PROVA SOCIAL -- Resultados Reais
- **Layout:** Barra de stats no topo + carrossel de depoimentos abaixo
- **Headline:** "NUMEROS QUE FALAM"
- **Stats (contadores animados):**
  - 2 Unidades
  - 10+ Modalidades
  - 14.000+ Comunidade
  - 4.8 Avaliacao Google
- **Depoimentos:** 3-4 cards com foto placeholder, nome, frase. Usar avaliacoes reais do Google.
- **Animacao:** Counter animation + carrossel autoplay

### 8. PLANOS -- Comece Sua Transformacao
- **Layout:** 3 cards de planos (sem preco)
- **Headline:** "COMECE SUA TRANSFORMACAO"
- **Subheadline:** "Escolha o plano que se encaixa na sua jornada"
- **3 Planos:**
  - EVOLUCAO -- "Para quem quer comecar a transformacao" (Musculacao + Funcional)
  - PERFORMANCE -- "Para quem busca o proximo nivel" (Todas as modalidades)
  - ELITE -- "Para quem nao aceita limites" (Tudo + acompanhamento personalizado)
- **CTA de cada card:** "FALAR COM CONSULTOR" (WhatsApp)
- **Visual:** Card do meio (Performance) destacado como "Mais Popular"
- **Animacao:** Hover elevacao + borda vermelha

### 9. FAQ -- Perguntas Frequentes
- **Layout:** Accordion elegante, coluna unica centralizada
- **Headline:** "PERGUNTAS FREQUENTES"
- **Perguntas:**
  1. Como funciona a matricula?
  2. Quais sao os horarios de funcionamento?
  3. Posso fazer uma aula experimental?
  4. Quais modalidades estao incluidas no plano?
  5. Como funciona a Area Kids?
  6. Qual a diferenca entre as unidades?
  7. Preciso de experiencia para comecar?
  8. Como faco para cancelar ou trocar de plano?
- **Visual:** Acordeao com + / - animado, borda sutil
- **SEO:** Schema FAQPage para rich snippets

### 10. FOOTER -- Premium
- **Layout:** Grid 4 colunas (logo | navegacao | unidades | redes)
- **Conteudo:**
  - Logo Cave Gym
  - Links de navegacao (todas as secoes)
  - Dados das 2 unidades (endereco + telefone)
  - Redes sociais (Instagram Catanduva + Taquaritinga)
  - Link para app (Google Play)
  - CTA final: "PRONTO PARA SER FORJADO?" + botao WhatsApp
  - Copyright + creditos
- **Visual:** Background #0A0A0A, linha vermelha no topo

## Elemento Fixo -- WhatsApp Flutuante
- Botao flutuante no canto inferior direito em TODAS as paginas
- Icone WhatsApp + pulse animation
- Cor verde WhatsApp (#25D366) para contraste com o dark theme
- Link direto para wa.me com mensagem pre-preenchida

## Menu / Navegacao
- Header fixo com logo + hamburger menu
- Menu fullscreen overlay ao abrir (dark com links grandes)
- Links para todas as secoes (smooth scroll)
- CTA "MATRICULE-SE" como botao vermelho no menu
- Scroll: header fica mais compacto com background solido

## Responsividade
- Breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)
- Mobile: stack vertical, hero ajustado, menu hamburger, cards em coluna
- Tablet: grid 2 colunas, hero com texto menor
- Desktop: layout completo conforme descrito
- Wide: max-width 1440px centralizado

## SEO Local
- 2x Schema.org LocalBusiness (uma por unidade)
- Schema FAQPage no FAQ
- Schema WebSite
- Title: "Cave Gym | Academia Premium em Catanduva e Taquaritinga"
- Meta description otimizada com cidades
- H1 semantico com localizacao
- Open Graph completo para compartilhamento social

## Estrutura de Arquivos

```
cave-gym/
  index.html          -- Pagina unica com todas as secoes
  css/
    style.css         -- Estilos principais
    animations.css    -- Animacoes e keyframes
  js/
    main.js           -- Logica principal (scroll, menu, animacoes)
    counter.js        -- Contador animado para stats
  assets/
    images/           -- Fotos e imagens
    icons/            -- Icones SVG
  favicon.ico
  robots.txt
  sitemap.xml
```

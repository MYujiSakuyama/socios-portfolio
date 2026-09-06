# Sócios — Sistema de design

**Versão 1.0 · 06/09/2026 · fonte única de verdade para `site/index.html`.**
Tudo que está aqui existe no código. Se divergir, o código está errado ou este documento está velho — nunca os dois certos.

---

## 0. Decisão de estratégia de rolagem

Referência: [Lovable — Scrolling designs & patterns](https://lovable.dev/guides/scrolling-designs-patterns-when-to-use), cruzada com o brief da marca (03/09/2026).

| Padrão | Decisão | Por quê |
|---|---|---|
| **Scrollytelling** | **Adotado** — é a espinha | O brief pede "uma história numa rolagem só". O padrão exige uma cena presa que se transforma enquanto o texto passa: é a seção *Como funciona* (celular fixo, três passos). |
| **Scroll-triggered** | **Adotado** | Revelação ao entrar na tela, com `IntersectionObserver`, só `transform` e `opacity`. Nunca animar `width`/`height`/`top`. |
| **Fixed background** | Adotado em forma segura | A régua de leitura é `position: fixed` (o guia indica isso em vez de `background-attachment`, que quebra no iOS). |
| Parallax | Só o mínimo | Deslocamento de 10 px no herói pelo ponteiro. Nada preso à rolagem: público mobile, SEO crítico. |
| Snap | **Recusado** | Leitura longa. A rolagem é sempre da pessoa (brief §9). |
| Infinite scroll | **Recusado** | Some o rodapé, quebra leitor de tela, e a página tem uma ação no fim. "Infinito" no pedido original significava *ininterrupto*, e é isso que existe. |
| Horizontal | Recusado | Dois produtos não fazem galeria. Gesto conflita com voltar no celular. |
| Multidirecional | Recusado | Desorienta quem chega pela primeira vez, que é todo mundo. |

**3D.** Recusado modelo 3D em arquivo (Three.js ou `model-viewer`: 150–250 KB e nenhum objeto físico para modelar — o produto é software). Adotada **perspectiva CSS**: o celular da cena tem corpo com espessura, gira por passo e inclina com o ponteiro; os cartões da prova inclinam ao passar o mouse. Custo: 0 KB.

---

## 1. Fundações (tokens)

Dois níveis: **base** (valor cru) e **semântico** (para que serve). Componentes usam só os semânticos.

### Cor

| Base | Hex | Semântico | Uso |
|---|---|---|---|
| madeira-900 | `#0B0A09` | `--void` | Fundo da página |
| madeira-800 | `#12100D` | `--surface` | Faixas alternadas, contadores |
| madeira-700 | `#191612` | `--card` | Cartões, campo de link |
| madeira-650 | `#201C16` | `--card-2` | Cartão em relevo |
| madeira-600 | `#2A2620` | `--line` | Hairlines |
| madeira-500 | `#3A342B` | `--line-2` | Bordas com presença |
| papel-100 | `#F4F1EA` | `--text` | Texto principal · 17,3:1 sobre `--void` |
| papel-400 | `#A39C90` | `--dim` | Texto secundário · 7,6:1 |
| papel-600 | `#746D62` | `--dim-2` | Rótulos, meta · 4,6:1 |
| trena-500 | `#F5C63D` | `--trena` | **Única cor viva.** Ação, medição, foco. 12:1 sobre `--void` |
| âmbar-500 | `#E89A3C` | `--amber` | Só em brilhos de fundo, nunca em texto |

**Regras.** A trena aparece só onde algo é medido ou onde a pessoa age. Proibidos por escrito: azul/teal "de confiança", gradiente roxo, vidro colorido, terracota. Nada de cor semântica de erro/sucesso — a página não tem formulário que falha.

### Tipo

| Papel | Família | Pesos | Nota |
|---|---|---|---|
| Voz (display e corpo) | **Archivo** variável, `f/archivo.woff2` | 400–800 | 24,5 KB. Fallback: system-ui grotesca |
| Instrumento (rótulo, número, medida) | **JetBrains Mono** variável, `f/jbmono.woff2` | 400–600 | 22 KB. `font-variant-numeric: tabular-nums` sempre |

Escala (clamp, mobile → desktop): h1 2,8–5,7 rem · h2 2,1–3,7 rem · h3 1,22–1,5 rem · h4 1,04 rem · lede 1,14–1,4 rem · corpo 17 px · small 0,95 rem · tag 0,67 rem/`.19em` caixa alta.
Tracking negativo cresce com o tamanho: h1 `-.045em`, h2 `-.038em`, h3 `-.022em`. Corpo sem tracking.

### Espaço, raio, movimento

- Espaço: `--s3` 12 · `--s4` 16 · `--s5` 24 · `--s6` 32 · `--s7` 48 · `--s8` 64 · `--s9` 96 · `--s10` 128 px. Seção = `--s10` (desktop) / `--s9` (celular).
- Raio: `--r1` 4 · `--r2` 8 · `--r3` 16 · `--r4` 24 px. Celular da cena: 34 px.
- Curva: `--ease: cubic-bezier(.16,.84,.44,1)`. Micro-interação 180–300 ms; revelação 600–800 ms; cena 700 ms.
- Largura: `--wrap` 1200 px. Régua lateral `--rail` 46 px (≥ 1120 px).
- Quebras: 560 · 640 · 720 · 760 · 880 · 900 · 980 · 1000 · 1060 · 1120 px — cada uma resolve um componente específico, não são "tamanhos de aparelho".

---

## 2. Elementos

| Elemento | Classe | Variantes | Estados | Acessibilidade |
|---|---|---|---|---|
| Botão | `.btn` | `.btn-1` trena (uma por tela), `.btn-2` contorno, `.btn-sm` | hover sobe 2 px + brilho; active volta; `:focus-visible` anel trena | ≥ 44 px, texto diz o que acontece ("Pedir o Raio-X") |
| Campo de link | `.linkrow` | herói, fecho, dock | `:focus-within` borda trena; `.linkhint.ok` quando reconhecido | `<label>` visível, `inputmode="url"`, `autocomplete="url"` |
| Rótulo | `.tag` | `.tag.on` (trena) | — | Caixa alta só visual |
| Número | `.num` | — | — | Tabular |
| Procedência | `[data-src]` | — | hover/foco mostra origem | `tabindex="0"` para teclado |
| Placeholder | `.tbd` | — | — | Tracejado; some quando o dado existir |
| Trena | `.tape` | marca, régua, cena | — | Sempre `aria-hidden` |
| Eyebrow | `.eyebrow` | — | — | Traço de 26 px + `.tag` |

---

## 3. Componentes

| Componente | Classe | Composição | Quando usar / quando não |
|---|---|---|---|
| Nav fixa | `.nav` | marca + links + `.btn-1.btn-sm` | Sempre. Links somem < 1000 px; o botão fica. |
| Régua de leitura | `.rail` | ticks + preenchimento + leitura `%` | ≥ 1120 px. Substituída por `.topbar` de 2 px abaixo disso. |
| Herói | `.hero` | canvas de campo + h1 dividido + `.linkbox` + `.hero-strip` | Uma vez. Nunca repetir o canvas. |
| Comparador | `.ba` | duas camadas, `clip-path`, `<input type="range">` | Antes/depois de **estado**, nunca de resultado inventado. |
| Cena presa | `.scene` | `.scene-pin` sticky + `.stage`/`.rig`/`.phone` + `.stp` + `.scene-dots` | Processo em etapas com um objeto que se transforma. Prende no desktop **e** no celular (52 vh no alto, fundo sólido). Não usar para lista. |
| Aparelho | `.phone` | `.phone-body`, `.phone-side`, `.phone-btn` ×4, `.phone-island`, `.phone-glare`, `::after` de vinheta | O objeto da cena presa. Corpo em `translateZ(-16px)`, reflexo preso a `--px`, luz de retorno que muda por passo. |
| Camada de medição | `.s3::before` + `.ov` | escurecimento + etiquetas | Quando é preciso pôr rótulo sobre uma captura real sem cobrir o produto. |
| Cartão | `.card` | holofote `::before` + tilt 3D | Prova e itens comparáveis. Não para texto corrido. |
| Abas | `.tabs` | radios + labels + painéis (CSS puro) | Até 5 opções. Sem JS necessário. |
| Benefícios | `.grid6` | `.ben` com ícone SVG 24×24, traço 1,5 | Ícones da mesma família. Nunca emoji. |
| Contadores | `.counters` | `.ct` com `data-count` | Só número real com procedência. |
| Medição ao vivo | `.live` | `.gauges` | Números do próprio aparelho. Nada sai da página. |
| FAQ | `.faq` | `<details>` + `::details-content` | Conteúdo real. `open` na primeira. |
| Dock | `.dock` | `.linkrow` compacto | Só ≤ 1000 px, só depois do herói. |

---

## 4. Padrões de página

**Percurso único (a landing).** Ordem fixa e razão de cada bloco:

1. Herói — promessa + o pedido começa aqui
2. Problema — comparador: o que hoje não é contado
3. Como funciona — cena presa, três passos
4. Prova — dois produtos reais, abertos
5. O que a gente faz — abas
6. Por que — seis benefícios
7. Quem somos — contadores
8. Medição ao vivo — a tese em miniatura
9. Perguntas — FAQ
10. Fecho — o link de novo
11. Rodapé

Regra: **cada bloco tem que servir à sequência "isso é sobre mim → é um problema meu → essa gente sabe → é real → não custa nada → mando"**. Bloco que não serve, sai.

---

## 5. Governança

- **Dono:** os dois sócios, em rodízio mensal. Quem muda o site atualiza este arquivo na mesma sessão.
- **Novo componente:** só entra se um bloco existente não resolve e se cabe no orçamento. Orçamento atual da página: **136 KB** medidos em 06/09/2026; teto proposto 180 KB (D-3 do spec, a confirmar).
- **Placeholder:** todo dado provisório leva `data-placeholder="x-N"` e consta no §12 do spec. Enquanto houver um, não publica.
- **Depreciação:** versões antigas da página não ficam na pasta `site/`. Histórico é git ou memória, não arquivo paralelo.
- **Verificação antes de publicar:** os seis portões do spec (§11) + captura em 390 × 844 e 1440 × 900 + `prefers-reduced-motion` + teclado no comparador e nas abas.

---

## 6. Registro de decisões

| Data | Decisão | Motivo |
|---|---|---|
| 06/09 | Acento amarelo de trena, não terracota/azul | Vem do assunto (medir); os outros são defaults de agência e de IA |
| 06/09 | Escuro quente `#0B0A09`, não azul-prussiano | Pedido de "almofada quentinha"; o azul lia frio |
| 06/09 | Webfonts próprias (46 KB) | Passe de "show de design" pedido; publicado na régua/rodapé com número real |
| 06/09 | Scrollytelling + scroll-triggered; nada de snap, infinito, horizontal | Tabela do §0 |
| 06/09 | 3D em CSS, não em arquivo | 0 KB, produto sem objeto físico |
| 06/09 | Depoimentos: vaga vazia declarada, nunca inventada | Brief: nada inventado |
| 06/09 | Peso dos produtos (272/311 KB) medido, não publicado | Enfraqueceria o argumento; registrado no spec PR-7 |
| 06/09 | Um arquivo principal em `site/` | Pedido do usuário; versões anteriores apagadas |
| 06/09 | Fio narrativo "onze da noite", aberto no problema e fechado na medição | Pedido de storytelling; dá um rosto ao problema sem inventar fato |
| 06/09 | Nenhum texto explica a própria animação | Era autoelogio disfarçado (RL-8); a cena fala por si |
| 06/09 | Etiquetas do passo 3 sobre camada escurecida, não sobre o produto | Cobriam o texto da captura real |
| 06/09 | Faixa do observador responsiva (`-66%/-16%` no celular) | Com o aparelho preso no alto, a área de leitura fica embaixo dele |

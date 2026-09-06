# Spec — Landing page do estúdio

**Versão:** 1.1 · **Data:** 06/09/2026
**Fontes:** Brief da marca (03/09/2026) + mandato duplo (06/09/2026) + os dois produtos no ar (06/09/2026) + marca provisória (06/09/2026).
**Natureza:** define o que a página tem que ser e como se prova que ficou certa. Só o que é verificável. A partir da v0.4 define também o que a **marca provisória** tem que carregar (§8-bis) — porque branding virou entrega, não contexto.

**Mudou da v1.0 para a v1.1:** passe de **texto** e de **aparelho**, a pedido do usuário ("textos mais profissionais e concisos, com storytelling; melhore o celular").

**Texto.** Ganhou um fio narrativo: a seção do problema abre em *"Onze da noite"* (rótulo) e a seção da medição ao vivo fecha chamando de volta — *"quantas pessoas chegaram às onze da noite"*. A cena do problema virou quatro frases curtas em vez de três longas. Saiu o meta-comentário que explicava a própria animação nos passos 2 e 3 (era autoelogio disfarçado, roçava RL-8). "Cola o link" virou "Cole o link". Cortes de gordura em dezoito trechos; nenhum fato novo entrou.

**Aparelho (cena presa).** Ilha da câmera, quatro botões laterais na espessura do corpo, reflexo que corre no vidro conforme o aparelho gira (preso a `--px`, o mesmo do ponteiro), vinheta interna, e a luz que o aparelho devolve muda com a tela: branca no passo 1, âmbar no passo 3. A troca de tela agora entra e sai do desfoque. O documento do passo 1 virou um combinado de verdade, com cabeçalho, marca de trena, três itens marcados (*o que a página faz · para quem · como se prova*) e rodapé "aprovado por você antes do código". No passo 3 entrou uma **camada de medição**: a tela escurece e as etiquetas ficam legíveis por cima, em vez de cobrir o texto do produto. Indicador de três pontos abaixo da legenda.

**A cena agora prende no celular também.** Abaixo de 900 px o aparelho fica preso no alto (52 vh) e o texto passa por baixo, com fundo sólido para nada vazar. A faixa de troca de passo virou responsiva: `-66%/-16%` no celular (a área de leitura fica embaixo do aparelho preso) e `-42%/-42%` no desktop. Etiquetas, documento e trena reduzidos para caber no aparelho menor.

**Medido em 06/09/2026 (Chrome DevTools):** 137,7 KB em 5 requisições · HTML 22,6 KB gzip · zero erro de console em 1440 × 900, 390 × 844 e 360 × 740 · campo de link testado por automação · movimento reduzido conferido.

**Mudou da v0.9 para a v1.0:** estratégia de rolagem decidida contra o guia da Lovable e registrada em `design-system/MASTER.md` §0 — scrollytelling + scroll-triggered; recusados snap, infinito, horizontal e parallax pesado. A seção *Como funciona* virou **cena presa**: celular fixo que troca de tela conforme os três passos passam (documento do combinado → esqueleto virando a captura real do MenuFlow → a mesma tela com etiquetas *medido* e a trena). **3D em CSS**, não em arquivo: o celular tem corpo com espessura, gira por passo e inclina com o ponteiro; cartões da prova inclinam ao passar o mouse; 0 KB. Sistema de design documentado em `design-system/MASTER.md` (tokens base + semânticos, elementos, componentes, padrão de página, governança, registro de decisões). Versões anteriores apagadas a pedido: `site/` tem um arquivo principal.

**Mudou da v0.8 para a v0.9:** interatividade no site inteiro, calor na marca e SEO com imagem real (§13-v). O pedido passou a começar **na própria página**: a pessoa cola o link, o WhatsApp abre com tudo escrito. Comparador antes/depois arrastável, procedência em cada número ao passar o ponteiro, cursor de instrumento, nav que acompanha a seção, barra fixa no celular, `og.png` gerada da própria marca, dados estruturados de HowTo e Organization.

**Mudou da v0.7 para a v0.8:** virada para **escuro, com JavaScript e fonte própria liberados** pelo usuário. Entrou o **instrumento ao vivo** (§13-quater), que mede a leitura de quem está lendo. E, por decisão explícita do usuário — *"não diga o que não podemos fazer"* — **saíram todas as listas de limite**: a seção "quando não nos contratar", a aba "o que a gente não faz", o benefício "a gente diz quando não serve" e o contador "0 sites vendidos". Isso **suspende RC-2, RC-3 e o destaque de RC-1**; ver a nota de discordância em §13-quater. Nada passou a ser inventado: a página não afirma cliente nenhum, e a prova continua sendo os dois produtos reais.

**Mudou da v0.6 para a v0.7:** mudança de escopo pedida pelo usuário — **o alvo passou a ser um site web institucional + conversão, desktop-first**, não mais o percurso de celular. O percurso anterior está preservado em `site/percurso-v1.html`. Entraram: navbar fixa com desfoque, herói com carimbo de prancha, dor/solução, prova, serviços em abas sem JavaScript, grade de benefícios com ícones próprios, contadores com número verdadeiro, notas, FAQ em acordeão nativo, CTA final, rodapé e JSON-LD. A paleta virou **prussiano + papel + trena** (§8-bis, BR-7). Registro completo em §13-ter.

**Mudou da v0.5 para a v0.6:** passe de design (§13-bis). O acento deixou de ser o laranja-terracota — default das páginas geradas hoje — e virou **amarelo de trena** (BR-7), que só aparece quando a medição aparece. Entraram o público convergindo no eixo (ato 1), a trena que se desenrola (ato 3), a cota real sob cada captura, o celular vazio dela (ato 5), a placa de medição e a composição de desktop.

**Mudou da v0.4 para a v0.5:** o protótipo foi construído (§13-bis). D-1 fechado no **traço**; X-4 fechado com capturas e medições reais; PR-7 registra o peso medido dos dois produtos e a decisão de não publicá-lo.

**Mudou da v0.3 para a v0.4:** entrou a marca provisória **"Sócios"** (§8-bis) e a tradução honesta de "soluções tecnológicas" para um sistema visual que não reprova no teste da frase roubada. Entrou a **proposta de objeto contínuo** (§8, três candidatos, um recomendado).

**Mudou da v0.2 para a v0.3:** os dois produtos foram conferidos no ar (§4-bis) — a prova (A-4) deixou de ser placeholder e virou material real a capturar e medir. Descoberta que muda o argumento: **Lacuna é a ferramenta que faz o Raio-X**, o que tira A-3 e A-5 do campo da promessa (proposta em X-5). O número de WhatsApp saiu do caminho por decisão do usuário (MP-3).

**Mudou da v0.1 para a v0.2:** o objetivo virou duplo (§1) — a página converte **e** é a peça de portfólio. O movimento virou requisito com regras próprias (§5). Entrou o **modo protótipo** (§10). "Zero JavaScript" virou "conteúdo sem JavaScript" (RD-6).

---

## 0. Regra de derivação

Tudo aqui vem do brief ou de decisão explícita registrada. Onde nada foi decidido, existe entrada em **§12 (Dados que faltam)** ou **§13 (Decisões pendentes)** — nunca uma invenção silenciosa.

Enquanto o **modo protótipo** (§10) estiver ativo, valor inventado é permitido **desde que marcado e listado**. Sem marcação, é violação.

---

## 1. Objetivo — duplo

| | |
|---|---|
| **O-1 · Converter** | A dona do negócio recebe o link no WhatsApp, rola até o fim e manda uma mensagem pedindo o Raio-X — sem que ninguém tenha explicado o que é o Raio-X. |
| **O-2 · Demonstrar** | A própria página é a peça de portfólio. Quem quiser saber se a gente sabe fazer, olha para ela. Nível de execução: página, movimento, ritmo, tipografia e marca impecáveis. |

**Métricas.** O-1: mensagens pedindo o Raio-X. O-2: a página aguenta ser mostrada como amostra de trabalho, sem nota de rodapé, sem "imagina que aqui teria".

### Regra de arbitragem (a mais importante deste documento)

**A demonstração acontece na execução, nunca no discurso.**

O texto continua falando só com a dona da ótica (**P-1**). Ela não lê nada sobre design, motion, performance ou processo criativo. Quem avalia habilidade avalia **olhando**, não lendo.

Quando O-1 e O-2 conflitarem:

- **No conteúdo, O-1 ganha sempre.** Nenhuma frase existe para impressionar. Nenhuma seção existe porque "fica bonito".
- **Na execução, O-2 puxa o nível para cima** — dentro dos limites de §5 e §6, que não se negociam.
- **Beleza nunca custa clareza. Movimento nunca custa a rolagem dela. Nenhum dos dois custa peso.**

### O aperto que é a demonstração

Bonito e pesado é fácil. Bonito e leve é o ofício. A prova de habilidade aqui é fazer uma página que se move maravilhosamente **dentro de um orçamento de bytes que a concorrência não consegue cumprir** — e publicar o número medido no rodapé. É o único jeito de O-2 servir a O-1 em vez de brigar com ele: o movimento vira evidência da promessa, não enfeite em cima dela.

---

## 2. Público

Persona primária, e única com quem o site conversa:

| | |
|---|---|
| **Quem é** | Dona de um negócio local: o bar da avenida, a ótica do centro, a clínica do bairro. Não é uma empresa de tecnologia. |
| **Contexto** | Celular. Provavelmente à noite, depois de fechar. Alguém mandou o link. Em pé, bateria baixa. |
| **Paciência** | Trinta segundos. Nenhuma obrigação de ficar. |
| **O que já tem** | Público — Instagram, seguidores, gente que passa na porta. |
| **O que não tem** | O caminho entre esse público e o caixa. E nenhum jeito de saber quanto perde nesse caminho. |
| **Estado emocional** | Já foi enganada por agência, ou conhece quem foi. Desconfia de promessa, de slide, de palavra difícil. |

**P-1.** O site nunca **fala** com outro estúdio, com júri de design nem com quem já entende de tecnologia.

**P-2.** Existe um público secundário e silencioso — quem julga a habilidade (cliente futuro, parceiro, quem receber o link como amostra). Ele é atendido **só pelo artefato**. Nenhuma linha de texto, nenhum crédito, nenhum "feito com" existe para ele.

---

## 3. O arco — uma história, uma rolagem só

Não é um site de seções. É um percurso.

| # | Trecho | O que ela sente | O que prova | Aceite |
|---|---|---|---|---|
| **A-1** | **Onde estamos.** Um lugar, e um público que já existe. | *Isso é sobre mim.* | Que a gente sabe de onde ela fala. | Ela se reconhece antes de rolar duas vezes. |
| **A-2** | **O que se perde.** O público chega a um link e não encontra nada do outro lado. Ninguém mede. | *Isso é um problema meu de verdade.* | Que existe uma perda que ela não está vendo. | Único momento desconfortável, e o mais curto da página. |
| **A-3** | **A virada.** Alguém mede. Existe método. | *Essa gente sabe o que está fazendo.* | Que há um jeito de trabalhar, não uma promessa. | O método aparece como o que muda no caixa dela, nunca como técnica. |
| **A-4** | **A prova.** Trabalho real, no aparelho real, com o tamanho medido embaixo. | *Isso é real, tem trabalho feito.* | Que existe algo por trás das palavras. | Nada aqui é mock, render ou banco de imagem. |
| **A-5** | **A mão estendida.** O Raio-X: oferta que não pede nada em troca, e que é exatamente o que a gente vende. | *Não custa nada tentar.* | Que o risco dela é zero. | Ela entende o que é o Raio-X sem ninguém explicar. |
| **A-6** | **A conversa.** Trinta minutos, sem slide. | Decisão. | Que ela sabe o que acontece depois de clicar. | O próximo passo está escrito, não subentendido. |

**A-0.** Tudo que não serve a essa sequência é peso, e sai. Vale também para o que é bonito.

---

## 4. Requisitos de conteúdo (RC)

| ID | Requisito | Estado |
|---|---|---|
| **RC-1** | A frase "ainda não vendemos nenhum site" (ou equivalente igualmente direto) está escrita, sem eufemismo. | CONFIRMADO |
| **RC-2** | ~~SUSPENSO em 06/09/2026 a pedido do usuário.~~ Existia uma seção **"quando não nos contratar"**: para quem não serve, o que não entra, quando é melhor procurar outra pessoa. | Formato CONFIRMADO · conteúdo PLACEHOLDER (X-6) |
| **RC-3** | ~~SUSPENSO em 06/09/2026 a pedido do usuário.~~ A promessa passou a aparecer sozinha; o limite saiu da página. | SUSPENSO |
| **RC-4** | Não publica preço — e diz, na própria página, por que não publica. | Formato CONFIRMADO · motivo PLACEHOLDER (X-7) |
| **RC-5** | Está escrito que o domínio fica no nome dela e o código no repositório dela; se quiser sair, leva tudo. | CONFIRMADO |
| **RC-6** | Londrina aparece como fato, não como enfeite. | CONFIRMADO |
| **RC-7** | Somos dois. O tamanho é a promessa: quem atende é quem faz. Sem soar como desculpa. | CONFIRMADO |
| **RC-8** | Todo número tem, ao lado, a **ferramenta** e a **data** da medição. Sem fonte, não vai ao ar. | CONFIRMADO |
| **RC-9** | A prova (A-4) mostra os dois produtos próprios no ar, no aparelho real, com o peso medido. | PLACEHOLDER (X-4) |
| **RC-10** | O Raio-X é explicado dentro do percurso: o que é, o que ela recebe, em quanto tempo, o que precisa dar em troca (nada). | PLACEHOLDER (X-5) |
| **RC-11** | O passo seguinte é literal: trinta minutos, sem slide, e o que acontece na conversa. | Formato CONFIRMADO · canal PLACEHOLDER (X-2) |
| **RC-12** | Nome da empresa e nome dos dois sócios aparecem. | PLACEHOLDER (X-1, X-3) |
| **RC-13** | O peso da própria página aparece no rodapé, medido, com ferramenta e data. É o número que sustenta O-2. | CONFIRMADO |

---

## 4-bis. Material da prova (A-4) — conferido em 06/09/2026

Os dois produtos estão no ar, com preço público e plano pago. Não é protótipo de portfólio: é produto.

### MenuFlow — `menuflow-topaz.vercel.app`

Cardápio digital que faz o pedido cair pronto no WhatsApp do dono, sem marketplace no meio e sem comissão por pedido. Painel de cardápio (categorias, itens, foto, preço editável em todos os canais de uma vez), horário de funcionamento que fecha sozinho, QR code por mesa, e controle de estoque com alerta de mínimo, baixa automática no pedido e registro de perda. Público: hamburgueria, pizzaria, cantina, sushi, açaí, padaria, marmita, bar, food truck. Planos R$ 69,90 / R$ 89,90 / R$ 199,90 por mês (anual). WhatsApp publicado: **+55 43 99110-0299** (DDD de Londrina).

### Lacuna — `lacuna-saas.vercel.app`

Prospecção B2B que acha empresa com defasagem técnica: analisa o site de cada uma e detecta o buraco — WordPress velho, sem SSL, sem pixel de analytics, sem WhatsApp — com um "score de defasagem", e escreve a mensagem de abordagem em cima da evidência. Sinal que não dá para confirmar aparece como **"não verificado"** em vez de inflar a lista. Exporta para HubSpot, Pipedrive, Notion, CSV ou WhatsApp. Frase da home: *"Todo mundo vende a mesma lista do Google Maps. Nós vendemos o motivo."* Grátis / R$ 119 / R$ 359 por mês. © 2026 Lacuna.

### O que isso muda no argumento da página

| | |
|---|---|
| **PR-1** | **Lacuna é produto. O Raio-X é campanha.** *(Corrigido pelo usuário em 06/09/2026 — a v0.3 tinha juntado os dois indevidamente.)* Lacuna é um dos dois produtos que a gente vende, e entra na página só como **prova** (A-4). O Raio-X é a **ação da campanha**: a oferta gratuita que a landing faz. São coisas separadas, e a página não pode sugerir que a pessoa está comprando o Lacuna. Como o Raio-X é produzido por dentro é assunto nosso, não da página. |
| **PR-7** | **Medição de 06/09/2026 (Chrome DevTools, celular 390 × 844, rede real):** MenuFlow transferiu **272 KB** em 20 requisições; Lacuna, **311 KB** em 15. A landing do estúdio ficou em **57 KB**. **Decisão consciente: esses dois números não vão para a página.** Publicá-los enfraqueceria o próprio argumento, e escondê-los sem registrar seria a desonestidade que o brief proíbe — então ficam aqui. O que a página publica é o peso dela mesma (RC-13) e a procedência das capturas (aparelho + data). |
| **PR-6** | **Cuidado de enquadramento:** o cliente do Lacuna é quem *vende* serviço digital para PME — ou seja, gente como a gente. A dona da ótica não é compradora do Lacuna; ela seria um nome numa lista. Em A-4 o Lacuna aparece como trabalho feito, nunca como algo oferecido a ela. |
| **PR-2** | **A honestidade já está no produto, não só no discurso.** O "não verificado" do Lacuna é a regra RC-8 rodando em código. É a prova mais forte disponível de que "nada inventado" não é papo de site. |
| **PR-3** | **MenuFlow prova o público-alvo.** Bar, pizzaria, açaí, food truck — é literalmente a persona do §2, já sendo atendida. |
| **PR-4** | **Os dois produtos cobram preço público** — e a página do estúdio não publica preço (RC-4). O motivo escrito em X-7 tem que explicar essa diferença, senão soa contraditório para quem clicar nos dois. |
| **PR-5** | O repositório do MenuFlow é **privado** (404 sem login). Não serve como prova pública de RC-5 ("o código é dela"). RC-5 continua sendo promessa escrita, não link. |

---

## 5. Comportamento e movimento (RB)

O movimento é requisito, não enfeite. E tem regras que não se negociam.

### O que o movimento é

| ID | Requisito |
|---|---|
| **RB-1** | **A rolagem é sempre dela.** Todo movimento é **dirigido pela posição da rolagem**, 1:1 com o dedo. Parou o dedo, parou o movimento. Voltou o dedo, o movimento desfaz exatamente. |
| **RB-2** | **Proibido:** captura de rolagem (scroll-jacking), snap obrigatório, inércia própria, avanço automático, atraso entre o dedo e a tela, qualquer trecho que segure a pessoa até a animação "terminar". |
| **RB-3** | **Contínuo, não infinito.** "Scroll infinito" aqui quer dizer *ininterrupto*: uma peça só, sem quebra brusca entre trechos, sem sensação de página nova começando. A página **termina** — num pedido de mensagem. Carregamento infinito de conteúdo é o oposto do objetivo. |
| **RB-4** | O movimento é **um só sistema**, ligado ao objeto contínuo (§8). Não é um catálogo de efeitos diferentes por seção. |
| **RB-5** | Cada transformação **significa** algo que o texto ao lado também diz (OC-2). Efeito que não diz nada sai, por mais bonito que seja. |

### O que o movimento nunca faz

| ID | Requisito |
|---|---|
| **RB-6** | A página é **lida e entendida só rolando**. Nada essencial atrás de clique, hover, abrir/fechar ou etapa. |
| **RB-7** | **Boa parada antes de boa em movimento.** Congelada num screenshot longo, a história continua inteira e na mesma ordem. |
| **RB-8** | Com movimento desligado — `prefers-reduced-motion`, navegador sem suporte, rastreador do Google, tela curta: **mesmo texto, mesma ordem, mesmo entendimento.** O fallback é uma versão estática digna, não uma versão quebrada. |
| **RB-9** | Nada aparece "só ao rolar" de um jeito que fique invisível sem o motor de animação. Nenhum texto nasce com opacidade zero sem garantia de fallback. |
| **RB-10** | Nada pisca, nada grita, nada empurra. Sem popup, sem contador, sem barra de urgência, sem captura antes de entregar valor. |
| **RB-11** | Uma ideia por tela. Nunca duas mensagens competindo pelo mesmo momento. |

### Qualidade do movimento (é aqui que O-2 se decide)

| ID | Requisito |
|---|---|
| **RB-12** | 60 fps no celular alvo (RD-3). Sem engasgo, sem tremor de texto, sem repintura visível. |
| **RB-13** | Só se anima o que é barato: `transform` e `opacity`. Nada que force recálculo de layout durante a rolagem. |
| **RB-14** | Zero vídeo, zero GIF, zero biblioteca de animação, zero Lottie. O movimento sai de CSS, SVG e geometria — não de arquivo pesado. Essa restrição **é** a demonstração. |
| **RB-15** | O movimento não desalinha nada: zero deslocamento de layout inesperado durante a rolagem. |

---

## 6. Desempenho e leitura (RD)

A página vende leveza, medição e honestidade. Ela tem que **ter** isso, não dizer.

| ID | Requisito |
|---|---|
| **RD-1** | O peso total é **medido e publicado na própria página**, com ferramenta e data — RC-8 aplicado a nós mesmos. |
| **RD-2** | Orçamento de peso e de tempo: **PENDENTE (D-3).** Nenhum número vai ao ar antes de ser medido de verdade. |
| **RD-3** | Alvo: celular de entrada, rede móvel comum, tela ao ar livre, bateria baixa. Não é desktop com fibra. |
| **RD-4** | Legível sem esforço nessas condições: contraste e corpo de texto aguentam sol e cansaço. |
| **RD-5** | Nenhuma dependência externa que possa cair, atrasar ou vazar a visitante para terceiro. Fonte de sistema, ou fonte servida por nós dentro do orçamento. |
| **RD-6** | **O conteúdo funciona sem JavaScript.** Todo o texto, a ordem e o contato existem no HTML servido. Se houver JS, ele é enhancement do movimento: pequeno, sem framework, sem bloquear a renderização, e a página fica íntegra se ele falhar. |
| **RD-7** | Uma requisição de documento, CSS embutido. Nada de cascata de arquivos para começar a ler. |

---

## 7. Regras de linguagem (RL) — todas testáveis

| ID | Regra | Como se testa |
|---|---|---|
| **RL-1** | Número no lugar de adjetivo. Nunca "rápido"; sempre quanto. | Procurar adjetivo de desempenho sem número ao lado. |
| **RL-2** | O negócio dela no lugar da nossa técnica. Nunca "otimizamos a conversão"; sempre o que muda no caixa. | Cada afirmação técnica tem tradução para dinheiro ou tempo dela. |
| **RL-3** | Frase curta. Uma ideia por frase. | Vai ser lida em pé, num celular. |
| **RL-4** | "A gente", não "a empresa". Dois sócios falando, não uma marca. | Varrer terceira pessoa institucional. |
| **RL-5** | **Teste da frase roubada:** "isso caberia igual no site de um concorrente?" Se caberia, reescreve. | Frase a frase. |
| **RL-6** | **Teste da ótica:** nenhum termo que a dona da ótica não usaria. | Varrer jargão. |
| **RL-7** | Nunca inventar fora do modo protótipo. Sem o número, não se escreve o número. | §10 e §12. |
| **RL-8** | **Nenhuma palavra sobre o próprio design.** Não se escreve "animação", "experiência imersiva", "scroll", "motion", "pixel". A página mostra; não se elogia. | Varrer vocabulário de designer. |

---

## 8. O objeto contínuo (OC)

O percurso é sustentado por **uma coisa só**, que acompanha a pessoa e se transforma conforme ela avança. É o veículo do movimento (§5) e o principal responsável por O-2.

| ID | Regra |
|---|---|
| **OC-1** | É **um** objeto, do começo ao fim. Se precisar ser cortado, trocado ou recomeçado em algum ponto, a ideia está errada e se refaz. |
| **OC-2** | Cada transformação **significa** algo que o texto ao lado também diz. |
| **OC-3** | É presente, não estrutura: sem ele (RB-7, RB-8) a história continua completa. |
| **OC-4** | Um objeto no centro, o resto em silêncio. Uma coisa por vez, grande, com espaço em volta. |
| **OC-5** | **Critérios de escolha (D-1):** aguenta os seis estados de A-1 a A-6 sem corte · cabe no orçamento de bytes (RB-14: é geometria, não arquivo) · cada estado seu tem um significado nomeável em uma frase · funciona parado. |
| **OC-6** | Precedente registrado: numa versão anterior o objeto foi **um celular desenhado como instrumento de medição**, régua de 390 × 844, trocando de tela por `view-timeline`. Funcionou. |

### Proposta para D-1 — três candidatos

#### Candidato 1 · **O traço** — recomendado

Um único traço contínuo, desenhado do primeiro pixel ao último, que é ao mesmo tempo o caminho, o vão, a régua, o aparelho e a mensagem.

| Ato | O que o traço faz | O que isso diz |
|---|---|---|
| **A-1** | Pontos espalhados — o público que ela já tem — descem e se juntam num traço só. | "Já tem gente chegando até você." |
| **A-2** | O traço **abre**: um vão no meio, e nada do outro lado. Nenhum número em volta dele. | "Do outro lado do link não tem nada. E ninguém está contando." |
| **A-3** | Marcas de medida nascem ao longo do vão: o traço vira régua e **mede** o vão. | "Alguém mede. Existe método para isso." |
| **A-4** | O trecho medido se fecha e vira o contorno de um celular — dentro, as capturas reais de MenuFlow e Lacuna. | "Tem trabalho feito. E ele tem tamanho." |
| **A-5** | O contorno se abre de novo e a régua aponta para o vão **dela**: o Raio-X. | "A mesma régua, virada para o seu negócio." |
| **A-6** | O traço termina em um balão de mensagem. | "Acaba aqui." |

**Por que:** é a história da empresa e o nome do produto no mesmo desenho — *lacuna* é vão. É geometria pura, custa quase zero byte (RB-14). Cada estado tem nome em uma frase (OC-5). Parado, vira um diagrama legível (RB-7). E nunca é cortado: é o mesmo traço do começo ao fim (OC-1).

**Risco:** abstrato demais, se mal desenhado — cai em OC-2 ("bonito que não diz nada"). **Mitigação:** o vão nunca aparece sozinho, sempre ao lado da frase que o nomeia; e A-4 aterrissa num aparelho concreto, com trabalho real dentro.

#### Candidato 2 · **O celular-régua** — seguro

O precedente do OC-6: um celular desenhado como instrumento, régua de 390 × 844, trocando de tela ato a ato. **Por que:** já foi construído e funcionou; A-4 é nativo. **Risco:** celular com print dentro é o que todo concorrente faz — o que salva é o enquadramento de instrumento, e isso é sutil demais para carregar O-2 sozinho.

#### Candidato 3 · **A contagem** — mais direto, menos alcance

Um número grande que conta quem chega, e ao lado o espaço vazio onde deveria estar quanto virou dinheiro. **Por que:** o mais imediato de todos em A-2. **Risco:** não estica para seis atos sem virar outra coisa — quebra OC-1.

**Recomendação:** Candidato 1. Ele absorve o 2 dentro do ato A-4, em vez de escolher entre os dois.

---

## 8-bis. Marca provisória — "Sócios"

**Decisão de 06/09/2026 (D-7, provisória):** nome da marca e da empresa = **Sócios**. Fica em um bloco de tokens só, trocável num lugar (MP-4).

### O aviso que vem junto

O pedido foi "branding sobre soluções tecnológicas". **A expressão "soluções tecnológicas" não pode ser escrita na página:** é a frase mais genérica do setor, reprova em RL-5 (caberia igual no site de qualquer concorrente) e em RL-6 (a dona da ótica não fala assim). O que ela descreve é verdade sobre a empresa — então entra pela execução, não pelo texto. Mesma regra de arbitragem do §1.

E o nome "Sócios" não fala de tecnologia: fala de relação. Isso não é defeito enquanto for provisório — é divisão de trabalho:

| Camada | O que carrega |
|---|---|
| **O nome** | A promessa do §4 do brief: quem atende é quem faz. Dois, com nome e rosto. |
| **O sistema visual** | A tecnologia. Inteira. É aqui que "soluções tecnológicas" existe. |
| **O texto** | O negócio dela. Só. |

### Como a tecnologia aparece (BR)

| ID | Regra |
|---|---|
| **BR-1** | A identidade é de **instrumento de medição**, não de "empresa de tecnologia". Régua, marca de medida, grade visível, eixo, cota. O que a marca acredita (§4 do brief: *medir, não só entregar*) é o que a marca parece. |
| **BR-2** | **Número é elemento de marca.** Todo número usa numeral tabular/monoespaçado e alinha na coluna. Medida vem sempre com unidade e fonte ao lado (RC-8). É a assinatura visual mais forte que a empresa tem. |
| **BR-3** | Precisão como estética: alinhamento, ritmo e espaço fazem o trabalho que o enfeite faria. Nada centralizado por preguiça, nada em cima de nada. |
| **BR-4** | **Lista de banimento visual** — o equivalente de RL-5 para imagem. Nenhum destes entra: gradiente roxo/azul de SaaS, circuito impresso, nó de rede, globo, foguete, engrenagem, cérebro, brilho de "IA", ilustração isométrica, blob orgânico, ícone de nuvem, foto de banco com gente apontando para tela. Se um concorrente poderia usar, está proibido. |
| **BR-5** | **Tipografia:** fonte de sistema, zero byte baixado (RD-5) — a decisão tipográfica **é** a demonstração de leveza. Se algum dia entrar fonte servida, entra dentro do orçamento (D-3) e com o peso publicado. |
| **BR-6** | **Marca gráfica:** desenhável em traço, legível em 16 px, funciona em uma cor, e sai da mesma geometria do objeto contínuo (§8) — a marca é um recorte do traço, não um desenho à parte. Como ficou: um pedaço de trena de 10 × 16 px ao lado do nome. |
| **BR-7** | **Cor (v0.7): três, e só três.** `#0C1C2A` **prussiano** — o papel ferroprussiato da prancha técnica, chão de tudo que a empresa afirma (herói, quem somos, CTA, rodapé). `#F2F1EC` **papel** — a superfície onde ela lê. `#E8B62C` **trena** — o único saturado. Prussiano vem do cianótipo, o material real de "combinar antes de construir"; ele carrega autoridade de engenharia sem ser o azul-de-confiança que todo concorrente usa, porque é chão desaturado e não acento vivo. Contrastes medidos: grafite/papel 16,3:1 · cal/prussiano 11,6:1 · trena/prussiano 9,3:1 · grafite/trena 9,8:1 — todos AAA. A regra do acento continua a da v0.6: o **amarelo de trena** (`#EDB92A` no claro, `#F6C845` no escuro): a cor da fita métrica, com as marcas em preto. Ele só aparece onde algo está sendo medido — a trena do ato 3, a trena ao lado do celular dela no ato 5, o botão e a placa. **Atos 1 e 2 são preto no papel: a cor entra quando a medição entra.** Preto no amarelo aguenta sol (RD-4). Proibidos por escrito: laranja-terracota (default de página gerada), azul/teal de "confiança", gradiente roxo de SaaS, glassmorphism colorido. |
| **BR-8** | **Nada de crédito, selo, "feito com" ou assinatura de estúdio na página.** P-2: quem julga habilidade julga olhando. |

### Aceite

A marca passa se, olhando a página sem ler uma linha, a pessoa concluir **"isso foi feito por gente que mede"** — e se nenhum elemento dela pudesse ser trocado com o de um concorrente sem que alguém notasse.

---

## 9. Não-objetivos

- **Não** fala com designer, estúdio ou júri (P-1, P-2, RL-8).
- **Não** informa sobre performance web nem educa em tecnologia.
- **Não** é scroll infinito literal: a página acaba, e acaba num pedido de mensagem (RB-3).
- **Não** usa vídeo, GIF, Lottie ou biblioteca de animação (RB-14).
- **Não** usa imagem que não seja de trabalho real, quando houver trabalho real para mostrar.
- **Não** publica número, depoimento, cliente ou caso que não tenha acontecido — fora do modo protótipo marcado.
- **Não** publica preço.
- **Não** se veste de empresa grande.
- **Não** tem seção, texto ou efeito que não sirva à sequência do §3.

---

## 10. Modo protótipo (MP)

Estamos construindo um protótipo. Não existe marca, nem contato, nem material fechado. Dado inventado é permitido **sob contrato**:

| ID | Regra |
|---|---|
| **MP-1** | Todo valor inventado é **marcado no código** (`data-placeholder="x-2"` e/ou comentário `<!-- PLACEHOLDER x-2 -->`) e **listado em §12**. Placeholder não marcado é violação de G-1. |
| **MP-2** | Enquanto houver um placeholder vivo, **o portão G-1 está reprovado** e a página não vai ao ar. Protótipo circula entre nós dois; não circula como site publicado. |
| **MP-3** | **Contato:** número fictício autorizado (`123`) — decisão do usuário em 06/09/2026: "não se importe com isso, não vai ao ar ainda". O link `wa.me` é montado de verdade, com a mensagem pré-preenchida real; só o número é falso, e o fluxo tem que ser testável de ponta a ponta. Quando for ao ar, o candidato natural já existe: **+55 43 99110-0299**, publicado no MenuFlow. |
| **MP-4** | **Marca provisória:** nome, voz e marca gráfica provisórios são permitidos e **necessários** — sem eles O-2 não pode ser julgado. Ficam concentrados num único bloco de tokens/variáveis, trocáveis num lugar só, sem mexer no resto. |
| **MP-5** | **Números:** ou é medido de verdade, ou é obviamente falso e marcado. Proibido número plausível e inventado — é o hábito exato que o brief combate. O peso da própria página (RC-13) é medível hoje: esse é real desde o primeiro dia. |
| **MP-6** | **Imagens da prova (A-4):** os dois produtos estão no ar (§4-bis), então **não há placeholder aqui** — as capturas se tiram do site real e as medições se rodam contra ele. Enquanto não forem tiradas, o quadro da prova fica marcado; mas é trabalho pendente, não dado faltante. |
| **MP-7** | **Saída do modo protótipo** = §12 zerado. É uma lista fechada, não um julgamento. |

---

## 11. Portões de aceite

| Portão | Critério | Reprova se |
|---|---|---|
| **G-1 · Verdade** | Nada inventado sem marca. | Número sem ferramenta e data; imagem que não é trabalho real apresentada como se fosse; placeholder não marcado. *Reprovado por definição enquanto §12 tiver item (MP-2).* |
| **G-2 · Parada** | Com movimento desligado, a história é a mesma. | Algum trecho só faz sentido animado; a ordem muda; texto some. |
| **G-3 · Polegar** | A rolagem é dela. | Qualquer captura, trava, atraso, snap ou avanço automático. Testado em celular real, no dedo. |
| **G-4 · Peso** | A página é a prova viva do que vende. | Orçamento (D-3) estourado; peso não publicado com fonte; ilegível em celular ao ar livre. |
| **G-5 · Frase** | Nenhuma palavra genérica, técnica ou autoelogiosa. | Frase que caberia no site do concorrente (RL-5); termo que a dona da ótica não usaria (RL-6); promessa sem limite ao lado (RC-3); qualquer palavra sobre o próprio design (RL-8). |
| **G-6 · Ofício** | A página aguenta ser mostrada como amostra de trabalho. | Movimento abaixo de 60 fps no celular alvo; deslocamento de layout na rolagem; um efeito que não significa nada (RB-5); alinhamento, ritmo ou tipografia que a gente não defenderia numa mesa. |

**Teste dos trinta segundos** (transversal): nos primeiros trinta segundos em celular, ela sabe o que a gente faz, para quem, e que existe um problema dela ali.

**Teste da amostra** (transversal, para O-2): dá para mandar o link como exemplo do nosso trabalho sem escrever nenhuma explicação junto.

---

## 12. Dados que faltam — travam a publicação, não o protótipo

| ID | O que falta | Estado em 06/09/2026 | Trava |
|---|---|---|---|
| **X-1** | Nome da empresa. | **RESOLVIDO NO PROTÓTIPO:** "Sócios" (§8-bis), provisório e marcado. Continua faltando o nome definitivo. | Só a publicação |
| **X-2** | WhatsApp / canal de contato. | **FORA DO CAMINHO** por decisão do usuário. `123` no protótipo; +55 43 99110-0299 quando for ao ar. | Só a publicação |
| **X-3** | Nome dos dois sócios. | **ABERTO.** Um deles provavelmente é o dono do GitHub `murilopoltroniere` (conta de 16/08/2026, sem nome no perfil) — não confirmado. | RC-7, RC-12 |
| **X-4** | Capturas de MenuFlow e Lacuna + medições com ferramenta e data. | **FEITO em 06/09/2026.** Capturas reais em 390 × 844 no ar, medições em PR-7. Já estão na página. | — |
| **X-5** | Escopo do Raio-X — a ação da campanha (PR-1). O que ela recebe, em quanto tempo, o que dá em troca (nada). | **ABERTO, e agora é o único item que trava o desenho.** É o ato A-5: o final do percurso depende do que ela ganha ali. Rascunho meu abaixo, para vocês cortarem. | A-5, RC-10 |

### Rascunho de X-5 — proposta, ainda não aprovada

O Raio-X é a **ação gratuita da campanha**: a gente olha o que a pessoa já tem no ar e devolve, por escrito, o que está se perdendo entre o público dela e o caixa.

| | Proposta |
|---|---|
| **O que ela dá** | O link do Instagram ou do site. Nada mais. Sem cadastro, sem e-mail, sem reunião antes. |
| **O que ela recebe** | Uma página, em português, com o que está quebrado, quanto custa cada coisa em cliente perdido, e o que dá para resolver sem contratar ninguém. |
| **Em quanto tempo** | **[PENDENTE — vocês definem]** Um prazo que a gente cumpra sempre, não o menor possível. |
| **Quantos por semana** | **[PENDENTE — vocês definem]** Um limite declarado é mais crível que "ilimitado", e protege vocês dois de afogar. |
| **O que não é** | Não é proposta comercial, não é orçamento, não é reunião de vendas. Se não tiver nada quebrado, a resposta é "está bom, não mexe" — e isso é dito na página, antes de ela pedir. |
| **X-6** | Conteúdo do "quando não nos contratar". | **ABERTO.** Eu rascunho, vocês cortam. | RC-2 |
| **X-7** | Motivo escrito de não publicar preço — e por que MenuFlow e Lacuna publicam (PR-4). | **ABERTO.** Eu rascunho, vocês cortam. | RC-4 |

---

## 13. Decisões pendentes

| ID | Decisão | Nota |
|---|---|---|
| **D-1** | Qual é o objeto contínuo (OC-5). | **FECHADO em 06/09/2026: o traço.** Construído e verificado (§13-bis). Os outros dois candidatos ficam no §8 como registro. |
| **D-2** | Foto dos sócios é exceção à regra "nenhuma imagem que não seja de trabalho real"? | O brief pede nome e rosto e proíbe imagem que não seja trabalho. Foto real de vocês não é banco de imagem — mas a regra é de vocês. |
| **D-3** | Orçamento de peso e de tempo (RD-2). | Vira número público só depois de medido. Precedente da versão anterior: 70 KB no total, LCP 1,37 s (Lighthouse 13.4.1, 4G simulado, 06/09/2026). |
| **D-4** | Como a mensagem chega e o que ela vê logo depois de mandar. | RB-6 exige que o que acontece depois esteja escrito. |
| **D-5** | Domínio e hospedagem. | Toca RD-5 e RC-5. |
| **D-6** | Motor do movimento: CSS scroll-driven (`animation-timeline`/`view-timeline`) puro, ou CSS + JS mínimo de fallback. | Armadilhas já confirmadas nesta máquina: Firefox estável não tem scroll-driven animations e cai no fallback; `@supports (animation-timeline: view())` sozinho não basta, testar junto com `(animation-range: entry)`; `overflow-x: hidden` no `html` mata o sticky — usar `clip`. |
| **D-7** | Nome, voz e marca provisórios do protótipo (MP-4). | **RESOLVIDO em 06/09/2026:** "Sócios", com o sistema visual definido em §8-bis. Identidade anterior ("PARALELO") continua descartada. |
| **D-8** | Capturas e medições de MenuFlow e Lacuna (X-4). | **FEITO.** Ver §13-bis e PR-7. Refazer sempre que os produtos mudarem de cara. |
| **D-9** | **FECHADO em 06/09/2026:** o Raio-X **não** é o Lacuna. Lacuna é produto (prova, A-4); Raio-X é a ação da campanha (oferta, A-5). | O que continua aberto é o **escopo** do Raio-X — virou X-5. |
| **D-10** | Como conciliar "não publicamos preço" com dois produtos de preço público (PR-4). | Quem clicar nos dois vai ver a diferença. Ou o motivo em X-7 explica, ou vira a primeira contradição visível do site. |

---

## 13-bis. Estado do protótipo — 06/09/2026

Construído em `site/index.html`. Um arquivo, CSS embutido, **zero JavaScript**, fontes do sistema.

| Medida | Valor | Como |
|---|---|---|
| Peso total | **58,4 KB** (8,0 KB de HTML gzip + 49,9 KB das duas capturas) | Chrome DevTools, 390 × 844, 06/09/2026 |
| Requisições | **3** | idem |
| Altura do percurso | 8 389 px no celular · 7 757 px em 1440 × 900 | idem |

**O traço, como ficou.** Um eixo de 2px que atravessa os seis atos. As chamadas saem dele em direção ao texto; a régua nasce marca por marca no ato 3; no ato 2 o eixo é **interrompido** e uma cota com setas mede o vão, com um "?" no lugar do número. O eixo termina em um balão de mensagem no ato 6. Cada marca é `transform` ou `opacity` — nada que force recálculo de layout (RB-13).

**O vão é aberto pelo próprio texto:** o bloco do ato 2 é puxado para a esquerda até cobrir o eixo e pintado com a cor do papel. Assim o buraco nasce do conteúdo e nunca desalinha, em nenhuma largura.

**Estado sem movimento** (verificado em `prefers-reduced-motion: reduce`, e por construção em navegador sem suporte ou tela abaixo de 520 px): todo elemento animado tem como padrão o **estado final**. Nada nasce invisível. Conferido também em modo escuro.

**Passe de design (06/09/2026, skill `frontend-design`).** O que entrou, e o que cada coisa diz:

| Elemento | O que diz | Custo |
|---|---|---|
| Nove pontos no topo que descem e somem no eixo nos primeiros 70 vh de rolagem | "o público já existe, e vira o caminho" | 0 B: nove `<i>` e um keyframe |
| Trena amarela de 12 px que se desenrola sobre o eixo no ato 3 | "a gente conta" — a cor chega com a medição | 0 B: `repeating-linear-gradient` |
| Cota de verdade sob cada captura: `390 px` | o único número ali é o tamanho real | 0 B |
| Celular vazio tracejado com a trena ao lado, no ato 5 | "a mesma trena, virada para você" | 0 B |
| Placa de medição na coda: peso, requisições, JavaScript 0 B, fontes 0 B, ferramenta, aparelho, data | a página cobrando de si mesma o que cobra dos outros | 0 B |
| Botão amarelo com contorno preto | o próximo passo é a medida | 0 B |
| Desktop: eixo em `max(64px, 50vw − 33rem)`, coluna de 34rem, capturas lado a lado a partir de 1100 px | composição, não coluna esticada | 0 B |
| Marca: pedaço de trena + "Sócios" | BR-6 | 0 B |

O passe inteiro custou **1,0 KB de HTML gzip**. Modo escuro e movimento reduzido conferidos de novo depois do passe.

**Verificado:** G-2 (parada), G-3 (nenhuma captura de rolagem — todo movimento é preso à posição), G-6 parcial. **Reprovado por definição:** G-1, enquanto o §12 tiver item.

---

## 13-ter. O site web — 06/09/2026

`site/index.html`. Um arquivo, CSS embutido, **zero JavaScript**, **zero fonte baixada**.

| Medida | Valor | Como |
|---|---|---|
| Peso total | **63,2 KB** (13,3 KB de HTML gzip + 49,9 KB das duas capturas) | Chrome DevTools, 06/09/2026 |
| Requisições | **3** | idem |
| JavaScript | **0 B** | idem |
| Altura | 8 460 px em 1440 × 900 · 12 044 px em 390 × 844 | idem |

**A ideia:** a página é feita do material da prancheta técnica. Papel ferroprussiato onde a empresa afirma, papel de leitura onde ela lê, e a trena como único saturado. O elemento de assinatura é o **carimbo da prancha** no herói — todo desenho técnico tem um, nenhuma landing usa, e o desta carrega o número medido da própria página acima da dobra. A prova aparece antes de qualquer promessa ser cobrada.

**O que foi construído sem uma linha de JavaScript:** as abas de serviços (rádios + seletor de irmão), o acordeão de FAQ (`<details>` com transição em `::details-content`), os contadores que sobem com a rolagem (`@property --n` + `counter()`), a navbar com desfoque, e todas as revelações.

**A decisão mais brava da página:** o terceiro contador diz **0 sites vendidos até hoje**, em branco, do mesmo tamanho dos outros. E a terceira vaga da prova é um cartão tracejado que diz que o primeiro depoimento ainda não existe e que a vaga fica vazia até existir. As duas coisas são a constituição virando design em vez de texto.

**O que foi recusado do pedido, e por quê:**

| Pedido | O que foi feito | Motivo |
|---|---|---|
| Depoimentos / prova social | Dois produtos reais + a vaga vazia declarada | Não há cliente. Depoimento inventado é o que o brief mais proíbe. |
| Contadores de conquistas | Contadores com número verdadeiro, incluindo o zero | Contador de conquista fabricada é número inventado com animação. |
| Selos, certificados, badges | Nenhum | Não existem. |
| Tailwind pelo CDN | CSS escrito à mão | O CDN do Tailwind custa mais de 100 KB de JavaScript e falsificaria a única afirmação que sustenta a página. Com build, caberia; sem, não. |
| Glassmorphism | Desfoque na navbar, sem o cartão de vidro colorido | O desfoque tem função (separar a barra do conteúdo). O cartão de vidro é BR-4. |
| Blog integrado | Três notas marcadas como rascunho, declaradas como não publicadas | Post fabricado é conteúdo inventado. |
| Paleta teal + azul de confiança | Prussiano + papel + trena | Reprova em RL-5: todo concorrente usaria. |

**Modo escuro:** a página **comete-se a um único aspecto** e não tem variante escura. O prussiano e o papel já alternam ao longo do percurso; uma terceira leitura enfraqueceria a alternância. Todas as cores são pintadas explicitamente, então nada herda tema do navegador.

**Verificado:** contraste AAA em todos os pares · foco visível em tudo que é operável · alvos de toque ≥ 44 px · `prefers-reduced-motion` (a página fica idêntica, nada nasce invisível) · 390 × 844 e 1440 × 900 · âncoras com desvio para não sumir sob a navbar. **Reprovado por definição:** G-1, enquanto o §12 tiver item.

---

## 13-quater. O site escuro com instrumento — 06/09/2026

`site/index.html`. Um arquivo, CSS embutido, **um script próprio de 5 KB, sem nenhuma biblioteca**, duas fontes servidas por nós.

| Medida | Valor | Como |
|---|---|---|
| Peso total | **130 KB** | medido pelo próprio navegador de quem lê |
| Requisições | 5 | idem |
| JavaScript | ~5 KB, escrito à mão | idem |
| Fontes | Archivo 34 KB + JetBrains Mono 31 KB, latim, servidas por nós | — |
| Altura | 9 607 px em 1440 × 900 · 13 273 px em 390 × 844 | — |

**A assinatura: o instrumento ao vivo.** Um trilho fixo à direita, desenhado como fita métrica, marca a leitura em tempo real. E a seção **"Enquanto você lia, a gente mediu"** devolve três números que não existiam antes de a pessoa abrir a página: quantos metros ela rolou (convertido a 96 pontos por polegada), há quanto tempo a aba está aberta (o relógio para quando ela troca de aba) e quantas vezes ela parou para ler. Nada disso sai do aparelho dela. É o argumento inteiro do estúdio em miniatura, sentido em vez de lido — e emenda direto no CTA: *"quero esses números na minha página"*.

**O peso publicado converge.** Um `PerformanceObserver` continua somando enquanto as imagens chegam, para o número não congelar num valor parcial. Sem isso a página mostrava 103 KB no celular e 130 no desktop — o mesmo tipo de número meia-boca que a empresa critica.

**Paleta escura:** void `#07090C`, surface `#0E1218`, card `#141922`, linha `#202733`, texto `#F2F4F7`, dim `#98A2B3`, trena `#F5C63D`, céu `#7FB2D9`. Contraste sobre o fundo: texto 17,8:1 · dim 7,5:1 · trena 12,1:1 — tudo AAA.

**Sem biblioteca de animação, mesmo com permissão para usar.** GSAP custaria 70 KB para fazer o que 5 KB de código próprio fazem aqui: quebra de título em palavras, revelação por `IntersectionObserver`, contadores, holofote no cartão, ímã no botão, a grade viva em canvas e o instrumento. Importar biblioteca não demonstra habilidade; escrever demonstra. As abas e o acordeão continuam CSS puro e funcionam com o script desligado.

### Nota de discordância registrada

O usuário pediu para **não dizer o que a empresa não faz**, e foi atendido. O registro fica porque a decisão tem custo: os limites eram a única parte da página que um concorrente não conseguiria copiar sem admitir os próprios números. O que sobrou de diferenciação verdadeira é o instrumento ao vivo e os dois produtos abertos. **Nada virou mentira** — a página não afirma cliente, depoimento nem número inventado; ela apenas parou de liderar pelo que falta. Reverter é barato: as seções estão em `institucional-v2-claro.html`.

**Versões preservadas:** `percurso-v1.html` (rolagem única, celular, claro) · `institucional-v2-claro.html` (institucional claro, com os limites).

---

## 13-v. Interatividade e calor — 06/09/2026

`site/index.html`. **134 KB**, 5 requisições, ~7 KB de JavaScript próprio, sem biblioteca. Versão anterior preservada em `escuro-v3.html`.

**O que faz a pessoa pedir na hora.** Um campo de link no herói, no fecho e numa barra fixa que sobe no celular depois do herói. Ela cola `@negocio` ou `negocio.com.br`; a página reconhece se é Instagram ou site, mostra *"pronto para enviar"* e reescreve **todos** os botões de WhatsApp com a mensagem já contendo o link dela. Nada é enviado a lugar nenhum — o texto só vai para o `wa.me`. Verificado por teste automatizado: `@boxbeer` → `instagram.com/boxbeer`; `www.oticapatricia.com.br/` → Site; os três campos ficam sincronizados.

**O comparador.** Na seção do problema, duas páginas esquemáticas, uma sobre a outra, e uma linha que a pessoa arrasta (é um `<input type="range">`, então funciona no teclado). À esquerda, *"sua página hoje"* com etiquetas `chegaram ?`, `ficaram ?`, `chamaram ?`. À direita, *"com a gente"* com as mesmas etiquetas marcadas **medido**. **Nenhum número inventado:** a legenda diz por escrito que as etiquetas mostram *o que passa a ser medido, não um resultado*. Ao entrar na tela, a linha dá um balanço curto e para — depois é dela.

**Procedência.** Todo número do site tem `data-src` e mostra, ao passar o ponteiro ou ao focar pelo teclado, de onde veio e quando. É o benefício "todo número com fonte e data" virando interação.

**Calor.** O escuro deixou de ser azulado e virou madeira: `#0B0A09`, brilhos âmbar, cantos de 16–24 px. A trena continua sendo a única cor viva. Contrastes: texto 17,3:1 · dim 7,6:1 · trena 12:1.

**Também:** cursor de instrumento (cruzeta que abre sobre o que é clicável, só em ponteiro fino, sem esconder o nativo), herói com profundidade ao mover o ponteiro, ícones que inclinam ao passar, nav que marca a seção atual.

**SEO.** `og.png` 1200 × 630 gerada da própria marca (fonte em `og-src.html`), `HowTo` para os três passos, `sameAs` apontando para os dois produtos, `geo.region`, título e descrição reescritos com a ação ("cole seu link"). Não há telefone nem endereço no JSON-LD porque ainda não são reais.

**O que foi pedido e não entrou:** comparação com a mediana de peso da web — o HTTP Archive não devolveu o número numa forma citável, e número sem fonte não entra.

---

## 14. Rastreabilidade

| Origem | Vira |
|---|---|
| Brief §1 O que somos | RC-1, §9 |
| Brief §2 Para quem fala | §2, P-1 |
| Brief §3 O único trabalho | O-1, A-0 |
| Brief §4 No que acredita | RC-3 a RC-8, RL-7 |
| Brief §5 A sensação | §3, RB-1, RB-10, RD-4 |
| Brief §6 A ideia do site | §3, §8, RB-3, RB-7, RB-8 |
| Brief §7 Tom de voz | §7 |
| Brief §8 Referências | OC-4, RB-11, §9 |
| Brief §9 Não negociável | §11 (G-1 a G-5) |
| Brief §10 Como saber se deu certo | O-1 |
| Mandato 06/09/2026 — "landing de alta conversão que também é portfólio" | O-2, P-2, §5, G-6, RL-8 |
| Mandato 06/09/2026 — "motion scroll maravilhoso" | RB-1 a RB-5, RB-12 a RB-15, D-6 |
| Mandato 06/09/2026 — "não temos marca, é protótipo, WhatsApp pode ser 123" | §10 (MP-1 a MP-7), §12 |
| Produtos conferidos no ar 06/09/2026 | §4-bis, PR-1 a PR-5, D-9, D-10 |
| Mandato 06/09/2026 — "pode ser Sócios o nome, mas o branding tem que ser sobre soluções tecnológicas" | §8-bis (BR-1 a BR-8), D-7 |
| Mandato 06/09/2026 — "esqueça o celular, quero o melhor site web em seriedade" | §13-ter, BR-7 revisto |
| Mandato 06/09/2026 — "dark mode, JavaScript liberado, encante, não diga o que não podemos fazer" | §13-quater; RC-2 e RC-3 suspensos |
| Mandato 06/09/2026 — "interatividade no site inteiro, almofada quentinha, pedir na hora" | §13-v |

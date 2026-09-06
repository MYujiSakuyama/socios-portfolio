export const meta = {
  name: 'site-socios-10000x',
  description: 'Auditar por 9 lentes, gerar e julgar ideias, planejar lotes, implementar no index.html com verificação por render, verificar adversarialmente, corrigir e documentar',
  phases: [
    { title: 'Auditoria', detail: '9 lentes em paralelo sobre o site atual' },
    { title: 'Ideias', detail: '4 ideadores + 3 juízes' },
    { title: 'Plano', detail: 'dedupe + lotes ordenados' },
    { title: 'Implementar', detail: 'um lote por vez, com render' },
    { title: 'Verificar', detail: '6 lentes adversariais' },
    { title: 'Corrigir', detail: 'até 2 rodadas' },
    { title: 'Documentar', detail: 'spec e sistema de design' },
  ],
}

const SITE = 'c:/Users/yujis/OneDrive/Documentos/Sócios/Portifólio/site'
const ROOT = 'c:/Users/yujis/OneDrive/Documentos/Sócios/Portifólio'
const SP = 'C:/Users/yujis/AppData/Local/Temp/claude/c--Users-yujis-OneDrive-Documentos-S-cios-Portif-lio/a1b71fb2-0f2c-45ab-b5f4-09f008090602/scratchpad'

const CONTEXT = `
## O projeto
Estúdio de dois sócios em Londrina (PR) que constrói páginas para negócios locais (bar, ótica, clínica) e entrega medição do que a página deu. Marca provisória: "Sócios". Ainda não venderam nenhum site; têm dois produtos SaaS no ar: MenuFlow (menuflow-topaz.vercel.app) e Lacuna (lacuna-saas.vercel.app). O site é UMA landing page em UM arquivo: ${SITE}/index.html (HTML + CSS + JS inline, fontes locais em ${SITE}/f/, capturas reais em ${SITE}/trabalho/, og.png). Hoje: ~137 KB total, 5 requisições, HTML gzip ~21 KB, ~8 KB de JS próprio, zero biblioteca.

## Documentos que mandam (leia antes de agir)
- ${ROOT}/spec-do-site.md — o spec, v1.0. Regras que NÃO se negociam: nada inventado (número, depoimento, cliente, foto); todo número com ferramenta e data ou medido ao vivo no aparelho de quem lê; placeholder só marcado com data-placeholder e listado no §12; texto fala só com a dona do negócio, nunca com designer (RL-8: nenhuma palavra sobre o próprio design/motion/performance como autoelogio); teste da frase roubada (frase que caberia no site de qualquer concorrente está errada); teste da ótica (termo que a dona da ótica não usaria, sai); a rolagem é sempre da pessoa (sem scroll-jacking, sem snap, sem infinito); tudo funciona sem JavaScript e com prefers-reduced-motion; um só arquivo principal.
- ${ROOT}/design-system/MASTER.md — tokens, elementos, componentes, decisões. Estratégia decidida: scrollytelling + scroll-triggered; recusados snap, infinito, horizontal, parallax pesado; 3D só em CSS (0 KB).
- Decisão do usuário registrada no spec v0.8: NÃO listar o que a empresa não faz (sem seção "quando não contratar", sem "o que não fazemos"). Não reintroduzir.
- Decisão PR-7: o peso medido dos produtos MenuFlow/Lacuna NÃO é publicado na página.
- Orçamento de peso: teto 180 KB total (proposto), prefira técnicas de 0 KB (CSS, SVG inline, geometria). Sem CDN, sem biblioteca externa, sem fonte remota. Sem Tailwind.
- Contato é placeholder: wa.me/123 (x-2). Nomes dos sócios: placeholder (x-3). Prazo e vagas do Raio-X: "a definir" (x-5). Mantenha todos marcados.

## Ferramenta de verificação (use-a)
Script: ${SP}/render.mjs. Sobe um servidor local com gzip, abre no chrome-headless (Playwright chromium já instalado), rola a página inteira, tira capturas WebP em pontos da rolagem, mede bytes transferidos e requisições, e imprime erros de console como linhas "BROWSER>". Uso (Git Bash):
  mkdir -p OUTDIR && VW=1440 VH=900 SHOTS=0,0.2,0.5,0.8 HP=PORTA_HTTP CP=PORTA_CDP node "${SP}/render.mjs" OUTDIR
Variáveis: VW/VH (viewport; 390x844 = celular com DPR 2, 1440x900 = desktop), SHOTS (frações 0..1 da rolagem OU pixels absolutos >1, separados por vírgula), HP/CP (portas HTTP e CDP — USE AS PORTAS QUE TE FOREM DADAS, outros agentes rodam ao mesmo tempo), PAGE=nome.html (arquivo dentro de site/, SEM barra inicial — o Git Bash converte "/x" em caminho do Windows), MODE=dark (emula prefers-reduced-motion:reduce), LINKTEST=1 (testa o campo de link e imprime os hrefs gerados), POINTER=x,y (move o ponteiro antes de cada captura, para ver hover/tilt). Saída: OUTDIR/view-N.webp e um JSON com transferKB, requests, docHeight. Leia as capturas com a ferramenta Read (ela mostra a imagem). Qualquer linha "BROWSER>" na saída é erro ou console — investigue.
Medir gzip do HTML: gzip -9 -c "${SITE}/index.html" | wc -c

## Regras de trabalho
- Edite só ${SITE}/index.html (e, se precisar de um ativo, crie em ${SITE}/); documentação só em ${ROOT}/spec-do-site.md e ${ROOT}/design-system/MASTER.md quando a tarefa pedir.
- Antes de editar index.html, faça backup: cp "${SITE}/index.html" "${SP}/backup-ANTES-DA-SUA-TAREFA.html" (use um nome único com o número do seu lote).
- Para mudanças grandes no HTML, prefira um script Python gravado em arquivo (${SP}/patch-N.py) com asserts de que os trechos existem, em vez de heredoc longo no bash (o heredoc longo quebra no Git Bash).
- Nunca deixe o arquivo quebrado: se um render mostrar erro de console ou layout quebrado, corrija ou restaure o backup.
- Texto em pt-BR, no tom do site: direto, concreto, "a gente", frase curta, sem jargão.
- Seu texto final É o retorno para o orquestrador: dados, não prosa para humano.
`

const FINDINGS = { type: 'object', properties: { findings: { type: 'array', items: { type: 'object', properties: {
  id: { type: 'string' }, severity: { type: 'string', enum: ['critica', 'alta', 'media', 'baixa'] }, area: { type: 'string' },
  problema: { type: 'string' }, proposta: { type: 'string' }, como: { type: 'string' }, custo_kb: { type: 'number' } },
  required: ['id', 'severity', 'area', 'problema', 'proposta', 'como'] } } }, required: ['findings'] }

const IDEAS = { type: 'object', properties: { ideias: { type: 'array', items: { type: 'object', properties: {
  titulo: { type: 'string' }, descricao: { type: 'string' }, por_que_converte: { type: 'string' }, como_implementar: { type: 'string' },
  custo_kb: { type: 'number' }, risco_honestidade: { type: 'string' } },
  required: ['titulo', 'descricao', 'por_que_converte', 'como_implementar', 'custo_kb', 'risco_honestidade'] } } }, required: ['ideias'] }

const SCORES = { type: 'object', properties: { notas: { type: 'array', items: { type: 'object', properties: {
  titulo: { type: 'string' }, conversao: { type: 'number' }, encanto: { type: 'number' }, honestidade: { type: 'number' },
  viabilidade: { type: 'number' }, total: { type: 'number' }, comentario: { type: 'string' } },
  required: ['titulo', 'conversao', 'encanto', 'honestidade', 'viabilidade', 'total'] } } }, required: ['notas'] }

const PLAN = { type: 'object', properties: {
  lotes: { type: 'array', items: { type: 'object', properties: {
    numero: { type: 'integer' }, nome: { type: 'string' }, escopo: { type: 'string' },
    itens: { type: 'array', items: { type: 'string' } }, secoes: { type: 'string' },
    aceite: { type: 'array', items: { type: 'string' } } }, required: ['numero', 'nome', 'escopo', 'itens', 'aceite'] } },
  descartados: { type: 'array', items: { type: 'string' } } }, required: ['lotes'] }

const IMPL = { type: 'object', properties: {
  concluido: { type: 'boolean' }, mudancas: { type: 'array', items: { type: 'string' } }, verificacao: { type: 'string' },
  peso_kb: { type: 'number' }, erros_console: { type: 'integer' }, pendencias: { type: 'array', items: { type: 'string' } } },
  required: ['concluido', 'mudancas', 'verificacao', 'peso_kb', 'erros_console'] }

const DOC = { type: 'object', properties: { spec_versao: { type: 'string' }, resumo: { type: 'string' } }, required: ['resumo'] }

const ports = (i) => `Portas para você: HP=${8700 + i * 2} CP=${9400 + i * 2}. Pasta de saída: ${SP}/wf-${i} (mkdir -p).`

// ───────────────────────── Auditoria ─────────────────────────
phase('Auditoria')
const LENSES = [
  { key: 'conversao', prompt: 'Lente CONVERSÃO. Você é uma dona de ótica em Londrina, à noite, no celular, com 30 segundos. Percorra a página como ela: em que ponto ela entende o que é o Raio-X? Onde desconfia? Onde o texto pede demais ou explica de menos? O campo de link, os botões, a mensagem do WhatsApp, a ordem das seções, a primeira dobra em 390x844 e em 1440x900. Liste fricções concretas e propostas que aumentem a chance de ela COLAR O LINK e ENVIAR. Nada de depoimento inventado, nada de número inventado.' },
  { key: 'design', prompt: 'Lente DESIGN DE ALTO NÍVEL. Você é diretor de arte exigente. Renderize desktop e celular em vários pontos e olhe as capturas. Avalie tipografia (escala, tracking, medida de linha, viúvas), ritmo vertical, hierarquia, composição, uso da única cor viva (trena), acabamento de cartões e bordas, coerência do sistema (design-system/MASTER.md), e qualquer coisa que pareça "template" ou "gerado por IA". Proponha refinamentos específicos, com valores (px, rem, %), que elevem a página ao nível de estúdio de referência sem trair a identidade (escuro de madeira + trena + instrumento de medição).' },
  { key: 'movimento', prompt: 'Lente MOVIMENTO E INTERAÇÃO. Avalie a cena presa (scrollytelling dos três passos), o comparador arrastável, o campo de link, os contadores, a régua de leitura, o canvas do herói, o cursor de instrumento, o tilt 3D em CSS, as revelações por IntersectionObserver. Use POINTER= e SHOTS em pixels para ver estados. Procure: movimento que não significa nada, timing ruim (150-300ms micro, 600-800ms revelação), jank provável (propriedades animadas que não são transform/opacity), falta de feedback em toque, comportamento com prefers-reduced-motion (MODE=dark), estado sem JS. Proponha melhorias e novas micro-interações que reforcem o argumento (medir, contar, entregar o número).' },
  { key: 'performance', prompt: 'Lente PERFORMANCE E PESO. Meça: transferKB, requisições, gzip do HTML, tamanho das fontes em site/f/, das imagens em site/trabalho/. Avalie: preload das fontes, font-display e risco de CLS/FOUT, custo de CPU do canvas do herói (loop de requestAnimationFrame — pausa fora da tela?), listeners de scroll (passive? throttle?), IntersectionObservers, lazy-loading, dimensões declaradas em imagens, LCP provável (qual elemento?), INP (handlers pesados?). Proponha cortes e otimizações concretas mantendo o visual. Teto: 180 KB total.' },
  { key: 'acessibilidade', prompt: 'Lente ACESSIBILIDADE (WCAG 2.2 AA). Leia o HTML inteiro. Verifique: ordem de cabeçalhos, landmarks, skip link, foco visível em tudo que é interativo, navegação por teclado no comparador (range), nas abas (radios+labels), no FAQ (details), no campo de link; rótulos e aria; contraste real dos pares (calcule); alvos de toque >= 44px; texto em imagens; aria-hidden correto; aria-live; canvas decorativo; o cursor customizado não esconde o nativo; leitores de tela na cena presa e nos contadores animados; prefers-reduced-motion respeitado em TUDO (inclusive JS). Liste violações e correções exatas.' },
  { key: 'mobile', prompt: 'Lente CELULAR À NOITE. Renderize em 390x844 (e também VW=360 VH=740) em muitos pontos da rolagem, com LINKTEST=1. Avalie: primeira dobra, dock que sobe depois do herói (cobre conteúdo? conflita com o teclado virtual quando o campo recebe foco?), o campo de link com teclado aberto, alvos de toque, zona do polegar, comparador arrastável no toque (touch-action), cena presa sem sticky no celular (faz sentido?), tamanhos de fonte, larguras de linha, safe-area, tamanho do celular 3D, peso e tempo em 4G. Proponha melhorias específicas para quem está deitado no celular decidindo se manda mensagem.' },
  { key: 'honestidade', prompt: 'Lente HONESTIDADE E BRIEF. Leia spec-do-site.md inteiro e depois o HTML inteiro. Caça: qualquer número sem procedência, qualquer afirmação não verificável, qualquer promessa sem limite, qualquer placeholder NÃO marcado com data-placeholder, qualquer frase que caberia no site de um concorrente (teste da frase roubada), qualquer termo que a dona da ótica não usaria (teste da ótica), qualquer autoelogio sobre o próprio design (RL-8), qualquer sugestão de que a dona é cliente do Lacuna (PR-6), qualquer lista do que a empresa não faz (proibida pelo usuário), qualquer dado dos produtos publicado (PR-7). Também: o JSON-LD afirma algo que a página não sustenta? Liste violações com a frase exata e a correção.' },
  { key: 'seo', prompt: 'Lente SEO TÉCNICO E SEMÂNTICO. Avalie title, description, canonical (placeholder socios.example — marque como pendência), og/twitter, og.png, JSON-LD (validade do @graph: ProfessionalService, HowTo, FAQPage — campos obrigatórios, coerência com o texto visível), headings, texto alternativo, links internos/externos (rel), lang, hreflang desnecessário, robots, velocidade como fator, conteúdo indexável sem JS (o que o Google vê com JS desligado?), palavras que a dona do negócio pesquisaria em Londrina ("site para restaurante Londrina", "cardápio digital", etc.) e se aparecem naturalmente no texto sem soar forçado. Proponha correções e ganhos concretos, sem inventar endereço/telefone.' },
  { key: 'codigo', prompt: 'Lente CÓDIGO E ROBUSTEZ. Leia o CSS e o JS inline inteiros. Procure: erros em Safari/Firefox (container queries, :has, interpolate-size, ::details-content, backdrop-filter, color-mix, cqw), CSS nesting não suportado, seletores com especificidade que se anulam, listeners sem passive, IntersectionObservers duplicados (há um bloco de nav com observe && ... suspeito), Performance API (encodedBodySize pode ser 0 em cache — o peso mostrado fica 0?), PerformanceObserver buffered, canvas sem pausa fora da tela, memória, casos de borda do parser do link (@, URLs com http, espaços, acentos), formulários sem action, estado inicial sem JS (a cena presa fica em data-step=3 e o JS troca para 1 — pisca?), duplicação de imagens (menuflow.webp usada 3x — cache OK?). Rode o render com MODE=dark e sem MODE e leia as linhas BROWSER>. Liste bugs reais e correções exatas.' },
]
const audits = await parallel(LENSES.map((l, i) => () =>
  agent(`${CONTEXT}\n\n${ports(i)}\n\n${l.prompt}\n\nDevolva até 12 findings, os mais importantes primeiro. Cada "como" tem que ser implementável por outro agente sem te perguntar nada: diga seletor, trecho, valor.`,
    { label: `audit:${l.key}`, phase: 'Auditoria', schema: FINDINGS })))
const findings = audits.filter(Boolean).flatMap((a, i) => a.findings.map(f => ({ ...f, lente: LENSES[i].key })))
log(`Auditoria: ${findings.length} findings de ${audits.filter(Boolean).length} lentes`)

// ───────────────────────── Ideias ─────────────────────────
phase('Ideias')
const ANGLES = [
  { key: 'desconfiada', prompt: 'Ângulo: A DONA QUE DESCONFIA. Ela já foi enganada por agência. Que 4 funcionalidades novas na página fariam ela sentir que aqui é diferente e mandar o link AGORA? Pense em transparência radical, em mostrar o processo, em tirar risco, em deixar ela testar algo antes de falar com alguém. Nada que exija dado inventado.' },
  { key: 'encantar', prompt: 'Ângulo: ENCANTAR SEM MENTIR. Você é o melhor designer de interação que existe. Que 4 momentos de "cair o queixo" a página pode ter, dentro da identidade (escuro de madeira, trena, instrumento de medição, 3D só em CSS, geometria não arquivo), que também DIGAM algo do argumento (medir, contar, entregar o número)? Cada um com custo em KB e como fazer em CSS/JS puro.' },
  { key: 'instrumento', prompt: 'Ângulo: A PÁGINA É O INSTRUMENTO. A página já mede a leitura ao vivo (rolagem, tempo, paradas) e o próprio peso. Que 4 funcionalidades levariam isso adiante — a página demonstrando, no aparelho da pessoa e só com dados dela, exatamente o serviço que a empresa vende? Exemplo de direção: um relatório em miniatura da leitura dela, exportável/compartilhável; um Raio-X de exemplo do PRÓPRIO MenuFlow com medições feitas na hora (cuidado: PR-7 proíbe publicar peso dos produtos — pense em como demonstrar sem violar). Só dados reais.' },
  { key: 'noite', prompt: 'Ângulo: CELULAR, À NOITE, DEITADA. Que 4 funcionalidades tornam o pedido mais fácil e mais provável para quem está no celular com pouca bateria e pouca paciência? Pense em: o campo de link e o teclado, colar do clipboard, WhatsApp abrindo certo, salvar para depois, compartilhar com o sócio, voltar amanhã e continuar, e modo de leitura curta. Nada que exija cadastro ou backend.' },
]
const ideaSets = await parallel(ANGLES.map((a, i) => () =>
  agent(`${CONTEXT}\n\nLeia o index.html e o spec antes. ${a.prompt}\n\nSeja ousado E honesto: "risco_honestidade" tem que dizer com franqueza se a ideia depende de algum dado que a empresa não tem.`,
    { label: `ideia:${a.key}`, phase: 'Ideias', schema: IDEAS })))
const ideas = ideaSets.filter(Boolean).flatMap((s, i) => s.ideias.map(x => ({ ...x, angulo: ANGLES[i].key })))
log(`Ideias: ${ideas.length} propostas`)

const ideaText = ideas.map((x, i) => `${i + 1}. [${x.angulo}] ${x.titulo}\n   ${x.descricao}\n   Por que converte: ${x.por_que_converte}\n   Como: ${x.como_implementar}\n   Custo: ${x.custo_kb} KB · Risco de honestidade: ${x.risco_honestidade}`).join('\n\n')
const JUDGES = ['conversão e clareza para a dona do negócio', 'ofício de design e distinção (nada com cara de IA/template)', 'honestidade, viabilidade em um arquivo e custo em bytes']
const scores = await parallel(JUDGES.map((j, i) => () =>
  agent(`${CONTEXT}\n\nVocê é juiz com foco em: ${j}. Dê nota 0-10 em conversao, encanto, honestidade, viabilidade para CADA ideia abaixo (use o título exato), e total = média. REGRA DURA: ideia que depende de dado inventado, depoimento inventado, número sem procedência, ou que viola PR-6/PR-7/RL-8 ou a proibição de listar o que a empresa não faz, recebe honestidade 0 e total 0. Ideia que estoura 180 KB recebe viabilidade <= 2. Comente em uma frase.\n\nIDEIAS:\n${ideaText}`,
    { label: `juiz:${i + 1}`, phase: 'Ideias', schema: SCORES })))
const avg = {}
scores.filter(Boolean).forEach(s => s.notas.forEach(n => { (avg[n.titulo] = avg[n.titulo] || []).push(n.total) }))
const ranked = ideas.map(x => ({ ...x, media: (avg[x.titulo] || [0]).reduce((a, b) => a + b, 0) / ((avg[x.titulo] || [0]).length) }))
  .sort((a, b) => b.media - a.media)
const winners = ranked.filter(x => x.media >= 6.5).slice(0, 7)
log(`Ideias vencedoras (${winners.length}): ${winners.map(w => `${w.titulo} (${w.media.toFixed(1)})`).join(' · ')}`)

// ───────────────────────── Plano ─────────────────────────
phase('Plano')
const findText = findings.map(f => `- [${f.lente}/${f.severity}] ${f.id} · ${f.area}: ${f.problema} → ${f.proposta}. COMO: ${f.como}${f.custo_kb ? ` (~${f.custo_kb} KB)` : ''}`).join('\n')
const winText = winners.map(w => `- ${w.titulo} (média ${w.media.toFixed(1)}): ${w.descricao}. COMO: ${w.como_implementar}. Custo ~${w.custo_kb} KB. Risco: ${w.risco_honestidade}`).join('\n')
const plan = await agent(`${CONTEXT}\n\nVocê é o planejador. Abaixo estão ${findings.length} findings de auditoria e ${winners.length} ideias vencedoras. Tarefas:\n1. Deduplique (findings iguais vindos de lentes diferentes viram um).\n2. Descarte o que viola o spec, o que estoura 180 KB, o que é gosto sem ganho, e o que contradiz decisões do usuário. Liste os descartados com o motivo em uma linha.\n3. Organize o resto em 6 a 8 LOTES sequenciais, cada um para um agente implementar sozinho em index.html em uma sessão. Ordem: (a) fundações — bugs de código, robustez, performance, acessibilidade; (b) refinamento de design e tipografia; (c) movimento e interação; (d) funcionalidades novas (ideias vencedoras), uma ou duas por lote; (e) texto e SEO por último. Cada lote: nome, escopo em uma frase, itens concretos (com seletor/trecho/valor), quais seções do HTML toca (para o próximo lote saber), e critérios de aceite verificáveis por render ou leitura.\n4. Itens que dependem de decisão do usuário (ex.: número de WhatsApp, nomes) NÃO entram: vão para "descartados" com a nota "depende do usuário".\n\nFINDINGS:\n${findText}\n\nIDEIAS VENCEDORAS:\n${winText}`,
  { label: 'planejador', phase: 'Plano', schema: PLAN, effort: 'high' })
if (!plan || !plan.lotes || !plan.lotes.length) throw new Error('planejador não devolveu lotes')
log(`Plano: ${plan.lotes.length} lotes · ${(plan.descartados || []).length} descartados`)

// ───────────────────────── Implementar (sequencial: um arquivo só) ─────────────────────────
phase('Implementar')
const impl = []
for (const [i, lote] of plan.lotes.entries()) {
  const prev = impl.length ? `\n\nO QUE OS LOTES ANTERIORES JÁ MUDARAM (não desfaça):\n${impl.map((r, k) => `Lote ${k + 1}: ${r ? r.mudancas.join('; ') : 'falhou'}`).join('\n')}` : ''
  const r = await agent(`${CONTEXT}\n\n${ports(20 + i)}\n\nVocê implementa o LOTE ${lote.numero} — ${lote.nome}.\nEscopo: ${lote.escopo}\nSeções que toca: ${lote.secoes || 'ver itens'}\nItens:\n${lote.itens.map(x => `- ${x}`).join('\n')}\nCritérios de aceite:\n${lote.aceite.map(x => `- ${x}`).join('\n')}${prev}\n\nProcedimento obrigatório:\n1. cp "${SITE}/index.html" "${SP}/backup-lote-${lote.numero}.html"\n2. Leia index.html inteiro. Implemente TODOS os itens. Mudanças grandes via script Python em ${SP}/patch-lote-${lote.numero}.py com asserts.\n3. Renderize desktop (VW=1440 VH=900, SHOTS em pelo menos 5 pontos, um deles com POINTER sobre o que você mexeu) e celular (VW=390 VH=844, LINKTEST=1). Leia as capturas. Confira que não há linha BROWSER>. Renderize também com MODE=dark (reduced motion) e confira que nada some.\n4. Meça transferKB e gzip do HTML.\n5. Se algo quebrou e você não conseguiu consertar, restaure o backup daquele item e registre em pendencias.\nDevolva o relatório estruturado. "verificacao" diz exatamente o que você olhou e viu.`,
    { label: `lote ${lote.numero}: ${lote.nome}`, phase: 'Implementar', schema: IMPL, effort: 'high' })
  impl.push(r)
  log(`Lote ${lote.numero} ${r && r.concluido ? 'ok' : 'com pendências'} · ${r ? r.peso_kb : '?'} KB · ${r ? r.erros_console : '?'} erros de console`)
}

// ───────────────────────── Verificar ─────────────────────────
phase('Verificar')
const VERIFIERS = [
  { key: 'visual-desktop', prompt: 'Verifique VISUALMENTE no desktop (1440x900 e também 1280x720): renderize em 8+ pontos, com POINTER em alguns, e leia cada captura. Procure sobreposição, corte, texto vazando, alinhamento quebrado, cor fora do sistema, contraste ruim, elementos em posição errada, cena presa e comparador funcionando, estados de hover.' },
  { key: 'visual-mobile', prompt: 'Verifique VISUALMENTE no celular (390x844 e 360x740): renderize em 8+ pontos com LINKTEST=1 e leia cada captura. Procure: dock cobrindo conteúdo, campo de link, botões cortados, texto pequeno, largura extrapolando (rolagem horizontal), comparador utilizável, cena presa, rodapé.' },
  { key: 'a11y', prompt: 'Verifique ACESSIBILIDADE: leia o HTML final inteiro. Ordem de foco, foco visível, rótulos, aria, contraste calculado, alvos 44px, reduced motion (rode MODE=dark e leia), sem JS (raciocine sobre o estado inicial do HTML), leitores de tela em contadores/cena/comparador.' },
  { key: 'honestidade', prompt: 'Verifique HONESTIDADE E SPEC: leia spec-do-site.md e o HTML final. Qualquer número novo sem procedência? Placeholder sem data-placeholder? Frase roubada? Termo que a dona da ótica não usaria? Autoelogio de design (RL-8)? Lista do que não fazemos (proibida)? Dado dos produtos publicado (PR-7)? JSON-LD coerente com o texto? Seja um cético: tente REFUTAR que a página é honesta.' },
  { key: 'robustez', prompt: 'Verifique ROBUSTEZ E PERFORMANCE: rode render normal e MODE=dark, leia TODAS as linhas BROWSER>. Meça transferKB (<= 180), requisições, gzip. Leia o JS inteiro procurando erro de lógica, listener sem passive, loop sem pausa, observer duplicado, parser do link com casos de borda (teste via LINKTEST e via Runtime se precisar), estado inicial sem JS.' },
  { key: 'voz', prompt: 'Verifique TEXTO E VOZ: leia todo o texto visível. Tom "a gente", frases curtas, uma ideia por frase, sem jargão, sem promessa vazia, sem inconsistência entre seções (o que o herói promete a FAQ sustenta?), erros de português, concordância, acentos, aspas e travessões corretos, texto que assume layout (ex.: "ao lado" no celular).' },
]
const verify = await parallel(VERIFIERS.map((v, i) => () =>
  agent(`${CONTEXT}\n\n${ports(40 + i)}\n\n${v.prompt}\n\nDevolva findings só do que VOCÊ CONFIRMOU (viu na captura, leu no código, mediu). Severidade: critica = quebra ou mentira; alta = prejudica conversão/acesso; media = polimento importante; baixa = detalhe. Se não achou nada, devolva findings vazio.`,
    { label: `verifica:${v.key}`, phase: 'Verificar', schema: FINDINGS })))
let issues = verify.filter(Boolean).flatMap((v, i) => v.findings.map(f => ({ ...f, lente: VERIFIERS[i].key })))
log(`Verificação: ${issues.length} findings (${issues.filter(f => f.severity === 'critica').length} críticos, ${issues.filter(f => f.severity === 'alta').length} altos)`)

// ───────────────────────── Corrigir (até 2 rodadas) ─────────────────────────
phase('Corrigir')
const fixes = []
for (let round = 1; round <= 2; round++) {
  const toFix = issues.filter(f => f.severity === 'critica' || f.severity === 'alta' || (f.severity === 'media' && round === 1))
  if (!toFix.length) { log(`Rodada ${round}: nada a corrigir`); break }
  const r = await agent(`${CONTEXT}\n\n${ports(50 + round)}\n\nVocê corrige os findings confirmados abaixo em index.html (rodada ${round}). Faça backup em ${SP}/backup-fix-${round}.html. Corrija todos que forem reais; se um não se reproduzir, diga em pendencias. Depois renderize desktop e celular (com LINKTEST=1 e MODE=dark também), leia as capturas, confira zero BROWSER>, meça transferKB.\n\nFINDINGS:\n${toFix.map(f => `- [${f.lente}/${f.severity}] ${f.id} · ${f.area}: ${f.problema} → ${f.proposta}. COMO: ${f.como}`).join('\n')}`,
    { label: `correção ${round}`, phase: 'Corrigir', schema: IMPL, effort: 'high' })
  fixes.push(r)
  const re = await parallel([
    () => agent(`${CONTEXT}\n\n${ports(54 + round * 2)}\n\nRe-verificação VISUAL (desktop 1440x900 e celular 390x844, 6+ pontos cada, LINKTEST=1, POINTER em um ponto). Leia as capturas. Devolva só o que ainda está quebrado ou o que a correção quebrou.`, { label: `re-verifica visual ${round}`, phase: 'Corrigir', schema: FINDINGS }),
    () => agent(`${CONTEXT}\n\n${ports(55 + round * 2)}\n\nRe-verificação de ROBUSTEZ e HONESTIDADE: render normal e MODE=dark, zero BROWSER>, transferKB <= 180, e releia o texto/JSON-LD procurando número sem procedência, placeholder sem marca, frase que assume layout. Devolva só o que confirmou.`, { label: `re-verifica código ${round}`, phase: 'Corrigir', schema: FINDINGS }),
  ])
  issues = re.filter(Boolean).flatMap(v => v.findings)
  log(`Rodada ${round}: ${r ? r.mudancas.length : 0} correções · restam ${issues.length} findings`)
}

// ───────────────────────── Documentar ─────────────────────────
phase('Documentar')
const doc = await agent(`${CONTEXT}\n\n${ports(60)}\n\nAtualize a documentação para refletir o site como está AGORA. Leia index.html, spec-do-site.md e design-system/MASTER.md.\n1. spec-do-site.md: suba para v1.1; escreva o bloco "Mudou da v1.0 para a v1.1" no topo listando o que entrou (lotes abaixo), o que a verificação pegou e foi corrigido, e o que ficou em aberto; atualize §12 (dados que faltam) e §13 (decisões) se algo mudou; atualize a medição em §13-bis/§13-v com os números finais (rode o render para medir: transferKB, requisições, gzip).\n2. design-system/MASTER.md: acrescente componentes/elementos novos nas tabelas, tokens novos se houver, e linhas no registro de decisões (data 06/09/2026).\nNão invente números: meça.\n\nLOTES IMPLEMENTADOS:\n${plan.lotes.map((l, i) => `Lote ${l.numero} ${l.nome}: ${impl[i] ? impl[i].mudancas.join('; ') : 'falhou'}${impl[i] && impl[i].pendencias && impl[i].pendencias.length ? ` · pendências: ${impl[i].pendencias.join('; ')}` : ''}`).join('\n')}\n\nCORREÇÕES:\n${fixes.map((f, i) => `Rodada ${i + 1}: ${f ? f.mudancas.join('; ') : 'falhou'}`).join('\n')}\n\nDESCARTADOS PELO PLANEJADOR:\n${(plan.descartados || []).map(d => `- ${d}`).join('\n')}\n\nFINDINGS AINDA ABERTOS:\n${issues.map(f => `- [${f.severity}] ${f.problema}`).join('\n') || '- nenhum'}`,
  { label: 'documentação', phase: 'Documentar', schema: DOC })

return {
  auditoria: { lentes: audits.filter(Boolean).length, findings: findings.length },
  ideias: { propostas: ideas.length, vencedoras: winners.map(w => ({ titulo: w.titulo, media: +w.media.toFixed(1), angulo: w.angulo })) },
  plano: { lotes: plan.lotes.map(l => `${l.numero} · ${l.nome}`), descartados: plan.descartados || [] },
  implementacao: plan.lotes.map((l, i) => ({ lote: l.numero, nome: l.nome, ok: !!(impl[i] && impl[i].concluido), mudancas: impl[i] ? impl[i].mudancas : [], peso_kb: impl[i] ? impl[i].peso_kb : null, erros: impl[i] ? impl[i].erros_console : null, pendencias: impl[i] ? (impl[i].pendencias || []) : ['agente falhou'] })),
  verificacao: { rodadas_correcao: fixes.length, correcoes: fixes.map(f => f ? f.mudancas : []), abertos: issues },
  documentacao: doc,
}
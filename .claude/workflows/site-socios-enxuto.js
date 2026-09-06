export const meta = {
  name: 'site-socios-enxuto',
  description: 'Auditar por 4 lentes, gerar e selecionar ideias, planejar 3 lotes, implementar no index.html com render, verificar, corrigir e documentar',
  phases: [
    { title: 'Auditoria', detail: '4 lentes em paralelo' },
    { title: 'Ideias', detail: '2 ideadores' },
    { title: 'Plano', detail: 'dedupe, seleção e 3 lotes' },
    { title: 'Implementar', detail: '3 lotes, um por vez, com render' },
    { title: 'Verificar', detail: '2 lentes adversariais' },
    { title: 'Corrigir', detail: '1 rodada + re-verificação' },
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
- Decisão do usuário registrada no spec v0.8: NÃO listar o que a empresa não faz. Não reintroduzir.
- Decisão PR-7: o peso medido dos produtos MenuFlow/Lacuna NÃO é publicado na página.
- Orçamento de peso: teto 180 KB total. Prefira técnicas de 0 KB (CSS, SVG inline, geometria). Sem CDN, sem biblioteca externa, sem fonte remota, sem Tailwind.
- Contato é placeholder: wa.me/123 (x-2). Nomes dos sócios: placeholder (x-3). Prazo e vagas do Raio-X: "a definir" (x-5). Mantenha todos marcados.

## Ferramenta de verificação
Script: ${SP}/render.mjs. Sobe servidor local com gzip, abre no chrome-headless, rola a página, tira capturas WebP, mede bytes e requisições, e imprime erros de console como linhas "BROWSER>". Uso (Git Bash):
  mkdir -p OUTDIR && VW=1440 VH=900 SHOTS=0,0.3,0.6,0.9 HP=PORTA_HTTP CP=PORTA_CDP node "${SP}/render.mjs" OUTDIR
Variáveis: VW/VH (390x844 = celular DPR 2; 1440x900 = desktop), SHOTS (frações 0..1 OU pixels absolutos >1), HP/CP (USE AS PORTAS QUE TE FOREM DADAS), PAGE=nome.html (sem barra inicial), MODE=dark (emula prefers-reduced-motion:reduce), LINKTEST=1 (testa o campo de link), POINTER=x,y (move o ponteiro antes de capturar). Leia as capturas com a ferramenta Read. Qualquer linha "BROWSER>" é erro ou console — investigue.
Medir gzip: gzip -9 -c "${SITE}/index.html" | wc -c

## ECONOMIA (importante)
Você está numa execução de custo controlado. Leia no MÁXIMO 5 capturas de tela por tarefa — escolha os pontos que mais importam para o seu trabalho, não capture a página inteira em 10 pontos. Prefira ler o código a renderizar quando a resposta está no código. Não repita renders idênticos.

## Regras de trabalho
- Edite só ${SITE}/index.html (e ativos em ${SITE}/ se precisar); documentação só em ${ROOT}/spec-do-site.md e ${ROOT}/design-system/MASTER.md quando a tarefa pedir.
- Antes de editar, backup: cp "${SITE}/index.html" "${SP}/bk-SEU-NOME.html"
- Mudanças grandes via script Python em ${SP}/patch-N.py com asserts de que os trechos existem (heredoc longo quebra no Git Bash).
- Nunca deixe o arquivo quebrado: se um render mostrar erro ou layout quebrado, corrija ou restaure o backup.
- Texto em pt-BR, tom do site: direto, concreto, "a gente", frase curta, sem jargão.
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

const PLAN = { type: 'object', properties: {
  lotes: { type: 'array', items: { type: 'object', properties: {
    numero: { type: 'integer' }, nome: { type: 'string' }, escopo: { type: 'string' },
    itens: { type: 'array', items: { type: 'string' } }, secoes: { type: 'string' },
    aceite: { type: 'array', items: { type: 'string' } } }, required: ['numero', 'nome', 'escopo', 'itens', 'aceite'] } },
  ideias_aprovadas: { type: 'array', items: { type: 'string' } },
  descartados: { type: 'array', items: { type: 'string' } } }, required: ['lotes'] }

const IMPL = { type: 'object', properties: {
  concluido: { type: 'boolean' }, mudancas: { type: 'array', items: { type: 'string' } }, verificacao: { type: 'string' },
  peso_kb: { type: 'number' }, erros_console: { type: 'integer' }, pendencias: { type: 'array', items: { type: 'string' } } },
  required: ['concluido', 'mudancas', 'verificacao', 'peso_kb', 'erros_console'] }

const DOC = { type: 'object', properties: { spec_versao: { type: 'string' }, resumo: { type: 'string' } }, required: ['resumo'] }

const ports = (i) => `Portas para você: HP=${8700 + i * 2} CP=${9400 + i * 2}. Pasta de saída: ${SP}/wx-${i} (mkdir -p).`

// ───────────────────────── Auditoria: 4 lentes ─────────────────────────
phase('Auditoria')
const LENSES = [
  { key: 'conversao-voz', render: true, prompt: 'Lente CONVERSÃO E VOZ. Você é a dona de uma ótica em Londrina, à noite, no celular, com 30 segundos, e também um copywriter de conversão. Renderize 390x844 com LINKTEST=1 e leia no máximo 5 capturas dos pontos decisivos (primeira dobra, campo de link, prova, medição, fecho). Avalie: em que ponto ela entende o que é o Raio-X; onde desconfia; onde o texto pede demais ou explica de menos; o campo de link e a mensagem do WhatsApp; a ordem das seções; o tom ("a gente", frase curta, sem jargão); erros de português; frase que assume layout de desktop. Liste fricções concretas e propostas que aumentem a chance de ela COLAR O LINK e ENVIAR.' },
  { key: 'design-movimento', render: true, prompt: 'Lente DESIGN E MOVIMENTO. Você é diretor de arte exigente. Renderize desktop 1440x900 e leia no máximo 5 capturas (uma com POINTER sobre um cartão, uma na cena presa, uma no comparador). Avalie: tipografia (escala, tracking, medida de linha, viúvas), ritmo vertical, hierarquia, composição, uso da única cor viva (trena), acabamento de cartões e bordas, e qualquer coisa com cara de template ou de IA. E o movimento: timing (150-300ms micro, 600-800ms revelação), movimento que não significa nada, jank provável, feedback no toque. Proponha refinamentos com VALORES (px, rem, ms, %) que elevem a página ao nível de estúdio de referência sem trair a identidade (escuro de madeira + trena + instrumento de medição).' },
  { key: 'codigo-perf-a11y', render: true, prompt: 'Lente CÓDIGO, PERFORMANCE E ACESSIBILIDADE. Leia o HTML/CSS/JS inteiros primeiro — a maior parte das respostas está no código, não em captura. Rode o render UMA vez normal e UMA vez com MODE=dark, leia as linhas BROWSER>, e leia no máximo 2 capturas. Procure: (a) bugs — compatibilidade Safari/Firefox (container queries, :has, interpolate-size, ::details-content, backdrop-filter, color-mix, cqw), seletores que se anulam, listeners sem passive, IntersectionObservers duplicados, canvas sem pausa fora da tela, Performance API com encodedBodySize 0 em cache (o peso mostrado vira 0?), casos de borda do parser do link, estado inicial sem JS (a cena presa pisca de data-step=3 para 1?); (b) performance — transferKB, requisições, gzip, fontes, preload, CLS/FOUT, LCP provável, INP; (c) acessibilidade WCAG 2.2 AA — ordem de cabeçalhos, foco visível, teclado no comparador/abas/FAQ/campo, rótulos e aria, contraste calculado dos pares, alvos 44px, aria-hidden correto, reduced motion respeitado inclusive no JS.' },
  { key: 'honestidade-seo', render: false, prompt: 'Lente HONESTIDADE E SEO. NÃO renderize — leia o spec-do-site.md inteiro e o HTML inteiro. (a) Honestidade: qualquer número sem procedência, afirmação não verificável, promessa sem limite, placeholder NÃO marcado com data-placeholder, frase roubada (caberia no site de um concorrente), termo que a dona da ótica não usaria, autoelogio de design (RL-8), sugestão de que a dona é cliente do Lacuna (PR-6), lista do que a empresa não faz (proibida), dado dos produtos publicado (PR-7). Cite a frase exata e a correção. (b) SEO: title, description, canonical (socios.example é placeholder — registre como pendência), og/twitter, JSON-LD (@graph válido? campos obrigatórios? coerente com o texto visível?), headings, alt, rel em links externos, conteúdo indexável sem JS, e palavras que a dona do negócio pesquisaria em Londrina — se cabem naturalmente no texto sem soar forçado.' },
]
const audits = await parallel(LENSES.map((l, i) => () =>
  agent(`${CONTEXT}\n\n${ports(i)}\n\n${l.prompt}\n\nDevolva no MÁXIMO 8 findings, os mais importantes primeiro. Cada "como" tem que ser implementável por outro agente sem te perguntar nada: diga seletor, trecho e valor.`,
    { label: `audit:${l.key}`, phase: 'Auditoria', schema: FINDINGS })))
const findings = audits.filter(Boolean).flatMap((a, i) => a.findings.map(f => ({ ...f, lente: LENSES[i].key })))
log(`Auditoria: ${findings.length} findings de ${audits.filter(Boolean).length}/4 lentes`)

// ───────────────────────── Ideias: 2 ideadores ─────────────────────────
phase('Ideias')
const ANGLES = [
  { key: 'confianca', prompt: 'Ângulo: TIRAR O RISCO DA DONA QUE JÁ FOI ENGANADA. Que 3 funcionalidades novas na página fariam ela sentir que aqui é diferente e mandar o link agora? Pense em transparência radical, mostrar o processo, deixar ela testar algo antes de falar com alguém, e facilitar o pedido no celular (colar do clipboard, salvar para depois, compartilhar com o sócio). Nada que exija cadastro, backend ou dado inventado.' },
  { key: 'encanto', prompt: 'Ângulo: ENCANTAR SEM MENTIR. Você é o melhor designer de interação que existe. Que 3 momentos de "cair o queixo" a página pode ter, dentro da identidade (escuro de madeira, trena, instrumento de medição, 3D só em CSS, geometria e não arquivo), que também DIGAM algo do argumento (medir, contar, entregar o número)? A página já mede a leitura ao vivo e o próprio peso — pense em levar isso adiante usando só dados reais do aparelho de quem lê. Cada ideia com custo em KB e como fazer em CSS/JS puro.' },
]
const ideaSets = await parallel(ANGLES.map((a, i) => () =>
  agent(`${CONTEXT}\n\nLeia o index.html e o spec antes. NÃO renderize — este trabalho é de concepção.\n\n${a.prompt}\n\nSeja ousado E honesto: "risco_honestidade" tem que dizer com franqueza se a ideia depende de algum dado que a empresa não tem.`,
    { label: `ideia:${a.key}`, phase: 'Ideias', schema: IDEAS })))
const ideas = ideaSets.filter(Boolean).flatMap((s, i) => s.ideias.map(x => ({ ...x, angulo: ANGLES[i].key })))
log(`Ideias: ${ideas.length} propostas`)

// ───────────────────────── Plano: julga e organiza em 3 lotes ─────────────────────────
phase('Plano')
const findText = findings.map(f => `- [${f.lente}/${f.severity}] ${f.id} · ${f.area}: ${f.problema} → ${f.proposta}. COMO: ${f.como}${f.custo_kb ? ` (~${f.custo_kb} KB)` : ''}`).join('\n')
const ideaText = ideas.map((x, i) => `${i + 1}. [${x.angulo}] ${x.titulo}: ${x.descricao}\n   Converte porque: ${x.por_que_converte}\n   Como: ${x.como_implementar}\n   Custo ~${x.custo_kb} KB · Risco: ${x.risco_honestidade}`).join('\n\n')
const plan = await agent(`${CONTEXT}\n\nVocê é o planejador e também o juiz. NÃO renderize. Abaixo estão ${findings.length} findings de auditoria e ${ideas.length} ideias.\n\n1. JULGUE as ideias. Regra dura: ideia que depende de dado inventado, depoimento inventado, número sem procedência, ou que viola PR-6/PR-7/RL-8 ou a proibição de listar o que a empresa não faz — está REPROVADA. Ideia que estoura o teto de 180 KB — reprovada. Aprove no MÁXIMO 3, as que mais aumentam a chance de a pessoa mandar o link. Liste os títulos aprovados em "ideias_aprovadas".\n2. Deduplique os findings (iguais vindos de lentes diferentes viram um) e descarte o que é gosto sem ganho ou contradiz decisão do usuário.\n3. Organize tudo em EXATAMENTE 3 LOTES sequenciais, cada um para um agente implementar sozinho em index.html numa sessão:\n   - Lote 1 FUNDAÇÕES: bugs de código, robustez, performance, acessibilidade. O que quebra ou exclui vem primeiro.\n   - Lote 2 ACABAMENTO: refinamento de design, tipografia, ritmo e movimento.\n   - Lote 3 FUNCIONALIDADES E TEXTO: as ideias aprovadas, mais correções de texto, voz e SEO.\n   Cada lote: nome, escopo em uma frase, itens concretos (com seletor/trecho/valor), seções do HTML que toca, e critérios de aceite verificáveis por render ou leitura. Não deixe nada importante de fora — se um lote ficar grande, priorize dentro dele e diga a ordem.\n4. Itens que dependem de decisão do usuário (número de WhatsApp, nomes dos sócios, domínio real) NÃO entram: vão para "descartados" com a nota "depende do usuário".\n\nFINDINGS:\n${findText}\n\nIDEIAS:\n${ideaText}`,
  { label: 'planejador e juiz', phase: 'Plano', schema: PLAN, effort: 'high' })
if (!plan || !plan.lotes || !plan.lotes.length) throw new Error('planejador não devolveu lotes')
log(`Plano: ${plan.lotes.length} lotes · ${(plan.ideias_aprovadas || []).length} ideias aprovadas · ${(plan.descartados || []).length} descartados`)

// ───────────────────────── Implementar: 3 lotes, sequenciais ─────────────────────────
phase('Implementar')
const impl = []
for (const [i, lote] of plan.lotes.entries()) {
  const prev = impl.length ? `\n\nO QUE OS LOTES ANTERIORES JÁ MUDARAM (não desfaça):\n${impl.map((r, k) => `Lote ${k + 1}: ${r ? r.mudancas.join('; ') : 'falhou'}`).join('\n')}` : ''
  const r = await agent(`${CONTEXT}\n\n${ports(20 + i)}\n\nVocê implementa o LOTE ${lote.numero} — ${lote.nome}.\nEscopo: ${lote.escopo}\nSeções que toca: ${lote.secoes || 'ver itens'}\nItens:\n${lote.itens.map(x => `- ${x}`).join('\n')}\nCritérios de aceite:\n${lote.aceite.map(x => `- ${x}`).join('\n')}${prev}\n\nProcedimento obrigatório:\n1. cp "${SITE}/index.html" "${SP}/bk-lote-${lote.numero}.html"\n2. Leia index.html inteiro. Implemente TODOS os itens. Mudanças grandes via script Python em ${SP}/patch-lote-${lote.numero}.py com asserts.\n3. Verifique: renderize desktop (VW=1440 VH=900) e celular (VW=390 VH=844, LINKTEST=1), e uma vez com MODE=dark. Leia no MÁXIMO 5 capturas no total — escolha os pontos que você mexeu. Confira que não há linha BROWSER>.\n4. Meça transferKB e gzip do HTML.\n5. Se algo quebrou e você não conseguiu consertar, restaure o backup daquele trecho e registre em pendencias.\nDevolva o relatório. "verificacao" diz exatamente o que você olhou e viu.`,
    { label: `lote ${lote.numero}: ${lote.nome}`, phase: 'Implementar', schema: IMPL, effort: 'high' })
  impl.push(r)
  log(`Lote ${lote.numero} ${r && r.concluido ? 'ok' : 'com pendências'} · ${r ? r.peso_kb : '?'} KB · ${r ? r.erros_console : '?'} erros de console`)
}

// ───────────────────────── Verificar: 2 lentes ─────────────────────────
phase('Verificar')
const VERIFIERS = [
  { key: 'visual', prompt: 'Verificação VISUAL. Renderize desktop 1440x900 e celular 390x844 (com LINKTEST=1), e leia no MÁXIMO 6 capturas no total, escolhendo os pontos de maior risco. Procure: sobreposição, corte, texto vazando, alinhamento quebrado, rolagem horizontal no celular, dock cobrindo conteúdo, cor fora do sistema, contraste ruim, cena presa e comparador funcionando, botões cortados.' },
  { key: 'codigo-honestidade', prompt: 'Verificação de CÓDIGO E HONESTIDADE. Leia o HTML final inteiro e o spec. Rode o render uma vez normal e uma com MODE=dark só para ler as linhas BROWSER> e medir transferKB (<= 180) — leia no máximo 2 capturas. Procure: erro de console, erro de lógica no JS, listener sem passive, observer duplicado, estado inicial sem JS quebrado, reduced motion desrespeitado, foco/teclado quebrado; e do lado da honestidade: número novo sem procedência, placeholder sem data-placeholder, frase roubada, termo que a dona da ótica não usaria, autoelogio de design, JSON-LD incoerente com o texto. Seja cético: tente REFUTAR que a página está boa.' },
]
const verify = await parallel(VERIFIERS.map((v, i) => () =>
  agent(`${CONTEXT}\n\n${ports(40 + i)}\n\n${v.prompt}\n\nDevolva só o que VOCÊ CONFIRMOU (viu na captura, leu no código, mediu). Severidade: critica = quebra ou mentira; alta = prejudica conversão/acesso; media = polimento importante; baixa = detalhe. Se não achou nada, devolva findings vazio.`,
    { label: `verifica:${v.key}`, phase: 'Verificar', schema: FINDINGS })))
let issues = verify.filter(Boolean).flatMap((v, i) => v.findings.map(f => ({ ...f, lente: VERIFIERS[i].key })))
log(`Verificação: ${issues.length} findings (${issues.filter(f => f.severity === 'critica').length} críticos, ${issues.filter(f => f.severity === 'alta').length} altos)`)

// ───────────────────────── Corrigir: 1 rodada + re-verificação ─────────────────────────
phase('Corrigir')
let fix = null, aberto = issues
const toFix = issues.filter(f => f.severity === 'critica' || f.severity === 'alta' || f.severity === 'media')
if (toFix.length) {
  fix = await agent(`${CONTEXT}\n\n${ports(50)}\n\nVocê corrige os findings confirmados abaixo em index.html. Faça backup em ${SP}/bk-fix.html. Corrija todos que forem reais; se um não se reproduzir, diga em pendencias. Depois renderize desktop e celular (LINKTEST=1) e uma vez com MODE=dark, leia no MÁXIMO 4 capturas, confira zero BROWSER> e meça transferKB.\n\nFINDINGS:\n${toFix.map(f => `- [${f.lente}/${f.severity}] ${f.id} · ${f.area}: ${f.problema} → ${f.proposta}. COMO: ${f.como}`).join('\n')}`,
    { label: 'correção', phase: 'Corrigir', schema: IMPL, effort: 'high' })
  const re = await agent(`${CONTEXT}\n\n${ports(52)}\n\nRe-verificação final. Renderize desktop 1440x900 e celular 390x844 (LINKTEST=1) e uma vez com MODE=dark; leia no MÁXIMO 4 capturas. Confira zero BROWSER>, transferKB <= 180, e releia o texto e o JSON-LD procurando número sem procedência, placeholder sem marca e frase que assume layout. Devolva só o que ainda está quebrado ou o que a correção quebrou.`,
    { label: 're-verificação', phase: 'Corrigir', schema: FINDINGS })
  aberto = re ? re.findings : []
  log(`Correção: ${fix ? fix.mudancas.length : 0} mudanças · restam ${aberto.length} findings`)
} else {
  log('Nada a corrigir')
}

// ───────────────────────── Documentar ─────────────────────────
phase('Documentar')
const doc = await agent(`${CONTEXT}\n\n${ports(60)}\n\nAtualize a documentação para refletir o site como está AGORA. Leia index.html, spec-do-site.md e design-system/MASTER.md. Rode o render UMA vez só para medir (transferKB, requisições) e meça o gzip — não leia capturas.\n1. spec-do-site.md: suba para v1.1; escreva o bloco "Mudou da v1.0 para a v1.1" no topo listando o que entrou, o que a verificação pegou e foi corrigido, e o que ficou em aberto; atualize §12 e §13 se algo mudou; atualize a medição com os números finais.\n2. design-system/MASTER.md: acrescente componentes/elementos novos nas tabelas, tokens novos se houver, e linhas no registro de decisões (data 06/09/2026).\nNão invente números: meça.\n\nLOTES:\n${plan.lotes.map((l, i) => `Lote ${l.numero} ${l.nome}: ${impl[i] ? impl[i].mudancas.join('; ') : 'falhou'}${impl[i] && impl[i].pendencias && impl[i].pendencias.length ? ` · pendências: ${impl[i].pendencias.join('; ')}` : ''}`).join('\n')}\n\nCORREÇÃO:\n${fix ? fix.mudancas.join('; ') : 'não foi necessária'}\n\nIDEIAS APROVADAS:\n${(plan.ideias_aprovadas || []).join(', ') || 'nenhuma'}\n\nDESCARTADOS:\n${(plan.descartados || []).map(d => `- ${d}`).join('\n') || '- nenhum'}\n\nAINDA ABERTOS:\n${aberto.map(f => `- [${f.severity}] ${f.problema}`).join('\n') || '- nenhum'}`,
  { label: 'documentação', phase: 'Documentar', schema: DOC })

return {
  auditoria: { lentes: audits.filter(Boolean).length, findings: findings.length },
  ideias: { propostas: ideas.length, aprovadas: plan.ideias_aprovadas || [] },
  plano: { lotes: plan.lotes.map(l => `${l.numero} · ${l.nome}`), descartados: plan.descartados || [] },
  implementacao: plan.lotes.map((l, i) => ({ lote: l.numero, nome: l.nome, ok: !!(impl[i] && impl[i].concluido), mudancas: impl[i] ? impl[i].mudancas : [], peso_kb: impl[i] ? impl[i].peso_kb : null, erros: impl[i] ? impl[i].erros_console : null, pendencias: impl[i] ? (impl[i].pendencias || []) : ['agente falhou'] })),
  verificacao: { encontrados: issues.length, corrigidos: fix ? fix.mudancas : [], abertos: aberto },
  documentacao: doc,
}

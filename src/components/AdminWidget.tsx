import { useState, useEffect, useRef } from "react";
import { Lock, LogOut, RefreshCw, Trash2, X, ChevronDown } from "lucide-react";
import { getArticles, saveArticle, deleteArticle, StoredArticle } from "@/lib/blogStorage";

const CREDENTIALS = { user: "admin", pass: "195774787246305894" };

const templates = [
  {
    slug: "sintra-vila-magica",
    title: "Sintra: A Vila Mágica a 30 Minutos de Lisboa",
    excerpt: "Palácios encantados, jardins secretos e paisagens de conto de fadas fazem de Sintra um dos destinos mais extraordinários da Europa, classificado como Património Mundial da UNESCO e visitado por milhões de pessoas todos os anos.",
    category: "Turismo",
    content: `Sintra é, sem dúvida, um dos destinos mais deslumbrantes da Europa. A apenas 30 minutos de Lisboa, esta vila histórica encravada na Serra de Sintra transporta-nos para um mundo completamente diferente, onde palácios coloridos emergem entre a vegetação densa, jardins secretos guardam fontes e lagos escondidos, e o nevoeiro matinal empresta à paisagem um ar místico e atemporal que poucos lugares do mundo conseguem igualar.\n\nO Palácio Nacional da Pena é o ícone incontornável de Sintra. Construído no século XIX por ordem do Rei D. Fernando II, esta obra romântica de cores vibrantes e torres exuberantes ergue-se imponente sobre a Serra de Sintra e oferece vistas panorâmicas de tirar o fôlego sobre a costa e o estuário do Tejo. O contraste entre as suas fachadas amarelas, vermelhas e cinzentas torna-o numa das construções mais fotografadas de Portugal e um símbolo do romantismo europeu do século XIX.\n\nA Quinta da Regaleira é outro ponto obrigatório, e talvez o mais misterioso de toda a vila. Mandada construir por António Augusto Carvalho Monteiro no início do século XX, esta propriedade repleta de simbolismo maçónico e rosacruz esconde grutas artificiais, lagos, capelas e a famosa Torre Iniciática, um poço invertido com uma escadaria em espiral que desce 27 metros até ao subsolo. A experiência de explorar estes espaços é verdadeiramente única.\n\nO Palácio de Monserrate surpreende pela sua arquitectura que mistura influências mouriscas, góticas e indianas num conjunto harmonioso rodeado por um jardim botânico de 30 hectares com espécies de todo o mundo. O Palácio Nacional de Sintra, no centro histórico da vila, impressiona pelas suas duas chaminés cónicas gigantescas e pela azulejaria do século XV que decora os seus interiores, alguns dos mais ricos e bem conservados de Portugal.\n\nAlém dos monumentos, as ruas e travessas do centro histórico de Sintra são um convite à descoberta. Pastelarias tradicionais servem as famosas travesseiras e as queijadas de Sintra, pequenas tartes de requeijão com canela numa crosta crocante que datam do século XIII. A FLUXITOUR oferece transfers privados e tours exclusivos a Sintra com motoristas experientes que conhecem cada canto desta região mágica, garantindo conforto e flexibilidade para explorar este tesouro português ao seu ritmo.`,
  },
  {
    slug: "melhores-praias-algarve",
    title: "As Melhores Praias do Algarve para Visitar em 2026",
    excerpt: "Falésias douradas esculpidas pelo mar, águas cristalinas de um azul intenso e extensas faixas de areia fina tornam o Algarve num dos destinos de praia mais admirados e procurados de toda a Europa, com mais de 150 quilómetros de costa deslumbrante para descobrir.",
    category: "Praias",
    content: `O Algarve é mundialmente reconhecido pelas suas praias de cortar a respiração. Com mais de 150 quilómetros de costa atlântica, esta região no extremo sul de Portugal oferece uma diversidade de paisagens costeiras que dificilmente encontramos noutro lugar da Europa, desde as imensas praias de barreira da Ria Formosa até às pequenas enseadas escondidas entre falésias de calcário e xisto esculpidas durante milhares de anos pelo vento e pelo mar.\n\nA Praia da Marinha, localizada entre Lagoa e Carvoeiro, é frequentemente considerada uma das mais belas da Europa e é fácil perceber porquê. Encaixada entre falésias douradas de formas fantásticas, esta praia tem águas de uma transparência excepcional e uma paisagem de arcos naturais, grutas e pilares rochosos que a tornam espetacular tanto do areal como do mar.\n\nA Praia de Benagil guarda um dos segredos mais famosos do Algarve: a gruta de Benagil, uma cavidade natural de tecto aberto que deixa entrar a luz do sol sobre um pequeno areal interior acessível apenas pelo mar. Esta formação geológica única tornou-se viral nas redes sociais e é hoje uma das imagens mais reconhecíveis de Portugal em todo o mundo.\n\nPara famílias com crianças, a Meia Praia em Lagos oferece sete quilómetros de areia dourada com águas geralmente calmas e pouco profundas. Os amantes de surf encontram na costa vicentina, nomeadamente nas praias de Sagres e da Mareta, ondas de qualidade e paisagens de uma beleza bruta e intocada.\n\nA FLUXITOUR disponibiliza transfers de luxo do Aeroporto Internacional de Faro para qualquer destino algarvio, com viaturas climatizadas de alta gama e motoristas profissionais e experientes que conhecem a região em profundidade.`,
  },
  {
    slug: "porto-cidade-invicta",
    title: "Porto: A Cidade Invicta que Conquistou o Mundo",
    excerpt: "Vinho do Porto envelhecido nas caves de Gaia, azulejos que contam histórias de séculos nas fachadas das igrejas, a Ribeira animada à beira do Douro e pontes icónicas que unem margens e gerações fazem do Porto uma das cidades mais autênticas e emocionantes da Europa.",
    category: "Cidades",
    content: `O Porto é uma cidade que se vive com todos os sentidos. A sua história milenar está gravada nos azulejos que decoram as fachadas das suas igrejas barrocas, nos palacetes da Avenida dos Aliados que testemunharam décadas de história, nos aromas de bacalhau e vinho que sobem das tascas do centro histórico e no barulho constante e animado das suas ruas onde se cruzam turistas de todo o mundo com portuenses que vivem a cidade com um orgulho particular e inconfundível.\n\nA Ribeira é o coração histórico e emocional do Porto. Este bairro classificado como Património Mundial pela UNESCO em 1996 estende-se ao longo da margem norte do Douro numa sucessão de casas coloridas, esplanadas animadas, restaurantes de marisco e tasquinhas onde o vinho verde escorre generoso. Os barcos rabelos ancorados nas margens trazem à memória os tempos em que transportavam pipas de vinho do Porto desde as quintas do Douro até às caves de Vila Nova de Gaia.\n\nA Livraria Lello, na Rua das Carmelitas, é considerada uma das mais belas livrarias do mundo. A sua escadaria central em forma de dupla hélice em madeira lacada a vermelho e o tecto em vitral multicolor tornam-na num espaço arquitectónico de excepção que serviu de inspiração à escritora J.K. Rowling durante os anos em que viveu no Porto.\n\nAs caves de vinho do Porto em Vila Nova de Gaia constituem uma experiência obrigatória. Taylor's, Graham's, Sandeman e tantas outras casas centenárias abrem as portas dos seus armazéns para visitas guiadas e provas de vinho num ambiente de sofisticação genuína.\n\nA FLUXITOUR realiza transfers privados entre Lisboa e Porto em viaturas premium e organiza tours personalizados pela cidade do Porto e região norte.`,
  },
  {
    slug: "gastronomia-portuguesa",
    title: "Gastronomia Portuguesa: Uma Viagem pelos Sabores de Portugal",
    excerpt: "Do bacalhau com mais de trezentas formas de preparação ao pastel de nata que conquistou o mundo, dos mariscos frescos do Algarve aos vinhos premiados do Douro e do Alentejo, a gastronomia portuguesa é uma das mais ricas, variadas e surpreendentes da Europa.",
    category: "Gastronomia",
    content: `A gastronomia portuguesa é uma das mais ricas e variadas da Europa, fruto de séculos de história, de influências dos quatro continentes que os navegadores portugueses descobriram e de um território de grande diversidade geográfica e climática que produz ingredientes de qualidade excepcional. Falar de comida portuguesa é falar de identidade, de memória, de família e de uma relação profunda e respeitosa com os produtos da terra e do mar.\n\nO bacalhau é o símbolo máximo da cozinha portuguesa. Chamado o "fiel amigo" por ter alimentado gerações de portugueses durante séculos, diz-se que existem mais de 365 receitas, uma para cada dia do ano. Do bacalhau à Brás ao bacalhau com natas, da patanisca ao bacalhau à Gomes de Sá, este peixe seco e salgado reinventa-se constantemente em pratos que vão do mais simples ao mais elaborado.\n\nO marisco é outra dimensão incontornável da cozinha portuguesa. As perceves da costa atlântica, as amêijoas à Bulhão Pato de Lisboa, as lagostas do Algarve e as sapateiras do norte são apenas alguns exemplos de uma riqueza marítima que faz de Portugal um destino obrigatório para todos os amantes de produtos do mar frescos e bem preparados.\n\nOs doces e pastéis portugueses merecem um capítulo à parte. O pastel de nata de Belém, com a sua massa folhada estaladiça e o creme de ovos ligeiramente tostado por cima, conquistou o mundo. Os pastéis de Tentúgal, os ovos moles de Aveiro e as queijadas de Sintra são apenas uma pequena amostra de uma doçaria conventual de séculos de história.\n\nA FLUXITOUR organiza tours gastronómicos privados e personalizados pelos melhores restaurantes, mercados e adegas de Portugal.`,
  },
  {
    slug: "vale-do-douro",
    title: "Vale do Douro: Vinhas, Paisagens e Tradição",
    excerpt: "Os terraços de vinha esculpidos nas encostas íngremes de xisto, as quintas centenárias onde nasce o melhor vinho do Porto do mundo e as aldeias de viticultores que preservam tradições milenares fazem do Vale do Douro um dos territórios mais impressionantes e emocionantes de toda a Europa.",
    category: "Natureza",
    content: `O Vale do Douro é uma das paisagens vitícolas mais impressionantes do mundo. Declarado Património Mundial pela UNESCO em 2001, este território moldado durante séculos pela mão do homem e pelo curso sinuoso do Douro oferece uma experiência sensorial e visual verdadeiramente única. A paisagem dos terraços de xisto cobertos de vinha, que se estendem pelas encostas íngremes de ambas as margens do rio, cria uma geometria natural de uma beleza abstracta e monumental que impressiona em qualquer estação do ano.\n\nA Primavera traz o verde intenso das folhas novas das videiras e a floração da amendoeira. O Verão oferece o calor seco e intenso do Douro Superior e as cores douradas que cobrem as encostas. O Outono é a estação mais mágica, com a vindima animando as quintas e as folhas da vinha a transformarem-se numa paleta de vermelhos, amarelos e laranjas que tingem as encostas de uma beleza impossível de descrever.\n\nAs quintas do Douro são o coração desta região. A Quinta do Crasto, a Quinta do Vale Meão e a Quinta da Romaneira são apenas algumas das propriedades históricas que recebem visitantes para visitas guiadas às vinhas e às adegas, provas de vinho comentadas por enólogos experientes e refeições de produtos regionais com vistas panorâmicas sobre o Douro.\n\nO comboio histórico do Douro, que parte da Régua e percorre a linha do Douro ao longo de paisagens de tirar o fôlego, é uma das experiências mais românticas e memoráveis que Portugal tem para oferecer.\n\nA FLUXITOUR oferece day trips exclusivos e personalizados ao Vale do Douro saindo de Lisboa ou do Porto, com paragens nas melhores quintas e refeições regionais incluídas sob pedido.`,
  },
  {
    slug: "lisboa-bairros-historicos",
    title: "Lisboa: Os Bairros Históricos que Não Pode Perder",
    excerpt: "Alfama sobe pela colina do castelo em ruelas labirínticas onde o fado ecoa entre as paredes de azulejo, Belém guarda os monumentos mais grandiosos da era dos Descobrimentos e a LX Factory pulsa com a energia criativa da Lisboa contemporânea, numa cidade que nunca para de surpreender.",
    category: "Cidades",
    content: `Lisboa é uma cidade de bairros, cada um com a sua personalidade, história, sons e aromas únicos. Conhecê-los em profundidade é a única forma de verdadeiramente perceber e sentir a alma desta capital que cresceu ao longo de séculos sobre sete colinas viradas para o Tejo e que hoje se afirma como um dos destinos mais apetecíveis e vibrantes de toda a Europa.\n\nAlfama é o bairro mais antigo de Lisboa e um dos mais emocionantes de explorar. As suas ruelas estreitas e labirínticas sobem pela colina do Castelo de São Jorge em curvas e contracurvas onde casas de fachada azulejada convivem com tasquinhas de bairro, miradouros com vistas de cortar a respiração e adegas onde o fado se canta com uma autenticidade que os palcos turísticos raramente conseguem igualar.\n\nBelém guarda alguns dos mais importantes monumentos da história de Portugal. O Mosteiro dos Jerónimos, mandado construir pelo Rei D. Manuel I para celebrar a chegada de Vasco da Gama à India, é uma obra-prima do estilo manuelino que combina elementos góticos com motivos marinhos numa profusão decorativa única. A Torre de Belém, que vigiou durante séculos a entrada do Tejo, é o símbolo mais icónico de Lisboa e de Portugal no mundo.\n\nA LX Factory, instalada numa antiga complexo industrial do século XIX junto à Ponte 25 de Abril, é o polo criativo por excelência da Lisboa contemporânea. Aos fins-de-semana, o seu mercado de produtos locais e design português atrai milhares de visitantes que circulam entre restaurantes de cozinha de autor, livrarias independentes e espaços de arte e cultura.\n\nA FLUXITOUR disponibiliza tours privados personalizados pelos bairros históricos de Lisboa com motoristas guia que conhecem cada recanto desta cidade extraordinária.`,
  },
  {
    slug: "comporta-destino-secreto",
    title: "Comporta: O Destino Secreto dos Europeus Mais Exigentes",
    excerpt: "Praias selvagens de areia fina que se estendem por quilómetros sem uma única construção à vista, arrozais de um verde impossível, pinhais perfumados e uma atmosfera de retiro exclusivo tornaram Comporta no destino mais procurado pelos europeus que querem escapar ao turismo de massas sem abdicar do conforto.",
    category: "Praias",
    content: `Comporta é um dos segredos mais bem guardados de Portugal e, durante muito tempo, foi conhecida apenas por uma elite europeia que a descobriu décadas atrás e a foi mantendo como um refúgio privado de beleza natural sem paralelo. Esta pequena aldeia na Península de Setúbal, a apenas uma hora e meia de Lisboa, tornou-se nos últimos anos o destino preferido de quem procura beleza natural intocada, privacidade absoluta e uma sofisticação discreta.\n\nA paisagem de Comporta é única em Portugal e rara na Europa. As praias estendem-se por dezenas de quilómetros de areia fina e dourada sem uma única construção à vista, bordeadas por pinhais perfumados e arrozais de um verde luminoso que fazem desta zona uma das mais fotogénicas e surpreendentes do país. A Praia de Comporta, a Praia do Carvalhal e a Praia de Brejos da Carregueira oferecem esse raro privilégio de caminhar à beira-mar num silêncio quase absoluto.\n\nA aldeia de Comporta tem uma oferta gastronómica que surpreende pela qualidade e pelo cuidado. Restaurantes como o Museu do Arroz, instalado numa antiga descascadora de arroz dos anos 50, e o Comporta Café servem peixe e marisco frescos em ambientes descontraídos e elegantes, com atenção ao produto local e ao design de interiores que transformam cada refeição numa experiência completa.\n\nA Casa da Comporta e o Sublime Comporta são os dois principais hotéis de referência de luxo discreto nesta área, com piscinas entre os pinheiros e suites de design que atraem uma clientela de toda a Europa que valoriza a privacidade e a beleza natural acima de qualquer outra comodidade.\n\nA FLUXITOUR realiza transfers privados e em total conforto de Lisboa e do aeroporto de Lisboa para Comporta e para toda a Península de Setúbal.`,
  },
  {
    slug: "evora-cidade-museu",
    title: "Évora: A Cidade-Museu no Coração do Alentejo",
    excerpt: "Um templo romano do século I que permanece surpreendentemente intacto no centro da cidade, uma catedral gótica imponente, a perturbante e fascinante Capela dos Ossos e uma cidade inteira de ruas medievais classificada como Património Mundial pela UNESCO fazem de Évora uma das cidades mais extraordinárias da Península Ibérica.",
    category: "Cultura",
    content: `Évora é uma das cidades mais bem preservadas da Europa e uma das mais extraordinárias de Portugal. Classificada como Património Mundial da Humanidade pela UNESCO em 1986, a capital do Alentejo é um autêntico museu a céu aberto onde dois mil anos de história convivem com a vida quotidiana de uma cidade universitária activa e vibrante, num equilíbrio raro que a torna única no panorama das cidades históricas europeias.\n\nO Templo Romano de Évora, datado do século I da nossa era, é o monumento mais impressionante da cidade e um dos mais bem conservados da Península Ibérica. As suas catorze colunas de granito coríntias com capitéis de mármore ainda de pé, em pleno centro histórico, evocam a grandeza da presença romana neste território com uma força que poucas ruínas conseguem transmitir.\n\nA Catedral de Évora, construída no século XIII em estilo gótico, é a maior catedral medieval de Portugal e domina o skyline da cidade. O seu claustro e o seu museu de arte sacra, com uma das mais ricas colecções de ourivesaria religiosa do país, merecem uma visita demorada.\n\nA Capela dos Ossos, adossada à Igreja de São Francisco, é de longe a atracção mais perturbante e inesquecível de Évora. Construída pelos frades franciscanos no século XVI com os ossos de mais de cinco mil monges, as paredes e colunas desta câmara estão literalmente revestidas de ossos e crânios humanos dispostos em padrões decorativos. A inscrição na entrada resume a mensagem franciscana com uma directidade que ninguém consegue ignorar.\n\nA FLUXITOUR organiza day trips exclusivos e privados a Évora saindo de Lisboa, com paragens em herdades alentejanas para provas de vinho, visitas a produtores de azeite e refeições no campo.`,
  },
  {
    slug: "cascais-vila-cosmopolita",
    title: "Cascais: A Vila Cosmopolita que Conquistou a Aristocracia Europeia",
    excerpt: "Desde que o Rei D. Luís I estabeleceu aqui a residência de verão da família real portuguesa em 1870, Cascais atraiu a aristocracia europeia com as suas praias magnéticas, a marina de luxo, os restaurantes de referência e uma atmosfera de elegância descontraída que poucas vilas costeiras conseguem igualar.",
    category: "Turismo",
    content: `Cascais tem uma longa e fascinante tradição como destino de eleição da aristocracia europeia, dos artistas e dos viajantes mais sofisticados do continente. Quando o rei D. Luís I estabeleceu aqui a residência de verão da família real portuguesa em 1870, transformou definitivamente esta pitoresca vila de pescadores num polo cosmopolita que atraiu durante décadas a nata da sociedade europeia.\n\nHoje, Cascais mantém esse charme aristocrático mas democratizou-o numa mistura equilibrada de tradição e modernidade. A marina de Cascais, uma das mais movimentadas da costa atlântica europeia, acolhe iates e veleiros de todo o mundo e anima o centro da vila com restaurantes de peixe fresco, bares de esplanada e lojas de artigos náuticos.\n\nAs praias de Cascais são variadas e todas de grande qualidade. A Praia de Cascais, mesmo no centro da vila, é a mais animada e cómoda. A Praia do Guincho, a seis quilómetros do centro, é uma das mais espectaculares de Portugal, uma praia de duna selvagem e ventosa que avança pelo Atlântico numa paisagem de grande beleza.\n\nO Museu do Mar Rei D. Carlos, dedicado à oceanografia e à biologia marinha, é uma visita de grande qualidade. A Boca do Inferno, uma formação rochosa onde o Atlântico entra numa fenda do rochedo com estrondo impressionante, é um dos pontos mais fotogénicos da região.\n\nO centro de Cascais fica a apenas 30 minutos de Lisboa e a FLUXITOUR oferece transfers diários e tours privados pela Linha de Cascais, Sintra e Estoril.`,
  },
  {
    slug: "madeira-ilha-eterna-primavera",
    title: "Madeira: A Ilha da Eterna Primavera",
    excerpt: "Os canais das levadas que percorrem a ilha entre florestas de laurissilva classificadas pela UNESCO, os picos que emergem das nuvens a quase dois mil metros de altitude e as flores exuberantes que invadem cada jardim fazem da Madeira uma ilha de contrastes naturais e tradições únicas que surpreende e encanta qualquer viajante.",
    category: "Natureza",
    content: `A Madeira é, com frequência, descrita como o destino perfeito para todo o tipo de viajante, e é difícil encontrar um exagero nessa afirmação. Com um clima ameno e agradável durante todo o ano, uma flora de uma exuberância que impressiona até os viajantes mais experientes, paisagens de uma dramaticidade que vai do oceano aberto aos picos envoltos em nuvens e uma cultura local com tradições artesanais e gastronómicas de grande riqueza, a chamada Ilha da Eterna Primavera justifica amplamente a sua reputação.\n\nAs levadas são talvez o elemento mais característico e surpreendente da Madeira. Estes canais de irrigação construídos a partir do século XV têm ao longo do tempo sido transformados em percursos pedestres de grande beleza que permitem explorar a ilha a pé por caminhos que seguem a água entre faias, urzes gigantes e loureiros da floresta laurissilva, um ecossistema único no mundo classificado como Património Mundial pela UNESCO em 1999.\n\nA Levada do Caldeirão Verde, a Levada das 25 Fontes e a Levada do Rei estão entre os percursos mais impressionantes, conduzindo o caminhante por túneis escavados na rocha, ao longo de encostas vertiginosas e por vales de uma beleza que evoca paisagens de conto de fadas.\n\nO Funchal, capital da Madeira, tem uma personalidade e oferta cultural notável. O Mercado dos Lavradores, o mais famoso mercado de flores e frutas tropicais da ilha, é um espectáculo de cores e aromas que não pode faltar na visita. O vinho da Madeira, produzido com castas únicas e envelhecido por um processo de estufagem que o torna único no mundo, é uma das grandes referências vinícolas do planeta.\n\nA FLUXITOUR assegura transfers premium entre o Aeroporto Internacional da Madeira e qualquer ponto da ilha em viaturas de alta gama.`,
  },
  {
    slug: "restaurantes-lisboa-top",
    title: "Os Melhores Restaurantes de Lisboa: Do Tradicional ao Contemporâneo",
    excerpt: "De tabernas centenárias de Alfama onde se servem petiscos e vinhos de talha a restaurantes com duas estrelas Michelin onde a alta cozinha portuguesa se reinventa com técnica e criatividade, Lisboa consolidou-se como uma das capitais gastronómicas mais excitantes e diversificadas da Europa.",
    category: "Gastronomia",
    content: `Lisboa transformou-se numa das capitais gastronómicas mais excitantes e diversificadas da Europa nas últimas duas décadas, e esse reconhecimento internacional está bem patente nos guias gastronómicos, nos prémios recebidos pelos seus chefs e na atenção crescente que a imprensa internacional dedica à cena culinária lisboeta. A cidade oferece hoje uma gama extraordinária de experiências culinárias, do mais tradicional ao mais vanguardista, com uma qualidade média que raramente desilude.\n\nO Belcanto, do chef José Avillez no Chiado, é a referência máxima da alta cozinha portuguesa contemporânea com as suas duas estrelas Michelin. Avillez interpreta os sabores e as tradições da cozinha portuguesa com uma técnica impecável e uma criatividade que surpreende sem alienar, num espaço elegante e de grande personalidade onde cada refeição é uma experiência gastronómica completa e memorável.\n\nPara uma experiência mais enraizada na tradição culinária de Lisboa, a Taberna da Rua das Flores no Chiado serve petiscos e pratos do dia que evocam a cozinha de avó com ingredientes de produção local e regional de grande qualidade. A Cervejaria Ramiro, aberta em 1956, é a referência incontornável para marisco fresco de qualidade excepcional num ambiente informal e ruidoso que faz parte da experiência.\n\nO Time Out Market Lisboa, instalado no antigo Mercado da Ribeira junto ao Cais do Sodré, foi o conceito que revolucionou a forma como lisboetas e turistas se relacionam com a gastronomia da cidade. Reunindo os melhores restaurantes, chefs e produtores num único espaço vibrante e acessível, democratizou o acesso à melhor gastronomia da cidade.\n\nA FLUXITOUR pode incluir reservas antecipadas em restaurantes de topo e tours gastronómicos privados pelos mercados e tabernas mais representativos de Lisboa nos seus serviços personalizados.`,
  },
  {
    slug: "obidos-vila-medieval",
    title: "Óbidos: A Vila Medieval Mais Encantadora de Portugal",
    excerpt: "As muralhas medievais do século XII abraçam esta joia do Oeste de Portugal em toda a sua extensão, as ruas são cobertas de flores em quase todas as épocas do ano, o castelo transformado em pousada guarda séculos de história e a famosa ginjinha servida em copinhos de chocolate negro é o símbolo gastronómico de uma vila que parece saída de um conto de fadas.",
    category: "Cultura",
    content: `Óbidos é uma das vilas medievais mais bem preservadas da Península Ibérica e, sem dúvida, uma das mais fotogénicas e encantadoras de todo o Portugal. Rodeada na sua totalidade por muralhas do século XII que a abraçam como um abraço de pedra que dura há mais de oitocentos anos, esta joia do Oeste de Portugal é uma visita absolutamente obrigatória para qualquer viajante que queira compreender a riqueza histórica e patrimonial deste país.\n\nO castelo de Óbidos, erguido pelos Mouros e reconquistado pelos cristãos no século XII durante o reinado de D. Afonso Henriques, foi durante séculos a residência de rainhas de Portugal e é hoje uma das pousadas históricas mais charmosas e procuradas do país, alojada nas dependências do próprio castelo em aposentos que preservam elementos arquitectónicos medievais enquanto oferecem todo o conforto contemporâneo.\n\nAs ruas de Óbidos, em particular a Rua Direita que traversa a vila de ponta a ponta, são uma das mais belas e fotogénicas de Portugal. As casas caiadas de branco com barras de cal azul e amarela, cobertas de buganvílias e rosas em praticamente todas as estações do ano, criam uma cenografia de uma beleza quase irreal que torna cada curva uma nova surpresa fotográfica.\n\nA ginjinha servida em copinhos de chocolate negro é o símbolo gastronómico de Óbidos e um prazer que não pode ser adiado. Esta bebida espirituosa de ginja macerada em aguardente tem em Óbidos a sua expressão mais famosa e característica, numa combinação de sabores que ficou gravada na memória de todos os que a experimentaram.\n\nA FLUXITOUR realiza day trips privados e personalizados a Óbidos saindo de Lisboa, com a possibilidade de combinar na mesma saída visitas ao Mosteiro de Alcobaça e à Batalha, dois dos monumentos mais importantes do gótico português.`,
  },
];

const AdminWidget = () => {
  const [showModal, setShowModal] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [articles, setArticles] = useState<StoredArticle[]>([]);
  const [generating, setGenerating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<StoredArticle | null>(null);
  const [showArticles, setShowArticles] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("fluxitour_admin") === "1") {
      setAuthed(true);
      setArticles(getArticles());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === CREDENTIALS.user && password === CREDENTIALS.pass) {
      sessionStorage.setItem("fluxitour_admin", "1");
      setAuthed(true);
      setLoginError("");
      setArticles(getArticles());
    } else {
      setLoginError("Credenciais inválidas.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("fluxitour_admin");
    setAuthed(false);
    setUsername("");
    setPassword("");
    setShowModal(false);
    setShowArticles(false);
  };

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      const existing = getArticles().map((a) => a.slug);
      const available = templates.filter((t) => !existing.includes(t.slug));
      const pool = available.length > 0 ? available : templates;
      const tpl = pool[Math.floor(Math.random() * pool.length)];
      const now = new Date();
      const dateStr = now.toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" });
      const article: StoredArticle = {
        id: `${tpl.slug}-${Date.now()}`,
        slug: tpl.slug,
        title: tpl.title,
        excerpt: tpl.excerpt,
        content: tpl.content,
        image: `https://picsum.photos/seed/${tpl.slug}/800/450`,
        category: tpl.category,
        date: dateStr,
        author: "FLUXITOUR",
      };
      saveArticle(article);
      const updated = getArticles();
      setArticles(updated);
      setSuccessMsg(`Artigo gerado com sucesso!`);
      setGenerating(false);
      setTimeout(() => setSuccessMsg(""), 3000);
    }, 800);
  };

  const handleDelete = (id: string) => {
    deleteArticle(id);
    setArticles(getArticles());
  };

  return (
    <>
      {/* Lock icon in navbar */}
      <button
        onClick={() => setShowModal(true)}
        title="Administração"
        className="text-muted-foreground/40 hover:text-muted-foreground transition-colors"
      >
        <Lock className="w-3.5 h-3.5" />
      </button>

      {/* Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-end pt-20 pr-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            ref={modalRef}
            className="bg-background border border-border w-full max-w-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!authed ? (
              /* Login form */
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Acesso Administrador</span>
                  </div>
                  <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleLogin} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground block mb-1">Utilizador</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-background border border-border text-foreground text-sm px-3 py-2 focus:outline-none focus:border-primary"
                      autoComplete="username"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground block mb-1">Palavra-passe</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-background border border-border text-foreground text-sm px-3 py-2 focus:outline-none focus:border-primary"
                      autoComplete="current-password"
                    />
                  </div>
                  {loginError && <p className="text-red-400 text-xs">{loginError}</p>}
                  <button type="submit" className="w-full gold-gradient py-2.5 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all">
                    Entrar
                  </button>
                </form>
              </div>
            ) : (
              /* Admin panel */
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-foreground">Painel Admin</span>
                  <div className="flex items-center gap-3">
                    <button onClick={handleLogout} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <LogOut className="w-3.5 h-3.5" />
                      Sair
                    </button>
                    <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {successMsg && (
                  <div className="mb-4 text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-2">
                    {successMsg}
                  </div>
                )}

                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="w-full gold-gradient py-3 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60 mb-4"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${generating ? "animate-spin" : ""}`} />
                  {generating ? "A gerar..." : "Gerar Artigo"}
                </button>

                <button
                  onClick={() => setShowArticles(!showArticles)}
                  className="w-full flex items-center justify-between text-xs text-muted-foreground hover:text-foreground transition-colors py-2 border-t border-border"
                >
                  <span>Artigos gerados ({articles.length})</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showArticles ? "rotate-180" : ""}`} />
                </button>

                {showArticles && (
                  <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
                    {articles.length === 0 ? (
                      <p className="text-xs text-muted-foreground py-2">Nenhum artigo ainda.</p>
                    ) : (
                      articles.map((article) => (
                        <div key={article.id} className="flex items-start justify-between gap-2 py-2 border-b border-border/50">
                          <button
                            onClick={() => { setSelectedArticle(article); setShowModal(false); }}
                            className="text-xs text-foreground hover:text-primary transition-colors text-left flex-1 leading-snug"
                          >
                            {article.title}
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="text-red-400 hover:text-red-300 transition-colors shrink-0 mt-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Article preview modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[110] flex items-start justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative bg-background border border-border w-full max-w-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-56 object-cover" />
            <div className="p-8">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-3 block">{selectedArticle.category}</span>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2 leading-snug">{selectedArticle.title}</h2>
              <p className="text-xs text-muted-foreground mb-6">{selectedArticle.date} · {selectedArticle.author}</p>
              <p className="text-sm text-muted-foreground italic mb-6 border-l-2 border-primary pl-4">{selectedArticle.excerpt}</p>
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{selectedArticle.content}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminWidget;

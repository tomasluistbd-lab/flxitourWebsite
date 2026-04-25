import { useState, useEffect } from "react";
import { Trash2, LogOut, RefreshCw, Lock, X } from "lucide-react";
import { getArticles, saveArticle, deleteArticle, StoredArticle } from "@/lib/blogStorage";

const CREDENTIALS = { user: "admin", pass: "195774787246305894" };

const templates = [
  {
    slug: "sintra-vila-magica",
    title: "Sintra: A Vila Mágica a 30 Minutos de Lisboa",
    excerpt: "Palácios encantados, jardins secretos e paisagens de conto de fadas fazem de Sintra um dos destinos mais extraordinários da Europa, classificado como Património Mundial da UNESCO e visitado por milhões de pessoas todos os anos.",
    category: "Turismo",
    content: `Sintra é, sem dúvida, um dos destinos mais deslumbrantes da Europa. A apenas 30 minutos de Lisboa, esta vila histórica encravada na Serra de Sintra transporta-nos para um mundo completamente diferente, onde palácios coloridos emergem entre a vegetação densa, jardins secretos guardam fontes e lagos escondidos, e o nevoeiro matinal empresta à paisagem um ar místico e atemporal que poucos lugares do mundo conseguem igualar.\n\nO Palácio Nacional da Pena é o ícone incontornável de Sintra. Construído no século XIX por ordem do Rei D. Fernando II, esta obra romântica de cores vibrantes e torres exuberantes ergue-se imponente sobre a Serra de Sintra e oferece vistas panorâmicas de tirar o fôlego sobre a costa e o estuário do Tejo. O contraste entre as suas fachadas amarelas, vermelhas e cinzentas torna-o numa das construções mais fotografadas de Portugal e um símbolo do romantismo europeu do século XIX.\n\nA Quinta da Regaleira é outro ponto obrigatório, e talvez o mais misterioso de toda a vila. Mandada construir por António Augusto Carvalho Monteiro no início do século XX, esta propriedade repleta de simbolismo maçónico e rosacruz esconde grutas artificiais, lagos, capelas e a famosa Torre Iniciática, um poço invertido com uma escadaria em espiral que desce 27 metros até ao subsolo. A experiência de explorar estes espaços é verdadeiramente única.\n\nO Palácio de Monserrate surpreende pela sua arquitectura que mistura influências mouriscas, góticas e indianas num conjunto harmonioso rodeado por um jardim botânico de 30 hectares com espécies de todo o mundo. O Palácio Nacional de Sintra, no centro histórico da vila, impressiona pelas suas duas chaminés cónicas gigantescas e pela azulejaria do século XV que decora os seus interiores, alguns dos mais ricos e bem conservados de Portugal.\n\nAlém dos monumentos, as ruas e travessas do centro histórico de Sintra são um convite à descoberta. Pastelarias tradicionais servem as famosas travesseiras, bolsos de massa folhada recheados com amêndoa e ovos que existem há mais de meio século, e as queijadas de Sintra, pequenas tartes de requeijão com canela numa crosta crocante que datam do século XIII. A gastronomia local é parte essencial de qualquer visita e complementa de forma perfeita a riqueza cultural e histórica da vila.\n\nA FLUXITOUR oferece transfers privados e tours exclusivos a Sintra com motoristas experientes que conhecem cada canto desta região mágica, garantindo conforto, flexibilidade e uma experiência verdadeiramente personalizada para explorar este tesouro português ao seu ritmo e com toda a tranquilidade que merece.`,
  },
  {
    slug: "melhores-praias-algarve",
    title: "As Melhores Praias do Algarve para Visitar em 2026",
    excerpt: "Falésias douradas esculpidas pelo mar, águas cristalinas de um azul intenso e extensas faixas de areia fina tornam o Algarve num dos destinos de praia mais admirados e procurados de toda a Europa, com mais de 150 quilómetros de costa deslumbrante para descobrir.",
    category: "Praias",
    content: `O Algarve é mundialmente reconhecido pelas suas praias de cortar a respiração. Com mais de 150 quilómetros de costa atlântica, esta região no extremo sul de Portugal oferece uma diversidade de paisagens costeiras que dificilmente encontramos noutro lugar da Europa: desde as imensas praias de barreira da Ria Formosa até às pequenas enseadas escondidas entre falésias de calcário e xisto esculpidas durante milhares de anos pelo vento e pelo mar.\n\nA Praia da Marinha, localizada entre Lagoa e Carvoeiro, é frequentemente considerada uma das mais belas da Europa e é fácil perceber porquê. Encaixada entre falésias douradas de formas fantásticas, esta praia de dimensões relativamente pequenas tem águas de uma transparência excepcional e uma paisagem de arcos naturais, grutas e pilares rochosos que a tornam espetacular tanto do areal como do mar, especialmente se fizer uma visita de kayak às suas grutas.\n\nA Praia de Benagil guarda um dos segredos mais famosos do Algarve: a gruta de Benagil, uma cavidade natural de tecto aberto que deixa entrar a luz do sol sobre um pequeno areal interior acessível apenas pelo mar. Esta formação geológica única tornou-se viral nas redes sociais e é hoje uma das imagens de cartão postal mais reconhecíveis de Portugal em todo o mundo.\n\nPara famílias com crianças, a Meia Praia em Lagos oferece sete quilómetros de areia dourada com águas geralmente calmas e pouco profundas, estacionamento amplo e todas as infra-estruturas necessárias para um dia de praia confortável. A Praia de Odeceixe, já perto da fronteira com o Alentejo, surpreende pelo rio que desagua no areal e pelas águas mais frescas das praias do Algarve ocidental, numa paisagem de beleza selvagem e pouco alterada.\n\nOs amantes de surf e de praias mais agrestes encontram na costa vicentina, nomeadamente nas praias de Sagres, da Mareta e do Beliche, ondas de qualidade e paisagens de uma beleza bruta e intocada que contrastam com o clima mais quente e as águas mais calmas do sotavento algarvio. A Praia do Guincho, já na Costa do Estoril mas muitas vezes associada à rota das praias do sul, é igualmente uma referência para os amantes de vento e desportos náuticos.\n\nA FLUXITOUR disponibiliza transfers de luxo do Aeroporto Internacional de Faro para qualquer destino algarvio, com viaturas climatizadas de alta gama e motoristas profissionais e experientes que conhecem a região em profundidade, para que as suas férias comecem da melhor forma possível logo à chegada.`,
  },
  {
    slug: "porto-cidade-invicta",
    title: "Porto: A Cidade Invicta que Conquistou o Mundo",
    excerpt: "Vinho do Porto envelhecido nas caves de Gaia, azulejos que contam histórias de séculos nas fachadas das igrejas, a Ribeira animada à beira do Douro e pontes icónicas que unem margens e gerações fazem do Porto uma das cidades mais autênticas e emocionantes da Europa.",
    category: "Cidades",
    content: `O Porto é uma cidade que se vive com todos os sentidos. A sua história milenar está gravada nos azulejos que decoram as fachadas das suas igrejas barrocas, nos palacetes da Avenida dos Aliados que testemunharam décadas de história, nos aromas de bacalhau e vinho que sobem das tascas do centro histórico e no barulho constante e animado das suas ruas e miradouros onde se cruzam turistas de todo o mundo com portuenses que vivem a cidade com um orgulho particular e inconfundível.\n\nA Ribeira é o coração histórico e emocional do Porto. Este bairro classificado como Património Mundial pela UNESCO em 1996 estende-se ao longo da margem norte do Douro numa sucessão de casas coloridas e decrépitas de uma beleza singular, esplanadas animadas, restaurantes de marisco e tasquinhas onde o vinho verde escorre generoso. Os barcos rabelos ancorados nas margens trazem à memória os tempos em que transportavam pipas de vinho do Porto desde as quintas do Douro até às caves de Vila Nova de Gaia, na margem oposta do rio.\n\nA Livraria Lello, na Rua das Carmelitas, é considerada uma das mais belas livrarias do mundo e uma visita incontornável para qualquer viajante. A sua escadaria central em forma de dupla hélice em madeira lacada a vermelho e o tecto em vitral multicolor tornam-na num espaço arquitectónico de excepção que serviu inclusivamente de inspiração à escritora J.K. Rowling durante os anos em que viveu no Porto e criou a saga Harry Potter.\n\nAs caves de vinho do Porto em Vila Nova de Gaia constituem uma experiência obrigatória. Taylor's, Graham's, Sandeman, Ramos Pinto e tantas outras casas centenárias abrem as portas dos seus armazéns repletos de pipas de carvalho para visitas guiadas e provas de vinho num ambiente de uma sofisticação tranquila e genuína. Cruzar a Ponte Luís I a pé e descer para as caves enquanto se observa o skyline do Porto ao pôr do sol é uma das experiências mais memoráveis que Portugal tem para oferecer.\n\nO Porto moderno vive nos bairros de Bonfim, Cedofeita e Massarelos, onde galerias de arte contemporânea, restaurantes de cozinha criativa, bares de cocktails e lojas de design convivem em harmonia com o tecido histórico e popular da cidade. Matosinhos, a poucos minutos de metro, é a referência para marisco fresco acabado de entrar da pesca, com restaurantes que servem lagosta, sapateira e percebes a preços ainda razoáveis.\n\nA FLUXITOUR realiza transfers privados entre Lisboa e Porto em viaturas premium com motoristas experientes e conhecedores da rota, e organiza tours personalizados pela cidade do Porto e região norte, para que possa descobrir a Invicta em todo o seu esplendor e autenticidade.`,
  },
  {
    slug: "gastronomia-portuguesa",
    title: "Gastronomia Portuguesa: Uma Viagem pelos Sabores de Portugal",
    excerpt: "Do bacalhau com mais de trezentas formas de preparação ao pastel de nata que conquistou o mundo, dos mariscos frescos do Algarve aos vinhos premiados do Douro e do Alentejo, a gastronomia portuguesa é uma das mais ricas, variadas e surpreendentes da Europa.",
    category: "Gastronomia",
    content: `A gastronomia portuguesa é uma das mais ricas e variadas da Europa, fruto de séculos de história, de influências dos quatro continentes que os navegadores portugueses descobriram e de um território de grande diversidade geográfica e climática que produz ingredientes de qualidade excepcional. Falar de comida portuguesa é falar de identidade, de memória, de família e de uma relação profunda e respeitosa com os produtos da terra e do mar.\n\nO bacalhau é o símbolo máximo da cozinha portuguesa. Chamado o "fiel amigo" por ter alimentado gerações de portugueses durante séculos, diz-se que existem mais de 365 receitas, uma para cada dia do ano. Do bacalhau à Brás ao bacalhau com natas, da patanisca ao bacalhau à Gomes de Sá, este peixe seco e salgado reinventa-se constantemente em pratos que vão do mais simples ao mais elaborado e que fazem parte da memória afectiva de qualquer português.\n\nO marisco é outra dimensão incontornável da cozinha portuguesa. As perceves da costa atlântica, as amêijoas à Bulhão Pato de Lisboa, as lagostas do Algarve, os camarões do Alentejo e as sapateiras do norte são apenas alguns exemplos de uma riqueza marítima que se reflecte directamente na gastronomia e que faz de Portugal um destino obrigatório para todos os amantes de produtos do mar frescos e bem preparados.\n\nNo interior, o cozido à portuguesa concentra em si a essência da cozinha de conforto portuguesa: carnes fumadas, enchidos, legumes cozinhados lentamente num caldo rico que se serve em travessas generosas numa refeição que pode durar horas e que reúne a família à mesa. A caldeirada de peixe do Alentejo, o cabrito assado da Beira, as migas alentejanas, a açorda e o gaspacho são outros exemplos de uma culinária regional de raiz e de uma riqueza impressionante.\n\nOs doces e pastéis portugueses merecem um capítulo à parte. O pastel de nata de Belém, com a sua massa folhada estaladiça e o creme de ovos ligeiramente tostado por cima, conquistou o mundo e é hoje produzido em imitações em dezenas de países. Os pastéis de Tentúgal, os ovos moles de Aveiro, os queijadas de Sintra, os pastéis de feijão de Torres Vedras e os travesseiros de Sintra são apenas uma pequena amostra de uma doçaria conventual de séculos de história.\n\nA FLUXITOUR organiza tours gastronómicos privados e personalizados pelos melhores restaurantes, mercados e adegas de Portugal, garantindo uma experiência autêntica e memorável de descoberta da cultura alimentar portuguesa.`,
  },
  {
    slug: "vale-do-douro",
    title: "Vale do Douro: Vinhas, Paisagens e Tradição",
    excerpt: "Os terraços de vinha esculpidos nas encostas íngremes de xisto, as quintas centenárias onde nasce o melhor vinho do Porto do mundo, as aldeias de pescadores e viticultores que preservam tradições milenares fazem do Vale do Douro um dos territórios mais impressionantes e emocionantes de toda a Europa.",
    category: "Natureza",
    content: `O Vale do Douro é uma das paisagens vitícolas mais impressionantes do mundo. Declarado Património Mundial pela UNESCO em 2001, este território moldado durante séculos pela mão do homem e pelo curso sinuoso do Douro oferece uma experiência sensorial e visual verdadeiramente única que dificilmente se esquece. A paisagem dos terraços de xisto cobertos de vinha, que se estendem pelas encostas íngremes de ambas as margens do rio desde o Peso da Régua até à fronteira com Espanha, cria uma geometria natural de uma beleza abstracta e monumental que impressiona em qualquer estação do ano.\n\nA Primavera traz o verde intenso das folhas novas das videiras e a floração da amendoeira, que cobre os terraços de branco. O Verão oferece o calor seco e intenso do Douro Superior e as cores douradas das espigas de trigo que alternam com a vinha. O Outono é a estação mais mágica, com a vindima animando as quintas e as folhas da vinha a transformarem-se numa paleta de vermelhos, amarelos e laranjas que tingem as encostas de uma beleza impossível de descrever e difícil de capturar em fotografia. O Inverno revela a estrutura nua dos terraços e o Douro mais caudaloso e imponente.\n\nAs quintas do Douro são o coração desta região. A Quinta do Crasto, a Quinta do Vale Meão, a Quinta da Romaneira, a Quinta do Vallado e a Quinta do Seixo são apenas algumas das propriedades históricas que recebem visitantes para visitas guiadas às vinhas e às adegas, provas de vinho comentadas por enólogos experientes e refeições de produtos regionais com vistas panorâmicas sobre o Douro. Algumas oferecem também estadas de luxo em casas senhoriais restauradas onde é possível viver a experiência da quinta durante vários dias.\n\nA cidade do Peso da Régua, capital da região demarcada do Douro, tem um magnífico museu do Douro instalado numa antiga estação de caminho-de-ferro centenária, onde se pode aprender a história da produção do vinho do Porto e do vinho do Douro em exposições de grande qualidade. O comboio histórico do Douro, que parte da Régua e percorre a linha do Douro até ao Tua ao longo de paisagens de tirar o fôlego, é uma das experiências mais românticas e memoráveis que Portugal tem para oferecer.\n\nA FLUXITOUR oferece day trips exclusivos e personalizados ao Vale do Douro saindo de Lisboa ou do Porto, com paragens nas melhores quintas, refeições regionais incluídas sob pedido e motoristas que conhecem a região em profundidade, para uma experiência de luxo e autenticidade neste território único.`,
  },
  {
    slug: "lisboa-bairros-historicos",
    title: "Lisboa: Os Bairros Históricos que Não Pode Perder",
    excerpt: "Alfama sobe pela colina do castelo em ruelas labirínticas onde o fado ecoa entre as paredes de azulejo, Belém guarda os monumentos mais grandiosos da era dos Descobrimentos e a LX Factory pulsa com a energia criativa da Lisboa contemporânea, numa cidade que nunca para de surpreender.",
    category: "Cidades",
    content: `Lisboa é uma cidade de bairros, cada um com a sua personalidade, história, sons e aromas únicos. Conhecê-los em profundidade é a única forma de verdadeiramente perceber e sentir a alma desta capital que cresceu ao longo de séculos sobre sete colinas viradas para o Tejo e que hoje se afirma como um dos destinos mais apetecíveis e vibrantes de toda a Europa.\n\nAlfama é o bairro mais antigo de Lisboa e um dos mais emocionantes de explorar. As suas ruelas estreitas e labirínticas sobem pela colina do Castelo de São Jorge em curvas e contracurvas onde casas de fachada azulejada convivem com tasquinhas de bairro, miradouros com vistas de cortar a respiração e adegas onde o fado se canta com uma autenticidade que os palcos turísticos raramente conseguem igualar. O Castelo de São Jorge, de origem mourisca, domina toda a cidade a partir do seu cume e oferece uma perspectiva privilegiada sobre os telhados de Alfama e o estuário do Tejo.\n\nA Mouraria, bairro vizinho de Alfama, é considerada o berço do fado e tem vivido nas últimas décadas uma transformação notável, tornando-se num dos bairros mais multiculturais e criativos de Lisboa sem perder a sua identidade histórica e popular. A Praça do Intendente, recuperada e animada com esplanadas e lojas de design, é hoje um dos espaços públicos mais agradáveis da cidade.\n\nBelém guarda alguns dos mais importantes monumentos da história de Portugal e da humanidade. O Mosteiro dos Jerónimos, mandado construir pelo Rei D. Manuel I para celebrar a chegada de Vasco da Gama à India, é uma obra-prima do estilo manuelino português que combina elementos góticos com motivos marinhos e exóticos numa profusão decorativa única. A Torre de Belém, que vigiou durante séculos a entrada do Tejo, é o símbolo mais icónico de Lisboa e de Portugal no mundo. O Padrão dos Descobrimentos, erguido em 1960, celebra os navegadores que partiram de Belém para explorar o mundo. Não pode terminar a visita a Belém sem provar os originais pastéis de nata na Antiga Confeitaria de Belém, onde a receita, guardada em segredo desde 1837, produz diariamente dezenas de milhares de pastéis que são consumidos em fila de espera com canela e açúcar em pó.\n\nA LX Factory, instalada numa antiga complexo industrial do século XIX junto à Ponte 25 de Abril, é o polo criativo por excelência da Lisboa contemporânea. Aos fins-de-semana, o seu mercado de produtos locais e design português atrai milhares de visitantes que circulam entre restaurantes de cozinha de autor, livrarias independentes, lojas de roupa de criadores portugueses e espaços de arte e cultura num ambiente descontraído e cosmopolita.\n\nA FLUXITOUR disponibiliza tours privados personalizados pelos bairros históricos de Lisboa com motoristas guia que conhecem cada recanto, cada história e cada sabor desta cidade extraordinária, para que possa viver Lisboa de forma autêntica e memorável.`,
  },
  {
    slug: "comporta-destino-secreto",
    title: "Comporta: O Destino Secreto dos Europeus Mais Exigentes",
    excerpt: "Praias selvagens de areia fina que se estendem por quilómetros sem uma única construção à vista, arrozais de um verde impossível, pinhais perfumados e uma atmosfera de retiro exclusivo e discreto tornaram Comporta no destino mais procurado pelos europeus que querem escapar ao turismo de massas sem abdicar do conforto e da sofisticação.",
    category: "Praias",
    content: `Comporta é um dos segredos mais bem guardados de Portugal e, durante muito tempo, foi conhecida apenas por uma elite europeia que a descobriu décadas atrás e a foi mantendo como um refúgio privado de beleza natural sem paralelo. Esta pequena aldeia na Península de Setúbal, a apenas uma hora e meia de Lisboa, tornou-se nos últimos anos o destino preferido de quem procura beleza natural intocada, privacidade absoluta e uma sofisticação discreta que está nas antípodas do turismo de massas e das praias superlotadas do Algarve.\n\nA paisagem de Comporta é única em Portugal e rara na Europa. As praias estendem-se por dezenas de quilómetros de areia fina e dourada sem uma única construção à vista, bordeadas por pinhais perfumados e arrozais de um verde luminoso que fazem desta zona uma das mais fotogénicas e surpreendentes do país. A Praia de Comporta, a Praia do Carvalhal, a Praia de Pego e a Praia de Brejos da Carregueira oferecem esse raro privilégio de caminhar à beira-mar num silêncio quase absoluto, interrompido apenas pelo som das ondas e dos pássaros.\n\nA aldeia de Comporta tem uma oferta gastronómica que surpreende pela qualidade e pelo cuidado. Restaurantes como o Museu do Arroz, instalado numa antiga descascadora de arroz dos anos 50, o Comporta Café e o Rio Fontainhas servem peixe e marisco frescos em ambientes descontraídos e elegantes, com atenção ao produto local e ao design de interiores que transformam cada refeição numa experiência completa. O arroz de Comporta, cultivado nos campos vizinhos e servido com amêijoas ou com linguado, é um prato que resume a identidade gastronómica desta região.\n\nA Casa da Comporta e o Sublime Comporta são os dois principais hotéis de referência de luxo discreto nesta área, com piscinas entre os pinheiros, suites de design e restaurantes de grande qualidade que atraem uma clientela de toda a Europa que valoriza a privacidade e a beleza natural acima de qualquer outra comodidade. A chegada do cavalo como forma de explorar a paisagem, nomeadamente os passeios de cavalo pela praia ao amanhecer, é outra das experiências que definem o que há de mais especial em Comporta.\n\nA FLUXITOUR realiza transfers privados e em total conforto de Lisboa e do aeroporto de Lisboa para Comporta e para toda a Península de Setúbal, tornando esta escapadinha perfeita ainda mais especial desde o primeiro momento da viagem.`,
  },
  {
    slug: "evora-cidade-museu",
    title: "Évora: A Cidade-Museu no Coração do Alentejo",
    excerpt: "Um templo romano do século I que permanece surpreendentemente intacto no centro da cidade, uma catedral gótica imponente, a perturbante e fascinante Capela dos Ossos e uma cidade inteira de ruas medievais e casas caiadas de branco classificada como Património Mundial pela UNESCO fazem de Évora uma das cidades mais extraordinárias da Península Ibérica.",
    category: "Cultura",
    content: `Évora é uma das cidades mais bem preservadas da Europa e uma das mais extraordinárias de Portugal. Classificada como Património Mundial da Humanidade pela UNESCO em 1986, a capital do Alentejo é um autêntico museu a céu aberto onde dois mil anos de história convivem com a vida quotidiana de uma cidade universitária activa e vibrante, num equilíbrio raro que a torna única no panorama das cidades históricas europeias.\n\nO Templo Romano de Évora, datado do século I da nossa era, é o monumento mais impressionante da cidade e um dos mais bem conservados da Península Ibérica. As suas catorze colunas de granito coríntias com capitéis de mármore ainda de pé, em pleno centro histórico, evocam a grandeza da presença romana neste território com uma força que poucas ruínas conseguem transmitir. Ergue-se junto ao Museu de Évora, onde se pode contemplar uma notável colecção de arte sacra e pintura flamenga que testemunha a riqueza artística desta região durante os séculos XV e XVI.\n\nA Catedral de Évora, construída no século XIII em estilo gótico, é a maior catedral medieval de Portugal e domina o skyline da cidade a partir de qualquer ponto panorâmico. O seu claustro e o seu museu de arte sacra, com uma das mais ricas colecções de ourivesaria religiosa do país, merecem uma visita demorada. As torres assimétricas da fachada principal, resultado de diferentes campanhas de construção ao longo dos séculos, dão à catedral um carácter único e inconfundível.\n\nA Capela dos Ossos, adossada à Igreja de São Francisco, é de longe a atracção mais perturbante e inesquecível de Évora. Construída pelos frades franciscanos no século XVI com os ossos de mais de cinco mil monges exumados dos cemitérios de Évora, as paredes e colunas desta câmara estão literalmente revestidas de ossos e crânios humanos dispostos em padrões decorativos. A inscrição na entrada, "Nós ossos que aqui estamos pelos vossos esperamos", resume a mensagem franciscana de memento mori com uma directidade que ninguém que visita a chapel consegue ignorar.\n\nO Alentejo que rodeia Évora oferece também uma gastronomia de grande qualidade e identidade regional. As migas de pão com carne de porco, a carne de borrego assada com ervas aromáticas, os queijos de ovelha de Évora e de Serpa, os enchidos de porco preto alentejano e os vinhos de Reguengos e de Portalegre fazem dos almoços e jantares no Alentejo experiências de grande prazer gastronómico.\n\nA FLUXITOUR organiza day trips exclusivos e privados a Évora saindo de Lisboa, com paragens em herdades alentejanas para provas de vinho, visitas a produtores de azeite e refeições no campo, para uma experiência completa e autêntica do Alentejo profundo.`,
  },
  {
    slug: "cascais-vila-cosmopolita",
    title: "Cascais: A Vila Cosmopolita que Conquistou a Aristocracia Europeia",
    excerpt: "Desde que o Rei D. Luís I estabeleceu aqui a residência de verão da família real portuguesa em 1870, Cascais atraiu a aristocracia europeia, os artistas e os viajantes mais sofisticados do mundo com as suas praias magnéticas, a marina de luxo, os restaurantes de referência e uma atmosfera de elegância descontraída que poucas vilas costeiras conseguem igualar.",
    category: "Turismo",
    content: `Cascais tem uma longa e fascinante tradição como destino de eleição da aristocracia europeia, dos artistas e dos viajantes mais sofisticados e exigentes do continente. Quando o rei D. Luís I estabeleceu aqui a residência de verão da família real portuguesa em 1870, transformou definitivamente esta pitoresca vila de pescadores num polo cosmopolita que atraiu durante décadas a nata da sociedade europeia, incluindo membros de casas reais de vários países que aqui passavam os meses de Verão em villas e palacetes de requinte.\n\nHoje, Cascais mantém esse charme aristocrático mas democratizou-o numa mistura equilibrada de tradição e modernidade. A marina de Cascais, uma das mais movimentadas e bem equipadas da costa atlântica europeia, acolhe iates e veleiros de todo o mundo e anima o centro da vila com restaurantes de peixe fresco, bares de esplanada e lojas de artigos náuticos. O centro histórico, com as suas ruas pedestres e praças de calçada portuguesa, preserva o carácter de vila sem abdicar de uma oferta comercial e gastronómica de nível internacional.\n\nAs praias de Cascais são variadas e todas de grande qualidade. A Praia de Cascais, mesmo no centro da vila, é a mais animada e cómoda para quem fica alojado na zona central. A Praia da Rainha, mais pequena e resguardada, tem um charme especial. A Praia do Guincho, a seis quilómetros do centro de Cascais, é uma das mais espectaculares de Portugal: uma praia de duna selvagem e ventosa que avança pelo Atlântico numa paisagem de grande beleza e onde se pratica kitesurf e windsurf de alto nível.\n\nO Museu do Mar Rei D. Carlos, dedicado à oceanografia e à biologia marinha, é uma visita de grande qualidade que homenageia a paixão científica do rei que lhe dá o nome. O Museu da Música Portuguesa, instalado na Villa Palmela, guarda uma colecção notável de instrumentos musicais e documentação sobre a música tradicional portuguesa. A Boca do Inferno, uma formação rochosa a poucos minutos do centro onde o Atlântico entra numa fenda do rochedo com estrondo impressionante, é um dos pontos de interesse mais fotogénicos e visitados da região.\n\nA gastronomia de Cascais tem nomes de referência que justificam uma visita por si sós. O Furnas do Guincho, instalado no forte do mesmo nome junto à praia, serve peixe e marisco numa sala de tecto abobadado com vistas directas para o Atlântico. O Monte Mar na Praia Grande é outra referência para frutos do mar de qualidade excepcional num ambiente sofisticado e descontraído.\n\nO centro de Cascais fica a apenas 30 minutos de Lisboa e a FLUXITOUR oferece transfers diários e tours privados pela Linha de Cascais, Sintra e Estoril, permitindo combinar numa única saída os melhores pontos desta costa extraordinária.`,
  },
  {
    slug: "madeira-ilha-eterna-primavera",
    title: "Madeira: A Ilha da Eterna Primavera",
    excerpt: "Os canais das levadas que percorrem a ilha entre florestas de laurissilva classificadas pela UNESCO, os picos que emergem das nuvens a quase dois mil metros de altitude, o bordado artesanal que leva meses a executar, a poncha de aguardente de cana e as flores exuberantes que invadem cada jardim fazem da Madeira uma ilha de contrastes naturais e tradições únicas que surpreende e encanta qualquer viajante.",
    category: "Natureza",
    content: `A Madeira é, com frequência, descrita como o destino perfeito para todo o tipo de viajante, e é difícil encontrar um exagero nessa afirmação. Com um clima ameno e agradável durante todo o ano, uma flora de uma exuberância que impressiona até os viajantes mais viajados, paisagens de uma dramaticidade que vai do oceano aberto aos picos envoltos em nuvens, e uma cultura local com tradições artesanais e gastronómicas de grande riqueza e autenticidade, a chamada Ilha da Eterna Primavera justifica amplamente a sua reputação de destino único no panorama do turismo mundial.\n\nAs levadas são talvez o elemento mais característico e surpreendente da Madeira. Estes canais de irrigação construídos a partir do século XV para distribuir a água das zonas mais húmidas do norte e do interior para as plantações do sul têm ao longo do tempo sido transformados em percursos pedestres de grande beleza que permitem explorar a ilha a pé por caminhos que seguem a água entre faias, urzes gigantes, vinháticos e loureiros da floresta laurissilva, um ecossistema único no mundo que se preservou na Madeira desde a era terciária e que foi classificado como Património Mundial pela UNESCO em 1999.\n\nA Levada do Caldeirão Verde, a Levada das 25 Fontes e a Levada do Rei estão entre os percursos mais impressionantes e fotografados, conduzindo o caminhante por túneis escavados na rocha, ao longo de encostas vertiginosas e por vales de uma beleza que evoca paisagens de conto de fadas. O percurso da Vereda do Areeiro ao Pico Ruivo, que atravessa os três picos mais altos da ilha, oferece uma experiência de grande exigência física mas de recompensas paisagísticas incomparáveis, com vistas sobre um mar de nuvens que fica gravado para sempre na memória.\n\nO Funchal, capital da Madeira, é uma cidade de grande personalidade e oferta cultural. O Mercado dos Lavradores, o mais famoso mercado de flores e frutas tropicais da ilha, é um espectáculo de cores e aromas que não pode faltar na visita. O bordado da Madeira, executado por artesãs que demoram semanas ou meses a concluir uma única peça, é reconhecido mundialmente pela sua qualidade e delicadeza. O vinho da Madeira, produzido com castas únicas e envelhecido por um processo de estufagem que o torna único no mundo, é uma das grandes referências vinícolas do planeta.\n\nA FLUXITOUR assegura transfers premium entre o Aeroporto Internacional da Madeira e qualquer ponto da ilha em viaturas de alta gama, e organiza tours exclusivos e personalizados para descobrir os segredos e as maravilhas desta ilha extraordinária com todo o conforto e a atenção ao detalhe que caracteriza o serviço de excelência da FLUXITOUR.`,
  },
  {
    slug: "restaurantes-lisboa-top",
    title: "Os Melhores Restaurantes de Lisboa: Do Tradicional ao Contemporâneo",
    excerpt: "De tabernas centenárias de Alfama onde se servem petiscos e vinhos de talha a restaurantes com duas estrelas Michelin onde a alta cozinha portuguesa se reinventa com técnica e criatividade, Lisboa consolidou-se como uma das capitais gastronómicas mais excitantes e diversificadas da Europa, com uma oferta que surpreende pela qualidade, autenticidade e relação preço-qualidade.",
    category: "Gastronomia",
    content: `Lisboa transformou-se numa das capitais gastronómicas mais excitantes e diversificadas da Europa nas últimas duas décadas, e esse reconhecimento internacional está bem patente nos guias gastronómicos, nos prémios recebidos pelos seus chefs e na atenção crescente que a imprensa internacional dedica à cena culinária lisboeta. A cidade oferece hoje uma gama extraordinária de experiências culinárias, do mais tradicional ao mais vanguardista, do mais acessível ao mais exclusivo, com uma qualidade média que raramente desilude e uma autenticidade que se mantém apesar da pressão do turismo de massa.\n\nO Belcanto, do chef José Avillez na Rua da Misericórdia no Chiado, é a referência máxima da alta cozinha portuguesa contemporânea com as suas duas estrelas Michelin. Avillez interpreta os sabores e as tradições da cozinha portuguesa com uma técnica impecável e uma criatividade que surpreende sem alienar, num espaço elegante e de grande personalidade onde cada refeição é uma experiência gastronómica completa e memorável. O Feitoria, no Altis Belém, combina vistas directas sobre o Tejo com uma cozinha de produto de alta qualidade que celebra os ingredientes portugueses.\n\nPara uma experiência mais enraizada na tradição culinária de Lisboa, a Taberna da Rua das Flores no Chiado serve petiscos e pratos do dia que evocam a cozinha de avó com ingredientes de produção local e regional de grande qualidade, numa sala de pedra e madeira com a atmosfera de uma taberna centenária que de certa forma é o que sempre foi, apenas melhorada. A Cervejaria Ramiro, aberta em 1956 no Intendente, é a referência incontornável e absolutamente imprescindível para marisco fresco de qualidade excecional num ambiente informal e ruidoso que faz parte da experiência.\n\nO Time Out Market Lisboa, instalado no antigo Mercado da Ribeira junto ao Cais do Sodré desde 2014, foi o conceito que revolucionou a forma como lisboetas e turistas se relacionam com a gastronomia da cidade. Reunindo os melhores restaurantes, chefs e produtores de Lisboa num único espaço vibrante e acessível, com mesas partilhadas e uma oferta que vai do ramen ao bacalhau, da pizza artesanal ao pastel de nata, democratizou o acesso à melhor gastronomia da cidade sem perder a qualidade que justificou o modelo.\n\nO bairro de Santos e a zona ribeirinha entre Alcântara e Belém concentram alguns dos restaurantes mais interessantes da nova cena gastronómica lisboeta, onde jovens chefs com formação internacional trabalham ingredientes portugueses de produtores locais em conceitos contemporâneos que dialogam com as tradições culinárias do país de formas inovadoras e estimulantes.\n\nA FLUXITOUR pode incluir reservas antecipadas em restaurantes de topo e tours gastronómicos privados pelos mercados, tabernas e restaurantes mais representativos de Lisboa nos seus serviços personalizados, para uma experiência culinária que complementa e enriquece qualquer visita à capital portuguesa.`,
  },
  {
    slug: "obidos-vila-medieval",
    title: "Óbidos: A Vila Medieval Mais Encantadora de Portugal",
    excerpt: "As muralhas medievais do século XII abraçam esta joia do Oeste de Portugal em toda a sua extensão, as ruas são cobertas de flores em quase todas as épocas do ano, o castelo transformado em pousada guarda séculos de história e a famosa ginjinha servida em copinhos de chocolate negro é o símbolo gastronómico de uma vila que parece ter saído directamente de um conto de fadas.",
    category: "Cultura",
    content: `Óbidos é uma das vilas medievais mais bem preservadas da Península Ibérica e, sem dúvida, uma das mais fotogénicas e encantadoras de todo o Portugal. Rodeada na sua totalidade por muralhas do século XII que a abraçam como um abraço de pedra que dura há mais de oitocentos anos, esta joia do Oeste de Portugal é uma visita absolutamente obrigatória para qualquer viajante que queira compreender e sentir a riqueza histórica e patrimonial deste país.\n\nO castelo de Óbidos, erguido pelos Mouros e reconquistado pelos cristãos no século XII durante o reinado de D. Afonso Henriques, foi durante séculos a residência de rainhas de Portugal e é hoje uma das pousadas históricas mais charmosas e procuradas do país, alojada nas dependências do próprio castelo em aposentos que preservam elementos arquitectónicos medievais enquanto oferecem todo o conforto contemporâneo. Dormir dentro das muralhas de Óbidos é uma experiência que transporta o viajante para outra era com uma intensidade que nenhum hotel convencional consegue proporcionar.\n\nAs ruas de Óbidos, em particular a Rua Direita que traversa a vila de ponta a ponta, são uma das mais belas e fotogénicas de Portugal. As casas caiadas de branco com barras de cal azul e amarela, cobertas de buganvílias, rosas e outras trepadeiras floridas em praticamente todas as estações do ano, criam uma cenografia de uma beleza quase irreal que torna cada curva uma nova surpresa fotográfica e cada janela um quadro de composição perfeita.\n\nA ginjinha servida em copinhos de chocolate negro é o símbolo gastronómico de Óbidos e um prazer que não pode ser adiado nem substituído. Esta bebida espirituosa de ginja macerada em aguardente tem em Óbidos a sua expressão mais famosa e característica, servida em pequenos copos de chocolate que se comem depois de beber a ginjinha numa combinação de sabores que ficou gravada na memória de todos os que a experimentaram. As lojas de ginjinha proliferam pela Rua Direita e cada uma tem a sua própria receita e os seus segredos.\n\nA lagoa de Óbidos, a maior lagoa costeira de Portugal com 7 quilómetros de comprimento, fica a poucos minutos da vila e oferece horizontes de uma beleza melancólica e fotogénica que contrasta com a animação da vila medieval. A prática de kitesurf, windsurf e stand-up paddle é possível nas suas águas calmas e pouco profundas durante a maior parte do ano.\n\nÓbidos é também palco de eventos culturais e temáticos de grande qualidade ao longo do ano. O Festival Internacional de Chocolate em Março transforma a vila num paraíso para os amantes de chocolate com esculturas, demonstrações e degustações. O Mercado Medieval em Julho anima as ruas com mercadores, cavaleiros, músicos e artesãos em traje da época. O Óbidos Vila Natal em Dezembro cobre a vila de luzes e mercados de natal numa atmosfera de conto de fadas que atrai famílias de todo o país.\n\nA FLUXITOUR realiza day trips privados e personalizados a Óbidos saindo de Lisboa, com a possibilidade de combinar na mesma saída visitas ao Mosteiro de Alcobaça e à Batalha, dois dos monumentos mais importantes do gótico português e do Património Mundial da UNESCO, para um dia de cultura e história inesquecível.`,
  },
];

const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [articles, setArticles] = useState<StoredArticle[]>([]);
  const [generating, setGenerating] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [selected, setSelected] = useState<StoredArticle | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("fluxitour_admin") === "1") setAuthed(true);
  }, []);

  useEffect(() => {
    if (authed) setArticles(getArticles());
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === CREDENTIALS.user && password === CREDENTIALS.pass) {
      sessionStorage.setItem("fluxitour_admin", "1");
      setAuthed(true);
      setLoginError("");
    } else {
      setLoginError("Credenciais inválidas.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("fluxitour_admin");
    setAuthed(false);
    setUsername("");
    setPassword("");
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
      setSuccessMsg(`Artigo "${article.title}" gerado com sucesso!`);
      setGenerating(false);
      setTimeout(() => setSuccessMsg(""), 4000);
    }, 800);
  };

  const handleDelete = (id: string) => {
    deleteArticle(id);
    setArticles(getArticles());
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm border border-border section-card p-8">
          <div className="flex flex-col items-center mb-8">
            <Lock className="w-8 h-8 text-primary mb-3" />
            <h1 className="text-2xl font-display font-bold gold-text-gradient tracking-wider">FLUXITOUR</h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Administração</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-1.5">
                Utilizador
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-background border border-border text-foreground text-sm px-3 py-2.5 focus:outline-none focus:border-primary"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-muted-foreground block mb-1.5">
                Palavra-passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-border text-foreground text-sm px-3 py-2.5 focus:outline-none focus:border-primary"
                autoComplete="current-password"
              />
            </div>
            {loginError && (
              <p className="text-red-400 text-xs text-center">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full gold-gradient py-3 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all mt-2"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-display font-bold gold-text-gradient tracking-wider">FLUXITOUR</span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase border-l border-border pl-3">Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground">Gestão de Artigos</h2>
            <p className="text-sm text-muted-foreground mt-1">{articles.length} artigo{articles.length !== 1 ? "s" : ""} gerado{articles.length !== 1 ? "s" : ""}</p>
          </div>
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="gold-gradient px-6 py-3 text-xs font-bold tracking-wider uppercase text-primary-foreground hover:opacity-95 transition-all shadow-md disabled:opacity-60 flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${generating ? "animate-spin" : ""}`} />
            {generating ? "A gerar..." : "Gerar Artigo"}
          </button>
        </div>

        {successMsg && (
          <div className="mb-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm px-4 py-3">
            {successMsg}
          </div>
        )}

        {articles.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-sm">Nenhum artigo gerado ainda.</p>
            <p className="text-xs mt-1">Clique em "Gerar Artigo" para criar o primeiro.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <div
                key={article.id}
                className="section-card border border-border flex flex-col overflow-hidden cursor-pointer hover:border-primary/40 transition-colors group"
                onClick={() => setSelected(article)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-sm font-display font-semibold text-foreground mb-2 leading-snug flex-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-1">{article.date}</p>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(article.id); }}
                    className="flex items-center gap-2 text-xs text-red-400 hover:text-red-300 transition-colors mt-auto self-start"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Article Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-background border border-border w-full max-w-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
            <div className="p-8">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-3 block">
                {selected.category}
              </span>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2 leading-snug">
                {selected.title}
              </h2>
              <p className="text-xs text-muted-foreground mb-6">{selected.date} · {selected.author}</p>
              <p className="text-sm text-muted-foreground italic mb-6 border-l-2 border-primary pl-4">
                {selected.excerpt}
              </p>
              <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {selected.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

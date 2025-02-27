import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public modalController: ModalController){

  }
  
  async presentModal(book: any){
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: {'value': book}
    });
    await modal.present();
  }
  public livros:Array<object> = [
    {'imagem':'/assets/image/la-selva.png',
     'titulo': 'La Selva de los Elefantes Blancos',
     'subtitulo': 'Megaproyectos y extractivismos en la Amazonía ecuatoriana',
     'autores':'Japhy Wilson e Manuel Bayón',
     'ano': '2017',
     'editora': 'Ediciones Abya Yala',
     'sinopse': 'Quem disse que na selva equatoriana não há elefantes? Existem E eles são enormes (e caros). Dois pesquisadores: Japhy Wilson e Manuel Bayón foram procurá-los. E descobriram que estão protegidos pelas "fantasias utópicas" e por um modelo de conquista da Amazônia que, desde a era da borracha, foi reproduzido. Em sua intrépida expedição, os autores deste livro, a partir de sua perspectiva crítica, revelam suas descobertas e as compartilham com os leitores: um personagem digno de uma nova versão de Fitzcarraldo; duas cidades fantasmas batizadas de Cidades do Milênio, para as quais a montanha começa a crescer e que certamente serão engolidas pela floresta em pouco tempo; um centro de estudos de nome shuar que vai do biossocialismo à bio-tecnologia; um porto para cobrir a rota Manta-Manaus em que as barcaças permanecem imóveis, as quais, na primeira viagem, foram encalhadas nos bancos de areia que formam o curso do rio Napo. Esses elefantes são brancos, vestidos em neocolonialismo e trazem com eles a desapropriação de território. Depois os elefantes vão a um imperador e a uma revolução, nus, com um grande projeto: extrair recursos não renováveis ​​e, em troca, compensar e urbanizar algumas comunidades indígenas. Os índios, por sua vez, fazem uso de seu direito à resistência, riem quando vêem passar, enquanto bebem uma enorme tigela de chicha. Eles riem, porque a história das conquistas constantes é repetida.',
     'site': ''
    }, 
    {'imagem':'/assets/image/el-sur.png',
     'titulo': 'Educação Ambiental Desde El Sur',
     'subtitulo': '',
     'autores':'Anne Kassiadou, Celso Sánchez, Daniel Renaud Camargo, Marcelo Aranda Stortti e Rafael Nogueira Costa',
     'ano': '2018',
     'editora': 'Nupem Editora',
     'sinopse': 'O livro "Educação Ambiental Desde El Sur" apresenta-se como produto de um esforço coletivo do Grupo de Estudos de Educação Ambiental Desde El Sur, voltado a pensar e praticar uma educação ambiental crítica. Os autores apresentam com clareza sua compreensão da vertente crítica da educação ambiental, situando-a no terreno das lutas pelos bens comuns, no diálogo com a Ecologia Política e na busca da construção de um pensamento decolonial, com ênfase às raízes latino-americanas. O livro agrega um conjunto de artigos que, embora possam ser lidos de modo independente, conectam-se coerentemente pela temática e pela fundamentação teóricometodológica – seja promovendo reflexões teóricas sobre o tema, seja elaborando análises de experiências de educação ambiental ou análises de conjuntura envolvendo temas afins. Suas discussões trazem uma contribuição importante, voltada à construção e ao fortalecimento de uma educação ambiental crítica, perpassada por um olhar que valorizaa alteridade e não se subordina à tradição colonial de pesquisa e educação. Giuliana Franco Leal (NUPEM/UFRJ)',
     'site': ''
    },
    {'imagem':'/assets/image/alternativas-sistemicas.png',
     'titulo': 'Alternativas Sistêmicas',
     'subtitulo': 'Bem Viver, descrescimento, comuns, ecofeminismo, direitos da Mãe Terra e desglobalização',
     'autores':'Pablo Solón',
     'ano': '2019',
     'editora': 'Elefante',
     'sinopse': 'Este livro parte da premissa de que estamos vivendo uma crise sistêmica que só pode ser resolvida com alternativas sistêmicas. As crises ambiental, econômica, social, geopolítica, institucional e civilizatória são partes de um todo. É impossível resolver qualquer uma delas sem abordar conjuntamente as demais. Elas se retroalimentam. Por isso, estratégias unidimensionais não conseguirão resolver essa crise sistêmica. Pelo contrário, podem agravá-la. Longe de se autoimplodir pelas próprias contradições, o capitalismo está se reconfigurando à procura de novos mecanismos para aumentar suas taxas de lucro, até extrair a última gota de sangue das pessoas e do planeta. Tudo é mercantilizável. Tudo é uma “oportunidade” para novos negócios. Não há limites. A superexploração, o hiperconsumo e o desperdício são os motores desse sistema, que exige crescimento infinito de um planeta finito. O aumento da desigualdade e a destruição dos ciclos vitais da natureza são seu legado. No entanto, o capitalismo não é o único elemento que levou a essa crise sistêmica. O produtivismo e o extrativismo que a ele deram origem — e que sobreviveram inclusive em economias que queriam superar o capitalismo — são dois fatores-chave. A ideia de uma sociedade florescente, baseada em um contínuo crescimento econômico, levou a romper com o equilíbrio climático alcançado pela Terra há onze mil anos. A isso temos de somar as estruturas e a cultura patriarcal, que sobrevive há séculos e que alimenta diferentes formas de concentração e exercício do poder em benefício de elites privadas, tanto no espaço público como no privado. O capitalismo não criou o patriarcado, mas o acentuou de uma forma particular ao invisibilizar o trabalho reprodutivo e de cuidado que as mulheres e outros grupos humanos desenvolvem em espaços não mercantilizados. Por último, a visão antropocêntrica dominante considera o ser humano como superior, separado da natureza e acima dela. Assim como o patriarcado considera a mulher um objeto, o antropocentrismo considera que a natureza pode ser explorada e transformada em benefício humano. Essa visão de mundo, que já existia em sociedades pré-capitalistas, cresceu exponencialmente com a revolução industrial e os avanços da tecnologia. Portanto, quando falamos em construir alternativas sistêmicas, estamos nos referindo não apenas à superação do capitalismo, mas a estratégias que sejam capazes de enfrentar e superar o patriarcado, o produtivismo-extrativismo e o antropocentrismo. Essas alternativas não surgem no vazio. Emergem de lutas, experiências, iniciativas, vitórias, derrotas e do ressurgimento dos movimentos sociais, e aparecem em um processo muitas vezes contraditório de análises, prática e propostas que são validadas na realidade. A diversidade de realidades que interagem em nosso planeta requer alternativas sistêmicas diversas. Por isso é que falamos em “alternativas”, no plural, e que o objetivo deste livro reside em promover um diálogo construtivo e criativo entre essas diferentes visões.',
     'site': ''
    },
    {'imagem':'/assets/image/brasil-africa.png',
     'titulo': 'Brasil - África',
     'subtitulo': 'Cooperação e Investimentos',
     'autores':'Elsa Sousa Kraychete',
     'ano': '',
     'editora': '',
     'sinopse': '',
     'site': ''
    },
    {'imagem':'/assets/image/tuira.png',
     'titulo': 'Tuíra #01',
     'subtitulo': 'Ativismo Indígena, Maio de 68, Cuidado Pessoa Ativista, Feminismo Negro, Tecnociência Feminista, Ocupações',
     'autores':'Luciana Ferreira, Cássio Martinho, Salvador Schavelzon, Narrira Lemos, Carolina Munis, Internacional Situacionista, Crimethinc, Jaque Conceição, Silvio Munari',
     'ano': '2019',
     'editora': 'Escola de Ativismo',
     'sinopse': 'Uma revista que é muitas. Que não faz contar o que acontece na hora em que acontece. Que toma distância, mas não é distante. Que faz avaliação, que faz análise, mas que (quase) não faz citação. Que extrapola a situação. Que faz paradoxo, que transita pelo arco do devir. 1968, 2018. 50 anos de paradoxos. Nada mudou, nada está no (mesmo) lugar. Anarco-situacionista-caiapó. Facão na cara do desenvolvimentismo. Violência é o que cometem contra nós. Inundam nossa história, matam nossa comida, nos expulsam de tudo aquilo que somos nós: nossa terra, nossa vida. Para gerar luz que não ilumina nossas casas. Que nos joga diretamente nas sombras. Não nos enganemos: do coração das trevas, e não da pacificação, nasce a rebelião. Não só Tuíra, mas tantas tuiragens: múltiplas vozes – da aldeia para o mundo – fazem das lutas poesia e revolução. Colocar a revolução a serviço da poesia! Quando vozes negras, indígenas, trans, das bordas se levantam, o mundo estremece! Fazem ruir o mundo de mentiras erigido pelos kubēn. E não nos peça para termos calma! Amplificaremos nossas vozes por todos os meios necessários. O que pode uma ação? Somos tantos ativistas, tantos são os ativismos. Um mosaico. Não tem encaixe perfeito. Perfeito é o encaixe que buscamos no sentido de multiplicar essas lutas e essas vidas que se encontram na vida e nas lutas. Qual é a sua forma de lutar? Corpos ativistas. Co-fundimos e confundimos: corpos e prazeres. Somos experimentação, atravessamento tecno-ciência-xamã, acelerando as partículas do pensamento. Transformar o mundo segundo nosso desejo: eis a carne da teoria! Quanto custa entregar o cuidado de nossos corpos aos impérios? Quanto custa entregar o tempo a uma causa? Quanto custa manter a opacidade disso que chamamos civilização? Ocupar, ou desocupar, as terras, as casas, as escolas, as ruas, os imaginários e os corações. Inventar outra gramática. Destruir a organização dominante da vida. Criar outro mundo – um mundo onde caibam muitos mundos.',
     'site':'https://static.wixstatic.com/ugd/b542e1_68b4e0a3ac13430290d5bd28f2926364.pdf'
    },
    {'imagem':'/assets/image/ilha-mare.png',
     'titulo': 'A Arte de Caminhar',
     'subtitulo': 'Ilha de Maré',
     'autores':'Karla Brunet',
     'ano': '2018',
     'editora': 'EcoArte | Poext UFBA',
     'sinopse': 'Este livro é uma coletânia de artigos e produções artísticas resultantes do projeto A Arte de Caminhar, realizado na Ilha de Maré, Salvador, BA, Brasil. O projeto foi contemplado pelo Edital Proext/UFBA ACCS 2018.1.',
     'site': ''
    },
    {'imagem':'/assets/image/para.png',
     'titulo': 'Apropriacionismo e Substitucionismo dos Recursos Pesqueiros no Estado do Pará',
     'subtitulo': 'A "pesca no pé da barragem" da UHE de Tucuruí e o Parque Aquícola Breu Branco III',
     'autores':'Mariana Neves Cruz Mello',
     'ano': '',
     'editora': 'Itacaiúnas',
     'sinopse': '',
     'site': 'https://static.wixstatic.com/ugd/b542e1_6b0ede3b89bb4f04a140db586422d836.pdf'
    },
    {'imagem':'/assets/image/latinoamericana.jpg',
     'titulo': 'Ecología Política Latinoamericana Vol. 1',
     'subtitulo': 'Pensamiento crítico, diferencia latinoamericana y rearticulación epistémica',
     'autores':'Héctor Alimonda, Catalina Toro Pérez y Facundo Martín',
     'ano': '2017',
     'editora': 'CLACSO',
     'sinopse': 'Ecologia Política na América Latina desde o seu surgimento está rapidamente se tornando uma relação ativa de troca contínua e feedback com diversos movimentos e lutas estrelado por conflitos em diferentes escalas e circunstâncias, reunindo crítica dos modelos de desenvolvimento de força hegemônica e delineando com eles outros futuros possíveis. Nesse sentido, os dois volumes que apresentamos mantêm o diálogo sobre os debates epistemológicos da Ecologia Política Latino-Americana, ao mesmo tempo em que lhes são confiadas as práticas teóricas, políticas e territoriais que caracterizaram nossa região. Esta marca de origem, baseia-se na convicção do link, tensa e conflituosa, mas também momentos criativos e produtivos entre o imperativo do aperfeiçoamento de ferramentas teóricas e políticas para assumir análise crítica ea construção contínua de alternativas para saques, a desapropriação e a devastação socioambiental. Da apresentação de Catalina Toro Pérez e Facundo Martín',
     'site': ''
    },
    {'imagem':'/assets/image/latinoamericana2.jpg',
     'titulo': 'Ecología Política Latinoamericana Vol. 2',
     'subtitulo': 'Pensamiento crítico y horizontes emancipatorios en clave sur',
     'autores':'Héctor Alimonda, Catalina Toro Pérez y Facundo Martín',
     'ano': '2017',
     'editora': 'CLACSO',
     'sinopse': 'Ecologia Política na América Latina desde o seu surgimento está rapidamente se tornando uma relação ativa de troca contínua e feedback com diversos movimentos e lutas estrelado por conflitos em diferentes escalas e circunstâncias, reunindo crítica dos modelos de desenvolvimento de força hegemônica e delineando com eles outros futuros possíveis. Nesse sentido, os dois volumes que apresentamos mantêm o diálogo sobre os debates epistemológicos da Ecologia Política Latino-Americana, ao mesmo tempo em que lhes são confiadas as práticas teóricas, políticas e territoriais que caracterizaram nossa região. Esta marca de origem, baseia-se na convicção do link, tensa e conflituosa, mas também momentos criativos e produtivos entre o imperativo do aperfeiçoamento de ferramentas teóricas e políticas para assumir análise crítica ea construção contínua de alternativas para saques, a desapropriação e a devastação socioambiental. Da apresentação de Catalina Toro Pérez e Facundo Martín',
     'site': ''
    },
    {'imagem':'/assets/image/amazonas.png',
     'titulo': 'Amazonas - A História de um Rio',
     'subtitulo': '',
     'autores':'Karla Brunet',
     'ano': '',
     'editora': '',
     'sinopse': 'O projeto Amazonas – Histórias de um rio, é uma cartografia audiovisual interativa/afetiva, que foi elaborado a partir da reunião de material audiovisual, feito durante uma expedição da professora Karla Brunet pela Amazônia, tendo como ponto de partida Santarém e ponto de chegada Belém. Nesta cartografia, há um compartilhamento de histórias, observamos o trajeto feito de canoa, chegando aos seus quase mil quilômetros, também é possível ver vídeos e dados estatísticos da região. O mapa apesar de apresentar uma ordem cronológica, também permite a navegação por diferentes tópicos sem necessariamente haver uma ordem, assim quem visita o site tem a possibilidade de criar seu próprio roteiro, indo direto a pontos que mais aguçam sua curiosidade.',
     'site': ''
    },
    {'imagem':'/assets/image/granjeras.png',
     'titulo': 'Granjeras del Mar:Luchas y Sueños en Coliumo',
     'subtitulo': 'Historia del Área de Manejo del Sindicato N 2',
     'autores':'G.L. Gallardo F., F. Saunders, M. Ávila, A. Isakson, I. Greco, P. Moscoso y D. Rodríguez',
     'ano': '2018',
     'editora': 'Andros Impresores',
     'sinopse': 'O propósito do livro é visualizar a história e aspirações das parceiras do sindicato n° 2, cuja luta por melhores horizontes tem mais de uma década e que foi seriamente afectada pelo terremoto e tsunami de 2010. Segundo expressam os autores em O texto este propósito implica o enraizamento do sindicato num contexto de sustentabilidade futura, entendendo como tal que o sindicato e as suas parceiras possam manter-se no tempo sem esgotar os recursos, ou prejudicar gravemente o meio ambiente o livro visa além disso contribuir para a discussão geral Sobre as áreas de manejo e, em especial, sobre a entrada das mulheres para a pesca no Chile.',
     'site': ''
    },
    {'imagem':'/assets/image/fracking.jpg',
     'titulo': 'Fracking e exploração de recursos não convencionais no Brasil: riscos e ameaças',
     'subtitulo': '',
     'autores':'Júlio Holanda',
     'ano': '2017',
     'editora': 'IBASE - Instituto de Análises Sociais e Econômicos',
     'sinopse': 'A obra espera contribuir com o debate público acerca dos riscos e ameaças do fracking, e principalmente, da discussão mais ampla sobre a geração de energia, controle social e participação democrática, definição de políticas públicas e modelo de desenvolvimento do nosso país. Vários autores contribuem com uma discussão sincera e ampla sobre o tema a partir de vários pontos de vista. Vale a pena a leitura!',
     'site': 'https://static.wixstatic.com/ugd/b542e1_d581c9d7ee46466d9ae5a29dc01a85a3.pdf'
    }
  ];
}

import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "app/components/modal/modal.component";
interface padrinho {
  nome: string;
  image: string;
  categoria: string;
  description: string;
}
@Component({
  selector: "app-padrinhos",
  templateUrl: "./padrinhos.component.html",
  styleUrls: ["./padrinhos.component.scss"],
})

export class PadrinhosComponent implements OnInit {
  padrinhos: padrinho[] = [
    {
      nome: "Antonni e Patrícia",
      image: "./assets/img/padrinhos/bolzan-mota.jpg",
      categoria: "Amigos dos noivos",
      description: `Antonni, é o melhor amigo da noiva, se conheceram durante uma fase muito desafiadora na vida de ambos e os obstáculos e
      adversidades que compartilharam os tornaram bons e fiéis amigos. Logo em seguida surgiu a Patrícia na vida do Antonni, menina meiga e
      sorridente, impossível não se encantar com ela. Agora os dois estão esperando um pacotinho de amor, que se chamará Aylla Celine. A
      presença deles é fundamental ao lado da noiva nesse dia tão especial.`,
    },
    // Emilly
    {
      nome: "Emilly Vitória",
      image: "./assets/img/padrinhos/vitoria.jpg",
      categoria: "Irmã da noiva",
      description: `Ela é amiga e parceira incondicional da noiva, juntas compartilharam momentos icônicos que ficarão gravados em suas
      memórias para sempre. É com quem ela sempre pode contar independente da distância e do tamanho do desafio a enfrentar .
      Acompanhou o relacionamento desde os primeiros passos e sempre ofereceu todo apoio e carinho ao casal.
      No dia do casamento, ela é essencial ao lado da noiva pois desde o início é a testemunha de todo amor que o casal compartilha.`,
    },
    // Fernanda
    {
      nome: "Fernanda",
      image: "./assets/img/padrinhos/nanda.jpg",
      categoria: "Irmã do noivo",
      description: `Única irmã do noivo entre 5 irmãos, Fernanda sempre foi uma menina alegre, divertida e companheira. Desde pequena, sempre foi bastante independente, adora aventuras e viagens. Atualmente, está na faculdade e mora sozinha em Santa Catarina. Por ser a única menina da família, Fernanda sempre foi a queridinha da turma. Estudiosa, linda e inteligente (nisso ela puxou o irmão 😅), é a escolha perfeita para estar ao lado dos noivos no grande dia.

      `,
    },
    // Rafa
    {
      nome: "Rafael",
      image: "./assets/img/padrinhos/rafa.jpg",
      categoria: "Irmáo gêmeo do noivo",
      description: `Literalmente conhece o noivo desde a barriga da mãe, irmão gêmeo do noivo, Rafael sempre esteve presente na vida do
      noivo, praticamente eram 'os gêmeos' antes de serem Rafael e Gustavo.
      Acompanhou a relação do casal desde o começo, nunca mediu esforços para ajuda-los, sempre apoiou a relação e se fez presente sempre
      que foi possível, até mesmo quando o casal se mudou.
      Rafael é carta marcada, figurinha carimbada ao lado dos noivos, mas de preferência com um terno bem diferente, para não ser
      confundido com o noivo 😅`,
    },
    // Deise
    {
      nome: "Deise e Reginaldo",
      image: "./assets/img/padrinhos/regi-deise.jpg",
      categoria: "Irmã e cunhado da noiva",
      description: `Casal perfeito,  juntos há mais de 20 anos, são um verdadeiro exemplo de amor
      e companheirismo no relacionamento. Deise é a irmã mais velha da noiva, mulher forte e extremamente preocupada com os irmãos, é
      considerada uma segunda mãe, mas sem deixar de ser a amiga e confidente. Reginaldo é o cunhado preferido ( ele é o único kkk)
      brincadeiras a parte, o cara é incrível mesmo, é um homem de caráter admirável, sempre disposto a ajudar. Eles são um exemplo de
      parceria e lealdade, sempre presentes nos momentos mais importantes, no grande dia dos noivos não seria diferente!`,
    },
    // Franco
    {
      nome: "Franco e Jessica",
      image: "./assets/img/padrinhos/franco-jessica.jpg",
      categoria: "Amigos dos Noivos",
      description: `Franco sempre foi o mais velho do grupo de amigos de infância do noivo, o que não significa muita coisa pois também não era o exemplo de responsabilidade, já que 2 anos a mais não fazia tanta diferença. Franco sempre foi o parceiro pra tudo, qualquer que seja a proposta ele sempre topa quando o assunto é junção entre amigos, e se tá marcado,  ele não falta. É o tipo de amigo q sempre oferece carona não importa pra onde seja ou a hora que for, que sempre tá disposto a contribuir seja com o que for que tu precise. Franco e Jéssica estão juntos a bastante tempo, e se dão muito, e um dos motivos é que Jéssica é divertida e apesar de debochada e zueira, é sempre parceira pra tudo. Ambos formam um casal top que tiveram uma filha muito fofa, que conseguiu puxar a cara do pai e a personalidade exata da mãe, Valentina, afilhada dos noivos, ainda não fez 1 aninhos, fará 3 dias depois do nosso grande dia, já foi em mais junções que o Said (e nem é zueira 😅) e se tudo der certo será também nossa daminha de honra. Franco, Jessica e Valentina com certeza estarão presentes no nosso dia pois já fazem parte da nossa história. `,
    },
    // Alam
    {
      nome: "Alam e Ticyane",
      image: "./assets/img/padrinhos/alam-ticy.jpg",
      categoria: "Amigos dos Noivos",
      description: `A família do Alam e do noivo se conhecem há anos, por isso, Alam e Gustavo são amigos de infância, de jogar bola no pátio e virar noites jogando Playstation 2. Alam é o amigo mais antigo do noivo e ponto em comum de outras grandes amizades como o Franco e o Said, muitos momentos engraçados e memoráveis passaram juntos. Há alguns anos, Alam é casado com Ticyane, casamento do qual Gustavo foi padrinho. Ticy é uma mulher guerreira (tem que ser para aguentar o Alam 😅), do grupo, é a mais séria, mas sempre certeira nos comentários e alfinetadas de zueira. Desse casamento eles tiveram a pequena Teresa, uma criança linda e divertida, que será a daminha de honra.
Alam e Ticy são muito importantes na vida dos noivos e por isso não podiam faltar ao lado deles nesse dia de festa.`,
    },
    // Diogo
    {
      nome: "Diogo",
      image: "./assets/img/padrinhos/diogo.jpg",
      categoria: "Amigo dos Noivos",
      description: `Diogo é amigo do noivo desde os tempos de colégio, amizade que começou com conversas/discussões sobre futebol e piadas
      sem graça (algo que não mudou ao longo do tempo) o espírito 5° serie resume essa amizade. Diogo é dentre os amigos dos noivos, o que
      mais os visitou quando se mudaram e na maioria das vezes está lá esperando quando eles vão pra cidade Natal, ou seja, é alguém que dá
      pra contar a todo momento e claro que não seria diferente no momento mais importante do casal. O que também é de se esperar com o
      Diogo presente são piadas, zueiras e muita risada.`,
    },
    // Said
    {
      nome: "Said",
      image: "./assets/img/padrinhos/said.jpg",
      categoria: "Amigo dos Noivos",
      description: `Said é amigo de muitos anos do noivo, se conheceram através do Alam, de quem o Said é primo. Geralmente se reuniam quando crianças para jogar futebol no vídeo game, onde claro o Said sempre perdia 😅. Os noivos terão sorte de ter o Said no dia do casamento, pois geralmente o próprio falta até nos roles que ele mesmo marca… brincadeiras a parte, Said é um amigo leal, inteligente, e que sempre tá disponível para conversar não importa o assunto q seja. É um integrante importante do grupo que não pode faltar no casamento.`,
    },
    // Elis
    {
      nome: "Elis",
      image: "./assets/img/padrinhos/elis.jpg",
      categoria: "Amiga dos noivos",
      description: `É uma mulher incrível, alegre, sempre de bem com a vida,  a noiva e ela se conheceram no trabalho, logo que a noiva
      mudou-se para POA, durante um período bastante intenso de mudanças na vida profissional. Elis foi a pessoa que apareceu como uma luz
      na escuridão, com sua alegria e positividade, sempre disposta a tornar melhor os dias das pessoas a sua volta, ofereceu apoio e
      amizade transformando dias difíceis em dias felizes. No momento mais especial da vida dos noivos ela ocupa um lugar em especial ao
      lado deles.`,
    },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.fetchPadrinhos();
    this.sortPadrinhosAlphabetically();
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.padrinho = this.padrinhos;
  }
  fetchPadrinhos() {
    // Your code to fetch padrinhos
    // After fetching, call sort
    this.sortPadrinhosAlphabetically();
  }
  sortPadrinhosAlphabetically() {
    this.padrinhos.sort((a, b) => a.nome.localeCompare(b.nome));
  }
}

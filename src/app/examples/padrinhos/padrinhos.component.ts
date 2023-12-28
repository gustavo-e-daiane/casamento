import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "app/components/modal/modal.component";
interface padrinho {
  nome: string,
  image: string,
  categoria: string,
  description: string
}
@Component({
  selector: "app-padrinhos",
  templateUrl: "./padrinhos.component.html",
  styleUrls: ["./padrinhos.component.scss"],
})

export class PadrinhosComponent implements OnInit {
  padrinhos: padrinho[] = [
    {
      nome: "Antony e Patrícia",
      image: "./assets/img/padrinhos/bolzan-mota.jpg",
      categoria: "Colegas da noiva",
      description: `Antoni e Patrícia Antoni,
      é o melhor amigo da noiva, se conheceram durante uma
      fase muito desafiadora na vida de ambos e os obstáculos e
      adversidades que compartilharam os tornaram bons e fiéis amigos.
      Logo em seguida surgiu a Patrícia na vida do Antony, menina meiga
      e sorridente, impossível não se encantar com ela.Agora Os dois estão
      esperando um pacotinho de amor, que se chamará Aylla Celine.
      A presença deles é fundamental ao lado da noiva nesse dia tão especial.`
    },
    {
      nome: "Emilly Vitória",
      image: "./assets/img/padrinhos/vitoria.jpg",
      categoria: 'Irmã da noiva',
      description: `Ela é amiga e parceira incondicional da noiva, juntas compartilharam momentos icônicos que ficaram gravados em suas memórias para sempre. É com quem ela sempre pode contar independente da distância e do tamanho do desafio a enfrentar .
      Acompanhou o relacionamento desde os primeiros passos e sempre ofereceu todo apoio e carinho ao casal.
      No dia do casamento, ela é essencial ao lado da noiva pois desde o início é a testemunha de todo amor que o casal compartilha.`
    },
    {
      nome: "Adrian",
      image: "./assets/img/padrinhos/adrian.jpg",
      categoria: ' melhor amiga da noiva',
      description: `Uma amizade que começou na escola e já dura mais de 15 anos, Adrian é mais do que uma confidente, ela é aquela pessoa que está sempre ao seu lado, ouvindo, apoiando e compartilhando momentos inesquecíveis.
      Nesse dia tão importante, ela é a pessoa perfeita para estar ao lado da noiva, celebrando o amor e a amizade.`
    },
    {
      nome: "Rafa",
      image: "./assets/img/padrinhos/rafa.jpg",
      categoria: 'Irmáo gêmeo do noivo',
      description: `Literalmente conhece o noivo desde a barriga da mãe, irmão gêmeo do noivo, Rafael sempre esteve presente na vida do
      noivo, praticamente eram 'os gêmeos' antes de serem Rafael e Gustavo.
      Acompanhou a relação do casal desde o começo, nunca mediu esforços para ajuda-los, sempre apoiou a relação e se fez presente sempre
      que foi possível, até mesmo quando o casal se mudou.
      Rafael é carta marcada, figurinha carimbada ao lado dos noivos, mas de preferência com um terno bem diferente, para não ser
      confundido com o noivo 😅`
    },
    {
      nome: "Deise e Reginaldo",
      image: "./assets/img/padrinhos/regi-deise.jpg",
      categoria: 'Irmã da noiva e marído',
      description: `casal`
    },
    {
      nome: "Franco e Jessica",
      image: "./assets/img/padrinhos/franco-jessica.jpg",
      categoria: 'Casal',
      description: `casal`
    },
    {
      nome: "Alam e Ticy",
      image: "./assets/img/padrinhos/alam-ticy.jpg",
      categoria: 'Casal',
      description: `casal`
    },
    {
      nome: "Diogo",
      image: "./assets/img/padrinhos/diogo.jpg",
      categoria: 'Amigo dos Noivos',
      description: `Diogo é amigo do noivo desde os tempos de colégio, amizade que começou com conversas/discussões sobre futebol e piadas sem graça (algo que não mudou ao longo do tempo) o espírito 5° serie resume essa amizade. Diogo é dentre os amigos dos noivos, o que mais os visitou quando se mudaram e na maioria das vezes está lá esperando quando eles vão pra cidade Natal, ou seja, é alguém que dá pra contar a todo momento e claro que não seria diferente no momento mais importante do casal. O que também é de se esperar com o Diogo presente são piadas, zueiras e muita risada.`
    },
    {
      nome: "Said",
      image: "./assets/img/padrinhos/said.jpg",
      categoria: 'turco',
      description: `turco`
    },
    {
      nome: "Elis",
      image: "./assets/img/padrinhos/elis.jpg",
      categoria: 'colega da noiva',
      description: `colega`
    },
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.padrinho = this.padrinhos;
  }
}

import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalContent } from "app/components/modal/modal.component";
interface padrinho {
  nome: string;
  categoria: string,
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
      nome: "Antony e Patrícia",
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
      categoria: 'Irmã da noiva',
      description: `Ela é amiga e parceira incondicional da noiva, juntas compartilharam momentos icônicos que ficaram gravados em suas memórias para sempre. É com quem ela sempre pode contar independente da distância e do tamanho do desafio a enfrentar .
Acompanhou o relacionamento desde os primeiros passos e sempre ofereceu todo apoio e carinho ao casal.
No dia do casamento, ela é essencial ao lado da noiva pois desde o início é a testemunha de todo amor que o casal compartilha.` },
    {
      nome: "Adrian",
      categoria: ' melhor amiga da noiva',
      description: `Uma amizade que começou na escola e já dura mais de 15 anos, Adrian é mais do que uma confidente, ela é aquela pessoa que está sempre ao seu lado, ouvindo, apoiando e compartilhando momentos inesquecíveis.
      Nesse dia tão importante, ela é a pessoa perfeita para estar ao lado da noiva, celebrando o amor e a amizade.`
    },
    {
      nome: "Adrian",
      categoria: ' melhor amiga da noiva',
      description: `Uma amizade que começou na escola e já dura mais de 15 anos, Adrian é mais do que uma confidente, ela é aquela pessoa que está sempre ao seu lado, ouvindo, apoiando e compartilhando momentos inesquecíveis.
      Nesse dia tão importante, ela é a pessoa perfeita para estar ao lado da noiva, celebrando o amor e a amizade.`
    },
    {
      nome: "Rafa",
      categoria: 'Irmáo gêmeo do noivo',
      description: `Irmão`
    },
    {
      nome: "Deise e Reginaldo",
      categoria: 'Irmã da noiva e marído',
      description: `casal`
    },
    {
      nome: "Franco e Jessica",
      categoria: 'Casal',
      description: `casal`
    },
    {
      nome: "Alam e Ticy",
      categoria: 'Casal',
      description: `casal`
    },
    {
      nome: "Diogo",
      categoria: 'vesgo',
      description: `vesgo`
    },
    {
      nome: "Said",
      categoria: 'turco',
      description: `turco`
    },
    {
      nome: "Elis",
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

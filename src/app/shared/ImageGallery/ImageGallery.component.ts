import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';


interface Image {
  class: string;
  src: string;
  alt: string;
  left: number;
  top: number;
  rotation: number;
}

@Component({
  selector: 'app-image-gallery',
  template: `
    <div>
      <div class="image-container">
        <img #imgElement *ngFor="let image of images" [src]="image.src" [alt]="image.alt"
             [style.left.px]="image.left" [style.top.px]="image.top"
             [style.transform]="'rotate(' + image.rotation + 'deg)'"
             [style.margin.px]="10">
      </div>
    </div>
  `,
  styles: [`
    .image-container {
      position: relative;
      width: 100%;
      height: 300px; /* Ajuste conforme necessário */
    }

    img {
      position: absolute;
      width: 15%; /* Ajuste conforme necessário */
      cursor: pointer;
    }
  `]
})
export class ImageGalleryComponent implements AfterViewInit {
  images: Image[] = [
    { src: './assets/img/padrinhos/alam-ticy.jpg', class:'alam-ticy', alt: 'Descrição da imagem 1', left: null, top: null, rotation: null },
    { src: './assets/img/padrinhos/said.jpg', class:'said', alt: 'Descrição da imagem 2', left: null, top: null , rotation:null},
    { src: './assets/img/padrinhos/diogo.jpg', class:'diogo', alt: 'Descrição da imagem 3', left: null, top: null , rotation:null},
    { src: './assets/img/padrinhos/rafa.jpg', class:'rafa', alt: 'Descrição da imagem 3', left: null, top: null , rotation:null},
    { src: './assets/img/padrinhos/adrian.jpg', class:'adrian', alt: 'Descrição da imagem 3', left: null, top: null , rotation:null},
    { src: './assets/img/padrinhos/bolzan-mota.jpg', class:'bolzan-mota', alt: 'Descrição da imagem 3', left: null, top: null , rotation:null},
    { src: './assets/img/padrinhos/franco-jessica.jpg', class:'franco-jessica', alt: 'Descrição da imagem 3', left: null, top: null , rotation:null},
  ];

  @ViewChildren('imgElement') imgElements!: QueryList<ElementRef>;

  constructor(private cdRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.imgElements.changes.subscribe((_) => {
      this.randomizeImageProperties(this.imgElements);
      this.cdRef.detectChanges(); // Detecta as mudanças imediatamente após alterar as propriedades
    });

    this.randomizeImageProperties();
    this.cdRef.detectChanges(); // Detecta as mudanças imediatamente após alterar as propriedades
  }

  randomizeImageProperties(i=null): void {
    // Verifica se as imagens estão disponíveis antes de prosseguir.
    if (this.imgElements.length === 0) {
      console.error('No images found.');
      return;
    }
    this.images.forEach(image => {
      image.left = this.getRandomPosition();
      image.top = this.getRandomPositionTop(i);
      image.rotation = this.getRandomRotation();
    });
  }

  getRandomPosition(): number {
    const imageElements = this.imgElements.toArray();
    if (imageElements.length === 0) {
          console.error('No images found.');
            return 120; // Retorna 0 ou um valor padrão caso não haja imagens.
          }

          const larguraPai = imageElements[0].nativeElement.parentElement.offsetWidth;
          const larguraImagem = imageElements[0].nativeElement.offsetWidth;
          const maxLeft = larguraPai - larguraImagem;
          return Math.floor(Math.random() * (maxLeft)); // Subtract margin from maxLeft
        }

  getRandomPositionTop(i): number {
          console.log(i);
          const imageElements = this.imgElements.toArray();
          if (imageElements.length === 0) {
            console.error('No images found.');
            return 0; // Retorna 0 ou um valor padrão caso não haja imagens.
          }

          const alturaPai = imageElements[0].nativeElement.parentElement.offsetHeight;
          let alturaImagem = imageElements[0].nativeElement.height;
          const maxTop = alturaPai - alturaImagem;
          console.log(imageElements[0].nativeElement);
          return Math.floor(Math.random() * (maxTop)); // Subtract margin from maxTop
        }

        getRandomRotation(): number {
          // Retorna um ângulo entre -45 e 45 graus.
          return Math.floor(Math.random() * 90) - 45;
        }
      }
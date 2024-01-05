import { Component, OnInit, Renderer2 } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.scss"],
})
export class ComponentsComponent implements OnInit {
  page = 4;
  page1 = 5;
  fotos: string[] = [];
  focus;
  focus1;
  focus2;
  date: { year: number; month: number };
  model: NgbDateStruct;
  constructor(private renderer: Renderer2,
  ) {
   }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    for (let i = 1; i <= 23; i++) {
      this.fotos.push(i + '.jpeg');
    }
    let input_group_focus = document.getElementsByClassName("form-control");
    let input_group = document.getElementsByClassName("input-group");
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener("focus", function () {
        input_group[i].classList.add("input-group-focus");
      });
      input_group[i].children[0].addEventListener("blur", function () {
        input_group[i].classList.remove("input-group-focus");
      });
    }
  // Assume this is in a .ts file
  const copyButton: HTMLButtonElement = document.querySelector("#copyButton")!;
  const stringToCopy: string = "43b86bbd-6542-4b77-9e43-a2b71ae47f76";

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(stringToCopy)
      .then(() => {
        const originalText: string = copyButton.textContent!;
        copyButton.textContent = "Copiado!";
        // Revert the button text back to original after some time
        setTimeout(() => {
          copyButton.textContent = originalText;
        }, 2000); // 2 seconds delay
      })
      .catch((error: Error) => {
        console.error("Falha ao copiar:", error);
      });
  });
  }

  isMobile(): boolean {
    return window.innerWidth <= 599;
  }
}

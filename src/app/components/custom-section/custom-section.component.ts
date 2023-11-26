import { Component, Input } from "@angular/core";

@Component({
  selector: "custom-section",
  templateUrl: "./custom-section.component.html",
  styles: [],
})
export class CustomSectionComponent {
  @Input() classSection: string;
  @Input() title: string;
  @Input() classImg: string;
  @Input() idSection: string;
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() imageSrcset: string;
  @Input() imageTitle: string;
  containsDark(classSection: string): boolean {
    return classSection && classSection.includes("dark");
  }
}

import { Component, VERSION } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title = `Angular ${VERSION.major} i18n with ngx-translate`;
  public customNumberValue = 12345;

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(["tr", "en", "se"]);
  }

  public get translationFormTypeScript(): string {
    return this.translateService.instant("example5.fromTypeScript");
  }

  public onChange(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage);
  }
}

import { Component } from "@angular/core";
import {ReflectiveInjector} from "@angular/core";
import {AppServices} from "./appservices";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "list",
    templateUrl: "./list/list.xml"
})
export class ListComponent {
  private wordArray:Array<string>=[];
  public currentText:string;
  public source:Array<Object>;
  constructor(private routerExtensions:RouterExtensions){
    AppServices.readJSONWords().then((data)=>{this.wordArray= <Array<string>>data;});
    this.source=[""];
  }
  public changeText(event){
    let text=this.currentText.toLowerCase().trim();
    this.source=[];
    this.wordArray.forEach((word:string) => {
      if(word.startsWith(text)){
          this.source.push({
            "text":word
          });
        }
    });
  }
  public showDef(evt){
    this.routerExtensions.navigate(["showdef",evt.view.text]);
  }
}

import { Component } from "@angular/core";
import {Http} from "@angular/http";
import { PageRoute } from "nativescript-angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

function toValidData(data) {
  let newMeaning:Array<Object>=[],ptext:string;
  data.forEach(function(meaning) {
    ptext = String(meaning.text+" ")
        .replace(/&nbsp;/g, ' ')
        .replace(/(&rsquo;)|(&#39;)/, '\'')
        .replace(/&lt;/g,'<')
        .replace(/&gt;/g,'>')
        .replace(/(&quot;)|(&ldquo;)|(&rdquo;)/g, '"')
            .replace(/<[^>]+>/gm, '');
    newMeaning.push({"text":ptext});
  });
  return newMeaning;
}

@Component({
    selector: "showdef",
    templateUrl: "./showdef/showdef.xml"
})
export class ShowDefComponent {
  public source:Array<Object>=[{"text":"Loading... Please wait!"}];
  public word:string;
  constructor(private http:Http,private pageRoute: PageRoute,private routerExtensions:RouterExtensions) {
    // use switchMap to get the latest activatedRoute instance
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => {
        this.word=params["id"];
        this.http.get("https://glosbe.com/gapi/translate?from=en&dest=en&format=json&phrase="+this.word)
            .toPromise()
            .then((response)=>{
              let result=response.json();
              this.source=toValidData(result.tuc[0].meanings);
            }).catch((event)=>{alert('Please check your internet Connectivity!'); this.routerExtensions.back(); });
          });
  }

}

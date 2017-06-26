import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {ListComponent} from "./list/list.component";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http"
import { NgModule} from "@angular/core";
import {ShowDefComponent} from "./showdef/showdef.component";
const routes=[
  {path:"", component:ListComponent},
  {path: "list", component: ListComponent},
  {path: "showdef/:id", component: ShowDefComponent}
];

@NgModule({
  bootstrap:[AppComponent],
  imports:[
    HttpModule,
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations:[
    ListComponent,
    ShowDefComponent,
    AppComponent
  ]
})
export class AppModule{}

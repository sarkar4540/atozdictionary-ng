"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var list_component_1 = require("./list/list.component");
var app_component_1 = require("./app.component");
var http_2 = require("@angular/http");
var core_1 = require("@angular/core");
var showdef_component_1 = require("./showdef/showdef.component");
var routes = [
    { path: "", component: list_component_1.ListComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "showdef/:id", component: showdef_component_1.ShowDefComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        imports: [
            http_2.HttpModule,
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(routes)
        ],
        declarations: [
            list_component_1.ListComponent,
            showdef_component_1.ShowDefComponent,
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLGdGQUE4RTtBQUM5RSxzREFBdUU7QUFDdkUsd0RBQW9EO0FBQ3BELGlEQUE2QztBQUM3QyxzQ0FBd0M7QUFDeEMsc0NBQXdDO0FBQ3hDLGlFQUE2RDtBQUM3RCxJQUFNLE1BQU0sR0FBQztJQUNYLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUMsOEJBQWEsRUFBQztJQUNsQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7SUFDeEMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQztDQUNuRCxDQUFDO0FBa0JGLElBQWEsU0FBUztJQUF0QjtJQUF1QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXhCLElBQXdCO0FBQVgsU0FBUztJQWhCckIsZUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFDLENBQUMsNEJBQVksQ0FBQztRQUN4QixPQUFPLEVBQUM7WUFDTixpQkFBVTtZQUNWLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsK0JBQXVCO1lBQ3ZCLGlDQUF3QjtZQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsWUFBWSxFQUFDO1lBQ1gsOEJBQWE7WUFDYixvQ0FBZ0I7WUFDaEIsNEJBQVk7U0FDYjtLQUNGLENBQUM7R0FDVyxTQUFTLENBQUU7QUFBWCw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0xpc3RDb21wb25lbnR9IGZyb20gXCIuL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCJcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTaG93RGVmQ29tcG9uZW50fSBmcm9tIFwiLi9zaG93ZGVmL3Nob3dkZWYuY29tcG9uZW50XCI7XG5jb25zdCByb3V0ZXM9W1xuICB7cGF0aDpcIlwiLCBjb21wb25lbnQ6TGlzdENvbXBvbmVudH0sXG4gIHtwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50fSxcbiAge3BhdGg6IFwic2hvd2RlZi86aWRcIiwgY29tcG9uZW50OiBTaG93RGVmQ29tcG9uZW50fVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOltBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOltcbiAgICBIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczpbXG4gICAgTGlzdENvbXBvbmVudCxcbiAgICBTaG93RGVmQ29tcG9uZW50LFxuICAgIEFwcENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZXt9XG4iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("nativescript-angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
function toValidData(data) {
    var newMeaning = [], ptext;
    data.forEach(function (meaning) {
        ptext = String(meaning.text + " ")
            .replace(/&nbsp;/g, ' ')
            .replace(/(&rsquo;)|(&#39;)/, '\'')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/(&quot;)|(&ldquo;)|(&rdquo;)/g, '"')
            .replace(/<[^>]+>/gm, '');
        newMeaning.push({ "text": ptext });
    });
    return newMeaning;
}
var ShowDefComponent = (function () {
    function ShowDefComponent(http, pageRoute, routerExtensions) {
        var _this = this;
        this.http = http;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.source = [{ "text": "Loading... Please wait!" }];
        // use switchMap to get the latest activatedRoute instance
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.word = params["id"];
            _this.http.get("https://glosbe.com/gapi/translate?from=en&dest=en&format=json&phrase=" + _this.word)
                .toPromise()
                .then(function (response) {
                var result = response.json();
                _this.source = toValidData(result.tuc[0].meanings);
            }).catch(function (event) { alert('Please check your internet Connectivity!'); _this.routerExtensions.back(); });
        });
    }
    return ShowDefComponent;
}());
ShowDefComponent = __decorate([
    core_1.Component({
        selector: "showdef",
        templateUrl: "./showdef/showdef.xml"
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.PageRoute, router_2.RouterExtensions])
], ShowDefComponent);
exports.ShowDefComponent = ShowDefComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2RlZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG93ZGVmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxzQ0FBbUM7QUFDbkMsc0RBQXdEO0FBQ3hELHNEQUE2RDtBQUM3RCx1Q0FBcUM7QUFDckMsbUJBQWlCO0FBQ2pCLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFFOUIscUJBQXFCLElBQUk7SUFDdkIsSUFBSSxVQUFVLEdBQWUsRUFBRSxFQUFDLEtBQVksQ0FBQztJQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVMsT0FBTztRQUMzQixLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDO2FBQzNCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUM7YUFDbEMsT0FBTyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLCtCQUErQixFQUFFLEdBQUcsQ0FBQzthQUN6QyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQU1ELElBQWEsZ0JBQWdCO0lBRzNCLDBCQUFvQixJQUFTLEVBQVMsU0FBb0IsRUFBUyxnQkFBaUM7UUFBcEcsaUJBYUM7UUFibUIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRjdGLFdBQU0sR0FBZSxDQUFDLEVBQUMsTUFBTSxFQUFDLHlCQUF5QixFQUFDLENBQUMsQ0FBQztRQUcvRCwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVFQUF1RSxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzNGLFNBQVMsRUFBRTtpQkFDWCxJQUFJLENBQUMsVUFBQyxRQUFRO2dCQUNiLElBQUksTUFBTSxHQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZ0JBQWdCO0lBSjVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDLENBQUM7cUNBSXlCLFdBQUksRUFBb0Isa0JBQVMsRUFBMEIseUJBQWdCO0dBSHpGLGdCQUFnQixDQWtCNUI7QUFsQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuZnVuY3Rpb24gdG9WYWxpZERhdGEoZGF0YSkge1xuICBsZXQgbmV3TWVhbmluZzpBcnJheTxPYmplY3Q+PVtdLHB0ZXh0OnN0cmluZztcbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG1lYW5pbmcpIHtcbiAgICBwdGV4dCA9IFN0cmluZyhtZWFuaW5nLnRleHQrXCIgXCIpXG4gICAgICAgIC5yZXBsYWNlKC8mbmJzcDsvZywgJyAnKVxuICAgICAgICAucmVwbGFjZSgvKCZyc3F1bzspfCgmIzM5OykvLCAnXFwnJylcbiAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywnPCcpXG4gICAgICAgIC5yZXBsYWNlKC8mZ3Q7L2csJz4nKVxuICAgICAgICAucmVwbGFjZSgvKCZxdW90Oyl8KCZsZHF1bzspfCgmcmRxdW87KS9nLCAnXCInKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxbXj5dKz4vZ20sICcnKTtcbiAgICBuZXdNZWFuaW5nLnB1c2goe1widGV4dFwiOnB0ZXh0fSk7XG4gIH0pO1xuICByZXR1cm4gbmV3TWVhbmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2hvd2RlZlwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2hvd2RlZi9zaG93ZGVmLnhtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNob3dEZWZDb21wb25lbnQge1xuICBwdWJsaWMgc291cmNlOkFycmF5PE9iamVjdD49W3tcInRleHRcIjpcIkxvYWRpbmcuLi4gUGxlYXNlIHdhaXQhXCJ9XTtcbiAgcHVibGljIHdvcmQ6c3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCxwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgLy8gdXNlIHN3aXRjaE1hcCB0byBnZXQgdGhlIGxhdGVzdCBhY3RpdmF0ZWRSb3V0ZSBpbnN0YW5jZVxuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy53b3JkPXBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KFwiaHR0cHM6Ly9nbG9zYmUuY29tL2dhcGkvdHJhbnNsYXRlP2Zyb209ZW4mZGVzdD1lbiZmb3JtYXQ9anNvbiZwaHJhc2U9XCIrdGhpcy53b3JkKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpPT57XG4gICAgICAgICAgICAgIGxldCByZXN1bHQ9cmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICB0aGlzLnNvdXJjZT10b1ZhbGlkRGF0YShyZXN1bHQudHVjWzBdLm1lYW5pbmdzKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChldmVudCk9PnthbGVydCgnUGxlYXNlIGNoZWNrIHlvdXIgaW50ZXJuZXQgQ29ubmVjdGl2aXR5IScpOyB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpOyB9KTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG59XG4iXX0=
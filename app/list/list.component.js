"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appservices_1 = require("./appservices");
var router_1 = require("nativescript-angular/router");
var ListComponent = (function () {
    function ListComponent(routerExtensions) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.wordArray = [];
        appservices_1.AppServices.readJSONWords().then(function (data) { _this.wordArray = data; });
        this.source = [""];
    }
    ListComponent.prototype.changeText = function (event) {
        var _this = this;
        var text = this.currentText.toLowerCase().trim();
        this.source = [];
        this.wordArray.forEach(function (word) {
            if (word.startsWith(text)) {
                _this.source.push({
                    "text": word
                });
            }
        });
    };
    ListComponent.prototype.showDef = function (evt) {
        this.routerExtensions.navigate(["showdef", evt.view.text]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "./list/list.xml"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyw2Q0FBMEM7QUFDMUMsc0RBQTZEO0FBTTdELElBQWEsYUFBYTtJQUl4Qix1QkFBb0IsZ0JBQWlDO1FBQXJELGlCQUdDO1FBSG1CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFIN0MsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUlqQyx5QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSSxLQUFJLENBQUMsU0FBUyxHQUFpQixJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNNLGtDQUFVLEdBQWpCLFVBQWtCLEtBQUs7UUFBdkIsaUJBVUM7UUFUQyxJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFXO1lBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDZixNQUFNLEVBQUMsSUFBSTtpQkFDWixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sK0JBQU8sR0FBZCxVQUFlLEdBQUc7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxhQUFhO0lBSnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUM7cUNBS3FDLHlCQUFnQjtHQUoxQyxhQUFhLENBc0J6QjtBQXRCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JlZmxlY3RpdmVJbmplY3Rvcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QXBwU2VydmljZXN9IGZyb20gXCIuL2FwcHNlcnZpY2VzXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC9saXN0LnhtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICBwcml2YXRlIHdvcmRBcnJheTpBcnJheTxzdHJpbmc+PVtdO1xuICBwdWJsaWMgY3VycmVudFRleHQ6c3RyaW5nO1xuICBwdWJsaWMgc291cmNlOkFycmF5PE9iamVjdD47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zKXtcbiAgICBBcHBTZXJ2aWNlcy5yZWFkSlNPTldvcmRzKCkudGhlbigoZGF0YSk9Pnt0aGlzLndvcmRBcnJheT0gPEFycmF5PHN0cmluZz4+ZGF0YTt9KTtcbiAgICB0aGlzLnNvdXJjZT1bXCJcIl07XG4gIH1cbiAgcHVibGljIGNoYW5nZVRleHQoZXZlbnQpe1xuICAgIGxldCB0ZXh0PXRoaXMuY3VycmVudFRleHQudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgdGhpcy5zb3VyY2U9W107XG4gICAgdGhpcy53b3JkQXJyYXkuZm9yRWFjaCgod29yZDpzdHJpbmcpID0+IHtcbiAgICAgIGlmKHdvcmQuc3RhcnRzV2l0aCh0ZXh0KSl7XG4gICAgICAgICAgdGhpcy5zb3VyY2UucHVzaCh7XG4gICAgICAgICAgICBcInRleHRcIjp3b3JkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgc2hvd0RlZihldnQpe1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzaG93ZGVmXCIsZXZ0LnZpZXcudGV4dF0pO1xuICB9XG59XG4iXX0=
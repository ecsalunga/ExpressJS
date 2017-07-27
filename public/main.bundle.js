webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button md-raised-button (click)=\"loadTester()\">Load Component</button>\r\n</div>\r\n<ng-container #viewChild></ng-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("../../../../../src/app/core.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(core, DA) {
        this.core = core;
        DA.LoadProducts();
    }
    AppComponent.prototype.loadTester = function (name) {
        this.core.loadComponent("app-product-list");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.core.viewChild = this.viewChild;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('viewChild', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ViewContainerRef */]) === "function" && _a || Object)
], AppComponent.prototype, "viewChild", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataAccess */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataAccess */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__("../../../../../src/app/core.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tester_tester_component__ = __webpack_require__("../../../../../src/app/tester/tester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product/list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product/detail/product-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__tester_tester_component__["a" /* TesterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__core__["a" /* Core */], __WEBPACK_IMPORTED_MODULE_6__data__["a" /* DataAccess */], __WEBPACK_IMPORTED_MODULE_6__data__["b" /* DataLayer */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__tester_tester_component__["a" /* TesterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Core; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Core = (function () {
    function Core(resolver) {
        this.resolver = resolver;
    }
    Core.prototype.loadComponent = function (selector) {
        var factories = Array.from(this.resolver['_factories'].values());
        var component = factories.find(function (item) { return item.selector === selector; });
        if (component) {
            this.clearComponent();
            this.selector = selector;
            var factory = this.resolver.resolveComponentFactory(component.componentType);
            var created = this.viewChild.createComponent(factory);
            this.component = created;
        }
    };
    Core.prototype.clearComponent = function () {
        this.selector = "";
        if (this.component) {
            this.component.destroy();
        }
    };
    return Core;
}());
Core = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ComponentFactoryResolver */]) === "function" && _a || Object])
], Core);

var _a;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../../../../src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataAccess; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataLayer = (function () {
    function DataLayer() {
    }
    return DataLayer;
}());
DataLayer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DataLayer);

var DataAccess = (function () {
    function DataAccess(DL) {
        this.DL = DL;
    }
    DataAccess.prototype.LoadProducts = function () {
        this.DL.Products = new Array();
        for (var x = 0; x < 10; x++) {
            var product = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* ProductInfo */]("P00" + x);
            product.BuyPrice = x;
            product.SellPrice = x;
            product.Quantity = x + 12;
            product.Description = 'Sample Product ' + x;
            this.DL.Products.push(product);
        }
    };
    DataAccess.prototype.SaveProduct = function (item) {
        // save here
        if (this.DL.Product) {
            this.DL.Product.Code = item.Code;
            this.DL.Product.Description = item.Description;
            this.DL.Product.BuyPrice = item.BuyPrice;
            this.DL.Product.SellPrice = item.SellPrice;
            this.DL.Product.Quantity = item.Quantity;
        }
        else
            this.DL.Products.push(item);
    };
    return DataAccess;
}());
DataAccess = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [DataLayer])
], DataAccess);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInfo; });
/* unused harmony export SellInfo */
/* unused harmony export TransactionInfo */
var ProductInfo = (function () {
    function ProductInfo(code) {
        this.Code = code;
    }
    return ProductInfo;
}());

var SellInfo = (function () {
    function SellInfo(productCode, quntity) {
        this.ProductCode = productCode;
        this.Quantity = quntity;
    }
    return SellInfo;
}());

var TransactionInfo = (function () {
    function TransactionInfo() {
    }
    return TransactionInfo;
}());

//# sourceMappingURL=models.js.map

/***/ }),

/***/ "../../../../../src/app/product/detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <fieldset>\r\n      <legend>Product Detail</legend>\r\n      <div>\r\n        <label for=\"txtCode\">Code</label>\r\n        <input id=\"txtCode\" [(ngModel)]=\"model.Code\" />\r\n      </div>\r\n      <div>\r\n        <label for=\"txtDescription\">Description</label>\r\n        <input id=\"txtDescription\" [(ngModel)]=\"model.Description\" />\r\n      </div>\r\n      <div>\r\n        <label for=\"txtBuy\">Buy</label>\r\n        <input id=\"txtBuy\" [(ngModel)]=\"model.BuyPrice\" />\r\n      </div>\r\n      <div>\r\n        <label for=\"txtSell\">Sell</label>\r\n        <input id=\"txtSell\" [(ngModel)]=\"model.SellPrice\" />\r\n      </div>\r\n      <div>\r\n        <label for=\"txtQuantity\">Quantity</label>\r\n        <input id=\"txtQuantity\" [(ngModel)]=\"model.Quantity\" />\r\n      </div>\r\n\r\n      <div>\r\n        <button md-raised-button (click)=\"Save()\">Save</button>\r\n        <button md-raised-button (click)=\"LoadProductList()\">Back to list</button>\r\n      </div>\r\n    </fieldset>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("../../../../../src/app/core.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("../../../../../src/app/models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = (function () {
    function ProductDetailComponent(core, DA, DL) {
        this.core = core;
        this.DA = DA;
        this.DL = DL;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* ProductInfo */]("");
        if (this.DL.Product) {
            this.model.Code = this.DL.Product.Code;
            this.model.Description = this.DL.Product.Description;
            this.model.BuyPrice = this.DL.Product.BuyPrice;
            this.model.SellPrice = this.DL.Product.SellPrice;
            this.model.Quantity = this.DL.Product.Quantity;
        }
    }
    ProductDetailComponent.prototype.Save = function () {
        this.DA.SaveProduct(this.model);
        this.LoadProductList();
    };
    ProductDetailComponent.prototype.LoadProductList = function () {
        this.core.loadComponent("app-product-list");
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/product/detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/detail/product-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataAccess */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data__["a" /* DataAccess */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data__["b" /* DataLayer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data__["b" /* DataLayer */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <td>\r\n          CODE\r\n        </td>\r\n        <td>\r\n          PRICE\r\n        </td>\r\n        <td>\r\n          QUANTITY\r\n        </td>\r\n        <td>\r\n          ACTIONS\r\n        </td>\r\n      </tr>\r\n    </thead>\r\n    <ng-container *ngFor=\"let product of DL.Products\">\r\n      <tr>\r\n        <td>\r\n          {{product.Code}}\r\n        </td>\r\n        <td>\r\n          {{product.SellPrice}}\r\n        </td>\r\n        <td>\r\n          {{product.Quantity}}\r\n        </td>\r\n        <td>\r\n          <button md-raised-button (click)=\"SelectProduct(product)\">View</button>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("../../../../../src/app/core.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(core, DL) {
        this.core = core;
        this.DL = DL;
    }
    ProductListComponent.prototype.SelectProduct = function (product) {
        this.DL.Product = product;
        this.core.loadComponent("app-product-detail");
    };
    ProductListComponent.prototype.ngOnInit = function () { };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/product/list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core__["a" /* Core */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data__["b" /* DataLayer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data__["b" /* DataLayer */]) === "function" && _b || Object])
], ProductListComponent);

var _a, _b;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/tester/tester.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tester/tester.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <md-input-container>\r\n      <input (click)=\"picker.open()\" mdInput [mdDatepicker]=\"picker\" placeholder=\"Select date\">\r\n      <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n    </md-input-container>\r\n    <md-datepicker #picker></md-datepicker>\r\n  </div>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <td>\r\n          CODE\r\n        </td>\r\n        <td>\r\n          PRICE\r\n        </td>\r\n        <td>\r\n          QUANTITY\r\n        </td>\r\n      </tr>\r\n    </thead>\r\n    <ng-container *ngFor=\"let product of DL.Products\">\r\n      <tr>\r\n        <td>\r\n          {{product.Code}}\r\n        </td>\r\n        <td>\r\n          {{product.SellPrice}}\r\n        </td>\r\n        <td>\r\n          {{product.Quantity}}\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tester/tester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TesterComponent = (function () {
    function TesterComponent(DL) {
        this.DL = DL;
    }
    TesterComponent.prototype.ngOnInit = function () {
    };
    return TesterComponent;
}());
TesterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-tester',
        template: __webpack_require__("../../../../../src/app/tester/tester.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tester/tester.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data__["b" /* DataLayer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data__["b" /* DataLayer */]) === "function" && _a || Object])
], TesterComponent);

var _a;
//# sourceMappingURL=tester.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
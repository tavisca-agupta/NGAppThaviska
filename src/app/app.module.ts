import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// use createCustomElement for making NG-Component as angular
// element
import {createCustomElement} from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/productcompopnent/app.product.component';
import { ProductReactiveFormComponent } from './components/productreactiveformcompopnent/app.productreactiveform.component';
import { TableDirectiveComponent } from './directives/table.component.directive';
import { SimpleElementComponent } from './litelementcomponents/app.simple.element.component';

// import all LitElements from its path
import './litelementapp/app.simpleelement.litelement';
import { RadioListComponent } from './directives/app.rediolist.component';
import { UtilityServiceComponent } from './components/utilityservicecomponent/app.utilityservice.component';
import { DeptSenderComponent } from './components/masterdetailscommunication/app.deptsender.component';
import { EmpReceiverComponent } from './components/masterdetailscommunication/app.empreceiver.component';
import { HttpServiceComponent } from './components/httpservicecomponent/app.httpservice.component';
import { SecureCallComponent } from './components/securecallcomponent/app.securecall.component';
import { Test1ElementComponent } from './elements/app.test1.element';
import { ColorDirective } from './directives/app.color.directive';
import { ColorDirectiveComponent } from './components/directivecomponent/app.directive.component';
import { HomeComponent } from './routingapp/app.home.component';
import { AboutComponent } from './routingapp/app.about.component';
import { ContactComponent } from './routingapp/app.contact.component';
import { MainComponent } from './routingapp/app.main.component';




// imports: array that imports all standard Angular moaulds and custom
// extenal modules for the current NG App.

// declatrations: array, used for declaring all components, deirectives
// for the current NG app. All components will be initialized in declartion

// providers: array, this is a DI container to register all NG
// services so that they can be injected in other NG Objects

// bootstrap : array, that contains one or more components to be
// rendered when AppModule is loaded in browser

// entryComponent: for Custom Elements (Depricated in NG 9)

// BrowserModule: The mandatory module for BootStrap NGModule
// Per NG Application we can have 'Only-One' instance of BrowserModule

@NgModule({
  declarations: [
    AppComponent, ProductComponent,
    ProductReactiveFormComponent,
    TableDirectiveComponent,
    SimpleElementComponent,
    RadioListComponent,
    UtilityServiceComponent,
    DeptSenderComponent,
    EmpReceiverComponent,
    HttpServiceComponent,
    SecureCallComponent,
    Test1ElementComponent,
    ColorDirective,
    ColorDirectiveComponent,
    HomeComponent, AboutComponent, ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  // use entryComponent so that the Angular Elements will be
  // set for DOM Execution
  entryComponents: [Test1ElementComponent],
  bootstrap: [MainComponent]
})
export class AppModule {
 // Inject the Injector object in ctor, this will be used
 // to register the Component as Element and the HTML Tag
 // will be exposed to Browser's DOM
 constructor(private injector: Injector){

    const test1Element = createCustomElement(Test1ElementComponent, {injector: this.injector});
    // define the Custom HTML Tag so that the Element will be
    // referred in the DOM
    customElements.define('app-test1-element', test1Element);
 }


}

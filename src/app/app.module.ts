
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; /* to get dta from api import HttpClient  */
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { ApiComponent } from './api/api.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { InternshipComponent } from './internship/internship.component';
import { RegestrationFormComponent } from './regestration-form/regestration-form.component';
import { ApiPostComponent } from './api-post/api-post.component';
import { ApiUpdateComponent } from './api-update/api-update.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    ChildComponent,
    PipeComponent,
    ApiComponent,
    ReactiveFormComponent,
    InternshipComponent,
    RegestrationFormComponent,
    ApiPostComponent,
    ApiUpdateComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   /* to get dta from api import HttpClient  */
    ReactiveFormsModule,   /* to enalbe reactive form */
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

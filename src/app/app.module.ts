import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { FileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';
import { ProjectDetailComponent } from './pDetail.component';
import { LoginServiceComponent } from './login.service';
import { ProjectSelectionServiceComponent } from './projectSelection.service';
import {SelectionComponent } from './projectSelection.component';
import { ModuleComponent } from './module.component';
import { FeatureComponent } from './featurePage.component';
import { TestExecutionComponent } from './testExecution.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ObjectComponent } from './object.component';
import { PageNameComponent } from './pageName.component';
import { ObjectNameComponent} from './objectName.component';
import{ObjectServiceComponent} from './object.service';
//import{CreateTestCaseComponent} from './object.service';
import { CaptureLabComponent } from './captureLab.component';
import { ImportProjectComponent} from './importProject.component';
import{ModuleServiceComponent} from './modulePage.service';
import{FeatureServiceComponent} from './featurePage.service';
import{ImportComponent} from './importPage.component';
import{ImportServiceComponent} from './importPage.service';
import{ProjectDetailServiceComponent} from './pDetail.service'
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ScriptImportComponent } from './script-import/script-import.component';
import { EditComponent } from './edit/edit.component';
import { CreateTestCaseComponent } from './create-test-case/create-test-case.component';
import { ReportComponent } from './report/report.component';
import { ObjectCreationComponent } from './object-creation/object-creation.component';
import { CreateReusableFunctionComponent } from './create-reusable-function/create-reusable-function.component'; // this line you need

const appRoutes: Routes = [
// { path: '', component: LoginComponent },

 { path: 'ImportPage', component: ImportComponent },

 { path: 'createProject', component:ImportProjectComponent },

 { path: '', component: ProjectDetailComponent,

children:[

{ path: 'CreateModule', component: ModuleComponent },

{ path: 'CreateFeature', component: FeatureComponent },
{ path: 'importComponent', component: ImportComponent },
{ path: 'editComponent', component: EditComponent },
{ path: 'createTestCaseComponent', component: CreateTestCaseComponent },
{ path: 'captureLabComponent', component: CaptureLabComponent },
{ path: 'testExcecutionComponent', component: TestExecutionComponent },
{ path: 'reportComponent', component: ReportComponent },
{ path: 'objectCreationComponent', component: ObjectCreationComponent },
{ path: 'objectRepository', component: ObjectComponent },
{path: 'createReusableFunction', component: CreateReusableFunctionComponent },
// { path: 'scriptcomponent', component: ScriptImportComponent}

] 
},

 { path: 'projectSelection', component: SelectionComponent },
 { path: 'logincomponent', component: LoginComponent },
//  { path: 'scriptcomponent', component: ScriptImportComponent},



];


@NgModule({
	 imports: [
    BrowserModule,AmazingTimePickerModule,HttpModule,RouterModule.forRoot(appRoutes)
      ,BrowserAnimationsModule,FormsModule,FileDropModule,HttpClientModule
  ],
  declarations: [

    ObjectComponent, PageNameComponent , ObjectNameComponent, AppComponent,ImportProjectComponent,HeaderComponent,TestExecutionComponent , CaptureLabComponent , ProjectDetailComponent,ImportComponent,LoginComponent,SelectionComponent,ModuleComponent,FeatureComponent, ScriptImportComponent, EditComponent, CreateTestCaseComponent, ReportComponent, ObjectCreationComponent, CreateReusableFunctionComponent],

 
  providers: [ObjectServiceComponent, LoginServiceComponent,ProjectDetailServiceComponent,ImportServiceComponent,ProjectSelectionServiceComponent,ModuleServiceComponent,FeatureServiceComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
 
 //export const routingComponents = [ProjectDetailComponent];
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { EmployeeModule } from './employee/employee/employee.module';
import { CreateEmployeeComponent } from './employee/components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { HomeComponent } from './home/home/home.component';
import { FullComponent } from './layouts/full/full/full.component';
import { HeaderComponent } from './layouts/full/full/header/header.component';
import { SidebarComponent } from './layouts/full/full/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { ViewBillProductsComponent } from './material-component/dialog/view-bill-products/view-bill-products.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    BestSellerComponent,
    ViewBillProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzMenuModule,
    NzCollapseModule,
    NzPageHeaderModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSpinModule,
    NzNotificationModule,
    AdminModule,
    UserModule,
    EmployeeModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

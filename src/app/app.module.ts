import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { NotificationService } from './shared/services/notifications/notification.service';
import { LabelListComponent } from './label/label-list/label-list.component';
import { LabelDetailsComponent } from './label/label-details/label-details.component';
import { TermsAndConditionsDetailsComponent } from './terms-and-conditions/terms-and-conditions-details/terms-and-conditions-details.component';
import { TermsAndConditionsListComponent } from './terms-and-conditions/terms-and-conditions-list/terms-and-conditions-list.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { WelcomeScreenListComponent } from './welcome-screen/welcome-screen-list/welcome-screen-list.component';
import { WelcomeScreenDetailsComponent } from './welcome-screen/welcome-screen-details/welcome-screen-details.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { LearnIconComponent } from './learn-icon/learn-icon.component';
import { LearnIconListComponent } from './learn-icon/learn-icon-list/learn-icon-list.component';
import { LearnIconDetailsComponent } from './learn-icon/learn-icon-details/learn-icon-details.component';
import { LineOfBusinessComponent } from './line-of-business/line-of-business.component';
import { LineOfBusinessListComponent } from './line-of-business/line-of-business-list/line-of-business-list.component';
import { LineOfBusinessDetailsComponent } from './line-of-business/line-of-business-details/line-of-business-details.component';
import { GraphQLModule } from './graphql.module';
import { LabelComponent } from './label/label.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    GraphQLModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FaqComponent,
    LabelListComponent,
    LabelDetailsComponent,
    LabelComponent,
    TermsAndConditionsDetailsComponent,
    TermsAndConditionsListComponent,
    TermsAndConditionsComponent,
    WelcomeScreenListComponent,
    WelcomeScreenDetailsComponent,
    WelcomeScreenComponent,
    LearnIconComponent,
    LearnIconListComponent,
    LearnIconDetailsComponent,
    LineOfBusinessComponent,
    LineOfBusinessListComponent,
    LineOfBusinessDetailsComponent,
  ],
  providers: [AuthService, NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

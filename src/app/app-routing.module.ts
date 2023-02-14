import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { LabelComponent } from './label/label.component';
import { LearnIconComponent } from './learn-icon/learn-icon.component';
import { LineOfBusinessComponent } from './line-of-business/line-of-business.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'label', component: LabelComponent },
  { path: 'contactUs', component: ContactUsComponent },

  { path: 'learnIcon', component: LearnIconComponent },
  { path: 'lineOfBusiness', component: LineOfBusinessComponent },
  { path: 'termsAndConditions', component: TermsAndConditionsComponent },
  { path: 'welcomeScreen', component: WelcomeScreenComponent },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

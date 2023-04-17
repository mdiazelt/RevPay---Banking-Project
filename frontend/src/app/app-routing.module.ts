import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAccountComponent } from "./components/personal-account/personal-account.component";
import { PersonalTransactionListComponent } from './components/personal-transaction-list/personal-transaction-list.component';
import { SendRequestMoneyComponent } from './components/send-request-money/send-request-money.component';
import { PersonalWalletComponent } from './components/personal-wallet/personal-wallet.component';
import { BusinessAccountComponent } from './components/business-account/business-account.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { LoginAccountComponent } from './components/login-account/login-account.component';

const routes: Routes = [

  {path: 'personal', component: PersonalAccountComponent},
  {path: 'money', component: SendRequestMoneyComponent},
  {path: 'business', component:BusinessAccountComponent},
  {path: 'register',component:RegisterAccountComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login',component:LoginAccountComponent},

  {path:'login',children:[
    {path:'register',component:RegisterAccountComponent
  }
  ]},
  {path:'register',children:[
    {path:'login',component:LoginAccountComponent
  }
  ]},
  {path:'personal', children:[
    {path:'transaction-history', 
    component:PersonalTransactionListComponent
  },
    {
      path:'wallet', 
      component:PersonalWalletComponent
    }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

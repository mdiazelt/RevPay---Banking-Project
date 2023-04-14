import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAccountComponent } from "./components/personal-account/personal-account.component";
import { PersonalTransactionListComponent } from './components/personal-transaction-list/personal-transaction-list.component';

const routes: Routes = [

  {path: 'personal', component: PersonalAccountComponent},

  {path:'', children:[
    {path:'personal/:transaction-history', component:PersonalTransactionListComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

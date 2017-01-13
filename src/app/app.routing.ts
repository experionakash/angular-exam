import { Routes, RouterModule } from "@angular/router";
import { AddEditContactComponent } from "./add-edit-contact/add-edit-contact.component"

const APP_ROUTES: Routes = [
    //{ path:'', redirectTo:'', pathMatch : 'full' },
    { path: 'new', component: AddEditContactComponent },
    { path: ':id', component: AddEditContactComponent},
    { path: ':id/:edit', component: AddEditContactComponent}
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);
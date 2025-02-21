import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ByLawsComponent } from './by-laws/by-laws.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { ExecutiveBoardComponent } from './executive-board/executive-board.component';
import { HomeComponent } from './home/home.component';
import { ResourceMaterialComponent } from './resource-material/resource-material.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'by-laws', component: ByLawsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventsComponent },
  { path: 'executive-board', component: ExecutiveBoardComponent },
  { path: 'resource-material', component: ResourceMaterialComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

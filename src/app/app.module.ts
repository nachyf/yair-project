import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SitesComponent } from './sites/sites.component';
import { RouterModule, Routes} from '@angular/router';
import { AttractionsComponent } from './attractions/attractions.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import { RestaurantComponent } from './restaurant/restaurant.component';
// tslint:disable-next-line:import-spacing
import {RestaurantService}  from './services/restaurant.service';
import { FilterPipe } from './filter.pipe';
import { Filter1Pipe } from './filter1.pipe';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { CustomersService } from './services/customers.service';
import { HotelsComponent } from './hotels/hotels.component';
// import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'AngularFireDatabase';


// import {FirebaseService} from 'firebase-angular2/core';
// import { AngularFireModule } from 'angularfire2';
import { FooterComponent } from './footer/footer.component';



// import { AngularFirestoreModule } from 'angularfire2/firestore'
// import { Subject } from 'rxjs/Subject';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './game.service';


// export const firebaseConfig  = {




//     apiKey: "AIzaSyBs5bPW_frbUSS-2ZUns97jS6cO8JUjEAQ",
//     authDomain: "angular-2-fc5e3.firebaseapp.com",
//     databaseURL: "https://angular-2-fc5e3.firebaseio.com",
//     projectId: "angular-2-fc5e3",
//     storageBucket: "angular-2-fc5e3.appspot.com",


// }

@NgModule({
  imports:      [ReactiveFormsModule, BrowserModule, FormsModule , RouterModule.forRoot([

      {path: '', redirectTo: '/app-body', pathMatch: 'full' },
    {path: 'app-body', component: BodyComponent},
      {path: 'app-sites', component: SitesComponent},
      {path: 'app-attractions', component: AttractionsComponent},
      {path: 'app-restaurant', component: RestaurantComponent,
           children : [
                  {
                 path: 'app-restaurant-details/:id',
                 component: RestaurantDetailsComponent,

                 }
           ]},

             {
           path: 'app-google-maps',
           component: GoogleMapsComponent
         },
          {
           path: 'app-hotels',
           component: HotelsComponent
         },

      ]), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDEpTTkeFJq4fVJ6GndtCr16cydaQUqu2E',
      libraries: ['places']
    }), HttpClientModule

    ],

  // tslint:disable-next-line:max-line-length
  declarations: [ AppComponent, BodyComponent, SitesComponent, AttractionsComponent, GoogleMapsComponent, RestaurantComponent, FilterPipe, Filter1Pipe, RestaurantDetailsComponent, FooterComponent, HotelsComponent, HeaderComponent, CreateComponent ],
  providers: [RestaurantService, CustomersService, GameService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

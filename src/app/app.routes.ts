import { Routes } from '@angular/router';
import { Home } from './home/home'
import { Landing } from './landing/landing';
import { Drivers } from './pages/drivers/drivers';
import { Constructors } from './pages/constructors/constructors';
import { Schedule } from './pages/schedule/schedule';
import { DriverStanding } from './core/models/driver-standing/driver-standing';

export const routes: Routes = [
    { path: 'home', component: Home, },
    
    { path: '', component: Landing, },

    { path: 'drivers',component: Drivers, },
    
    { path: 'schedule',component: Schedule, },

    { path: 'constructors',component: Constructors, },

    //{ path: 'drivers/:code',component:  },
     
    
];

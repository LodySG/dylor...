import { Routes, RouterModule } from '@angular/router';
import { ChannelComponent }      from '../channel/channel.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {
      path: 'channel',
      component: ChannelComponent,
      //canActivate: [LoggedInGuard]
    },
    {
      path: '',
      redirectTo: 'channel',
      pathMatch: 'full'
      //canActivate: [LoggedInGuard]
    },

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

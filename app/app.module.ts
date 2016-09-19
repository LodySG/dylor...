import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './routing/app.routing';
import { AppComponent }  from './app.component';
import { ChannelComponent }  from './channel/channel.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SoundcloudService } from './services/soundcloud/soundcloud.service';
@NgModule({
  imports: [ BrowserModule, routing, Ng2BootstrapModule ],
  declarations: [ AppComponent, ChannelComponent ],
  bootstrap: [ AppComponent ],
  providers: [ appRoutingProviders, SoundcloudService ]
})

export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { SoundcloudService } from '../services/soundcloud/soundcloud.service';

@Component({
    moduleId: module.id,
    selector: 'channel',
    templateUrl: 'channel.component.html',
    styleUrls:['channel.component.css']
})
export class ChannelComponent implements OnInit {

    private date: Date;

    constructor(private soundcloudService: SoundcloudService) { }

    ngOnInit() {
        //this.date = new Date();
        //this.soundcloudService.getTrackPlayer(64112105);
        //this.soundcloudService.getPlaylists();
     }

     /*
        
    SC.initialize({
        client_id: client_id
    });

    SC.get("/resolve", { 
        url: "https://soundcloud.com/lody-saint-germain"
    }).then((user) => {
        window.user_id = user.id;
    });

    SC.get('/users/'+window.user_id+'/playlists').then(function(playlists) {
        console.log(playlists);
    });

    SC.oEmbed("https://soundcloud.com/lody-saint-germain/sets/chill", { auto_play: false }).then(function(oEmbed) {
        console.log('oEmbed response: ', oEmbed);
        $(".zouk.channel").html(oEmbed.html);
    });

     */
}

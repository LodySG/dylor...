import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Playlist } from './entities/playlist';
import { SoundcloudService } from './services/soundcloud/soundcloud.service';
import { Config } from './configs/configs';
declare var $:JQueryStatic;

@Component({
    moduleId: module.id,
    selector: 'mainapp',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.html']
})

export class AppComponent implements OnInit {

    private playlists: Playlist[];
    private appname: string;

    constructor(private soundCloudService: SoundcloudService, private titleService: Title) {}

    ngOnInit() {
        this.soundCloudService.getPlaylists().subscribe( playlists => {
            this.playlists = playlists;
        });
        this.appname = Config.APP_NAME;
        this.titleService.setTitle(this.appname);
    }

    setTitle(title: string): void{
        this.titleService.setTitle(title);
    }
}

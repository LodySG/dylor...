import { Injectable } from '@angular/core';
import { Config } from '../../configs/configs';
import { Playlist } from '../../entities/playlist';
import { Track } from '../../entities/track';
import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
declare var SC: any;

@Injectable()
export class SoundcloudService {

    private clientSecret: string;
    private userId: number;

    constructor() {
        this.clientSecret = Config.CLIENT_SECRET;
        this.userId = Config.LODYDODY_ID;
        SC.initialize({ client_id: Config.CLIENT_ID });
    }

    getPlaylists(): Observable<Playlist[]> {
        let uri = '/users/' + this.userId + '/playlists';

        return Observable.fromPromise(SC.get(uri))
                    .map(playlists  => {
                        let pLists = <Array<any>> playlists;
                        let list = new Array<Playlist>();

                        for (let playlist of pLists) {
                            let genre = <string> playlist.title;
                            let link = <string> playlist.uri;
                            list.push(
                                {genre: genre, link: link}
                            );
                        }

                        return list;
                    });

        /*
        SC.get(uri).then(playlists => {
            console.log(playlists);
            let pLists = new Array<Playlist>();
            playlists.forEach(() => {
                
            });
            return playlists;
        });
        */
    }

    getEmbed() {
        SC.oEmbed('https://soundcloud.com/lody-saint-germain/sets/chill', { auto_play: false }).then(function(oEmbed) {
            console.log('oEmbed response: ', oEmbed);
        });
    }

    getTrackPlayer(trackId: number) {
        let uri = 'tracks/' + trackId;
        SC.stream(uri).then(function(player){
            player.play();
            console.log(player.options);
        });
    }

    getRandomTrackFromPlaylist(playlist: Playlist): Track {
        //let track = playlist.tracks[ Math.floor( Math.random() * playlist.tracks.length ) ];
        return new Track();
    }
}

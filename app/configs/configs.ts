import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    public static get CLIENT_ID(): string { return "10f634fd0bb99d0cab9d0b04bf53e959" }
    public static get CLIENT_SECRET(): string { return "05a345e93c4421304c2c361609e5dd14" }
    public static get MY_SOUNDCLOUD_URL(): string { return "https://soundcloud.com/lody-saint-germain" }
    public static get LODYDODY_ID(): number { return 21949062 }
}
import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(
        private socket: Socket,
        private http: HttpClient) { }

    getLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    this.sendLocation(location);
                },
                (error) => {
                    console.error('Erro ao obter os dados da localização', error.message)
                }
            )
        } else {
            console.error('Geolocalização nao suportada pelo navegador')
        }
    }

    private sendLocation(location: any) {
        return 
        this.socket.emit('location', location);
    }


}
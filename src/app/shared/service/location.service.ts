import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { BehaviorSubject, catchError, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
  
    public location$ = new BehaviorSubject<any>(null);

    constructor(
        private socket: Socket,
        private http: HttpClient) { }

    public getLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    console.log(location)
                    if(location) {
                        alert(`Localização ${JSON.stringify(location)}`)
                        console.log('entrei no if do location com valor')
                        this.location$.next(location)
                    } else {
                        console.log('entrei no else, sem valor')
                    }
                },
                (error) => {
                    console.error('Erro ao obter os dados da localização', error.message)
                }
            )
      
        } else {
            console.error('Geolocalização nao suportada pelo navegador')

        }
    }

    public getObservableLocation() {
       return this.location$.asObservable()
    }

    public sendLocation(location: {
        latitude: number,
        longitude: number
    }) {
        this.socket.emit('location', location);

        console.log('Enviando localização', location);

        // Enviar a solicitação HTTP sem JSON.stringify
        return this.http.post('https://192.168.0.3:3000/location', location);
    }
}
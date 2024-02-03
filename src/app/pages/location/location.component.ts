import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { LocationService } from 'src/app/shared/service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public location: any;
  public error: any;
  constructor(
    private service: LocationService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.location = this.service.getObservableLocation()
    this.service.getLocation();
   this.service.getObservableLocation().subscribe({
        next: ((res: any) => {
          console.log('CHAMEI O SERVIÇO', res)
          this.location = res;
        }),
        error: ((e: any) => {
         
          console.log('entrei no erro', JSON.stringify(e))
          return e
        })
      })
  }

  public sendLocation() {
    alert('Entrei no metodo')
    this.service.sendLocation(this.location)
    .subscribe({
        next: ((res) => {
          alert('Entrei no sucesso')
          console.log('CHAMEI POST', res)
        }),
        error: (e => {
          console.log('entrei no erro POST', JSON.stringify(e))
           this.error = e
          return e
        })
      })
  }

  public updateLocation() {
    alert('entrei no update');
    this.service.updateLocation(this.location).subscribe({
      next: ((r) => {
        console.log('res', r)
      }),
      error: (e) => {
        console.log('error', e);
        this.error = e
        return e
      }
    });
  };
  
  public login(): void {
    this.authService.login('dfealves', '*A77b89k').subscribe({
      next: (r) => { 
        console.log('Usuário logado com sucesso!', r)
      },
      error: (error) => {
        console.error('Não foi possível efetuar o login!', error)
      }
    })
  }
}


// .subscribe({
//   next: ((res) => {
//     console.log('CHAMEI O SERVIÇO', res)
//   }),
//   error: (e => {
//     console.log('entrei no erro', e)
//     return e
//   })
// })
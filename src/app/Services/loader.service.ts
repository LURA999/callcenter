import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../models/cliente.model';

@Injectable()
export class LoaderService {
    isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);

    }

    constructor(private http : HttpClient) { }
    local = environment.api;
    

    insertClientes(cliente: ClienteModel){
      return this.http.post(this.local+'API/Customers/customers.php', cliente, {responseType: 'text'});
      }
      
      insertClientesServ(cve,clave_serv,servicio,cantidad,interes){
        return this.http.post(this.local+'API/Customers/customerServices.php',
        {cve:cve, clave_serv:clave_serv, servicio:servicio,cantidad:cantidad,interes:interes}, {responseType: 'text'});
      }
} 
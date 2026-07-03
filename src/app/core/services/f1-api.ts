import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { DriverStanding } from '../models/driver-standing/driver-standing';



@Injectable({
  providedIn: 'root',
})
export class F1Api {
    private http = inject(HttpClient);
    private baseUrl = 'https://api.jolpi.ca/ergast/f1/current';


  getDrivers(){
      return this.http.get<any>(`${this.baseUrl}/driverstandings.json`)
      .pipe(
          map((response) => {
              const standings = response.MRData.StandingsTable.StandingsLists[0]?.DriverStandings ?? [];


              return standings.map((driver: any): DriverStanding => ({
                position: driver.position,
                code: driver.Driver.code ?? 'N/A',
                fullName: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                team: driver.Constructors[0]?.name ?? 'Unknown team',
                nationality: driver.Driver.nationality,
                points: driver.points,
                wins: driver.wins
              }));


          }),
          catchError((error) => {
            console.error('Failed to fetch drivers:', error);
            return of([]);

          })





      );



  
  
  
    }









}
import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { F1Api } from '../../core/services/f1-api';
import { DriverStanding } from '../../core/models/driver-standing/driver-standing';

@Component({
  selector: 'app-drivers',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './drivers.html',
  styleUrl: './drivers.css'
})
export class Drivers {
  private f1Api = inject(F1Api);

  sortBy = signal<'points' | 'name'>('points'); // <can only contain values listen here>
  selectedTeam = signal('All');
  hasError = signal(false);

  drivers$ = this.f1Api.getDrivers().pipe( // $ - naming convention meaning that this variable is an Observable
    map((drivers) => {
      this.hasError.set(false);
      return drivers;
    })
  );

  allTeams = computed(() => {
    return ['All'];
  });

  setSort(mode: 'points' | 'name') {
    this.sortBy.set(mode);
  }

  setTeam(team: string) {
    this.selectedTeam.set(team);
  }

  filterAndSortDrivers(drivers: DriverStanding[]) {
    let filtered = [...drivers];

    if (this.selectedTeam() !== 'All') {
      filtered = filtered.filter((driver) => driver.team === this.selectedTeam());
    }

    if (this.sortBy() === 'name') {
      filtered.sort((a, b) => a.fullName.localeCompare(b.fullName));
    } else {
      filtered.sort((a, b) => Number(b.points) - Number(a.points));
    }

    return filtered;
  }

  getTeams(drivers: DriverStanding[]) {
    const teams = new Set(drivers.map((driver) => driver.team));
    return ['All', ...Array.from(teams)];
  }
}
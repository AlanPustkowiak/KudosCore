import { Injectable, signal } from '@angular/core';
import { Kudos } from '../models/kudos.model';

@Injectable({
  providedIn: 'root',
})
export class KudosService {
  private kudosList = signal<Kudos[]>([
    {
      id: 1,
      to: 'Andrzej Nowak',
      from: 'Jan Kowalski',
      comment: 'Dziękuję za pomoc w projekcie!',
      points: 10,
      date: new Date('2025-07-01'),
    },
    {
      id: 2,
      to: 'Ewa Wiśniewska',
      from: 'Anna Zielińska',
      comment: 'Świetna prezentacja na spotkaniu zespołu.',
      points: 15,
      date: new Date('2025-07-02'),
    },
  ]);

  getKudos() {
    return this.kudosList;
  }

  private getNextId(): number {
    const currentKudos = this.kudosList();
    if (currentKudos.length === 0) {
      return 1;
    }
    return Math.max(...currentKudos.map((k) => k.id)) + 1;
  }

  addKudos(kudos: Omit<Kudos, 'id' | 'date'>) {
    const newKudos: Kudos = {
      ...kudos,
      id: this.getNextId(),
      date: new Date(),
    };
    this.kudosList.update((list) => [...list, newKudos]);
  }
}

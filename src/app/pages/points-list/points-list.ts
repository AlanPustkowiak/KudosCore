import { Component, inject } from '@angular/core';
import { KudosService } from '../../services/kudos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-points-list',
  imports: [DatePipe],
  templateUrl: './points-list.html',
  styleUrl: './points-list.scss',
})
export class PointsList {
  private kudosService = inject(KudosService);

  kudosList$ = this.kudosService.getKudos();

  removeKudos(id: number) {
    this.kudosService.removeKudos(id);
  }
}

import { Component, Input } from '@angular/core';
import { bootstrapArrowRight } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-episode-button',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({bootstrapArrowRight})],
  templateUrl: './episode-button.component.html',
  styleUrl: './episode-button.component.css'
})
export class EpisodeButtonComponent {
  @Input() actionHandler = () => {};
}

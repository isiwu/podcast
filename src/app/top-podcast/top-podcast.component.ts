import { Component, Input } from '@angular/core';
import { bootstrapArrowRight, bootstrapHeadphones } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { EpisodeButtonComponent } from '../episode-button/episode-button.component';

@Component({
  selector: 'app-top-podcast',
  standalone: true,
  imports: [NgIconComponent, EpisodeButtonComponent],
  viewProviders: [provideIcons({bootstrapHeadphones, bootstrapArrowRight})],
  templateUrl: './top-podcast.component.html',
  styleUrl: './top-podcast.component.css'
})
export class TopPodcastComponent {
  @Input() image = {
    src: '',
    title: ''
  };
}

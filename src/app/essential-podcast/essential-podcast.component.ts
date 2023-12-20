import { Component, Input } from '@angular/core';
import { bootstrapHeadphones, bootstrapShareFill } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-essential-podcast',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({bootstrapHeadphones, bootstrapShareFill})],
  templateUrl: './essential-podcast.component.html',
  styleUrl: './essential-podcast.component.css'
})
export class EssentialPodcastComponent {
  @Input({required: true}) image = {
    src: "",
    title: "",
    description: ""
  }
}

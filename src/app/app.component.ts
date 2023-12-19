import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  bootstrapSearch, 
  bootstrapGrid3x3Gap, 
  bootstrapVolumeUpFill, 
  bootstrapArrowRight } from '@ng-icons/bootstrap-icons';
import { lucidePodcast } from '@ng-icons/lucide'
import { ActiveLinkComponent } from './active-link/active-link.component';
import { simpleSoundcloud } from '@ng-icons/simple-icons';
import { TopPodcastComponent } from './top-podcast/top-podcast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIconComponent, ActiveLinkComponent, TopPodcastComponent],
  viewProviders: [provideIcons({
    bootstrapSearch, 
    bootstrapGrid3x3Gap, 
    lucidePodcast, 
    simpleSoundcloud, 
    bootstrapVolumeUpFill,
    bootstrapArrowRight
  })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'podcast';
  items = [
    {
      src: 'assets/top-podcast/top-1.svg',
      title: 'top-1'
    },
    {
      src: 'assets/top-podcast/top-2.svg',
      title: 'top-2'
    },
    {
      src: 'assets/top-podcast/top-3.svg',
      title: 'top-3'
    }
  ]
}

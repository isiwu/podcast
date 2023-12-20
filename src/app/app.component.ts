import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  bootstrapSearch, 
  bootstrapGrid3x3Gap, 
  bootstrapVolumeUpFill, 
  bootstrapArrowRight, 
  bootstrapPlayFill} from '@ng-icons/bootstrap-icons';
import { lucidePodcast } from '@ng-icons/lucide'
import { ActiveLinkComponent } from './active-link/active-link.component';
import { simpleSoundcloud } from '@ng-icons/simple-icons';
import { TopPodcastComponent } from './top-podcast/top-podcast.component';
import { EssentialPodcastComponent } from './essential-podcast/essential-podcast.component';
import { HostComponent } from './host/host.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NgIconComponent, 
    ActiveLinkComponent, 
    TopPodcastComponent,
    EssentialPodcastComponent,
    HostComponent,
  ],
  viewProviders: [provideIcons({
    bootstrapSearch, 
    bootstrapGrid3x3Gap, 
    lucidePodcast, 
    simpleSoundcloud, 
    bootstrapVolumeUpFill,
    bootstrapArrowRight,
    bootstrapPlayFill
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
  ];
  essentialPodcasts = [
    {
      src: "assets/ess-podcast/essential-1.svg",
      title: "essential-1",
      description: "SRKP selects: how the new ages work"
    },
    {
      src: "assets/ess-podcast/essential-2.svg",
      title: "essential-2",
      description: "SRKP selects: a new mindset today"
    },
    {
      src: "assets/ess-podcast/essential-3.svg",
      title: "essential-3",
      description: "SRKP selects: latest trends now"
    },
    {
      src: "assets/ess-podcast/essential-4.svg",
      title: "essential-4",
      description: "SRKP selects: organize your day"
    },
    {
      src: "assets/ess-podcast/essential-5.svg",
      title: "essential-5",
      description: "SRKP selects: how to plan your work"
    },
    {
      src: "assets/ess-podcast/essential-6.svg",
      title: "essential-6",
      description: "SRKP selects: trying the best phones"
    }
  ];
  hosts = [
    {
      image: "assets/hosts/host-1.svg",
      name: "bella jimenez"
    },
    {
      image: "assets/hosts/host-2.svg",
      name: "edmin watson"
    },
    {
      image: "assets/hosts/host-3.svg",
      name: "cailtlin henderson"
    }
  ]
}

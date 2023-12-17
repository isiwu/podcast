import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapSearch, bootstrapGrid3x3Gap } from '@ng-icons/bootstrap-icons';
import { lucidePodcast } from '@ng-icons/lucide'
import { ActiveLinkComponent } from './active-link/active-link.component';
import { simpleSoundcloud } from '@ng-icons/simple-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIconComponent, ActiveLinkComponent],
  viewProviders: [provideIcons({bootstrapSearch, bootstrapGrid3x3Gap, lucidePodcast, simpleSoundcloud})],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'podcast';
}

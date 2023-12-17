import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapSearch, bootstrapGrid3x3Gap } from '@ng-icons/bootstrap-icons';
import { ActiveLinkComponent } from './active-link/active-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIconComponent, ActiveLinkComponent],
  viewProviders: [provideIcons({bootstrapSearch, bootstrapGrid3x3Gap})],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'podcast';
}

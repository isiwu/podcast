import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { typSocialFacebook, typSocialLinkedin, typSocialTwitter } from '@ng-icons/typicons';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({typSocialFacebook, typSocialLinkedin, typSocialTwitter})],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css'
})
export class HostComponent {
  @Input({required: true}) host = {
    image: "",
    name: ""
  }
}

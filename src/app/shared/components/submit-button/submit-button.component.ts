import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  styleUrls: ['./submit-button.component.scss'],
  templateUrl: './submit-button.component.html',
})
export class SubmitButtonComponent {
  @Input() disabled: boolean;
  @Input() loading: boolean;
}

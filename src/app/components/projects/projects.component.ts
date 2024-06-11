import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isTechSLCBudgetVisible = false;
  isMandeVisible = false;
  isReportaVecinoVisible = false;
  isTechEncrypterVisible = false;

  toggleTechSLCBudgetContent() {
    this.isTechSLCBudgetVisible = !this.isTechSLCBudgetVisible;
  }

  toggleTechMandeContent() {
    this.isMandeVisible = !this.isMandeVisible;
  }

  toggleTechReportaVecinoContent() {
    this.isReportaVecinoVisible = !this.isReportaVecinoVisible;
  }

  toggleTechEncrypterContent() {
    this.isTechEncrypterVisible = !this.isTechEncrypterVisible;
  }
}

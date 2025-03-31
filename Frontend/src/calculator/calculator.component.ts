import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display: string = '';

  appendNumber(num: string) {
    this.display += num;
  }

  appendOperator(operator: string) {
    if (this.display !== '' && !this.isLastCharOperator()) {
      this.display += operator;
    }
  }

  appendDecimal() {
    if (!this.display.endsWith('.')) {
      this.display += '.';
    }
  }

  isLastCharOperator(): boolean {
    return ['+', '-', '*', '/'].includes(this.display.slice(-1));
  }

  calculateResult() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

  clearDisplay() {
    this.display = '';
  }
}

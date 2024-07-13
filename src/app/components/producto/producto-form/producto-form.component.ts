import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducto } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.scss'
})
export class ProductoFormComponent {
  @Input() title: string = '';
  @Input() toUpdateProducto: IProducto = {};
  @Output() callParentEvent: EventEmitter<IProducto> = new EventEmitter<IProducto>();

  addEdit()  {
    this.callParentEvent.emit(this.toUpdateProducto);
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/client/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {
  private readonly productosService = inject(ProductosService);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
      next: (data) => (this.productos = data),
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }
}
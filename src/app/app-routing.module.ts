import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { LocalComponent } from "./pages/local/local.component";
import { AdminPedidoComponent } from "./pages/pedido/admin-pedido/admin-pedido.component";
import { DetallePedidoComponent } from "./pages/pedido/detalle-pedido/detalle-pedido.component";
import { ListadoProductoComponent } from "./pages/producto/listado-producto/listado-producto.component";
import { DetalleProductoComponent } from "./pages/producto/detalle-producto/detalle-producto.component";
import { AdminProductoComponent } from "./pages/producto/admin-producto/admin-producto.component";
import { ListadoCategoriaComponent } from "./pages/categoria/listado-categoria/listado-categoria.component";
import { PedidoclienteComponent } from "./pages/pedidocliente/pedidocliente.component";
import { CarritoComponent } from "./pages/cliente/carrito/carrito.component";
import { PagoComponent } from "./pages/cliente/pago/pago.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'local', component: LocalComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'listaProducto/:idCategoria', component: ListadoProductoComponent},
    {path: 'detalleProducto/:codigo', component: DetalleProductoComponent},
    {path: 'adminProducto', component: AdminProductoComponent},
    {path: 'listaPedido', component: AdminPedidoComponent},
    {path: 'detallePedido', component: DetallePedidoComponent},
    {path: 'listadoCategoria', component: ListadoCategoriaComponent},
    {path: 'pedidocliente', component: PedidoclienteComponent},
    {path: 'clienteCarrito', component: CarritoComponent},
    {path: 'clientePago', component: PagoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingngMOdule {}

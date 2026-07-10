import { Routes } from '@angular/router';

// Import de rotas do Admin
import { LoginPageAdmin } from './features/admin/pages/login-page-admin/login-page-admin';
import { DashboardPage } from './features/admin/pages/dashboard-page/dashboard-page';
import { ProdutosPage } from './features/admin/pages/produtos-page/produtos-page';
import { PedidosPage } from './features/admin/pages/pedidos-page/pedidos-page';
import { CategoriasPage } from './features/admin/pages/categorias-page/categorias-page';

//Import de rotas do Cliente
import { RegisterPage } from './features/client/pages/register-page/register-page';
import { LoginPage} from './features/client/pages/login-page/login-page';
import { CardapioPage } from './features/client/pages/cardapio-page/cardapio-page';
import { CarrinhoPage } from './features/client/pages/carrinho-page/carrinho-page';
import { CheckoutPage } from './features/client/pages/checkout-page/checkout-page';

export const routes: Routes = [
    //Rotas do Admin
    {
        path: 'admin/login',
        component: LoginPageAdmin,
    },
  {
    path: 'admin/dashboard',
    component: DashboardPage,
  },
  {
    path: 'admin/produtos',
    component: ProdutosPage,
  },
  {
    path: 'admin/pedidos',
    component: PedidosPage,
  },
  {
    path: 'admin/categorias',
    component: CategoriasPage,
  },

  //Rotas do Cliente
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'cadastro',
    component: RegisterPage,
  },
  {
    path: 'cardapio',
    component: CardapioPage,
  },
  {
    path: 'carrinho',
    component: CarrinhoPage,
  },
  {
    path: 'checkout',
    component: CheckoutPage,
  },

  {
    path: '',
    redirectTo: 'cardapio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'cardapio',
  },
];
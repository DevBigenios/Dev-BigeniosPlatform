import { ModuleWithProviders } from "@angular/core";
import {Routes,RouterModule} from "@angular/router"

import { EmpleadoComponent } from "./empleado/empleado.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from "./login/login.component"
import { MainComponent } from "./main.component";
import { HeaderComponent } from "./layouts/header/header.component";
import { AlertsComponent } from "./components/alerts/alerts.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { BadgesComponent } from "./components/badges/badges.component";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { CardsComponent } from "./components/cards/cards.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ChartsApexchartsComponent } from "./components/charts-apexcharts/charts-apexcharts.component";
import { ChartsChartjsComponent } from "./components/charts-chartjs/charts-chartjs.component";
import { FormsEditorsComponent } from "./components/forms-editors/forms-editors.component";
import { FormsElementsComponent } from "./components/forms-elements/forms-elements.component";
import { FormsLayoutsComponent } from "./components/forms-layouts/forms-layouts.component";
import { IconsBootstrapComponent } from "./components/icons-bootstrap/icons-bootstrap.component";
import { IconsBoxiconsComponent } from "./components/icons-boxicons/icons-boxicons.component";
import { IconsRemixComponent } from "./components/icons-remix/icons-remix.component";
import { ListGroupComponent } from "./components/list-group/list-group.component";
import { ModalComponent } from "./components/modal/modal.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { SpinnersComponent } from "./components/spinners/spinners.component";
import { TablesDataComponent } from "./components/tables-data/tables-data.component";
import { TablesGeneralComponent } from "./components/tables-general/tables-general.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { TooltipsComponent } from "./components/tooltips/tooltips.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const appRoutes: Routes = [
    {path:'',component:LoginComponent},
    {path:'empleado/', component: EmpleadoComponent},
    {path:'fruta/', component: FrutaComponent},
    {path:'home/', component: HomeComponent},
    {path:'contacto/', component: ContactoComponent},
    {path:'contacto/:page', component: ContactoComponent},
    {path:'login/', component: LoginComponent},
    {path:'main/', component: MainComponent},
    {path:'header/', component: HeaderComponent},
    { path: 'alerts/', component: AlertsComponent },
    { path: 'accordion/', component: AccordionComponent },
    { path: 'badges/', component: BadgesComponent },
    { path: 'breadcrumbs', component: BreadcrumbsComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
    { path: 'charts-chartjs', component: ChartsChartjsComponent },
    { path: 'form-editors', component: FormsEditorsComponent },
    { path: 'form-elements', component: FormsElementsComponent },
    { path: 'form-layouts', component: FormsLayoutsComponent },
    { path: 'icons-bootstrap', component: IconsBootstrapComponent },
    { path: 'icons-boxicons', component: IconsBoxiconsComponent },
    { path: 'icons-remix', component: IconsRemixComponent },
    { path: 'list-group', component: ListGroupComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'spinners', component: SpinnersComponent },
    { path: 'tables-data', component: TablesDataComponent },
    { path: 'tables-general', component: TablesGeneralComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'tooltips', component: TooltipsComponent },
    { path: 'dashboard', component: DashboardComponent },
    {path:'**',component:MainComponent}
]

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any>  = RouterModule.forRoot(appRoutes);
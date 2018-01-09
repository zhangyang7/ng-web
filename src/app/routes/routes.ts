import { LayoutComponent } from '../layout/layout.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LoginComponent } from './pages/login/login.component';
import { LockComponent } from './pages/lock/lock.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Page404Component } from './pages/404/404.component';
import { Page500Component } from './pages/500/500.component';
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
// pro
import { ProUserLayoutComponent } from '../layout/pro/user/user.component';
// 自定义功能
import { UserComponent } from './user/user.component';
import { OrgComponent } from './org/org.component';
import { ResourceComponent } from './sys-manage/resource/resource.component';
import { RoleComponent } from './sys-manage/role/role.component';
import { RoleResourceComponent } from './sys-manage/role-resource/role-resource.component';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // index menu
            { path: '', redirectTo: 'dashboard/monitor', pathMatch: 'full' },
            // self menus
            { path: 'user', component: UserComponent},
            { path: 'org', component: OrgComponent},
            { path: 'resource', component: ResourceComponent},
            { path: 'role', component: RoleComponent},
            { path: 'role-resource', component: RoleResourceComponent},


            // others
            // { path: 'dashboard/v1', component: DashboardV1Component, data: { translate: 'dashboard_v1' } },
            // { path: 'dashboard/analysis', component: DashboardAnalysisComponent, data: { translate: 'dashboard_analysis' } },
            { path: 'dashboard/monitor', component: DashboardMonitorComponent, data: { translate: 'dashboard_monitor' } },
            // { path: 'dashboard/workplace', component: DashboardWorkplaceComponent, data: { translate: 'dashboard_workplace' } },
            // { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            // { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            // { path: 'logics', loadChildren: './logics/logics.module#LogicsModule' },
            // { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            // { path: 'pro', loadChildren: './pro/pro.module#ProModule' }
        ]
    },
    // 单页不包裹Layout
    { path: 'register', component: RegisterComponent, data: { translate: 'register' } },
    { path: 'login', component: LoginComponent, data: { title: 'login' } },
    { path: 'forget', component: ForgetComponent, data: { translate: 'forget' } },
    { path: 'lock', component: LockComponent, data: { translate: 'lock' } },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Page404Component },
    { path: '500', component: Page500Component },
    { path: '**', redirectTo: 'dashboard' }
];

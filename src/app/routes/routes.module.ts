import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { routes } from './routes';
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';

// Normal
import { UserComponent } from './user/user.component';
import { OrgComponent } from './org/org.component';
import { ResourceComponent } from './sys-manage/resource/resource.component';
import { RoleComponent } from './sys-manage/role/role.component';
import { RoleResourceComponent } from './sys-manage/role-resource/role-resource.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true }),
        PagesModule
    ],
    declarations: [
        // Index
        DashboardV1Component,
        DashboardAnalysisComponent,
        DashboardMonitorComponent,
        DashboardWorkplaceComponent,
        // Normal
        UserComponent,
        OrgComponent,
        // System
        ResourceComponent,
        RoleComponent,
        RoleResourceComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}

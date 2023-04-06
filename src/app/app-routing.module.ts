import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './_guards/auth.guard';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
{
path: '',
component: FullComponent,
children: [

{ path: '', redirectTo: '/login', pathMatch: 'full' },

{ path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule',canActivate: [AuthGuard]  },
{ path: 'starter', loadChildren: './starter/starter.module#StarterModule',canActivate: [AuthGuard]  },
{ path: 'icons', loadChildren: './icons/icons.module#IconsModule',canActivate: [AuthGuard]  },
{ path: 'forms', loadChildren: './form/forms.module#FormModule',canActivate: [AuthGuard]  },
    

{ path: 'create_roles', loadChildren: './create_roles/create_roles.module#CreateRolesModule', canActivate: [AuthGuard]  },
{ path: 'create_users', loadChildren: './create_users/create_users.module#create_usersModule', canActivate: [AuthGuard]  },
{ path: 'change_password', loadChildren: './change_password/change_password.module#ChangePasswordModule', canActivate: [AuthGuard]  },
{ path: 'create_modules', loadChildren: './create_modules/create_modules.module#create_modulesModule', canActivate: [AuthGuard]  },
{ path: 'create_sub_modules', loadChildren: './create_sub_modules/create_sub_modules.module#create_sub_modulesModule', canActivate: [AuthGuard]  },
{ path: 'role_wise_modules', loadChildren: './role_wise_modules/role_wise_modules.module#role_wise_modulesModule', canActivate: [AuthGuard]  },
{ path: 'role_wise_sub_modules', loadChildren: './role_wise_sub_modules/role_wise_sub_modules.module#role_wise_sub_modulesModule', canActivate: [AuthGuard]  },
{ path: 'get_serilog', loadChildren: './get_serilog/get_serilog.module#get_serilogModule', canActivate: [AuthGuard]  },


{ path: 'customers', loadChildren: './customers/customers.module#customersModule', canActivate: [AuthGuard]  },
{ path: 'create_project', loadChildren: './create_project/create_project.module#create_projectModule', canActivate: [AuthGuard]  },
{ path: 'create_department', loadChildren: './create_department/create_department.module#create_departmentModule', canActivate: [AuthGuard]  },
{ path: 'create_designation', loadChildren: './create_designation/create_designation.module#create_designationModule', canActivate: [AuthGuard]  },
{ path: 'create_teams', loadChildren: './create_teams/create_teams.module#create_teamsModule', canActivate: [AuthGuard]  },
{ path: 'create_employees', loadChildren: './create_employees/create_employees.module#create_employeesModule', canActivate: [AuthGuard]  },
{ path: 'create_region', loadChildren: './create_region/create_region.module#create_regionModule', canActivate: [AuthGuard]  },
{ path: 'create_holiday', loadChildren: './create_holiday/create_holiday.module#create_holidayModule', canActivate: [AuthGuard]  },


{ path: 'employee_projects', loadChildren: './employee_projects/employee_projects.module#employee_projectsModule', canActivate: [AuthGuard]  },
{ path: 'employee_office_timings', loadChildren: './employee_office_timings/employee_office_timings.module#employee_office_timingsModule', canActivate: [AuthGuard]  },
{ path: 'employee_off_days', loadChildren: './employee_off_days/employee_off_days.module#employee_off_daysModule', canActivate: [AuthGuard]  },
{ path: 'team_employees', loadChildren: './team_employees/team_employees.module#team_employeesModule', canActivate: [AuthGuard]  },
{ path: 'create_activities', loadChildren: './create_activities/create_activities.module#create_activitiesModule', canActivate: [AuthGuard]  },
{ path: 'employees_activities', loadChildren: './employees_activities/employees_activities.module#employees_activitiesModule', canActivate: [AuthGuard]  },
{ path: 'tasks', loadChildren: './tasks/tasks.module#tasksModule', canActivate: [AuthGuard]  },
{ path: 'monthly_payroll', loadChildren: './monthly_payroll/monthly_payroll.module#monthly_payrollModule', canActivate: [AuthGuard]  },


{ path: 'view_monthly_attendance_report', loadChildren: './view_monthly_attendance_report/view_monthly_attendance_report.module#view_monthly_attendance_reportModule', canActivate: [AuthGuard]  },
{ path: 'view_daily_attendance', loadChildren: './view_daily_attendance/view_daily_attendance.module#view_daily_attendanceModule', canActivate: [AuthGuard]  },
{ path: 'view_monthly_activity_report', loadChildren: './view_monthly_activity_report/view_monthly_activity_report.module#view_monthly_activity_reportModule', canActivate: [AuthGuard]  },
{ path: 'monthly_payroll_report', loadChildren: './monthly_payroll_report/monthly_payroll_report.module#monthly_payroll_reportModule', canActivate: [AuthGuard]  },
{ path: 'payroll_payslip', loadChildren: './payroll_payslip/payroll_payslip.module#payroll_payslipModule', canActivate: [AuthGuard]  },
{ path: 'monthly_customer_invoices', loadChildren: './monthly_customer_invoices/monthly_customer_invoices.module#monthly_customer_invoicesModule', canActivate: [AuthGuard]  },
{ path: 'monthly_customer_project_activities', loadChildren: './monthly_customer_project_activities/monthly_customer_project_activities.module#monthly_customer_project_activitiesModule', canActivate: [AuthGuard]  },
{ path: 'team_report', loadChildren: './team_report/team_report.module#team_reportModule', canActivate: [AuthGuard]  },
{ path: 'user_module_details', loadChildren: './user_module_details/user_module_details.module#user_module_detailsModule', canActivate: [AuthGuard]  },
{ path: 'project_employees_report', loadChildren: './project_employees_report/project_employees_report.module#project_employees_reportModule', canActivate: [AuthGuard]  },
{ path: 'day_wise_logs', loadChildren: './day_wise_logs/day_wise_logs.module#day_wise_logsModule', canActivate: [AuthGuard]  },

{ path: 'monthly_task_report', loadChildren: './monthly_task_report/monthly_task_report.module#monthly_task_reportModule', canActivate: [AuthGuard]  },
    
{ path: 'admin_customers', loadChildren: './admin_customers/admin_customers.module#admin_customersModule', canActivate: [AuthGuard]  },

{ path: 'activity_wise_task_report', loadChildren: './activity_wise_task_report/activity_wise_task_report.module#activity_wise_task_reportModule', canActivate: [AuthGuard]  },
{ path: 'team_wise_task_report', loadChildren: './team_wise_task_report/team_wise_task_report.module#team_wise_task_reportModule', canActivate: [AuthGuard]  },
{ path: 'employee_wise_task_report', loadChildren: './employee_wise_task_report/employee_wise_task_report.module#employee_wise_task_reportModule', canActivate: [AuthGuard]  },


{ path: 'team_angular_report', loadChildren: './team_angular_report/team_angular_report.module#team_angular_reportModule', canActivate: [AuthGuard]  },


{ path: 'user_projects', loadChildren: './user_projects/user_projects.module#user_projectsModule', canActivate: [AuthGuard]  },
{ path: 'project_wise_teams', loadChildren: './project_wise_teams/project_wise_teams.module#project_wise_teamsModule', canActivate: [AuthGuard]  },
{ path: 'create_leave_types', loadChildren: './create_leave_types/create_leave_types.module#create_leave_typesModule', canActivate: [AuthGuard]  },

{ path: 'user_roles', loadChildren: './user_roles/user_roles.module#user_rolesModule', canActivate: [AuthGuard]  },
{ path: 'get_users', loadChildren: './get_users/get_users.module#get_usersModule', canActivate: [AuthGuard]  },

{ path: 'home', loadChildren: './home/home.module#homeModule', canActivate: [AuthGuard]  },
{ path: 'workorders', loadChildren: './workorders/workorders.module#workordersModule', canActivate: [AuthGuard]  },
{ path: 'inventories', loadChildren: './inventories/inventories.module#inventoriesModule', canActivate: [AuthGuard]  },
{ path: 'service_items', loadChildren: './service_items/service_items.module#service_itemsModule', canActivate: [AuthGuard]  },
{ path: 'parts', loadChildren: './parts/parts.module#partsModule', canActivate: [AuthGuard]  },
{ path: 'labors', loadChildren: './labors/labors.module#laborsModule', canActivate: [AuthGuard]  },
{ path: 'categories', loadChildren: './categories/categories.module#categoriesModule', canActivate: [AuthGuard]  },

{ path: 'register', loadChildren: './register/register.module#registerModule', canActivate: [AuthGuard]  },

{ path: 'tables', loadChildren: './table/tables.module#TablesModule', canActivate: [AuthGuard] },
{ path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
{ path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
{ path: 'extra-component', loadChildren: './extra-component/extra-component.module#ExtraComponentsModule' },
{ path: 'apps', loadChildren: './apps/apps.module#AppsModule' },
{ path: 'sample-pages', loadChildren: './sample-pages/sample-pages.module#SamplePagesModule' }
]
},
{
path: '',
component: BlankComponent,
children: [
{
path: 'authentication',
loadChildren: './authentication/authentication.module#AuthenticationModule'
},
{ path: 'login', loadChildren: './login/login.module#LoginModule' }, 
]
}, 
{
path: '**',
redirectTo: '/authentication/404' 
}];



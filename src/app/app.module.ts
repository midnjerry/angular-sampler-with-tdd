import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterComponent } from './pages/router/router.component';
import { CodeblockComponent } from './components/codeblock/codeblock.component';
import { ComponentComponent } from './pages/component/component.component';
import { QuoteblockComponent } from './components/quoteblock/quoteblock.component';
import { ArticleComponent } from './components/article/article.component';
import { ResolverComponent } from './pages/resolver/resolver.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { DemoResolver } from './services/demo-resolver';
import { EarthquakeComponent } from './pages/earthquake/earthquake.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'router', component: RouterComponent },
  { path: 'component', component: ComponentComponent },
  {
    path: 'resolver',
    component: ResolverComponent,
    resolve: { persons: DemoResolver }
  },
  { path: 'observables', component: ObservablesComponent },
  { path: 'earthquake', component: EarthquakeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    RouterComponent,
    CodeblockComponent,
    ComponentComponent,
    QuoteblockComponent,
    ArticleComponent,
    ResolverComponent,
    ObservablesComponent,
    EarthquakeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LeafletModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

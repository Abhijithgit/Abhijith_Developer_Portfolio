import { Component, ElementRef, signal, viewChild, computed } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CONTENT } from './content';
type Project = (typeof CONTENT.projects)[number];
@Component({selector:'app-root', standalone:true, templateUrl:'./app.html'})
class AppComponent {
 readonly content = CONTENT;
 readonly filters = ['All work', 'Professional', 'Personal'] as const;
 readonly filter = signal<string>('All work');
 readonly menuOpen = signal(false);
 readonly activeProject = signal<Project | null>(null);
 readonly copyMessage = signal('Copy email');
 readonly projects = computed(() => this.content.projects.filter(p => this.filter() === 'All work' || p.category === this.filter()));
 readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('projectDialog');
 openProject(project: Project) { this.activeProject.set(project); this.dialog()?.nativeElement.showModal(); }
 closeProject() { this.dialog()?.nativeElement.close(); }
 closeMenu() { this.menuOpen.set(false); }
 closeBackdrop(event: MouseEvent) { if (event.target === this.dialog()?.nativeElement) this.closeProject(); }
 async copyEmail() {
  try { await navigator.clipboard.writeText('abhijithea783@gmail.com'); this.copyMessage.set('Email copied'); }
  catch { this.copyMessage.set('Email: abhijithea783@gmail.com'); }
  setTimeout(() => this.copyMessage.set('Copy email'), 5000);
 }
}
bootstrapApplication(AppComponent).catch(error => console.error(error));

import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef,
} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DynamicComponentService {
  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  //list of created component references
  private componentsReferences: ComponentRef<Type<any>>[] = [];

  public content: any;

  addComponent(component: Type<any>, host: ViewContainerRef, content?: any) {
    const modalContentCmpFactory = this._componentFactoryResolver.resolveComponentFactory(
      component
    );

    const hostViewContainerRef = host;

    //hostViewContainerRef.clear();

    const newComponent = hostViewContainerRef.createComponent(
      modalContentCmpFactory
    );
    if (content !== undefined) {
      newComponent.instance.content = content;
    }

    //add reference for newly create component
    this.componentsReferences.push(newComponent);
  }

  removeComponents() {
    this.componentsReferences.map((componentRef) => componentRef.destroy());
  }
}

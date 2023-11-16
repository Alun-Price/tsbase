class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement; // access to template el
    this.hostElement = document.getElementById("app")! as HTMLDivElement; // where template will go

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); // get the template content, true = nested and deep clone
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach(); // call the private attach method
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput(); // instantiate the class

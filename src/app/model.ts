export class ToDoItem {
  constructor(
    public description: string,
    public action: boolean = false
  ) {}
}

export class Model {
  items: ToDoItem[];

  constructor() {
    this.items = [
      new ToDoItem("Spor", true),
      new ToDoItem("Kahvaltı"),
      new ToDoItem("Sinema"),
      new ToDoItem("Ders Çalışma"),
    ];
  }
}

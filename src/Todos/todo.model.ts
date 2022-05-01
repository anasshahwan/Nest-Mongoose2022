export class TodoModel {
  id: string;
  title: string;
  isCompleted: boolean;
  constructor(id: string, title: string, isCompleted: boolean) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
  }
}

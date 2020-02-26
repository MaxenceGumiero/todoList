export class Todo {

  constructor(
    private id: number,
    private userId: number,
    private title: string,
    private completed: boolean,
  ) {}

  public getId = (): number => {
    return this.id;
  }

  public setId = (value: number): void => {
    this.id = value;
  }

  public getUserId = (): number => {
    return this.userId;
  }

  public setUserId = (value: number): void => {
    this.userId = value;
  }

  public getTitle = (): string => {
    return this.title;
  }

  public setTitle= (value: string): void => {
    this.title= value;
  }

  public getCompleted = (): boolean => {
    return this.completed;
  }

  public setCompleted = (value: boolean): void => {
    this.completed = value;
  }
}

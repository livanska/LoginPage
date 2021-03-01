export interface IApp {
  name: string;
  setName(name: string): void;
  //projects: IProject[];   // changed for user method (static in App class)
  addProject(project: IProject): void;
}

export interface IUser {
  id: number;
  name: string;
  getAttachedTasks: () => ITask[];
  getTotalWorkingTime: () => number;
}

export interface ITask {
  id: number;
  durationInMin: number;
  completed: boolean;
  developer: IUser;
  title: string;
  getInfo(): string;
}

export interface IProject {
  tasks: ITask[];
  addTask(task: ITask): void;
  editTask(task: Partial<ITask>): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): ITask[];
}

export class Task implements ITask {
  private static counter = 0;
  constructor(
    public id: number,
    public durationInMin: number,
    public completed: boolean,
    public title: string,
    public developer: IUser
  ) {
    this.id = Task.counter++;
  }
  getInfo(): string {
    return `#${this.id} ${this.title} ${this.completed ? 'completed' : 'not completed'}` as string;
  }
}

export class User implements IUser {
  private static counter = 0;
  constructor(public id: number, public name: string) {
    this.id = User.counter++;
  }
  getAttachedTasks(): ITask[] {
    let userTasks: ITask[] = [];
    App.projects.forEach(p => {
      userTasks.concat(p.getAllTasksByDeveloper(this.id));
    });
    return userTasks;
  }
  getTotalWorkingTime(): number {
    return this.getAttachedTasks().reduce((sum, current) => sum + current.durationInMin, 0);
  }
}

export class App implements IApp {
  public static projects: IProject[] = [];
  constructor(public name: string) {}
  setName(name: string) {
    this.name = name;
  }
  addProject(project: IProject) {
    App.projects.push(project);
  }
}

export class Project implements IProject {
  public tasks: ITask[] = [];
  constructor() {}
  addTask(task: ITask) {
    this.tasks.push(task);
  }
  getTotalTime(): number {
    let total = 0;
    this.tasks.forEach(t => (total += t.durationInMin));
    return total;
  }
  getAllTasksByDeveloper(id: number): ITask[] {
    return this.tasks.filter(t => t.id === id);
  }
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
  editTask(task: Partial<ITask>): void {
    this.tasks = this.tasks.map(t => {
      if (t.id === task.id) {
        return {
          ...t,
          ...task
        };
      } else return t;
    });
  }
}

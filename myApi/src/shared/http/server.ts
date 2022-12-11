export class AppServer {
  private app: string

  constructor(info: string) {
    this.app = info ?? 'Olá Mundo' //?? = caso não tenha nada dentro da variável info ou qualquer q tenha sido criada
  }
}

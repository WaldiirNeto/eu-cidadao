# Eu cidadão - FRONTEND -ANGULAR

Olá frontends, esse README tem o intuito de auxiliar vocês para alguns padrões e diretivas que devemos seguir no projeto.

## Upgrade do Angular CLI

Usaremos a versão mais atualizada, (Não se preocupe isso não afetará os outros projetos com versões mais antigas)

```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@latest
```

## Instalando dependências do projeto

Entre na pasta `EUCIDADAOFRONTEND` e digite o seguinte comando

```bash
npm install
```

Com isso você já é capaz de rodar o projeto

## Rodando o projeto local

Vou deixar alguns comando que podemos rodar de acordo com o ambiente

```bash
ng s (por enquanto sem ambientes)
```

## HTML5 - GUIDELINE

Nesse tópico abordaremos alguns conceitos e semânticas do HTML 5 no projeto

## 1.`<section>`

O elemento HTML `<section>` representa uma seção genérica contida em um documento HTML, geralmente com um título, quando não existir um elemento semântico mais específico para representá-lo.

Por exemplo, um menu de navegação deve estar dentro um elemento `<nav>`, mas uma lista de resultados de pesquisa ou a exibição de um mapa e seus controles não possuem elementos específicos, e podem ser colocados dentro de uma `<section>`.

:heavy_check_mark: BOM

```html
<section>
  <h1>Mussum Ipsum</h1>
  <p>Mussum Ipsum, cacilds vidis litro abertis.</p>
</section>
```

:x: RUIM

```html
<div>
  <h1>Mussum Ipsum</h1>
  <p>Mussum Ipsum, cacilds vidis litro abertis.</p>
</div>
```

Um Exemplo mais detalhado:
:heavy_check_mark: BOM

```html
<section>
  <header>
    <h1>Page Title Goes Here</h1>
    <p>Tagline!</p>
    <nav>
      <a href="example.com">Mussum Ipsum</a>
      <a href="example.com">Mussum Ipsum</a>
      <a href="example.com">Mussum Ipsum</a>
    </nav>
  </header>
</section>
```

:x: RUIM

```html
<div class="header">
  <h1 class="page-title">Page Title Goes here</h1>
  <p>Tagline!</p>
  <div class="header-menu">
    <ul>
      <li><a href="example.com">Home Page Link</a></li>
      <li><a href="example.com">Blog Page Link</a></li>
      <li><a href="example.com">Podcast Page Link</a></li>
    </ul>
  </div>
</div>
```

## CSS GUIDELINE

Neste tópico abordaremos algumas boas práticas que devemos ter ao criar estilos no projeto

## 2. Não use seletores `<ID>`

Não há realmente necessidade de usar seletores de ID — eles são menos flexíveis (você não pode adicionar mais se você descobrir que precisa de mais de um), e são mais difíceis de substituir se necessário, sendo de uma especificidade maior do que as classes.

:heavy_check_mark: BOM

```css
.table-user {
  ...;
}
```

:x: RUIM

```css
#table-user {
  ...;
}
```

## 2.1 Matenha uma declaração por linha

:heavy_check_mark: BOM

```css
h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}
```

:x: RUIM

```css
h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}
```

## 2.2 Evite especificar unidades que são de valores zero

:heavy_check_mark: BOM

```bash
 color: #ffffff;
  margin: 0;
```

:x: RUIM

```bash
 color: #ffffff;
  margin: 0px;
```

## 2.3 As propriedades devem ser criadas em ordem alfabética

:heavy_check_mark: BOM

```css
.selector {
  background: #fff;
  border: #333 solid 1px;
  color: #333;
  display: flex;
  height: 200px;
  margin: 5px;
  padding: 5px;
  width: 200px;
}
```

:x: RUIM

```css
.selector {
  padding: 5px;
  height: 200px;
  background: #fff;
  margin: 5px;
  width: 200px;
  color: #333;
  border: #333 solid 1px;
  display: flex;
}
```

## 2.4 sem preguiça! nomes significativos para as classes separadas por traços

:heavy_check_mark: BOM

```css
.button {
  ...;
}
.progress-bar {
  ...;
}
```

:x: RUIM

```css
.bnt {
  ...;
}
.prgss {
  ...;
}
```

## 2.5 Convenção de nomeação [BEM](http://getbem.com/introduction/)

A BEM divide as classes dos componentes em três grupos:

- Bloco: A única raiz do componente.
- Elemento: Uma parte componente do Bloco.
- Modificador: Uma variante ou extensão do Bloco.

Exemplo:

```css
.page-header {
  ...;
}
.page-header__title {
  ...;
}
.page-header--active {
  ...;
}
```

E no SASS? segue o exemplo:

```css
.page-header {
  &__title {
    ...;
  }
  &--active {
    ...;
  }
}
```

## 2.6 Não use valores de cores diretamente nos elementos, use variáveis SASS (no nosso caso)

:heavy_check_mark: BOM

```css
.button {
  color: $button-color-primary;
}
```

:x: RUIM

```css
.button {
  color: #fff;
}
```

## 2.7 Não estilize diretamente os elementos, gera conflitos e dores de cabeça

:heavy_check_mark: BOM

```css
.form-control {
  ...;
}
.header {
  ...;
}
.section {
  ...;
}
```

:x: RUIM

```css
nav
header
input[type="text"] { ... }
section
```

## 3. JAVASCRIPT GUIDELINE

## 3.1 Não use semicolon

:heavy_check_mark: BOM

```javascript
console.log("test");
```

:x: RUIM

```javascript
console.log("test");
```

## 3.1 Sempre usar aspas simples

:heavy_check_mark: BOM

```javascript
const project = "ASUS";
```

:x: RUIM

```javascript
const project = "ASUS";
```

## 3.2 Faça comparações rigorosas

:heavy_check_mark: BOM

```javascript
if (string === "string") {
  statement;
}
```

:x: RUIM

```javascript
if (string == "string") {
  statement;
}
```

## 3.3 Use variáveis com nomes claros e que sejam pronunciavéis em inglês

:heavy_check_mark: BOM

```javascript
const userList = ["user1", "user2"];
```

:x: RUIM

```javascript
const lista = ["user1", "user2"];
```

## 3.4 variáveis para validações

:heavy_check_mark: BOM

```javascript
const checkUserActive = user.isActive && user.isLogged;
if (checkUserActive) {
  statement;
}
```

:x: RUIM

```javascript
if (user.isActive && user.isLogged) {
  statement;
}
```

## 3.5 Evite múltiplos IF's

:heavy_check_mark: BOM

```javascript
 errorCode(Error: string): string {
   return {
     'ERROR-01': 'Erro 01 encontrado',
     'ERROR-02': 'Erro 02 encontrado',

   }[error]
 }
```

:x: RUIM

```javascript
 errorCode(Error:): string {
   if(error === 'ERROR-01') {
      return 'ERRO 01 encontrado'
   }
    if(error === 'ERROR-02') {
      return 'ERRO 02 encontrado'
   }
 }
```

## 3.6 váriaveis e injeções de dependências privadas devem começar com `_`

:heavy_check_mark: BOM

```javascript
private _loading: boolean
constructor(private _userService: UserService) {}
```

:x: RUIM

```javascript
private loading: boolean
constructor(private userService: UserService) {}
```

## 4. ANGULAR - GUIDELINE

## 4.1 RXJS

## 4.1.1 `Memory leak` - [RXJS](https://rxjs.dev/guide/overview)

No angular usaremos RXJS para observar eventos, requisições e posteriormente acabamos liberando memoria para suprir esses observers, para nos ajudar com isso, devemos limpar a memória toda vez que o component for destruído

Pra facilitar o entendimento irei deixar um artigo [AQUI](https://medium.com/angular-in-depth/how-to-create-a-memory-leak-in-angular-4c583ad78b8b)

Exemplo básico:

```javascript

export class LoginComponent implements Oninit, OnDestroy {

  public userList: UserList
  private destroy$: Subject<void> = new Subject<void>()

 ...

  ngOninit(): void {
    this.userService.getUsers().pipe(TakeUntil(this.destroy$)).subscribe((userList: UserList) => {
        this.userList = userList
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()

  }
}
```

## 4.1.2 Sempre use `pipeAsync` para renderizar listas no template

Usando essa prática não precisaremos nos preocupar com vazamentos de mémoria já que o Angular faz automáticamente com o `AsyncPipe` :tada:

:heavy_check_mark: BOM

```javascript

export class LoginComponent implements Oninit{

  public userList$:  Observable<UserList>

...

  ngOninit(): void {
    this.userList  = this.userService.getUsers();
  }

}
```

```html
<table>
  <tr *ngFor="let list of this.userList | async">
    ...
  </tr>
</table>
```

:x: RUIM

```javascript

export class LoginComponent implements Oninit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>()
  public userList: UserList

...

  ngOninit(): void {
    this.userService.getUsers().pipe(TakeUntil(this.destroy$)).subscribe((userList) => {
        this.userList = userList
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()

  }
}

```

```html
<table>
  <tr *ngFor="let list of this.userList">
    ...
  </tr>
</table>
```

## 4.1.3 Utilize o `finalize` quando o observável for concluído

:heavy_check_mark: BOM

```bash
export class LoginComponent implements Oninit, OnDestroy {
  private _destroy$: Subject<void> = new Subject<void>()
  private _loading: false

  createUser(): void {
    private _loading = true
   this._authenticationService
   .auth(this.form.value)
   .pipe(
   takeUntil(this._destroy$),
   finalize(() => { this._loading = false; }) )
   .subscribe({ next: (user: AccountModel) => { .... },
   error: (helpError:ErrorResponseHelper) => { .... } })
   }
   ngOnDestroy(): void {
   this._destroy$.next()
   this._destroy$.complete() }
}
```

## 5. ANGULAR - STYLE GUIDES

- No máximo 75 linhas por funções. Por que? Funções pequenas são mais fáceis de testar, especialmente quando fazem uma coisa e servem a um propósito.

- Overall structural guidelines
  Comece pequeno, mas tenha em mente para onde a aplicação está indo.

  - Tenha uma visão de curto prazo da implementação e uma visão de longo prazo.

  - Coloque todo o código do aplicativo em uma pasta chamada .src

  - Considere criar uma pasta para um componente quando ele tiver vários arquivos de acompanhamento (, , e )..ts.html.css.spec

  - Por que? Ajuda a manter a estrutura de aplicação pequena e fácil de manter nos estágios iniciais, ao mesmo tempo em que é fácil evoluir à medida que a aplicação cresce.

  - Por que? Os componentes geralmente têm quatro arquivos (por exemplo, , , e ) e podem desordenar uma pasta rapidamente. (html,css,ts,spec)

Aqui está uma pasta compatível e estrutura de arquivos:

- app
  - pages
    - user
      - components
        - button
        - table
      - user-list

## REFERÊNCIAS

[Angular - styleguide](https://angular.io/guide/styleguide)  
[Juntos somos mais](https://github.com/juntossomosmais/frontend-guideline#1-general-code-patterns)  
[Memory Leak](https://medium.com/angular-in-depth/how-to-create-a-memory-leak-in-angular-4c583ad78b8b)  
[RXJS](https://www.learnrxjs.io/)  
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)  
[CSS - BEM](http://getbem.com/introduction/)

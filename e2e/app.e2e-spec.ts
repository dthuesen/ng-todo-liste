import { TodoListePage } from './app.po';

describe('todo-liste App', function() {
  let page: TodoListePage;

  beforeEach(() => {
    page = new TodoListePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

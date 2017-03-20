import { StudyGroupPage } from './app.po';

describe('study-group App', () => {
  let page: StudyGroupPage;

  beforeEach(() => {
    page = new StudyGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

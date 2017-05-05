import { Ng4CourseProjPage } from './app.po';

describe('ng4-course-proj App', () => {
  let page: Ng4CourseProjPage;

  beforeEach(() => {
    page = new Ng4CourseProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

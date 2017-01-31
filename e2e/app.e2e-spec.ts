import { DeploymentSamplePage } from './app.po';

describe('deployment-sample App', function() {
  let page: DeploymentSamplePage;

  beforeEach(() => {
    page = new DeploymentSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

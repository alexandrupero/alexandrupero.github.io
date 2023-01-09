import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { CvConsole } from '../src/cv-console.js';

describe('CvConsole', () => {
  let element: CvConsole;
  beforeEach(async () => {
    element = await fixture(html`<cv-console></cv-console>`);
  });

  it('is defined', () => {
    // Without using an instance of CvConsole here, the compile process would throw out the import statement.
    const cvConsoleElement = document.createElement('cv-console');
    expect(cvConsoleElement).to.be.instanceof(CvConsole);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('has styling applied', async () => {
    expect(getComputedStyle(element).maxWidth).to.equal('960px');
  });
});

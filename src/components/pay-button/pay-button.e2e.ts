import { newE2EPage } from '@stencil/core/testing';

describe('pay-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pay-button></pay-button>');
    const element = await page.find('pay-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<pay-button></pay-button>');
    const component = await page.find('pay-button');
    const element = await page.find('pay-button >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('buttonid', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});

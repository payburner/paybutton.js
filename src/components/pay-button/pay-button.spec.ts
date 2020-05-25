import { newSpecPage } from '@stencil/core/testing';
import { PayButton } from './pay-button';

describe('pay-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [PayButton],
      html: '<pay-button></pay-button>'
    });
    expect(root).toEqualHtml(`
      <pay-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </pay-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [PayButton],
      html: `<pay-button buttonid="Stencil" last="'Don't call me a framework' JS"></pay-button>`
    });
    expect(root).toEqualHtml(`
      <pay-button buttonid="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </pay-button>
    `);
  });
});

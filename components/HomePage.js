import { LayoutComponent } from './LayoutComponent.js';
import { HomeComponent } from './HomeComponent.js';

export const HomePage = {
  render: () => {
    return LayoutComponent.render(HomeComponent.render());
  }
};

import { HeaderComponent } from "./HeaderComponent.js";

export const LayoutComponent = {
  render: (content) => {
    return `
      <div class="layout">
        ${HeaderComponent.render()}
        <main>
          ${content}
        </main>
      </div>
    `;
  }
};


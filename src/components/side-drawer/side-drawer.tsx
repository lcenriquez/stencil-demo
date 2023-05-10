import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
  // scoped: true // can be used instead of the shadow DOM. Will prevent class collissions
})
// Stencil extends HTMLElement for us :D
export class SideDrawer {
  @Prop({ reflect: true }) heading: string; // reflect makes the html attribute change when modified programmatically

  render() {
    return (
      <aside>
        <header>
          <h1>{this.heading}</h1>
        </header>
        <slot></slot>
      </aside>
    );
  }
}

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
  @Prop({ mutable: true, reflect: true }) open: boolean; // we need to set mutable to true if we want to change an attribute value from within the component itself

  render() {
    return (
      <aside>
        <header>
          <h1>{this.heading}</h1>
          <button onClick={() => (this.open = false)}>x</button>
        </header>
        <slot></slot>
      </aside>
    );
  }
}

import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'imagen-click'
})
export class MyComponent {
  @State() showImage: boolean = false;

  toggleImageVisibility() {
    this.showImage = !this.showImage;
  }

  render() {
    return (
      <div>
        <evento-click onCustomClick={() => this.toggleImageVisibility()}></evento-click><br></br>
        {this.showImage && <img src="perro.jpg" alt="Imagen"/>}
      </div>
    );
  }
}
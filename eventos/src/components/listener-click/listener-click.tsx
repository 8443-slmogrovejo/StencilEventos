import { Component, h } from '@stencil/core';

@Component({
  tag: 'listener-click'
})
export class AppRoot {
  handleCustomClick() {
    window.alert('¡Esto es una alerta!');
  }

  render() {
    return (
      <div>
        <evento-click onCustomClick={() => this.handleCustomClick()}></evento-click>
      </div>
    );
  }
}
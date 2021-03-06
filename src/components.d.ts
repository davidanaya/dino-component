/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  Dino,
} from './classes/Dino';
import {
  EventEmitter,
} from '@stencil/core';
import {
  SideDrawerDirection,
} from './components/side-drawer/side-drawer-consts';


export namespace Components {

  interface DinoButton {
    'btnClick': () => void;
    'btnClicked': () => void;
    'text': string;
  }
  interface DinoButtonAttributes extends StencilHTMLAttributes {
    'btnClicked'?: () => void;
    'text'?: string;
  }

  interface DinoDetails {
    'dinosaur': Dino;
  }
  interface DinoDetailsAttributes extends StencilHTMLAttributes {
    'dinosaur'?: Dino;
  }

  interface DinoTile {
    'dinosaur': Dino;
    'dinosaurSelectedHandler': () => void;
    'selected': boolean;
  }
  interface DinoTileAttributes extends StencilHTMLAttributes {
    'dinosaur'?: Dino;
    'onDinosaurSelected'?: (event: CustomEvent<Dino>) => void;
    'selected'?: boolean;
  }

  interface DinoTiles {
    'dinosaurs': Array<Dino>;
  }
  interface DinoTilesAttributes extends StencilHTMLAttributes {
    'dinosaurs'?: Array<Dino>;
    'onDinosaurSelectedIndex'?: (event: CustomEvent<number>) => void;
  }

  interface SideDrawer {
    'anchorDirection': SideDrawerDirection;
    'drawerWidth': number;
    'openDrawer': boolean;
  }
  interface SideDrawerAttributes extends StencilHTMLAttributes {
    'anchorDirection'?: SideDrawerDirection;
    'drawerWidth'?: number;
    'onOnOverlayClick'?: (event: CustomEvent) => void;
    'openDrawer'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DinoButton': Components.DinoButton;
    'DinoDetails': Components.DinoDetails;
    'DinoTile': Components.DinoTile;
    'DinoTiles': Components.DinoTiles;
    'SideDrawer': Components.SideDrawer;
  }

  interface StencilIntrinsicElements {
    'dino-button': Components.DinoButtonAttributes;
    'dino-details': Components.DinoDetailsAttributes;
    'dino-tile': Components.DinoTileAttributes;
    'dino-tiles': Components.DinoTilesAttributes;
    'side-drawer': Components.SideDrawerAttributes;
  }


  interface HTMLDinoButtonElement extends Components.DinoButton, HTMLStencilElement {}
  var HTMLDinoButtonElement: {
    prototype: HTMLDinoButtonElement;
    new (): HTMLDinoButtonElement;
  };

  interface HTMLDinoDetailsElement extends Components.DinoDetails, HTMLStencilElement {}
  var HTMLDinoDetailsElement: {
    prototype: HTMLDinoDetailsElement;
    new (): HTMLDinoDetailsElement;
  };

  interface HTMLDinoTileElement extends Components.DinoTile, HTMLStencilElement {}
  var HTMLDinoTileElement: {
    prototype: HTMLDinoTileElement;
    new (): HTMLDinoTileElement;
  };

  interface HTMLDinoTilesElement extends Components.DinoTiles, HTMLStencilElement {}
  var HTMLDinoTilesElement: {
    prototype: HTMLDinoTilesElement;
    new (): HTMLDinoTilesElement;
  };

  interface HTMLSideDrawerElement extends Components.SideDrawer, HTMLStencilElement {}
  var HTMLSideDrawerElement: {
    prototype: HTMLSideDrawerElement;
    new (): HTMLSideDrawerElement;
  };

  interface HTMLElementTagNameMap {
    'dino-button': HTMLDinoButtonElement
    'dino-details': HTMLDinoDetailsElement
    'dino-tile': HTMLDinoTileElement
    'dino-tiles': HTMLDinoTilesElement
    'side-drawer': HTMLSideDrawerElement
  }

  interface ElementTagNameMap {
    'dino-button': HTMLDinoButtonElement;
    'dino-details': HTMLDinoDetailsElement;
    'dino-tile': HTMLDinoTileElement;
    'dino-tiles': HTMLDinoTilesElement;
    'side-drawer': HTMLSideDrawerElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

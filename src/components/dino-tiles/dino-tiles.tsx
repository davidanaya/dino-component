import {
  Component,
  Event,
  EventEmitter,
  Listen,
  Prop,
  State
} from "@stencil/core";
import { Dino } from "../../classes/Dino";

@Component({
  tag: "dino-tiles",
  styleUrl: "dino-tiles.css",
  shadow: true
})
export class DinoTiles {
  @State() selected: Dino;
  @Prop() dinosaurs: Array<Dino>;
  @Event() dinosaurSelectedIndex: EventEmitter<number>;

  componentWillLoad() {
    this.selected = this.dinosaurs ? this.dinosaurs[0] : undefined;
  }

  @Listen("dinosaurSelected")
  dinosaurSelectedHandler(event: CustomEvent) {
    this.selected = event.detail;
    this.dinosaurSelectedIndex.emit(this.dinosaurs.indexOf(this.selected));
  }

  renderItems() {
    if (this.dinosaurs) {
      return this.dinosaurs.map(dinosaur => {
        return (
          <dino-tile
            selected={this.selected === dinosaur}
            dinosaur={dinosaur}
          />
        );
      });
    }
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "placeholder" })
export class PlaceHolderPipe implements PipeTransform {
  transform(value: string, text: string): string {
    return value ? value : text;
  }
}

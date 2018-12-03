import { ScreenType } from "./screen-type";
import { ScreenData } from "./screen-data";

export class Horizontal {
  private static defaults = {
    screenType: {
      xs: 576,
      sm: 768,
      md: 1200,      
    }
  }

  static getData(): ScreenData {
    const width = this.getWidth();
    return {
      width,
      screenType: this.getType(width)
    } as ScreenData;    
  }

  static getType(width?: number) : ScreenType {
    if(!width) {
      width = this.getWidth();
    }
    
    // @ts-ignore
    if(width < this.defaults.screenType.xs) {
      return ScreenType.XS;
    }
    // @ts-ignore
    else if(width < this.defaults.screenType.sm) {
      return ScreenType.SM;
    }
    // @ts-ignore
    else if(width < this.defaults.screenType.md) {
      return ScreenType.MD;
    }

    return ScreenType.LG
  }

  static setDefaults(xs: number, sm: number, md: number) {
    this.defaults.screenType.xs = xs || this.defaults.screenType.xs;
    this.defaults.screenType.sm = sm || this.defaults.screenType.sm;
    this.defaults.screenType.xs = md || this.defaults.screenType.md;
  }

  static getWidth() {
    var e:any = window, a = 'inner';
    if (!('innerWidth' in window)) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return e[a + 'Width'];
  }
}




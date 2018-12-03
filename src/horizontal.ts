import { WindowWidthType } from "./window-width-type";
import { WindowData } from "./window-data";

export class Horizontal {
  private static defaults = {
    screenType: {
      xs: 576,
      sm: 768,
      md: 1200,      
    }
  }

  static getData(): WindowData {
    const width = this.getWidth();
    return {
      width,
      widthType: this.getType(width)
    } as WindowData;    
  }

  static getType(width?: number) : WindowWidthType {
    if(!width) {
      width = this.getWidth();
    }
    
    // @ts-ignore
    if(width < this.defaults.screenType.xs) {
      return WindowWidthType.XS;
    }
    // @ts-ignore
    else if(width < this.defaults.screenType.sm) {
      return WindowWidthType.SM;
    }
    // @ts-ignore
    else if(width < this.defaults.screenType.md) {
      return WindowWidthType.MD;
    }

    return WindowWidthType.LG
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




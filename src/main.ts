import * as PIXI from "pixi.js";
import * as PSpine from "@pixi/spine-pixi";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(PixiPlugin);
/**
 * Useful links
 * PIXI.js API https://pixijs.download/release/docs/index.html
 * GSAP with PIXI https://gsap.com/docs/v3/Plugins/PixiPlugin/
 * PIXI v8 Spine Implementation https://github.com/pixijs/spine-v8
 */

 (async () => {
  const app = new PIXI.Application();
  await app.init({
    background: 0x000000,
    resizeTo: window,
    resolution: window.devicePixelRatio,
    hello: true,
  });
  document.body.appendChild(app.canvas as HTMLCanvasElement);
  const tex = await PIXI.Assets.load("assets/sprites/l_1.jpg");
  const l_1 = new PIXI.Sprite(tex);
  l_1.anchor.set(0.5);
  l_1.x = 500;
  l_1.y = 500;
  app.stage.addChild(l_1);
  gsap.to(l_1, { pixi: { rotation: 360 }, duration: 1 });
})();


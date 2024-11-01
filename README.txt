INSTALLATION:
- run 'pnpm i'
BUILD:
- run 'pnpm build'
VIEW:
- expose the dist folder however you usually would, Docker, MAMP, XAMP, etc

Useful links
- PIXI.js API https://pixijs.download/release/docs/index.html
- GSAP with PIXI https://gsap.com/docs/v3/Plugins/PixiPlugin/
- PIXI v8 Spine Implementation https://github.com/pixijs/spine-v8


Task:
  Given the data within winnings.json:
  Create a 5 x 5 grid of symbols that will represent the reels.
  Display the symbols represented by "grid" in winnings.json.
  Their mappings are as follows:
    0 - WILD
    1 - DIAMOND
    2 - ACE
    3 - KING
    4 - QUEEN
    5 - JACK

  Cycle through the entries within the "winlines" list and animate the winning symbols 
  Animate the value paid out for each winline using PIXI Text.

N.B: 
  WILD symbols can represent any symbol in the case of a win


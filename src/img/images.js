import uniqid from "uniqid";

import bird from "./bird-icon.png";
import cat from "./black-cat-icon.png";
import bunny from "./bunny-icon.png";
import chicken from "./chicken-icon.png";
import cow from "./cow-icon.png";
import crab from "./crab-icon.png";
import dog from "./dog-icon.png";
import dolphin from "./dolphin-icon.png";
import jellyfish from "./jellyfish-icon.png";
import mouse from "./mouse-icon.png";
import pig from "./pig-icon.png";
import sheep from "./sheep-icon.png";
import squirrel from "./squirrel-icon.png";
import turkey from "./turkey-icon.png";
import turtle from "./turtle-icon.png";

const animals = [
  { name: "bird", img: bird, id: uniqid() },
  { name: "cat", img: cat, id: uniqid() },
  { name: "bunny", img: bunny, id: uniqid() },
  { name: "chicken", img: chicken, id: uniqid() },
  { name: "cow", img: cow, id: uniqid() },
  { name: "crab", img: crab, id: uniqid() },
  { name: "dog", img: dog, id: uniqid() },
  { name: "dolphin", img: dolphin, id: uniqid() },
  { name: "jellyfish", img: jellyfish, id: uniqid() },
  { name: "mouse", img: mouse, id: uniqid() },
  { name: "pig", img: pig, id: uniqid() },
  { name: "sheep", img: sheep, id: uniqid() },
  { name: "squirrel", img: squirrel, id: uniqid() },
  { name: "turkey", img: turkey, id: uniqid() },
  { name: "turtle", img: turtle, id: uniqid() },
];

export default animals;
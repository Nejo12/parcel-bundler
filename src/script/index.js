import { getFullName } from "./utils";
import { greet } from "./greet";
import "../styles/index.scss";

const firstName = getFullName("Gabriel Olaniyi");

console.log(firstName);

document.querySelector("h1").textContent = greet(`How are you doing?`);

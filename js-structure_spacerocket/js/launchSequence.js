import { countdown} from "./core/countdown.js";
import {fuel} from "./core/fuel.js";
import {loadPayload} from "./core/load.js";
import {liftoff} from "./core/liftoff.js";
import {deployPayload} from "./core/deploy.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { getRocket } from "./core/rocket.js";

export default function launchSequence() {
  // Step 1: Load the payload
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  // Step 2: Fuel the rocket
  fuel();

  // Step 3: Start the countdown
  const rocket = getRocket();   // getRocket calls the rocket instance
  while (rocket.countdown < 5) {
    countdown();
  }

  // Step 4: Liftoff
  liftoff();

  // Step 5: Deploy the payload
  deployPayload();
}
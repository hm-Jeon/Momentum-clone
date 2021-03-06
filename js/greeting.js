import * as root from "./root.js";
import { focusElement, paintSavedFocus } from "./focus.js";
import { onGeoOk, onGeoError } from "./weather.js";

function greetingMent() {
  const hour = new Date().getHours();
  let ment;
  if (hour > 5 && hour <= 10) {
    ment = "Good mourning,";
  } else if (hour > 10 && hour <= 17) {
    ment = "Good afternoon,";
  } else if (hour > 17 && hour <= 22) {
    ment = "Good evening,";
  } else {
    ment = "Good night,";
  }
  return ment;
}

const elementToPaint = [
  root.greeting,
  root.clock,
  root.quote,
  root.author,
  root.todoOpen,
];

export function paintGreetings(username) {
  const greetingMentSpan = document.createElement("span");
  greetingMentSpan.innerText = `${greetingMent()} `;
  const usernameSpan = document.createElement("span");
  usernameSpan.innerText = `${username}.`;
  root.greeting.appendChild(greetingMentSpan);
  root.greeting.appendChild(usernameSpan);
  elementToPaint.forEach((element) =>
    element.classList.remove(root.HIDDEN_CLASSNAME)
  );

  // Focus
  focusElement.forEach((element) =>
    element.classList.remove(root.HIDDEN_CLASSNAME)
  );
  root.focusDiv.classList.add(root.MIN_HEIGHT_CLASS_NAME);
  root.focusListDiv.classList.add(root.MIN_HEIGHT_CLASS_NAME);
  paintSavedFocus();

  // Weather
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

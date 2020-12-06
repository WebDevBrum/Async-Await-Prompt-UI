function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ask(options) {
  return new Promise(async function (resolve) {
    // First we need to create a popup with all the fields in it
    const popup = document.createElement("form");
    popup.classList.add("popup");
    popup.insertAdjacentHTML(
      "afterbegin",
      `
      <fieldset>
        <label>${options.title}</label>
      </fieldset>
    `
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement("button");
      skipButton.type = "button";
      skipButton.textContent = "cancel";
      // TODO: listen for a click on the cancel button
    }
    // listen for the submit event on the inputs
    // when someone does sublmit it, resolve the data that was in the input box

    // insert that popup into the dom
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class as clashing with add popup to classlist above
    // setTimeout(function () {
    //   popup.classList.add("open");
    // }, 50);

    // alternatively do this with async await
    await wait(50);
    popup.classList.add("open");
  });
}

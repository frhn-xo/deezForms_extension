let formData = {};
function logForm() {
    let labels = document.querySelectorAll('.M7eMe');

    labels.forEach((e, i) => {
        const label = e.innerText;
        const index = i + 1;

        let input = document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input`);

        let textArea =
            document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.RpC4Ne.oJeWuf > div.Pc9Gce.Wic03c > textarea`);

        let placeHolder;

        console.log("...");
        console.log(label);

        if (input) {
            console.log("this is an input tag");
            placeHolder = document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > div`);
            if (placeHolder) {
                placeHolder.remove();
            }

            // start

            function triggerFocus(element) {
                // console.log(input);
                console.log("inside trig func");
                let eventType = "onfocusin" in element ? "focusin" : "focus";
                let bubbles = "onfocusin" in element;
                let event;

                if ("Event" in window) {
                    event = new Event(eventType, { bubbles: bubbles, cancelable: true });
                }

                setTimeout(() => {
                    element.focus();
                    element.dispatchEvent(event);
                    console.log("end of settimeout");
                    // input.value = "input fillu";
                    function simulateHumanTyping(inputElement, text) {
                        var inputEvent = new Event('input', { bubbles: true });
                        var index = 0;

                        function typeCharacter() {
                            if (index < text.length) {
                                inputElement.value += text[index];
                                inputElement.dispatchEvent(inputEvent);
                                index++;
                                setTimeout(typeCharacter, 200); // Adjust the timing as needed
                            }
                        }

                        typeCharacter();
                    }

                    simulateHumanTyping(element, "hello");
                }, 1000);
            }

            triggerFocus(input);

            // end

            formData[index] = { label: label.trim() };
            formData[index].type = "short";

            console.log(input.value);

        } else if (textArea) {
            console.log("this is a textarea");
            placeHolder = document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.RpC4Ne.oJeWuf > div`);
            if (placeHolder) {
                placeHolder.remove();
            }

            // textArea.value = "textarea filler"
            // start

            function triggerFocus(element) {
                // console.log(input);
                console.log("inside trig func");
                let eventType = "onfocusin" in element ? "focusin" : "focus";
                let bubbles = "onfocusin" in element;
                let event;

                if ("Event" in window) {
                    event = new Event(eventType, { bubbles: bubbles, cancelable: true });
                }

                setTimeout(() => {
                    element.focus();
                    element.dispatchEvent(event);
                    console.log("end of settimeout");
                    // input.value = "textu fillu";
                    function simulateHumanTyping(inputElement, text) {
                        var inputEvent = new Event('input', { bubbles: true });
                        var index = 0;

                        function typeCharacter() {
                            if (index < text.length) {
                                inputElement.value += text[index];
                                inputElement.dispatchEvent(inputEvent);
                                index++;
                                setTimeout(typeCharacter, 200); // Adjust the timing as needed
                            }
                        }

                        typeCharacter();
                    }

                    simulateHumanTyping(element, "hello");
                }, 1000);
            }

            triggerFocus(textArea);

            // end

            formData[index] = { label: label.trim() };
            formData[index].type = "long";

        } else {
            console.log("nada");
        }
    });
}

function apicall() {

    fetch('http://192.168.234.39:5000/api/custom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Error: ' + error);
        });
    console.log("callin nisar");
}

console.log("\"brrr deezForms 😶‍🌫️\"");

logForm();
console.log(formData);
// apicall();
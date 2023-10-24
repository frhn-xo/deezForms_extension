function logForm() {
    let formData = {};
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

            input.value = "input filler";

            formData[index] = { label: label.trim() };
            formData[index].type = "short";

            console.log(input.value);

        } else if (textArea) {
            console.log("this is a textarea");
            placeHolder = document.querySelector(`#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${index}) > div > div > div.AgroKb > div > div.RpC4Ne.oJeWuf > div`);
            if (placeHolder) {
                placeHolder.remove();
            }

            textArea.value = "textarea filler"

            formData[index] = { label: label.trim() };
            formData[index].type = "long";

        } else {
            console.log("nada");
        }
    });

    console.log(formData);
}

function apicall() {
    let apiData = {};

    fetch('https://6383-2401-4900-1cb4-c5f-ad4d-a09c-82c8-f496.ngrok-free.app/api/custom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Error: ' + error);
        });
}

console.log("\"brrr deezForms 😶‍🌫️\"");

logForm();
// apicall();
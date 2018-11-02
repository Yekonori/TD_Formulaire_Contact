function getInputValue(){
    $(document).ready(function() {

        $( '#jsText' ).append(
            '<label for="lastName">Votre nom : <input type="text" name="name" id="lastName" placeholder="Votre nom" required/></label> <br>'
        ).append(
            '<label for="firstName">Votre Prénom : <input type="text" name="firstName" id="firstName" placeholder="Votre prénom" required/></label> <br>'
        ).append(
            '<label for="email">Votre email : <input type="email" name="email" id="email" placeholder="Votre email" required/></label> <br>'
        ).append(
            '<button id="button" type="submit" value="Envoyer">Envoyer</button> <br>'
        ).append(
            '<div id="appendResult"></div> <br>'
        );

        $('#appendResult').append(
            "<table style='width: 100%;'>" +
                "<tr>" +
                    "<th>Nom</th>" +
                    "<th>Prenom</th>" +
                    "<th>Email</th>" +
                "</tr>" +
            "</table>"
        );

        $( "#button" ).click( function () {
            let getSurname = $( "#lastName" ).val();
            let getName    = $( "#firstName" ).val();
            let getEmail   = $( "#email" ).val();


            let oldSurName = JSON.parse(localStorage.getItem('Nom')) || [];
            let oldName    = JSON.parse(localStorage.getItem('Prenom')) || [];
            let oldEmail   = JSON.parse(localStorage.getItem('Email')) || [];

            oldSurName.push(getSurname);
            oldName.push(getName);
            oldEmail.push(getEmail);

            localStorage.setItem("Nom", JSON.stringify(oldSurName));
            localStorage.setItem("Prenom", JSON.stringify(oldName));
            localStorage.setItem("Email", JSON.stringify(oldEmail));

            $('tbody').append(
                "<tr style='text-align: center'>"+
                    "<td>"+ getSurname + "</td>" +
                    "<td>" + getName + "</td>" +
                    "<td>" + getEmail + "</td>"+
                "</tr>"
            );

            document.getElementById('lastName').value = "";
            document.getElementById('firstName').value = "";
            document.getElementById('email').value = "";
        });

    });
}

function displayStorageIfExist(){
    $(document).ready(function() {
        if ( localStorage.length > 0 ) {
            let getLocalStoreSurName = JSON.parse(localStorage.getItem("Nom"));
            let getLocalStoreName = JSON.parse(localStorage.getItem("Prenom"));
            let getLocalStoreEmail = JSON.parse(localStorage.getItem("Email"));

            getLocalStoreSurName = getLocalStoreSurName.toString().replace(/,/g, '<br>');
            getLocalStoreName = getLocalStoreName.toString().replace(/,/g, '<br>');
            getLocalStoreEmail = getLocalStoreEmail.toString().replace(/,/g, '<br>');


            $('tbody').append(
                "<tr style='text-align: center'>"+
                    "<td>"+ getLocalStoreSurName + "</td>" +
                    "<td>" + getLocalStoreName + "</td>" +
                    "<td>" + getLocalStoreEmail + "</td>"+
                "</tr>"
            );
        }
    });
}
getInputValue();
displayStorageIfExist();
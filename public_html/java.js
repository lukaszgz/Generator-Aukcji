window.addEventListener('load', function(){

//Wysówane boczne menu edycji szablonu
    var btn = document.getElementById("btn");
    btn.style.left = "290px";

    function edit()
    {
        var ep = document.getElementById("editPanel");
        if (btn.style.left == "290px")
        {
            ep.style.left = "-290px";
            btn.style.left = "0";
        } else
        {
            ep.style.left = "0";
            btn.style.left = "290px";
        }

    }
    btn.addEventListener('click', edit, false);

//Edycja Tutułu
    var inputTitle = document.getElementById("titleEdit");

    inputTitle.addEventListener('focus', function () {
        var t = document.querySelector("h1");
        inputTitle.style.background = "";
        t.style.background = "yellow";
    }, false);

    inputTitle.addEventListener('blur', function () {
        var t = document.querySelector("h1");
        t.style.background = "";
        t.textContent = inputTitle.value;

        if (inputTitle.value == "")
        {
            inputTitle.style.background = "red";
            inputTitle.placeholder = "Uzupełnij Tytuł...";
        } else
        {
            inputTitle.style.background = "";
        }
    }, false);

//Edycja numeru telefonu
    var inputTelephone = document.querySelector('#telephoneEdit');

    inputTelephone.addEventListener('focus', function () {
        var t = document.querySelector("#firstHr span");
        inputTelephone.style.background = "";
        t.style.background = "yellow";
    }, false);

    inputTelephone.addEventListener('blur', function () {
        var t = document.querySelector("#firstHr span");
        t.style.background = "";
        t.textContent = inputTelephone.value;
        document.querySelector("#contact2 h2").textContent = t.textContent;

        if (inputTelephone.value == "")
        {
            inputTelephone.style.background = "red";
            inputTelephone.placeholder = "Podaj swój numer tel...";
        } else
        {
            inputTelephone.style.background = "";
        }
    }, false);

//Edycja email
    var inputEmail = document.querySelector('#emailEdit');

    inputEmail.addEventListener('focus', function () {
        var t = document.querySelector("#email h2");
        inputEmail.style.background = "";
        t.style.background = "yellow";
    }, false);

    inputEmail.addEventListener('blur', function () {
        var t = document.querySelector("#email h2");
        t.style.background = "";
        t.textContent = inputEmail.value;

        if (inputEmail.value == "")
        {
            t.textContent = "---";
            inputEmail.style.background = "red";
            inputEmail.placeholder = "Podaj swój email...";
        } else
        {
            inputEmail.style.background = "";
        }
    }, false);

//Edycja specyfikacji

    function addEventForInputs()
    {
        var specyficationEdit = document.querySelectorAll(".specyficationEdit");

        function focus(e)
        {
            var specyficationEditX = e.target;

            var i = getIndex(specyficationEditX, specyficationEdit);

            var t = document.querySelectorAll("#specyficationUl > li");
            specyficationEditX.style.background = "";
            t[i].style.background = "yellow";
        }

        function blur(e)
        {
            var specyficationEditX = e.target;

            var i = getIndex(specyficationEditX, specyficationEdit);

            var t = document.querySelectorAll("#specyficationUl > li");            

            if (specyficationEditX.value == "")
            {
                t[i].textContent = "---";
                specyficationEditX.style.background = "red";
                specyficationEditX.placeholder = "Podaj specyfikację";
            } else
            {
                t[i].textContent = specyficationEditX.value;
                specyficationEditX.style.background = "";
            }
            
            t[i].style.background = "";
        }

        for (var i = 0; i < specyficationEdit.length; i++)
        {
            specyficationEdit[i].addEventListener('focus', function (e) {
                focus(e);
            });
            specyficationEdit[i].addEventListener('blur', function (e) {
                blur(e);
            });
        }
    }

    addEventForInputs();

//Usuwanie specyfikacji z edycji

    function removeEl()
    {
        var parentBTN = this.parentNode;
        var parentLi = parentBTN.parentNode;
        if (parentLi.childElementCount > 1)
        {

            var t = document.querySelectorAll("#specyficationUl > li");
            var parentT = t[0].parentNode;
            var i = getIndex(parentBTN, parentLi.querySelectorAll("li"));
            parentLi.removeChild(parentBTN);
            parentT.removeChild(t[i]);
            addEventForInputs();
        }
    }

    function removeSpecyficationEvent()
    {
        var removeSpecyficationBTN = document.querySelectorAll('li > .removeSpecyficationBTN');
        for (var i = 0; i < removeSpecyficationBTN.length; i++)
        {
            removeSpecyficationBTN[i].addEventListener('click', removeEl);
        }
    }

    removeSpecyficationEvent();

//Dodawanie nowej specyfikacji do edycji

    function addSpecyficationEl()
    {
        var sc = document.getElementById('specyficationConteiner');
        var su = document.getElementById("specyficationUl");
        sc.appendChild(sc.lastElementChild.cloneNode(true));
        su.appendChild(su.lastElementChild.cloneNode(true));
        
        removeSpecyficationEvent();
        addEventForInputs();
    }

    var newSpecyficationBTN = document.querySelector('.addNewSpecyficationBTN');
    newSpecyficationBTN.addEventListener('click', addSpecyficationEl);

//Okno z wygenerowanym kodem

//Generowanie kodu
    var generateBTN = document.querySelector('#generateBTN');
    generateBTN.addEventListener('click', function () {
        document.querySelector('textarea').value = document.querySelector('#contentBox').innerHTML;
        document.querySelector('#template').style.display = 'block';
    });

//Zaznaczenie calego wygenerowanego kodu po kliknieciu

    var textArea = document.querySelector('textarea');
    textArea.addEventListener('click', function () {
        textArea.focus();
        textArea.select();
    });

//Przycisk zamknięcia okna

    var close = document.querySelector("#template img");
    close.addEventListener('click', function () {
        document.querySelector('#template').style.display = 'none';
    });






//funkcja zwracająca numer elementu LI w liscie UL
    function getIndex(element, LI)
    {
        for (var i in LI)
        {
            if (LI[i] === element)
                return i;
        }
        return - 1;
    }
    ;
}
);
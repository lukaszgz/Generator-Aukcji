window.addEventListener('load', function () {

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
        t.scrollIntoView();
    }, false);

    inputTitle.addEventListener('blur', function () {
        var t = document.querySelector("h1");
        t.style.background = "";


        if (inputTitle.value == "")
        {
            inputTitle.style.background = "red";
            inputTitle.placeholder = "Uzupełnij Tytuł...";
        } else
        {
            t.textContent = inputTitle.value;
            inputTitle.style.background = "";
        }
    }, false);

//Edycja numeru telefonu
    var inputTelephone = document.querySelector('#telephoneEdit');

    inputTelephone.addEventListener('focus', function () {
        var t = document.querySelector("#firstHr span");
        inputTelephone.style.background = "";
        t.style.background = "yellow";
        t.scrollIntoView();
    }, false);

    inputTelephone.addEventListener('blur', function () {
        var t = document.querySelector("#firstHr span");
        t.style.background = "";


        if (inputTelephone.value == "")
        {
            inputTelephone.style.background = "red";
            inputTelephone.placeholder = "Podaj swój numer tel...";
        } else
        {
            t.textContent = inputTelephone.value;
            document.querySelector("#contact2 h2").textContent = t.textContent;
            inputTelephone.style.background = "";
        }
    }, false);

//Edycja email
    var inputEmail = document.querySelector('#emailEdit');

    inputEmail.addEventListener('focus', function () {
        var t = document.querySelector("#email h2");
        inputEmail.style.background = "";
        t.style.background = "yellow";
        t.scrollIntoView();
    }, false);

    inputEmail.addEventListener('blur', function () {
        var t = document.querySelector("#email h2");
        t.style.background = "";
        

        if (inputEmail.value == "")
        {
            inputEmail.style.background = "red";
            inputEmail.placeholder = "Podaj swój email...";
        } else
        {
            t.textContent = inputEmail.value;
            inputEmail.style.background = "";
        }
    }, false);

//Edycja specyfikacji

    function addEventForInputs()
    {
        var specyficationEdit = document.querySelectorAll(".specyficationEdit");

        function focus()
        {
            var specyficationEdit = document.querySelectorAll(".specyficationEdit");
            var i = getIndex(this, specyficationEdit);

            var t = document.querySelectorAll("#specyficationUl > li");
            this.style.background = "";
            t[i].style.background = "yellow";
            t[0].scrollIntoView();
        }

        function blur()
        {
            var specyficationEdit = document.querySelectorAll(".specyficationEdit");
            var i = getIndex(this, specyficationEdit);

            var t = document.querySelectorAll("#specyficationUl > li");

            if (this.value == "")
            {
                //t[i].textContent = "---";
                this.style.background = "red";
                this.placeholder = "Podaj specyfikację";
            } else
            {
                t[i].textContent = this.value;
                this.style.background = "";
            }

            t[i].style.background = "";
        }

        for (var i = 0; i < specyficationEdit.length; i++)
        {
            specyficationEdit[i].addEventListener('focus', focus);
            specyficationEdit[i].addEventListener('blur', blur);
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

//Edycja opisu przedmiotu - czesc 1

    var descriptionEdit = document.querySelector('#descriptionEdit');

    descriptionEdit.addEventListener('focus', function () {
        var t = document.querySelector("#details_desc");
        this.style.background = "";
        t.style.background = "yellow";
        t.scrollIntoView();
        this.style.width = "800px";
        this.style.height = "150px";
    }, false);

    descriptionEdit.addEventListener('blur', function () {
        var t = document.querySelector("#details_desc");
        t.style.background = "";
        this.style.width = "";
        this.style.height = "";

        if (this.value == "")
        {
            this.style.background = "red";
            this.placeholder = "Wprowadź opis...";
        } else
        {
            t.querySelector("p").textContent = this.value;
            this.style.background = "";
        }
    }, false);
    
    
    //Edycja opisu przedmiotu - czesc 2

    var descriptionEdit = document.querySelector('#descriptionPlusEdit');

    descriptionPlusEdit.addEventListener('focus', function () {
        var t = document.querySelector("#details_desc_plus");
        this.style.background = "";
        t.style.background = "yellow";
        t.scrollIntoView();
        this.style.width = "800px";
        this.style.height = "150px";
    }, false);

    descriptionPlusEdit.addEventListener('blur', function () {
        var t = document.querySelector("#details_desc_plus");
        t.style.background = "";
        this.style.width = "";
        this.style.height = "";

        if (this.value == "")
        {
            this.style.background = "red";
            this.placeholder = "Dodatkowy opis...";
        } else
        {
            t.querySelector("p").textContent = this.value;
            this.style.background = "";
        }
    }, false);
    
    
//Edycja stopki

    var footerEdit = document.querySelector('#footerEdit');

    footerEdit.addEventListener('focus', function () {
        var t = document.querySelector("#contact");
        this.style.background = "";
        t.style.background = "yellow";
        t.scrollIntoView();
        this.style.width = "800px";
        this.style.height = "150px";
    }, false);

    footerEdit.addEventListener('blur', function () {
        var t = document.querySelector("#contact");
        t.style.background = "";
        this.style.width = "";
        this.style.height = "";

        if (this.value == "")
        {
            this.style.background = "red";
            this.placeholder = "Stopka strony...";
        } else
        {
            t.querySelector("p").textContent = this.value;
            this.style.background = "";
        }
    }, false);

//Okno z wygenerowanym kodem

//Generowanie kodu
    var generateBTN = document.querySelector('#generateBTN');
    generateBTN.addEventListener('click', function () {
        document.querySelector('#textarea').value = document.querySelector('#contentBox').innerHTML;
        document.querySelector('#template').style.display = 'block';
    });

//Zaznaczenie calego wygenerowanego kodu po kliknieciu

    var textArea = document.querySelector('#textarea');
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
        return -1;
    }
    ;
}
);
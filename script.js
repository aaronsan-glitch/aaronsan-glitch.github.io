const filtres = document.querySelectorAll(".filtre");
const projectes = document.querySelectorAll(".projecte-card");


filtres.forEach(filtre => {

    filtre.addEventListener("click", function () {

        // Treiem l'estat actiu de tots els botons
        filtres.forEach(boto => {

            boto.classList.remove("actiu");

        });


        // Activem el botó que hem premut
        this.classList.add("actiu");


        // Agafem la categoria seleccionada
        const categoria = this.dataset.filtre;


        // Recorrem tots els projectes
        projectes.forEach(projecte => {

            if (
                categoria === "tots" ||
                projecte.dataset.categoria === categoria
            ) {

                projecte.style.display = "block";

            } else {

                projecte.style.display = "none";

            }

        });

    });

});

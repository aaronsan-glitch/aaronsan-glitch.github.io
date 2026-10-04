function filtrarProjectes(categoria) {

    let projectes = document.querySelectorAll(".projecte");

    projectes.forEach(function(projecte) {

        if (categoria === "tots" || projecte.classList.contains(categoria)) {

            projecte.style.display = "block";

        } else {

            projecte.style.display = "none";

        }

    });

}

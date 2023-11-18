function toggleSkills() {
    var skillsList = document.getElementById("skills-list");
    var toggleIcon = document.getElementById("toggle-icon-skill");

    if (skillsList.style.display === "none" || skillsList.style.display === "") {
        skillsList.style.display = "block";
        toggleIcon.innerHTML = "-";
    } else {
        skillsList.style.display = "none";
        toggleIcon.innerHTML = "+";
    }
}


function toggleProjects() {
    var projectsList = document.getElementById("projects-list");
    var toggleIcon = document.getElementById("toggle-icon-project");

    if (projectsList.style.display === "none" || projectsList.style.display === "") {
        projectsList.style.display = "block";
        toggleIcon.innerHTML = "-";
    } else {
        projectsList.style.display = "none";
        toggleIcon.innerHTML = "+";
    }
}
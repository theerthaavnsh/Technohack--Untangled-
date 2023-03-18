signInTrigger = document.querySelector("#sign-in");
signUpTrigger = document.querySelector("#sign-up");
mask = document.querySelector(".mask")
part1 = document.querySelector(".old-container")
part2 = document.querySelector(".new-container")

signInTrigger.addEventListener("click", e =>{
    e.preventDefault();
    mask.style.transform = "translateX(325px)"
    mask.style.borderRadius = "0 7px 7px 0px"
    part2.style.display = "none";
    part1.style.display = "flex";
})
signUpTrigger.addEventListener("click", e =>{
    e.preventDefault();
    mask.style.transform = "translateX(0px)"
    mask.style.borderRadius = "7px 0px 0px 7px"
    part1.style.display = "none";
    part2.style.display = "flex";
})
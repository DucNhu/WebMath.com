//  Header


const slicknav_item = document.querySelectorAll(".slicknav_item");

function ClickOnSubMenu() {
    let active = true;

    slicknav_item.forEach(i => {
        i.addEventListener("click", function () {
            if (active) {
                i.nextElementSibling.style.display = "none";
                active = !active;
            }
            else {
                i.nextElementSibling.style.display = "block";
                active = !active;
            }
        })
    });
}

ClickOnSubMenu();
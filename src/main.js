// ACCORDION

[...document.querySelectorAll('.acc_head')].map(head => {
    head.onclick = function(){ this.nextElementSibling.classList.toggle("active"); }
});

// const heads = document.querySelectorAll('.acc_head');
// for(let i = 0; i < heads.length; i++)
// {
//     heads[i].onclick = function() { this.nextElementSibling.classList.toggle("active") }
// }

// END OF ACCORDION

[...document.querySelectorAll('.left_menu li')].forEach((li, i) => {
    li.onclick = function()
    {
        //remove active from previous li
        document.querySelector('.left_menu li.active').classList.remove("active");
        //add active to new li
        this.classList.add("active")

        //remove active from previous info_div
        document.querySelector('.info_div.active').classList.remove("active");

        const id = this.getAttribute("data-id");
        const infoDiv = document.querySelector(`.info_div[data-id="${id}"]`);
        infoDiv.classList.add("active")

        //add active to new info_div
    }
});
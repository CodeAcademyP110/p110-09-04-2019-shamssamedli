[...document.querySelectorAll('.one')].map(li => {
  li.onclick = function()
  {
      //remove active from previous li
      document.querySelector('.active').classList.remove("active");
      //add active to new li
      this.classList.add("active");
  }
      
  })

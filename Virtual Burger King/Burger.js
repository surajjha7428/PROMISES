let foodItems=document.querySelectorAll("#fooditems input");
  let status=document.querySelector("#status");
  function orderFood(){
    let items=Array.from(foodItems);
let h1= document.createElement("h1");
h1.innerText="food is Being order";
status.append(h1)
promiseCreate(items)
    .then((res)=>{
        console.log(res);
        h1.innerText=`${res} has been order sucessfully`;
    })
  }
  function promiseCreate(items){
      let imageCont=document.querySelector("#imageCont")
     let images=[
          {
              name: "Burger",
              url:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
          },
          {
              name: "Pizza",
              url:" https://img.freepik.com/free-photo/top-view-pepper…ll-pepper-olive-corn-black-wooden_141793-2158.jpg"
          },
          {
              name: "Fries",
              url:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TPQiP9JWfeHhO3p2jiQBere7zQvvxFaD9Men7IpGQ&s"
          },
          {
              name:"Pasta",
              url:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5GRY8gzvnpwgLLI2ihST6UP93mGAckJPvW-lO_a18g&s"
          },
      ]
      let checkedItems=items.filter((ele)=>{
        return ele.checked
    })
      let imageFilter=images.filter((ele)=>{
          return ele.name== checkedItems[0].value
      })
      let promise= new Promise((resolve,reject)=>{
          setTimeout(()=>{
            let image=document.createElement("img");
            image.src=imageFilter[0].url;
            image.style.width="100%";
            imageCont.append(image)
              resolve(checkedItems[0].value)
          },2000)
      })
      return promise
  }
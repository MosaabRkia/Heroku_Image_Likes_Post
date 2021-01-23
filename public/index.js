function sendDataToServer(e) {
  e.preventDefault();

  const src = e.target.elements.src.value;
  fetch("/Get-SrcPhoto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ src }),
  });
}

async function getPhotos() {
  const r = await fetch("/Send-Photos");
  const data = await r.json();
  let allphotos = "";
  await data.map((e, index) => {
    localStorage.setItem(index, 0);
    let score = localStorage.getItem(index);
      
    allphotos += `
    <div id=${index}>
    <img id=${index} style="width: 250px; height:250px;"  src=${e.src}/>  
    <div id="rateBar">
    <img id="rateStar1_${index}" onclick="sendRate(${index},1)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/fvws4bJ/star-removebg-preview.png">
    <img id="rateStar2_${index}" onclick="sendRate(${index},2)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/fvws4bJ/star-removebg-preview.png">
    <img id="rateStar3_${index}" onclick="sendRate(${index},3)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/fvws4bJ/star-removebg-preview.png">
    <img id="rateStar4_${index}" onclick="sendRate(${index},4)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/fvws4bJ/star-removebg-preview.png">
    <img id="rateStar5_${index}" onclick="sendRate(${index},5)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/fvws4bJ/star-removebg-preview.png">
    </div>
  <div>`;
  
  });
  example = document.querySelector("#allPhotosToShow");
  example.innerHTML = allphotos;
}


function sendRate(index,howMuchPoint){
    let X = parseInt(localStorage.getItem( index));
    if(X===0){
        let total =  X + howMuchPoint;
        console.log(total)
        localStorage.setItem(index, total);
    console.log(`rateStar1_${index}`)
        for (let i = 1; i <= howMuchPoint; i++) {
            let R = `rateStar${i}_${index}`;
          document.getElementById(R).style.backgroundColor="orange";
        }
    }
}



/**
    <button id="rateStarFirst_${index}" onclick="sendRate(${index},1)"></button>
    <button id="rateStarSecond_${index}" onclick="sendRate(${index},1)"></button>
    <button id="rateStarThird_${index}" onclick="sendRate(${index},1)"></button>
    <button id="rateStarFourth_${index}" onclick="sendRate(${index},1)"></button>
    <button id="rateStarFifth_${index}" onclick="sendRate(${index},1)"></button>
   }) 

 */

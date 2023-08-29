function foodKitchen() {
    var x_names = document.getElementsByClassName("foodKitchen");
    let weeks=0;
    for (var i = 0; i < x_names.length; i++) {
      weeks+=parseInt(x_names[i].value);
      // alert(x_names[i].value);
    }
    console.log(`Total weeks:${weeks}`);
    var years = Math.floor(7*weeks / 365);
    console.log(years); 
  }
  function calculateTotal(){
      let householdSize=document.getElementById("household-size").value;
      console.log(householdSize);
      //food & Kitchen
      let plasticBottles =document.getElementById("plastic-bottles").value*52*0.730;
      let plasticBags =document.getElementById("plastic-bags").value*52*0.417;
      let plasticWrapping =document.getElementById("plastic-wrapping").value*52*0.583;
      let yogurtCreamContainers =document.getElementById("yogurt-cream-containers").value*52*0.383;
  
      //disposable Containers & Packaging
      let plasticBoxes =document.getElementById("plastic-boxes").value*12*0.383;
      let plasticCups=document.getElementById("plastic-cups").value*12*0.240;
      let plasticPackages =document.getElementById("plastic-packages").value*12*0.834;
  
      //Bathroom & Laundry
      let detergentBottles =document.getElementById("detergent-bottles").value*0.120;
      let shampooConditioner=document.getElementById("shampoo-conditioner").value*0.080;
      let plasticToothbrushes =document.getElementById("plastic-toothbrushes").value*0.020;
      let toothpaste =document.getElementById("toothpaste").value*0.015;
  
      let foodKitchen = plasticBottles+plasticBags+plasticBags+yogurtCreamContainers;
      let disposableContainersPackaging=plasticBoxes+plasticCups+plasticPackages;
      let bathroomLaundry=detergentBottles+shampooConditioner+plasticToothbrushes+toothpaste;
  
      //estimated plastic footprint
      let estimatedPlasticfootprint=parseFloat (foodKitchen+disposableContainersPackaging+bathroomLaundry)/householdSize;
      document.getElementById("plastic-footprint").innerHTML=estimatedPlasticfootprint.toFixed(3);
  
      console.log(`foodKitchen: ${foodKitchen} DisposableContainersPackaging:${disposableContainersPackaging} bathroomLaundry:${bathroomLaundry}`);
      console.log(`estimated plastic footprint : ${estimatedPlasticfootprint}`);
  }
  function resetCalculator(){
      document.getElementById("plastic-footprint").innerHTML=0;
      document.getElementById("reset").reset();
  }
  
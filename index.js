const camerasListContainer = document.querySelector("#cameras-list");
let cameras = [];
console.log(camerasListContainer)
const fetchCamera = async () => {
    await fetch("http://localhost:3000/api/cameras")
    .then((response) => response.json())
    .then((data) => (cameras = data))
        .catch(err => console.log(err))
};

const cameraDisplay = async () => {
    await fetchCamera()
    console.log('raw response',  cameras)
    console.log('map',  cameras.map(
        (camera) =>  
    `
    <div id="item2" class="item-card">
    <div class="image-container">
      <img class="item-image" src=${camera.imageUrl} alt="Appareil de photo" title=${camera.name} />
    </div>
    <div class="item-name">${camera.name}</div>
    <div class="item-price">${camera.price}</div>
    <div class="item-description">${camera.description}</div>
  </div>
    `
    ) )


    camerasListContainer.innerHTML = cameras.map(
        (camera) =>  
    `
    <div id="item2" class="item-card">
    <div class="image-container">
      <img class="item-image" src=${camera.imageUrl} alt="Appareil de photo" title=${camera.name} />
    </div>
    <div class="item-name">${camera.name}</div>
    <div class="item-price">${camera.price}</div>
    <div class="item-description">${camera.description}</div>
  </div>
    `
    )   

};

cameraDisplay ();



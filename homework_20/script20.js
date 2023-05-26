let body = $('body');

let colorsList = $(`<div></div>`).css({
  justifyContent: 'center',
  display: 'flex'
});

let car = $(`<div></div>`);
let carImg = $('<img src="" alt="">');

let carTitle = $(`<div class="carTitle"></div>`).css({
  textAlign: 'center',
  margin: 20, 
  color:'#cccccc'
});

car.append(carTitle);
car.prepend(carImg);
body.append(car);
body.append(colorsList);

let getCarData = async () => {
  await $.ajax({
    url: 'https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json', 
    method: 'GET',
    dataType: 'JSON',
    success: (data) => {
      renderCar((data)[0]);
      $(data).each((index, car) => renderAvailableColors(car))
    }, 
    error: (error) => console.log(error)
  })
}

let renderCar = (car) => {
  carImg.attr('src', `https://mc-astro.github.io/tesla-roadster-colors/img/${car.img}.jpg`);
  carTitle.text(`${car.title}`)
}

let renderAvailableColors = (car) => {
 let color = $(`<div></div>`).css({
    backgroundColor: `${car.color}`, 
    cursor: 'pointer',
    height: 35,
    width: 25,
    margin: 4,
    borderRadius: 2
  })

  color.on('click', (event) => {
    colorsList.children('div').css('boxShadow', 'none');
    renderCar(car);
    $(event.target).css('boxShadow', '0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15)')
  })
  
  colorsList.append(color);
}

getCarData()
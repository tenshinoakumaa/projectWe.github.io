//variables

let navLinks = document.querySelectorAll('.nav-link');
let offcanvasBody = document.querySelector('.offcanvas-body');
let loginSite = document.getElementById('Login');
let exitDiv = document.getElementById('exitDiv');
let LoginExitLi = document.getElementById('LoginExitLI');
let counter = 4;
//eventListeners
offcanvasBody.addEventListener('click', swapActive);
loginSite.addEventListener('click',checking);
// functions

function swapActive() {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {

      let current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
    });
  }
}


function checking(event) {
  event.preventDefault();
  let login = document.getElementById('inputEmail3').value;
  let password = document.getElementById('inputPassword3').value;
  if (login == 'Tenshi' && password == 'noAkumaa') {
    document.querySelector('.loginAccount').textContent='Tenshi'
    let exitAccount = document.createElement('button');
    exitAccount.setAttribute('id','exitAccount');
    exitAccount.textContent = 'Выйти'
    exitAccount.classList+=('btn')
    // exitDiv.appendChild(exitAccount);
    // console.log(exitAccount);
    loginSite.parentElement.parentElement.remove();
    addButton();
  } else {
    alert('Неправильный логин или пароль');
  }
}



function addButton() {
  const forButton = document.querySelector('.forButton');
  forButton.innerHTML = `
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Добавить мероприятие
  </button>
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Создание</h5>
        </div>
        <div class="modal-body">
        <form>
        <div class="row mb-3">
          <label for="inputMainText" class=" col-sm-4 col-form-label">Заголовок</label>
          <div class="col-sm-10">
            <input type="text" class="mainText form-control" id="inputMainText">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputText" class="col-sm-4 col-form-label">Текст</label>
          <div class="col-sm-10">
            <input type="text" class="secondText form-control" id="inputText">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputUrl" class="col-sm-4 col-form-label">Изображение</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputUrl">
          </div>
        </div>

        <div class="row mb-3">
          <label for="hrefReg" class="col-sm-4 col-form-label">Ссылка на регистрацию</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="hrefReg">
          </div>
        </div>
        <br>
        
        <button type="submit" class="btn btn-primary" id="submitCreate"> Отправить </button>
      </form>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>

      </div>
    </div>
  </div>
  `

  let submitCreate = document.getElementById('submitCreate');
  submitCreate.addEventListener('click', addingEvent)
}

function addingEvent(event) {
  event.preventDefault();
  let mainText = document.querySelector('#inputMainText').value;
  let secondText = document.querySelector('#inputText').value;
  let imgUrl = document.getElementById('inputUrl').value;
  let hrefReg = document.getElementById('hrefReg').value;
  let news = document.getElementById('news');
  let newsHtml = news.innerHTML;
  let modals = document.querySelector('.modals');
  let modalHtml = modals.innerHTML;
  console.log(news);
  console.log(modals);


  console.log(mainText)
  console.log(secondText)
  console.log(imgUrl)
  console.log(hrefReg)

  modalHtml+=`
  <div class="modal fade" id="exampleModal${counter}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Подробнее о мероприятии
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <span> ${mainText}</span>
            <img src="${imgUrl}" alt="">
            <span class="aboutEvent"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
          </div>
          <div class="event-info">
            <div class="event-details">
              <h5 class="item-title">When?</h5>
              <p class="item-text" id="date">1 December</p>
            </div>
            <div class="event-details">
              <h5 class="item-title">What time?</h5>
              <p class="item-text">7 am</p>
            </div>
            <div class="event-details">
              <h5 class="item-title">Where?</h5>
              <p class="item-text">Red Hall</p>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary"> Записаться </button>
          </div>
        </div>
      </div>
    </div>
    `
  newsHtml += `
  <div class="card col-4" style="width: 18rem;">
  <img src="${imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mainText}</h5>
    <p class="card-text">${secondText}</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${counter}">
            Подробнее
        </button>
  </div>
</div>
  `
  counter++;
  news.innerHTML = newsHtml;
  modals.innerHTML = modalHtml;

  alert('Мероприятие добавлено');

}








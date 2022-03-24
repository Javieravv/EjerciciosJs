const contactBox = document.querySelector("#contactBox")
const loadUsersBox = document.querySelector("#loadUsersBox")
const loadUsersBtn = document.querySelector("#loadUsersBtn")
const usersNumber = document.querySelector("#usersNumber")
const userList = document.querySelector('#userList')
const cardSkeleton = document.querySelector('#cardSkeleton')
const cardTemplate = document.querySelector('#cardTemplate')

// cuando se usa addEventListener siempre enviará un evento como parámetro

loadUsersBtn.addEventListener('click', getUsersData)
userList.addEventListener('click', filterEventByButtonClicked)

function filterEventByButtonClicked (event) {
  if (event.target.className.includes('cardBtn')) {
    const parentNode = event.target.parentNode
    const user = JSON.parse(parentNode.getAttribute('data-user'))
    showModalWithUserData(user)
  }
}


const showModalWithUserData = (user) => {
  const {avatar, email, first_name, id, last_name} = user
  // Se usa una libreía para mostrar un modal, la cual ya está enlazada en el HTML

  Swal.fire ({
    titleText: `#${id} - ${first_name} - ${last_name}`,
    text: `${email}`,
    imageUrl: `${avatar}`,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: `Avatar of: ${first_name}`,
    confirmButtonColor: '#9EDEFD'
  })

}

function getUsersData () {
  toggleContactBox()
  printSkeleton(6)
  asyncFetching()
  .then((data) => {
    printNumberOfUsers(data)
    userList.innerHTML = ""
    printUsersData (data)
  }).catch ((err) => {
    showToastWithError (err)

  })
}

const showToastWithError = (err) => {
  const Toast = Swal.mixin ({
    toast: true,
    position: 'botton',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    time: 2500,
    timerProgressBar: true,
  })

  Toast.fire ({
    icon: 'error',
    title: `${err}`,
  })
}

const printSkeleton = (numberOfSkeleton) => {
  const skeletonArr = [...Array(numberOfSkeleton).keys()]
  skeletonArr.forEach(() => {
    const skeletonContent = cardSkeleton.content.cloneNode(true)
    userList.appendChild(skeletonContent)
  })
}

const printUsersData = (data) => {
  data.forEach ((user) => {
    const {avatar,first_name, last_name} = user
    const cardContent = cardTemplate.content.cloneNode(true)
    const avatarImg = cardContent.querySelector('#avatarImg')
    const firstName = cardContent.querySelector('#firstName')
    const lastName = cardContent.querySelector('#lastName')
    cardContent
      .querySelector('div')
      .setAttribute('data-user', JSON.stringify(user))

    avatarImg.src = avatar
    firstName.textContent = first_name
    lastName.textContent = last_name
    userList.appendChild(cardContent)
  })
}

const printNumberOfUsers = (data) => {
  usersNumber.innerHTML = data.length
}

const toggleContactBox = () => {
  contactBox.classList.toggle('hidden')
  loadUsersBox.classList.toggle('hidden')
}

// usamos una API para obtener información de usuarios.

// fetch('https://reqres.in/api/users')
//   .then((res) => res.json())
//   .then ((data) => console.log(data))

const asyncFetching = async () => {
  const response = await fetch('https://reqres.in/api/users?delay=1')

  if (response.status !== 200) {
    throw new Error ('No fue posible traer los datos...')    
  }
  const { data } = await response.json()
  return data 
}



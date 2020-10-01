//kita buat sebuah fungsi yang dapat memunculkan modal
const showModal = () => {

    //kita ambil elemen yang akan ditampilkan
    let modal = document.querySelector('.modalMenu')

    //kita atur style dari element tersebut
    //jadikan dia terlihat
    modal.style.display = 'flex'

}

//kita buat fungsi untuk hide element
const hideModal = () => {
    //kita ambil elemen yang akan ditampilkan
    let modal = document.querySelector('.modalMenu')

    //kita atur style dari element tersebut
    //jadikan dia terlihat
    modal.style.display = 'none'
}

const hideAlert = () => {
    let aboutAlert = document.querySelector('.aboutAlert')
    aboutAlert.style.display = 'none'
}
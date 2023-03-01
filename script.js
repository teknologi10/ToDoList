const todoList = ['Belajar Javascript', 'Belajar HTML']

console.log('╔══════════════════════════╗')
console.log('║    APLIKASI TODO LIST    ║')
console.log('╚══════════════════════════╝')

// print todo list
function showTodoList () {
  console.log('\n──────┤ TODO LIST ├───────')
  todoList.forEach((todo, i) => {
    // string template literal
    console.log(`${i + 1}. ${todo}`)
  })
}

function showMenu () {
  const pilihan = showPilihMenu()

  if (pilihan == '1') tambahTodo()
  else if (pilihan == '2') ubahTodo()
  else if (pilihan == '3') hapusTodo()
  else if (pilihan == '4') {
    console.log('\nSampai jumpa!')
    return
  } else console.log('\n✘ Pilihan tidak benar.')

  // showMenu()
}

function showPilihMenu () {
  showTodoList()
  console.log('\n')

  console.log('──────┤ PILIH MENU ├───────')
  console.log('1. Tambah')
  console.log('2. Edit')
  console.log('3. Hapus')
  console.log('4. Keluar')

  // const pilihan = prompt('Pilih menu')
  // return pilihan
}

function tambahTodo () {
  console.log('\n──────┤ MENAMBAH TODO ├───────')
  const todoBaru = prompt('Masukkan todo baru:')
  todoList.push(todoBaru)
  console.log('✔ Todo berhasil ditambahkan.')
}

function ubahTodo () {
  console.log('\n──────┤ MENGUBAH TODO ├───────')
  const todoEdit = prompt('Masukkan nomor todo:')
  if (todoEdit > todoList.length || todoEdit < 1) {
    alert('Todo tersebut tidak ada.')
    console.log('✘ Todo gagal diubah.')
  } else {
    const todoBaru = prompt('Masukkan todo baru')
    todoList[todoEdit - 1] = todoBaru
    console.log('✔ Todo berhasil diubah.')
  }
}

function hapusTodo () {
  console.log('\n──────┤ MENGHAPUS TODO ├───────')
  const todoHapus = prompt('Masukkan nomor todo:')

  if (todoHapus > todoList.length || todoHapus < 1) {
    alert('Todo tersebut tidak ada.')
    console.log('✘ Todo gagal dihapus.')
  } else {
    todoList.splice(todoHapus - 1, 1)
    console.log('✔ Todo berhasil dihapus.')
  }
}

// showMenu()

// ambil element
const listUl = document.querySelector('.todoList')
const btnTambah = document.querySelector('button#add')

// tampilkan ke html
function showToDocument () {
  let list = '';
  todoList.forEach((todo, i) => {
    list += `
    <li>
      ${todo}
      <span class="icon">
        <span class="icon-item edit" onclick="ubahlist(${i})">
          <i class="fas fa-pen"></i>
        </span>
        <span class="icon-item delete" onclick="hapuslist(${i})">
          <i class="fas fa-trash"></i>
        </span>
      </span>
    </li>`
  })

  listUl.innerHTML = list
}

// onkeyup event
const inputBox = document.querySelector(".inputField input")
inputBox.onkeyup = () => {
  let inputtext = inputBox.value
  if (inputtext.trim() != 0) {
    btnTambah.classList.add("active")
  } else {
    btnTambah.classList.remove("active")
  }
}

btnTambah.onclick = () => {
  const todoBaru = inputBox.value
  if (todoBaru) {
    todoList.push(todoBaru)
    btnTambah.classList.remove("active")
    inputBox.value = ''
    showToDocument()
  }
}

const btnEdit = document.querySelector('button#edit')
const btnBatal = document.querySelector('button#cancel')
function ubahlist(i) {
  btnEdit.classList.remove("hide")
  btnBatal.classList.remove("hide")
  btnTambah.classList.add("hide")
  inputBox.value = todoList[i]

  btnEdit.onclick = () => {
    let inputtext = inputBox.value
    todoList[i] = inputtext
    inputBox.value = ""
    btnEdit.classList.add("hide")
    btnBatal.classList.add("hide")
    btnTambah.classList.remove("hide")
    btnTambah.classList.remove("active")
    showToDocument()
  };

  btnBatal.onclick = () => {
    inputBox.value = ''
    btnEdit.classList.add("hide")
    btnBatal.classList.add("hide")
    btnTambah.classList.remove("hide")
    btnTambah.classList.remove("active")
  };
}

function hapuslist (i) { 
    todoList.splice(i, 1)
    showToDocument()
}

showToDocument()

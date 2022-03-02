import { Workbox } from 'workbox-window';
import Editor from './editor';
import { putDb, getDb } from './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}

// const fetchList = async () => {
//   // Grab card data from IndexedDB
//   const result = await getDb();

//   let savedText = ` `;

  // Loop through the data and create the contact listItem
  // for (let data of result) {
  //   console.log(data);
  //   listItem += `
  //   <div class="flex-row align-center justify-space between" id="${data.id}">
  //     <span class="mr-2" id="list-item" onclick="deleteItem(this)">${data.todo}</li>
  //     <button class="btn btn-sm btn-info" onclick="editList(this)" id="edit-btn">Edit</button>
  //   </div>
  //   `;
  // }

  // // Setting innerHTML as listItem variable
  // document.getElementById('list-group').innerHTML = listItem;
// };
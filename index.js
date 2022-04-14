// Import stylesheets
import './style.css';
import liff from '@line/liff';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

const body = document.getElementById('body');
const userId = document.getElementById('userid');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const email = document.getElementById('email');

async function main() {
  await liff.init({ liffId: '1657051316-r2qQzYRj' });
}

main();

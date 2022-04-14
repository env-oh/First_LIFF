// Import stylesheets
import './style.css';
import liff from '@line/liff';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

const body = document.getElementById('body');
const pictureUrl = document.getElementById('pictureUrl');
const os = document.getElementById('os');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
//const email = document.getElementById('email');

async function main() {
  liff.ready.then(() => {
    if (liff.isInClient()) {
      getUserProfile();
    }
  });
  await liff.init(
    { liffId: '1657051316-r2qQzYRj' },
    () => {
      if (liff.isLoggedIn()) {
        mainLiff();
      } else {
        os.innerHTML = 'not login in LINE';
      }
    },
    (err) => {
      os.innerHTML = 'error' + err;
    }
  );
}

main();

function mainLiff() {
  os.innerHTML = '<b>OS: </b>' + liff.getOS();
  if (liff.isInClient()) {
    try {
      getUserProfile();
    } catch (e) {
      userId.innerHTML = 'error' + e;
    } finally {
      userId.innerHTML = 'done';
    }
  }
}

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>User ID: </b>' + profile.userId;
  displayName.innerHTML = '<b>displayName: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>statusMessage: </b>' + profile.statusMessage;
}

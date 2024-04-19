import checkout from './utilities/checkout';
import database from './database.json';

try {
  document.getElementById('app').innerHTML =
    'Your price is $' + checkout(['003', '002', '003', '003', '004'], database);
} catch (error) {
  document.getElementById('app').innerHTML = 'Error: ' + error.message;
}
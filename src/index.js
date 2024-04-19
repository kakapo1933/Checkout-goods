import checkout from './utilities/checkout';

try {
  document.getElementById('app').innerHTML =
    'Your price is $' + checkout(['003', '002', '003', '003', '004']);
} catch (error) {
  document.getElementById('app').innerHTML = 'Error: ' + error.message;
}
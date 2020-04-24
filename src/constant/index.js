const mode = 'prod';
const API_LOCAL = 'http://localhost:8000/api/';
const API_HEROKU = 'https://tulisan-fadil.herokuapp.com/api/';

exports.baseUri = () => (mode === 'dev' ? API_LOCAL : API_HEROKU);

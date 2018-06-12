
var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'https://ae01.alicdn.com/kf/HTB1TQnaaHsrBKNjSZFpq6AXhFXao/Nowy-styl-Harry-Potter-Plakat-Klienta-Plakat-Na-P-tnie-Sztuki-Dekoracji-Wn-trz-Wall-Poster.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Q0R48W6PL._SX335_BO1,204,203,200_.jpg'
  },
  {
  	id: 3,
  	title: 'Braveheart',
  	desc: 'Film o szkockim powstaniu',
  	image: 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
  	id: 4,
  	title: 'Pianista',
  	desc: 'Film o Szpilmanie',
  	image: 'https://ocdn.eu/pulscms-transforms/1/KvzktkpTURBXy9kNzA3MzY0ZjU1YjYzMzlhMTZkMGZhMDg1YWU3NTVmOS5wbmeRkwXNBADNAj8'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.image})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));

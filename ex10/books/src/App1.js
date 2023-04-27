import React,{useState} from 'react'
import book1 from './images/1.jpeg'
import book2 from './images/2.jpeg'
const books=[
  {
    id:1,
    title:'Lord of the Rings',
    author:'JRR Tolkein',
    publisher:'Pearson',
    release_year:2020,
    image:book1
  },
  {
    id:2,
    title:'Harry Potter',
    author:'JK Rowling',
    publisher:'Oxford',
    release_year:2021,
    image:book2
  }
];
const App=()=>{
  const [releaseYearFilter, setReleaseYearFilter] = useState('');
  const [publisherFilter, setPublisherFilter] = useState('');
  const handleReleaseYearChange = (event) => {
    setReleaseYearFilter(event.target.value);
  };

  const handlePublisherChange = (event) => {
    setPublisherFilter(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    if (releaseYearFilter && book.release_year !== parseInt(releaseYearFilter)) {
      return false;
    }
    if (publisherFilter && book.publisher !== publisherFilter) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <label>Release Year:</label>
        <input type="text" value={releaseYearFilter} onChange={handleReleaseYearChange} />
      </div>
      <div>
        <label>Publisher:</label>
        <select value={publisherFilter} onChange={handlePublisherChange}>
          <option value="">All</option>
          <option value="Pearson">Pearson</option>
          <option value="Oxford">Oxford</option>
          <option value="Wiley">Wiley</option>
        </select>
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.release_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

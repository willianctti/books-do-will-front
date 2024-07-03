import './App.css';
import { useState } from 'react';
import { Card } from './components/card/card';
import { BookForm } from './components/bookForm/bookForm';
import { useUserRestaurantData } from './hooks/userRestaurantData';
import { RestaurantData } from './interface/RestaurantData';

function App() {
  const { data } = useUserRestaurantData();
  const [showAddBook, setShowAddBook] = useState(false);
  
  const scrollToBooks = () => {
    const bookSection = document.getElementById('book-section');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="main-header">
        <div className="logo">Willian Nicoletti</div>
        <nav className="nav-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#book-section" onClick={scrollToBooks}>Ver Livros</a>
        </nav>
        <div className="header-divider"></div>
      </header>
      <div className="header">
        <h1>La Carta Branca</h1>
        <p>Aqui você pode ver todos os livros que já li</p>
      </div>
      <section id="book-section" className="book-section">
        <div className="card-grid">
          {data?.map((item: RestaurantData) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section id="add-book" className="add-book-section">
        <button onClick={() => setShowAddBook(true)} className="add-book-button">+</button>
        {showAddBook && (
          <div className="book-form-container">
            <button onClick={() => setShowAddBook(false)} className="close-book-form-button">x</button>
            <BookForm />
          </div>
        )}
      </section>
      <footer>
        <p>&copy; 2024 Willian Nicoletti. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;

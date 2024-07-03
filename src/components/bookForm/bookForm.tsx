import { useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/books';

export function BookForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post(API, { title, image, description });
      setSuccess('Livro adicionado com sucesso!');
      setTitle('');
      setImage('');
      setDescription('');
    } catch (err) {
      setError('Erro ao adicionar livro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>Adicionar Novo Livro</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Imagem URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Adicionando...' : 'Adicionar Livro'}
      </button>
    </form>
  );
}

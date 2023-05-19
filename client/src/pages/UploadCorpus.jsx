import React, { useState } from 'react';
import axios from 'axios';

const UploadCorpus = () => {
  const [file, setFile] = useState(null);
  const [corpusData, setCorpusData] = useState({
    title: '',
    description: '',
    language: '',
    source: '',
  });
  const [message, setMessage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCorpusData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', corpusData.title);
      formData.append('description', corpusData.description);
      formData.append('language', corpusData.language);
      formData.append('source', corpusData.source);

      axios
        .post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          setMessage(`File uploaded: ${res.data.filename}`);
        })
        .catch((err) => {
          console.error(err);
          setMessage('Upload failed. Please try again.');
        });
    }
  };

  return (
    <div className="upload-corpus-container">
      <h2>Upload Corpus</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={corpusData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={corpusData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            name="language"
            value={corpusData.language}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            name="source"
            value={corpusData.source}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Choose a file:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UploadCorpus;


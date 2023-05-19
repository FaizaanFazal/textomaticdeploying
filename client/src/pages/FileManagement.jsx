import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileAlt, FaDownload, FaTrash } from 'react-icons/fa';

const FileManagement = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    axios.get('/api/files').then((res) => {
      setFileList(res.data);
    });
  }, []);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('/api/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      setFileList([...fileList, res.data]);
    });
  };

  const handleFileDownload = (file) => {
    axios.get(`/api/files/${file._id}/download`, {
      responseType: 'blob',
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file.originalname);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleFileDelete = (file) => {
    axios.delete(`/api/files/${file._id}`).then(() => {
      setFileList(fileList.filter((f) => f._id !== file._id));
    });
  };

  return (
    <div className="container-2">
      <h2>File Management</h2>
      <div className="d-flex justify-content-center row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputGroupFile" onChange={handleFileSelect} />
              <label className="custom-file-label" htmlFor="inputGroupFile">
                {selectedFile ? selectedFile.name : 'Choose file'}
              </label>
            </div>
          </div>
        </div>
       
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fileList.map((file) => (
            <tr key={file._id}>
              <td>
                {file.type === 'application/pdf' && <FaFilePdf className="mr-2" />}
                {file.type === 'application/msword' && <FaFileWord className="mr-2" />}
                {file.type === 'application/vnd.ms-excel' && <FaFileExcel className="mr-2" />}
                {file.type === 'application/vnd.ms-powerpoint' && <FaFilePowerpoint className="mr-2" />}
                {file.type === 'application/octet-stream' && <FaFileAlt className="mr-2" />}
                {file.originalname}
              </td>
              <td>{file.type}</td>
              <td>{file.originalname}</td>
              <td>{file.type}</td>
              <td>{(file.size / 1024 / 1024).toFixed(2)} MB</td>
              <td>
                <button type="button" className="btn btn-link" onClick={() => handleFileDownload(file)}>
                  <FaDownload />
                </button>
                <button type="button" className="btn btn-link text-danger" onClick={() => handleFileDelete(file)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileManagement;

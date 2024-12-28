import React from 'react';

function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#fff',
      color: '#333',
      padding: '10px 20px',
      borderRadius: '5px',
      border: '0.5px solid red',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
      animation: 'fadeIn 0.2s, vibrate 0.2s, fadeOut 0.2s 2.5s',
    }}>
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: '10px',
          background: 'transparent',
          border: 'none',
          color: '#333',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;

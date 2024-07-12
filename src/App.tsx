import React from 'react';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

const App: React.FC = () => {
  const handleClick = () => {
    alert('YOU GET THE BEST OF BOTH WORLDS!!');
  };

  return (
    // task one
    <div className="App">
      <h1 className="title">User Information App:</h1>
      {/* Integrating UserInfo component */}
      <UserInfo name="Miley Cyrus" age={32} email="hannah.montana@example.com" />
      <h1>Card Component Examples:</h1>
      <Card>
        <h2>Check Out This Snazzy Logo</h2>
        <img src="./public/hanna-header.png" alt="logo" />
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This card has different content.</p>
        <button onClick={handleClick}>Click Me</button>
      </Card>
      <Card>
        <img src="./public/hanna.png" alt="selfie" />
        <p>Howdy folks..</p>
      </Card>
      <Card>
        <ul>
          <li>I go by Miley Cyrus</li>
          <li>I also go by Miley Stewart</li>
          <li>And of course, Hannah Montana</li>
        </ul>
      </Card>
    </div>
  );
};

export default App;
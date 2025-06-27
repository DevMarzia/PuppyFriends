import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './authSlice';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit" disabled={loading}>Login</button>
      {error && <p>{error}</p>}
      {user && <p>Benvenuta, {user.username}!</p>}
    </form>
  );
}




// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from './authSlice';

// export default function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const { user, loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ username, password }));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto p-4 bg-white rounded shadow">
//       <h2 className="text-xl font-bold">Login</h2>
//       <input
//         className="w-full p-2 border rounded"
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         className="w-full p-2 border rounded"
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
//         {loading ? 'Accesso in corso...' : 'Accedi'}
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//       {user && <p className="text-green-500">Ciao {user.username}! Ruolo: {user.role}</p>}
//     </form>
//   );
// }

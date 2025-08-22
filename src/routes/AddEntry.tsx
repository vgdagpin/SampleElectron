import { useState } from 'react';

export default function AddEntry() {
  const [first, setFirst] = useState('');
  const [middle, setMiddle] = useState('');
  const [last, setLast] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // If inside Electron, call the exposed API
    if ((window as any).electronAPI?.submitEntry) {
      await (window as any).electronAPI.submitEntry({ first, middle, last });
      // optional: navigate back or clear
      setFirst(''); setMiddle(''); setLast('');
    } else {
      alert(JSON.stringify({ first, middle, last }));
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Add Entry</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Namex</label>
          <input value={first} onChange={e => setFirst(e.target.value)} required />
        </div>
        <div>
          <label>Middle Name</label>
          <input value={middle} onChange={e => setMiddle(e.target.value)} />
        </div>
        <div>
          <label>Last Name</label>
          <input value={last} onChange={e => setLast(e.target.value)} required />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

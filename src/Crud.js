import { useState } from 'react';
import Addlist from './Addlist.js';

function Crud() {
  const initialList = [
    {
      id: 1,
      name: 'Merai',
      profession: 'Developer',
    },
    {
      id: 2,
      name: 'Kala',
      profession: 'Designer',
    },
    {
      id: 3,
      name: 'Malathi',
      profession: 'Editor',
    },
  ];
  
  const [lists, setlist] = useState(initialList);
  const [update, setupdate] = useState(null);
  const [tempName, setTempName] = useState('');
  const [tempProfession, setTempProfession] = useState('');

  const store = lists.map((current, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>
          {update === current.id ? (
            <input
              defaultValue={current.name}
              onChange={(e) => setTempName(e.target.value)}
            />
          ) : (
            current.name
          )}
        </td>
        <td>
          {update === current.id ? (
            <input
              defaultValue={current.profession}
              onChange={(e) => setTempProfession(e.target.value)}
            />
          ) : (
            current.profession
          )}
        </td>
        <td>
          {update === current.id ? (
            <button onClick={() => saveupdate(current.id)}>Save</button>
          ) : (
            <button onClick={() => handleEdit(current)}>Edit</button>
          )}
        </td>
        <td>
          <button onClick={() => handleDelete(current.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  function handleEdit(item) {
    setupdate(item.id);
    setTempName(item.name);
    setTempProfession(item.profession);
  }

  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setlist(newlist);
  }

  function saveupdate(id) {
    const updatedList = lists.map((item) =>
      item.id === id ? { ...item, name: tempName, profession: tempProfession } : item
    );
    setlist(updatedList);
    setupdate(null);
  }

  return (
    <div className="crud">
      <Addlist setlist={setlist} />
      <table className="crud-table" border="all">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Profession</th>
            <th colSpan="2">Update</th>
          </tr>
        </thead>
        <tbody>{store}</tbody>
      </table>
    </div>
  );
}

export default Crud;

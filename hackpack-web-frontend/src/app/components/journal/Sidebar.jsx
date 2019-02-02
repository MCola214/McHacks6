import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

const Sidebar = ({
  entries,
  newEntry,
  selectEntry
}) => {
  let displayEntries = [];
  entries.forEach(entry => {
    let text = entry.text.substr(0, 20) + '...';
    displayEntries.push((
      <li key={entry.id} onClick={() => { selectEntry(entry.id); }}>
        {text}
      </li>
    ));
  })

  return (
    <div className="sidebar">
      <h2>Your entries</h2>
      <div
        className="button new-button"
        onClick={(e) => {
        e.preventDefault();
        newEntry();
      }}>New</div>
      <ul>
        {displayEntries}
      </ul>

    </div>
  );
}

const EditEntry = ({
  entries,
  currentEntry,
  updateEntry
}) => {
  let entry = _.find(entries, (e) => {
    return e.id === currentEntry;
  });

  return (
    <textarea
      id="editEntry"
      className="edit-entry"
      name="editEntry"
      value={entry.text}
      onChange={(e) => {
        updateEntry({
          id: currentEntry,
          text: document.getElementById('editEntry').value
        });
      }}>
    </textarea>
  )
}

export default Sidebar;

const studentForm = document.getElementById('studentForm');
const studentTableBody = document.querySelector('#studentTable tbody');

studentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const grade = document.getElementById('grade').value.trim();

  if (name && age && grade) {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${grade}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    studentTableBody.appendChild(newRow);

    // Clear form
    studentForm.reset();
  }
});

// Delete student
studentTableBody.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    const row = e.target.closest('tr');
    row.remove();
  }
});

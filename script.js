function addStudent() {
  let name = document.getElementById("name").value;
  if (name === "") return;

  let li = document.createElement("li");
  li.innerHTML = name + " <button onclick='remove(this)'>❌</button>";

  document.getElementById("list").appendChild(li);
  document.getElementById("name").value = "";

  updateCount();
}

function remove(btn) {
  btn.parentElement.remove();
  updateCount();
}

function updateCount() {
  let total = document.getElementById("list").children.length;
  document.getElementById("count").innerText = total;
}

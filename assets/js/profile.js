document.addEventListener("DOMContentLoaded", () => {
  checkLoginState();
  updateCartDisplay();
});

function checkLoginState() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    showNotification("Please sign in to view your profile.");
    window.location.href = "index.html";
    setTimeout(showAuthModal, 100);
    return;
  }
  loadProfile();
}

function loadProfile() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const profileInfo = document.getElementById("profileInfo");
  const orderHistory = document.getElementById("orderHistory");
  const profileName = document.getElementById("profileName");

  if (!currentUser) return;

  profileName.textContent = `${currentUser.username}'s Profile`;
  profileInfo.innerHTML = `
    <h3>Profile Details</h3>
    <p><strong>Username:</strong> ${currentUser.username}</p>
    <p><strong>Email:</strong> ${currentUser.email}</p>
    <p><strong>Phone:</strong> ${currentUser.phone || "Not provided"}</p>
  `;

  orderHistory.innerHTML = `
    <h3>Order History</h3>
    ${
      orders.length === 0
        ? "<p>No orders yet.</p>"
        : orders
            .map(
              (order) => `
      <div class="order-item">
        <p><strong>Order #${order.id}</strong> - ${new Date(
                order.date
              ).toLocaleDateString()}</p>
        <p>Items: ${order.items
          .map(
            (item) =>
              `${item.name} (Qty: ${item.quantity}, Size: ${item.size}, Color: ${item.color})`
          )
          .join(", ")}</p>
        <p>Total: ₦${order.total.toFixed(2)}</p>
      </div>
    `
            )
            .join("")
    }
  `;
}

function showUpdateForm() {
  const updateForm = document.getElementById("updateForm");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (updateForm && currentUser) {
    updateForm.style.display = "block";
    document.getElementById("updateUsername").value = currentUser.username;
    document.getElementById("updateEmail").value = currentUser.email;
    document.getElementById("updatePhone").value = currentUser.phone || "";
  }
}

function updateProfile() {
  const username = document.getElementById("updateUsername").value;
  const email = document.getElementById("updateEmail").value;
  const phone = document.getElementById("updatePhone").value;
  const password = document.getElementById("updatePassword").value;

  if (!username || !email) {
    showNotification("Username and email are required.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userIndex = users.findIndex((u) => u.email === currentUser.email);

  if (users.some((u) => u.email === email && u.email !== currentUser.email)) {
    showNotification("Email is already in use by another account.");
    return;
  }

  const updatedUser = {
    ...currentUser,
    username,
    email,
    phone,
    password: password || currentUser.password,
  };

  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
  } else {
    users.push(updatedUser);
  }

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  showNotification("Profile updated successfully!");
  document.getElementById("updateForm").style.display = "none";
  loadProfile();
  updateUserIcon();
}

function logout() {
  localStorage.removeItem("currentUser");
  showNotification("Logged out successfully.");
  window.location.href = "index.html";
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.background = "#16502f";
  notification.style.color = "#fff";
  notification.style.padding = "10px 20px";
  notification.style.borderRadius = "5px";
  notification.style.zIndex = "1000";
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = Array.isArray(cart)
      ? cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0)
      : 0;
    cartCount.textContent = totalQuantity;
  }
}

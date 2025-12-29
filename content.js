// Content script to detect and autofill form fields on the page

// Select common input and textarea fields
const userData = {
  name: "Sophia Den",
  email: "sophia.den@example.com",
  phone: "9876543210",
  skills: "JavaScript, HTML, CSS, Chrome Extensions"
};

// Select all input fields and textareas on the page
document.querySelectorAll("input, textarea").forEach((field) => {
  const placeholder = field.placeholder?.toLowerCase() || "";
  const name = field.name?.toLowerCase() || "";
  const id = field.id?.toLowerCase() || "";

  // Autofill name field
  if (placeholder.includes("name") || name.includes("name") || id.includes("name")) {
    field.value = userData.name;
  }
  // Autofill email field
  if (placeholder.includes("email") || name.includes("email")) {
    field.value = userData.email;
  }
  // Autofill phone field
  if (placeholder.includes("phone") || name.includes("phone") || name.includes("mobile")) {
    field.value = userData.phone;
  }
  // Autofill skills or experience text areas
  if (field.tagName === "TEXTAREA") {
    field.value = userData.skills;
  }
});


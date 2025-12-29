const userData = {
  name: "Sophia Den",
  email: "sophia.den@example.com",
  phone: "9876543210",
  skills: "JavaScript, HTML, CSS, Chrome Extensions"
};

document.querySelectorAll("input, textarea").forEach((field) => {
  const placeholder = field.placeholder?.toLowerCase() || "";
  const name = field.name?.toLowerCase() || "";
  const id = field.id?.toLowerCase() || "";

  if (placeholder.includes("name") || name.includes("name") || id.includes("name")) {
    field.value = userData.name;
  }

  if (placeholder.includes("email") || name.includes("email")) {
    field.value = userData.email;
  }

  if (placeholder.includes("phone") || name.includes("phone") || name.includes("mobile")) {
    field.value = userData.phone;
  }

  if (field.tagName === "TEXTAREA") {
    field.value = userData.skills;
  }
});

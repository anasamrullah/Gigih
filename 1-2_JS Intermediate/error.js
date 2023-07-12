const students = [{ name: "Alice" }];
try {
  console.log(students[0].name);
} catch (error) {
  console.log("error", error.message);
}

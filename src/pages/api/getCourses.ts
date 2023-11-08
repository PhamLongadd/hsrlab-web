async function fetchCourses() {
  const response = await fetch("http://localhost:1337/api/courses?populate=*");
  const data = await response.json();
  return data.data;
}

export default fetchCourses;
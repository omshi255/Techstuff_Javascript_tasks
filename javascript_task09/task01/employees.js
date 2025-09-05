const employees = [
  { "id": 1, "name": "Alice", "age": 25, "department": "HR", "salary": 50000 },
  { "id": 2, "name": "Bob", "age": 30, "department": "IT", "salary": 60000 },
  {
    "id": 3,
    "name": "Charlie",
    "age": 28,
    "department": "Finance",
    "salary": 55000
  },
  { "id": 4, "name": "David", "age": 35, "department": "IT", "salary": 70000 },
  {
    "id": 5,
    "name": "Eva",
    "age": 29,
    "department": "Marketing",
    "salary": 48000
  },
  {
    "id": 6,
    "name": "Frank",
    "age": 32,
    "department": "Finance",
    "salary": 62000
  },
  { "id": 7, "name": "Grace", "age": 27, "department": "HR", "salary": 51000 },
  { "id": 8, "name": "Henry", "age": 31, "department": "IT", "salary": 68000 },
  {
    "id": 9,
    "name": "Ivy",
    "age": 26,
    "department": "Marketing",
    "salary": 47000
  },
  {
    "id": 10,
    "name": "Jack",
    "age": 33,
    "department": "Finance",
    "salary": 59000
  },
  { "id": 11, "name": "Karen", "age": 24, "department": "HR", "salary": 50000 },
  { "id": 12, "name": "Leo", "age": 29, "department": "IT", "salary": 61000 },
  {
    "id": 13,
    "name": "Mona",
    "age": 30,
    "department": "Marketing",
    "salary": 52000
  },
  {
    "id": 14,
    "name": "Nina",
    "age": 28,
    "department": "Finance",
    "salary": 58000
  },
  { "id": 15, "name": "Oscar", "age": 34, "department": "IT", "salary": 70000 },
  { "id": 16, "name": "Pam", "age": 27, "department": "HR", "salary": 49000 },
  {
    "id": 17,
    "name": "Quinn",
    "age": 32,
    "department": "Finance",
    "salary": 62000
  },
  { "id": 18, "name": "Ray", "age": 31, "department": "IT", "salary": 67000 },
  {
    "id": 19,
    "name": "Sara",
    "age": 25,
    "department": "Marketing",
    "salary": 48000
  },
  {
    "id": 20,
    "name": "Tom",
    "age": 29,
    "department": "Finance",
    "salary": 59000
  },
  { "id": 21, "name": "Uma", "age": 26, "department": "HR", "salary": 51000 },
  {
    "id": 22,
    "name": "Victor",
    "age": 33,
    "department": "IT",
    "salary": 69000
  },
  {
    "id": 23,
    "name": "Wendy",
    "age": 28,
    "department": "Marketing",
    "salary": 50000
  },
  {
    "id": 24,
    "name": "Xavier",
    "age": 35,
    "department": "Finance",
    "salary": 71000
  },
  { "id": 25, "name": "Yara", "age": 27, "department": "HR", "salary": 52000 },
  { "id": 26, "name": "Zane", "age": 30, "department": "IT", "salary": 64000 },
  {
    "id": 27,
    "name": "Aiden",
    "age": 29,
    "department": "Finance",
    "salary": 60000
  },
  {
    "id": 28,
    "name": "Bella",
    "age": 26,
    "department": "Marketing",
    "salary": 49000
  },
  { "id": 29, "name": "Cody", "age": 32, "department": "IT", "salary": 68000 },
  { "id": 30, "name": "Diana", "age": 27, "department": "HR", "salary": 51000 },
  {
    "id": 31,
    "name": "Ethan",
    "age": 34,
    "department": "Finance",
    "salary": 70000
  },
  {
    "id": 32,
    "name": "Fiona",
    "age": 25,
    "department": "Marketing",
    "salary": 47000
  },
  {
    "id": 33,
    "name": "George",
    "age": 30,
    "department": "IT",
    "salary": 62000
  },
  {
    "id": 34,
    "name": "Hannah",
    "age": 28,
    "department": "HR",
    "salary": 50000
  },
  {
    "id": 35,
    "name": "Ian",
    "age": 33,
    "department": "Finance",
    "salary": 69000
  },
  {
    "id": 36,
    "name": "Julia",
    "age": 27,
    "department": "Marketing",
    "salary": 48000
  },
  { "id": 37, "name": "Kevin", "age": 31, "department": "IT", "salary": 67000 },
  { "id": 38, "name": "Lara", "age": 26, "department": "HR", "salary": 51000 },
  {
    "id": 39,
    "name": "Mike",
    "age": 29,
    "department": "Finance",
    "salary": 60000
  },
  {
    "id": 40,
    "name": "Nora",
    "age": 25,
    "department": "Marketing",
    "salary": 47000
  },
  { "id": 41, "name": "Owen", "age": 32, "department": "IT", "salary": 68000 },
  { "id": 42, "name": "Paula", "age": 28, "department": "HR", "salary": 50000 },
  {
    "id": 43,
    "name": "Quincy",
    "age": 33,
    "department": "Finance",
    "salary": 70000
  },
  {
    "id": 44,
    "name": "Rita",
    "age": 27,
    "department": "Marketing",
    "salary": 48000
  },
  { "id": 45, "name": "Sam", "age": 30, "department": "IT", "salary": 62000 },
  { "id": 46, "name": "Tina", "age": 26, "department": "HR", "salary": 51000 },
  {
    "id": 47,
    "name": "Umar",
    "age": 34,
    "department": "Finance",
    "salary": 71000
  },
  {
    "id": 48,
    "name": "Vera",
    "age": 29,
    "department": "Marketing",
    "salary": 49000
  },
  { "id": 49, "name": "Will", "age": 31, "department": "IT", "salary": 67000 },
  { "id": 50, "name": "Xena", "age": 27, "department": "HR", "salary": 52000 }
]

export default employees;
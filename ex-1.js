function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (i = 0; i <= students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    } else {
      return -1;
    }
  }
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  Ans: ควรใช้ Liner Search Algorithm
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  Ans:  students เป็น Array ที่ยังไม่ได้เรียงลำดับค่าภายใน
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  Ans: เป็น O(n)  เพราะ function จะวนลูปสูงสุดเท่ากับจำนวนสมาชิกใน array ที่ input ที่ใส่เข้าไป
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1

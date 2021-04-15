// Q1. make a string out of an array
{
	const fruits = ["apple", "banana", "orange"];
	const fruit1 = fruits.join();
}

// Q2. make an array out of a string
{
	const fruits = "🍎, 🥝, 🍌, 🍒";
	const fruit2 = fruits.split();
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	const fruit3 = array.reverse();
}

// Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	const fruit4 = array.slice(2, 5);
	console.log(fruit4);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student("A", 29, true, 45),
	new Student("B", 28, false, 80),
	new Student("C", 30, true, 90),
	new Student("D", 40, false, 66),
	new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
	const std = students.find((student) => {
		return student.score >= 90;
	});
}

// Q6. make an array of enrolled students
{
	const std = students.filter((student) => student.enrolled);
	// const std = students.filter((student) => student.score >= 90);
	console.log(std);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const result = students.map((student) => student.score);
	console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
	// const result = students.filter((student) => student.score <= 50);
	const result = students.some((student) => student.score < 50);
	const result2 = students.every((student) => student.score < 50); // every 는 배열의 모든 요소들이 조건을 충족해야 true를 리턴
	console.log(result);
}

// Q9. compute students' average score
{
	const result = students.reduce((prev, curr) => {
		return prev + curr.score; // 다음번에 curr이 prev로 된다
	}, 0); //initial 값이 0 부터 시작
	console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	const result = students.map((student) => student.score).join();
	const result2 = students
		.map((student) => student.score)
		.filter((score) => score >= 50)
		.sort((a, b) => a - b)
		.join();
	console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}

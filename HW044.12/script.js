//1

let students = [
    {
      name: 'Айжан',
      math: 85,
      city: 'Алматы',
      country: 'Қазақстан',
    },
    {
      name: 'Санжар',
      math: 92,
      city: 'Шымкент',
    },
  ];

  let [firstStudent, secondStudent] = students;
  let { name, math, city, country = 'Қазақстан' } = secondStudent;
  
  console.log("Оқушының аты:" +name);
  console.log("Математика бағасы:" + math);
  console.log("Қаласы:" + city);
  console.log("Елі: "+ country);
  

//2
const classA = ['Айжан', 'Санжар', 'Бекзат'];
const classB = ['Амина', 'Данияр', 'Ербол'];

const ekiClass = ['Директор', ...classA, ...classB, 'Мұғалім'];

console.log(ekiClass);

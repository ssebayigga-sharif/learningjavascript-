const school = {

    name: "Greenfield High School",
  
    location: "New York",
  
    students: [
  
      {
  
        name: "John Doe",
  
        grade: 10,
  
        subjects: [
  
          { name: "Math", score: 85 },
  
          { name: "Science", score: 90 },
  
          { name: "History", score: 78 },
  
          { name: "English", score: 92 },
  
        ]
  
      },
  
      {
  
        name: "Jane Smith",
  
        grade: 11,
  
        subjects: [
  
          { name: "Math", score: 88 },
  
          { name: "Science", score: 92 },
  
          { name: "History", score: 85 },
  
          { name: "English", score: 89 },
  
        ]
  
      },
  
      {
  
        name: "Sam Brown",
  
        grade: 12,
  
        subjects: [
  
          { name: "Math", score: 92 },
  
          { name: "Science", score: 94 },
  
          { name: "History", score: 90 },
  
          { name: "English", score: 87 },
  
        ]
  
      },
  
    ],
  
  };
  
  
  for (let y in school){
    console.log(y);
  }
  
   //my object constructor
   function People(firstName, lastName, age, color){
    this.fname = firstName;
    this.lname = lastName;
    this.age = age;
    this.color = color;
  }
  //adding a property to a constructor
  People.prototype.nationality = 'Ugandan';
  //adding a method to a constructor
  People.prototype.fullName = function(){
    return this.fname + " " + this.lname;
  }
  //referencing new objects
  const mum = new People("shakirah","nakalema",46, "brown");
  const dad = new People("shafic","kasule",50, "black");
  const sis = new People("hajarah","namugga",13, "brown");
  const bro = new People("imran","kawooya",7, "black");
  const baby = new People("hibah","nakawooya",2, "brown");
  //accessing our constructor
  
  
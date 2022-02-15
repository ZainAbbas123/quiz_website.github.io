// This data will be the array of objects
var questions = [{
"question": "A constructor can be virtual.",
  "option1": "True",
  "option2": "False",
  "option3": "May be True or False",
  "option4": "None",
  "reason" : "The purpose of the constructor cannot be overridden in the derived class hence constructor cannot be a virtual.",
  "answer":  "2"
},{
"question": "The operator used to access member function of a structure using its object.",
  "option1": ".",
  "option2": "->",
  "option3": "*",
  "option4": "None of the Above",
  "reason" : "Just the way we use dot (.) operator to access members of the class, in similar it is used to access the members of the structure too.",
  "answer":  "1"
},{
"question": "How many number of arguments can a destructor of a class receives?",
  "option1": "0",
  "option2": "1",
  "option3": "2",
  "option4": "None of the Above",
  "reason" : "The destructor receives no arguments and is only form to be provided. Hence destructor cannot be overloaded.",
  "answer":  "1"
},{
  "question": "HAS-A relationship between the classes is shown through.",
  "option1": "Inheritance",
  "option2": "Container Class",
  "option3": "Polymorphism",
  "option4": "Encapsulation",
  "reason" : "A class containing anther class object as its member is called as container class and exhibits HAS A relationship.",
  "answer":  "2"
},{
  "question": "Which of the following does not have a body.",
  "option1": "An interface",
  "option2": "A Class",
  "option3": "An abstract Method",
  "option4": "None of the Above",
  "reason" : "An Abstract Method does not have a body",
  "answer":  "3"
},{
  "question": "Can we overload constructor in derived class",
  "option1": "Yes",
  "option2": "No",
  "option3": "May be or may not be",
  "option4": "None",
  "reason" : "No, we can't overload constructor in derived class",
  "answer":  "2"
},{
"question": "Constructor can return a value.",
  "option1": "True",
  "option2": "False",
  "option3": "May be or may not be",
  "option4": "None",
  "reason" : "False , Constructor cannot return any value",
  "answer":  "2"
},{
"question": "Which feature of OOP encourages the code resueability.",
  "option1": "Polymorphism",
  "option2": "Inheritance",
  "option3": "Encapsulation",
  "option4": "abstruction",
  "reason" : "Inheritance encourges the code reusability in OOPS.",
  "answer":  "2"
},{
  "question": "How many catch blocks you can use with single try block.",
  "option1": "Only 2",
  "option2": "Only 1",
  "option3": "Maximum 256",
  "option4": "As many as required",
  "reason" : "You can use As many as required catch block with a single Try Block",
  "answer":  "4"
},{
"question": "If constructors of a class are defined in private access, then __________.",
  "option1": "The class can’t be inherited",
  "option2": " The class can be inherited",
  "option3": "Instance can be created only in another class",
  "option4": "Instance can be created anywhere in the program",
  "reason" : "If the constructors are defined in private access, then the class can’t be inherited by other classes. This is useful when the class contains static members only. The instances can never be created.",
  "answer":  "1"
},{
"question": "Which specifier applies only to the constructors?",
  "option1": "Public",
  "option2": " Protected",
  "option3": "Implicit",
  "option4": "Explicit",
  "reason" : "The keyword explicit can be used while defining the constructor only. This is used to suppress the implicit call to the constructor. It ensures that the constructors are being called with the default syntax only (i.e. only by using object and constructor name).",
  "answer":  "4"
}]
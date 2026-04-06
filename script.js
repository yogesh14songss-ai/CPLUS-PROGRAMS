// DATABASE
const database = {
    basic: { title: "Basic Programming Constructs", questions: [] },
    strings: { title: "Strings", questions: [] },
    array: { title: "Single-Dimension Arrays", questions: [] }, 
    arrays: { title: "Multi-Dimension Arrays", questions: [] },
    functions: { title: "Functions", questions: [] },
    conversion: { title: "Data Conversion", questions: [] },
    inheritance: { title: "Inheritance", questions: [] },
    oop: { title: "Object Oriented Programming", questions: [] },
    virtual: { title: "Virtual Functions", questions: [] },
    operator: { title: "Operator Overloading", questions: [] },
    file: { title: "File Handling", questions: [] }
};

// GLOBAL VARIABLES
let currentTopic = "";
let currentQuestion = 0;

// SHORTCUT
const $ = (id) => document.getElementById(id);

// OPEN TOPIC
function openTopic(topic) {
    currentTopic = topic;

    $("topics-view").classList.add("hidden");
    $("questions-view").classList.remove("hidden");

    $("topic-title").innerText = database[topic].title;
    loadQuestions();
}

// LOAD QUESTIONS
function loadQuestions() {
    const list = $("question-list");
    const questions = database[currentTopic].questions;

    if (questions.length === 0) {
        list.innerHTML = "<p>No questions added yet</p>";
        return;
    }

    list.innerHTML = questions
        .map((q, i) => `
            <div class="question-item" onclick="openQuestion(${i})">
                ${i + 1}. ${q.q}
            </div>
        `)
        .join("");
}

// OPEN QUESTION
function openQuestion(index) {
    currentQuestion = index;

    const q = database[currentTopic].questions[index];

    $("questions-view").classList.add("hidden");
    $("answer-view").classList.remove("hidden");

    $("question-text").innerText = `${index + 1}. ${q.q}`;
    $("solution-text").innerText = q.code || "Solution not added yet";

    showOutput(q);
}

// SHOW OUTPUT
function showOutput(q) {
    const text = $("output-text");
    const image = $("output-image");

    text.classList.add("hidden");
    image.classList.add("hidden");

    if (q.output) {
        text.innerText = q.output;
        text.classList.remove("hidden");
    }

    if (q.image) {
        image.src = q.image;
        image.classList.remove("hidden");
    }
}

// BACK BUTTONS
function goBack() {
    $("questions-view").classList.add("hidden");
    $("topics-view").classList.remove("hidden");
}

function goBackToQuestions() {
    $("answer-view").classList.add("hidden");
    $("questions-view").classList.remove("hidden");
}
database.basic.questions = ([
    // Question 1
    {
        q: "Write a C++ program to print Hello World! on screen",
        code:
            `#include<iostream>
using namespace std;
int main()
{
    cout<<"hello world!";
}`,
        output:
            `hello world!`
},

    // Question 2
    {
        q: "Write a C++ program to print the sum of two numbers",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int a, b, c;

    cout << "Enter first number: ";
    cin >> b;
    cout << "Enter second number: ";
    cin >> c;

    a = b + c;

    cout << "Sum of two number is : " << a;
}`,
        output:
            `Enter first number: 45
Enter second number: 89
Sum of two number is : 134`
    },
    // Question 3
    {
        q: "Write a C++ program that takes two numbers and display the product of two numbers",
        code:
            `#include<iostream>
using namespace std;
int main()
{
    int a,b,c;
    cin>>a;
    cin>>b;
    c=a*b;
    cout<<"product or two number is :-"<<c;

}`,
        output:
            `6
7
product or two number is :-42`
    },
    // Question 4
    {
        q: "Write a C++ program to print the sum, multiply, subtract, divide and remainder of two numbers",
        code:
            `#include<iostream>
using namespace std;
int main()
{
    int a,b,c,d,e,f;
    b=10;
    c=20;
    a=b+c;
    d=b-c;
    e=b*c;
    f=b/c;
    cout<<"sum of numbers"<<a<<endl;
    cout<<"subtract of number"<<d<<endl;
    cout<<"product of number"<<e<<endl;
    cout<<"devision of number"<<f<<endl;
}`,
        output:
            `sum of numbers30
subtract of number-10
product of number200
devision of number0`
    },
    // Question 5
    {
        q: "Write a C++ program that takes five numbers as input to calculate and print the average of the numbers",
        code:
            `#include<iostream>
using namespace std;

int main()
{ cout<<"enter 5 number for calculate and print average of the numbers:-\n";
    int a,b,c,d,e,sum,sum1;
    cout<<"enter first number";
    cin>>a;
    cout<<"enter second number";
    cin>>b;
    cout<<"enter third number";
    cin>>c;
    cout<<"enter fourth number";
    cin>>d;
    cout<<"enter fifth number";
    cin>>e;
    sum=a+b+c+d+e;
    sum1=sum/5;

cout<<"answer is :-)"<<sum1;
}`,
        output:
            `enter 5 number for calculate and print average of the numbers:-
enter first number10
enter second number20
enter third number30
enter fourth number40
enter fifth number50
answer is :-)30`
    },
    // Question 6
    {
        q: "Write a C++ program to swap two variables",
        code:
            `#include<iostream>
#include<string>
using namespace std;

int main()
{
   string x="hii",z="hello",a;
   a=x;
   x=z;
   z=a;
   cout<<"The swapped variable is: "<<x<<"\n"<<z;

}`,
        output:
            `The swapped variable is: hello
hii`
    },
    // Question 7
    {
        q: "Write a C++ program to convert a decimal number to binary numbers",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num, binary[30], i = 0;

    cout << "Enter number: ";
    cin >> num;

    while (num > 0)
    {
        binary[i] = num % 2;
        num = num / 2;
        i++;
    }

    cout << "Binary = ";

    for (int j = i - 1; j >= 0; j--)
    {
        cout << binary[j];
    }

    return 0;
}`,
        output:
            `Enter number: 13
Binary = 1101`
    },
    // Question 8
    {
        q: "Write a C++ program to convert a binary number to decimal number",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int binary, decimal = 0, base = 1, rem;

    cout << "Enter binary number: ";
    cin >> binary;

    while(binary > 0)
    {
        rem = binary % 10;          
        decimal = decimal + rem * base;
        binary = binary / 10;       
        base = base * 2;          
    }

    cout << "Decimal = " << decimal;

    return 0;
}`,
        output:
            `Enter binary number: 1101
Decimal = 13`
    },
    // Question 9
    {
        q: "Write a C++ program to check whether C++ is installed on your computer or not",
        code:
            `#include<iostream>
using namespace std;

int main()
{
    cout<<"c++ installed in your computer";
    return 0;
}`,
        output:
            `c++ installed in your computer`
    },
    // Question 10
    {
        q: "Write a C++ program and compute the sum of the digits of an integer",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;

    cout << "Enter an integer: ";
    cin >> num;

   if(num<0)
   num=-num;

    while (num > 0) {
        sum = sum + (num % 10); 
        num = num / 10;         
    }

    cout << "Sum of digits = " << sum;

    return 0;
}`,
        output:
            `Enter an integer: 1234
Sum of digits = 10`
    },
    // Question 11
    {
        q: "Write a C++ program to compare two numbers",
        code:
            `#include<iostream>

using namespace std;

int main()
{
    int a,b;
    cout<<"enter first number:-";
    cin>>a;
    cout<<"enter second number:-";
    cin>>b;
    if (a<b)
    {
       cout<<"B is greater than A";
    }
    else if (a==b)
    {
        cout<<"both number are equal";
    } else if (a>b)
    {
        cout<<"A is greater than B";
    }
    
    
}`,
        output:
            `enter first number:-25
enter second number:-15
A is greater than B`
    },
    // Question 12
    {
        q: "Write a C++ program to count the letters, spaces, numbers and other characters of an input string",
        code:
            `#include<iostream>
using namespace std;

int main()
{
    char dell[1000];
    
    int letter = 0, spaces = 0, number = 0, others = 0;

    cout << "Enter a string: ";
    cin.getline(dell, 1000);   

    for (int i = 0; dell[i] != '\0'; i++)
    {
        if ((dell[i] >= 'A' && dell[i] <= 'Z') || (dell[i] >= 'a' && dell[i] <= 'z'))
        {
            letter++;
        }
        else if (dell[i] == ' ')
        {
            spaces++;
        }
        else if (dell[i] >= '0' && dell[i] <= '9')
        {
            number++;
        }
        else
        {
            others++;
        }
    }

    cout << "Letters: " << letter << endl;
    cout << "Spaces: " << spaces << endl;
    cout << "Numbers: " << number << endl;
    cout << "Other characters: " << others << endl;

    return 0;
}`,
        output:
            `Enter a string: Hello World 123!
Letters: 10
Spaces: 2
Numbers: 3
Other characters: 1`
    },
    // Question 13
    {
        q: "Write a C++ program to print the ascii value of a given character",
        code:
            `#include<iostream>
using namespace std;

int main()
{
    char a[10];
    int b;
    
     cout<<"enter the char value for converison :-";
    for(int c = 0; c < 10; c++)
    {    cin >> a[c];
        b = a[c];     
        cout <<a[c]<<"=ASCII VALUE IS-:"<< b << endl;
    }
}`,
        output:
            `enter the char value for converison :-A
A=ASCII VALUE IS-:65
B
B=ASCII VALUE IS-:66
C
C=ASCII VALUE IS-:67
1
1=ASCII VALUE IS-:49
2
2=ASCII VALUE IS-:50
@
@=ASCII VALUE IS-:64
#
#=ASCII VALUE IS-:35
a
a=ASCII VALUE IS-:97
b
b=ASCII VALUE IS-:98
c
c=ASCII VALUE IS-:99`
    },
    // Question 14
    {
        q: "Write a C++ program that accepts an integer (n) and computes the value of n+nn+nnn",
        code:
            `#include <iostream>

using namespace std;

int main()
{
    int n, nn, nnn, sum;
    cout << "enter the number: ";
    cin >> n;

    nn = (n * 10) + n;
    nnn = (n * 100) + (n * 10) + n;
    sum = n + nn + nnn;

    cout << "THE ANSWER IS: " << sum;
}`,
        output:
            `enter the number: 5
THE ANSWER IS: 615`
    },
    // Question 15
    {
        q: "Write a C++ program to display the system time",
        code:
            `#include <iostream>
#include <ctime>  
using namespace std;

int main() {
    time_t currentTime = time(0);

    char* localTime = ctime(&currentTime);

    cout << "Current system time is: " << localTime << endl;

    return 0;
}`,
        output:
            `Current system time is: Thu Apr 02 14:30:25 2026`
    },
    // Question 16
    {
        q: "Write a C++ program to print the odd numbers from 1 to 20",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    for (int b = 1; b <= 20; b++)
    {
        if (b % 2 == 1)
        {
            cout<<"odd numbers are" << b << " ";
        }
    }
    cout << endl;
    return 0;
}`,
        output:
            `odd numbers are1 odd numbers are3 odd numbers are5 odd numbers are7 odd numbers are9 odd numbers are11 odd numbers are13 odd numbers are15 odd numbers are17 odd numbers are19 `
    },
    // Question 17
    {
        q: "Write a C++ program to print the even numbers from 1 to 20",
        code:
            `#include <iostream>
using namespace std;

int main()

{
    for (int b = 1; b <= 20; b++)
    {
        if (b % 2 == 0)
        {
            cout<< b << " ";
        }
    }
    cout << endl;
    return 0;
}`,
        output:
            `2 4 6 8 10 12 14 16 18 20 `
    },
    // Question 18
    {
        q: "Write a C++ program to convert a string to an integer",
        code:
            `#include<iostream>
#include<string>
using namespace std;
int main()
{
    string a;
    cin>>a;
    int b;
    b=stoi(a);
    cout<<b;
}`,
        output:
            `123
123`
    },
    // Question 19
    {
        q: "Write a C++ program to convert seconds to hour, minute and seconds",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num;
    int min = 0, hr = 0, sec = 0;
    cout << "Enter the Number of seconds: ";
    cin >> num;

    if (num >= 60)
    {
        min = num / 60;
        sec = num % 60;

        if (min >= 60)
        {
            hr = min / 60;
            min = min % 60;
        }
    }
    else
    {
        sec = num;
    }

    cout << "Time in new Format: " << endl;
    cout << "Hours: " << hr << endl;
    cout << "Minutes: " << min << endl;
    cout << "Seconds: " << sec << endl;
}`,
        output:
            `Enter the Number of seconds: 3661
Time in new Format: 
Hours: 1
Minutes: 1
Seconds: 1`
    },
    // Question 20
    {
        q: "Write a C++ program to compute the sum of the first 100 prime numbers",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int isPrime;
    int count = 2;
    int sum = 2;
    int i = 3;

    while (count < 101)
    {
        isPrime = 1;

        for (int j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
            }
        }

        if (isPrime == 1)
        {
            count++;
            sum += i;
        }
        i++;
    }

    cout << endl
         << "Sum of the first 100 Prime number is : " << sum;
}`,
        output:
            `
Sum of the first 100 Prime number is : 24133`
    },
    // Question 21
    {
        q: "Write a C++ program to compute the square root of an given integer",
        code:
            `#include<iostream>
using namespace std;
int main()
{
    int num;
    cout<<"enter a number:";
    cin>>num;

    int i;
    for(i=1;i*i<=num;i++);
    cout<<"square root "<<i-1;
}`,
        output:
            `enter a number:49
square root 7`
    },
    // Question 22
    {
        q: "Write a C++ program to check if a positive number is a palindrome or not",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num;
    int isPallindrome;

    cout << "Enter the Number you like: ";
    cin >> num;

    string number;
    string check;

    int length;
    number = to_string(num);

    length = number.length();

    for (int i = 0; i < length; i++)
    {
        isPallindrome = 1;
        if (number[i] != number[length - 1 - i])
        {
            isPallindrome = 0;
            break;
        }
    }

    if (isPallindrome == 1)
    {
        cout << "The Number Entered is a Pallindrome" << endl;
    }
    else
    {
        cout << "The Number Entered is not Pallindrome" << endl;
    }
}`,
        output:
            `Enter the Number you like: 121
The Number Entered is a Pallindrome`
    },
    // Question 23
    {
        q: "Write a C++ program to add two numbers without using any arithmetic operators",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num1, num2, sum, carry, sumhold;

    cout << "Enter the first Number: ";
    cin >> num1;
    cout << "Enter the Second Number: ";
    cin >> num2;

    sum = num1 ^ num2;   // doing XOR first
    carry = num1 & num2; // then carry

    while (carry != 0)
    {
        sumhold = sum;
        carry = carry << 1;      // left shift by one
        sum = sumhold ^ carry;   // then XOR
        carry = sumhold & carry; // then again carry
    }

    cout << "The sum of the Numbers is: " << sum;

    return 0;
}`,
        output:
            `Enter the first Number: 78
Enter the Second Number: 45
The sum of the Numbers is: 123`
    },
    // Question 24
    {
        q: "Write a C++ program to add two numbers without using any arithmetic operators",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num, digit, sum = 0;

    cout << "Enter the positive integer: ";
    cin >> num;

    while (num != 0)
    {
        digit = num % 10;
        sum += digit;
        num /= 10;
    }

    cout << "The sum of all the digits in number is: " << sum;

    return 0;
}`,
        output:
            `Enter the positive integer: 741
The sum of all the digits in number is: 12`
    },
    // Question 25
    {
        q: "C++ program to find area of circle",
        code:
            `#include <iostream>
#include <string>

using namespace std;

int main()
{
    int a;
    cout<<"enter the value for area of circle";
    cin >> a;
    float res;
    res = (3.14 * a * a);
    cout<< "answer is :-"<< res;
}`,
        output:
            `enter the value for area of circle5
answer is :-78.5`
    },
    // Question 26
    {
        q: "C++ Program to find area of rectangle",
        code:
            `#include <iostream>
#include <string>

using namespace std;

int main()
{
    int a,b,c;
    cout<<"enter length";
    cin>>a;
    cout<<"enter width";
    cin>>b;
    c=a*b;
    cout<<"answer is :-"<<c;
}`,
        output:
            `enter length10
enter width5
answer is :-50`
    },
    // Question 27
    {
        q: "C++ Program to find area of triangle",
        code:
            `#include <iostream>
#include <string>

using namespace std;

int main()
{
    int Area,base,height;
    cout<<"enter base";
    cin>>base;
    cout<<"enter height";
    cin>>height;
    Area = (base * height) / 2;
    cout<<"answer is :-"<<Area;
}`,
        output:
            `enter base10
enter height8
answer is :-40`
    },
    // Question 28
    {
        q: "C++ Program to find area of equilateral triangle",
        code:
            `#include <iostream>
using namespace std;

int main() {
    float side, area;
    float root3 = 1.732;  

    cout << "Enter the side of the equilateral triangle: ";
    cin >> side;

    area = (root3 / 4) * side * side;

    cout << "Area of the equilateral triangle is: " << area << endl;

    return 0;
}`,
        output:
            `Enter the side of the equilateral triangle: 6
Area of the equilateral triangle is: 15.588`
    },
    // Question 29
    {
        q: "C++ Program to find area of rhombus",
        code:
            `#include <iostream>
using namespace std;

int main() {
        int p,q;
        float area;
        cout<<"Enter diagonals: ";
        cin>>p;
        cin>>q;
     area = 0.5 * p * q;
     cout<<"area of rhombus is:- "<<area;

    }`,
        output:
            `Enter diagonals: 8
10
area of rhombus is:- 40`
    },
    // Question 30
    {
        q: "C++ Program to find area of parallelogram",
        code:
            `#include <iostream>
using namespace std;

int main() 
{
    int height,base;
    float area;
    cout<<"enter height  ";
    cin>> height;
    cout<<"enter base    ";
    cin>>base;

    area=height*base;
    cout<<" area of parallelogram is -: "<<area;
}`,
        output:
            `enter height  7
enter base    12
 area of parallelogram is -: 84`
    },
    // Question 31
    {
        q: "C++ Program to find area of Prism",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int l, w, h;
    float LSA, TSA, baseArea, perimeter;

    cout << "Enter length, width and height: ";
    cin >> l >> w >> h;

    baseArea = l * w;
    perimeter = 2 * (l + w);

    LSA = perimeter * h;
    TSA = LSA + 2 * baseArea;

    cout << "Lateral Surface Area: " << LSA << endl;
    cout << "Total Surface Area: " << TSA << endl;

    return 0;
}`,
        output:
            `Enter length, width and height: 5 4 10
Lateral Surface Area: 180
Total Surface Area: 220`
    },
    // Question 32
    {
        q: "C++ Program to find volume of sphere",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    float r, volume;
    cout << "Enter radius: ";
    cin >> r;
    volume = (4.0/3) * 3.14 * r * r * r;
    cout << "Volume of sphere is: " << volume;

    return 0;
}`,
        output:
            `Enter radius: 3
Volume of sphere is: 113.04`
    },
    // Question 33
    {
        q: "C++ Program to find volume of cylinder",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    float c,h,volume;

    cout << "Enter radius ";
    cin >> c;

    cout<<"Enter height ";
    cin>>h;

    volume=3.14*c*c*h;
    cout<<"volume of cylinder is:-  "<<volume;
}`,
        output:
            `Enter radius 5
Enter height 10
volume of cylinder is:-  785`
    },
    // Question 34
    {
        q: "C++ Program to find volume of cuboid",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int l,h,b;
    float volume;

    cout << "Enter lenth ";
    cin >> l;

    cout<<"Enter height ";
    cin>>h;

    cout<<"Enter breath";
    cin>>b;

    volume=l*h*b;
    cout<<"volume of cuboid is:-  "<<volume;
}`,
        output:
            `Enter lenth 5
Enter height 4
Enter breath3
volume of cuboid is:-  60`
    },
    // Question 35
    {
        q: "C++ Program to find volume of cone",
        code:
            `#include <iostream>

using namespace std;

int main()
{
    int r, h;
    float volume;
    cout << "enter radius";
    cin >> r;
    cout << "enter height";
    cin >> h;

    volume = (1.0 / 3) * 3.14 * r * r * h;
    
    cout<< "volume of cone is:-  " << volume;
}`,
        output:
            `enter radius3
enter height7
volume of cone is:-  65.94`
    },
    // Question 36
    {
        q: "C++ program to find surface area of cuboid",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int l,h,b;
    float area;

    cout << "Enter lenth  ";
    cin >> l;

    cout<<"Enter height ";
    cin>>h;

    cout<<"Enter breath  ";
    cin>>b;

      area = 2 * (l*b + b*h + l*h);

    cout<<"area of cuboid is:-  "<<area;
}`,
        output:
            `Enter lenth  5
Enter height 4
Enter breath  3
area of cuboid is:-  94`
    },
    // Question 37
    {
        q: "C++ program to find surface area of cylinder",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int r,h;
    float area;

    cout << "Enter radius ";
    cin >> r;

    cout<<"Enter height ";
    cin>>h;

    area=2*3.14*r*(r+h);
    cout<<"volume of cylinder is:-  "<<area;
}`,
        output:
            `Enter radius 5
Enter height 10
volume of cylinder is:-  471`
    },
    // Question 38
    {
        q: "C++ program to find surface area of cube",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int a;
    float area;
    
    cout << "Enter side : ";
    cin >> a;

    area=6*a*a;

    cout<<"surface area of cube "<<area;
      
}`,
        output:
            `Enter side : 4
surface area of cube 96`
    },
    // Question 39
    {
        q: "C++ program to calculate average marks",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    float m1, m2, m3, m4, m5, average;

    cout << "Enter marks of 5 subjects: ";
    cin >> m1 >> m2 >> m3 >> m4 >> m5;

    average = (m1 + m2 + m3 + m4 + m5) / 5;

    cout << "Average marks = " << average;

    return 0;
}`,
        output:
            `Enter marks of 5 subjects: 85 90 78 92 88
Average marks = 86.6`
    },
    // Question 40
    {
        q: "C++ program to check vowel or consonant",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ||
       ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
    {
        cout << "It is a Vowel";
    }
    else
    {
        cout << "It is a Consonant";
    }

    return 0;
}`,
        output:
            `Enter a character: A
It is a Vowel`
    },
    // Question 41
    {
        q: "C++ program to sum of N numbers",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int n;
    float sum;

    cout << "Enter a number: ";
    cin >> n;

    sum = (n * (n + 1)) / 2.0;

    cout << "Sum = " << sum;

    return 0;
}`,
        output:
            `Enter a number: 10
Sum = 55`
    },
    // Question 42
    {
        q: "C++ program to find factorial of any number",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num, fact=1;

    cout << "Enter the Number: ";
    cin >> num;

    while (num > 0)
    {
        fact*=num;
        num--;
    }

    cout << "The factorial of the Number is: " << fact;

    return 0;
}`,
        output:
            `Enter the Number: 5
The factorial of the Number is: 120`
    },
    // Question 43
    {
        q: "C++ Program to calculate electricity bill",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int units;
    float bill;

    cout << "Enter units: ";
    cin >> units;

    bill = units * 5;   

    cout << "Electricity Bill = " << bill;

    return 0;
}`,
        output:
            `Enter units: 150
Electricity Bill = 750`
    },
    // Question 44
    {
        q: "C++ Program To Calculate CGPA Percentage",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    float cgpa, percentage;

    cout << "Enter CGPA: ";
    cin >> cgpa;

   
    percentage = cgpa * 10;

    cout << "Percentage = " << percentage;

    return 0;
}`,
        output:
            `Enter CGPA: 8.5
Percentage = 85`
    },
    // Question 45
    {
        q: "C++ Program to calculate compound interest",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float principal, roi, time, n, total;

    cout << "Enter the following details: " << endl;
    cout << "Principal Amount: ";
    cin >> principal;
    cout << "Rate of interest(ROI): ";
    cin >> roi;
    cout << "Number of times interest is componded in 1 year: ";
    cin >> n;
    cout << "Time (in years): ";
    cin >> time;

    total = (principal * (pow((1 + ((roi / 100) / n)), (n * time))));

    cout << "Compunded Interest: " << (total-principal);
}`,
        output:
            `Enter the following details: 
Principal Amount: 10000
Rate of interest(ROI): 10
Number of times interest is componded in 1 year: 1
Time (in years): 2
Compunded Interest: 2100`
    },
    // Question 46
    {
        q: "C++ Program To Calculate Batting Average",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    float runs, outs, average;

    cout << "Enter total runs: ";
    cin >> runs;

    cout << "Enter number of times out: ";
    cin >> outs;

    average = runs / outs;

    cout << "Batting Average = " << average;

    return 0;
}`,
        output:
            `Enter total runs: 450
Enter number of times out: 10
Batting Average = 45`
    },
    // Question 47
    {
        q: "C++ Program to Calculate Commission Percentage",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    float sales, rate, commission;

    cout << "Enter total sales: ";
    cin >> sales;

    cout << "Enter commission rate (%): ";
    cin >> rate;

    commission = (sales * rate) / 100;

    cout << "Commission = " << commission;

    return 0;
}`,
        output:
            `Enter total sales: 10000
Enter commission rate (%): 5
Commission = 500`
    },
    // Question 48
    {
        q: "C++ Program To Find Distance Between Two Points",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int x1, y1, z1, x2, y2, z2;
    float distance;

    cout << "Enter the First Point co-ordinates: " << endl;
    cout << "X-co-ordinate: ";
    cin >> x1;
    cout << "Y-co-ordinate: ";
    cin >> y1;
    cout << "Z-co-ordinate: ";
    cin >> z1;

    cout << "Enter the Second Point co-ordinates: " << endl;
    cout << "X-co-ordinate: ";
    cin >> x2;
    cout << "Y-co-ordinate: ";
    cin >> y2;
    cout << "Z-co-ordinate: ";
    cin >> z2;

    distance = sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)) + ((z2 - z1) * (z2 - z1)));

    cout << "The distance between two points is: " << distance;

    return 0;
}`,
        output:
            `Enter the First Point co-ordinates: 
X-co-ordinate: 1
Y-co-ordinate: 2
Z-co-ordinate: 3
Enter the Second Point co-ordinates: 
X-co-ordinate: 4
Y-co-ordinate: 6
Z-co-ordinate: 8
The distance between two points is: 7.07107`
    },
    // Question 49
    {
        q: "C++ Program To Calculate Power Of Number",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int base, power;
    long long result = 1;

    cout << "Enter base: ";
    cin >> base;

    cout << "Enter power: ";
    cin >> power;

    for(int i = 1; i <= power; i++)
    {
        result *= base;
    }

    cout << "Result = " << result;

    return 0;
}`,
        output:
            `Enter base: 2
Enter power: 10
Result = 1024`
    },
    // Question 50
    {
        q: "Write a C++ program to take three numbers from the user and print the greatest number",
        code:
            `#include<iostream>
using namespace std;

int main()
{
    int a,b,c;
    cout<<"enter the three value";
    cin>>a;
    cin>>b;
    cin>>c;
    if(a>b&&a>c)
    {
         cout<<"greater is\n"<<a;
    }else if (b>a&&b>c)
    {
        cout<<"greater is"<<b;
    } else if(c>a&&c>b)
    {
        cout<<"greater is"<<c;
    }
    else cout<<"both values are same";
    

}`,
        output:
            `enter the three value25
15
20
greater is
25`
    },
    // Question 51
    {
        q: "Write a C++ program to find the number of days in a month",
        code:
            `#include<iostream>

using namespace std;

int main()
{
    int a;
    cout<<"enter this month number";
    cin>>a;
    if(a==1||a==3||a==5||a==7||a==10||a==12)
    {
        cout<<"thirty one days in this month \n31";
    }
    else if(a==2)
    {
        cout<<" in this month 28/29 days" ;
    } else if(a==4||a==6||a==8||a==9||a==11)
    {
     cout<<"in this month thirty days \n30";
    }
    else cout<<"enter valid value";
}`,
        output:
            `enter this month number1
thirty one days in this month 
31`
    },
    // Question 52
    {
        q: "Write a C++ program to test a number is positive or negative",
        code:
            `#include<iostream>
using namespace std;

int main()
{
    int a;
    cout<<"enter the number";
    cin>>a;
    if (a>=0)
    {
        cout<<"this is a positive number";
    }
     else cout<<"this is a negative number";

    
}`,
        output:
            `enter the number15
this is a positive number`
    },
    // Question 53
    {
        q: "Write a C++ Program to accept number of week's day (1-7) and print name of the day",
        code:
            `#include<iostream>

using namespace std;

int main()
{
    int day;
    cout<<"enter the day number ";
    cin>>day;
    switch (day)
    {
    case 1:
        cout<<"sunday";
        break;
     case 2:
        cout<<"monday";
        break;
         case 3:
        cout<<"tuesday";
        break;
         case 4:
        cout<<"wednesday";
        break;
         case 5:
        cout<<"thursday";
        break;
         case 6:
        cout<<"friday";
        break;
         case 7:
        cout<<"saturday";
        break;
    default: cout<<"enter the valid number";
        break;
    }
}`,
        output:
            `enter the day number 3
tuesday`
    },
    // Question 54
    {
        q: "Write a C++ program that takes a year from user and print whether that year is a leap year or not",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int a;
    cout << "enter the year\n";
    cin >> a;

    if (((a % 4 == 0) && (a & 100 != 0)) || ((a % 4 == 0) && (a % 100 == 0) && (a % 400 == 0)))
    {
        cout << "this is a leap year";
    }
    else
        cout << "this is not leap year";
}`,
        output:
            `enter the year
2024
this is a leap year`
    },
    // Question 55
    {
        q: "Write a C++ program to input 5 numbers from keyboard and find their sum and average",
        code:
            `#include<iostream>

using namespace std;
int main()
{
    cout<<"enter 5 inputs for sum the number and average";
int a,b,c,d,e;
int sum,average;
cin>>a;
cin>>b;
cin>>c;
cin>>d;
cin>>e;
sum=a+b+c+d+e;
average=sum/5;

cout<<"sum of number is:-  "<<sum<<endl;
cout<<"average number is:- "<<average;


}`,
        output:
            `enter 5 inputs for sum the number and average10
20
30
40
50
sum of number is:-  150
average number is:- 30`
    },
    // Question 56
    {
        q: "Write a program in C++ to display the first 5 natural numbers",
        code:
            `#include<iostream>

using namespace std;

int main()
{
    int a=1;
    cout<<"first five natural number";
    for (a; a <= 5; a++)
    {   
        cout<<a<<endl;
    }
    
}`,
        output:
            `first five natural number1
2
3
4
5`
    },
    // Question 57
    {
        q: "Write a C++ program to check vowel or consonant",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    char a;
    cout << "enter a character for check:- ";
    cin >> a;

    if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u' || a == 'A' || a == 'E' || a == 'I' || a == 'O' || a == 'U')
    {
        cout << "this is vowel:-" << a;
    }
    else
        cout << "this is constant:-" << a;
}`,
        output:
            `enter a character for check:- e
this is vowel:-e`
    },
    // Question 58
    {
        q: "Write a C++ program to display the cube of the number upto given an integer",
        code:
            `#include<iostream>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the number";
    cin>>n;

    for(int i=1;i<=n;i++)
    {
        cout<<i<<"->"<<i*i*i<<endl;

    }
    return 0;
}`,
        output:
            `Enter the number5
1->1
2->8
3->27
4->64
5->125`
    },
    // Question 59
    {
        q: "Write a C++ program to display the n terms of odd natural number and their sum",
        code:
            `#include<iostream>

using namespace std;

int main()
{
    int n,r=0;
    cin>>n;

    for ( int i = 1; i <= n; i++)
    {
        int odd =2*i-1;
        cout<<odd<<""<<endl;
        r+=odd;
    }
    
 
    cout<<"\nsum"<<r;
    
}`,
        output:
            `5
1
3
5
7
9

sum25`
    },
    // Question 60
    {
        q: "Write a C++ program to display the multiplication table of a given integer",
        code:
            `#include<iostream>

using namespace std;

int main()
{
   int number;
   cout<<"enter number";
   cin>>number;
   cout<<"table:-";
   for (int i = 0; i <=10; i++)
   {
     int table=number*i;
     cout<<table<<endl;
   }
    
}`,
        output:
            `enter number7
table:-0
7
14
21
28
35
42
49
56
63
70`
    },
    // Question 61
    {
        q: "Write a C++ program that reads an integer and check whether it is negative, zero, or positive",
        code:
            `#include<iostream>
using namespace std;

int main()
{
    int a;
    cout<<"enter the valid number";
    cin>>a;
    if (a<=-1)
    {
        cout<<"this is nagative number";
    } else if (a==0)
    {
        cout<<"this is zero";
    }
    else if (a>=1)
    {cout<<"this is positive number";}
    
}`,
        output:
            `enter the valid number15
this is positive number`
    },
    // Question 62
    {
        q: "Write a C++ program that reads an positive integer and count the number of digits",
        code:
            `#include <iostream>
using namespace std;

int main() {
    long long num;
    int count = 0;

    cout << "Enter a positive integer: ";
    cin >> num;

    if (num == 0) {
        count = 1;
    } else {
        while (num > 0) {
            num = num / 10;
            count++;
        }
    }

    cout << "Number of digits: " << count << endl;

    return 0;
}`,
        output:
            `Enter a positive integer: 12345
Number of digits: 5`
    },
    // Question 63
    {
        q: "Write a C++ program that accepts three numbers and check All numbers are equal or not",
        code:
            `#include<iostream>

using namespace std;
int main()
{
    int a,b,c;
    cout<<"enter three numbers";
    cin>>a;
    cin>>b;
    cin>>c;
    if(a==b&&b==c)
    {
        cout<<"all three values are equal";

    }
    else  cout<<"these are not same";
}`,
        output:
            `enter three numbers10
10
10
all three values are equal`
    },
    // Question 64
    {
        q: "Write a C++ program that accepts three numbers from the user and check if numbers are in \"increasing\" or \"decreasing\" order.",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int a, b, c;

    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    if (a < b && b < c) {
        cout << "Increasing order" << endl;
    }
    else if (a > b && b > c) {
        cout << "Decreasing order" << endl;
    }
    else {
        cout << "Neither increasing nor decreasing" << endl;
    }

    return 0;
}`,
        output:
            `Enter three numbers: 5 10 15
Increasing order`
    },
    // Question 65
    {
        q: "Write a C++ program that determines a student's grade (81-100 : A, 61-80 : B, 41-60 : C, 0-40 : D)",
        code:
            `#include <iostream>

using namespace std;
int main()
{
    float res;

    cout << "enter marks: ";
    cin >> res;

    if (res >= 81 && res <= 100)
    {
        cout << "student grade is:- A";
    }

    else if (res >= 61 && res <= 80)
    {
        cout << "student grade is:- B";
    }

    else if (res >= 41 && res <= 60)
    {
        cout << "student grade is:- C";
    }

    else if (res >= 0 && res <= 40)
    {
        cout << "student grade is:- D";
    }

    else
        cout << "enter valid marks";
}`,
        output:
            `enter marks: 85
student grade is:- A`
    },
    // Question 66
    {
        q: "Write a C++ program to create a simple calculator (1. ADDITION, 2. SUBTRACTION, 3. MULTIPLICATION, 4. DIVISION, 5. EXPONENTIAL, 6. PERCENTAGE, 7. EXIT)",
        code:
            `#include <iostream>
#include <cmath>   
using namespace std;

int main()
{
    int choice;
    double u, e;

    cout << "Enter integer values for task perform\n";
    cout << "Press 1 for addition\n";
    cout << "Press 2 for subtraction\n";
    cout << "Press 3 for multiplication\n";
    cout << "Press 4 for division\n";
    cout << "Press 5 for exponential\n";
    cout << "Press 6 for percentage\n";
    cout << "Press 7 for exit\n";

    cin >> choice;

    if (choice == 7) {
        cout << "Exit";
        return 0;
    }

    cout << "Enter two numbers:\n";
    cin >> u >> e;

    switch (choice)
    {
        case 1:
            cout << "Addition is: " << u + e;
            break;

        case 2:
            cout << "Subtraction is: " << u - e;
            break;

        case 3:
            cout << "Multiplication is: " << u * e;
            break;

        case 4:
            if (e != 0)
                cout << "Division is: " << u / e;
            else
                cout << "Error! Division by zero";
            break;

        case 5:
            cout << "Exponential is: " << pow(u, e);
            break;

        case 6:
            cout << "Percentage is: " << (u / e) * 100;
            break;

        case 7:
            cout << "Exit";
            break;

        default:
            cout << "Invalid choice";
    }

    return 0;
}`,
        output:
            `Enter integer values for task perform
Press 1 for addition
Press 2 for subtraction
Press 3 for multiplication
Press 4 for division
Press 5 for exponential
Press 6 for percentage
Press 7 for exit
1
Enter two numbers:
25
15
Addition is: 40`
    },
    // Question 67
    {
        q: "Write a C++ program to concatenate two string",
        code:
            `#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str1, str2, result;

    cout << "Enter first string: ";
    getline(cin, str1);

    cout << "Enter second string: ";
    getline(cin, str2);

    result = str1 + str2;   // Concatenation

    cout << "Concatenated string: " << result;

    return 0;
}`,
        output:
            `Enter first string: Hello
Enter second string: World
Concatenated string: HelloWorld`
    },
    // Question 68
    {
        q: "Write a C++ program to convert all characters in a string to lowercase",
        code:
            `#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str;

    cout << "Enter a string: ";
    getline(cin, str);

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
        {
            str[i] = str[i] + 32;   
        }
    }

    cout << "Lowercase string: " << str;

    return 0;
}`,
        output:
            `Enter a string: HELLO WORLD
Lowercase string: hello world`
    },
    // Question 69
    {
        q: "Write a C++ program to convert all characters in a string to uppercase",
        code:
            `#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str;

    cout << "Enter a string: ";
    getline(cin, str);

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] = str[i] - 32;   
        }
    }

    cout << "uppercase string: " << str;

    return 0;
}`,
        output:
            `Enter a string: hello world
uppercase string: HELLO WORLD`
    },
    // Question 70
    {
        q: "Write a C++ program to trim a string (remove whitespaces)",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[50], str2[50];
    int len, j = 0;
    int newsize;

    cout << "Enter the string you like: ";
    gets(str1);
    len = strlen(str1);

    for (int i = 0; i < len; i++, j++)
    {
        if (str1[i] != 32 && str1[i] != 9 && str1[i] != 10)
        {
            str2[j] = str1[i];
        }
        else
        {
            j--;
        }
    }

    str2[j] = '\0';

    strcpy(str1, str2);

    cout << "Modified string with white space removed: " << str1;

    return 0;
}`,
        output:
            `Enter the string you like: Hello World Program
Modified string with white space removed: HelloWorldProgram`
    },
    // Question 71
    {
        q: "Write a C++ program to get a substring of a given string between two specified positions",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[50], str2[50];
    int start, end, i, j;

    cout << "Enter the string you like: ";
    gets(str1);

    cout << "Enter the staring point: ";
    cin >> start;
    start -= 1;
    cout << "Enter the Ending point: ";
    cin >> end;
    end -= 1;

    for (i = start, j = 0; i <= end; i++, j++)
    {
        str2[j] = str1[i];
    }

    str2[j] = '\0';

    cout << "Here is  the sub-string : " << str2;

    return 0;
}`,
        output:
            `Enter the string you like: HelloWorld
Enter the staring point: 1
Enter the Ending point: 5
Here is  the sub-string : Hello`
    },
    // Question 72
    {
        q: "Write a C++ program to replace all the 'd' characters with 'f' characters",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str1[50], str2[50];
    int len, i = 0;
    int newsize;

    cout << "Enter the string you like: ";
    gets(str1);
    len = strlen(str1);

    for (i = 0; i < len; i++)
    {
        if (str1[i] != 'd')
        {
            str2[i] = str1[i];
        }
        else
        {
            str2[i] = 'f';
        }
    }

    str2[i] = '\0';

    cout << "Modified string with white space removed: " << str2;

    return 0;
}`,
        output:
            `Enter the string you like: good day
Modified string with white space removed: goof fay`
    },
    // Question 73
    {
        q: "Write a C++ program to get the length of a given string",
        code:
            `#include<iostream>
#include<string>
#include <cstring>
using namespace std;

int main()
{
    char a[10];
    cout<<"enter the number";
    cin>>a;
    int b=strlen(a);
    cout<<"length is :-"<<b;
}`,
        output:
            `enter the numberhello
length is :-5`
    },
    // Question 74
    {
        q: "Write a C++ program to print current date and time in the specified format",
        code:
            `#include <iostream>
#include <ctime>
using namespace std;

int main() {
    time_t currentTime = time(0);

    // Convert to local time structure
    tm *localTime = localtime(&currentTime);

    char buffer[100];

    // Format: DD-MM-YYYY HH:MM:SS
    strftime(buffer, sizeof(buffer), "%d-%m-%Y %H:%M:%S", localTime);

    cout << "Current system time is: " << buffer << endl;

    return 0;
`,
        output:
            `Current system time is: 02-04-2026 18:32:52`
    },
    // Question 75
    {
        q: "Write a C++ program to get the character at the given index within the String",
        code:
            `#include <iostream>
using namespace std;

int main() {
    string s;
    int i;
    cout<<"enter valid number:-";
    cin >> s >> i;
    
    cout<<"character at index:-" << s[i];
    return 0;
}`,
        output:
            `enter valid number:-Hello 2
character at index:-l`
    },
    // Question 76
    {
        q: "Write a C++ program to remove a particular character from a string",
        code:
            `#include <iostream>
using namespace std;

int main() {
    string s;
    char ch;

    getline(cin, s); 
    cin >> ch;       

    string result = "";
    for (char c : s) {
        if (c != ch) result += c;
    }

    cout << result;
    return 0;
}`,
        output:
            `Hello World
o
Hell Wrld`
    },
    // Question 77
    {
        q: "Write a C++ program to reverse a String",
        code:
            `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cout << "Enter a string: ";
    getline(cin, str);

    int n = str.length();

    for (int i = n - 1; i >= 0; i--) {
        cout << str[i];
    }

    return 0;
}`,
        output:
            `Enter a string: Hello
olleH`
    },
    // Question 78
    {
        q: "Write a C++ program to remove html tags from a string",
        code:
            `#include <iostream>
#include <string>
using namespace std;

int main() {
    string html, result = "";
    cout << "Enter HTML string: ";
    getline(cin, html);

    int flag = 0;  

    for (char ch : html) {
        if (ch == '<') {
            flag = 1;
        }
        else if (ch == '>') {
            flag = 0;
        }
        else if (flag == 0) {
            result += ch;
        }
    }

    cout << "Text without HTML tags: " << result;
    return 0;
}`,
        output:
            `Enter HTML string: <p>Hello World</p>
Text without HTML tags: Hello World`
    },
    // Question 79
    {
        q: "Write a C++ program to count total number of lines from a string",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char str[100] = "";
    int lines = 1;

    cout << "Enter text (use ~ to stop): ";

    cin.get(str, 100, '~');  // allows multiline input

    for (int i = 0; i < strlen(str); i++)
    {
        if (str[i] == '\n')
        {
            lines++;
        }
    }

    cout << "Total lines = " << lines;

    return 0;
}`,
        output:
            `Enter text (use ~ to stop): xcgukcvuk
tedb
grb
rg
nhtnt
~
Total lines = 6`
    },
    // Question 80
    {
        q: "Write a C++ Program to Accept the Marks of a Student and find Total Marks and Percentage",
        code:
            `#include <iostream>

using namespace std;
int main()
{
    int hi, eco, po, ph, ch, eng;
    int total;
    float percentage;
    cout << "enter marks for total or percentage:-";
    cin >> hi;
    cin >> eco;
    cin >> po;
    cin >> ph;
    cin >> ch;
    cin >> eng;
    total = hi + eco + po + ph + ch + eng;

    percentage = (total / 600.0) * 100;

    cout << "total=" << total << "\npercentage=" << percentage;
}`,
        output:
            `enter marks for total or percentage:-85
90
78
92
88
95
total=528
percentage=88`
    },
    // Question 81
    {
        q: "Write a C++ program to print numbers from 1 to 10 using loop",
        code:
            `#include<iostream>

using namespace std;

int main()
{
    for (int i = 1; i <=10; i++)
    {
        cout<<i<<endl;
    }
    
}`,
        output:
            `1
2
3
4
5
6
7
8
9
10`
    },
    // Question 82
    {
        q: "Write a C++ program to calculate the sum of first 10 natural number using loop",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int sum = 0;

    for(int i = 1; i <= 10; i++)
    {
        sum = sum + i;
    }

    cout << "Sum = " << sum;

    return 0;
}`,
        output:
            `Sum = 55`
    },
    // Question 83
    {
        q: "Write a C++ program to print multiplication table of given number",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Enter number: ";
    cin >> n;

    for(int i = 1; i <= 10; i++)
    {
        cout << n << " x " << i << " = " << n*i << endl;
    }

    return 0;
}`,
        output:
            `Enter number: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`
    },
    // Question 84
    {
        q: "Write a C++ program to find the factorial value of any number entered through the keyboard",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int n;
    long long fact = 1;

    cout << "Enter number: ";
    cin >> n;

    for(int i = 1; i <= n; i++)
    {
        fact = fact * i;
    }

    cout << "Factorial = " << fact;

    return 0;
}`,
        output:
            `Enter number: 6
Factorial = 720`
    },
    // Question 85
    {
        q: "Write a C++ program that prompts the user to input an integer and then outputs the number with the digits reversed order",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int n, rev = 0, digit;

    cout << "Enter number: ";
    cin >> n;

    while (n > 0)
    {
        digit = n % 10;
        rev = rev * 10 + digit;
        n = n / 10;
    }

    cout << "Reversed number = " << rev;

    return 0;
}`,
        output:
            `Enter number: 12345
Reversed number = 54321`
    },
    // Question 86
    {
        q: "Write a C++ program that reads a set of integers, and then prints the sum of the even and odd integers using loop",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int n, num;
    int evenSum = 0, oddSum = 0;

    cout << "Enter how many numbers you want to input: ";
    cin >> n;

    for(int i = 1; i <= n; i++) {
        cout << "Enter number " << i << ": ";
        cin >> num;

        if(num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    cout << "\nSum of Even numbers = " << evenSum;
    cout << "\nSum of Odd numbers = " << oddSum;

    return 0;
}`,
        output:
            `Enter how many numbers you want to input: 5
Enter number 1: 1
Enter number 2: 2
Enter number 3: 3
Enter number 4: 4
Enter number 5: 5

Sum of Even numbers = 6
Sum of Odd numbers = 9`
    },
    // Question 87
    {
        q: "Write a C++ program to check whether the number is a prime number or not",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int num, i, flag = 0;

    cout << "Enter a number: ";
    cin >> num;

    if(num <= 1) {
        cout << num << " is NOT a Prime Number";
    } 
    else {
        for(i = 2; i <= num / 2; i++) {
            if(num % i == 0) {
                flag = 1;
                break;
            }
        }

        if(flag == 0)
            cout << num << " is a Prime Number";
        else
            cout << num << " is NOT a Prime Number";
    }

    return 0;
}`,
        output:
            `Enter a number: 7
7 is a Prime Number`
    },
    // Question 88
    {
        q: "Write a C++ program to calculate HCF of Two given numbers using loop",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int num1, num2, i, hcf;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

   int min = (num1 < num2) ? num1 : num2;

    for(i = 1; i <= min; i++) {
        if(num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }

    cout << "HCF = " << hcf;

    return 0;
}`,
        output:
            `Enter two numbers: 12 18
HCF = 6`
    },
    // Question 89
    {
        q: "Write a C++ program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int num;
    int positive = 0, negative = 0, zero = 0;
    char choice;

    do {
        cout << "Enter a number: ";
        cin >> num;

        if(num > 0)
            positive++;
        else if(num < 0)
            negative++;
        else
            zero++;

        cout << "Do you want to continue? (y/n): ";
        cin >> choice;

    } while(choice == 'y' || choice == 'Y');

    cout << "\nPositive numbers = " << positive;
    cout << "\nNegative numbers = " << negative;
    cout << "\nZeros = " << zero;

    return 0;
}`,
        output:
            `Enter a number: 5
Do you want to continue? (y/n): y
Enter a number: -3
Do you want to continue? (y/n): y
Enter a number: 0
Do you want to continue? (y/n): n

Positive numbers = 1
Negative numbers = 1
Zeros = 1`
    },
    // Question 90
    {
        q: "Write a C++ program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int num;
    int largest, smallest;
    char choice;

 
    cout << "Enter a number: ";
    cin >> num;

    largest = smallest = num;

    do {
        if(num > largest)
            largest = num;

        if(num < smallest)
            smallest = num;

        cout << "Do you want to continue? (y/n): ";
        cin >> choice;

        if(choice == 'y' || choice == 'Y') {
            cout << "Enter a number: ";
            cin >> num;
        }

    } while(choice == 'y' || choice == 'Y');

    cout << "\nLargest number = " << largest;
    cout << "\nSmallest number = " << smallest;

    return 0;
}`,
        output:
            `Enter a number: 10
Do you want to continue? (y/n): y
Enter a number: 3
Do you want to continue? (y/n): y
Enter a number: 7
Do you want to continue? (y/n): n

Largest number = 10
Smallest number = 3`
    },
    // Question 91
    {
        q: "Write a C++ program to print out all Armstrong numbers between 1 to 600 using loop",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int num, orl, remainder, result;

    cout << "Armstrong numbers between 1 to 600 are:\n";

    for(num = 1; num <= 600; num++) {
        orl = num;
        result = 0;

        while(orl != 0) {
            remainder = orl % 10;
            result += remainder * remainder * remainder;
            orl /= 10;
        }

        if(result == num) {
            cout << num << " ";
        }
    }

    return 0;
}`,
        output:
            `Armstrong numbers between 1 to 600 are:
1 153 370 371 407 `
    },
    // Question 92
    {
        q: "Write a C++ program to count total number of notes in entered amount using loop",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int amount;
    cout << "Enter amount: ";
    cin >> amount;

    int notes[] = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
    int size = 10;

    for(int i = 0; i < size; i++) {
        int count = amount / notes[i];

        if(count > 0) {
            cout << "Notes of " << notes[i] << " = " << count << endl;
            amount = amount % notes[i];
        }
    }

    return 0;
}`,
        output:
            `Enter amount: 2876
Notes of 2000 = 1
Notes of 500 = 1
Notes of 200 = 1
Notes of 100 = 1
Notes of 50 = 1
Notes of 20 = 1
Notes of 5 = 1
Notes of 1 = 1`
    },
    // Question 93
    {
        q: "Write a C++ program to print Fibonacci series of n terms where n is input by user using loop",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int i, x = 0, y = 1, j;

    cout << "How many number you want in this series: ";
    cin >> j;
    cout << x << " " << y << " ";
    for (i = 0; i <= j - 3; i++)
    {
        y = x + y;
        cout << y << " ";
        x = y - x;
    }
}`,
        output:
            `How many number you want in this series: 8
0 1 1 2 3 5 8 13 `
    },
    // Question 94
    {
        q: "Write a C++ program to calculate the sum of following series where n is input by user",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;

    cout << "Enter n: ";
    cin >> n;

    for(int i = 1; i <= n; i++) {
        sum = sum + i;
    }

    cout << "Sum = " << sum;

    return 0;
}`,
        output:
            `Enter n: 5
Sum = 15`
    },
    // Question 95
    {
        q: "Write a C++ method to compute the average of three numbers",
        code:
            `#include<iostream>
using namespace std;
int main()
{
    int a,v,c;
    float ave,avee;
    cout<<"enter the numbers ";
     cin>>a;
     cin>>v;
     cin>>c;

     ave=a+v+c;
     avee=ave/3;
     cout<<"average is :-"<<avee;


}`,
        output:
            `enter the numbers 10
20
30
average is :-20`
    },
    // Question 96
    {
        q: "Write a C++ method to find the smallest number among three numbers",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int a, b, c;
    cout << "Enter valid values  ";
    cin >> a;
    cin >> b;
    cin >> c;
    if (a < b && a < c)
    {
        cout << "your first number is smallest  " << a;
    }
    else if (b < a && b < c)
    {
        cout << "your second number is smallest  " << b;
    }
    else if (c < b && c < a)
    {
        cout << "your third number is smallest  " << c;
    }
    else
        cout << "any both values are same";
}`,
        output:
            `Enter valid values  78
0
-385
your third number is smallest  -385`
    },
    // Question 97
    {
        q: "Write a C++ method to check whether an year entered by the user is a leap year or not",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int a;
    cout << "enter the year\n";
    cin >> a;

    if (((a % 4 == 0) && (a & 100 != 0)) || ((a % 4 == 0) && (a % 100 == 0) && (a % 400 == 0)))
    {
        cout << "this is a leap year";
    }
    else
        cout << "this is not leap year";
}`,
        output:
            `enter the year
2024
this is a leap year`
    },
    // Question 98
    {
        q: "Write a C++ program to accept a float value of number and return a rounded float value",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float num;

    cout << "Enter the float value: ";
    cin >> num;

    num = roundf(num);

    cout << endl
         << "Here s your rounded float value: " << num;
}`,
        output:
            `Enter the float value: 4.6

Here s your rounded float value: 5`
    },
    // Question 99
    {
        q: "Write a C++ method to compute the sum of the digits in an integer",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;

    cout << "Enter an integer: ";
    cin >> num;

   if(num<0)
   num=-num;

    while (num > 0) {
        sum = sum + (num % 10); 
        num = num / 10;         
    }

    cout << "Sum of digits = " << sum;

    return 0;
}`,
        output:
            `Enter an integer: 1234
Sum of digits = 10`
    },
    // Question 100
    {
        q: "Write a C++ method to calculate the area of a triangle",
        code:
            `#include <iostream>
#include <string>

using namespace std;

int main()
{
    int Area, base, height;
    cout << "enter base";
    cin >> base;
    cout << "enter height";
    cin >> height;
    Area = (base * height) / 2;
    cout << "answer is :-" << Area;
}`,
        output:
            `enter base6
enter height4
answer is :-12`
    },
    // Question 101
    {
        q: "Write a C++ method to find the area of a pentagon",
        code:
            `#include <iostream>
using namespace std;

// Method to calculate area of regular pentagon
float areaPentagon(float side) {
    return 1.720 * side * side;
}

int main() {
    float s;

    cout << "Enter side of pentagon: ";
    cin >> s;

    cout << "Area of pentagon = " << areaPentagon(s);

    return 0;
}`,
        output:
            `Enter side of pentagon: 5
Area of pentagon = 43`
    },
    // Question 102
    {
        q: "Write a C++ method to find number is even number or not",
        code:
            `#include <iostream>
using namespace std;

int Even(int num) {
    if(num % 2 == 0)
        return true;
    else
        return false;
}

int main() {
    int n;

    cout << "Enter a number: ";
    cin >> n;

    if(Even(n))
        cout << "Even Number";
    else
        cout << "Odd Number";

    return 0;
}`,
        output:
            `Enter a number: 4
Even Number`
    },
    // Question 103
    {
        q: "Write a C++ method to check numbers is palindrome number or not",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num;
    int isPallindrome;

    cout << "Enter the Number you like: ";
    cin >> num;

    string number;
    string check;

    int length;
    number = to_string(num);

    length = number.length();

    for (int i = 0; i < length; i++)
    {
        isPallindrome = 1;
        if (number[i] != number[length - 1 - i])
        {
            isPallindrome = 0;
            break;
        }
    }

    if (isPallindrome == 1)
    {
        cout << "The Number Entered is a Pallindrome" << endl;
    }
    else
    {
        cout << "The Number Entered is not Pallindrome" << endl;
    }
}`,
        output:
            `Enter the Number you like: 121
The Number Entered is a Pallindrome`
    },
    // Question 104
    {
        q: "Write a C++ method to displays prime numbers between 1 to 20",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int isPrime;
    int i = 2;

    cout << "All prime numbers between 1 to 20 are: ";

    while (i < 21)
    {
        isPrime = 1;

        for (int j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
            }
        }

        if (isPrime == 1)
        {
            cout << i << " ";
        }
        i++;
    }
}`,
        output:
            `
All prime numbers between 1 to 20 are: 2 3 5 7 11 13 17 19 `
    },
    // Question 105
    {
        q: "Write a C++ method to find GCD and LCM of Two Numbers",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num1, num2;
    int larger, smaller, rem;

    cout << "Enter 1st number: ";
    cin >> num1;
    cout << "Enter 2nd number: ";
    cin >> num2;

    if (num1 == num2)
    {
        cout << endl
             << "HCF: " << num1;
        cout << endl
             << "LCM: " << num2;
        return 0;
    }
    else
    {
        if (num1 > num2)
        {
            larger = num1;
            smaller = num2;
        }
        else
        {
            larger = num2;
            smaller = num1;
        }
    }

    while (larger % smaller != 0)
    {
        rem = larger % smaller;
        larger = smaller;
        smaller = rem;
    }

    if (larger % smaller == 0)
    {
        rem = smaller;
    }

    cout << endl
         << "HCF: " << rem;
    cout << endl
         << "LCM: " << ((num1 * num2) / rem);
    return 0;
}`,
        output:
            `Enter 1st number: 12
Enter 2nd number: 18

HCF: 6
LCM: 36`
    },
    // Question 106
    {
        q: "Write a C++ method to find factorial using recursion",
        code:
            `#include <iostream>
using namespace std;

int factorial(int n)
{
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}

int main()
{
    int num;
    cout << "Enter the number: ";
    cin >> num;
    cout << "Factorial: " << factorial(num);
}`,
        output:
            `Enter the number: 5
Factorial: 120`
    },
    // Question 107
    {
        q: "Write a C++ program to reverse an integer number",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int num, i;
    int isPallindrome;
    int length;

    cout << "Enter the Integer you like: ";
    cin >> num;

    string number;
    number = to_string(num);
    length = number.length();

    char reverse[length];

    for (i = 0; i < length; i++)
    {
        reverse[length - 1 - i] = number[i];
    }
    reverse[i] = '\0';
    cout << "Integer reversed: " << reverse;
}`,
        output:
            `Enter the Integer you like: 12345
Integer reversed: 54321`
    },
    // Question 108
    {
        q: "Write a C++ program to round a float number to specified decimals",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float num;
    int specify;

    cout << "Enter the float value: ";
    cin >> num;
    cout << "Enter the decimal space to which you want to round it: ";
    cin >> specify;

    num = num * (pow(10, specify));//times 10 to power specify
    num = roundf(num);//round
    num = num / (pow(10, specify));//divides 10 to power specify

    cout << endl
         << "Here s your rounded float value: " << num;
}`,
        output:
            `Enter the float value: 3.14159
Enter the decimal space to which you want to round it: 2

Here s your rounded float value: 3.14`
    },
    // Question 109
    {
        q: "Write a C++ program to test if a double number is an integer",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    double num;
    int num2;

    cout << "Enter the double value: ";
    cin >> num;

    num2 = (int)num;

    if (num2 == num)
    {
        cout << "Double number is an integer";
    }
    else
    {
        cout << "Double number is not an integer";
    }

    return 0;
}`,
        output:
            `Enter the double value: 4.5
Double number is not an integer`
    },
    // Question 110
    {
        q: "Write a C++ program to round up the result of integer division",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float division;
    int nume, denom;

    cout << "Enter the Numerator value: ";
    cin >> nume;
    cout << "Enter the denominator value: ";
    cin >> denom;

    division = ((float)nume) / denom;
    division = division * (pow(10, 2)); // times 10 to power 2
    division = roundf(division);
    division = division / (pow(10, 2));

    cout << "round up the result of integer division: " << division;

    return 0;
}`,
        output:
            `Enter the Numerator value: 7
Enter the denominator value: 3
round up the result of integer division: 2.33`
    },
    // Question 111
    {
        q: "Write a C++ program to convert Roman number to an integer number",
        code:
            `#include <iostream>
#include <string.h>
using namespace std;

int switchcase(char roman)
{
    switch (roman)
    {
    case 'I':
        return 1;
        break;
    case 'V':
        return 5;
        break;
    case 'X':
        return 10;
        break;
    case 'L':
        return 50;
        break;
    case 'C':
        return 100;
        break;
    case 'D':
        return 500;
        break;
    case 'M':
        return 1000;
        break;
    default:
        return 0;
        break;
    }
}

int main()
{
    int result = 0;
    int cur_value, prev_value;
    char num[15];
    int size;

    cout << "Enter the Roman nummber(everything in capitals only): ";
    cin >> num;

    size = strlen(num);

    for (int i = 0; i < size; i++)
    {
        if (i == 0)
        {
            prev_value = 0;
        }
        else
        {
            prev_value = switchcase(num[size - i]);
        }
        cur_value = switchcase(num[size - i - 1]);
        if (cur_value < prev_value)
        {
            result -= cur_value;
        }
        else
        {
            result += cur_value;
        }
    }

    cout << "Integer Eqivalent for the Roman number is : " << result;
}`,
        output:
            `Enter the Roman nummber(everything in capitals only): XIV
Integer Eqivalent for the Roman number is : 14`
    },
    // Question 112
    {
        q: "Write a C++ program to convert a float value to absolute value",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float num;

    cout << "Enter the float value: ";
    cin >> num;

    if (num < 0)
    {
        num *= -1;
    }

    cout << "Absolute equivalent of the float number: " << num;

    return 0;
}`,
        output:
            `Enter the float value: -7.5
Absolute equivalent of the float number: 7.5`
    },
    // Question 113
    {
        q: "Create a class entering the command line arguments from the user and show all the arguments as output.",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

class arguments
{
private:
    char arg[50];

public:
    void setstr(char *arg1)
    {
        strcpy(arg, arg1);
    }

    char *getstr()
    {
        return arg;
    }
};

int main(int argc, char *argv[])
{
    arguments *arg;
    for (int i = 1; i < argc; i++)
    {
        arg = new (arguments);
        arg->setstr(argv[i]);
        cout << "Argument " << i << " : " << arg->getstr() << endl;
        delete arg;
    }
}`,
        output:
            `Argument 0 : program.exe
Argument 1 : hello
Argument 2 : world`
    },
])
    
database. conversion.questions = ([
     {
    q: "C++ Program to convert String to int",
    code:
`#include <iostream>
#include <fstream>
using namespace std;
int main()
{
    fstream f("data.txt", ios::out);
    string str;
    cout << "Enter the string: ";
    getline(cin, str);
    f << str;
    f.close();
    fstream file("data.txt", ios::in);
    unsigned int num;
    cout << "Converted integer: ";
    while (file >> num)
    {
        file >> num;
        cout << num;
    }
    file.close();
}`,
    output:
`Enter the string: 4554
Converted integer: 4554`
  },
  // Question 2
  {
    q: "C++ Program to convert int to String using file",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    int num;
    cout << "Enter the number: ";
    cin >> num;

    ofstream file("data2.txt");
    file << num;
    file.close();

    ifstream file2("data2.txt");
    string str;
    file2 >> str;

    cout << "String is: " << str;
    file2.close();
}`,
    output:
`Enter the number: 456
String is: 456`
  },
  // Question 3
  {
    q: "C++ Program to convert String to long",
    code:
`#include <iostream>
#include <fstream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to Convert (only Numeric): ";
    cin>>str;
    try{
        long num = stol(str);
        cout<<"converted string: "<<num;        
    }
    catch(...){
        cout<<"Invalid Input";
    }


}`,
    output:
`Enter the string to Convert (only Numeric): 987654321
converted string: 987654321`
  },
  // Question 4
  {
    q: "C++ Program to convert long to String",
    code:
`#include<iostream>
using namespace std;
int main(){
    long num;
    cout<<"Enter the long int to convert";
    cin>>num;
    if(cin.fail()){
        cout<<"Invalid Input";      
    }
    else{
        string str = to_string(num);
        cout<<"Converted: "<<str;
    }
    


}`,
    output:
`Enter the long int to convert123456789
Converted: 123456789`
  },
  // Question 5
  {
    q: "C++ Program to convert String to float",
    code:
`#include <iostream>
#include <iomanip>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to convert (only Number)";
    cin>>str;
    try{
        size_t pos;
        float num = stof(str,&pos);
        if(pos!=str.length()){
            cout<<"Invalid Character mix";
        }
        else{
        cout<<fixed<<setprecision(2);
        cout<<"Converted: "<<num;}
    }
    catch(exception &e){
        cout<<"invalid Input"<<e.what();
    }
}`,
    output:
`Enter the string to convert (only Number)3.14
Converted: 3.14`
  },
  // Question 6
  {
    q: "C++ Program to convert float to String",
    code:
`#include<iostream>
#include<iomanip>
using namespace std;
int main(){
    float num;
    cout<<"Enter the Float to convert ";
    cin>>num;
    if(cin.fail()){
        cout<<"Invalid Input";        
    }
    else{
        string str = to_string(num);
        cout<<fixed<<setprecision(2);
        cout<<"Converted: "<<str;
    }
}`,
    output:
`Enter the Float to convert 2.5
Converted: 2.500000`
  },
  // Question 7
  {
    q: "C++ Program to convert String to double",
    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main(){
    string str;
    cout<<"Enter the string to convert (only numeric): ";
    cin>>str;

    try{
        size_t pos;
        double num = stod(str, &pos);

        if(pos != str.length()){
            cout<<"Invalid input (extra characters)";
        }
        else{
            cout<<fixed<<setprecision(4);
            cout<<"Converted: "<<num;
        }
    }
    catch (invalid_argument &e){
        cout<<"Invalid input (not a number)";
    }
    catch (out_of_range &e){
        cout<<"Number out of range";
    }
}`,
    output:
`Enter the string to convert (only numeric): 12.3456
Converted: 12.3456`
  },
  // Question 8
  {
    q: "C++ Program to convert double to String",
    code:
`#include <iostream>
using namespace std;
int main(){
    double num;
    cout<<"Enter the number to convert: ";
    cin>>num;
    if(cin.fail()){
        cout<<"invalid input";
    }
    else{
        string str = to_string(num);
        cout<<"converted: "<<str;
    }
}`,
    output:
`Enter the number to convert: 99.99
converted: 99.990000`
  },
  // Question 9
  {
    q: "C++ Program to convert char digit to int",
    code:
`#include <iostream>
using namespace std;

int main(){
    char k;
    cout<<"Enter a digit: ";
    cin>>k;

    if(k >= '0' && k <= '9'){
        int num = k - '0';
        cout<<"Converted: "<<num;
    } else {
        cout<<"Invalid input (not a digit)";
    }
}`,
    output:
`Enter a digit: 7
Converted: 7`
  },
  // Question 10
  {
    q: "C++ Program to convert int to char",
    code:
`    #include <iostream>
    using namespace std;
    int main(){
        int num;
        cout<<"Enter the int to convert: ";
        cin>>num;
        char convert = (char)num;
        cout<<"Converted: "<<convert;

    }`,
    output:
`Enter the int to convert: 65
Converted: A`
  },
  // Question 11
  {
    q: "C++ Program to convert Binary to Decimal",
    code:
`#include <iostream>
using namespace std;
int main(){
    string binary;
    int decimal =0;
    cout<<"Enter the binary to convert: ";
    cin>>binary;
    int lenght = binary.length();
    for(int i =0;i<lenght;i++){
        if(binary[i]!='0'&&binary[i]!='1'){
            cout<<"Invalid binary";
            return 0;
        }
        decimal = decimal*2+(binary[i]-'0');
    }
cout<<"\n"<<"decimal: "<<decimal;

}`,
    output:
`Enter the binary to convert: 1010

decimal: 10`
  },
  // Question 12
  {
    q: "C++ Program to convert Decimal to Binary",
    code:
`#include<iostream>
using namespace std;
int main(){
    int decimal;
    cout<<"Enter the decimal to convert: ";
    cin>>decimal;
    if(cin.fail()){
        cout<<"Invalid Input";
    }
    if(decimal == 0){
        cout<<"binary: 0";
        return 0;
    }
    string binary="";
    while(decimal>0){
        binary = char((decimal%2)+'0')+binary;
        decimal = decimal/2;
    }
    cout<<"converted Binary: "<<binary;


}`,
    output:
`Enter the decimal to convert: 13
converted Binary: 1101`
  },
  // Question 13
  {
    q: "C++ Program to convert Hex to Decimal",
    code:
`#include <iostream>
using namespace std;
int main(){
    string hex;
    cout<<"Enter the hex to convert: ";
    cin>>hex;   
    int value;
    int decimal = 0;
    for(int i = 0;i<hex.length();i++){
        char ch = hex[i];
        if(ch>='0'&&ch<='9'){
            value = ch-'0';
        }
        else if(ch>='A'&&ch<='F'){
            value = ch -'A'+10;
        }
        else if(ch>='a'&&ch<='z'){
            value = ch-'a'+10;
        }
        else{
            cout<<"Not a valid input";
        }
        
        decimal = decimal*16+value;
        
    }
    cout<<"\n"<<"output: "<<decimal;
}`,
    output:
`Enter the hex to convert: 1F

output: 31`
  },
  // Question 14
  {
    q: "C++ Program to convert Decimal to Hex",
    code:
`#include <iostream>
using namespace std;
int main(){
    int decimal;
    cout<<"Enter the decimal: ";
    cin>>decimal;
    if(decimal==0){
        cout<<"Hex = 0";
        return 0;
    }
    string hex="";
    while(decimal>0){
        int rem = decimal%16;
        char ch;
        if(rem<10){
            ch = rem+'0';
        }
        else{
            ch = rem -10+'A';
        }
        hex = ch +hex;
        decimal = decimal/16;
    }
cout<<"The converted: "<<hex;
}`,
    output:
`Enter the decimal: 255
The converted: FF`
  },
  // Question 15
  {
    q: "C++ Program to convert Octal to Decimal",
    code:
`#include <iostream>
using namespace std;

int main(){
    string octal;
    cout<<"Enter the octal to convert: ";
    cin>>octal;

    int decimal = 0;

    for(int i = 0; i < octal.length(); i++){
        if(octal[i] < '0' || octal[i] > '7'){
            cout<<"Invalid octal";
            return 0;
        }

        decimal = decimal * 8 + (octal[i] - '0');
    }

    cout<<"Converted: "<<decimal;
}`,
    output:
`Enter the octal to convert: 77
Converted: 63`
  },
  // Question 16
  {
    q: "C++ Program to convert Decimal to Octal",
    code:
`#include <iostream>
using namespace std;
int main(){
    int decimal=0;
    cout<<"Enter the decimal to convert: ";
    cin>>decimal;
    if(decimal ==0){
        cout<<"Converted: 0";
        return 0;
    }
    string oct;
    while(decimal>0){
        int rem = decimal%8;
        oct = char(rem +'0')+oct;
        decimal = decimal/8;
    }
    cout<<"Converted: "<<oct;
}`,
    output:
`Enter the decimal to convert: 64
Converted: 100`
  },

])
database.functions.questions = ([
     {
    q: "Write a C++ method to find the smallest number among three numbers.",

    code:
`// Write a C++ method to find the smallest number among three numbers.
#include <iostream>
using namespace std;
// int a,b,c;
int smallest(int a, int b, int c)
{

    if (a <= b && a <= c)
    {
        return  a;
    }
    else if (b <= a && b <= c)
    {
        return b;
    }
    else if (c <= a && c <= b)
    {
        return c;
    }
}

int main()
{
    int a, b, c;
    cout << "Enter three numbers you like: " << endl;
    cout << "1st Number: ";
    cin >> a;
    cout << "2nd Number: ";
    cin >> b;
    cout << "3rd Number: ";
    cin >> c;
    cout << "\nSmallest Number: " << smallest(a, b, c);
}`,

    output:
`Enter three numbers you like: 
1st Number: 5
2nd Number: 8
3rd Number: 3

Smallest Number: 3`
  },

  {
    q: "Write a C++ method to compute the average of three numbers.",

    code:
`// Write a C++ method to compute the average of three numbers.
#include <iostream>
#include <string>
using namespace std;
// int a,b,c;s

float average(float a, float b, float c)
{

    return ((a + b + c) / 3);
}

int main()
{
    float a, b, c;
    cout << "Enter three numbers you like: " << endl;
    cout << "1st Number: ";
    cin >> a;
    cout << "2nd Number: ";
    cin >> b;
    cout << "3rd Number: ";
    cin >> c;
    cout << "\nAverage of Numbers: "<< average(a, b, c);
}`,

    output:
`Enter three numbers you like: 
1st Number: 10
2nd Number: 20
3rd Number: 30

Average of Numbers: 20`
  },

  {
    q: "Write a C++ method to display the middle character of a string.",

    code:
`// Write a C++ method to display the middle character of a string.

#include <iostream>
#include <string>
using namespace std;

int mid(string str)
{
    int fir;
    fir = str.length();
    if (fir % 2)
    {
        cout << "the middle character is:-" << str[fir / 2 - 1] << str[fir / 2];
    }

    else
    {
        cout << "the middle character is: " << str[fir / 2];
    }
}

int main()
{
    string text;
    cout << "Enter the text you like:";
    cin >> text;
    mid(text);
}`,

    output:
`Enter the text you like:hello
the middle character is:-ll`
  },

  {
    q: "Write a C++ method to find all twin prime numbers less than 100.",

    code:
`// Write a C++ method to find all twin prime numbers less than 100.
#include <iostream>
using namespace std;

void twinPrime()
{
    int isPrime = 1;
    for (int i = 2; i < 100; i++)
    {
        isPrime = 1;
        for (int j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1)
        {
            int isPrime2 = 1;
            int a = i + 2;
            for (int b = 2; b < a; b++)
            {
                if (a % b == 0)
                {
                    isPrime2 = 0;
                    break;
                }
            }
            if (isPrime2 == 1)
            {
                cout << i << " " << a << endl;
            }
        }
    }
}

int main()
{
    cout << "Here are all the pair of Prime Numbers which are less than hundred: " << endl;
    twinPrime();
    return 0;
}`,

    output:
`Here are all the pair of Prime Numbers which are less than hundred: 
3 5
5 7
11 13
17 19
29 31
41 43
59 61
71 73`
  },

  {
    q: "Write a C++ method to count the number of digits in an integer with the value 2.",

    code:
`// Write a C++ method to count the number of digits in an integer with the value 2.
#include <iostream>
using namespace std;

int countTwo(int n)
{
    int count = 0;
    if (n < 0)
    {
        n = n * -1;
    }

    while (n > 0)
    {
        int digit = n % 10;
        if (digit == 2)
            count++;
        n = n / 10;
    }
    return count;
}

int main()
{
    int num;
    cout << "Enter number: ";
    cin >> num;
    cout << "Number of digits with value 2 = " << countTwo(num);
}`,

    output:
`Enter number: 22342
Number of digits with value 2 = 3`
  },

  {
    q: "Write a C++ method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",

    code:
`// Write a C++ method that accepts three integers and checks whether they are consecutive or not. Returns true or false.
#include <iostream>
using namespace std;

void check(int a, int b, int c)
{
    if (((b == a + 1) && (c == b + 1)) || ((b == a - 1) && (c == b - 1)))
        cout << "Numbers are consecutive";
    else
        cout << "Numbers are not consecutive";
}

int main()
{
    int a, b, c;
    cout << "Enter three integers you like: " << endl;
    cout << "1st Number: ";
    cin >> a;
    cout << "2nd Number: ";
    cin >> b;
    cout << "3rd Number: ";
    cin >> c;
    check(a, b, c);

    return 0;
}`,

    output:
`Enter three integers you like: 
1st Number: 5
2nd Number: 6
3rd Number: 7
Numbers are consecutive`
  },

  {
    q: "Write a C++ method that checks whether all the characters in a given string are vowels (a,e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false.",

    code:
`// Write a C++ method that checks whether all the characters in a given string are vowels (a,e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false.
#include <iostream>
#include <string>
using namespace std;

int checkVowels(string str)
{
    int isVowel = 1;
    for (int i = 0; i < str.length(); i++)
    {
        char ch = str[i];
        if (!(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
              ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'))
        {
            isVowel = 0;
            break;
        }
    }
    if (isVowel == 1)
    {
        return 1; // returning True
    }
    else
    {
        return 0; // returning false
    }
}

int main()
{
    string str;
    cout << "Enter a string: ";
    cin >> str;
    if (checkVowels(str) == 1)
    {
        cout << "All characters are vowels";
    }
    else
    {
        cout << "Not all characters are vowels";
    }
}`,

    output:
`Enter a string: aeiou
All characters are vowels`
  },

  {
    q: "Write a program to enter 2 numbers from the user add them and display the answer repeatedly for add, subtract, multiply and divide operations.",

    code:
`// 8. Write a program to enter 2 numbers from the user add them and display the answer repeatedly for add, subtract, multiply and divide operations.
#include <iostream>
using namespace std;

int operations(int a, int b)
{
    int choice;
    do
    {
        cout << "\n1. Add";
        cout << "\n2. Subtract";
        cout << "\n3. Multiply";
        cout << "\n4. Divide";
        cout << "\n5. Exit";
        cout << "\nEnter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Sum = " << a + b << endl;
            break;
        case 2:
            cout << "Difference = " << a - b << endl;
            break;
        case 3:
            cout << "Product = " << a * b << endl;
            break;
        case 4:
            cout << "Division = " << a / b << endl;
            break;
        case 5:
            cout << "Program ended";
            break;
        default:
            cout << "Invalid choice";
        }
    } while (choice != 5);
}

int main()
{
    int a, b;

    cout << "Enter two numbers you like: " << endl;
    cout << "1st Number: ";
    cin >> a;
    cout << "2nd Number: ";
    cin >> b;
    operations(a, b);
}`,

    output:
`Enter two numbers you like: 
1st Number: 10
2nd Number: 5

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
Enter your choice: 1
Sum = 15

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
Enter your choice: 2
Difference = 5

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
Enter your choice: 3
Product = 50

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
Enter your choice: 4
Division = 2

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
Enter your choice: 5
Program ended`
  },

  {
    q: "Write a program to enter 10 numbers from the user add the numbers and display the answer.",

    code:
`// 9. Write a program to enter 10 numbers from the user add the numbers and display the answer.
#include <iostream>
using namespace std;

void addNumbers()
{
    int num, sum = 0;
    for (int i = 1; i <= 10; i++)
    {
        cout << "Enter number" << i << " : ";
        cin >> num;
        sum += num;
    }
    cout << "\nTotal sum = " << sum;
}

int main()
{
    addNumbers();
    return 0;
}`,

    output:
`Enter number1 : 1
Enter number2 : 2
Enter number3 : 3
Enter number4 : 4
Enter number5 : 5
Enter number6 : 6
Enter number7 : 7
Enter number8 : 8
Enter number9 : 9
Enter number10 : 10

Total sum = 55`
  },

  {
    q: "Write a program to return an array from function.",

    code:
`// 10. Write a program to return an array from function.
#include <iostream>
using namespace std;

int *createArray()
{
    static int arr[5];
    cout << "Enter 5 numbers:\n";
    for (int i = 0; i < 5; i++)
    {
        cout << "number " << i + 1 << ": ";
        cin >> arr[i];
    }
    return arr;
}

int main()
{
    int *p;
    p = createArray();
    cout << "Array elements are:\n";
    for (int i = 0; i < 5; i++)
    {
        cout << p[i] << " ";
    }
    return 0;
}`,

    output:
`Enter 5 numbers:
number 1: 10
number 2: 20
number 3: 30
number 4: 40
number 5: 50
Array elements are:
10 20 30 40 50 `
  },

  {
    q: "Making following program using local and global variable ? Factorial , Reverse , Palindrome , Prime numbers, Armstrong , Fibonacci",

    code:
`// Making following program using local and global variable ?
// Factorial , Reverse , Palindrome , Prime numbers, Armstrong , Fibonacci

#include <iostream>
#include <string.h>
using namespace std;

// declaring global functions
int i, f, j, l, x, y, d1, d2, d3, d4;
char str[25], str1[25], str2[25];

// declaring all the global funcions
void gfact();
void greverse();
void gpallindrome();
void gfibbo();
void gprime();
void garm();

// declaring all the local funcions
void lfact();
void lreverse();
void lpallindrome();
void lfibbo();
void lprime();
void larm();

// making main to control all
int main()
{
    int a, b;
    char r;

    cout << "1. Global Variable\n2. Local variable";
    cout << "\nSelect which variable would you like us to use:";

    cin >> a;
    if (a != 1 && a != 2)
    {
        cout << "option Invalid\n";
        cout << "select the option again: ";

    }
    cout << "1.Factorial\n";
    cout << "2.Reverse\n";
    cout << "3.Pallindrome\n";
    cout << "4.Prime Numbers\n";
    cout << "5.Fibbonacci series\n";
    cout << "6. Armstrong number\n";
    cout << "\nSelect which program do you want to execute:\n";

    cin >> b;
    if (b < 1 || b > 6)
    {
        cout << "option Invalid\n";
        cout << "select the option again: ";
    }
    cout << "Here is your programm: \n";
    if (a == 1)
    {
        if (b == 1)
            gfact();
        else if (b == 2)
            greverse();
        else if (b == 3)
            gpallindrome();
        else if (b == 4)
            gprime();
        else if (b == 5)
            gfibbo();
        else
            garm();
    }
    else
    {
        if (b == 1)
            lfact();
        else if (b == 2)
            lreverse();
        else if (b == 3)
            lpallindrome();
        else if (b == 4)
            lprime();
        else if (b == 5)
            lfibbo();
        else
            larm();
    }
}

// programs using global variables
// factorial
void gfact()
{
    cout << "Enter the number: ";
    cin >> x;
    f = x;
    for (i = x - 1; i > 0; i--)
    {
        f = f * i;
    }
    cout << "Factorial of this number: " << f;
}

// reverse
void greverse()
{
    cout << "Enter the word: ";
    cin >> str;
    l = strlen(str);
    for (i = 0; i < l; i++)
    {
        cout << str[l - i - 1];
    }
}

// pallindrome
void gpallindrome()
{
    cout << "Enter the word: ";
    fflush(stdin);
    cin >> str1;
    l = strlen(str1);
    for (i = 0; i < l; i++)
    {
        str2[i] = str1[l - 1 - i];
    }
    str2[i] = 0;
    l = strcmp(str1, str2);
    if (l == 0)
        cout << "\nThis is a Pallindrome";
    else
        cout << "\nThis is not a pallindrome";
}

// prime numbers
void gprime()
{
    int p;
    cout << "Enter the number you like: ";
    cin >> x;
    for (i = 2; i < x; i++)
    {
        if (x % i == 0)
        {
            cout << x << " is not a prime number";
            goto end;
        }
    }
    cout << x << " is a prime number";
end:;
}

void gfibbo()
{

    x = 0;
    y = 1;
    cout << "How many number you want in this series: ";
    cin >> j;
    cout << x << " " << y;
    for (i = 0; i <= j - 3; i++)
    {
        y = x + y;
        cout << y;
        x = y - x;
    }
}

void garm()
{
    int x, d1, d2, d3, d4;

    cout << "Enter a number you like: ";
    cin >> x;
    if (x < 0)
        x = x * -1;
    if (x == 0)
        cout << x << " is an armstrong number.";
    else if (x < 100 || x > 9999)
        cout << "The next armstrong number after 0 strats from the 3 digits or more\nPLease enter a 3 or 4 digit number only";
    else
    {
        if (x < 1000)
        {                        // checking if 3 digit number
            d1 = x / 100;        // 1st digit
            d2 = (x % 100) / 10; // 2nd digit
            d3 = x % 10;         // 3rd digit
            if (((d1 * d1 * d1) + (d2 * d2 * d2) + (d3 * d3 * d3)) == x)
                cout << x << " is an armstrong number";
            else
                cout << x << " is not an armstrong number";
        }
        else
        {                          // for 4 digit number
            d1 = x / 1000;         // 1st digit
            d2 = (x % 1000) / 100; // 2nd digit
            d3 = (x % 100) / 10;   // 3rd digit
            d4 = x % 10;           // 4th digit
            if (((d1 * d1 * d1 * d1) + (d2 * d2 * d2 * d2) + (d3 * d3 * d3 * d3) + (d4 * d4 * d4 * d4)) == x)
                cout << x << " is an armstrong number";
            else
                cout << x << " is not an armstrong number";
        }
    }
}

// programs using local variables
// factorial
void lfact()
{
    int x, f, i;

    cout << "Enter the number: ";
    cin >> x;
    f = x;
    for (i = x - 1; i > 0; i--)
    {
        f = f * i;
    }
    cout << "Factorial of this number: " << f;
}

// reverse
void lreverse()
{
    char str[25];
    int i, l;

    cout << "Enter the word: ";
    cin >> str;
    l = strlen(str);
    for (i = 0; i < l; i++)
    {
        cout << str[l - i - 1];
    }
}

// pallindrome
void lpallindrome()
{
    char str1[25], str2[25];
    int i, l;

    cout << "Enter the word: ";
    fflush(stdin);
    cin >> str1;
    l = strlen(str1);
    for (i = 0; i < l; i++)
    {
        str2[i] = str1[l - 1 - i];
    }
    str2[i] = 0;
    l = strcmp(str1, str2);
    if (l == 0)
        cout << "\nThis is a Pallindrome";
    else
        cout << "\nThis is not a pallindrome";
}

// prime numbers
void lprime()
{
    int x, i;

    cout << "Enter the number you like: ";
    cin >> x;
    for (i = 2; i < x; i++)
    {
        if (x % i == 0)
        {
            cout << x << " is not a prime number";
            goto end;
        }
    }
    cout << x << " is a prime number";
end:;
}

void lfibbo()
{
    int i, x = 0, y = 1, j;

    cout << "How many number you want in this series: ";
    cin >> j;
    cout << x << y;
    for (i = 0; i <= j - 3; i++)
    {
        y = x + y;
        cout << y;
        x = y - x;
    }
}

void larm()
{
    int x, d1, d2, d3, d4;

    cout << "Enter a number you like: ";
    cin >> x;
    if (x < 0)
        x = x * -1;
    if (x == 0)
        cout << x << " is an armstrong number.";
    else if (x < 100 || x > 9999)
        cout << "The next armstrong number after 0 strats from the 3 digits or more\nPLease enter a 3 or 4 digit number only";
    else
    {
        if (x < 1000)
        {                        // checking if 3 digit number
            d1 = x / 100;        // 1st digit
            d2 = (x % 100) / 10; // 2nd digit
            d3 = x % 10;         // 3rd digit
            if (((d1 * d1 * d1) + (d2 * d2 * d2) + (d3 * d3 * d3)) == x)
                cout << x << " is an armstrong number";
            else
                cout << x << " is not an armstrong number";
        }
        else
        {                          // for 4 digit number
            d1 = x / 1000;         // 1st digit
            d2 = (x % 1000) / 100; // 2nd digit
            d3 = (x % 100) / 10;   // 3rd digit
            d4 = x % 10;           // 4th digit
            if (((d1 * d1 * d1 * d1) + (d2 * d2 * d2 * d2) + (d3 * d3 * d3 * d3) + (d4 * d4 * d4 * d4)) == x)
                cout << x << " is an armstrong number";
            else
                cout << x << " is not an armstrong number";
        }
    }
}`,

    output:
`1. Global Variable
2. Local variable
Select which variable would you like us to use:1
1.Factorial
2.Reverse
3.Pallindrome
4.Prime Numbers
5.Fibbonacci series
6. Armstrong number

Select which program do you want to execute:
1
Here is your programm: 
Enter the number: 5
Factorial of this number: 120`
  },

  {
    q: "Swap numbers using Call by address.",

    code:
`// 12. Swap numbers using Call by address.
#include <iostream>
using namespace std;

void swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x, y;

    cout << "Enter two numbers you like: " << endl;
    cout << "1st Number: ";
    cin >> x;
    cout << "2nd Number: ";
    cin >> y;

    cout << "Before swapping:\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;

    swap(&x, &y);

    cout << "After swapping:\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;
}`,

    output:
`Enter two numbers you like: 
1st Number: 10
2nd Number: 20
Before swapping:
x = 10
y = 20
After swapping:
x = 20
y = 10`
  },

  {
    q: "Swap numbers using Call by refrence.",

    code:
`// 12. Swap numbers using Call by refrence.
#include <iostream>
using namespace std;

void swap(int &a, int &b)
{
    int temp;
    temp = a;
    a = b;
    b = temp;
}

int main()
{
    int x, y;

    cout << "Enter two numbers you like: " << endl;
    cout << "1st Number: ";
    cin >> x;
    cout << "2nd Number: ";
    cin >> y;

    cout << "Before swapping:\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;

    swap(x, y);

    cout << "After swapping:\n";
    cout << "x = " << x << endl;
    cout << "y = " << y << endl;

}`,

    output:
`Enter two numbers you like: 
1st Number: 15
2nd Number: 25
Before swapping:
x = 15
y = 25
After swapping:
x = 25
y = 15`
  },

  {
    q: "Make function to find power of a number, enter number and power from user.",

    code:
`// 14. Make function to find power of a number, enter number and power from user.
#include <iostream>
using namespace std;

int Power(int base, int power)
{
    int res = base;
    if (power == 0)
    {
        return 1;
    }
    for (int i = 0; i < (power - 1); i++)
    {
        res *= base;
    }
    return res;
}

int main()
{
    int base, power;
    cout << "Enter the base number: ";
    cin >> base;
    cout << "Enter the Power: ";
    cin >> power;

    cout << "Result: " << Power(base, power);
}`,

    output:
`Enter the base number: 2
Enter the Power: 3
Result: 8`
  },

  {
    q: "Make function to find cube of a user entered number.",

    code:
`// 15. Make function to find cube of a user entered number.
#include <iostream>
using namespace std;

int cube(int number)
{
    return (number * number * number);
}

int main()
{
    int num;
    cout << "Enter the number: ";
    cin >> num;

    cout << "Cube of the Number is : " << cube(num);
}`,

    output:
`Enter the number: 3
Cube of the Number is : 27`
  },

])
database.inheritance.questions=([ // Question 1
    {
        q: "Write a C++ program to create a class called Animal with a method called makeSound(). Create a derived class called Cat that overrides the makeSound() method to bark.",

        code:
            `#include <iostream>
using namespace std;

class Animal{
    public:
    void MakeSound(){
        cout<<"Making Animal Sound";
    }
};

class Cat:public Animal{
    public:
    void MakeSound(){
        cout<<"Bark";
    }
};


int main(){
   
    Cat obj;    
    obj.MakeSound();
}`,

        output:
            `Bark`
    },

    // Question 2
    {
        q: "Write a C++ program to create a class called Vehicle with a method called drive(). Create a derived class called Car that overrides the drive() method to print \"Repairing a car\".",

        code:
            `#include <iostream>
using namespace std;

class Vechile{
    public:
    void Drive(){
        cout<<"Driving";
    }
};

class Car:public Vechile{
    public:
    void Drive(){
        cout<<"Repairing a car";
    }
};


int main(){
   
    Car obj;    
    obj.Drive();
}`,

        output:
            `Repairing a car`
    },

    // Question 3
    {
        q: "Write a C++ program to create a class called Shape with a method called getArea(). Create a derived class called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",

        code:
            `#include <iostream>
using namespace std;

class Shape{
    public:
    void getArea(){
        cout<<"Prints the area";
    }
};

class Rectange:public Shape{
    public:
    int x , y;
    Rectange(){
        x=100;
        y=50;
    }
    void getArea(){
        cout<<"The lenght is  "<<x<<" \nThe breadth is "<< y<<"\nArea is "<<x*y;
    }
};

int main(){
    Rectange obj;
    obj.getArea();
}`,

        output:
            `The lenght is  100 
The breadth is 50
Area is 5000`
    },

    // Question 4
    {
        q: "Write a C++ program to create a class called Employee with methods called work() and getSalary(). Create a derived class called HRManager that overrides the work() method and adds a new method called addEmployee().",

        code:
            `#include <iostream>
#include <cstring>
using namespace std;
class Employee{
    public:
    void work(){
        cout<<"The Hiring drive"<<endl;
    }
    void getSalary(){
        int x;
        x= NULL;
        cout<<x;
    }
};

class HRManager:public Employee{

    public:
    void work(){
        cout<<"you are fired"<<endl;
    }
   
    void addEmployee(char*n,char* ds){
        char name[30];
        strcpy(name,n);
        char Designation[30];
        strcpy(Designation,ds);
        cout<<"welcome "<<name<<" "<<Designation;
    }

};

int main(){
    HRManager obj;
    obj.work();
    obj.getSalary();
    obj.addEmployee("Dhruv","Devloper");
}`,

        output:
            `you are fired
0welcome Dhruv Devloper`
    },

    // Question 5
    {
        q: "Write a C++ program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a derived class called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",

        code:
            `#include <iostream>
using namespace std;
class BankAccount{
    protected:
    float Balance = 0;
    public:
    void deposit(float Amount){
        Balance = Balance+Amount;
        cout<<"The amount is "<<Amount<<endl;
        cout<<"The balance is "<<Balance<<endl;        
    }
    
    void virtual withdraw(float withdraw){
        if(Balance>withdraw){
            Balance = Balance-withdraw;
            cout<<"Amount Withdrawn "<<withdraw<<endl<<"Balance is "<<Balance<<endl;
        }
        else{
            cout<<"not sufficient";
        }
    }
};

class SavingAccount: public BankAccount{
    public:
    void withdraw(float withdraw){
        if(Balance-withdraw<100){
            cout<<"Denied"<<endl;
        }
        else{
            Balance = Balance-withdraw;
            cout<<"Amount withdrawn "<<withdraw<<endl;
            cout<<"Left Balance "<<Balance<<endl;
        }

    }
};

int main(){
    SavingAccount obj;
    obj.deposit(10387.676);
    obj.withdraw(3678);
}`,

        output:
            `The amount is 10387.7
The balance is 10387.7
Amount withdrawn 3678
Left Balance 6709.68
`
    },

    // Question 6
    {
        q: "Write a C++ program to create a class called Animal with a method named move(). Create a derived class called Cheetah that overrides the move() method to run.",

        code:
            `#include <iostream>
using namespace std;

class Animal{
    public:
    void Move(){
        cout<<"Animal is moving"<<endl;
    }
};
class Cheetah:public Animal{

    public:
    void Move(){
        cout<<"Animal is Running";
    }
};

int main(){
    Cheetah obj;
    obj.Move();
}`,

        output:
            `Animal is Running`
    },

    // Question 7
    {
        q: "Write a C++ program to create a class called Person with methods to set and get name. Create a derived class called Employee that overrides the getLastName() method to include job title.",

        code:
            `#include <iostream>
#include <string>
using namespace std;

class Person{
protected:
    string First;
    string Last;

public:
    void SetName(string f, string l){
        First = f;
        Last = l;
    }

    string getFirstName(){
        return First;
    }

    virtual string getLastName(){
        return Last;
    }
};

class Employee : public Person{
private:
    int empId;
    string jobTitle;

public:
    void setEmployee(int id, string title){
        empId = id;
        jobTitle = title;
    }

    int getEmployeeId(){
        return empId;
    }

    string getLastName(){
        return Last + " (" + jobTitle + ")";
    }
};

int main(){
    Employee obj;

    obj.SetName("Dhruv","Goyal");
    obj.setEmployee(101,"Game Developer");

    cout<<"First Name: "<<obj.getFirstName()<<endl;
    cout<<"Last Name: "<<obj.getLastName()<<endl;
    cout<<"Employee ID: "<<obj.getEmployeeId()<<endl;

    return 0;
}`,

        output:
            `First Name: Dhruv
Last Name: Goyal (Game Developer)
Employee ID: 101
`
    },

    // Question 8
    {
        q: "Write a C++ program to create a class called Shape with methods called getPerimeter() and getArea(). Create a derived class called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",

        code:
            `#include <iostream>
using namespace std;
class Shape{
    public:
        virtual float GetPerameter(){
            return 0;
        }
        virtual float GetArea(){
            return 0;
        }
};

class Circle:public Shape{
    private:
        float radius;
    public:
        void setRadius(float r){
            radius=r;
        }    
        float GetPerameter(){
            
            return 2 * 3.14 * radius;
        }
        float GetArea(){
            return 3.14 * radius * radius;
        }
};
int main(){
    Circle obj;
    float area, perameter;
    obj.setRadius(24);
    perameter = obj.GetPerameter();
    area =  obj.GetArea();
    cout<<"Perameter is "<<perameter<<endl<<"Area is"<<area;


}`,

        output:
            `Perameter is 150.72
Area is1808.64`
    },

    // Question 9
    {
        q: "Write a C++ program to create a vehicle class hierarchy. The base class should be Vehicle, with derived classes Truck, Car and Motorcycle. Each derived class should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",

        code:
            `#include <iostream>
#include <string.h>
using namespace std;

class vechile{
    private:
        string Make, Model, Fuel_Type;
        int year;
    public:
        void Set_Details(string m ,string mo,string fuel,int y){
            Make = m;
            Model = mo;
            Fuel_Type = fuel;
            year = y;
        }
        virtual float Fuel_Efficiency()
        {}
        virtual float Distance_Traveeled()
        {}
        virtual float Maximum_Speed()
        {}
};

class Truck: public vechile{
    public:
    float Fuel_Efficiency(float Distance, float Fuel){
        return Distance/Fuel;
    }

    float Distance_Traveeled(float Speed, float Time){
        return Speed*Time;
    }
    float Maximum_Speed(float Distance,float Time){
        return Distance/Time;
    }
};

class Car: public vechile{
    public:
    float Fuel_Efficiency(float Distance, float Fuel){
        return Distance/Fuel;
    }

    float Distance_Traveeled(float Speed, float Time){
        return Speed*Time;
    }
    float Maximum_Speed(float Distance,float Time){
        return Distance/Time;
    }
};

class Motocycle: public vechile{
    public:
    float Fuel_Efficiency(float Distance, float Fuel){
        return Distance/Fuel;
    }

    float Distance_Traveeled(float Speed, float Time){
        return Speed*Time;
    }
    float Maximum_Speed(float Distance,float Time){
        return Distance/Time;
    }
};

int main(){
    Truck obj;
    obj.Set_Details("India","2019","Petrol",2025);
    cout<<"Fuel Efficiency: "<<obj.Fuel_Efficiency(200,48)<<endl;
    cout<<"Distance_Traveeled: "<<obj.Distance_Traveeled(95,5)<<endl;
   cout<<"Maximum Speed: "<< obj.Maximum_Speed(286,9)<<endl;

   Car obj2;
    obj2.Set_Details("Germany","2015","Petrol",2025);
    cout<<"Fuel Efficiency: "<<obj2.Fuel_Efficiency(200,68)<<endl;
    cout<<"Distance_Traveeled: "<<obj2.Distance_Traveeled(95,1)<<endl;
   cout<<"Maximum Speed: "<< obj2.Maximum_Speed(286,3)<<endl;

   Motocycle obj3;
    obj3.Set_Details("Japan","2024","Petrol",2025);
    cout<<"Fuel Efficiency: "<<obj3.Fuel_Efficiency(200,18)<<endl;
    cout<<"Distance_Traveeled: "<<obj3.Distance_Traveeled(95,2)<<endl;
   cout<<"Maximum Speed: "<< obj3.Maximum_Speed(286,6);



}`,

        output:
            `Fuel Efficiency: 4.16667
Distance_Traveeled: 475
Maximum Speed: 31.7778
Fuel Efficiency: 2.94118
Distance_Traveeled: 95
Maximum Speed: 95.3333
Fuel Efficiency: 11.1111
Distance_Traveeled: 190
Maximum Speed: 47.6667`
    },

    // Question 10
    {
        q: "Write a C++ program that creates a class hierarchy for employees of a company. The base class should be Employee, with derived classes Manager, Developer, and Programmer. Each derived class should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",

        code:
            `#include<iostream>
#include <string.h>
using namespace std;

class Employee{
    protected:
        string Name;
        string Address;
        float  Salary;
        string Job_Title;
    public:
        Employee(string n,string add, float amount, string title){
                Name = n;
                Address = add;
                Salary = amount;
                Job_Title = title;
        }
        virtual void Bonus()
            {}
        virtual void PerformanceReport()
            {}
        virtual void ManagingProjects()
            {}
        void display(){
            cout<<"Name: "<<Name<<endl;
            cout<<"Address:  "<<Address<<endl;
            cout<<"Salary: "<<Salary<<endl;
            cout<<"Job Title "<<Job_Title<<endl;
        }
};
class Manager: public Employee{
    public:
    Manager(string n, string a, float m):Employee(n,a,m,"MANAGER") {}
    void Bonus(){
        cout<<"Bonus: "<<Salary*0.15<<endl;
    } 
    void PerformanceReport(){
        cout<<Name <<" has completed his task on time"<<endl;
    }
    void ManagingProjects(){
        cout<<Name<<" has managed 4 task this month"<<endl;
    }
};
class Developer: public Employee{
    public:
    Developer(string n, string a, float m):Employee(n,a,m,"DEVELOPER") {}
    void Bonus(){
        cout<<"Bonus: "<<Salary*0.35<<endl;
    } 
    void PerformanceReport(){
        cout<<Name <<" has completed his task on time"<<endl;
    }
    void ManagingProjects(){
        cout<<Name<<" has managed 6 task this month"<<endl;
    }
};
class Programmer: public Employee{
    public:
    Programmer(string n, string a, float m):Employee(n,a,m,"Programmer") {}
    void Bonus(){
        cout<<"Bonus: "<<Salary*0.25<<endl;
    } 
    void PerformanceReport(){
        cout<<Name <<" has completed his task on time"<<endl;
    }
    void ManagingProjects(){
        cout<<Name<<" has managed 5 task this month"<<endl;
    }
};

int main()
{
    Manager m("Dhruv", "Punjab", 80000);
    Developer d("Rohit", "Delhi", 60000);
    Programmer p("Aman", "Chandigarh", 50000);

    cout << "\nManager Details\n";
    m.display();
    m.Bonus();
    m.PerformanceReport();
    m.ManagingProjects();

    cout << "\nDeveloper Details\n";
    d.display();
    d.Bonus();
    d.PerformanceReport();
    d.ManagingProjects();

    cout << "\nProgrammer Details\n";
    p.display();
    p.Bonus();
    p.PerformanceReport();
    p.ManagingProjects();

    return 0;
}`,

        output:
            `
Manager Details
Name: Dhruv
Address:  Punjab
Salary: 80000
Job Title MANAGER
Bonus: 12000
Dhruv has completed his task on time
Dhruv has managed 4 task this month

Developer Details
Name: Rohit
Address:  Delhi
Salary: 60000
Job Title DEVELOPER
Bonus: 21000
Rohit has completed his task on time
Rohit has managed 6 task this month

Programmer Details
Name: Aman
Address:  Chandigarh
Salary: 50000
Job Title Programmer
Bonus: 12500
Aman has completed his task on time
Aman has managed 5 task this month
`
    },])
    database.arrays.questions=([// Question 1
  {
    q: "Enter the Matrix of rows and columns entered by the user and print in matrix format",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int row, column;

    cout << "Enter the size of the matrix: ";
    cout << "\nRows: ";
    cin >> row;
    cout << "Columns: ";
    cin >> column;

    int arr[row][column];

    for (int i = 0; i < row; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < column; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> arr[i][j];
        }
    }

    
    cout << "\nYour Entered Matix:" << endl;
    for (int i = 0; i < row; i++)
    {
        cout << "| ";
        for (int j = 0; j < column; j++)
        {
            cout << setw(5) << arr[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the size of the matrix: 
Rows: 3
Columns: 3

Row 1	Column 1: 1
	    Column 2: 2
	    Column 3: 3

Row 2	Column 1: 4
	    Column 2: 5
	    Column 3: 6

Row 3	Column 1: 7
	    Column 2: 8
	    Column 3: 9

Your Entered Matix:
|     1     2     3 |
|     4     5     6 |
|     7     8     9 |`
  },

  // Question 2
  {
    q: "Program to Add Two Matrices",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Adding Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            res[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    // printing result for result matrices
    cout << "\nResult of two Matices Added:" << endl;
    for (int i = 0; i < 2; i++)
    {
        cout << "| ";
        for (int j = 0; j < 2; j++)
        {
            cout << setw(5) << res[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 5
	Column 2: 6

Row 2	Column 1: 7
	Column 2: 8

Result of two Matices Added:
|     6     8 |
|    10    12 |`
  },

  // Question 3
  {
    q: "Program to Multiply Two Matrices",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Multiplying Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            res[i][j] = (matrix1[i][0] * matrix2[0][j]) + (matrix1[i][1] * matrix2[1][j]);
        }
    }

    // printing result for result matrices
    cout << "\nResult of two Matices Multiplied( Matrix 1 * Matrix 2 ):" << endl;
    for (int i = 0; i < 2; i++)
    {
        cout << "| ";
        for (int j = 0; j < 2; j++)
        {
            cout << setw(5) << res[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 5
	Column 2: 6

Row 2	Column 1: 7
	Column 2: 8

Result of two Matices Multiplied( Matrix 1 * Matrix 2 ):
|    19    22 |
|    43    50 |`
  },

  // Question 4
  {
    q: "Program to subtract the two matrices",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Subtracting Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            res[i][j] = matrix2[i][j] - matrix1[i][j];
        }
    }

    // printing result for result matrices
    cout << "\nResult of two Matices Subtracted( Matrix 2 - Matrix 1):" << endl;
    for (int i = 0; i < 2; i++)
    {
        cout << "| ";
        for (int j = 0; j < 2; j++)
        {
            cout << setw(5) << res[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 9
	Column 2: 8

Row 2	Column 1: 7
	Column 2: 6

Result of two Matices Subtracted( Matrix 2 - Matrix 1):
|     8     6 |
|     4     2 |`
  },

  // Question 5
  {
    q: "Program to determine whether two matrices are equal",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];
    int isEqual = 1;

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Checking Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            if (matrix1[i][j] != matrix2[i][j])
            {
                isEqual = 0;
                break;
            }
        }
        if (isEqual == 0)
        {
            break;
        }
    }

    // printing result
    if (isEqual == 0)
    {
        cout << "Two Matrices Entered are not equal";
    }
    else
    {
        cout << "Both Matrices are equal";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4
Both Matrices are equal`
  },

  // Question 6
  {
    q: "Program to display the lower triangular matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // converting to the lower triangular matrix
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i < j)
            {
                matrix[i][j] = 0;
            }
        }
    }

    cout << "\nLower Triangle Equivalent for your Matrix:" << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << "| ";
        for (int j = 0; j < 3; j++)
        {
            cout << setw(5) << matrix[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9

Lower Triangle Equivalent for your Matrix:
|     1     0     0 |
|     4     5     0 |
|     7     8     9 |`
  },

  // Question 7
  {
    q: "Program to display the upper triangular matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // converting to the upper triangular matrix
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i > j)
            {
                matrix[i][j] = 0;
            }
        }
    }

    cout << "\nUpper Triangle Equivalent for your Matrix:" << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << "| ";
        for (int j = 0; j < 3; j++)
        {
            cout << setw(5) << matrix[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9

Upper Triangle Equivalent for your Matrix:
|     1     2     3 |
|     0     5     6 |
|     0     0     9 |`
  },

  // Question 8
  {
    q: "Program to find the frequency of odd & even numbers in the given matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int odd = 0, even = 0;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // counting ood and even
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (matrix[i][j] % 2 == 0)
            {
                even += 1;
            }
            else
            {
                odd += 1;
            }
        }
    }

    cout << "Entered Matrix has: ";
    cout << "\nEven Number: " << even;
    cout << "\nOdd Number: " << odd;
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9
Entered Matrix has: 
Even Number: 4
Odd Number: 5`
  },

  // Question 9
  {
    q: "Program to find the sum of each row and each column of a matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int sum = 0;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // Calculating sum of rows and columns
    cout << "\nRow Sum: " << endl;
    for (int i = 0; i < 3; i++)
    {
        sum = 0;
        for (int j = 0; j < 3; j++)
        {
            sum += matrix[i][j];
        }
        cout << "Sum of Row " << i + 1 << ": " << sum << endl;
    }

    cout << endl;

    cout << "\nColumn Sum: " << endl;
    for (int i = 0; i < 3; i++)
    {
        sum = 0;
        for (int j = 0; j < 3; j++)
        {
            sum += matrix[j][i];
        }
        cout << "Sum of Column " << i + 1 << ": " << sum << endl;
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9

Row Sum: 
Sum of Row 1: 6
Sum of Row 2: 15
Sum of Row 3: 24


Column Sum: 
Sum of Column 1: 12
Sum of Column 2: 15
Sum of Column 3: 18
`
  },

  // Question 10
  {
    q: "Program to determine whether a given matrix is an identity matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int isIdentity = 1;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // Checking Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            if (i == j)
            {
                if (matrix[i][j] != 1)
                {
                    isIdentity = 0;
                    break;
                }
            }
            else
            {
                if (matrix[i][j] == 0)
                {
                    isIdentity = 0;
                    break;
                }
            }
        }
        if (isIdentity == 0)
        {
            break;
        }
    }

    if (isIdentity == 0)
    {
        cout << "\nEntered Matrix is not an Identity Matrix" << endl;
    }
    else
    {
        cout << "\nEntered Matrix is an Identity Matrix" << endl;
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 0
	Column 3: 0

Row 2	Column 1: 0
	Column 2: 1
	Column 3: 0

Row 3	Column 1: 0
	Column 2: 0
	Column 3: 1

Entered Matrix is an Identity Matrix
`
  },

  // Question 11
  {
    q: "Program to Transpose matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int row, column;

    cout << "Enter the size of the matrix: ";
    cout << "\nRows: ";
    cin >> row;
    cout << "Columns: ";
    cin >> column;

    int arr[row][column];

    for (int i = 0; i < row; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < column; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> arr[i][j];
        }
    }

    cout << "\nYour Entered Matix:" << endl;
    for (int i = 0; i < row; i++)
    {
        cout << "| ";
        for (int j = 0; j < column; j++)
        {
            cout << setw(5) << arr[i][j] << " ";
        }
        cout << "|\n";
    }
    cout << endl;

    // Transposing the string
    int transpose[column][row];
    for (int i = 0; i < column; i++)
    {
        for (int j = 0; j < row; j++)
        {
            transpose[i][j] = arr[j][i];
        }
    }

    cout << "\nTranspose Equivalent for your entered Matrix:" << endl;
    for (int i = 0; i < column; i++)
    {
        cout << "| ";
        for (int j = 0; j < row; j++)
        {
            cout << setw(5) << transpose[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the size of the matrix: 
Rows: 2
Columns: 3

Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Your Entered Matix:
|     1     2     3 |
|     4     5     6 |


Transpose Equivalent for your entered Matrix:
|     1     4 |
|     2     5 |
|     3     6 |`
  },

  // Question 12
  {
    q: "Program to determine whether a given matrix is a Sparse matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int zero = 0, nonZero = 0;
    int isIdentity = 1;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // Checking The Matrices

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (matrix[i][j] == 0)
            {
                zero += 1;
            }
            else
            {
                nonZero += 1;
            }
        }
    }

    if (zero > nonZero)
    {
        cout << "\nEntered Matrix is a Sparse Matrix" << endl;
    }
    else
    {
        cout << "\nEntered Matrix is not a Sparse Matrix" << endl;
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 0
	Column 2: 0
	Column 3: 3

Row 2	Column 1: 0
	Column 2: 5
	Column 3: 0

Row 3	Column 1: 0
	Column 2: 0
	Column 3: 9

Entered Matrix is a Sparse Matrix
`
  },
])
database.arrays.questions=([// Question 1
  {
    q: "Enter the Matrix of rows and columns entered by the user and print in matrix format",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int row, column;

    cout << "Enter the size of the matrix: ";
    cout << "\nRows: ";
    cin >> row;
    cout << "Columns: ";
    cin >> column;

    int arr[row][column];

    for (int i = 0; i < row; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < column; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> arr[i][j];
        }
    }

    
    cout << "\nYour Entered Matix:" << endl;
    for (int i = 0; i < row; i++)
    {
        cout << "| ";
        for (int j = 0; j < column; j++)
        {
            cout << setw(5) << arr[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the size of the matrix: 
Rows: 3
Columns: 3

Row 1	Column 1: 1
	    Column 2: 2
	    Column 3: 3

Row 2	Column 1: 4
	    Column 2: 5
	    Column 3: 6

Row 3	Column 1: 7
	    Column 2: 8
	    Column 3: 9

Your Entered Matix:
|     1     2     3 |
|     4     5     6 |
|     7     8     9 |`
  },

  // Question 2
  {
    q: "Program to Add Two Matrices",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Adding Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            res[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    // printing result for result matrices
    cout << "\nResult of two Matices Added:" << endl;
    for (int i = 0; i < 2; i++)
    {
        cout << "| ";
        for (int j = 0; j < 2; j++)
        {
            cout << setw(5) << res[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 5
	Column 2: 6

Row 2	Column 1: 7
	Column 2: 8

Result of two Matices Added:
|     6     8 |
|    10    12 |`
  },

  // Question 3
  {
    q: "Program to Multiply Two Matrices",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Multiplying Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            res[i][j] = (matrix1[i][0] * matrix2[0][j]) + (matrix1[i][1] * matrix2[1][j]);
        }
    }

    // printing result for result matrices
    cout << "\nResult of two Matices Multiplied( Matrix 1 * Matrix 2 ):" << endl;
    for (int i = 0; i < 2; i++)
    {
        cout << "| ";
        for (int j = 0; j < 2; j++)
        {
            cout << setw(5) << res[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 5
	Column 2: 6

Row 2	Column 1: 7
	Column 2: 8

Result of two Matices Multiplied( Matrix 1 * Matrix 2 ):
|    19    22 |
|    43    50 |`
  },

  // Question 4
  {
    q: "Program to subtract the two matrices",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Subtracting Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            res[i][j] = matrix2[i][j] - matrix1[i][j];
        }
    }

    // printing result for result matrices
    cout << "\nResult of two Matices Subtracted( Matrix 2 - Matrix 1):" << endl;
    for (int i = 0; i < 2; i++)
    {
        cout << "| ";
        for (int j = 0; j < 2; j++)
        {
            cout << setw(5) << res[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 9
	Column 2: 8

Row 2	Column 1: 7
	Column 2: 6

Result of two Matices Subtracted( Matrix 2 - Matrix 1):
|     8     6 |
|     4     2 |`
  },

  // Question 5
  {
    q: "Program to determine whether two matrices are equal",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix1[2][2];
    int matrix2[2][2];
    int res[2][2];
    int isEqual = 1;

    cout << "Enter the values for the 2*2 matrix: " << endl;

    cout << "Matrix 1: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix1[i][j];
        }
    }
    cout << "\nMatrix 2: ";
    for (int i = 0; i < 2; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 2; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix2[i][j];
        }
    }

    // Checking Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            if (matrix1[i][j] != matrix2[i][j])
            {
                isEqual = 0;
                break;
            }
        }
        if (isEqual == 0)
        {
            break;
        }
    }

    // printing result
    if (isEqual == 0)
    {
        cout << "Two Matrices Entered are not equal";
    }
    else
    {
        cout << "Both Matrices are equal";
    }
}`,

    output:
`Enter the values for the 2*2 matrix: 
Matrix 1: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4

Matrix 2: 
Row 1	Column 1: 1
	Column 2: 2

Row 2	Column 1: 3
	Column 2: 4
Both Matrices are equal`
  },

  // Question 6
  {
    q: "Program to display the lower triangular matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // converting to the lower triangular matrix
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i < j)
            {
                matrix[i][j] = 0;
            }
        }
    }

    cout << "\nLower Triangle Equivalent for your Matrix:" << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << "| ";
        for (int j = 0; j < 3; j++)
        {
            cout << setw(5) << matrix[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9

Lower Triangle Equivalent for your Matrix:
|     1     0     0 |
|     4     5     0 |
|     7     8     9 |`
  },

  // Question 7
  {
    q: "Program to display the upper triangular matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // converting to the upper triangular matrix
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (i > j)
            {
                matrix[i][j] = 0;
            }
        }
    }

    cout << "\nUpper Triangle Equivalent for your Matrix:" << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << "| ";
        for (int j = 0; j < 3; j++)
        {
            cout << setw(5) << matrix[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9

Upper Triangle Equivalent for your Matrix:
|     1     2     3 |
|     0     5     6 |
|     0     0     9 |`
  },

  // Question 8
  {
    q: "Program to find the frequency of odd & even numbers in the given matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int odd = 0, even = 0;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // counting ood and even
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (matrix[i][j] % 2 == 0)
            {
                even += 1;
            }
            else
            {
                odd += 1;
            }
        }
    }

    cout << "Entered Matrix has: ";
    cout << "\nEven Number: " << even;
    cout << "\nOdd Number: " << odd;
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9
Entered Matrix has: 
Even Number: 4
Odd Number: 5`
  },

  // Question 9
  {
    q: "Program to find the sum of each row and each column of a matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int sum = 0;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // Calculating sum of rows and columns
    cout << "\nRow Sum: " << endl;
    for (int i = 0; i < 3; i++)
    {
        sum = 0;
        for (int j = 0; j < 3; j++)
        {
            sum += matrix[i][j];
        }
        cout << "Sum of Row " << i + 1 << ": " << sum << endl;
    }

    cout << endl;

    cout << "\nColumn Sum: " << endl;
    for (int i = 0; i < 3; i++)
    {
        sum = 0;
        for (int j = 0; j < 3; j++)
        {
            sum += matrix[j][i];
        }
        cout << "Sum of Column " << i + 1 << ": " << sum << endl;
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Row 3	Column 1: 7
	Column 2: 8
	Column 3: 9

Row Sum: 
Sum of Row 1: 6
Sum of Row 2: 15
Sum of Row 3: 24


Column Sum: 
Sum of Column 1: 12
Sum of Column 2: 15
Sum of Column 3: 18
`
  },

  // Question 10
  {
    q: "Program to determine whether a given matrix is an identity matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int isIdentity = 1;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // Checking Two Matrices

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            if (i == j)
            {
                if (matrix[i][j] != 1)
                {
                    isIdentity = 0;
                    break;
                }
            }
            else
            {
                if (matrix[i][j] == 0)
                {
                    isIdentity = 0;
                    break;
                }
            }
        }
        if (isIdentity == 0)
        {
            break;
        }
    }

    if (isIdentity == 0)
    {
        cout << "\nEntered Matrix is not an Identity Matrix" << endl;
    }
    else
    {
        cout << "\nEntered Matrix is an Identity Matrix" << endl;
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 1
	Column 2: 0
	Column 3: 0

Row 2	Column 1: 0
	Column 2: 1
	Column 3: 0

Row 3	Column 1: 0
	Column 2: 0
	Column 3: 1

Entered Matrix is an Identity Matrix
`
  },

  // Question 11
  {
    q: "Program to Transpose matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int row, column;

    cout << "Enter the size of the matrix: ";
    cout << "\nRows: ";
    cin >> row;
    cout << "Columns: ";
    cin >> column;

    int arr[row][column];

    for (int i = 0; i < row; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < column; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> arr[i][j];
        }
    }

    cout << "\nYour Entered Matix:" << endl;
    for (int i = 0; i < row; i++)
    {
        cout << "| ";
        for (int j = 0; j < column; j++)
        {
            cout << setw(5) << arr[i][j] << " ";
        }
        cout << "|\n";
    }
    cout << endl;

    // Transposing the string
    int transpose[column][row];
    for (int i = 0; i < column; i++)
    {
        for (int j = 0; j < row; j++)
        {
            transpose[i][j] = arr[j][i];
        }
    }

    cout << "\nTranspose Equivalent for your entered Matrix:" << endl;
    for (int i = 0; i < column; i++)
    {
        cout << "| ";
        for (int j = 0; j < row; j++)
        {
            cout << setw(5) << transpose[i][j] << " ";
        }
        cout << "|\n";
    }
}`,

    output:
`Enter the size of the matrix: 
Rows: 2
Columns: 3

Row 1	Column 1: 1
	Column 2: 2
	Column 3: 3

Row 2	Column 1: 4
	Column 2: 5
	Column 3: 6

Your Entered Matix:
|     1     2     3 |
|     4     5     6 |


Transpose Equivalent for your entered Matrix:
|     1     4 |
|     2     5 |
|     3     6 |`
  },

  // Question 12
  {
    q: "Program to determine whether a given matrix is a Sparse matrix",

    code:
`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int matrix[3][3];
    int zero = 0, nonZero = 0;
    int isIdentity = 1;
    cout << "Enter the values for the 3*3 matrix: " << endl;

    cout << "Matrix: ";
    for (int i = 0; i < 3; i++)
    {
        cout << "\nRow " << i + 1;
        for (int j = 0; j < 3; j++)
        {
            cout << "\tColumn " << j + 1 << ": ";
            cin >> matrix[i][j];
        }
    }

    // Checking The Matrices

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (matrix[i][j] == 0)
            {
                zero += 1;
            }
            else
            {
                nonZero += 1;
            }
        }
    }

    if (zero > nonZero)
    {
        cout << "\nEntered Matrix is a Sparse Matrix" << endl;
    }
    else
    {
        cout << "\nEntered Matrix is not a Sparse Matrix" << endl;
    }
}`,

    output:
`Enter the values for the 3*3 matrix: 
Matrix: 
Row 1	Column 1: 0
	Column 2: 0
	Column 3: 3

Row 2	Column 1: 0
	Column 2: 5
	Column 3: 0

Row 3	Column 1: 0
	Column 2: 0
	Column 3: 9

Entered Matrix is a Sparse Matrix
`
  },
])
database.array.questions=([ // Question 1
    {
        q: "Program to copy all elements of one array into another array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter the number of element: ";
    cin >> n;
    char ele[n];
    char ele2[n];
    cout << endl
         << "Enter the elementsa of array1: ";
    for (int i = 0; i < n; i++)
    {
        cin >> ele[i];
    }
    for (int i = 0; i < n; i++)
    {
        ele2[i] = ele[i];
    }
    cout << endl
         << "The copied array is: ";
    for (int i = 0; i < n; i++)
    {
        cout << ele2[i];
    }
}`,
        output:
            `Enter the number of element: 5

Enter the elementsa of array1: a b c d e

The copied array is: abcde`
    },
    // Question 2
    {
        q: "Program to find the frequency of each element in the array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int ele[] = {1, 2, 3, 4, 5, 3, 2, 43, 434, 3, 24, 352, 2, 4, 5, 2, 1, 4, 1, 2};
    int n = sizeof(ele) / sizeof(ele[0]);
    for (int i = 0; i < n; i++)
    {
        int count = 1;
        bool check = false;
        for (int k = 0; k < i; k++)
        {
            if (ele[i] == ele[k])
            {
                check = true;
                break;
            }
        }
        if (check)
        {
            continue;
        }
        for (int j = i + 1; j < n; j++)
        {
            if (ele[i] == ele[j])
            {
                count++;
            }
        }
        cout << ele[i] << " occurs at: " << count << " times" << endl;
    }
}`,
        output:
            `1 occurs at: 3 times
2 occurs at: 5 times
3 occurs at: 3 times
4 occurs at: 3 times
5 occurs at: 2 times
43 occurs at: 1 times
434 occurs at: 1 times
24 occurs at: 1 times
352 occurs at: 1 times`
    },
    // Question 3
    {
        q: "Program to left rotate the elements of an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 34, 325, 65, 47, 4, 3654, 74, 1244};
    int n = sizeof(arr) / sizeof(arr[0]);
    int first = arr[0];
    for (int i = 0; i < n - 1; i++)
    {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = first;
    cout << "Printing the elment to left rotate by 1" << endl;
    cout << "Final array: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}`,
        output:
            `Printing the elment to left rotate by 1
Final array: 
2 3 4 5 6 7 8 9 0 34 325 65 47 4 3654 74 1244 1 `
    },
    // Question 4
    {
        q: "Program to print the duplicate elements of an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int ele[] = {1, 2, 3, 4, 5, 3, 2, 43, 434, 3, 24, 352, 2, 4, 5, 2, 1, 4, 1, 2};
    int n = sizeof(ele) / sizeof(ele[0]);
    for (int i = 0; i < n; i++)
    {
        int count = 1;
        bool check = false;
        for (int k = 0; k < i; k++)
        {
            if (ele[i] == ele[k])
            {
                check = true;
                break;
            }
        }
        if (check)
        {
            continue;
        }
        for (int j = i + 1; j < n; j++)
        {
            if (ele[i] == ele[j])
            {
                count++;
            }
        }
        if (count > 1)
        {

            cout << ele[i] << " occurs at: " << count << " times" << endl;
        }
    }
}`,
        output:
            `1 occurs at: 3 times
2 occurs at: 5 times
3 occurs at: 3 times
4 occurs at: 3 times
5 occurs at: 2 times`
    },
    // Question 5
    {
        q: "Program to print the elements of an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {2, 4, 5, 6, 7, 8, 90, 34, 325, 6, 44, 7, 4, 34, 75, 42, 5, 5477, 55};
    int size = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}`,
        output:
            `2 4 5 6 7 8 90 34 325 6 44 7 4 34 75 42 5 5477 55 `
    },
    // Question 6
    {
        q: "Program to print the elements of an array in reverse order",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {2, 4, 5, 6, 7, 8, 9, 343, 7658, 234, 57, 23423, 54756, 3223, 434, 56, 6, 7, 8};
    int size = sizeof(arr) / sizeof(arr[0]);
    for (int i = size - 1; i >= 0; i--)
    {
        cout << arr[i] << " ";
    }
}`,
        output:
            `8 7 6 56 434 3223 54756 23423 57 234 7658 343 9 8 7 6 5 4 2 `
    },
    // Question 7
    {
        q: "Program to print the elements of an array present on even position",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter the number of elements you want to write in array ";
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << "\n"
         << "Printing at the even position " << endl;
    for (int i = 1; i < n; i = i + 2)
    {
        cout << arr[i] << endl;
    }
}`,
        output:
            `Enter the number of elements you want to write in array 6
10 20 30 40 50 60

Printing at the even position 
20
40
60`
    },
    // Question 8
    {
        q: "Program to print the elements of an array present on odd position",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter the number of elements you want to write in array ";
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << "\n"
         << "Printing at the odd position " << endl;
    for (int i = 0; i < n; i = i + 2)
    {
        cout << arr[i] << endl;
    }
}`,
        output:
            `Enter the number of elements you want to write in array 6
10 20 30 40 50 60

Printing at the odd position 
10
30
50`
    },
    // Question 9
    {
        q: "Program to print the largest element in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {2, 3, 4, 5, 6, 76, 86, 35, 76, 87, 45, 34, 54, 56, 24};
    int size = sizeof(arr) / sizeof(arr[0]);
    int max = arr[0];
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    cout << "The largest element is: " << max << endl;
}`,
        output:
            `The largest element is: 87`
    },
    // Question 10
    {
        q: "Program to print the smallest element in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {20, 3, 4, 5, 6, 76, 86, 35, 76, 87, 45, 34, 54, 56, 24};
    int size = sizeof(arr) / sizeof(arr[0]);
    int min = arr[0];
    for (int i = 0; i < size; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    cout << "The smallest element is: " << min << endl;
}`,
        output:
            `The smallest element is: 3`
    },
    // Question 11
    {
        q: "Program to print the number of elements present in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {22, 545, 657, 34, 54, 6, 767, 344, 65, 767, 87, 45, 5445, 5774, 4545, 43543, 5466, 5, 5, 5, 5, 44, 5, 665, 464, 65, 557, 75, 57, 56757};
    int count = sizeof(arr) / sizeof(arr[0]);
    cout << "The number of elements in array is: " << count;
}`,
        output:
            `The number of elements in array is: 30`
    },
    // Question 12
    {
        q: "Program to print the sum of all the items of the array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter the number of elements of array: ";
    cin >> n;
    cout << "\n";
    int arr[n];
    int sum = 0;
    cout << "Enter the data of array: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
        sum = sum + arr[i];
    }
    cout << endl
         << "The sum of elements are " << sum;
}`,
        output:
            `Enter the number of elements of array: 5

Enter the data of array: 10 20 30 40 50

The sum of elements are 150`
    },
    // Question 13
    {
        q: "Program to right rotate the elements of an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 34, 325, 65, 47, 4, 3654, 74, 1244};
    int n = sizeof(arr) / sizeof(arr[0]);
    int last = arr[n - 1];
    for (int i = n - 1; i > 0; i--)
    {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    cout << "Printing the elment to Right rotate by 1" << endl;
    cout << "Final Array: " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}`,
        output:
            `Printing the elment to Right rotate by 1
Final Array: 
1244 1 2 3 4 5 6 7 8 9 0 34 325 65 47 4 3654 74 `
    },
    // Question 14
    {
        q: "Program to sort the elements of an array in ascending order",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int arr[] = {2, 45, 34, 54, 67, 7, 443, 54, 657, 75, 34, 45, 65, 76, 34, 45, 45};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] > arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "Printing in ascending order: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}`,
        output:
            `Printing in ascending order: 2 7 34 34 34 45 45 45 45 54 54 65 67 75 76 443 657 `
    },
    // Question 15
    {
        q: "Program to sort the elements of an array in descending order",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int arr[] = {2, 45, 34, 54, 67, 7, 443, 54, 657, 75, 34, 45, 65, 76, 34, 45, 45};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] < arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "Printing in decending order: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}`,
        output:
            `Printing in decending order: 657 443 76 75 67 65 54 54 45 45 45 45 34 34 34 7 2 `
    },
    // Question 16
    {
        q: "Program to Find 3rd Largest Number in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {34, 67, 89, 34, 56, 78, 90, 23, 45, 67, 89, 23, 44, 687, 98, 45, 68, 345, 678, 4565, 4657, 7567, 4445, 455};
    int size = sizeof(arr) / sizeof(arr[0]);
    int first = 1, second = -2, third = -3;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > first)
        {
            third = second;
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] < first)
        {
            third = second;
            second = arr[i];
        }

        else if (arr[i] > third && arr[i] < second)
        {
            third = arr[i];
        }
    }
    cout << "The Third largest is: " << third << endl;
}`,
        output:
            `The Third largest is: 4565`
    },
    // Question 17
    {
        q: "Program to Find 2nd Largest Number in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {34, 67, 89, 34, 56, 78, 90, 23, 45, 6700, 89, 23, 8944, 687, 9899, 45, 6800, 345, 6078, 4565, 4657, 7567, 4445, 455};
    int size = sizeof(arr) / sizeof(arr[0]);
    int first = -1, second = -2;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > first)
        {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] < first)
        {
            second = arr[i];
        }
    }
    cout << "The second largest is: " << second;
}`,
        output:
            `The second largest is: 8944`
    },
    // Question 18
    {
        q: "Program to Find  Largest Number in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {34, 67, 89, 34, 56, 78, 90, 23, 45, 6700, 89, 23, 8944, 687, 9899, 45, 6800, 345, 6078, 4565, 4657, 7567, 4445, 455};
    int size = sizeof(arr) / sizeof(arr[0]);
    int first = arr[0];
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > first)
        {
            first = arr[i];
        }
    }
    cout << "The largest is: " << first << endl;
}`,
        output:
            `The largest is: 9899`
    },
    // Question 19
    {
        q: "C++ Program Find 2nd Smallest Number in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {20, 3, 4, 5, 6, 76, 86, 35, 76, 87, 2, 45, 34, 54, 56, 24};
    int size = sizeof(arr) / sizeof(arr[0]);
    int min = arr[0], min2 = arr[1];
    for (int i = 1; i < size; i++)
    {
        if (arr[i] < min)
        {
            min2 = min;
            min = arr[i];
        }
        else if (arr[i] < min2 && arr[i] > min)
        {
            min2 = arr[i];
        }
    }
    cout << "The 2nd smallest element is: " << min2 << endl;
}`,
        output:
            `The 2nd smallest element is: 3`
    },
    // Question 20
    {
        q: "Program to Find Smallest Number in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {20, 3, 4, 5, 6, 76, 86, 35, 76, 87, 45, 34, 54, 56, 24};
    int size = sizeof(arr) / sizeof(arr[0]);
    int min = arr[0];
    for (int i = 0; i < size; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    cout << "The smallest element is: " << min << endl;
}`,
        output:
            `The smallest element is: 3`
    },
    // Question 21
    {
        q: "Program to Remove Duplicate Element in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5, 8, 2, 9, 2, 5, 7, 6, 3, 12, 23, 34, 45, 12, 34, 45};
    int size = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] == arr[j])
            {
                for (int k = j; k < size - 1; k++)
                {
                    arr[k] = arr[k + 1];
                }
                size--;
                j--;
            }
        }
    }
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "The final array is: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}`,
        output:
            `The final array is: 1 2 3 4 5 6 7 8 9 12 23 34 45 `
    },
    // Question 22
    {
        q: "Program to Print Odd and Even Numbers from an array",
        code:
            `#include <iostream>
using namespace std;
int main(){
    int arr[]={2,4,5,6,7,8,3,4,45,67,778,98,32,45,657,878,23,44,668,23,44,657,89,23,54,768,23,57,243,65,243,65,768,34};
    int size = sizeof(arr)/sizeof(arr[0]);
    int even = 0;
    int odd =   0;
    for(int i=0;i<size;i++)
    {
        if(arr[i]%2==0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    int Even[even];
    int Odd[odd];
    int e=0,o=0;
    for(int i=0;i<size;i++)
    {
        if(arr[i]%2==0)
        {
            Even[e++]=arr[i];
        }
        else
        {
            Odd[o++]=arr[i];
        }
    }
    int evens = sizeof(Even)/sizeof(Even[0]);
    int odds= sizeof(Odd)/sizeof(Odd[0]);
    cout<<"The number of even number are: "<<even<<" and numbers are: ";
    for(int j=0;j<evens;j++)
    {
           cout<<Even[j]<<" ";             
    }
    cout<<endl<<"The number of odd number are: "<<odd<<" and numbers are: ";
    for(int j=0;j<odds;j++)
    {            
        cout<<Odd[j]<<" ";              
    }


}`,
        output:
            `The number of even number are: 16 and numbers are: 2 4 6 8 4 778 98 32 878 44 668 44 54 768 768 34 
The number of odd number are: 18 and numbers are: 5 7 3 45 67 45 657 23 23 657 89 23 23 57 243 65 243 65 `
    },
    // Question 23
    {
        q: "Write a C++ program to swap the first and last elements of an array and create a new array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 23, 345, 67, 89, 12, 34, 56, 78, 90};
    int size = sizeof(arr1) / sizeof(arr1[0]);
    int arr2[size];
    arr2[0] = arr1[size - 1];
    arr2[size - 1] = arr1[0];
    for (int i = 1; i < size - 1; i++)
    {
        arr2[i] = arr1[i];
    }
    cout << "The swapped array is: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr2[i] << " ";
    }
}`,
        output:
            `The swapped array is: 90 2 3 4 5 6 7 8 9 0 23 345 67 89 12 34 56 78 1 `
    },
    // Question 24
    {
        q: "Write a C++ program to count the number of even and odd elements in a given array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {2, 4, 5, 6, 7, 8, 3, 4, 45, 67, 778, 98, 32, 45, 657, 878, 23, 44, 668, 23, 44, 657, 89, 23, 54, 768, 23, 57, 243, 65, 243, 65, 768, 34};
    int size = sizeof(arr) / sizeof(arr[0]);
    int even = 0;
    int odd = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    cout << "The number of even element is: " << even << endl;
    cout << "The number of odd element is: " << odd;
}`,
        output:
            `The number of even element is: 16
The number of odd element is: 18`
    },
    // Question 25
    {
        q: "Write a C++ program to sum values of an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter the number of elements of array: ";
    cin >> n;
    cout << "\n";
    int arr[n];
    int sum = 0;
    cout << "Enter the data of array: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
        sum += arr[i];
    }
    cout << endl
         << "The sum of elements are " << sum;
}`,
        output:
            `Enter the number of elements of array: 5

Enter the data of array: 10 20 30 40 50

The sum of elements are 150`
    },
    // Question 26
    {
        q: "Write a C++ program to find the index of an array element",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int arr[] = {10, 20, 30, 40, 50, 345, 3, 4, 6, 7, 89, 34, 35, 76, 9, 34, 43, 5, 786, 33, 556, 8, 35, 56, 767, 35, 46, 35, 45, 67, 56, 656, 57, 564, 4};

    int n = sizeof(arr) / sizeof(arr[0]);

    int key;
    cout << "The elements of array is: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl
         << "Enter element to find: ";
    cin >> key;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] == key)
        {
            cout << endl
                 << "Element found at index: " << i;
            return 0;
        }
    }

    cout << endl
         << "Element not found";
}`,
        output:
            `The elements of array is: 10 20 30 40 50 345 3 4 6 7 89 34 35 76 9 34 43 5 786 33 556 8 35 56 767 35 46 35 45 67 56 656 57 564 4 
Enter element to find: 50

Element found at index: 4`
    },
    // Question 27
    {
        q: "Write a C++ program to calculate the average value of array elements",
        code:
            `#include <iostream>
using namespace std;
int main(){
    float arr[]={2,4,5,6,7,8,9,023,45,67,89,90,12,34,56,78,90,3,4,5,6,7,89};
    float size = sizeof(arr)/sizeof(arr[0]);
    float average=0;
    for(int i=0; i<size;i++)
    {
        average = average+arr[i];
    }
    cout<<"The average of the array element is: "<<average/size;
}`,
        output:
            `The average of the array element is: 32.1739`
    },
    // Question 28
    {
        q: "Write a C++ program to test if an array contains a specific value",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int arr[] = {10, 20, 30, 40, 50, 345, 3, 4, 6, 7, 89, 34, 35, 76, 9, 34, 43, 5, 786, 33, 556, 8, 35, 56, 767, 35, 46, 35, 45, 67, 56, 656, 57, 564, 4};

    int n = sizeof(arr) / sizeof(arr[0]);
    int key;

    cout << "\nEnter element to find: ";
    cin >> key;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] == key)
        {
            cout << "\nElement found";
            return 0;
        }
    }

    cout << "\nElement not found";
}`,
        output:
            `
Enter element to find: 50

Element found`
    },
    // Question 29
    {
        q: "Write a C++ program to find the maximum and minimum value of an array",
        code:
            `#include <iostream>
using namespace std;
int main(){
    int arr[]={2,3,4,5,6,76,86,35,76,87,45,34,54,56,24};
    int size = sizeof(arr)/sizeof(arr[0]);
    int max = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
     int min = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    cout<<"The smallest element is: "<<min<<endl;
    cout<<"The largest element is: "<<max<<endl;
    
}`,
        output:
            `The smallest element is: 2
The largest element is: 87`
    },
    // Question 30
    {
        q: "Write a C++ program to insert an element (specific position) into an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {34, 56, 7, 6, 34, 5, 7, 6, 7, 4, 6, 454, 6, 6, 67, 545, 65, 7, 6, 3, 57, 4, 56, 45, 7, 76, 8, 45, 45, 6, 6, 867, 56};
    int size = sizeof(arr) / sizeof(arr[0]);
    int write, data;
    cout << "The total size of array: " << size;
    cout << endl
         << "Enter the position of array you want to write: ";
    cin >> write;
    cout << endl
         << "Enter the data: ";
    cin >> data;

    if (write < size)
    {
        arr[write - 1] = data;
    }
    else
    {
        cout << endl
             << "Out of bounding box";
    }
    cout << endl
         << "Updated Array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}`,
        output:
            `The total size of array: 33
Enter the position of array you want to write: 5

Enter the data: 100

Updated Array: 34 56 7 6 100 5 7 6 7 4 6 454 6 6 67 545 65 7 6 3 57 4 56 45 7 76 8 45 45 6 6 867 56 `
    },
    // Question 31
    {
        q: "Write a C++ program to reverse an array of integer values",
        code:
            `#include<iostream>
using namespace std;
int main(){
    int arr[]={2,3,4,5,6,7,8,9,0,34,56,78,90,231,2,3,45,7,89,4,45,68,989,9,5,2,4,54};
    int size = sizeof(arr)/sizeof(arr[0]);

    cout<<"The original array is: ";
    for(int i=0;i<size;i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl<<"The reversed array is: ";
    for(int i=size-1;i>=0;i--)
    {
        cout<<arr[i]<<" ";
    }
}`,
        output:
            `The original array is: 2 3 4 5 6 7 8 9 0 34 56 78 90 231 2 3 45 7 89 4 45 68 989 9 5 2 4 54 
The reversed array is: 54 4 2 5 9 989 68 45 4 89 7 45 3 2 231 90 78 56 34 0 9 8 7 6 5 4 3 2 `
    },
    // Question 32
    {
        q: "Write a C++ program to find the common elements between two arrays",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int ifcommon = 0;

    int arr1[] = {2, 3, 6, 8, 9, 12, 56, 4, 89, 0, 12, 9};
    int arr2[] = {20, 3, 67, 86, 9, 12, 54, 6, 89, 00, 12, 99};

    int size1 = (sizeof(arr1) / sizeof(int));
    int size2 = (sizeof(arr2) / sizeof(int));

    cout << "Common Elements Between Two arrays:- " << endl;
    for (int i = 0; i < size1; i++)
    {
        for (int j = 0; j < size2; j++)
        {
            if (arr1[i] == arr2[j])
            {
                ifcommon = 1;
                cout << arr1[i] << endl;
                break;
            }
        }
    }

    if (ifcommon == 0)
    {
        cout << "No Common Element Found! ";
    }
}`,
        output:
            `Common Elements Between Two arrays:- 
3
6
9
12
89
0
12
9`
    },
    // Question 33
    {
        q: "Write a C++ program to find the duplicate values of an array of integer values",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int ele[] = {1, 2, 3, 4, 5, 3, 2, 43, 434, 3, 24, 352, 2, 4, 5, 2, 1, 4, 1, 2};
    int n = sizeof(ele) / sizeof(ele[0]);
    for (int i = 0; i < n; i++)
    {
        int count = 1;
        bool check = false;
        for (int k = 0; k < i; k++)
        {
            if (ele[i] == ele[k])
            {
                check = true;
                break;
            }
        }
        if (check)
        {
            continue;
        }
        for (int j = i + 1; j < n; j++)
        {
            if (ele[i] == ele[j])
            {
                count++;
            }
        }
        if (count > 1)
        {

            cout << ele[i] << " occurs at: " << count << " times" << endl;
        }
    }
}`,
        output:
            `1 occurs at: 3 times
2 occurs at: 5 times
3 occurs at: 3 times
4 occurs at: 3 times
5 occurs at: 2 times`
    },
    // Question 34
    {
        q: "Write a C++ program to find second largest number from the array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {34, 67, 89, 34, 56, 78, 90, 23, 45, 6700, 89, 23, 8944, 687, 9899, 45, 6800, 345, 6078, 4565, 4657, 7567, 4445, 455};
    int size = sizeof(arr) / sizeof(arr[0]);
    int first = -1, second = -2;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > first)
        {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] < first)
        {
            second = arr[i];
        }
    }
    cout << "The second largest Number is: " << second;
}`,
        output:
            `The second largest Number is: 8944`
    },
    // Question 35
    {
        q: "Write a C++ program to find second lowest number from the array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {20, 3, 4, 5, 6, 76, 86, 35, 76, 87, 2, 45, 34, 54, 56, 24};
    int size = sizeof(arr) / sizeof(arr[0]);
    int min = arr[0], min2 = arr[1];
    for (int i = 1; i < size; i++)
    {
        if (arr[i] < min)
        {
            min2 = min;
            min = arr[i];
        }
        else if (arr[i] < min2)
        {
            min2 = arr[i];
        }
    }
    cout << "The 2nd lowest Number is: " << min2 << endl;
}`,
        output:
            `The 2nd lowest Number is: 3`
    },
    // Question 36
    {
        q: "Write a C++ program to find the number of even and odd integers in a given array of integers",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {2, 4, 5, 6, 7, 8, 3, 4, 45, 67, 778, 98, 32, 45, 657, 878, 23, 44, 668, 23, 44, 657, 89, 23, 54, 768, 23, 57, 243, 65, 243, 65, 768, 34};
    int size = sizeof(arr) / sizeof(arr[0]);
    int even = 0;
    int odd = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    cout << "The number of even Integers is: " << even << endl;
    cout << "The number of odd Integers is: " << odd;
}`,
        output:
            `The number of even Integers is: 16
The number of odd Integers is: 18`
    },
    // Question 37
    {
        q: "Write a C++ program to get the difference between the largest and smallest values in an array of integers",
        code:
            `#include <iostream>
using namespace std;
int main(){
    int arr[]={2,3,4,5,6,76,86,35,76,87,45,34,54,56,24};
    int size = sizeof(arr)/sizeof(arr[0]);
    int max = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
     int min = arr[0];
    for(int i=0;i<size;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    cout<<"The Difference of Maximum: "<<max<<" and Minimum: "<<min<<" is "<<max-min;
    
}`,
        output:
            `The Difference of Maximum: 87 and Minimum: 2 is 85`
    },
    // Question 38
    {
        q: "Write a C++ program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",
        code:
            `#include <iostream>
using namespace std;

int main() {
    int arr[] = {0, 1, 0, 1, 1, 0, 0, 1,0,1,1,1,1,1,0,0,0,0,0,0};
    int n = sizeof(arr) / sizeof(arr[0]);

    int left = 0, right = n - 1;

    while (left < right) {
        
        while (arr[left] == 0 && left < right) {
            left++;
        }

        
        while (arr[right] == 1 && left < right) {
            right--;
        }

       
        if (left < right) {
            swap(arr[left], arr[right]);
            left++;
            right--;
        }
    }

    
    cout << "Segregated array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}`,
        output:
            `Segregated array: 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 `
    },
    // Question 39
    {
        q: "Write a C++ program to cyclically rotate a given array clockwise by one",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {3, 4, 56, 76, 34, 56, 87, 90, 1, 2, 3, 4, 5, 6, 7, 8, 0, 90, 78, 56, 34, 23, 43};
    int size = sizeof(arr) / sizeof(arr[0]);
    int right = arr[size - 1];
    cout << "The original array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    for (int i = size - 1; i > 0; i--)
    {
        arr[i] = arr[i - 1];
    }
    arr[0] = right;
    cout << endl
         << "The Rotated array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}`,
        output:
            `The original array: 3 4 56 76 34 56 87 90 1 2 3 4 5 6 7 8 0 90 78 56 34 23 43 
The Rotated array: 43 3 4 56 76 34 56 87 90 1 2 3 4 5 6 7 8 0 90 78 56 34 23 `
    },
    // Question 40
    {
        q: "Write a C++ program to print all unique element in an array",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    int arr[] = {34, 56, 7, 8, 1, 2, 3, 4, 5, 6, 8, 9, 80, 1, 2, 3, 4, 5, 6, 7, 8, 91, 2, 3, 4, 5, 6, 7, 8, 12, 3, 45, 56, 78, 90, 23};
    int unique;
    int size = sizeof(arr) / sizeof(arr[0]);
    cout << "The unique elements are: ";
    for (int i = 0; i < size; i++)
    {
        unique = 1;
        for (int j = 0; j < size; j++)
        {
            if (i != j)
            {
                if (arr[i] == arr[j])
                {
                    unique = 0;
                    break;
                }
            }
        }
        if (unique == 1)
        {
            cout << arr[i] << endl;
        }
    }
}`,
        output:
            `The unique elements are: 34
9
80
91
12
45
78
90
23`
    },
    // Question 41
    {
        q: "Write a C++ Program to Sort the Array in an Ascending Order",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int arr[] = {2, 45, 34, 54, 67, 7, 443, 54, 657, 75, 34, 45, 65, 76, 34, 45, 45};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] > arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "Printing in ascending order: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}`,
        output:
            `Printing in ascending order: 2 7 34 34 34 45 45 45 45 54 54 65 67 75 76 443 657 `
    },
    // Question 42
    {
        q: "Write a C++ Program to Sort the Array in an Descending Order",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int arr[] = {2, 45, 34, 54, 67, 7, 443, 54, 657, 75, 34, 45, 65, 76, 34, 45, 45};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size - 1; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] < arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << "Printing in descending order: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}`,
        output:
            `Printing in descending order: 657 443 76 75 67 65 54 54 45 45 45 45 34 34 34 7 2 `
    },
    // Question 43
    {
        q: "Write a C++ Program to Search Key Elements in an Array",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    int arr[] = {10, 20, 30, 40, 50, 345, 3, 4, 6, 7, 89, 34, 35, 76, 9, 34, 43, 5, 786, 33, 556, 8, 35, 56, 767, 35, 46, 35, 45, 67, 56, 656, 57, 564, 4};

    int n = sizeof(arr) / sizeof(arr[0]);
    int key;

    cout << "\nEnter element to find: ";
    cin >> key;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] == key)
        {
            cout << "\nElement found";
            return 0;
        }
    }

    cout << "\nElement not found";
}`,
        output:
            `
Enter element to find: 50

Element found`
    },])
database.oop.questions=([// Question 1
    {
        q: "Write a C++ program to create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
class person
{
    int age;
    char name[20];

public:
    person(char n[], int a)
    {
        strcpy(name, n);
        age = a;
        cout << "name :" << name << endl;
        cout << "age :" << age << endl;
    }
};
int main()
{
    person p("allu", 18);
    person p1("arjun", 28);
    return 0;
}`,
        output:
            `name :allu
age :18
name :arjun
age :28`
    },
    // Question 2
    {
        q: "Write a C++ program to create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
class dog
{
    string name;
    string breed;

public:
    dog() {}
    dog(string n, string b)
    {
        name = n;
        breed = b;
        cout << "name :" << name << endl;
        cout << "breed :" << breed << endl;
    }
    void setNewdata()
    {
        cout << "enter the new name :";
        cin >> name;
        cout << "enter the breed :";
        cin >> breed;
    }
    void display()
    {
        cout << "name :" << name << endl;
        cout << "breed :" << breed << endl;
    }
};

int main()
{
    cout << "with constructor--->" << endl;
    dog d1("monty", "pitbull");
    cout << "with the setter function--->" << endl;
    dog d2;
    d2.setNewdata();
    d2.display();
    return 0;
}`,
        output:
            `with constructor--->
name :monty
breed :pitbull
with the setter function--->
enter the new name :rocky
enter the breed :labrador
name :rocky
breed :labrador`
    },
    // Question 3
    {
        q: "Write a C++ program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle.",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

class rectangle
{
    int width, height, area, perimeter;

public:
    void setdata()
    {
        cout << "enter the width :";
        cin >> width;
        cout << "enter the height :";
        cin >> height;
    }
    int getarea()
    {
        area = height * width;
    }
    int getperimeter()
    {
        perimeter = 2 * height * width;
    }
    void display()
    {
        cout << "area of the rectangle :" << area << endl;
        cout << "perimeter of the rectangle :" << perimeter << endl;
    }
};
int main()
{
    rectangle r;
    r.setdata();
    r.getarea();
    r.getperimeter();
    r.display();
    return 0;
}`,
        output:
            `enter the width :5
enter the height :10
area of the rectangle :50
perimeter of the rectangle :100`
    },
    // Question 4
    {
        q: "Write a C++ program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
const float pi = 3.14;

class circle
{
    float radius, area, c;

public:
    void setdata()
    {
        cout << "enter the radius :";
        cin >> radius;
    }
    int getarea()
    {
        area = pi * radius * radius;
    }
    int getperimeter()
    {
        c = 2 * pi * radius;
    }
    void display()
    {
        cout << "area of the circle :" << area << endl;
        cout << "circumfrence of the circle :" << c << endl;
    }
};
int main()
{
    circle c;
    c.setdata();
    c.getarea();
    c.getperimeter();
    c.display();
    return 0;
}`,
        output:
            `enter the radius :7
area of the circle :153.86
circumfrence of the circle :43.96`
    },
    // Question 5
    {
        q: "Write a C++ program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",

        code:
            `#include <iostream>
#include <cstring>
using namespace std;

class book
{
    string title, author, ISBN;

public:
    static int bookcount;
    book() {}
    void addBook(string t, string a, string i)
    {
        title = t;
        author = a;
        ISBN = i;

        bookcount++;
    }

    string getISBN()
    {
        return ISBN;
    }
    void display()
    {
        cout << "Title :" << title << endl;
        cout << "Author :" << author << endl;
        cout << "ISBN :" << ISBN << endl;
    }
};

int book ::bookcount = 0;
book collection[50];

void addbook();
void removebook();
void showbook();

int main()
{
    int choice = 1;

    cin.ignore();
    while (choice)
    {
        cout << "1) Add a Book" << endl;
        cout << "2) Delete a Book" << endl;
        cout << "3) Display all Books" << endl;
        cout << "0) Exit the Menu/Program" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            addbook();
            break;
        case 2:
            removebook();
            break;
        case 3:
            showbook();
            break;

        default:
            break;
        }
    }

    return 0;
}

void addbook()
{
    string title, author, ISBN;

    if (book::bookcount > sizeof(collection))
    {
        cout << "Collection space full" << endl;
        return;
    }

    cout << "Enter Book details: " << endl;
    cout << "Title: ";
    getline(cin, title);
    cout << "Author: ";
    getline(cin, author);
    cout << "ISBN: ";
    cin >> ISBN;

    collection[book::bookcount].addBook(title, author, ISBN);

    cout << "Book Added ";
}

void removebook()
{
    string ISBN;
    int isFound = 0;
    int i;

    cout << "Enter ISBN for the book to delete: ";
    cin >> ISBN;

    for (i = 0; i < book::bookcount; i++)
    {
        if (ISBN == (collection[i].getISBN()))
        {
            isFound = 1;
            break;
        }
    }

    if (isFound)
    {
        for (int j = i; j < book::bookcount - 1; j++)
        {
            collection[j] = collection[j + 1];
        }

        cout << "Book Deleted! ";
        book::bookcount--;
    }
}

void showbook()
{
    for (int i = 0; i < book::bookcount; i++)
    {
        collection[i].display();
    }
    cout << endl;
}`,

        output:
            `1) Add a Book
2) Delete a Book
3) Display all Books
0) Exit the Menu/Program
Enter your choice: 1
Enter Book details: 
Title: C++ Primer
Author: Lippman
ISBN: 12345
Book Added 1) Add a Book
2) Delete a Book
3) Display all Books
0) Exit the Menu/Program
Enter your choice: 3
Title :C++ Primer
Author :Lippman
ISBN :12345

1) Add a Book
2) Delete a Book
3) Display all Books
0) Exit the Menu/Program
Enter your choice: 0`
    },
    // Question 6
    {
        q: "Write a C++ program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",
        code:
            `#include<iostream>
#include<cstring>
using namespace std;

class employee
{
    string name,job,title;
    float salary;
    public:
    employee(){}
    employee(string n,string j,string t,float s)
    {
        name=n;
        job=j;
        title=t;
        salary=s;
    }
    void updatesalary(float newsalary)
    {
        salary = newsalary;
    }
    float calculatesalary(float bonus)
    {
        return bonus + salary;
    }
    void display()
    {
        cout<<"name :"<<name<<endl;
        cout<<"job :"<<job<<endl;
        cout<<"title :"<<title<<endl;
        cout<<"salary :"<<salary<<endl;
        

    }

};

int main()
{
    employee e("allu","developer","senior",80000);
    e.display();
    cout<<"\nupdating salary---->"<<endl;
    e.updatesalary(95000);
    e.display();
    cout<<"\ncalculating salary---->"<<endl;
    cout<<"salary after bonus :"<<e.calculatesalary(50000)<<endl;
    
    return 0;
}`,
        output:
            `name :allu
job :developer
title :senior
salary :80000

updating salary---->
name :allu
job :developer
title :senior
salary :95000

calculating salary---->
salary after bonus :145000`
    },
    // Question 7
    {
        q: "Write a C++ program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",

        code:
            `#include <iostream>
using namespace std;

class account
{
private:
    int accountNumber;
    string name;
    int balance;

public:
    static int nextAccountNumber;
    account() {}
    void makeaccount(int &bal, string &nam)
    {
        balance = bal;
        name = nam;
        accountNumber = nextAccountNumber;
        nextAccountNumber++;
    }

    int getaccountnumber()
    {
        return accountNumber;
    }

    int getbalance()
    {
        return balance;
    }
    
    string getname()
    {
        return name;
    }

    void setdetail(int bal, int acc, string nam)
    {
        balance = bal;
        name = nam;
        accountNumber = acc;
    }

    void withdraw(int &amt)
    {
        if (amt <= balance)
        {
            balance -= amt;
            cout << "Money withdrawn succesfully";
        }
        else
        {
            cout << "Insuffecient Balance";
        }
    }

    void deposit(int &amt)
    {
        balance += amt;
        cout << "Money deposited succesfully";
    }
};

int account::nextAccountNumber = 1;

class bank
{
private:
    account collection[100];

public:
    static int accountCount;

    void addaccount()
    {
        string name;
        int initbal;

        cout << "Enter Account holder Name: ";
        getline(cin, name);
        cout << "Enter Initial Balance: ";
        cin >> initbal;

        collection[accountCount].makeaccount(initbal, name);
        accountCount++;
    }

    void withdraw()
    {
        int acc, amt, isFound = 0, i;

        cout << "Enter Account number:";
        cin >> acc;

        for (i = 0; i < accountCount; i++)
        {
            if (acc == collection[i].getaccountnumber())
            {
                isFound = 1;
                break;
            }
        }

        if (isFound)
        {
            cout << "Account Found!" << endl;
            cout << "Enter Amount: ";
            cin >> amt;

            collection[i].withdraw(amt);
        }
    }

    void deposit()
    {
        int acc, amt, isFound = 0, i;

        cout << "Enter Account number:";
        cin >> acc;

        for (i = 0; i < accountCount; i++)
        {
            if (acc == collection[i].getaccountnumber())
            {
                isFound = 1;
                break;
            }
        }

        if (isFound)
        {
            cout << "Account Found!" << endl;
            cout << "Enter Amount: ";
            cin >> amt;

            collection[i].deposit(amt);
        }
    }

    void removeaccount()
    {
        int acc, i, isFound = 0;

        cout << "Enter Account Number: ";
        cin >> acc;

        for (i = 0; i < accountCount; i++)
        {
            if (acc == collection[i].getaccountnumber())
            {
                isFound = 1;
                break;
            }
        }

        if (isFound)
        {
            for (int j = i; j < accountCount; j++)
            {
                collection[j].setdetail((collection[j + 1].getbalance()), (collection[j + 1].getaccountnumber()), (collection[j + 1].getname()));
            }

            cout << "Account Removed";
            accountCount--;
        }
    }
};

int bank::accountCount = 0;

int main()
{
    class bank IOB;
    int choice = 1;

    while (choice)
    {
        cout << "1) Add a account" << endl;
        cout << "2) Remove a Account" << endl;
        cout << "3) Withdraw Money from an account" << endl;
        cout << "4) Deposit Money from an account" << endl;
        cout << "0) Exit the Menu/Program" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            IOB.addaccount();
            break;
        case 2:
            IOB.removeaccount();
            break;
        case 3:
            IOB.withdraw();
            break;
        case 4:
            IOB.deposit();
            break;
        default:
            break;
        }
    }

    return 0;
}`,

        output:
            `1) Add a account
2) Remove a Account
3) Withdraw Money from an account
4) Deposit Money from an account
0) Exit the Menu/Program
Enter your choice: 1
Enter Account holder Name: John
Enter Initial Balance: 1000
1) Add a account
2) Remove a Account
3) Withdraw Money from an account
4) Deposit Money from an account
0) Exit the Menu/Program
Enter your choice: 4
Enter Account number:1
Account Found!
Enter Amount: 500
Money deposited succesfully1) Add a account
2) Remove a Account
3) Withdraw Money from an account
4) Deposit Money from an account
0) Exit the Menu/Program
Enter your choice: 3
Enter Account number:1
Account Found!
Enter Amount: 300
Money withdrawn succesfully1) Add a account
2) Remove a Account
3) Withdraw Money from an account
4) Deposit Money from an account
0) Exit the Menu/Program
Enter your choice: 0`
    },
    // Question 8
    {
        q: "Write a C++ program to create a class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",
        code:
            `#include<iostream>
#include<cstring>
using namespace std;

class trafficlight{
    string color;
    int duration;
    public:
    trafficlight(string c, int t)
    {
        color=c;
        duration=t;

    }

    void setcolor(string newcolor)
    {
        string red,green;
        color = newcolor;
        if(color=="red")
        {
            cout<<"stop!"<<endl;
        }
        else if(color=="green")
        {
            cout<<"go!"<<endl;
        }
        else
        {
            cout<<"wait-- until green"<<endl;
        }
        
    }
    void display()
    {
        cout<<"color :"<<color<<endl;
        cout<<"duration :"<<duration<<endl;
    }
    
};

int main()
{
    trafficlight t("red",20);
    t.display();
    cout<<"\nchanging color---\n";
    t.setcolor("green");
    t.display();
    return 0;

}`,
        output:
            `color :red
duration :20

changing color---
go!
color :green
duration :20`
    },
    // Question 9
    {
        q: "Write a C++ program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",
        code:
            `#include<iostream>
#include<cstring>

using namespace std;
class employee
{
    string name;
    int date_of_hiring;
    int salary;
    public:
    employee(string n,int h,int s)
    {
        name=n;
        date_of_hiring=h;
        salary=s;
    }
    int yearsOfService()
    {
        int currentYear=2026;
   return (currentYear-date_of_hiring);
    }
    void display()
    {
        cout<<"name :"<<name<<endl;
        cout<<"salary :"<<salary<<endl;
        cout<<"date of hiring :"<<date_of_hiring<<endl;
    }
};
int main()
{
    employee e("allu",2012,80000);
    e.display();
    cout<<"years of services :"<<e.yearsOfService();

return 0;
}`,
        output:
            `name :allu
salary :80000
date of hiring :2012
years of services :14`
    },
    // Question 10
    {
        q: "Write a C++ program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",
        code:
            `#include<iostream>
using namespace std;

class Student
{
    string name;
    string grade;
    string courses[10];
    int courseCount;

public:

    Student(string n,string g)
    {
        name = n;
        grade = g;
        courseCount = 0;
    }

    void addCourse(string course)
    {
        courses[courseCount] = course;
        courseCount++;
    }

    void removeCourse(string course)
    {
        for(int i=0;i<courseCount;i++)
        {
            if(courses[i] == course)
            {
                for(int j=i;j<courseCount-1;j++)
                {
                    courses[j] = courses[j+1];
                }
                courseCount--;
                cout<<"Course removed"<<endl;
                return;
            }
        }
    }

    void display()
    {
        cout<<"Name : "<<name<<endl;
        cout<<"Grade : "<<grade<<endl;

        cout<<"Courses : "<<endl;
        for(int i=0;i<courseCount;i++)
        {
            cout<<courses[i]<<endl;
        }
    }
};

int main()
{
    Student s("Armaan","A");

    s.addCourse("Math");
    s.addCourse("Physics");
    s.addCourse("Computer");

    cout<<"Student Details"<<endl;
    s.display();

    cout<<"\nRemoving course Physics\n";
    s.removeCourse("Physics");

    cout<<"\nUpdated Details"<<endl;
    s.display();

    return 0;
}`,
        output:
            `Student Details
Name : Armaan
Grade : A
Courses : 
Math
Physics
Computer

Removing course Physics
Course removed

Updated Details
Name : Armaan
Grade : A
Courses : 
Math
Computer`
    },
    // Question 11
    {
        q: "Write a C++ program to create a class called \"Library\" with a collection of books and methods to add and remove books.",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

class library
{
    string books[10];
    int count = 0;

public:
    void addbook(string b)
    {
        books[count] = b;
        count++;
        cout << "book added succesfully!!!" << endl;
    }
    void removebook(string book)
    {
        for (int i = 0; i < count; i++)
        {
            if (books[i] == book)
            {
                for (int j = i; j < count - 1; j++) // for shifting into the array
                {
                    books[j] = books[j + 1];
                }
                count--; // reduce total book count
                cout << "\nsuccesfully removed the book\n";
            }
        }
    }
    void displayBooks()
    {
        cout << "Books in Library:" << endl;

        for (int i = 0; i < count; i++)
        {
            cout << books[i] << endl;
        }
    }
};
int main()
{
    library l;
    l.addbook("math");
    l.addbook("physics");
    l.addbook("chemistry");
    l.displayBooks();
    cout << "\nremoving a book\n";
    l.removebook("physics");
    cout << "\n updated library\n";
    l.displayBooks();
    return 0;
}`,
        output:
            `book added succesfully!!!
book added succesfully!!!
book added succesfully!!!
Books in Library:
math
physics
chemistry

removing a book

succesfully removed the book

 updated library
Books in Library:
math
chemistry`
    },
    // Question 12
    {
        q: "Write a C++ program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
        code:
            `#include <iostream>
#include <string>
using namespace std;

class Airplane {
private:
    string flightNumber;
    string destination;
    string departureTime;
    bool delayed;

public:
    // Constructor
    Airplane(string fn, string dest, string time) {
        flightNumber = fn;
        destination = dest;
        departureTime = time;
        delayed = false;
    }

    // Method to check flight status
    void checkStatus() {
        cout << "Flight Number: " << flightNumber << endl;
        cout << "Destination: " << destination << endl;
        cout << "Departure Time: " << departureTime << endl;

        if (delayed)
            cout << "Status: Delayed" << endl;
        else
            cout << "Status: On Time" << endl;
    }

    // Method to delay the flight
    void delayFlight() {
        delayed = true;
        cout << "Flight " << flightNumber << " has been delayed." << endl;
    }
};

int main() {
    // Create an Airplane object
    Airplane flight1("AI202", "New York", "10:30 AM");

    cout << "Initial Flight Status:\n";
    flight1.checkStatus();

    cout << "\nDelaying the flight...\n";
    flight1.delayFlight();

    cout << "\nUpdated Flight Status:\n";
    flight1.checkStatus();

    return 0;
}`,
        output:
            `Initial Flight Status:
Flight Number: AI202
Destination: New York
Departure Time: 10:30 AM
Status: On Time

Delaying the flight...
Flight AI202 has been delayed.

Updated Flight Status:
Flight Number: AI202
Destination: New York
Departure Time: 10:30 AM
Status: Delayed`
    },
    // Question 13
    {
        q: "Write a C++ program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",
        code:
            `#include <iostream>
#include <string>
using namespace std;

class inventory
{
   
  string product[5];
  int total_product=0;

  public:
  int i=0;
  void addproduct(string p)
  {
    product[total_product]=p;
    total_product++;
   
  }
  void details()
  {
    cout<<"\n-----product details----\n";
    for(int i=0;i<total_product;i++)
    {
        cout<<"product"<<i+1<<" :"<<product[i]<<endl;
    }
  }
  void removeproduct(string p)
  {
    for(int i=0;i<total_product;i++)
    {
        if(product[i]==p)
        {
            for(int j=i;j<total_product-1;j++)
            {
                product[total_product]=product[total_product+1];
            }
          
        }
          total_product--;
            cout<<"product removed";
    }
   
  }
  void checkstock(int t)
  {
    if(total_product == t)
    {
     cout<<"stock is full.";

    }
    else{
        cout<<"stock is less";
    }
  }
  

};
int main()
{
    inventory i;
    i.addproduct("shampoo");
    i.addproduct("toothpaste");
    i.addproduct("oil");
    i.addproduct("pulses");
     cout<<"\n-----products added---\n";
    i.details();
    cout<<"\n----removing products----\n";
    i.removeproduct("oil");
    i.details();
    i.checkstock(3);
    return 0;

}`,
        output:
            `
-----products added---

-----product details----
product1 :shampoo
product2 :toothpaste
product3 :oil
product4 :pulses

----removing products----
product removedproduct removed
-----product details----
product1 :shampoo
product2 :toothpaste
stock is less`
    },
    // Question 14
    {
        q: "Write a C++ program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
        code:
            `#include <iostream>
#include <string>
using namespace std;

 class school
 {
    
    string students[5],teachers[5],classes[5];
    int count_s=0;
    int count_t=0;
    int count_c=0;
    public:
    void addstudents(string s)
    {
        students[count_s]=s;
        count_s++;
    }
    void removestudents(string s)
    {
        for(int i=0;i<count_s;i++)
        {
            if(students[i]==s)
            {
                for(int j=i;j<count_s-1;j++)
                {
                    students[j]=students[j+1];//this create duplicate of the removed continusly
                    //funtil last one delete automatically
                }
count_s--;
            cout<<"student removed"<<endl;
            }
            
        }
    }
    void addteachers(string t)
    {
        teachers[count_t]=t;
        count_t++;
    }
    void removeteacher(string t)
    {
        for(int i=0;i<count_t;i++)
        {
            if(teachers[i]==t)
            {
                for(int j=i;j<count_t-1;j++)
                {
                    teachers[j]=teachers[j+1];//this create duplicate of the removed continusly
                    //funtil last one delete automatically
                }
count_t--;
            cout<<"teacher's removed"<<endl;
            }
            
        }
    }
    void addclass(string c)
    {
        classes[count_c]=c;
        count_c++;
    }
    void removeclass(string c)
    {
        for(int i=0;i<count_c;i++)
        {
            if(classes[i]==c)
            {
                for(int j=i;j<count_c-1;j++)
                {
                    classes[j]=classes[j+1];//this create duplicate of the removed continusly
                    //funtil last one delete automatically
                }
 count_c--;
            cout<<"classes removed"<<endl;
            }
           
        }
    }
     void displaystudents()
    {
        cout<<"\nStudents:\n";
        for(int i=0;i<count_s;i++)
        {
            cout<<students[i]<<endl;
        }
    }

    void displayteachers()
    {
        cout<<"\nTeachers:\n";
        for(int i=0;i<count_t;i++)
        {
            cout<<teachers[i]<<endl;
        }
    }

    void displayclasses()
    {
        cout<<"\nClasses:\n";
        for(int i=0;i<count_c;i++)
        {
            cout<<classes[i]<<endl;
        }
    }



 };
 int main()
 {
school s;
s.addstudents("allu");
s.addstudents("arjun");
s.addstudents("rampal");
s.addteachers("Mr.krrish");
s.addteachers("Mr.spiderman");
s.addclass("bca");
s.removestudents("arjun");
s.removeteacher("Mr.spiderman");

s.displaystudents();
s.displayteachers();
s.displayclasses();

return 0;   
 }`,
        output:
            `student removed
teacher's removed

Students:
allu
rampal

Teachers:
Mr.krrish

Classes:
bca`
    },
    // Question 15
    {
        q: "Write a C++ program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.",
        code:
            `#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

class MusicLibrary
{
    string songs[10];
    int count = 0;

public:

    void addsong(string s)
    {
        if(count < 10)
        {
            songs[count] = s;
            count++;
            cout << "Song added\n";
        }
        else
        {
            cout << "Library full\n";
        }
    }

    void removesong(string s)
    {
        for(int i = 0; i < count; i++)
        {
            if(songs[i] == s)
            {
                for(int j = i; j < count-1; j++)
                {
                    songs[j] = songs[j+1];
                }

                count--;
                cout << "Song removed\n";
                return;
            }
        }

        cout << "Song not found\n";
    }

    void playrandomsong()
    {
        if(count == 0)
        {
            cout << "No songs in library\n";
            return;
        }

        srand(time(0));
        int r = rand() % count;//this give random value from (0-n)

        cout << "Now playing: " << songs[r] << endl;
    }

    void displaysongs()
    {
        cout << "\nSongs in Library:\n";
        for(int i = 0; i < count; i++)
        {
            cout << songs[i] << endl;
        }
    }
};

int main()
{
    MusicLibrary m;

    m.addsong("blinding light");
    m.addsong("one dance");
    m.addsong("ben 10");

    m.displaysongs();

    m.playrandomsong();

    m.removesong("Believer");

    m.displaysongs();

    return 0;
}`,
        output:
            `Song added
Song added
Song added

Songs in Library:
blinding light
one dance
ben 10
Now playing: one dance
Song not found

Songs in Library:
blinding light
one dance
ben 10`
    },
    // Question 16
    {
        q: "Write a C++ program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",
        code:
            `#include <iostream>
using namespace std;
class shape
{

public:
    virtual void area() = 0;
    virtual void perimeter() = 0;
};
class rectangle : public shape
{
    int area_r, perimeter_r;
    int l, b;

public:
    void area() override
    {

        cout << "enter the length and breadth of rectangle :";
        cin >> l >> b;
        area_r = l * b;
        cout << "area of the rectangle :" << area_r << endl;
    }
    void perimeter() override
    {

        perimeter_r = 2 * (l + b);
        cout << "perimeter of the rectangle :" << perimeter_r << endl;
    }
};
class circle : public shape
{
    float area_c, perimeter_c, r;

public:
    const float pi = 3.145;
    void area() override
    {
        cout << "enter the radius :";
        cin >> r;
        area_c = pi * r * r;
        cout << "the area of the circle :" << area_c << endl;
    }
    void perimeter() override
    {
        perimeter_c = 2 * pi * r;
        cout << "circumfrence of the circle :" << perimeter_c << endl;
    }
};
class triangle : public shape
{
    int height, side, area_t, perimeter_t;

public:
    void area() override{
        cout << "enter the height and side of the triangle : ";
        cin>>height>>side;
        area_t=(height+side)/2;
        cout<<"area of the triangle :"<<area_t<<endl;
}
void perimeter() override{
    perimeter_t=side+side+side;
    cout<<"perimeter of the triangle :"<<perimeter_t<<endl;
}
};

int main()
{
    rectangle r;
    cout<<"\n-------rectangle----\n";
    r.area();
    r.perimeter();
    circle c;
    cout<<"\n-------circle----\n";
    c.area();
    c.perimeter();
    triangle t;
    cout<<"\n-------triangle----\n";
    t.area();
    t.perimeter();

    return 0;
      
}`,
        output:
            `
-------rectangle----
enter the length and breadth of rectangle :5 10
area of the rectangle :50
perimeter of the rectangle :30

-------circle----
enter the radius :7
the area of the circle :153.965
circumfrence of the circle :43.99

-------triangle----
enter the height and side of the triangle : 6 8
area of the triangle :7
perimeter of the triangle :24`
    },
    // Question 17
    {
        q: "Write a C++ program to create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
        code:
            `#include <iostream>
using namespace std;
class movie{
    string title,director,actors,review[5];
    int count_r=0;
    public:
    movie(string t,string d,string a)
    {
        title=t;
        director=d;
        actors=a;
    }
    void addreview(string r)
    {
      review[count_r]=r;
      count_r++;
      
    }
    void RemoveReview(string r)
    {
       for(int i=0;i<count_r;i++)
       {
        if(review[i]==r)
        {
            for(int j=i;j<count_r-1;j++)
            {
                review[i]=review[i+1];
            }
            count_r--;
            cout<<"review removed";
        }
       } 
    }
    void displaytitle()
    {

{
    cout<<"movie  :"<<title<<endl;
    
}
    }
    void displaydirector()
    {

{
    cout<<"director  :"<<director<<endl;
    
}
    }
    void displayactors()
    {

{
    cout<<"actor  :"<<actors<<endl;
    
}
    }
    void displayreview()
    {
for(int i=0;i<count_r;i++)
{
    cout<<"review "<<i+1<<" :"<<review[i]<<endl;
    
}
    }
 
};




int main()
{
    movie m("titanic","chirostopher nolan","tiger shroff");
    m.addreview("this is great movie");
    m.addreview("this is fantastic and nostalgic movie");
    m.addreview("such a emotional movie");
    cout<<"Your Review is added!";

    m.RemoveReview("this is fantastic and nostalgic movie");
   cout<<"\n-------Director-----\n";
    m.displaydirector();
    cout<<"\n-------Title-----\n";
    m.displaytitle();
    cout<<"\n-------Actors-----\n";
    m.displayactors();
    cout<<"\n-------review(after removing)-----\n";
    m.displayreview();

return 0;
}`,
        output:
            `Your Review is added!review removed
-------Director-----
director  :chirostopher nolan

-------Title-----
movie  :titanic

-------Actors-----
actor  :tiger shroff

-------review(after removing)-----
review 1 :this is great movie
review 2 :such a emotional movie`
    },
    // Question 18
    {
        q: "Write a C++ program to create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
        code:
            `#include<iostream>
#include<cstring>
using namespace std;

class Restaurant
{
    string menuitems[10];
    int price,rating[20],total_items=0,total_visits=20;
    public:
    void additems(string m)
    {
       menuitems[total_items]=m;
       total_items++;
    //  cout<<"Item added to the Menu.";

    }
    void removeItem(string m)
    {
        for(int i=0;i<total_items;i++)
        {
            if(menuitems[i]==m)
            {
                for(int j=i;j<total_items-1;j++)//-1 for the validation because if the total item is 4
        //but index is 0-3 so we do it to validate
                {
                    menuitems[j]=menuitems[j+1];
                }
                total_items--;
            }
        }
    }
    void ratingOfRestaurant()
    {
    for(int i=0;i<total_visits;i++)
    {
        cout<<"rating from the customer"<<i+1<<" :";
        cin>>rating[i];
    }
    }
    void average_rating()
    {
        int sum=0;
        float average=0;
        for(int i=0;i<total_visits;i++)
        {
            sum+=rating[i];
        }
        average=(float)sum/20;//correction claude

        cout<<"The avg. rating of the restaurant :"<<average;
    }
    void displaymenuItem()
    {
        if(total_items==0)
        {
            cout<<"Menu is empty.\n";
            return ;
        }
        for(int i=0;i<total_items;i++)
        {
            cout<<"Item "<<i+1<<" :"<<menuitems[i]<<endl;
        }
    }
};

int main()
{
    string item;
    int n;//correct by claude
    Restaurant r;
   
    cout<<"how many items you want to add ?";
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cout<<"enter the items :"<<endl;
        cin>>item;

        r.additems(item);
    }
     cout<<"\n--------Menu OF The Restaurant-------\n";
     r.displaymenuItem();
    r.ratingOfRestaurant();

    cout<<"\n-----Average Rating Of The Restaurant-----\n";
    r.average_rating();

    return 0;


    
}`,
        output:
            `how many items you want to add ?3
enter the items :
pizza
enter the items :
burger
enter the items :
pasta

--------Menu OF The Restaurant-------
Item 1 :pizza
Item 2 :burger
Item 3 :pasta
rating from the customer1 :4
rating from the customer2 :5
rating from the customer3 :3
rating from the customer4 :4
rating from the customer5 :5
rating from the customer6 :4
rating from the customer7 :3
rating from the customer8 :5
rating from the customer9 :4
rating from the customer10 :4
rating from the customer11 :5
rating from the customer12 :3
rating from the customer13 :4
rating from the customer14 :5
rating from the customer15 :4
rating from the customer16 :3
rating from the customer17 :5
rating from the customer18 :4
rating from the customer19 :4
rating from the customer20 :5

-----Average Rating Of The Restaurant-----
The avg. rating of the restaurant :4.1`
    },
    // Question 19
    {
        q: "Write a C++ program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
        code:
            `#include<iostream>
#include<string>
using namespace std;

class TravelBooking
{
    string flights[5];
    string hotels[5];
    int totalFlights = 3;
    int totalHotels = 3;
    bool flightBooked = false;
    bool hotelBooked = false;

public:

    // constructor to initialize data
    TravelBooking()
    {
        flights[0] = "Delhi to Mumbai";
        flights[1] = "Delhi to Goa";
        flights[2] = "Delhi to Bangalore";

        hotels[0] = "Taj Hotel";
        hotels[1] = "Oberoi Hotel";
        hotels[2] = "Radisson Hotel";
    }

    void searchFlights()
    {
        cout<<"\nAvailable Flights:\n";
        for(int i=0;i<totalFlights;i++)
        {
            cout<<i+1<<" : "<<flights[i]<<endl;
        }
    }

    void searchHotels()
    {
        cout<<"\nAvailable Hotels:\n";
        for(int i=0;i<totalHotels;i++)
        {
            cout<<i+1<<" : "<<hotels[i]<<endl;
        }
    }

    void bookReservation()
    {
        int choice;

        cout<<"\n1. Book Flight\n";
        cout<<"2. Book Hotel\n";
        cout<<"Enter your choice: ";
        cin>>choice;

        if(choice==1)
        {
            flightBooked = true;
            cout<<"Flight booked successfully.\n";
        }
        else if(choice==2)
        {
            hotelBooked = true;
            cout<<"Hotel booked successfully.\n";
        }
    }

    void cancelReservation()
    {
        int choice;

        cout<<"\n1. Cancel Flight\n";
        cout<<"2. Cancel Hotel\n";
        cout<<"Enter your choice: ";
        cin>>choice;

        if(choice==1 && flightBooked)
        {
            flightBooked = false;
            cout<<"Flight reservation cancelled.\n";
        }
        else if(choice==2 && hotelBooked)
        {
            hotelBooked = false;
            cout<<"Hotel reservation cancelled.\n";
        }
        else
        {
            cout<<"No reservation found.\n";
        }
    }
};

int main()
{
    TravelBooking t;

    t.searchFlights();
    t.searchHotels();

    t.bookReservation();

    t.cancelReservation();

    return 0;
}`,
        output:
            `
Available Flights:
1 : Delhi to Mumbai
2 : Delhi to Goa
3 : Delhi to Bangalore

Available Hotels:
1 : Taj Hotel
2 : Oberoi Hotel
3 : Radisson Hotel

1. Book Flight
2. Book Hotel
Enter your choice: 1
Flight booked successfully.

1. Cancel Flight
2. Cancel Hotel
Enter your choice: 1
Flight reservation cancelled.`
    },
    // Question 20
    {
        q: "Create a class showing an example of default constructor.",
        code:
            `#include<iostream>
#include<cstring>
using namespace std;
class test
{
    public:
    test()
    {
        cout<<"default constructor is called.";
    }
};
int main()
{
    test t;
    return 0;
}`,
        output:
            `default constructor is called.`
    },
    // Question 21
    {
        q: "create a class showing an example of parameterized constructor",
        code:
            `#include<iostream>
#include<cstring>
using namespace std;
class test
{
    int x;
    public:
    test(int a)
    {
       x=a;
       cout<<"x :"<<x;
    }
};
int main()
{
    test t(18);
    return 0;
}`,
        output:
            `x :18`
    },
    // Question 22
    {
        q: "Create a class showing an example of copy constructor.",
        code:
            `#include<iostream>
#include<cstring>
using namespace std;
class test
{
    int x;
    public:
    test(int a)
    {
        x=a;
    }
    test(test &obj1)
    {
        cout<<obj1.x;
    }

};
int main()
{
    test t(10);
    test obj2=t;
    return 0;

}`,
        output:
            `10`
    },
    // Question 23
    {
        q: "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students",
        code:
            `#include <iostream>
using namespace std;

class students
{
private:
    int roll;
    string name, Class;

public:
    static int nextRollNumber;
    students()
    {
        roll = nextRollNumber;
        nextRollNumber++;
    }
    void setname(string &nam)
    {
        name = nam;
    }
    void setclass(string &clas)
    {
        Class = clas;
    }
    string getname()
    {
        return name;
    }
    string getclass()
    {
        return Class;
    }
    int getroll()
    {
        return roll;
    }
};

int students::nextRollNumber = 1;

int main()
{
    students student[10];
    string str;

    cout << "Enter the details for 10 students: " << endl;
    cin.ignore();
    for (int i = 0; i < 10; i++)
    {
        cout << "Student " << i + 1 << endl;

        cout << "Name: ";
        getline(cin, str);
        student[i].setname(str);
        cout << "Class: ";
        getline(cin, str);
        student[i].setclass(str);
    }

    cout << "All students Details" << endl;
    for (int i = 0; i < 10; i++)
    {
        cout << "Student " << i + 1 << endl;

        cout << "Roll Number: " << student[i].getroll() << endl;
        cout << "Name: " << student[i].getname() << endl;
        cout << "Class: " << student[i].getclass() << endl;
    }
    return 0;
}`,
        output:
            `Enter the details for 10 students: 
Student 1
Name: John
Class: BCA
Student 2
Name: Alice
Class: MCA
Student 3
Name: Bob
Class: BCA
Student 4
Name: Eve
Class: BSc
Student 5
Name: Charlie
Class: BCA
Student 6
Name: David
Class: MCA
Student 7
Name: Frank
Class: BCA
Student 8
Name: Grace
Class: BSc
Student 9
Name: Henry
Class: BCA
Student 10
Name: Ivy
Class: MCA
All students Details
Student 1
Roll Number: 1
Name: John
Class: BCA
Student 2
Roll Number: 2
Name: Alice
Class: MCA
Student 3
Roll Number: 3
Name: Bob
Class: BCA
Student 4
Roll Number: 4
Name: Eve
Class: BSc
Student 5
Roll Number: 5
Name: Charlie
Class: BCA
Student 6
Roll Number: 6
Name: David
Class: MCA
Student 7
Roll Number: 7
Name: Frank
Class: BCA
Student 8
Roll Number: 8
Name: Grace
Class: BSc
Student 9
Roll Number: 9
Name: Henry
Class: BCA
Student 10
Roll Number: 10
Name: Ivy
Class: MCA`
    },
    // Question 24
    {
        q: "Create a class showing the area of circle and rectangle by method overloading",
        code:
            `#include <iostream>
using namespace std;

class shape
{
   float length, breadth, radius;
   const float pi = 3.14;

public:
   shape() {}
   float setarea(float len, float bread)
   {
      length = len;
      breadth = bread;
      float area = length * breadth;
      return area;
   }
   float setarea(float rad)
   {
      radius = rad;
      float area = pi * radius * radius;
      return area;
   }
};

int main()
{
   shape s;
   cout << "Area Of the Rectangle :" << s.setarea(89.7, 56.6) << endl;
   cout << "Area Of the Circle :" << s.setarea(67.5) << endl;

   return 0;
}`,
        output:
            `Area Of the Rectangle :5077.02
Area Of the Circle :14306.6`
    },
    // Question 25
    {
        q: "Write a C++ program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
        code:
            `#include <iostream>
using namespace std;
class person
{
    string name,country,age;
    public:
    void setdata()
    {
        cout<<"enter your name :";
        getline(cin,name);
        cout<<"\nenter your country name :";
        getline(cin,country);
        cout<<"\nenter your age :";
        getline(cin,age);
    }

    void getdata()
    {
        
        cout<<"Name :"<<name<<endl;
        cout<<"age :"<<age<<endl;
        cout<<"country :"<<country<<endl;
    }
};


int main()
{
    person p;
    p.setdata();
    cout<<"\n-----detail of the person------\n";
    p.getdata();
return 0;
}`,
        output:
            `enter your name :John

enter your country name :USA

enter your age :25

-----detail of the person------
Name :John
age :25
country :USA`
    },
    // Question 26
    {
        q: "Write a C++ program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
        code:
            `#include <iostream>
using namespace std;
class BankAccount
{
string accountNumber;
float balance;
public:
void setdata()
{
    cout<<"\n----Fill  the Account Details-----\n"<<endl;
    cout<<"Please Enter Your Account Number :";
    cin>>accountNumber;
    cout<<"Enter The Balance In Your Account :";
    cin>>balance;
}

void getaccdetail()
{
    cout<<"Account Number :"<<accountNumber<<endl;
    
}
float getbalance()
{
    cout<<"Account Balance :"<<balance<<endl;
}

void modifydata()
{
    cout<<"Enter the Updated Balance :";
    cin>>balance;

}
float getmodifydata()
{
    cout<<"Updated Balance :"
    <<balance<<endl;
}
};



int main()
{
    BankAccount b;
    b.setdata();
    cout<<"\n-------Account details-------\n";
    b.getaccdetail();
    b.getbalance();
    cout<<"\n-----modifying the account balance-----\n"<<endl;
    b.modifydata();
    b.getmodifydata();
return 0;
}`,
        output:
            `
----Fill  the Account Details-----

Please Enter Your Account Number :123456
Enter The Balance In Your Account :50000

-------Account details-------
Account Number :123456
Account Balance :50000

-----modifying the account balance-----

Enter the Updated Balance :75000
Updated Balance :75000`
    },
    // Question 27
    {
        q: "Write a C++ program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
        code:
            `#include<iostream>
using namespace std;

class Rectangle
{
private:
    int length;
    int width;

public:

    // Setter for length
    void setLength(int l)
    {
        length = l;
    }

    // Setter for width
    void setWidth(int w)
    {
        width = w;
    }

    // Getter for length
    int getLength()
    {
        return length;
    }

    // Getter for width
    int getWidth()
    {
        return width;
    }
};

int main()
{
    Rectangle r;

    r.setLength(10);
    r.setWidth(5);

    cout<<"Length of rectangle : "<<r.getLength()<<endl;
    cout<<"Width of rectangle : "<<r.getWidth()<<endl;

    return 0;
}`,
        output:
            `Length of rectangle : 10
Width of rectangle : 5`
    },
    // Question 28
    {
        q: "Write a C++ program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
        code:
            `#include<iostream>
#include<string>
using namespace std;

class Employee
{
private:
    int employee_id;
    string employee_name;
    float employee_salary;

public:

    // Setter for ID
    void setID(int id)
    {
        employee_id = id;
    }

    // Getter for ID
    int getID()
    {
        return employee_id;
    }

    // Setter for Name
    void setName(string name)
    {
        employee_name = name;
    }

    // Getter for Name
    string getName()
    {
        return employee_name;
    }

    // Setter for Salary
    void setSalary(float salary)
    {
        employee_salary = salary;
    }

    // Getter for Salary (formatted string)
    string getSalary()
    {
        return "Salary of Employee : " + to_string(employee_salary);
    }
};

int main()
{
    Employee e;

    e.setID(101);
    e.setName("Armaan");
    e.setSalary(50000);

    cout<<"Employee ID : "<<e.getID()<<endl;
    cout<<"Employee Name : "<<e.getName()<<endl;
    cout<<e.getSalary()<<endl;

    return 0;
}`,
        output:
            `Employee ID : 101
Employee Name : Armaan
Salary of Employee : 50000.000000`
    },
    // Question 29
    {
        q: "Write a C++ program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
        code:
            `#include<iostream>
#include<cstring>
using namespace std;
 class circle
 {
    float radius;
    public:
    const float pi=3.145;
    void setradius(float r)
    {
        if(r>=0)
        {
            radius=r;
        }
        else{
            cout<<"invalid radius!!";
        }
        
    }
    float getradius()
    {
        return radius;
    }
    void modifyradius(float r)
    {
           if(r>=0)
        {
            radius=r;
        }
        else{
            cout<<"invalid radius!!";
        }
    }
    float claculateArea()
    {
   return pi*radius*radius;
    }
    float claculatePerimeter()
    {
   return pi*2*radius;
    }

 };
 int main()
 {
    circle c;
    c.setradius(2.2);
    cout<<"radius :"<<c.getradius()<<endl;
    cout<<"\n--After Modification---\n";
    c.modifyradius(4.4);
    cout<<"Modified Radius :"<<c.getradius()<<endl;
    cout<<"\n area and perimeter from updated radius--\n";
    cout<<"Area of circle :"<<c.claculateArea()<<endl;
    cout<<"Perimeter of circle :"<<c.claculatePerimeter()<<endl;
    return 0;

 }`,
        output:
            `radius :2.2

--After Modification---
Modified Radius :4.4

 area and perimeter from updated radius--
Area of circle :60.8392
Perimeter of circle :27.676`
    },
    // Question 30
    {
        q: "Write a C++ program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

class car
{
    string company_name, model_name;
    int year;
    float milage;

public:
    car(float m)
    {
        milage = m;
    }
    void setcompanyName()
    {
        cout << "Enter the company of the car:";
        getline(cin, company_name);
    }
    void setmodelName()
    {
        cout << "Enter the Model:";
        getline(cin, model_name);
    }
    void setyear()
    {
        cout << "Enter the launch year:";
        cin >> year;
    }

    void modifydata()
    {
        cout << "\n---modifying data-----\n";
        cout << "Enter the company of the car:";
        getline(cin, company_name);
        cout << "Enter the Model:";
        getline(cin, model_name);
        cout << "Enter the launch year:";
        cin >> year;
        cout << "Enter the milage of the car:";
        cin >> milage;
    }
    float getmilageOfCar()
    {
        return milage;
    }
    void display()
    {
        cout << "Company :" << company_name << endl;
        cout << "model :" << model_name << endl;
        cout << "Year of launch :" << year << endl;
        cout << "Milage :" << milage << " km" << endl;
    }
};
int main()
{
    car c(20.25);
    c.setcompanyName();
    c.setmodelName();
    c.setyear();
    cout << "\n---details of the car---\n";
    c.display();
    c.modifydata();
    cout << "\n---After Modifying Data---\n";
    c.display();
    return 0;
}`,
        output:
            `Enter the company of the car:Toyota
Enter the Model:Camry
Enter the launch year:2020

---details of the car---
Company :Toyota
model :Camry
Year of launch :2020
Milage :20.25 km

---modifying data-----
Enter the company of the car:Honda
Enter the Model:Accord
Enter the launch year:2022
Enter the milage of the car:18.5

---After Modifying Data---
Company :Honda
model :Accord
Year of launch :2022
Milage :18.5 km`
    },
    // Question 31
    {
        q: "Write a C++ program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
        code:
            `#include<iostream>
#include<string>
using namespace std;

class Student
{
private:
    int student_id;
    string student_name;
    int grades[10];
    int count = 0;

public:

    
    void setStudentID(int id)
    {
        student_id = id;
    }

    
    int getStudentID()
    {
        return student_id;
    }

    
    void setStudentName(string name)
    {
        student_name = name;
    }

    
    string getStudentName()
    {
        return student_name;
    }

    
    void addGrade(int grade)
    {
        if(grade >= 0 && grade <= 100)
        {
            grades[count] = grade;
            count++;
            cout<<"Grade added successfully.\n";
        }
        else
        {
            cout<<"Invalid grade! Grade must be between 0 and 100.\n";
        }
    }

    
    void displayGrades()
    {
        cout<<"Grades: ";
        for(int i=0;i<count;i++)
        {
            cout<<grades[i]<<" ";
        }
        cout<<endl;
    }
};

int main()
{
    Student s;

    s.setStudentID(101);
    s.setStudentName("Armaan");

    s.addGrade(85);
    s.addGrade(92);
    

    cout<<"Student ID: "<<s.getStudentID()<<endl;
    cout<<"Student Name: "<<s.getStudentName()<<endl;

    s.displayGrades();

    return 0;
}`,
        output:
            `Grade added successfully.
Grade added successfully.
Student ID: 101
Student Name: Armaan
Grades: 85 92 `
    }])
    database.operator.questions=([
        {
    q: "Define a class Complex to represent complex numbers. Overload the + operator to add two complex numbers.",

    code:
`#include <iostream>
using namespace std;

class complex
{
    int num;

public:
    complex(int n)
    {
        num = n;
    }
    int operator+(complex &cn)
    {
        return (num + cn.getnum());
    }

    int getnum()
    {
        return num;
    }
};

int main()
{
    int a;
    cout << "Enter complex number for First object: ";
    cin >> a;
    complex num1(a);
    cout << "Enter complex number for Second object: ";
    cin >> a;
    complex num2(a);
    cout << "Sum of the two complex numbers(num1 and num2) is " << num1 + num2;
    return 0;
}`,

    output:
`Enter complex number for First object: 5
Enter complex number for Second object: 10
Sum of the two complex numbers(num1 and num2) is 15`
  },

  {
    q: "Create a class Fraction to represent fractions. Overload the + operator to add two fractions.",

    code:
`#include <iostream>
using namespace std;

class fraction
{
    float num;

public:
    fraction(float n)
    {
        num = n;
    }
    float operator+(fraction &cn)
    {
        return (num + cn.getnum());
    }

    float getnum()
    {
        return num;
    }
};

int main()
{
    float a,b;
    cout << "Enter Numerator for First object: ";
    cin >> a;
    cout << "Enter Denominator for First object: ";
    cin >> b;
    fraction num1(a/b);
    cout << "Enter Numerator for Second object: ";
    cin >> a;
    cout << "Enter Denominator for Second object: ";
    cin >> b;
    fraction num2(a/b);
    cout << "Sum of the two fractions(num1 and num2) is " << num1 + num2;
    return 0;
}`,

    output:
`Enter Numerator for First object: 3
Enter Denominator for First object: 4
Enter Numerator for Second object: 1
Enter Denominator for Second object: 2
Sum of the two fractions(num1 and num2) is 1.25`
  },

  {
    q: "Define a class Matrix to represent matrices. Overload the * operator to multiply two matrices.",

    code:
`#include <iostream>
using namespace std;

class matrix
{
public:
    int matrices[2][2];
    matrix(int a, int b, int c, int d)
    {
        matrices[0][0] = a;
        matrices[0][1] = b;
        matrices[1][0] = c;
        matrices[1][1] = d;
    }

    matrix() {}

    void fillmatrix()
    {
        int num;
        cout << "Enter the value for the matrix:  ";
        for (int i = 0; i < 2; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                cout << "Enter the value[" << i << "][" << j << "]";
                cin >> num;
                matrices[i][j] = num;
            }
        }
    }
    // learn this formula for 2*2 matrices multiplication (C[i][j]​=A[i][0]​B[0][j]​+A[i][1]B[1]​[j])
    matrix operator*(matrix &m2)
    {
        matrix m3;
        for (int i = 0; i < 2; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                m3.matrices[i][j] = (this->matrices[i][0] * m2.matrices[0][j]) + (this->matrices[i][1] * m2.matrices[1][j]);
            }
        }
        return m3;
    }
};

int main()
{
    matrix m1(1, 2, 3, 4), m2(5, 6, 7, 8), m3;

    m3 = m1 * m2;

    cout << "Matrix 1: " << endl;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cout << m1.matrices[i][j] << "  ";
        }
        cout << endl;
    }
    cout << "Matrix 2: " << endl;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cout << m2.matrices[i][j] << "  ";
        }
        cout << endl;
    }

    cout << "Matrix 3(Matrix 1 * Matrix 2) Using Operator Overloading: " << endl;
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            cout << m3.matrices[i][j] << "  ";
        }
        cout << endl;
    }
    return 0;
}`,

    output:
`Matrix 1: 
1  2  
3  4  
Matrix 2: 
5  6  
7  8  
Matrix 3(Matrix 1 * Matrix 2) Using Operator Overloading: 
19  22  
43  50  `
  },

  {
    q: "Implement a class String to represent strings. Overload the + operator to concatenate two strings.",

    code:
`#include <iostream>
#include <cstring>
using namespace std;

class String
{
    char s1[50];

public:
    String(const char *str)
    {
        strcpy(s1, str);
    }
    char *operator+(String &n)
    {
        strcat(this->s1, n.s1);
        return s1;
    }
};

int main()
{
    String st1("This is String 1 "), st2("This is String 2 ");
    cout << (st1 + st2);
}`,

    output:
`This is String 1 This is String 2 `
  },

  {
    q: "Define a class Date to represent dates. Overload the < operator to compare two dates.",

    code:
`#include <iostream>
using namespace std;

class Date
{
private:
    int date, month, year;

public:
    Date() {}
    void setdate(int a, int b, int c)
    {
        date = a;
        month = b;
        year = c;
    }
    void operator<(Date &dt)
    {
        if (this->year == dt.year)
        {
            if (this->month == dt.month)
            {
                if (this->date == dt.date)
                {
                    cout << "Both Dates are same";
                }
                else
                {
                    if (this->date > dt.date)
                    {
                        cout << "First Date is greater than Second Date";
                    }
                    else
                    {
                        cout << "Second date is greater than First Date";
                    }
                }
            }
            else
            {
                if (this->month > dt.month)
                {
                    cout << "First Date is greater than Second Date";
                }
                else
                {
                    cout << "Second date is greater than First Date";
                }
            }
        }
        else
        {
            if (this->year > dt.year)
            {
                cout << "First Date is greater than Second Date";
            }
            else
            {
                cout << "Second date is greater than First Date";
            }
        }
    }
};

int main()
{
    Date dt1, dt2;
    int date, month, year;
    cout << "Enter First Date: " << endl;
    cout << "Date(Enter a valid date only): ";
    cin >> date;
    cout << "Month(1=jan,2=feb and so on): ";
    cin >> month;
    cout << "Year(Enter a valid year only): ";
    cin >> year;
    dt1.setdate(date, month, year);
    cout << endl;
    cout << "Enter Second Date: " << endl;
    cout << "Date(Enter a valid date only): ";
    cin >> date;
    cout << "Month(1=jan,2=feb and so on): ";
    cin >> month;
    cout << "Year(Enter a valid year only): ";
    cin >> year;
    dt2.setdate(date, month, year);

    dt1 < dt2;
}`,

    output:
`Enter First Date: 
Date(Enter a valid date only): 15
Month(1=jan,2=feb and so on): 3
Year(Enter a valid year only): 2024

Enter Second Date: 
Date(Enter a valid date only): 20
Month(1=jan,2=feb and so on): 3
Year(Enter a valid year only): 2024
Second date is greater than First Date`
  },

  {
    q: "Implement a class Money to represent money. Overload the + operator to add two amounts of money.",

    code:
`#include <iostream>
using namespace std;

class money
{
private:
    int amt;

public:
    money(int n)
    {
        amt = n;
    }

    int operator+(money &mn)
    {
        return (this->amt + mn.amt);
    }
};

int main()
{
    int amt;
    cout << "Enter the First amount of money: ";
    cin >> amt;
    money m1(amt);
    cout << "Enter the Second amount of money: ";
    cin >> amt;
    money m2(amt);

    cout << "Sum of both amounts of money: " << (m1 + m2);

    return 0;
}`,

    output:
`Enter the First amount of money: 500
Enter the Second amount of money: 750
Sum of both amounts of money: 1250`
  },

  {
    q: "Create a class Rectangle to represent rectangles. Overload the == operator to check if two rectangles are equal.",

    code:
`#include <iostream>
using namespace std;

class rectangle
{
private:
    int length, breadth;

public:
    rectangle(int a, int b)
    {
        length = a;
        breadth = b;
    }

    void operator==(rectangle &r)
    {
        if ((this->length == r.length) && (this->breadth == r.breadth))
        {
            cout << "Both Rectangles are Congruent(exactly equal)" << endl;
        }
        else if ((this->length * this->breadth) == (r.length * r.breadth))
        {
            cout << "Both Rectangles area are equal but not congruent" << endl;
        }
        else
        {
            cout << "Both Rectangles are not equal";
        }
    }
};

int main()
{
    int len, bred;
    cout << "Enter the detail for 1st rectangle: " << endl;
    cout << "Length: ";
    cin >> len;
    cout << "Breadth: ";
    cin >> bred;
    rectangle r1(len, bred);
    cout << "Enter the detail for 2nd rectangle: " << endl;
    cout << "Length: ";
    cin >> len;
    cout << "Breadth: ";
    cin >> bred;
    rectangle r2(len, bred);

    r1 == r2;

    return 0;
}`,

    output:
`Enter the detail for 1st rectangle: 
Length: 10
Breadth: 5
Enter the detail for 2nd rectangle: 
Length: 10
Breadth: 5
Both Rectangles are Congruent(exactly equal)
`
  },

  {
    q: "Define a class Time to represent time. Overload the << operator to display the time in HH:MM format.",

    code:
`#include <iostream>
using namespace std;

class time
{
public:
    int hr, min;
    time(int h, int m)
    {
        hr = h;
        min = m;
    }
    void operator<<(ostream)
    {
        cout << hr << "::" << min;
    }
};

ostream &operator<<(ostream &out, time &t)
{
    out << t.hr << ":" << t.min;
    return out;
}

int main()
{
    int hr, min;

    cout << "Enter the time details: " << endl;
    cout << "Hours: ";
    cin >> hr;
    cout << "Minutes: ";
    cin >> min;

    time t1(hr, min);

    cout << "Time:  " << t1;

    return 0;
}`,

    output:
`Enter the time details: 
Hours: 14
Minutes: 30
Time:  14:30`
  },

    ])

database.virtual.questions=([    // Question 1
    {
        q: "Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",

        code:
            `#include <iostream>
#include <string.h>
using namespace std;

class animal
{
protected:
    virtual void sound() = 0;
};
class tiger : public animal
{
public:
    void sound()
    {
        cout << "Tiger roars." << endl;
    }
};
class lion : public animal
{
public:
    void sound()
    {
        cout << "Lion roars loudly." << endl;
    }
};

int main()
{
    tiger t1;
    lion l1;

    t1.sound();
    cout << endl;
    l1.sound();

    return 0;
}`,

        output:
            `Tiger roars.

Lion roars loudly.
`
    },

    // Question 2
    {
        q: "Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",

        code:
            `#include <iostream>
#include <string.h>
using namespace std;

class animal
{
protected:
    virtual void sound() = 0;
};
class tiger : public animal
{
public:
    void sound()
    {
        cout << "Tiger roars." << endl;
    }
};
class lion : public animal
{
public:
    void sound()
    {
        cout << "Lion roars loudly." << endl;
    }
};

int main()
{
    tiger t1;
    lion l1;

    t1.sound();
    cout << endl;
    l1.sound();

    return 0;
}`,

        output:
            `Tiger roars.

Lion roars loudly.
`
    },

    // Question 3
    {
        q: "Write a C++ program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create derived classes Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",

        code:
            `#include <iostream>
#include <math.h>
using namespace std;

class shape
{
protected:
    virtual double calculateArea() = 0;
    virtual double calculatePerimeter() = 0;
};

class circle : public shape
{
private:
    double rad;

public:
    circle(double radius)
    {
        rad = radius;
    }

    double calculateArea()
    {
        return (M_PI * rad * rad);
    }
    double calculatePerimeter()
    {
        return (M_PI * 2 * rad);
    }
};
class triangle : public shape
{
private:
    double s1, s2, s3;

public:
    triangle(double side1, double side2, double side3)
    {
        s1 = side1;
        s2 = side2;
        s3 = side3;
    }

    double calculateArea()
    {
        double sum = ((s1 + s2 + s3) / 2);
        return (sqrt(sum * (sum - s1) * (sum - s2) * (sum - s3)));
    }
    double calculatePerimeter()
    {
        return (s1 + s2 + s3);
    }
};

int main()
{
    circle c1(10);
    triangle t1(10, 10, 10);

    cout << "Area of triangle: " << t1.calculateArea() << endl;
    cout << "Perimeter of triangle: " << t1.calculatePerimeter();
    cout << endl;
    cout << "Area of Circle: " << c1.calculateArea() << endl;
    cout << "Perimeter of circle: " << c1.calculatePerimeter();

    return 0;
}`,

        output:
            `Area of triangle: 43.3013
Perimeter of triangle: 30
Area of Circle: 314.159
Perimeter of circle: 62.8319`
    },

    // Fixed Question 4
    {
        q: "Write a C++ program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create derived classes: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",

        code:
            `#include <iostream>
using namespace std;

class bankAccount
{
protected:
    int balance;
    virtual void deposit() = 0;
    virtual void withdraw() = 0;
};

class savingsAccount : public bankAccount
{
public:
    savingsAccount()
    {
        balance = 1000;
    }
    void deposit()
    {
        int amt;
        cout << "Enter the amount you would like to deposit: ";
        cin >> amt;
        bankAccount::balance += amt;
        cout << "Amount Deposited!" << endl;
        cout << "New Balance: " << bankAccount::balance << endl;
    }
    void withdraw()
    {
        int amt;
        cout << "Enter the amount you would like to withdraw: ";
        cin >> amt;
        if (amt <= (bankAccount::balance - 500))
        {
            bankAccount::balance -= amt;
            cout << "Collect your Cash" << endl;
            cout << "New Balance: " << bankAccount::balance << endl;
        }
        else
        {
            cout << "Insufficient Balance" << endl;
            cout << "Minimum balance in account should be 500" << endl;
        }
    }
};

class currentAccount : public bankAccount
{
    int overdraft;

public:
    currentAccount()
    {
        balance = 2000;
    }
    void deposit()
    {
        int amt;
        cout << "Enter the amount you would like to deposit: ";
        cin >> amt;
        bankAccount::balance += amt;
        cout << "Amount Deposited!" << endl;
        cout << "New Balance: " << bankAccount::balance << endl;
    }
    void withdraw()
    {
        int amt;
        cout << "Enter the amount you would like to withdraw: ";
        cin >> amt;
        bankAccount::balance -= amt;
        cout << "Collect your Cash" << endl;
        if (bankAccount::balance >= 0)
        {
            cout << "New Balance: " << bankAccount::balance << endl;
        }
        else
        {
            overdraft = bankAccount::balance;
            cout << "Overdraft generated" << endl;
            cout << "Overdraft Amount: " << overdraft << " (Overdrafft Charges may apply, please deposit the overdraft amount to avoid charges)" << endl;
        }
    }
};

int main()
{
    savingsAccount sa;
    cout << "Savings Account Operations:" << endl;
    sa.deposit();
    sa.withdraw();

    return 0;
}`,

        output:
            `Savings Account Operations:
Enter the amount you would like to deposit: 500
Amount Deposited!
New Balance: 1500
Enter the amount you would like to withdraw: 300
Collect your Cash
New Balance: 1200
`
    },

    // Fixed Question 5
    {
        q: "Write a C++ program to create an abstract class Animal with abstract methods eat() and sleep(). Create derived classes Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",

        code:
            `#include <iostream>
using namespace std;

class animal
{
protected:
    virtual void eat() = 0;
    virtual void sleep() = 0;
};

class tiger : public animal
{
public:
    void eat()
    {
        cout << "Tigers are obligatory carnovore with prey including (hoofed animals) weighing over 20 kg like deer species (Sambar, Chital), wild boar, gaur, and water buffalo" << endl;
    }
    void sleep()
    {
        cout << "Sleep time for tiger is 16-20 hours a day" << endl;
    }
};
class lion : public animal
{
public:
    void eat()
    {
        cout << "Lions are obligatory carnovore with prey including smaller animals (hares, birds) or carrion if necessary." << endl;
    }
    void sleep()
    {
        cout << "Sleep time for lion is 15-20 hours a day" << endl;
    }
};
class deer : public animal
{
public:
    void eat()
    {
        cout << "Deers are specialized herbivore with diet including leaves, twigs, buds, herbs, fruits, fungi, and lichen." << endl;
    }
    void sleep()
    {
        cout << "Sleep time for Deer is 4-5 hours a day" << endl;
    }
};

int main()
{
    tiger t1;
    lion l1;
    deer d1;

    cout << "Tiger:" << endl;
    t1.eat();
    t1.sleep();
    cout << endl;

    cout << "Lion:" << endl;
    l1.eat();
    l1.sleep();
    cout << endl;

    cout << "Deer:" << endl;
    d1.eat();
    d1.sleep();

    return 0;
}`,

        output:
            `Tiger:
Tigers are obligatory carnovore with prey including (hoofed animals) weighing over 20 kg like deer species (Sambar, Chital), wild boar, gaur, and water buffalo
Sleep time for tiger is 16-20 hours a day

Lion:
Lions are obligatory carnovore with prey including smaller animals (hares, birds) or carrion if necessary.
Sleep time for lion is 15-20 hours a day

Deer:
Deers are specialized herbivore with diet including leaves, twigs, buds, herbs, fruits, fungi, and lichen.
Sleep time for Deer is 4-5 hours a day
`
    },

    // Fixed Question 6
    {
        q: "Write a C++ program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create derived classes Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",

        code:
            `#include <iostream>
using namespace std;

class Employee
{
protected:
    int basicSalary, fixedCTC, allowance, HRA;
    virtual float calculateSalary() = 0;
    virtual void displayInfo() = 0;
};

class Programmer : public Employee
{

public:
    void displayInfo()
    {
        cout << "A full-stack developer with 3–5 years of experience, responsible for writing code, debugging, and maintaining software modules." << endl;
    }

    float calculateSalary()
    {
        Employee::basicSalary = 800000;
        Employee::fixedCTC = 320000;
        Employee::allowance = 30000;
        Employee::HRA = 1420000;

        return (Employee::basicSalary + Employee::fixedCTC + Employee::allowance + Employee::HRA);
    }
};
class Manager : public Employee
{

public:
    void displayInfo()
    {
        cout << "A senior leader with 8+ years of experience, responsible for team management, project planning, and strategic decisions." << endl;
    }

    float calculateSalary()
    {
        Employee::basicSalary = 1800000;
        Employee::fixedCTC = 720000;
        Employee::allowance = 600000;
        Employee::HRA = 3120000;

        return (Employee::basicSalary + Employee::fixedCTC + Employee::allowance + Employee::HRA);
    }
};

int main()
{
    Programmer p1;
    Manager m1;

    cout << "Programmer Details:" << endl;
    p1.displayInfo();
    cout << "Total Salary: " << p1.calculateSalary() << endl;
    cout << endl;

    cout << "Manager Details:" << endl;
    m1.displayInfo();
    cout << "Total Salary: " << m1.calculateSalary() << endl;

    return 0;
}`,

        output:
            `Programmer Details:
A full-stack developer with 3–5 years of experience, responsible for writing code, debugging, and maintaining software modules.
Total Salary: 2570000

Manager Details:
A senior leader with 8+ years of experience, responsible for team management, project planning, and strategic decisions.
Total Salary: 6240000
`
    },

    // Question 7
    {
        q: "Write a C++ program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create derived classes Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",

        code:
            `#include <iostream>
#include <math.h>
using namespace std;

class shape3d
{
protected:
    virtual double calculateVolume() = 0;
    virtual double calculateSurfaceArea() = 0;
};

class sphere : public shape3d
{
private:
    double rad;

public:
    sphere(double radius)
    {
        rad = radius;
    }

    double calculateVolume()
    {
        return ((4.0 / 3) * M_PI * rad * rad * rad);
    }
    double calculateSurfaceArea()
    {
        return (4.0 * M_PI * rad * rad);
    }
};
class cube : public shape3d
{
private:
    double side;

public:
    cube(double s)
    {
        side = s;
    }

    double calculateSurfaceArea()
    {
        return (6.0 * side * side);
    }
    double calculateVolume()
    {
        return (side * side * side);
    }
};

int main()
{
    sphere s1(10);
    cube c1(10);

    cout << "Surface Area of Sphere(radius 10units): " << s1.calculateSurfaceArea() << endl;
    cout << "Volume of Sphere(radius 10units): " << s1.calculateVolume() << endl;
    cout << "Surface Area of cube(side 10units): " << c1.calculateSurfaceArea() << endl;
    cout << "Volume of cube(side 10units): " << c1.calculateVolume() << endl;

    return 0;
}`,

        output:
            `Surface Area of Sphere(radius 10units): 1256.64
Volume of Sphere(radius 10units): 4188.79
Surface Area of cube(side 10units): 600
Volume of cube(side 10units): 1000
`
    },

    // Question 8
    {
        q: "Write a C++ program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create derived classes Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",

        code:
            `#include <iostream>
#include <string.h>
using namespace std;

class vehicle
{
protected:
    virtual void startEngine() = 0;
    virtual void stopEngine() = 0;
};
class car : public vehicle
{
public:
    void startEngine()
    {
        cout << "Car Engine Started" << endl;
    }
    void stopEngine()
    {
        cout << "Car Engine Stopped" << endl;
    }
};
class motorcycle : public vehicle
{
public:
    void startEngine()
    {
        cout << "MotorCycle Engine Started" << endl;
    }
    void stopEngine()
    {
        cout << "Motorcycle Engine Stopped" << endl;
    }
};

int main()
{
    car c1;
    motorcycle m1;

    c1.startEngine();
    c1.stopEngine();
    m1.startEngine();
    m1.stopEngine();

    return 0;
}`,

        output:
            `Car Engine Started
Car Engine Stopped
MotorCycle Engine Started
Motorcycle Engine Stopped
`
    },

    // Question 9
    {
        q: "Write a C++ program to create an abstract class Person with abstract methods eat() and exercise(). Create derived classes Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",

        code:
            `#include <iostream>
#include <string.h>
using namespace std;

class person
{
protected:
    virtual void eat() = 0;
    virtual void exercise() = 0;
};
class athlete : public person
{
public:
    void eat()
    {
        cout << "Athlete takes a calorie deficiet diet enriched with protien and vitamins" << endl;
    }
    void exercise()
    {
        cout << "Athlete daily worksout to mantain the correct physicqe and stamina" << endl;
    }
};
class lazyperson : public person
{
public:
    void eat()
    {
        cout << "lazy person eats a lot in the day with most of it containing carbs and fats" << endl;
    }
    void exercise()
    {
        cout << "lazy person almost do no excericse in his routine and gains weight in long time" << endl;
    }
};

int main()
{
    athlete a1;
    lazyperson l1;

    a1.eat();
    l1.eat();
    a1.exercise();
    l1.exercise();

    return 0;
}`,

        output:
            `Athlete takes a calorie deficiet diet enriched with protien and vitamins
lazy person eats a lot in the day with most of it containing carbs and fats
Athlete daily worksout to mantain the correct physicqe and stamina
lazy person almost do no excericse in his routine and gains weight in long time
`
    },

    // Question 10
    {
        q: "Write a C++ program to create an abstract class Instrument with abstract methods play() and tune(). Create derived classes for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",

        code:
            `#include <iostream>
#include <string.h>
using namespace std;

class instrument
{
protected:
    virtual void play() = 0;
    virtual void tune() = 0;
};
class Glockenspiel : public instrument
{
public:
    void play()
    {
        cout << "Glockenspiel is playing bright bell-like notes." << endl;
    }
    void tune()
    {
        cout << "Glockenspiel bars are tuned." << endl;
    }
};
class Violin : public instrument
{
public:
    void play()
    {
        cout << "Violin is playing smooth string music." << endl;
    }
    void tune()
    {
        cout << "Violin strings are being tuned." << endl;
    }
};

int main()
{
    Glockenspiel g1;
    Violin v1;

    g1.play();
    v1.play();
    g1.tune();
    v1.tune();

    return 0;
}`,

        output:
            `Glockenspiel is playing bright bell-like notes.
Violin is playing smooth string music.
Glockenspiel bars are tuned.
Violin strings are being tuned.
`
    },

    // Question 11
    {
        q: "Write a C++ program to create an abstract class Shape2D with abstract methods draw() and resize(). Create derived classes Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",

        code:
            `#include <iostream>
using namespace std;

class shape2d
{
protected:
    virtual void draw() = 0;
    virtual void resize() = 0;
};

class rectangle : public shape2d
{
    float length = 10.0, breadth = 10.0;

public:
    void draw()
    {
        cout << "Rectangle is drawn(default size: length 10 units, breadth 10 units)" << endl;
    }
    void resize()
    {
        length = 20.0;
        breadth = 20.0;
        cout << "Ractangle is resized(New size lenght " << length << "Units" << "breadth" << breadth << "Units)" << endl;
    }
};
class circle : public shape2d
{
    float rad = 10.0;

public:
    void draw()
    {
        cout << "Circle is drawn(default size: radius 10 units)" << endl;
    }
    void resize()
    {
        rad = 20.0;
        cout << "Circle is resized(New size Radius " << rad << "Units)" << endl;
    }
};

int main()
{
    circle c1;
    rectangle r1;

    c1.draw();
    r1.draw();
    cout << endl;
    c1.resize();
    r1.resize();

    return 0;
}`,

        output:
            `Circle is drawn(default size: radius 10 units)
Rectangle is drawn(default size: length 10 units, breadth 10 units)

Circle is resized(New size Radius 20Units)
Ractangle is resized(New size lenght 20Unitsbreadth20Units)
`
    },

    // Question 12
    {
        q: "Write a C++ program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create derived classes Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",

        code:
            `#include <iostream>
#include <math.h>
using namespace std;

class geometricshape
{
protected:
    virtual double area() = 0;
    virtual double perimeter() = 0;
};

class square : public geometricshape
{
private:
    double side;

public:
    square(double s)
    {
        side = s;
    }

    double area()
    {
        return (side * side);
    }
    double perimeter()
    {
        return (4.0 * side);
    }
};
class triangle : public geometricshape
{
private:
    double s1, s2, s3;

public:
    triangle(double side1, double side2, double side3)
    {
        s1 = side1;
        s2 = side2;
        s3 = side3;
    }

    double area()
    {
        double sum = ((s1 + s2 + s3) / 2);
        return (sqrt(sum * (sum - s1) * (sum - s2) * (sum - s3)));
    }
    double perimeter()
    {
        return (s1 + s2 + s3);
    }
};

int main()
{
    square s1(10);
    triangle t1(10, 10, 10);

    cout << "Area of triangle: " << t1.area() << endl;
    cout << "Perimeter of triangle: " << t1.perimeter();
    cout << endl;
    cout << "Area of Square: " << s1.area() << endl;
    cout << "Perimeter of Square: " << s1.perimeter();

    return 0;
}`,

        output:
            `Area of triangle: 43.3013
Perimeter of triangle: 30
Area of Square: 100
Perimeter of Square: 40`
    },

    // Question 13
    {
        q: "Write a C++ program to create an abstract class Bird with abstract methods fly() and makeSound(). Create derived classes Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",

        code:
            `#include <iostream>
#include <string.h>
using namespace std;

class bird
{
protected:
    virtual void makesound() = 0;
    virtual void fly() = 0;
};
class eagle : public bird
{
public:
    void makesound()
    {
        cout << "Eagle is soaring in the sky." << endl;
    }
    void fly()
    {
        cout << "Eagle makes a sharp cry." << endl;
    }
};
class hawk : public bird
{
public:
    void makesound()
    {
        cout << "Hawk is flying high." << endl;
    }
    void fly()
    {
        cout << "Hawk screeches." << endl;
    }
};

int main()
{
    eagle e1;
    hawk h1;

    e1.fly();
    h1.fly();
    cout << endl;
    e1.makesound();
    h1.makesound();

    return 0;
}`,

        output:
            `Eagle makes a sharp cry.
Hawk screeches.

Eagle is soaring in the sky.
Hawk is flying high.
`
    },

])
database.file.questions=([{
    q: "Write a C++ program to create a new text file and write some text into it.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ofstream file("new.txt");
    if (file)
    {
        file << "This is the Data that will be visible in our Text file";
        cout << "new.txt file is created and data has been written";
    }
    else
    {
        cout << "Error Creating or Opening file";
    }
    file.close();
    return 0;
}`,
    output:
`new.txt file is created and data has been written`,
image:"q1.png"

  },
  // Question 2
  {
    q: "Write a C++ program to open an existing text file and display its contents on the console.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream file("new.txt");
    if (file)
    {
        cout << "Data inside the File:-" << endl;
        char ch;
        while (file.get(ch))
        {
            cout << ch;
        }
    }
    else
    {
        cout << "Error Finding or Opening file";
    }
    file.close();
    return 0;
}`,
    output:
`Data inside the File:-
This is the Data that will be visible in our Text file`,
image:"q2.png"
  },
  // Question 3
  {
    q: "Write a C++ program to count the number of lines in a text file.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream file("new.txt");
    if (file)
    {
        int line_count = 1;
        while (!file.eof())
        {
            if (file.get() == 10)
            {
                line_count += 1;
            }
        }
        cout << "Number of lines in the file is : " << line_count;
    }
    else
    {
        cout << "Error Finding or Opening file";
    }
    file.close();
    return 0;
}`,
    output:
`Number of lines in the file is : 1`,
image:"q3.png"

  },
  // Question 4
  {
    q: "Write a C++ program to count the number of words in a text file.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream file("new.txt");
    if (file)
    {
        int word_count = 0;
        char word[35];
        while (!file.eof())
        {
            file >> word;
            word_count++;
            cout << word << endl;
        }
        cout << word_count;
    }
    else
    {
        cout << "Error Finding or Opening file";
    }
    file.close();
    return 0;
}`,
    
image:"q4.png"
  },
  // Question 5
  {
    q: "Write a C++ program to copy the contents of one text file to another.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream reading("read.txt", ios::in);
    if (reading)
    {
        fstream writing("write.txt", ios::out);
        if (writing)
        {
            char ch;
            while (reading.get(ch))
            {
                writing << (char)ch;
            }
            cout << "Data has been copied to another file";
            writing.close();
        }
        reading.close();
    }
}`,
    image:"q5.png"
  },
  // Question 6
  {
    q: "Write a C++ program to find and replace a specific word in a text file.",
    code:
`#include <iostream>
#include <fstream>
#include <iomanip>
#include <cstring>
using namespace std;

int main()
{
    char read[20], found[20], replace[20];
    fstream sample("sample", ios::in);
    if (sample)
    {
        fstream copy("copy", ios::out);
        if (copy)
        {
            cout << "Enter the word you like to replace: ";
            cin >> found;
            cout << "word to replace with: ";
            cin >> replace;
            while (sample >> read)
            {
                if (strcmp(read, found) == 0)
                {
                    strcpy(read, replace);
                }
                copy << read << " ";
            }
            copy.close();
        }
        sample.close();
    }

    // overwriting main file
    fstream copy("copy", ios::in);
    if (copy)
    {
        fstream sample("sample", ios::out);
        if (sample)
        {
            while (copy >> read)
            {
                sample << read << " ";
            }
            sample.close();
        }
        copy.close();
        
    }

    return 0;
}`,
    output:
`Enter the word you like to replace: hello
word to replace with: hi`
  },
  // Question 7
  {
    q: "Write a C++ program to append new data to an existing text file.",
    code:
`#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    ofstream outFile("write.txt", ios::app);

    if (outFile)
    {
        outFile << "\nThis is a new line of data being appended.\n";
        outFile << "Appending another line is just as easy.\n";

        outFile.close();

        cout << "Data successfully appended to existing file" << endl;
    }
    else
    {
        cout << "There is some error in opening or finding file\nPlease try again";
    }
    return 0;
}`,
    image:"q7.png"
  },
  // Question 8
  {
    q: "Write a C++ program to sort the lines of a text file in alphabetical order.",
    code:
`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{

    string lines[100];
    string line;
    int count = 0;

    // reading and counting all the lines from the file
    ifstream reading("main.txt");
    if (reading)
    {
        while (getline(reading, line) && count < 100)
        {
            lines[count] = line;
            count++;
        }
        reading.close();
    }

    // sorting all the lines using bubble sort
    for (int i = 0; i < count; i++)
    {
        for (int j = i + 1; j < count; j++)
        {
            if (lines[i][0] > lines[j][0])
            {
                line = lines[j];
                lines[j] = lines[i];
                lines[i] = line;
            }
        }
    }

    // now overwriting the original file
    ofstream writing("main.txt");
    if (writing)
    {
        for (int i = 0; i < count; i++)
        {
                cin >> lpf;
    int filenumber = int(round((float)linecount / lpf));

    fstream large("merge.txt",ios::in);
    if (large)
    {
        for (int i = 1; i <= filenumber; i++)
        {
            string name = "file" + to_string(i) + ".txt";
            fstream small(name, ios::out);
            if (small)
            {
                for (int j = 0; j < lpf; j++)
                {
                    if (getline(large, line))
                    {
                        small << line << endl;
                    }
                }
                cout << "file " << name << " is created!" << endl;
                small.close();
            }
        }
        large.close();
    }
}writing << lines[i] << endl;
        }
        writing.close();
        cout << "All the lines in the file has been sorted alphabatically";
    }

    return 0;
}`,
    image:"q8.png"
  },
  // Question 9
  {
    q: "Write a C++ program to merge multiple text files into a single file.",
    code:
`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    int count;
    string name;
    cout << "Enter the number of Input files(small files): ";
    cin >> count;

    fstream writing("main.txt", ios::out);
    writing.close();

    fstream write("main.txt", ios::app);
    if (write)
    {

        for (int i = 0; i < count; i++)
        {
            cout << "Enter the " << i + 1 << " File Name: ";
            cin >> name;
            ifstream read(name);
            if (read)
            {
                char ch;
                while (read.get(ch))
                {
                    write << (char)ch;
                }
                write << endl;
                cout << "Data written from file " << name << endl;
            }
        }
        cout << "\nMerge File ready";
        write.close();
    }
}`,
 image:"q9.png"
  },
  // Question 10
  {
    q: "Write a C++ program to split a large text file into smaller files of equal size.",
    code:
`#include <iostream>
#include <fstream>
#include <math.h>
using namespace std;

int main()
{
    int lpf;
    int linecount = 0;
    string line;
    fstream read("write.txt", ios::in);
    if (read)
    {
        while (getline(read, line))
        {
            linecount++;
        }
        read.close();
    }

    cout << "Total Number of line in Main File is " << linecount << endl;
    cout << "Enter the lines per file: ";
`,
   image:"q10.png"
  },
  // Question 11
  {
    q: "Write a C++ program to search for a specific string in a text file and display its line number(s).",
    code:
`#include <iostream>
#include <fstream>
#include <cstring>
using namespace std;
int main()
{
   string line, find;
   int lineCount = 0, found = 0;
   ifstream fread("write.txt");
   if (fread)
   {
      cout << "Enter the word you would like to find: ";
      cin >> find;
      while (getline(fread, line))
      {
         int size;
         lineCount++;

         if (line.find(find) != string::npos)
         {
            found = 1;
            break;
         }
      }
      if (found)
      {
         cout << "The word has been found" << endl;
         cout << "Line Number: " << lineCount;
      }
      else
      {
         cout << "Word not found!";
      }
   }
   return 0;
}`,
image:"q11.png"
  },
  // Question 12
  {
    q: "Write a C++ program to encrypt the contents of a text file using a simple encryption algorithm.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    char ch;
    fstream file("encrypt.txt", ios::out);
    if (file)
    {
        cout << "Enter the content you want to write in the file(Press ~ + enter to stop): ";
        ch = getchar();
        while (ch != 126)
        {
            file.put(ch+12);
            ch = getchar();
        }
        file.close();
        cout << "Your Data has been stored in the file in an ecrypted format";
    }
}`,
    image:"q12.png"
  },
  // Question 13
  {
    q: "Write a C++ program to decrypt the contents of a text file encrypted using the above algorithm.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    char ch;
    fstream file("encrypt.txt", ios::in);
    if (file)
    {
        ch = file.get();
        while (ch != -1)
        {
            cout << char(ch-12);
            ch = file.get();
        }
        file.close();
        cout << endl;
        cout << "Your stored Encrypted Data has been decrypted here";
    }
}`,
    image:"q13.png"
  },
  // Question 14
  {
    q: "Write a C++ program to read a CSV file and display its contents in tabular form.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream csv("new.csv", ios::in);

    if (csv)
    {
        char ch;
        while (csv.get(ch))
        {
            if (ch == ',')
            {
                ch = 9;
                cout << '|';
                cout << (char)ch;
            }
            else
            {
                cout << (char)ch;
            }
        }
    }

    return 0;
}`,
   image:"q14.cpp.png"
  },
  // Question 15
  {
    q: "Write a C++ program to calculate the average of numbers stored in a file.",
    code:
`#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream reading("number.txt", ios::in);
    if (reading)
    {
        float num;
        int numcount = 0;
        float avg = 0;
        while (reading >> num)
        {
            avg += num;
            numcount++;
        }
        avg = (avg / numcount);
        cout << endl
             << "Average of all the numbers in the file is :  " << avg;
        reading.close();
    }
}`,
image:"q15.png"
    
 
  },])
  database.strings.questions=([// Question 1
    {
        q: "Program to Check Anagram",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    string str1, str2;

    cout << "Enter the first string: ";
    cin >> str1;

    cout << "Enter the second string: ";
    cin >> str2;

    if (str1.length() != str2.length())
    {
        cout << "Not an Anagram";
        return 0;
    }

    bool used[100] = {false}; // track matched chars

    for (int i = 0; i < str1.length(); i++)
    {
        bool found = false;

        for (int j = 0; j < str2.length(); j++)
        {
            if (str1[i] == str2[j] && !used[j])
            {
                used[j] = true;
                found = true;
                break;
            }
        }

        if (!found)
        {
            cout << "Not an Anagram";
            return 0;
        }
    }

    cout << "Anagram";
    return 0;
}`,
        output:
            `Enter the first string: listen
Enter the second string: silent
Anagram`
    },

    // Question 2
    {
        q: "Program to Swapping Pair of Characters",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    char str[3];

    cout << "Enter 2 characters: ";
    cin >> str[0] >> str[1];

    char temp = str[0];
    str[0] = str[1];
    str[1] = temp;

    cout << "Swapped: ";
    for (int i = 0; i < 2; i++)
    {
        cout << str[i];
    }

    return 0;
}`,
        output:
            `Enter 2 characters: ab
Swapped: ba`
    },

    // Question 3
    {
        q: "Program to Check if a String contains only digits?",
        code:
            `#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string (only numeric allowed)";
    cin>>str;
    bool istrue = true;
    for(int i=0; i<str.length();i++){
        if(str[i]<'0'||str[i]>'9'){
            istrue = false;
            break;
        }
    }
    if(istrue){
        cout<<"Input valid on number";
    }
    else{
        cout<<"Invalid input";
    }
}`,
        output:
            `Enter the string (only numeric allowed)12345
Input valid on number`
    },

    // Question 4
    {
        q: "Program to perform Deep Copy for String?",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    char Str[100];
    char str2[100];
    cout << "Enter the string1: ";
    cin >> Str;
    strcpy(str2, Str);
    cout << endl
         << "Converted: " << Str << endl
         << str2;
}`,
        output:
            `Enter the string1: hello

Converted: hello
hello`
    },

    // Question 5
    {
        q: "Program to remove all occurrences of a given character from input String?",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    char str[100], ch;
    int j = 0;
    cout << "Enter the string: ";
    cin >> str;
    cout << endl
         << "Enter the character to be removed: ";
    cin >> ch;
    for (int i = 0; str[i] != '\\0'; i++)
    {
        if (str[i] != ch)
        {
            str[j++] = str[i];
        }
    }
    str[j] = '\\0';
    cout << "Updated String: " << str;
}`,
        output:
            `Enter the string: programming

Enter the character to be removed: g
Updated String: prommarin`
    },

    // Question 6
    {
        q: "Program to Add Characters to a String",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    char str[30], str2[30];
    cout << "Enter the string: ";
    cin >> str;
    cout << endl
         << "Enter the characters: ";
    cin >> str2;
    strcat(str, str2);
    cout << endl
         << "character added: " << str;
}`,
        output:
            `Enter the string: Hello

Enter the characters: World

character added: HelloWorld`
    },

    // Question 7
    {
        q: "Program to check whether a string is a Palindrome",
        code:
            `#include <iostream>
using namespace std;
int main(){
    string str,str2;
    cout<<"Enter the string to check: ";
    cin>>str;
    str2 = str;
    int size = str.length();
    for(int i =0; i<size;i++){
        str2[i]=str[size-1-i];
        
    }
    cout<<"Converted: "<<str2;
    if(str==str2){
        cout<<endl<<"Palindrome";
    }
    else{
        cout<<"not Palindrome";
    }
}`,
        output:
            `Enter the string to check: madam
Converted: madam
Palindrome`
    },

    // Question 8
    {
        q: "Program to Convert Enum to String",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    enum Day
    {
        MON,
        TUE,
        WED,
        THU,
        FRI,
        SAT,
        SUN
    };
    Day d = WED;
    string DayName[] = {"MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"};
    cout << "Day: " << DayName[d];
}`,
        output:
            `Day: WED`
    },

    // Question 9
    {
        q: "Program to count number of words in a String?",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    string str;
    int count = 1;
    cout << "Enter the data of string ";
    getline(cin, str);
    if (str.length() == 0)
    {
        cout << endl
             << "Number of Words: 0";
        return 0;
    }
    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == ' ')
        {
            count++;
        }
    }
    cout << endl
         << "The number of words are: " << count;
}`,
        output:
            `Enter the data of string Hello World How Are You

The number of words are: 5`
    },

    // Question 10
    {
        q: "Program to count the total number of characters in a string",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    string str;
    int count = 0;
    cout << "Enter the string Data: ";
    getline(cin, str);
    if (str.length() == 0)
    {
        cout << endl
             << "The number of Character: 0";
        return 0;
    }
    count = str.length();
    cout << endl
         << "The number of character is: " << count;
}`,
        output:
            `Enter the string Data: Hello World

The number of character is: 11`
    },

    // Question 11
    {
        q: "Program to count the total number of punctuation characters exists in a String",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    int count = 0;
    cout << "Enter the String Data: ";
    getline(cin, str);
    if (str.length() == 0)
    {
        cout << "Not valid ";
        return 0;
    }
    for (int i = 0; i < str.length(); i++)
    {
        char ch = str[i];
        if (!(ch >= 'a' && ch <= 'z' ||
              ch >= 'A' && ch <= 'Z' ||
              ch >= '0' && ch <= '9'))
        {
            count++;
        }
    }
    cout << endl
         << "The number of punchuations are: " << count;
}`,
        output:
            `Enter the String Data: Hello, World! How are you?

The number of punchuations are: 4`
    },

    // Question 12
    {
        q: "Program to count the total number of vowels and consonants in a string",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str;
    int vowels = 0, consonants = 0;

    cout << "Enter the String: ";
    getline(cin, str);

    if (str.length() == 0)
    {
        cout << "\\nNothing is Entered";
        return 0;
    }

    for (int i = 0; i < str.length(); i++)
    {
        char ch = str[i];

        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
        {

            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
                ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
            {
                vowels++;
            }
            else
            {
                consonants++;
            }
        }
    }

    cout << "\\nThe vowels are: " << vowels;
    cout << "\\nThe consonants are: " << consonants;

    return 0;
}`,
        output:
            `Enter the String: Hello World

The vowels are: 3
The consonants are: 7`
    },

    // Question 13
    {
        q: "Program to determine whether a given string is palindrome",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str, str2;
    cout << "Enter the string to check: ";
    cin >> str;
    str2 = str;
    int size = str.length();
    for (int i = 0; i < size; i++)
    {
        str2[i] = str[size - 1 - i];
    }
    cout << "Converted: " << str2;
    if (str == str2)
    {
        cout << endl
             << "Palindrome";
    }
    else
    {
        cout << "not Palindrome";
    }
}`,
        output:
            `Enter the string to check: madam
Converted: madam
Palindrome`
    },

    // Question 14
    {
        q: "Program to determine whether one string is a rotation of another",
        code:
            `#include <iostream>
using namespace std;

int main(){
    string str1, str2;

    cout << "Enter the string 1: ";
    cin >> str1;

    cout << "\\nEnter the string 2: ";
    cin >> str2;

    if(str1.length() != str2.length()){
        cout << "\\nNot Rotated";
        return 0;  
    }

    string temp = str1 + str1;
    bool found = false;

    for(int i = 0; i <= temp.length() - str2.length(); i++){
        int j;

        for(j = 0; j < str2.length(); j++){
            if(temp[i + j] != str2[j]){
                break;
            }
        }

        if(j == str2.length()){
            found = true;
            break;   
        }
    }

    if(found){
        cout << "\\nThe String is Rotated";
    }
    else{
        cout << "\\nNot Rotated";
    }

    return 0;
}`,
        output:
            `Enter the string 1: abcde

Enter the string 2: cdeab

The String is Rotated`
    },

    // Question 15
    {
        q: "Program to divide a string in 'N' equal parts.",
        code:
            `#include <iostream>
using namespace std;
int main(){
    string str1;
    cout<<"Enter the String To divide: ";
    cin>>str1;
    int len = str1.length();
    int N;
    cout<<"\\nEnter the Part to Divide the String";
    cin>>N;
    if(len%2!=0){
        cout<<"\\nString is not divisible by "<<N;
        return 0;
    }
    int part = len/N;
    for(int i = 0; i<len; i = i+part){
        for(int j = i; j< i+part; j++){
            cout<<str1[j];
        }
        cout<<endl;
    }

}`,
        output:
            `Enter the String To divide: abcdef

Enter the Part to Divide the Stringab
cd
ef`
    },

    // Question 16
    {
        q: "Program to find all subsets of a string",
        code:
            `#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    string str;
    cout << "Enter the String to find Substet: ";
    cin >> str;
    int len = str.length();
    int pos = pow(2, len);
    for (int i = 0; i < pos; i++)
    {
        for (int j = 0; j < len; j++)
        {
            if (i & (1 << j))
            {
                cout << str[j];
            }
        }
        cout << endl;
    }
}`,
        output:
            `Enter the String to find Substet: abc

a
b
ab
c
ac
bc
abc`
    },

    // Question 17
    {
        q: "Program to find all the permutations of a string",
        code:
            `#include <iostream>
using namespace std;

void permute(string &str, int l, int r)
{
    if (l == r)
    {
        cout << str << endl;
        return;
    }

    for (int i = l; i <= r; i++)
    {
        swap(str[l], str[i]);
        permute(str, l + 1, r);
        swap(str[l], str[i]);
    }
}

int main()
{
    string str;
    cout << "Enter the string: ";
    cin >> str;

    permute(str, 0, str.length() - 1);

    return 0;
}`,
        output:
            `Enter the string: abc
abc
acb
bac
bca
cab
cba`
    },

    // Question 18
    {
        q: "Program to find maximum and minimum occurring character in a string",
        code:
            `#include <iostream>
using namespace std;
int main(){
    string str;
    cout<<"Enter the string to find: ";
    getline(cin,str);
    int fre1[256]={0};
    for(int i = 0; i<str.length(); i++){
        fre1[(int)str[i]]++;
    }
    int max = 0 , minv = str.length();
    char maxc, minc;
    for(int i = 0; i<256; i++){
        if(fre1[i]>0){
            if(fre1[i]>max){
                 max = fre1[i];
                 maxc = char(i);
            }
            if(fre1[i]<minv){
                minv = fre1[i];
                minc = char(i);
            }
        }
    }
    cout<<"\\n Maximum occurance: "<<maxc<<"\\n Count: "<<max;
    cout<<"\\n Minimum occurance: "<<minc<<"\\n Count: "<<minv;
}`,
        output:
            `Enter the string to find: programming

 Maximum occurance: g
 Count: 2
 Minimum occurance:  
 Count: 1`
    },

    // Question 19
    {
        q: "Program to find Reverse of the string",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the String to reverse: ";
    getline(cin, str);
    int len = str.length();
    char reverse[len];
    for (int i = 0; i < len; i++)
    {
        reverse[i] = str[len - 1 - i];
    }
    cout << "\\n Printing the Reversed: ";
    for (int i = 0; i < len; i++)
    {
        cout << reverse[i];
    }
}`,
        output:
            `Enter the String to reverse: Hello World

 Printing the Reversed: dlroW olleH`
    },

    // Question 20
    {
        q: "Program to find the duplicate characters in a string",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the string to find: ";
    getline(cin, str);
    int freq[256] = {0};
    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] != ' ')
        {
            freq[(int)str[i]]++;
        }
    }
    for (int i = 0; i < 256; i++)
    {
        if (freq[i] > 1)
        {
            cout << "\\nDuplicates: " << char(i) << " -----> " << freq[i] << endl;
        }
    }
}`,
        output:
            `Enter the string to find: programming

Duplicates: g -----> 2
Duplicates: m -----> 2
Duplicates: r -----> 2`
    },

    // Question 21
    {
        q: "Program to find the duplicate words in a string",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the String to find Duplicates";
    getline(cin, str);
    int n = str.length();
    string dup[100];
    int index = 0;
    int count[100] = {0};
    string temp = "";
    for (int i = 0; i <= n; i++)
    {
        if (str[i] == ' ' || str[i] == '\\0')
        {
            dup[index] = temp;
            index++;
            temp = "";
        }
        else
        {
            temp = temp + str[i];
        }
    }

    for (int i = 0; i < index; i++)
    {
        if (dup[i] == "")
        {
            continue;
        }
        for (int j = i + 1; j < index; j++)
        {
            if (dup[i] == dup[j])
            {
                count[i]++;
                dup[j] = "";
            }
        }
    }

    for (int i = 0; i < index; i++)
    {
        if (count[i] > 0)
        {
            cout << "The Duplicates Are: " << dup[i] << endl;
        }
    }
}`,
        output:
            `Enter the String to find DuplicatesHello World Hello World
The Duplicates Are: Hello
The Duplicates Are: World`
    },

    // Question 22
    {
        q: "Program to find the frequency of characters",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the string to find ";
    getline(cin, str);
    int freq[256] = {0};
    for (int i = 0; i < str.length(); i++)
    {
        freq[str[i]]++;
    }
    for (int i = 0; i < str.length(); i++)
    {
        if (freq[str[i]] != 0)
        {
            cout << str[i] << " occurs at " << freq[str[i]] << "Times\\n";
            freq[str[i]] = 0;
        }
    }
}`,
        output:
            `Enter the string to find Hello
H occurs at 1Times
e occurs at 1Times
l occurs at 2Times
o occurs at 1Times`
    },

    // Question 23
    {
        q: "Program to find the largest and smallest word in a string",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the string to find: ";
    getline(cin, str);
    string words = "", largest = "", smallest = "";
    for (int i = 0; i <= str.length(); i++)
    {
        if (str[i] == ' ' || i == str.length())
        {
            if (words.length() > 0)
            {
                if (largest == "" && smallest == "")
                {
                    largest = smallest = words;
                }
                else
                {
                    if (words.length() > largest.length())
                    {
                        largest = words;
                    }
                    if (words.length() < smallest.length())
                    {
                        smallest = words;
                    }
                }
            }
            words = "";
        }
        else
        {
            words = words + str[i];
        }
    }
    cout << "Smallest number is: " << smallest;
    cout << "\nLargest word is: " << largest;
}
`,
        output:
            `Enter the string to find: Hello Beautiful World
Smallest number is: Hello
Largest word is: Beautiful`
    },

    // Question 24
    {
        q: "Program to find the longest repeating sequence in a string",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the string: ";
    getline(cin, str);
    int size = str.length();
    string longest = "";
    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            string temp = "";
            int x = i, y = j;
            while (y < size && str[x] == str[y])
            {
                temp = temp + str[x];
                x++;
                y++;
            }
            if (temp.length() > longest.length())
            {
                longest = temp;
            }
        }
    }
    cout << "The Longest sequence is: " << longest;
}`,
        output:
            `Enter the string: aabcaab
The Longest sequence is: aab`
    },

    // Question 25
    {
        q: "Program to find the most repeated word in a text file",
        code:
            `#include <iostream>
#include <fstream>
using namespace std;
int main()
{
    ifstream fobj("data.txt");
    if (!fobj)
    {
        cout << "File does not exist";
        return 0;
    }
    string words[1000];
    string word;
    int index = 0;
    int count[1000] = {0};
    while (fobj >> word)
    {
        words[index] = word;
        index++;
    }
    for (int i = 0; i < index; i++)
    {
        if (words[i] == "")
        {
            continue;
        }
        for (int j = i + 1; j < index; j++)
        {
            if (words[i] == words[j])
            {
                count[i]++;
                words[j] = "";
            }
        }
    }
    int max = 0;
    string most;

    for (int i = 0; i < index; i++)
    {
        if (count[i] > max)
        {
            max = count[i];
            most = words[i];
        }
    }

    cout << "\\nMost repeated word: " << most;
    cout << "\\nFrequency: " << max + 1;
    fobj.close();
}`,
        output:
            `Most repeated word: the
Frequency: 7`
    },

    // Question 26
    {
        q: "Program to find the number of the words in the given text file",
        code:
            `#include <iostream>
#include <fstream>
using namespace std;
int main()
{
    fstream fobj("data.txt");
    if (!fobj)
    {
        cout << "File Foes not exist: " << endl;
    }
    string word;
    int count = 0, index = 0;
    while (fobj >> word)
    {
        count++;
    }
    cout << "The numbers of words are: " << count;
    fobj.close();
}`,
        output:
            `The numbers of words are: 54`
    },

    // Question 27
    {
        q: "Program to Get a Character From the Given String",
        code:
            `#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream fobj("data2.txt", ios::out);

    string str;
    cout << "Enter the string to find character: ";
    getline(cin, str);

    fobj << str;
    fobj.close();

    cout << "\\nEnter the character to find: ";
    char ch;
    cin >> ch;

    fstream fobj2("data2.txt", ios::in);

    int count = 0;
    char c;

    while (fobj2.get(c))
    {
        if (c == ch)
        {
            count++;
        }
    }

    cout << "\\nCharacter '" << ch << "' occurs " << count << " times";

    fobj2.close();
    return 0;
}`,
        output:
            `Enter the string to find character: Hello World

Enter the character to find: l

Character 'l' occurs 3 times`
    },

    // Question 28
    {
        q: "Program to Insert a string into another string",
        code:
            `#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    string str1, str2, res = "";
    cout << "Enter the string 1: ";
    getline(cin, str1);
    cout << "\\nEnter the string 2: ";
    getline(cin, str2);
    int pos;
    cout << "\\n Enter the position of insertion: ";
    cin >> pos;
    for (int i = 0; i < pos; i++)
    {
        res = res + str1[i];
    }
    res = res + str2;
    for (int i = pos; i < str1.length(); i++)
    {
        res = res + str1[i];
    }
    cout << "The inserted string is: " << res;
}`,
        output:
            `Enter the string 1: HelloWorld

Enter the string 2: Beautiful

 Enter the position of insertion: 5
The inserted string is: HelloBeautifulWorld`
    },

    // Question 29
    {
        q: "Program to Print a New Line in String (Each word in newline)",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str;
    cout << "Enter the string: ";
    getline(cin, str);

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == ' ')
        {
            cout << endl;
        }
        else
        {
            cout << str[i];
        }
    }

    return 0;
}`,
        output:
            `Enter the string: Hello World How Are You
Hello
World
How
Are
You`
    },

    // Question 30
    {
        q: "Program to Print even length words",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str1;
    cout << "Enter the string: ";
    getline(cin, str1);
    string str2 = "";
    for (int i = 0; i <= str1.length(); i++)
    {
        if (str1[i] == ' ' || str1[i] == '\\0')
        {
            if (str2.length() % 2 == 0 && str2.length() > 0)
            {
                cout << "Even words: " << str2 << "\\n";
            }
            str2 = "";
        }
        else
        {
            str2 = str2 + str1[i];
        }
    }
}`,
        output:
            `Enter the string: Hello Go Beautiful at
Even words: Go
Even words: at`
    },

    // Question 31
    {
        q: "Program to print smallest and biggest possible palindrome word in a given string",
        code:
            `#include <iostream>
using namespace std;
bool palindrome(string word)
{
    int start = 0;
    int end = word.length() - 1;
    while (start < end)
    {
        if (word[start] != word[end])
        {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
int main()
{
    string str;
    cout << "Enter the string to find: ";
    getline(cin, str);
    string word = "", smallest = "", longest = "";
    for (int i = 0; i <= str.length(); i++)
    {
        if (str[i] == ' ' || str[i] == '\\0')
        {
            if (word.length() > 0 && palindrome(word))
            {
                if (smallest == "" && longest == "")
                {
                    smallest = longest = word;
                }
                else
                {
                    if (word.length() > longest.length())
                    {
                        longest = word;
                    }
                    if (word.length() < smallest.length())
                    {
                        smallest = word;
                    }
                }
            }
            word = "";
        }
        else
        {
            word = word + str[i];
        }
    }
    if (smallest == "")
    {
        cout << "No Palindrome\\n";
    }
    else
    {
        cout << "Largest Palindrome: " << longest << "\\n";
        cout << "Smallest Palindrome: " << smallest << "\\n";
    }
}`,
        output:
            `Enter the string to find: madam racecar aba hello
Largest Palindrome: racecar
Smallest Palindrome: aba`
    },

    // Question 32
    {
        q: "Program to remove all the white spaces from a string",
        code:
            `#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream obj("file.txt", ios::out);

    string str;
    cout << "Enter the string: ";
    getline(cin, str);

    obj << str;
    obj.close();

    fstream obj2("file.txt", ios::in);

    char ch;
    string result = "";

    while (obj2.get(ch))
    {
        if (ch != ' ')
        {
            result += ch;
        }
    }

    cout << "White Space removed: " << result;

    obj2.close();
    return 0;
}`,
        output:
            `Enter the string: Hello World How Are You
White Space removed: HelloWorldHowAreYou`
    },

    // Question 33
    {
        q: "Program to replace lower-case characters with upper-case and vice-versa",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the string to convert: ";
    getline(cin, str);
    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] != ' ')
        {
            if (str[i] >= 'a' && str[i] <= 'z')
            {
                char ch = str[i];
                ch = ch - 32;
                str[i] = ch;
            }
            else if (str[i] >= 'A' && str[i] <= 'Z')
            {
                char ch = str[i];
                ch = ch + 32;
                str[i] = ch;
            }
            else
            {
                continue;
            }
        }
    }
    cout << "Converted: " << str;
}`,
        output:
            `Enter the string to convert: Hello World
Converted: hELLO wORLD`
    },

    // Question 34
    {
        q: "Program to replace the spaces of a string with a specific character",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the String to Replace: ";
    getline(cin, str);
    char ch;
    cout << "\\n Enter the Character to Replace space: ";
    cin >> ch;
    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] == ' ')
        {
            str[i] = ch;
        }
    }
    cout << "Replaced String is: " << str;
}`,
        output:
            `Enter the String to Replace: Hello World How Are You

 Enter the Character to Replace space: _
Replaced String is: Hello_World_How_Are_You`
    },

    // Question 35
    {
        q: "Program to separate the Individual Characters from a String",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the string to seperate: ";
    getline(cin, str);
    cout << "Seperated string by character is: \\n";
    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] != ' ')
        {
            cout << str[i] << endl;
        }
    }
}`,
        output:
            `Enter the string to seperate: Hi
Seperated string by character is: 
H
i`
    },

    // Question 36
    {
        q: "Program to Splitting into a number of sub-strings",
        code:
            `#include <iostream>
using namespace std;
int main()
{
    string str;
    cout << "Enter the String to Split: ";
    getline(cin, str);
    string split = "";
    for (int i = 0; i <= str.length(); i++)
    {
        if (str[i] == ' ' || str[i] == '\\0')
        {
            if (split.length())
            {
                cout << split << endl;
            }
            split = "";
        }
        else
        {
            split = split + str[i];
        }
    }
}`,
        output:
            `Enter the String to Split: Hello World How Are You
Hello
World
How
Are
You`
    },

    // Question 37
    {
        q: "Program to swap two string variables without using third or temp variable.",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str1, str2;
    cout << "Enter first string: ";
    getline(cin, str1);
    cout << "Enter second string: ";
    getline(cin, str2);
    str1 = str1 + str2;
    str2 = str1.substr(0, str1.length() - str2.length());
    str1 = str1.substr(str2.length());
    cout << "\\nAfter swapping:\\n";
    cout << "str1 = " << str1 << endl;
    cout << "str2 = " << str2 << endl;
}`,
        output:
            `Enter first string: Hello
Enter second string: World

After swapping:
str1 = World
str2 = Hello`
    },

    // Question 38
    {
        q: "Read two String user input and check if first contains second?",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str1, str2;

    cout << "Enter first string: ";
    getline(cin, str1);
    cout << "Enter second string: ";
    getline(cin, str2);
    bool found = false;
    for (int i = 0; i <= str1.length() - str2.length(); i++)
    {
        int j;
        for (j = 0; j < str2.length(); j++)
        {
            if (str1[i + j] != str2[j])
            {
                break;
            }
        }
        if (j == str2.length())
        {
            found = true;
            break;
        }
    }

    if (found)
    {
        cout << "Second string is present in first string";
    }
    else
    {
        cout << "Second string is NOT present";
    }

    return 0;
}`,
        output:
            `Enter first string: Hello World
Enter second string: World
Second string is present in first string`
    },

    // Question 39
    {
        q: "Reverse String Word by Word",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str;
    cout << "Enter the string to reverse: ";
    getline(cin, str);
    string word = "";
    for (int i = str.length() - 1; i >= 0; i--)
    {
        if (str[i] == ' ')
        {
            cout << word << " ";
            word = "";
        }
        else
        {
            word = str[i] + word;
        }
    }
    cout << word;
}`,
        output:
            `Enter the string to reverse: Hello World How Are You
You Are How World Hello`
    },

    // Question 40
    {
        q: "Write a program to check if two Strings are created with same characters?",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str1, str2;

    cout << "Enter first string: ";
    getline(cin, str1);

    cout << "Enter second string: ";
    getline(cin, str2);

    if (str1.length() != str2.length())
    {
        cout << "Not created with same characters";
        return 0;
    }

    int freq[256] = {0};
    for (int i = 0; i < str1.length(); i++)
    {
        freq[str1[i]]++;
    }

    for (int i = 0; i < str2.length(); i++)
    {
        freq[str2[i]]--;
    }
    for (int i = 0; i < 256; i++)
    {
        if (freq[i] != 0)
        {
            cout << "Not created with same characters";
            return 0;
        }
    }
    cout << "Both strings are created with same characters";
}`,
        output:
            `Enter first string: listen
Enter second string: silent
Both strings are created with same characters`
    },

    // Question 41
    {
        q: "Write a program to find out first non repeated character from input String?",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str;
    char ch;
    int isRepeated = 0;

    cout << "Enter the string : ";
    getline(cin, str);

    for (int i = 0; i < (str.length()); i++)
    {
        ch = str[i];

        for (int j = i + 1; j < str.length(); j++)
        {
            if (ch == str[j])
            {
                isRepeated = 1;
                break;
            }
        }

        if (isRepeated==0)
        {
            break;
        }
    }

    if (isRepeated==0)
    {
        cout << "First non-Repeated Character in string is: " << ch;
    }
    else
    {
        cout << "String has no repeatitive characters";
    }

    return 0;
}`,
        output:
            `Enter the string : programming
First non-Repeated Character in string is: p`
    },

    // Question 42
    {
        q: "Write a C++ method to count all words in a string",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str;
    char ch;
    int wordCount = 1;

    cout << "Enter the string : ";
    getline(cin, str);

    for (int i = 0; i < (str.length()); i++)
    {
        ch = str[i];
        if (ch == 9 || ch == 32)
        {
            wordCount++;
        }
    }

    cout << "Total words in the strings is: " << wordCount;

    return 0;
}`,
        output:
            `Enter the string : Hello World How Are You
Total words in the strings is: 5`
    },

    // Question 43
    {
        q: "Write a C++ method to count all vowels in a string",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str;
    char ch;
    int vowelCount = 0;

    cout << "Enter the string : ";
    getline(cin, str);

    for (int i = 0; i < (str.length()); i++)
    {
        ch = str[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            vowelCount++;
        }
    }

    cout << "Total words in the strings is: " << vowelCount;

    return 0;
}`,
        output:
            `Enter the string : Hello World
Total words in the strings is: 3`
    },

    // Question 44
    {
        q: "Write a C++ Program to Sort Names in an Alphabetical Order",
        code:
            `#include <iostream>
#include <string>
using namespace std;

int main()
{
    string names[5];
    string temp;

    cout << "Enter any 5 names you like: " << endl;
    for (int i = 0; i < 5; i++)
    {
        cout << "Name " << i + 1 << endl;
        cout << "Enter: ";
        getline(cin, names[i]);
    }

    for (int i = 0; i < 5; i++)
    {
        for (int j = i + 1; j < 5; j++)
        {
            if (names[i].compare(names[j]) > 0)
            {
                temp = names[i];
                names[i] = names[j];
                names[j] = temp;
            }
        }
    }

    cout << "Here are all the Names is Alphabetical order" << endl;
    for (int i = 0; i < 5; i++)
    {
        cout << i + 1 << ") " << names[i] << endl;
    }

    return 0;
}`,
        output:
            `Enter any 5 names you like: 
Name 1
Enter: Sara
Name 2
Enter: Alice
Name 3
Enter: Mike
Name 4
Enter: John
Name 5
Enter: Bob
Here are all the Names is Alphabetical order
1) Alice
2) Bob
3) John
4) Mike
5) Sara`
    },

    // Question 45
    {
        q: "Write a C++ method to count all the words in a string.",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string str;
    char ch;
    int wordCount = 1;

    cout << "Enter the string : ";
    getline(cin, str);

    for (int i = 0; i < (str.length()); i++)
    {
        ch = str[i];
        if (ch == 9 || ch == 32)
        {
            wordCount++;
        }
    }

    cout << "Total words in the strings is: " << wordCount;

    return 0;
}`,
        output:
            `Enter the string : Hello World How Are You
Total words in the strings is: 5`
    },

    // Question 46
    {
        q: "Write a C++ method to compute the future investment value at a given interest rate for a specified number of years.",
        code:
            `#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    float principal, roi, time, n, total;

    cout << "Enter the following details: " << endl;
    cout << "Principal Amount: ";
    cin >> principal;
    cout << "Rate of interest(ROI): ";
    cin >> roi;
    cout << "Number of times interest is componded in 1 year: ";
    cin >> n;
    cout << "Time (in years): ";
    cin >> time;

    total = (principal * (pow((1 + ((roi / 100) / n)), (n * time))));

    cout << "Future Investment Total(Considiring Compund Interest): " << total;
}`,
        output:
            `Enter the following details: 
Principal Amount: 1000
Rate of interest(ROI): 5
Number of times interest is componded in 1 year: 12
Time (in years): 3
Future Investment Total(Considiring Compund Interest): 1161.62`
    },

    // Question 47
    {
        q: "Write a C++ method to print characters between two characters (i.e. A to P).",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    char ch1, ch2;

    cout << "Enter 1st Character: ";
    cin >> ch1;
    cout << "Enter 2nd Character: ";
    cin >> ch2;

    if (ch2 <= ch1)
    {
        cout << "Invalid Characters or sequence order entered!";
        return 0;
    }

    cout << "All the characters between entered two characters are: " << endl;
    for (int i = (int(ch1) + 1); i < int(ch2); i++)
    {
        cout << char(i) << endl;
    }

    return 0;
}`,
        output:
            `Enter 1st Character: A
Enter 2nd Character: P
All the characters between entered two characters are: 
B
C
D
E
F
G
H
I
J
K
L
M
N
O`
    },

    // Question 48
    {
        q: "Write a C++ method to check whether a string is a valid password.",
        code:
            `#include <iostream>
using namespace std;

int main()
{
    string password;
    char ch;
    int isValid = 1;

    cout << "Valid Password criteria: Password should only contains alphanumberic characters and has maximum length of 15 characters!";

    cout << "\\nEnter a Password: ";
    cin.ignore();
    getline(cin, password);

    if (password.length() > 15)
    {
        isValid = 0;
    }

    for (int i = 0; i < password.length(); i++)
    {
        ch = password[i];
        if (!((ch <= 'z' && ch >= 'a') || (ch <= 'Z' && ch >= 'A') || (ch >= '0' && ch <= '9')))
        {
            isValid = 0;
        }
    }

    if (isValid)
    {
        cout << "Password Valid!";
    }
    else
    {
        cout << "Password Invalid!";
    }

    return 0;
}`,
        output:
            `Valid Password criteria: Password should only contains alphanumberic characters and has maximum length of 15 characters!
Enter a Password: Hello123
Password Valid!`
    },

    // Question 49
    {
        q: "Write a C++ method to display the current date and time.",
        code:
            `#include <iostream>
#include <ctime>
using namespace std;

int main() {
    time_t currentTime = time(0);

    // Convert to local time structure
    tm *localTime = localtime(&currentTime);

    char buffer[100];

    // Format: DD-MM-YYYY HH:MM:SS
    strftime(buffer, sizeof(buffer), "%d-%m-%Y %H:%M:%S", localTime);

    cout << "Current system time is: " << buffer << endl;

    return 0;
}`,
        output:
            `Current system time is: 05-04-2026 10:30:00`
    },

    // Question 50
    {
        q: "Write a C++ method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false",
        code:
            `#include <iostream>
using namespace std;

int checkmiddle(int &a, int &b, int &c)
{

    if ((a + b == 2 * c) || (b + c == 2 * a) || (c + a == 2 * b))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

int main()
{
    int arr[3];

    for (int i = 0; i < 3; i++)
    {
        cout << "Enter Number " << i + 1 << ": ";
        cin >> arr[i];
    }

    if (checkmiddle(arr[0], arr[1], arr[2]))
    {
        cout << "Method returned True";
    }
    else
    {
        cout << "Method returned False";
    }

    return 0;
}
`,
        output:
            `Enter Number 1: 2
Enter Number 2: 4
Enter Number 3: 6
Method returned True`
    },])
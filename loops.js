/*
1)Task 4: Sum of Numbers from 1 to 100
Scenario: Write JavaScript code that calculates the sum of numbers from 1 to 100.
Instructions:
Use a for loop to iterate from 1 to 100.
Add each number to a sum variable and print the total sum.
*/

sum =1;
for(var a=1;a<=100;a++){
    sum+=a;
    console.log(sum);
}
/*
output:-
2
4
7
11
16
22
29
37
46
56
67
79
92
106
121
137
154
172
191
211
232
254
277
301
326
352
379
407
436
466
497
529
562
596
631
667
704
742
781
821
862
904
947
991
1036
1082
1129
1177
1226
1276
1327
1379
1432
1486
1541
1597
1654
1712
1771
1831
1892
1954
2017
2081
2146
2212
2279
2347
2416
2486
2557
2629
2702
2776
2851
2927
3004
3082
3161
3241
3322
3404
3487
3571
3656
3742
3829
3917
4006
4096
4187
4279
4372
4466
4561
4657
4754
4852
4951
5051
*/

/*
3) Create a JavaScript program that calculates the
 factorial of a given number using a for loop.
Instructions:
Use a for loop to multiplication the given 
Take prompt from the user
hint: take count value as 1;
5*4*3*2*1=120
*/

var factorial=5;
for(var h=5;h>=1;h--){
   factorial*=h;
   console.log(factorial);
}

/*
Task 6: Print Numbers in Reverse Order
Scenario: Write JavaScript code that prints numbers from 10 to 1 in reverse order.
*/
for(var re=10;re>=1;re--){
    console.log(re);
}
/*
output:-
10
9
8
7
6
5
4
3
2
1
*/



/*
4) Print the Alphabet
Scenario: Write JavaScript code that prints the alphabet from A to Z.
Instructions:
Use a for loop to iterate through the ASCII values of the letters A to Z.
Convert the ASCII values to characters and print them.
Hint - console.log(String.fromCharCode(i));
*/
for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
}

/*
output:-
A
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
O
P
Q
R
S
T
U
V
W
X
Y
Z
*/


/*
5)write a for loop to print numbers from 1 to 10.
*/
for(var v=1;v<=10;v++){
    console.log(v);
}
/*
output:-
1
2
3
4
5
6
7
8
9
10
*/


/*
6)Write a for loop to print the multiplication table of 7 (up to 10)
*/
var tab=7;
for(var t=1;t<=10;t++){
    console.log(`${tab}*${t}=${tab*t}`);
}
/*
output:-
7*1=7
7*2=14
7*3=21
7*4=28
7*5=35
7*6=42
7*7=49
7*8=56
7*9=63
7*10=70
*/


/*
7)write a for loop to print all even numbers between 1 and 20.
*/
for(var e=1;e<=20;e++){
    if(e%2==0){
        console.log(e);
    }
}
/*
output:-
2
4
6
8
10
12
14
16
18
20
*/



/*
8)Write a for loop to calculate the factorial of a number (e.g., 5!).
*/
var fact=5;
for(var a=5;a>=1;a--){
    fact-=fact*a;
    console.log(fact);
}
/*
output:-
-20
60
-120
120
0
*/


/*
9) Write a for loop to print all odd numbers between 20 and 1 in reverse order.
*/
for(var a=19;a>=1;a=a-2){
    console.log(a);
}

      //
      
for(var a=20;a>=1;a--){
  if(a%2!=0){
      console.log(a);
  }
}
/*
output:-
19
17
15
13
11
9
7
5
3
1
*/









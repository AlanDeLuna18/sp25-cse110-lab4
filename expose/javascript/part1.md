1) Since the variable was declared with "var", line 9 will print the sum of num1 and num2 with no issue
2) Result was declared as "var", meaning that it can be used outside of its declared code block, so
3) Var should be avoided since it can cause scoping issues as well as the possibility of redeclaring variables.
4) Here we are using "let" to declare result, and we are using result in its same code block, so it will print the sum of num1 and num2
5) In this code, we declared result in the previous code block, so in line 13 it will not be able to print. Therefore, it will return a undefined variable error
6) In this scenario, line 9 would throw an error since const variables cannot be reassigned
7) This would also throw an error since we are not able to resassign const variables. We also also trying to access the const variable outside of its code block! 

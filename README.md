[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer 
- The outer loop runs $\log_2\left(n\right)$ because each iteration double the subarray size. 
- The inner loop will start n/2 times and decrease as the size of the subarray increases. This will lead us to $n$ iterations 
  total. 
- The mergre function swaps the elements and merges them into a sorted array in the worst case would run $n$ times.
- This gives us the time complexity of $T\left(n\right) = O\left(n^{2}\log_{2}\left(n\right)\right)$

I reviewed my repository from last semester and went over the Runtime analysis with the TA during Lab. 




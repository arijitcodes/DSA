#include<iostream>
#include<stdlib.h>

using namespace std;

int arr[30], top=-1, arraySize, isFull=false, isEmpty=true, ch, input;

void push() {
    if(top+1==arraySize) {
        cout << "\nCan't push any more elements! Overflow Detected!";
    }
    else {
        cout << "\n\nEnter Integer : ";
        cin >> input;
        arr[++top] = input;;
        cout << "\nInsertion Successful!\n\n";
    }
}

void pop() {
    if(top == -1) {
        cout << "\nThere is nothing to delete. Stack is Empty! Underflow Detected!\n" << endl;
    }
    else {
        cout << "\nElement " << arr[top--] << " has been deleted!\n\n" << endl;
    }
}

void peek() {
    if(top == -1) {
        cout << "\nStack is Empty!" << endl;
    }
    else {
        cout << "\nLast Inserted Element in Stack is = " << arr[top];
    }
}

void viewArray() {
    if(top==-1) {
        cout << "\nStack is Empty! Nothing to display!" <<endl;
    }
    else {
        cout << "\nElements in Stack : ";
        for (int i=top; i>=0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
}

void menu() {
    cout << "\nMenu :-\n\n1. Push\n2. Pop\n3. Peek\n4. View Stack\n5. Quit\n\nEnter Your Choice : ";
    cin >> ch;

    switch(ch) {
        case 1: push();
                viewArray();
                menu();
                break;
        case 2: pop();
                viewArray();
                menu();
                break;
        case 3: peek();
                viewArray();
                menu();
                break;
        case 4: viewArray();
                menu();
                break;
        case 5: exit(0);
                break;
        default: cout << "\n\nWrong Choice! Please try again...";
                menu();
                break;
    }
}

main(){

    cout << "Enter Stack Size : ";
    cin >> arraySize;

    menu();
}

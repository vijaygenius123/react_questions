# React Questions

Example Of Building A Simple Quiz With React


```mermaid
classDiagram

App -->Question
App -->Arrow

class App{
    -integer index
    -array selected
    handleArrowChange(index) int
    handleSelection(selectedIndex) int
}

class Question{
    *string question
    *string image
    *array choices
    *int preSelected
    -handleSelection(index) int
}

class Arrow{
    *int index
    *int length
    -handleArrowChange(index) int
}

```
//! SYNCHRONOUS PROGRAMMING
// - a synchronous function is one that runs in a single thread and completes its execution before moving on to next task .
// - it will block other operations until current task is complete.
// - synchronous pgm means a code execute line by line,that is one task at a time and eacj line waits for the previous line 
// to complete before executing.

// // NOTE:
// only one operartion happen at a time.
// no parallel execution allowed.
// if any task time to compltete ,it will block the entire program until that task is finished.NOTE


console.log("start")
function demo() {
    console.log("demo func is running")
}
demo();
console.log("end")
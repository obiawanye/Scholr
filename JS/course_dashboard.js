let button = document.getElementById('displayCourses');
button.addEventListener('click', function() {
    console.log('Display Courses button clicked');
});

let addCourse = document.getElementById('course');

let courseList = [];

document.getElementById('addCourse').addEventListener('click', function() {
    let courseName = addCourse.value.trim();
    if (courseName) {
        courseList.push(courseName);
        console.log(`Added course: ${courseName}`);
        addCourse.value = ''; // Clear the input field after adding
    } else {
        console.log('Please enter a valid course name.');
    }
});

document.getElementById('removeCourse').addEventListener('click', function() {
    let courseName = addCourse.value.trim();
    let index = courseList.indexOf(courseName);
    if (index !== -1) {
        courseList.splice(index, 1);
        console.log(`Removed course: ${courseName}`);
        addCourse.value = ''; // Clear the input field after removing
    } else {
        console.log(`Course not found: ${courseName}`);
    }
});

document.getElementById('editCourse').addEventListener('click', function() {
    let courseName = addCourse.value.trim();
    let index = courseList.indexOf(courseName);
    if (index !== -1) {
        let newCourseName = prompt('Enter the new course name:', courseName);
        if (newCourseName) {
            courseList[index] = newCourseName.trim();
            console.log(`Edited course: ${courseName} to ${newCourseName}`);
            addCourse.value = ''; // Clear the input field after editing
        } else {
            console.log('No new course name provided.');
        }
    } else {
        console.log(`Course not found: ${courseName}`);
    }
});

document.getElementById('displayCourses').addEventListener('click', function() {
    if (courseList.length > 0) {
        console.log('Courses:', courseList.join(', '));
        document.getElementById('courseList').innerText = `Courses: ${courseList.join(', ')}`;
    } else {
        console.log('No courses available.');
        document.getElementById('courseList').innerText = 'No courses available.';
    }
});
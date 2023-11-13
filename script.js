// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Select all 'Start Learning' buttons
    var startLearningButtons = document.querySelectorAll('.module a');

    // Add click event to each button
    startLearningButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Open a new window with filler text
            var newWindow = window.open('', '_blank');
            newWindow.document.write('<h1>Welcome to the Course</h1>');
            newWindow.document.write('<p>This is the beginning of your learning journey in this course module. More content will be added here.</p>');
            newWindow.document.close(); // Close the document stream
        });
    });
});

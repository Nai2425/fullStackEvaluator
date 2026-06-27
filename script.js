document.getElementById('greetBtn').addEventListener('click', function() {
    const greetingText = document.getElementById('greeting');
    const greetings = [
        '👋 Hello there!',
        '😊 Great to see you!',
        '🎉 You clicked me!',
        '✨ Beautiful, isn\'t it?',
        '🚀 Ready to build something?'
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingText.textContent = randomGreeting;
});

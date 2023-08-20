const people: string[] = ['Alice', 'Bob', 'Don', 'Eve']; // Example array, you can modify as per your needs
let found: boolean = false;

for (const p of people) {
  if (!found) {
    if (p === 'Don') {
      sendAlert();
      found = true;
    }
  }
}

function sendAlert(): void {
  // Implementation of sendAlert
  console.log('Alert sent!');
}

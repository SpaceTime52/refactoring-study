const peopleNames: string[] = ['Alice', 'Bob', 'Don', 'Eve'];
for (const p of peopleNames) {
  if (p === 'Don') {
    sendAlert();
    break;
  }
}

function sendAlert(): void {
  console.log('Alert sent!');
}

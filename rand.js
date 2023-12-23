 class SecretSantaGenerator {
    constructor(participants) {
      this.participants = participants;
    }
  
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    generateSecretSantaPairs() {
      const shuffledParticipants = [...this.participants];
      this.shuffleArray(shuffledParticipants);
  
      const secretSantaPairs = [];
  
      for (let i = 0; i < this.participants.length; i++) {
        secretSantaPairs.push([this.participants[i], shuffledParticipants[i]]);
      }
  
      return secretSantaPairs;
    }
  }
  
  // Example usage
  const participants = ["Dinesh", "Uday", "Suresh"];
  const secretSantaGenerator = new SecretSantaGenerator(participants);
  const secretSantaPairs = secretSantaGenerator.generateSecretSantaPairs();
  
  console.log("Secret Santa Pairs:");
  secretSantaPairs.forEach(([giver, recipient]) => {
    console.log(`"${giver}" : "${recipient}",`);
  });
   
// Menggunakan Function Promises
function printSongListPromise(songPromise) {
  songPromise
    .then((songs) => {
      console.log("Song list:");
      songs.forEach((song) => {
        console.log(`Title: ${song.title}`);
        console.log(`Artist: ${song.artists[0].name}`);
        console.log(`Duration: ${song.duration}`);
        console.log("-----------------------------------");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Example usage
const songPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation that resolves with a song list
  const songs = [
    {
      title: "Song 1",
      artists: [{ name: "Artist 1" }],
      duration: 200,
    },
    {
      title: "Song 2",
      artists: [{ name: "Artist 2" }],
      duration: 250,
    },
  ];

  resolve(songs);
});

printSongListPromise(songPromise);

// async function fetchData() {
//   try {
//     const response = await fetch("");
//     const data = await Response.json();
//     await wait(3000);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// async function main() {
//   try {
//     const result = await fetchData();
//     console.log("Result", result);
//   } catch (error) {
//     console.error("Error", error);
//   }
// }
// main();

// async function fetchData() {
//   try {
//     const response = await fetch("");
//     const data = await Response.json();
//     await wait(3000);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// Function using async/await
async function printSongListAsync(songPromise) {
  try {
    const songs = await songPromise;
    console.log("Song list:");
    songs.forEach((song) => {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artists[0].name}`);
      console.log(`Duration: ${song.duration}`);
      console.log("-----------------------------------");
    });
  } catch (error) {
    console.error("Error:", error);
  }
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

printSongListAsync(songPromise);

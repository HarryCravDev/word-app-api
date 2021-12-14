export class WordsService {

  public getWords(): { success: boolean, message: string, words: string[] } {
    // !! TASKS TODO
    // Get all words from DB and return to client.

    const data = [
        "harry",
        "ellie",
        "burger",
        "speaker",
        "cola",
        "USA",
        "Germany",
        "England",
        "France",
        "Spain",
        "Italy",
        "Brazil",
        "Peru",
        "Japan",
        "Nepal",
    ];

    return { success: true, message: "List of words.", words: data };
  }  

  public addWord(word: string): { success: boolean, message: string, words?: string[] } {

    let data = [
        "Only word in the array"
    ];

    data.push(word);

    // !! TASKS TODO
    // Check if word already exists in DB - reject if true.

    // Save word to db

    // Return list of words 

    return { success: true, message: "Word added.", words: data };
  }
}
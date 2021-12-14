import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { words } from "../dtos/word-data";
import { WordsService } from "../services/wordsService";
  
@Route("words")
export class WordsController extends Controller {

    @SuccessResponse("201", "Get words.")
    @Get()
    public async getWords(): Promise<{ success: boolean, message: string, words?: string[] }> {

        const res = await new WordsService().getWords();

        console.log("Testing : ", res.words[ Math.floor(Math.random() * res.words.length) ]);

        if(!res.success){
            this.setStatus(400); // set return status 201
            return res;
        }

        this.setStatus(201); // set return status 201
        return res;
    }

    @SuccessResponse("201", "Word added.")
    @Post()
    public async addWord(): Promise<any> {

        const res = { success: true, message: "words", word: words[2]};

        if(!res.success){
            this.setStatus(400); // set return status 201
            return res;
        }

        this.setStatus(201); // set return status 201
        return res;
    }
}
  
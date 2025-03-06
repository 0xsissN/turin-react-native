export class Singleton{
    public API: string = "https://67c4a4fcc4649b9551b4358e.mockapi.io/event"

    static instance: Singleton

    private constructor(){}

    static getInstance(){
        if(this.instance == null){
            this.instance = new Singleton()
        }

        return this.instance
    }
}
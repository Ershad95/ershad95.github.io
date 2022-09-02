export class DelayService{
    constructor() {
        
    }
    public delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}



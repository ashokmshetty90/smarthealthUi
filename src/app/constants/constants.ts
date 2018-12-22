const devlopmentMode = true;
const baseUrl = 'http://localhost:8080';

export class Constants {
    public static isDevMode(){
        return devlopmentMode;
    }

    public static getServerUrl(endpoint : string){
        if(devlopmentMode){
            return baseUrl + endpoint;
        }
        return endpoint;
    }
}

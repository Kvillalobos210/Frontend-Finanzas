export class User {
    id: number;
    dEmission:string;
    dPayment: string;
    qTotal_Bill: string;
    type_Interest_RateId: string;
    dDiscount_Date: string;
    type_Capitalizacion: string;
    numTotal_Retention: string;
    portfolioId: string;

    constructor(){
        this.id= 0;
        this.dEmission=""
        this.dPayment = "";
        this.qTotal_Bill = "";
        this.type_Interest_RateId="";
        this.dDiscount_Date="";
        this.type_Capitalizacion="";
        this.numTotal_Retention="";
        this.portfolioId="";
    }
    
}


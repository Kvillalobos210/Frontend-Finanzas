export class Bill {
    id: number;
    dEmission:string;
    dPayment: string;
    qTotal_Bill: number;
    type_Interest_RateId: number;
    dDiscount_Date: string;
    type_Capitalizacion: string;
    numTotal_Retention: number;
    portfolioId: number;

    
    constructor(){
        this.id= 0;
        this.dEmission='';
        this.dPayment ='';
        this.qTotal_Bill=0 ;
        this.type_Interest_RateId=0;
        this.dDiscount_Date='';
        this.type_Capitalizacion="";
        this.numTotal_Retention=0;
        this.portfolioId=0;
    }
    
}


export class ApiEndpoints {
    public static baseUrl:string = 'http://localhost:8080/api';
    public static baseUrl1:string = '/api';
    public static login:string = ApiEndpoints.baseUrl + '/auth/login';
    public static getSkus:string = ApiEndpoints.baseUrl + '/skus';
    public static updateSkusRank:string = ApiEndpoints.baseUrl + '/skus/updateSkuRanks';
    public static updateSkuCbConfigs:string = ApiEndpoints.baseUrl + '/skus/updateSkuCbConfigs';
    public static getSkuFeatures:string = ApiEndpoints.baseUrl + '/features/getSkuableFeatures';
    public static createSku:string = ApiEndpoints.baseUrl + '/skus/createSku';
    public static getSkuById:string = ApiEndpoints.baseUrl + '/skus/getSku';
    public static updateSku:string = ApiEndpoints.baseUrl + '/skus/updateSku';
    public static createBillableProduct:string = ApiEndpoints.baseUrl + '/features/createBillableProduct'
    public static getBillingProducts:string = ApiEndpoints.baseUrl + '/features/getBillableProductConfigs'
    public static getAllFordCars:string = 'http://localhost:8080/api/patient'

    public static getAllPatientDetails:string = ApiEndpoints.baseUrl + '/patient'
    public static addPatientDetails:string = ApiEndpoints.baseUrl + '/patient/create'
}

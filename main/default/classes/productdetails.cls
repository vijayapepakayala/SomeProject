public  class productdetails {
    @AuraEnabled(Cacheable = true)
    public static List<Product2> promethod(){
        List<Product2> products = [select Name,ProductCode,Type_OF_Products__c,Warranty_Start_date__c,Warranty_End_Date__c from Product2];
        return  products;
    }
        
}

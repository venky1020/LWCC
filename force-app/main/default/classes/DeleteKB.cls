public with sharing class DeleteKB {

    

    @AuraEnabled(cacheable=true)
    public static List<Knowledge__kav> getKB() {
        return [
            SELECT Id, ArticleNumber, Title, CreatedDate, ValidationStatus
            FROM Knowledge__kav          
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }

    @AuraEnabled
    public static String DeleteKBarticle(String recordid) {        
        system.debug('passed value:'+recordid);
        Knowledge__kav kb =  [SELECT Id,KnowledgeArticleId,ArticleCreatedById from Knowledge__kav where Id = :recordid];
        if(kb.ArticleCreatedById == userinfo.getuserid()){
            String articleid = string.valueof(kb.KnowledgeArticleId);
            KbManagement.PublishingService.deleteDraftArticle(articleid);
            return 'Article Successfully Deleted';
        } else{
            return 'You can only your own draft articles';
        }
       
    }
}
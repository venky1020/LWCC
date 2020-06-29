
public class Sessionid {

   
    @AuraEnabled
    public static string getSessionId() {
        return UserInfo.getSessionId();
    }
}
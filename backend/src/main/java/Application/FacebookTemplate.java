package Application;

import org.springframework.social.ApiBinding;
import org.springframework.social.facebook.api.*;
import org.springframework.web.client.RestOperations;

public interface FacebookTemplate extends GraphApi, ApiBinding {

    AchievementOperations achievementOperations();

    CommentOperations commentOperations();

    EventOperations eventOperations();

    FeedOperations feedOperations();

    FriendOperations friendOperations();

    GroupOperations groupOperations();

    LikeOperations likeOperations();

    MediaOperations mediaOperations();

    OpenGraphOperations openGraphOperations();

    PageOperations pageOperations();

    SocialContextOperations socialContextOperations();

    TestUserOperations testUserOperations();

    UserOperations userOperations();

    RestOperations restOperations();

    String getApplicationNamespace();

}


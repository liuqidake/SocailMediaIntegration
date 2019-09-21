package Application;

import org.springframework.social.twitter.api.*;
import org.springframework.web.client.RestOperations;

public interface Twitter {

    BlockOperations blockOperations();

    DirectMessageOperations directMessageOperations();

    FriendOperations friendOperations();

    GeoOperations geoOperations();

    ListOperations listOperations();

    SearchOperations searchOperations();

    StreamingOperations streamingOperations();

    TimelineOperations timelineOperations();

    UserOperations userOperations();

    RestOperations restOperations();
}
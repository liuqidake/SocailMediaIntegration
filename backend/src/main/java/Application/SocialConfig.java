//package Application;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Scope;
//import org.springframework.context.annotation.ScopedProxyMode;
//import org.springframework.core.env.Environment;
//import org.springframework.social.UserIdSource;
//import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
//import org.springframework.social.config.annotation.SocialConfigurer;
//import org.springframework.social.connect.Connection;
//import org.springframework.social.connect.ConnectionFactoryLocator;
//import org.springframework.social.connect.ConnectionRepository;
//import org.springframework.social.connect.UsersConnectionRepository;
//import org.springframework.social.facebook.api.Facebook;
//import org.springframework.social.facebook.api.impl.FacebookTemplate;
//import org.springframework.social.facebook.connect.FacebookConnectionFactory;
//import org.springframework.social.twitter.api.impl.TwitterTemplate;
//import org.springframework.social.twitter.connect.TwitterConnectionFactory;
//
////@Configuration
//public class SocialConfig implements SocialConfigurer {
//
//    @Override
//    public void addConnectionFactories(ConnectionFactoryConfigurer cfConfig, Environment env) {
//        cfConfig.addConnectionFactory(new TwitterConnectionFactory(
//                env.getProperty("twitter.consumerKey"),
//                env.getProperty("twitter.consumerSecret")));
//        cfConfig.addConnectionFactory(new FacebookConnectionFactory(
//                env.getProperty("facebook.clientId"),
//                env.getProperty("facebook.clientSecret")));
//    }
//
////    @Bean
////    @Scope(value="request", proxyMode= ScopedProxyMode.INTERFACES)
////    public Facebook facebook(ConnectionRepository connectionRepository) {
////        Connection<Facebook> facebook = connectionRepository.findPrimaryConnection(Facebook.class);
////        return facebook != null ? facebook.getApi() : null;
////    }
//
//
////    @Bean
////    @Scope(value="request", proxyMode=ScopedProxyMode.INTERFACES)
////    public Twitter twitter(ConnectionRepository connectionRepository) {
////        Connection<Twitter> twitter = connectionRepository.findPrimaryConnection(Twitter.class);
////        return twitter != null ? twitter.getApi() : new TwitterTemplate();
////    }
//
//    /**
//     * Callback method to enable creation of a {@link UserIdSource} that uniquely identifies the current user.
//     *
//     * @return the {@link UserIdSource}.
//     */
//    @Override
//    public UserIdSource getUserIdSource() {
//        return null;
//    }
//
//    /**
//     * Callback method to create an instance of {@link UsersConnectionRepository}.
//     * Will be used to create a request-scoped instance of {@link ConnectionRepository} for the current user.
//     *
//     * @param connectionFactoryLocator A {@link ConnectionFactoryLocator} to be used by the {@link UsersConnectionRepository}.
//     * @return An instance of {@link UsersConnectionRepository}.
//     */
//    @Override
//    public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator connectionFactoryLocator) {
//        return null;
//    }
//}
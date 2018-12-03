interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'uYS6R5IE4Q7pJirQq099qnIU77EifRL1',
  domain: 'cisc474wiki.auth0.com',
  callbackURL: 'http://localhost:4200/landing'
};

import {
  FlexItem,
  FlexLayout,
  Text,
  StackLayout,
  NavigationItem,
} from '@salt-ds/core';
import { NotificationIcon } from '@salt-ds/icons';
import { UserBadgeIcon } from '@salt-ds/icons';
import { VisibleIcon } from '@salt-ds/icons';

import './appHeaderStyle.css';
import { routes } from '../../constants/routes';

const appHeaderConstants = ['J.P Morgan', '|', 'Graphite'];
const appHeaderFeatures = [
  {
    feature: 'Request center',
    icon: <NotificationIcon size={1.3} className="appHeader-icon-class" />,
  },
  {
    feature: 'Demo Center',
    icon: <UserBadgeIcon size={1.3} className="appHeader-icon-class" />,
  },
  {
    feature: 'Martin',
    icon: <VisibleIcon size={1.3} className="appHeader-icon-class" />,
  },
];

const AppHeader = () => {

  return (
    <header className="appHeader-container">
      <FlexLayout justify="space-between">
        <StackLayout>
          <FlexLayout>
            {appHeaderConstants.map((item, index) => (
              <FlexItem key={index}>
                <Text as="h3" className="appHeader-text-class">
                  {item}
                </Text>
              </FlexItem>
            ))}
          </FlexLayout>
        </StackLayout>

        <StackLayout>
          <FlexLayout>
            {appHeaderFeatures.map((item, index) => (
              <FlexItem key={index}>
                <Text as="h4" className="appHeader-text-class">
                  {item?.icon}
                  {item?.feature}
                </Text>
              </FlexItem>
            ))}
          </FlexLayout>
        </StackLayout>
      </FlexLayout>

      {/* Tabs */}
      <StackLayout className="appHeader-tab-container">
        <FlexLayout>
          {routes.map((item: any) => (
            <FlexItem>
              <NavigationItem href={item?.url} className="appHeader-text-class" active={item?.url === `http://localhost:4200${window.location.pathname}` } >
                {item?.title}
              </NavigationItem>
            </FlexItem>
          ))}
        </FlexLayout>
      </StackLayout>
    </header>
  );
};
export default AppHeader;

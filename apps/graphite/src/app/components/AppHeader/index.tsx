import {
  FlexItem,
  FlexLayout,
  Text,
  StackLayout,
  NavigationItem,
} from "@salt-ds/core";

import "./appHeaderStyle.css";
import { routes } from "../../constants/routes";
import { appHeaderConstants, appHeaderFeatures } from "../../constants";
import Menubar from "../Menubar/Menubar"

const AppHeader = () => {
  const currentURL = window.location.href;

  return (
    <header className="appHeader-container">
      {/* Top Section: Header Text + Features */}
      <FlexLayout justify="space-between">
        {/* Left: Header Titles */}
        <StackLayout>
          <FlexLayout>
            {appHeaderConstants.map((label, index) => (
              <FlexItem key={`header-title-${index}`}>
                <Text as="h3" className="appHeader-text-class">
                  {label}
                </Text>
              </FlexItem>
            ))}
          </FlexLayout>
        </StackLayout>

        {/* Right: Feature Icons and Text */}
        <StackLayout>
          <FlexLayout>
            {appHeaderFeatures.map(({ icon, feature }, index) => (
              <FlexItem key={`header-feature-${index}`}>
                <Text as="h4" className="appHeader-text-class">
                  {icon}
                  {feature}
                </Text>
              </FlexItem>
            ))}
          </FlexLayout>
        </StackLayout>
      </FlexLayout>

      {/* Bottom Section: Navigation Tabs */}
      <StackLayout className="appHeader-tab-container">
        <FlexLayout>
          {routes.map(({ id, url, title }) => (
            <FlexItem key={`route-${id}`}>
              <NavigationItem
                href={url}
                className="appHeader-text-class"
                active={currentURL === url}
              >
                {title}
              </NavigationItem>
            </FlexItem>
          ))}
        </FlexLayout>
      </StackLayout>
      <Menubar/>
    </header>
  );
};

export default AppHeader;


// Group all icon imports together in a single line for cleaner structure
import { NotificationIcon, UserBadgeIcon, VisibleIcon } from "@salt-ds/icons";

// Constants used in the App Header (e.g., title or breadcrumb-like labels)
export const appHeaderConstants = ["J.P Morgan", "|", "Graphite"];

// Common class name for consistent icon styling
const iconClassName = "appHeader-icon-class";

// Array of feature items to display in the App Header with associated icons
export const appHeaderFeatures = [
  {
    feature: "Request center",
    icon: <NotificationIcon size={1.3} className={iconClassName} />,
  },
  {
    feature: "Demo Center",
    icon: <UserBadgeIcon size={1.3} className={iconClassName} />,
  },
  {
    feature: "Martin",
    icon: <VisibleIcon size={1.3} className={iconClassName} />,
  },
];

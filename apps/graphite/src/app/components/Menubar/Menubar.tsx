import {
    Text,
    Divider,
  } from "@salt-ds/core";
  import { SettingsIcon, ChevronLeftIcon, ChevronRightIcon } from "@salt-ds/icons";
  import { useRef} from "react";
  import "./GlobalTimeBar.css";
  
  const timeZones = [
    { city: "Singapore", time: "00:30:36", est: "10:50 EST" },
    { city: "Hong Kong", time: "00:30:36", est: "10:50 EST" },
    { city: "Malaysia", time: "00:30:36", est: "10:50 EST" },
    { city: "Brussels", time: "00:30:36", est: "10:50 EST" },
    { city: "Amsterdam", time: "00:30:36", est: "10:50 EST" },
    { city: "Bangalore", time: "00:30:36", est: "10:50 EST" },
    { city: "Amsterdam", time: "00:30:36", est: "10:50 EST" },
    { city: "Bangalore", time: "00:30:36", est: "10:50 EST" },
  ];
  
  export default function GlobalTimeBar() {
    const scrollRef = useRef<HTMLDivElement>(null);
  
    const scroll = (direction: "left" | "right") => {
      const container = scrollRef.current;
      if (container) {
        const scrollAmount = 300;
        container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      }
    };
  
    return (
      <>
        <div className="global-timebar-container">
          <SettingsIcon
            className="icon-settings"
            aria-label="Settings"
          />
  
          <ChevronLeftIcon
            className="icon-chevron icon-chevron-left"
            onClick={() => scroll("left")}
          />
  
          <div ref={scrollRef} className="scroll-container">
          {timeZones.map(({ city, time, est }, index) => (
            <div key={city} className="timezone-item">
              <Text styleAs="label" className="city-name">{city}</Text>
              <Text styleAs="label">↕</Text>
              <Text
                styleAs="label"
                className={`city-time ${
                  city === "Singapore" || city === "Hong Kong"
                    ? "pink-time"
                    : city === "Malaysia"
                    ? "yellow-time"
                    : "green-time"
                }`}
              >
                {time} {est}
              </Text>
              {index < timeZones.length - 1 && (
                <Divider orientation="vertical" className="divider-style" variant="primary" />
              )}
            </div>
          ))}
        </div>

  
          <ChevronRightIcon
            className="icon-chevron icon-chevron-right"
            onClick={() => scroll("right")}
          />
        </div>
  
        
      </>
    );
  }
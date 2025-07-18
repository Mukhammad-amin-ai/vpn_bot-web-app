import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Accordion = ({
  children,
  type = "single",
  collapsible = false,
  className = "",
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    const newOpenItems = new Set(openItems);
    if (type === "single") {
      if (newOpenItems.has(value)) {
        if (collapsible) newOpenItems.delete(value);
      } else {
        newOpenItems.clear();
        newOpenItems.add(value);
      }
    } else {
      if (newOpenItems.has(value)) {
        newOpenItems.delete(value);
      } else {
        newOpenItems.add(value);
      }
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`divide-y divide-gray-200 ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { openItems, toggleItem })
      )}
    </div>
  );
};

export const AccordionItem = ({
  children,
  value,
  className = "",
  openItems,
  toggleItem,
}) => {
  const isOpen = openItems?.has(value);

  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, isOpen, toggleItem })
      )}
    </div>
  );
};

export const AccordionTrigger = ({
  children,
  className = "",
  value,
  isOpen,
  toggleItem,
}) => {
  return (
    <button
      className={`flex w-full items-center justify-between py-4 text-left font-medium transition-all ${className}`}
      onClick={() => toggleItem(value)}
    >
      {children}
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

export const AccordionContent = ({ children, className = "", isOpen }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-96 pb-4" : "max-h-0"
      }`}
    >
      <div className={`pt-0 ${className}`}>{children}</div>
    </div>
  );
};

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg  bg-card text-card-foreground shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

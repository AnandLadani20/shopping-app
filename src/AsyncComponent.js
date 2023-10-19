import React, { useState, useEffect } from "react";

export default function asyncComponent(importComponent) {
  return function AsyncComponent(props) {
    const [component, setComponent] = useState(null);

    useEffect(() => {
      const loadComponent = async () => {
        const { default: component } = await importComponent();
        setComponent(component);
      };

      loadComponent();
    }, []);

    const C = component;

    return C ? <C {...props} /> : null;
  };
}

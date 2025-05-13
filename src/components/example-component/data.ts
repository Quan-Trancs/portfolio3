interface MenuItemType {
  id: string;
  title: string;
  url: string;
  description?: string;
}

interface ComponentDataType {
  title: string;
  subtitle: string;
  buttonText: string;
  menuItems: MenuItemType[];
  isAnimated: boolean;
  styles: {
    container: string;
    heading: string;
    subheading: string;
    button: string;
    menuList: string;
    menuItem: string;
  };
}

export const componentData: ComponentDataType = {
  title: "My Component Title",
  subtitle: "This is a subtitle for the component",
  buttonText: "Click Me",
  menuItems: [
    {
      id: "item1",
      title: "Home",
      url: "/",
      description: "Go to homepage",
    },
    {
      id: "item2",
      title: "Projects",
      url: "/projects",
      description: "View my projects",
    },
    {
      id: "item3",
      title: "Contact",
      url: "/contact",
      description: "Get in touch with me",
    },
  ],
  isAnimated: true,
  styles: {
    container:
      "relative flex flex-col items-center justify-center w-full px-4 py-8 md:px-6",
    heading: "text-4xl font-semibold mb-2 md:text-5xl lg:text-6xl",
    subheading: "text-lg text-muted-foreground mb-6",
    button:
      "px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors",
    menuList: "flex flex-col gap-4 w-full max-w-md",
    menuItem: "p-4 border rounded-md hover:bg-accent/10 transition-colors",
  },
};

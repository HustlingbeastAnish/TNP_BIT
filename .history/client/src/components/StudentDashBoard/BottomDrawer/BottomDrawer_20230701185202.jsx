import React from "react";

function BottomDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bottom_width, setbottom_width] = useState(60);
  const openDrawer = () => {
    console.log("clicked");
    if (isDrawerOpen === true) {
      setIsDrawerOpen(false);
    } else {
      setIsDrawerOpen(true);
    }

    if (bottom_width === 350) {
      setbottom_width(60);
    } else if (bottom_width === 60) {
      setbottom_width(350);
    }
  };
  return <div></div>;
}

export default BottomDrawer;
